import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { cleanMarkdownText, getPostExcerpt } from "../../lib/blog";
import { languages, type Lang } from "../../lib/site";

type SearchIndexItem = {
  title: string;
  href: string;
  type: "post" | "page";
  date?: string;
  text: string;
  excerpt: string;
  tags?: string[];
  categories?: string[];
};

export function getStaticPaths() {
  return languages.map(({ code }) => ({
    params: { lang: code },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;

  const posts = await getCollection("blog", ({ id }) => id.startsWith(`${lang}/`));
  const pages = await getCollection("pages", ({ id }) => id.startsWith(`${lang}/`));

  const postItems: SearchIndexItem[] = posts.map((post) => {
    const [, year, slug] = post.id.split("/");

    return {
      title: post.data.title,
      href: `/${lang}/blog/${year}/${slug}/`,
      type: "post",
      date: post.data.date.toISOString(),
      text: cleanMarkdownText(post.body),
      excerpt: getPostExcerpt(post.body, 24),
      tags: post.data.tags,
      categories: post.data.categories,
    };
  });

  const pageItems: SearchIndexItem[] = pages.map((page) => {
    const [, slug] = page.id.split("/");

    return {
      title: page.data.title,
      href: `/${lang}/pages/${slug}/`,
      type: "page",
      date: page.data.date?.toISOString(),
      text: cleanMarkdownText(page.body),
      excerpt: getPostExcerpt(page.body, 24),
    };
  });

  const items = [...postItems, ...pageItems].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;

    return bTime - aTime || a.title.localeCompare(b.title, lang);
  });

  return new Response(JSON.stringify(items), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
