/**
 * Fails the build if any prerendered HTML still contains wrong (homepage-only) SEO.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { listPrerenderRoutes, loadSeoConfig, resolveSeoForPath } from "./seo-html.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const distDir = join(root, "..", "dist");

function htmlFileForRoute(routePath) {
  if (routePath === "/") return join(distDir, "index.html");
  return join(distDir, ...routePath.replace(/^\//, "").split("/"), "index.html");
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<");
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return decodeHtmlEntities(m?.[1] ?? "");
}

function extractDescription(html) {
  const m = html.match(
    /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*\/?>/i,
  );
  return decodeHtmlEntities(m?.[1] ?? "");
}

const seo = loadSeoConfig();
const homeTitle = seo.default.title;
const errors = [];

for (const routePath of listPrerenderRoutes()) {
  const file = htmlFileForRoute(routePath);
  const { config } = resolveSeoForPath(routePath);

  if (!existsSync(file)) {
    errors.push(`Missing prerender file: ${file}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const title = extractTitle(html);

  if (!title) {
    errors.push(`${routePath}: empty <title> in ${file}`);
    continue;
  }

  if (title !== config.title) {
    errors.push(
      `${routePath}: expected title "${config.title}" but found "${title}"`,
    );
  }

  if (routePath !== "/" && title === homeTitle) {
    errors.push(
      `${routePath}: still using homepage title (prerender injection likely failed)`,
    );
  }

  const description = extractDescription(html);
  if (description !== config.description) {
    errors.push(
      `${routePath}: meta description mismatch (expected from pageSeo.json)`,
    );
  }
}

if (errors.length > 0) {
  console.error("[verify-prerender-seo] FAILED:\n");
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

const count = listPrerenderRoutes().length;
console.log("");
console.log("  ┌─ SEO verification passed ──────────────────────────");
console.log(`  │  Routes checked: ${count}`);
console.log("  │  Each dist/<route>/index.html has unique title + description");
console.log("  └──────────────────────────────────────────────────");
console.log("");
