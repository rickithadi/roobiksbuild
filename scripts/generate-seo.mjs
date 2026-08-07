// Generates public/sitemap.xml and public/robots.txt from a single source of truth
// (VITE_SITE_URL + the actual blog/project slugs), so the production domain and route
// list only ever need to be edited in one place. Runs automatically before every build
// via the "prebuild" npm script.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function loadEnvSiteUrl() {
  for (const file of [".env.local", ".env"]) {
    const p = path.join(root, file);
    try {
      const text = readFileSync(p, "utf8");
      const match = text.match(/^VITE_SITE_URL\s*=\s*(.+)$/m);
      if (match) return match[1].trim().replace(/^["']|["']$/g, "").replace(/\/$/, "");
    } catch {
      // file doesn't exist — try the next one
    }
  }
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL.replace(/\/$/, "");
  return "https://roobiksbuild.vercel.app";
}

function getBlogSlugs() {
  const dir = path.join(root, "src/content/blog");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const text = readFileSync(path.join(dir, f), "utf8");
      const match = text.match(/^slug:\s*"(.+)"$/m);
      return match?.[1];
    })
    .filter(Boolean);
}

function getProjectSlugs() {
  const text = readFileSync(path.join(root, "src/lib/site.ts"), "utf8");
  const block = text.match(/export const projects: Project\[\] = \[([\s\S]*?)\n\];/);
  if (!block) return [];
  return [...block[1].matchAll(/slug:\s*"(.+?)"/g)].map((m) => m[1]);
}

const siteUrl = loadEnvSiteUrl();
const blogSlugs = getBlogSlugs();
const projectSlugs = getProjectSlugs();

const staticRoutes = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/projects", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
];

const dynamicRoutes = [
  ...projectSlugs.map((slug) => ({ path: `/projects/${slug}`, changefreq: "yearly", priority: "0.6" })),
  ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, changefreq: "yearly", priority: "0.6" })),
];

const urls = [...staticRoutes, ...dynamicRoutes]
  .map(
    (r) => `  <url>
    <loc>${siteUrl}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);
writeFileSync(path.join(root, "public/robots.txt"), robots);

console.log(`Generated sitemap.xml + robots.txt for ${siteUrl} (${staticRoutes.length + dynamicRoutes.length} URLs)`);
