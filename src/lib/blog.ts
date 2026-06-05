import type { CollectionEntry } from "astro:content";
import type { Lang } from "./site";

export type BlogPostRoute = {
  lang: Lang;
  year: string;
  slug: string;
  href: string;
};

export type BlogPostListItem = BlogPostRoute & {
  title: string;
  date: Date;
  excerpt: string;
  categories: string[];
  tags: string[];
};

export type TaxonomyCount = {
  slug: string;
  count: number;
};

export function cleanMarkdownText(body: string) {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^---[\s\S]*?---/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_>#`~=-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getPostExcerpt(body: string, maxWords = 14) {
  const cleaned = cleanMarkdownText(body);

  const words = cleaned.split(" ").filter(Boolean);
  const excerpt = words.slice(0, maxWords).join(" ");

  return words.length > maxWords ? `${excerpt}…` : excerpt;
}

export function getBlogPostRoute(post: CollectionEntry<"blog">): BlogPostRoute {
  const [lang, year, slug] = post.id.split("/") as [Lang, string, string];

  return {
    lang,
    year,
    slug,
    href: `/${lang}/blog/${year}/${slug}/`,
  };
}

export function toBlogPostListItem(
  post: CollectionEntry<"blog">,
  excerptWords = 14,
): BlogPostListItem {
  const route = getBlogPostRoute(post);

  return {
    ...route,
    title: post.data.title,
    date: post.data.date,
    excerpt: getPostExcerpt(post.body, excerptWords),
    categories: post.data.categories ?? [],
    tags: post.data.tags ?? [],
  };
}

function getTaxonomyCounts(
  posts: CollectionEntry<"blog">[],
  taxonomy: "categories" | "tags",
): TaxonomyCount[] {
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const value of post.data[taxonomy] ?? []) {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
}

export function getCategoryCounts(posts: CollectionEntry<"blog">[], lang: Lang) {
  return getTaxonomyCounts(
    posts.filter((post) => getBlogPostRoute(post).lang === lang),
    "categories",
  );
}

export function getSearchTaxonomy(posts: CollectionEntry<"blog">[], lang: Lang) {
  const langPosts = posts.filter((post) => getBlogPostRoute(post).lang === lang);

  return {
    categories: getTaxonomyCounts(langPosts, "categories"),
    tags: getTaxonomyCounts(langPosts, "tags"),
  };
}

export function filterPostsByCategory(posts: CollectionEntry<"blog">[], category: string) {
  return posts.filter((post) => (post.data.categories ?? []).includes(category));
}
