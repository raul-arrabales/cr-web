# cr-web

Raul's personal website and blog built with Astro.

The website is content-first, bilingual and optimized for static hosting.

It deploys to both Github Pages and Cloudfare Pages: 
- (raul-arrabales.github.io/cr-web/)[https://raul-arrabales.github.io/cr-web/] (GH Pages)
- (conscious-robots.com)[https://conscious-robots.com/] (DNS -> GH Pages)
- (cr-web.pages.dev)[https://cr-web.pages.dev/] (Cloudfare)


## Stack

- Astro `^6.4.2`
- Node `>=22.12.0`
- Static output in `dist/`

## Content Model

Current Astro content collections:

- `blog`
- `pages`

Canonical content paths:

- Blog posts: `src/content/blog/{lang}/{year}/{slug}/index.md`
- Pages: `src/content/pages/{lang}/{slug}/index.md`

Current route shape:

- Blog posts: `/{lang}/blog/{year}/{slug}/`
- Pages: `/{lang}/pages/{year}/{slug}/`

Supported languages:

- `en`
- `es`

Localized entries are managed independently unless a relationship is explicitly documented.

## Local Development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the built site locally:

```sh
npm run preview
```

## Cloudflare Pages

This project currently deploys cleanly as a static Astro site.

Recommended Cloudflare Pages settings:

- Framework preset: `Astro`
- Production branch: `main` or your chosen default branch
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

Optional environment setting:

- `NODE_VERSION=22.12.0`

The repo includes [wrangler.toml](/home/array/projects/web/cr-web/wrangler.toml) to document the Pages output directory for Wrangler-based workflows.

Important:

- If you use a Cloudflare dashboard-connected Git deployment, keep the dashboard build settings aligned with this repo.
- If you later add Pages Functions or bindings, update `wrangler.toml` intentionally and treat it as part of your deployment source of truth.

## Notes

- Favor static-friendly changes and minimal client-side JavaScript.
- Preserve migrated content fidelity first, then refine formatting and presentation incrementally.
- Before shipping meaningful content or template changes, run `npm run build`.
