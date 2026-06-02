# AGENTS.md

## Purpose

This repository powers a unified personal website and blog built with Astro. It consolidates content from two legacy WordPress sites, one in English and one in Spanish, into a single static site.

Treat this repo as a content-first, static-first project. The priorities are:

- Clean, modern, minimal design
- Fast load times
- Preservation of historical posts and pages
- A bilingual structure that keeps English and Spanish content manageable over time
- A deployment shape that stays friendly to Cloudflare hosting and caching

This guide is for both human contributors and coding agents working in the repo.

## Current Repo Truth

The content model currently uses two Astro content collections defined in [src/content.config.ts](/home/array/projects/web/cr-web/src/content.config.ts):

- `blog`
- `pages`

Canonical content paths:

- Blog posts: `src/content/blog/{lang}/{year}/{slug}/index.md`
- Evergreen/static pages: `src/content/pages/{lang}/{year}/{slug}/index.md`

Current route shape:

- Blog posts render at `/{lang}/blog/{year}/{slug}/`
- Pages render at `/{lang}/pages/{year}/{slug}/`

Language handling:

- `en` and `es` are separate localized entries
- Do not assume one language is a direct translation of the other
- Treat each localized entry as independently managed unless an explicit relationship is documented

Assets:

- Legacy/static assets are currently preserved under `public/legacy-images/...`
- Some migrated entries also include content-local images beside the Markdown file
- Keep old image references reachable whenever possible during migration work

## Content Conventions

Prefer preserving migrated content fidelity first. Improve formatting, metadata, and presentation incrementally once the content is safely represented in Astro.

Always preserve:

- Original publication date when known
- Stable, readable slug structure
- Existing language separation
- Important internal links and media references

Avoid unnecessary slug churn after content is published, since that risks breaking historic links.

### Frontmatter Contract

Match the collection schema already enforced in `src/content.config.ts`.

`blog` entries require:

- `title: string`
- `date: date`
- `categories?: string[]`
- `tags?: string[]`
- `coverImage?: string`

`pages` entries require:

- `title: string`
- `date?: date`

If you add new frontmatter fields in the future, update the collection schema first and keep the contract documented here and in code.

## Migration Guidance

This repo is in an active WordPress-to-Markdown migration phase. Contributors should normalize imported content into clean Markdown without over-processing it.

When migrating content:

- Convert exported WordPress content into readable Markdown
- Preserve titles, dates, and language-specific placement
- Fix broken asset paths
- Keep internal links working when feasible
- Prefer predictable folder names and stable URLs
- Leave room for later editorial cleanup instead of rewriting historical content aggressively

Image handling defaults:

- Keep legacy assets reachable if posts already depend on them
- Prefer content-local images only when they improve organization and do not break existing references
- Avoid adding large, unoptimized media unless it is necessary for the page

Short QA checklist for migrated entries:

- Route renders successfully
- Title and date are correct
- Images load
- Markdown formatting is not obviously broken
- Links are reasonable and not clearly malformed

## Design And Performance Defaults

The intended visual direction is clean, modern, minimal, typography-led, and content-first.

When building UI or page structure:

- Prefer semantic HTML and accessible markup
- Keep layouts responsive and simple
- Use shared layouts and components instead of duplicating markup
- Favor restrained visual complexity over decorative excess

Performance is a product feature in this repo:

- Minimize client-side JavaScript
- Prefer Astro’s static rendering strengths
- Keep assets lightweight
- Build pages that remain cache-friendly for Cloudflare

## Deployment Notes

Cloudflare is the intended deployment target for this site.

At the time of writing, the repo does not yet show explicit Cloudflare adapter or deployment wiring in committed config. Do not assume deployment-specific behavior until that configuration is added. Favor implementation choices that remain portable, static-friendly, and easy to cache.

## Working Norms

Current baseline from [package.json](/home/array/projects/web/cr-web/package.json):

- Node: `>=22.12.0`
- Astro: `^6.4.2`

Common commands:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

Before shipping meaningful content or template changes, validate them locally with a build.

## Validation Scenarios

Changes should keep the following working:

- A new blog post under each language follows the documented folder and frontmatter rules
- A migrated evergreen page such as CV, books, publications, or conferences renders under the `pages` route
- Legacy image references used by imported Markdown still resolve
- The homepage and language indexes remain coherent with the bilingual site structure
- `npm run build` succeeds after representative changes
