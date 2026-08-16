# cr-web | Conscious-Robots.com website

Raul's personal website and blog, built with Astro and published at
[conscious-robots.com](https://conscious-robots.com/).

The website is content-first, bilingual, and optimized for static hosting. Its
source repository is [`raul-arrabales/cr-web`](https://github.com/raul-arrabales/cr-web).

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
- Pages: `/{lang}/pages/{slug}/`

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

## Hosting and Deployment

GitHub Pages is the production hosting target. Cloudflare Pages remains enabled
as a secondary automatic deployment:

```text
GitHub repository (main)
        |
        +--> GitHub Actions --> GitHub Pages --> conscious-robots.com
        |
        +--> Cloudflare Pages --> cr-web.pages.dev
```

The move to GitHub Pages reduces reliance on shared Cloudflare infrastructure
after the Cloudflare-hosted site became temporarily unreachable through some
Spanish ISPs, including Movistar.

### GitHub Pages (production)

The [GitHub Pages workflow](.github/workflows/deploy-github-pages.yml):

- Runs automatically on pushes to `main` and supports manual dispatch
- Uses Node.js `22.12.0`
- Builds Astro with `https://conscious-robots.com` as the production `site` URL
- Uploads `dist/` and deploys it with the official GitHub Pages Actions

GitHub Pages manages the custom domain and its HTTPS certificate.

### DNS

Cloudflare remains the authoritative DNS provider, but the website records are
**DNS only**. Web traffic does not pass through the Cloudflare proxy.

The apex domain uses GitHub Pages' A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

The `www` hostname uses:

```text
CNAME -> raul-arrabales.github.io
```

### Cloudflare Pages (secondary)

Cloudflare Pages continues to deploy automatically from the repository and is
available at [cr-web.pages.dev](https://cr-web.pages.dev/). Its build settings
are:

- Framework preset: `Astro`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Node version: `22.12.0`

The repository's `wrangler.toml` also records `dist/` as the Pages output
directory for Wrangler-based workflows. Keep Cloudflare dashboard settings and
this file aligned if the secondary deployment changes.

## Notes

- Favor static-friendly changes and minimal client-side JavaScript.
- Preserve migrated content fidelity first, then refine formatting and presentation incrementally.
- Before shipping meaningful content or template changes, run `npm run build`.
