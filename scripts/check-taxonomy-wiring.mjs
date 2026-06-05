import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const checks = [
  {
    file: "src/components/BlogTaxonomyBrowser.astro",
    includes: ['import TaxonomyChip from "./TaxonomyChip.astro";', "initTaxonomyAccordions"],
  },
  {
    file: "src/pages/[lang]/blog/[...page].astro",
    includes: ['import BlogTaxonomyBrowser from "../../../components/BlogTaxonomyBrowser.astro";', "getBlogTaxonomy"],
  },
  {
    file: "src/pages/[lang]/search/index.astro",
    includes: ["getBlogTaxonomy(posts, lang)"],
  },
  {
    file: "src/lib/blog.ts",
    includes: ["export function getTaxonomyCounts", "export function getBlogTaxonomy"],
  },
];

for (const check of checks) {
  const source = await readFile(resolve(check.file), "utf8");

  for (const snippet of check.includes) {
    if (!source.includes(snippet)) {
      throw new Error(`Missing expected snippet in ${check.file}: ${snippet}`);
    }
  }
}

console.log("Taxonomy wiring looks consistent.");
