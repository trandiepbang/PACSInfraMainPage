# PACSinfra website

Marketing site, docs and blog for PACSinfra. Built with Astro, Starlight (docs at `/docs`), Tailwind CSS and a small React island (theme toggle). The output is fully static.

## Local development

Requires Node 22.12 or later (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

At build time, `npm run build` lists every config value that still contains `TODO`.

## Editing pricing: `src/config/pricing.yaml`

Every price, tier, CTA, banner and pricing FAQ on the site comes from this file: the homepage teaser, `/pricing`, `/licence` and the meta descriptions.

- **Prices** are numbers (`price: 2500`). They are formatted from `currency` + `price`, e.g. `$2,500`. Don't write prices into components.
- **Tiers** render in the order listed. Add, remove or reorder them and the layout adapts to 1, 2 or 3 tiers. More than 3 fails the build.
- **`billing`** must be `one-time`, `yearly` or `monthly`.
- **`highlight: true`** gives a tier the accent border; `badge` adds a label such as "Most popular".
- **Founding offer:** set `foundingOffer.enabled: false` to hide the banner everywhere.
- **CTAs** are plain links (`url`) and can point to any payment page, booking page or `mailto:`. There is no payment SDK.

The file is validated with Zod (`src/config/schema.ts`). Unknown keys, missing fields and wrong types fail the build with the exact path, for example:

```
src/config/pricing.yaml failed validation:
✖ Unrecognized key: "prise"
  → at tiers[0]
```

## Editing site settings: `src/config/site.yaml`

Site name, canonical URL (used for canonical tags, the sitemap, robots.txt and Open Graph), tagline, default description, contact email, demo URL, booking URL and social links. Social `icon` must be one of `github`, `linkedin`, `x.com`, `mastodon` or `youtube`. The docs header uses the same links.

Other copy lives in:

| What | Where |
| --- | --- |
| Guarantees, feature list, pixel caveat | `src/data/product.ts` |
| Tech stack (`/technology`, homepage, Developers page) | `src/data/tech-stack.ts` |
| Use-case pages | `src/data/use-cases.ts` (one entry per page, shared template) |
| Navigation | `src/data/nav.ts` |
| Homepage FAQ | `src/pages/index.astro` |

## Adding a blog post

Create `src/content/blog/my-post.md` (or `.mdx`):

```md
---
title: My post
description: One sentence for the listing, RSS and meta description.
pubDate: 2026-11-01
author: Your name        # optional
draft: false             # drafts only show in `npm run dev`
---

Post body in Markdown.
```

The file name becomes the URL (`/blog/my-post`). The post is added to `/blog` and `/rss.xml` automatically.

## Adding a docs page

1. Create `src/content/docs/docs/my-page.md` with a `title` and `description` in the frontmatter. It will be served at `/docs/my-page/`.
2. Add it to the `sidebar` in `astro.config.ts`, e.g. `'docs/my-page'` inside the right group.

Starlight features such as asides (`:::note`, `:::caution`) work in Markdown. See https://starlight.astro.build.

## Regenerating favicons and the OG image

```bash
npm run brand:images
```

This reads `public/logo-mark.svg` and `src/config/site.yaml` and writes:

- `public/favicon-32.png` (32×32)
- `public/apple-touch-icon.png` (180×180, white background)
- `public/og-default.png` (1200×630: mark, name and tagline)

Run it again after changing the logo, site name or tagline, and commit the PNGs. `public/favicon.svg` is the main favicon and is not generated.

Known issue: on macOS, sharp's bundled text renderer ignores the requested font, so the OG image text renders in the system sans-serif rather than IBM Plex Sans. The script is set up to load IBM Plex Sans; this should work on Linux but has not been tested there yet.

## Content rules

- Never claim diagnostic use, FDA/CE clearance, "HIPAA compliant/certified", "GDPR compliant" or "anonymised". Use "de-identified" and "pseudonymised".
- Wherever de-identification is described, show the burned-in pixel caveat. In pages use `<PixelCaveat />`; in docs use a `:::caution` aside.
- British spelling: organisation, finalise, licence.

## Deploying to Cloudflare

The site is fully static. `wrangler.jsonc` tells Cloudflare to serve `dist/` as static assets. Keep that file: without it, `wrangler deploy` auto-adds the `@astrojs/cloudflare` server adapter, and the build fails.

### Workers (current Cloudflare default)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, then pick this repository.
2. Build settings:
   - Build command: leave empty. `wrangler.jsonc` runs `npm run build` before each deploy; filling it in as well just builds twice.
   - Deploy command: `npx wrangler deploy`
   - Environment variable: `NODE_VERSION` = `22`
3. The Worker name in the dashboard must match `name` in `wrangler.jsonc` (`pacsinfra-website`). Change one of them so they match.
4. Add your domain under the Worker's **Settings → Domains & Routes**, and make sure `url` in `src/config/site.yaml` matches it.

### Pages (alternative)

**Workers & Pages → Create → Pages → Connect to Git**. Framework preset **Astro**, build command `npm run build`, output directory `dist`, `NODE_VERSION` = `22`.
