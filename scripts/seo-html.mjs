import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

let cachedSeo = null;

export function loadSeoConfig() {
  if (!cachedSeo) {
    const seoPath = join(root, "..", "src", "data", "pageSeo.json");
    cachedSeo = JSON.parse(readFileSync(seoPath, "utf8"));
  }
  return cachedSeo;
}

export function resolveSeoForPath(pathname) {
  const seo = loadSeoConfig();
  const path = pathname.split("?")[0].split("#")[0] || "/";

  if (seo.routes[path]) {
    return seo.routes[path];
  }

  const solutionsPrefix = "/solutions/";
  if (path.startsWith(solutionsPrefix)) {
    const slug = path.slice(solutionsPrefix.length).split("/")[0];
    if (slug && seo.solutions[slug]) {
      return seo.solutions[slug];
    }
  }

  return seo.default;
}

export function escapeHtmlAttr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

export function injectSeo(html, { title, description }) {
  const t = escapeHtmlAttr(title);
  const d = escapeHtmlAttr(description);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${d}" />`,
    );
}

export function pathnameFromRequestContext(ctx) {
  const raw = ctx.originalUrl ?? ctx.path ?? "/";
  if (raw.startsWith("/")) {
    return raw.split("?")[0].split("#")[0] || "/";
  }
  try {
    return new URL(raw, "http://localhost").pathname;
  } catch {
    return "/";
  }
}
