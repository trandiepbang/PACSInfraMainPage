import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { findTodos, parsePricing, parseSite } from './src/config/schema';

// Validate both YAML files before anything else runs, so a typo fails fast with a clear message.
const site = parseSite(readFileSync('./src/config/site.yaml', 'utf8'));
const pricing = parsePricing(readFileSync('./src/config/pricing.yaml', 'utf8'));

const todos = [
  ...findTodos(site).map((p) => `site.yaml: ${p}`),
  ...findTodos(pricing).map((p) => `pricing.yaml: ${p}`),
];
if (todos.length) {
  console.warn(`\n[pacsinfra] ${todos.length} config values still contain TODO:\n  ${todos.join('\n  ')}\n`);
}

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: site.name,
      description: site.description,
      favicon: '/favicon.svg',
      disable404Route: true,
      customCss: ['./src/styles/starlight.css'],
      components: {
        SiteTitle: './src/components/starlight/SiteTitle.astro',
      },
      social: site.social,
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'meta', attrs: { property: 'og:image', content: `${site.url}/og-default.png` } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: `${site.url}/og-default.png` } },
      ],
      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Introduction', slug: 'docs' },
            'docs/installation',
            'docs/configuration',
            'docs/upgrading',
          ],
        },
        {
          label: 'Access control',
          items: ['docs/organisations-and-roles', 'docs/permissions', 'docs/break-the-glass'],
        },
        {
          label: 'Data protection',
          items: ['docs/de-identification', 'docs/audit-trail'],
        },
        {
          label: 'Using PACSinfra',
          items: ['docs/reports', 'docs/rest-api'],
        },
      ],
    }),
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
