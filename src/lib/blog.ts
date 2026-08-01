export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  cover: string;
  content: string;
}

const raw = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/** Hand-rolled frontmatter parser — avoids gray-matter, which depends on Node's
 *  Buffer and breaks when bundled for the browser. Our frontmatter is flat
 *  `key: "value"` pairs only, so a line-based parser is sufficient. */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, frontmatter, content] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split("\n")) {
    if (!line.trim()) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1");
    data[key] = value;
  }
  return { data, content: content.trim() };
}

export const posts: BlogPost[] = Object.values(raw)
  .map((src) => {
    const { data, content } = parseFrontmatter(src);
    return { ...(data as unknown as Omit<BlogPost, "content">), content };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
