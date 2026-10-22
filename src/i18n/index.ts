// Locales for the marketing pages. English lives at the root; Traditional Chinese under /zh-tw.
// Docs, blog and legal pages are English only: links to them stay unprefixed in both languages.

export const locales = ['en', 'zh-tw'] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { en: 'en-GB', 'zh-tw': 'zh-Hant-TW' };
export const ogLocale: Record<Locale, string> = { en: 'en_GB', 'zh-tw': 'zh_TW' };
export const localeName: Record<Locale, string> = { en: 'English', 'zh-tw': '繁體中文' };

const PREFIX = '/zh-tw';

/** Pages that exist in both languages, as English paths without a trailing slash. */
const translated = new Set([
  '/',
  '/security',
  '/technology',
  '/how-it-works',
  '/pricing',
  '/contact',
  '/use-cases/clinics',
  '/use-cases/research',
  '/use-cases/developers',
  '/privacy',
  '/terms',
  '/refund',
  '/licence',
]);

const trim = (path: string) => path.replace(/\/+$/, '') || '/';

export function getLocale(url: URL): Locale {
  return url.pathname === PREFIX || url.pathname.startsWith(`${PREFIX}/`) ? 'zh-tw' : 'en';
}

/** The English path for any page, with the locale prefix removed. */
export function stripLocale(pathname: string): string {
  return trim(pathname.startsWith(PREFIX) ? pathname.slice(PREFIX.length) : pathname);
}

export const isTranslated = (pathname: string) => translated.has(stripLocale(pathname));

/** Page paths end in a slash, matching the built `dir/index.html` files and the canonical URLs, so
 * a link never costs a redirect. Files (`/rss.xml`) and external links are left alone. */
export function withSlash(href: string): string {
  if (!href.startsWith('/')) return href;
  const [path, hash] = href.split('#');
  const last = path.split('/').pop() ?? '';
  const slashed = path.endsWith('/') || last.includes('.') ? path : `${path}/`;
  return hash ? `${slashed}#${hash}` : slashed;
}

/** Point an English href at the right language. English-only pages keep their English path. */
export function localizePath(href: string, locale: Locale): string {
  if (!href.startsWith('/')) return href;
  const [path, hash] = href.split('#');
  const english = trim(path);
  const localized =
    locale === 'en' || !translated.has(english) ? english : english === '/' ? PREFIX : `${PREFIX}${english}`;
  return withSlash(hash ? `${localized}#${hash}` : localized);
}

/** Where the language switcher goes: the same page in the other language, or its home page. */
export function alternatePath(pathname: string, target: Locale): string {
  const english = stripLocale(pathname);
  return translated.has(english) ? localizePath(english, target) : localizePath('/', target);
}
