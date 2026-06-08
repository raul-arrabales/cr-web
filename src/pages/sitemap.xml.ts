import { getCollection } from "astro:content";
import { getBlogPostRoute } from "../lib/blog";
import { sectionRoutes, siteUrl } from "../lib/site";

export const prerender = true;

type SitemapEntry = {
  loc: string;
  lastmod?: string;
};

function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

function toLastMod(date: Date) {
  return date.toISOString();
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const pages = await getCollection("pages");
  const posts = await getCollection("blog");

  const entries: SitemapEntry[] = [
    { loc: toAbsoluteUrl("/") },
    { loc: toAbsoluteUrl("/en/") },
    { loc: toAbsoluteUrl("/es/") },
    { loc: toAbsoluteUrl(sectionRoutes.en.blog) },
    { loc: toAbsoluteUrl(sectionRoutes.es.blog) },
    ...pages.map((page) => {
      const [lang, slug] = page.id.split("/");

      return {
        loc: toAbsoluteUrl(`/${lang}/pages/${slug}/`),
        lastmod: page.data.date ? toLastMod(page.data.date) : undefined,
      };
    }),
    ...posts.map((post) => {
      const route = getBlogPostRoute(post);

      return {
        loc: toAbsoluteUrl(route.href),
        lastmod: toLastMod(post.data.date),
      };
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `
    <lastmod>${entry.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
