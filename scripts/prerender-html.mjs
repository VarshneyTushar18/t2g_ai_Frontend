/**
 * Post-build: writes dist/<route>/index.html with per-page <title> and meta tags.
 * Run automatically via: npm run build
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { injectSeo, loadSeoConfig } from "./seo-html.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const distDir = join(root, "..", "dist");

if (!existsSync(join(distDir, "index.html"))) {
  console.error("[prerender] dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const seo = loadSeoConfig();
const baseHtml = readFileSync(join(distDir, "index.html"), "utf8");

function writeRouteHtml(routePath, config) {
  const html = injectSeo(baseHtml, config);
  const segments =
    routePath === "/" ? [] : routePath.replace(/^\//, "").split("/");
  const outDir = join(distDir, ...segments);
  const outFile =
    routePath === "/" ? join(distDir, "index.html") : join(outDir, "index.html");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, html, "utf8");
}

let count = 0;

for (const routePath of Object.keys(seo.routes)) {
  writeRouteHtml(routePath, seo.routes[routePath]);
  count++;
}

for (const [slug, config] of Object.entries(seo.solutions)) {
  writeRouteHtml(`/solutions/${slug}`, config);
  count++;
}

console.log(`[prerender] Wrote ${count} HTML files with per-page SEO meta tags.`);
