/**
 * Generates public/sitemap.xml from App routes + solution slugs.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE_URL = "https://tech2globe.ai";
const LASTMOD = new Date().toISOString().slice(0, 10);

/** Paths from App.tsx (excludes /thank-you — not indexable). */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/hire-ai-developer", priority: "0.9", changefreq: "weekly" },
  { path: "/hire-ai-developers", priority: "0.9", changefreq: "weekly" },
  { path: "/hire/lovable/developer", priority: "0.9", changefreq: "weekly" },
  { path: "/hire/openai/developer", priority: "0.9", changefreq: "weekly" },
  { path: "/hire/emergent/developer", priority: "0.9", changefreq: "weekly" },
  { path: "/hire-caffeine-developer", priority: "0.9", changefreq: "weekly" },
  { path: "/hire/us", priority: "0.9", changefreq: "weekly" },
  { path: "/industries", priority: "0.8", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { path: "/about/us", priority: "0.8", changefreq: "monthly" },
  { path: "/ai-expert", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/our-team", priority: "0.7", changefreq: "monthly" },
];

/** Slugs from solutions.ts registry — keep in sync when adding solutions. */
const SOLUTION_SLUGS = [
  "ai-powered-data-analytics",
  "ai-automation",
  "cloud-migration",
  "custom-ai-development",
  "predictive-ai-analytics",
  "hire-lovable-ai-developer",
  "hire-openai-developer",
  "hire-emergent-ai-developer",
  "hire-caffeine-ai-developer",
  "hire-ai-developers",
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function locFor(path) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

function urlEntry({ path, priority, changefreq }) {
  return `  <url>
    <loc>${escapeXml(locFor(path))}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...STATIC_ROUTES.map(urlEntry),
  ...SOLUTION_SLUGS.map((slug) =>
    urlEntry({
      path: `/solutions/${slug}`,
      priority: "0.8",
      changefreq: "monthly",
    }),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const root = dirname(fileURLToPath(import.meta.url));
const outPath = join(root, "..", "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`);
