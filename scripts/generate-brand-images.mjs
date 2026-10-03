// Generates raster brand assets in /public from logo-mark.svg and site.yaml.
// Run: npm run brand:images   (re-run after changing the logo, name or tagline)
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inflateSync } from 'node:zlib';
import { parse } from 'yaml';

const root = fileURLToPath(new URL('..', import.meta.url));

// @fontsource ships WOFF only; libvips needs TTF. Unpack WOFF 1.0 into a TTF (it is just
// zlib-compressed tables with a different header).
function woffToTtf(woff) {
  const numTables = woff.readUInt16BE(12);
  const headerSize = 12 + numTables * 16;
  const tables = [];
  for (let i = 0; i < numTables; i++) {
    const e = 44 + i * 20;
    const [tag, offset, compLength, origLength, checksum] = [
      woff.readUInt32BE(e), woff.readUInt32BE(e + 4), woff.readUInt32BE(e + 8),
      woff.readUInt32BE(e + 12), woff.readUInt32BE(e + 16),
    ];
    const raw = woff.subarray(offset, offset + compLength);
    tables.push({ tag, checksum, data: compLength < origLength ? inflateSync(raw) : raw });
  }
  const pad = (n) => (n + 3) & ~3;
  const out = Buffer.alloc(headerSize + tables.reduce((n, t) => n + pad(t.data.length), 0));
  const flavor = woff.readUInt32BE(4);
  const log2 = Math.floor(Math.log2(numTables));
  out.writeUInt32BE(flavor, 0);
  out.writeUInt16BE(numTables, 4);
  out.writeUInt16BE(16 * 2 ** log2, 6);
  out.writeUInt16BE(log2, 8);
  out.writeUInt16BE(numTables * 16 - 16 * 2 ** log2, 10);
  let offset = headerSize;
  tables.forEach((t, i) => {
    const e = 12 + i * 16;
    out.writeUInt32BE(t.tag, e);
    out.writeUInt32BE(t.checksum, e + 4);
    out.writeUInt32BE(offset, e + 8);
    out.writeUInt32BE(t.data.length, e + 12);
    t.data.copy(out, offset);
    offset += pad(t.data.length);
  });
  return out;
}

// Make the TTFs visible to fontconfig before sharp (libvips) loads.
const fontDir = mkdtempSync(join(tmpdir(), 'pacsinfra-fonts-'));
const fontFiles = {};
for (const weight of [400, 700]) {
  const woff = readFileSync(`${root}node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-${weight}-normal.woff`);
  fontFiles[weight] = join(fontDir, `IBMPlexSans-${weight}.ttf`);
  writeFileSync(fontFiles[weight], woffToTtf(woff));
}
writeFileSync(
  join(fontDir, 'fonts.conf'),
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${fontDir}</dir><cachedir>${fontDir}</cachedir></fontconfig>`,
);
process.env.FONTCONFIG_FILE = join(fontDir, 'fonts.conf');
const { default: sharp } = await import('sharp');
const pub = (f) => `${root}public/${f}`;
const site = parse(readFileSync(`${root}src/config/site.yaml`, 'utf8'));
const mark = readFileSync(pub('logo-mark.svg'));
const font = (w) => fontFiles[w];

const INK = '#16202A';
const ACCENT = '#0F6E75';
const BG = '#F4F6F7';

const renderMark = (size) => sharp(mark, { density: 72 * (size / 48) * 2 }).resize(size, size).png().toBuffer();

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Text rendered with IBM Plex Sans via Pango. */
const text = (markup, { width, weight = 400, dpi = 72 }) =>
  sharp({ text: { text: markup, font: 'IBM Plex Sans', fontfile: font(weight), width, dpi, rgba: true, wrap: 'word' } })
    .png()
    .toBuffer();

// favicon-32.png: transparent background
await sharp(await renderMark(32)).toFile(pub('favicon-32.png'));

// apple-touch-icon.png: 180x180, white background, mark centred with padding
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#FFFFFF' } })
  .composite([{ input: await renderMark(132), gravity: 'center' }])
  .flatten({ background: '#FFFFFF' })
  .png()
  .toFile(pub('apple-touch-icon.png'));

// og-default.png: 1200x630, mark + wordmark + tagline
const name = site.name.match(/^(PACS)(.*)$/);
const wordmark = name
  ? `<span foreground="${INK}" weight="normal">${escape(name[1])}</span><span foreground="${ACCENT}" weight="bold">${escape(name[2])}</span>`
  : `<span foreground="${INK}">${escape(site.name)}</span>`;

const [markImg, title, tagline] = await Promise.all([
  renderMark(140),
  text(`<span size="88pt">${wordmark}</span>`, { width: 900, weight: 700 }),
  text(`<span foreground="${INK}" size="40pt">${escape(site.tagline)}</span>`, { width: 1000 }),
]);

await sharp({ create: { width: 1200, height: 630, channels: 4, background: BG } })
  .composite([
    { input: Buffer.from(`<svg width="1200" height="630"><rect x="0" y="0" width="1200" height="12" fill="${ACCENT}"/></svg>`), top: 0, left: 0 },
    { input: markImg, top: 150, left: 100 },
    { input: title, top: 170, left: 270 },
    { input: tagline, top: 360, left: 100 },
  ])
  .flatten({ background: BG })
  .png()
  .toFile(pub('og-default.png'));

console.log('Wrote public/favicon-32.png, public/apple-touch-icon.png, public/og-default.png');
