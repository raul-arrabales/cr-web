export function getPostExcerpt(body: string, maxWords = 14) {
  const cleaned = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_>#`~=-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = cleaned.split(" ").filter(Boolean);
  const excerpt = words.slice(0, maxWords).join(" ");

  return words.length > maxWords ? `${excerpt}…` : excerpt;
}
