import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

let cachedSeo = null;

const DEBUG = process.env.PRERENDER_DEBUG === "1";

export function loadSeoConfig() {
  if (!cachedSeo) {
    const seoPath = join(root, "..", "src", "data", "pageSeo.json");
    cachedSeo = JSON.parse(readFileSync(seoPath, "utf8"));
  }
  return cachedSeo;
}

/** Normalize pathname for route lookup (trailing slash, index.html). */
export function normalizePathname(pathname) {
  let path = pathname.split("?")[0].split("#")[0] || "/";

  if (path.endsWith("/index.html")) {
    path = path.slice(0, -"/index.html".length) || "/";
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path || "/";
}

export function resolveSeoForPath(pathname, { logRoute = false } = {}) {
  const seo = loadSeoConfig();
  const path = normalizePathname(pathname);
  let matched = "default";
  let config = seo.default;

  if (seo.routes[path]) {
    matched = `routes["${path}"]`;
    config = seo.routes[path];
  } else {
    const solutionsPrefix = "/solutions/";
    if (path.startsWith(solutionsPrefix)) {
      const slug = path.slice(solutionsPrefix.length).split("/")[0];
      if (slug && seo.solutions[slug]) {
        matched = `solutions["${slug}"]`;
        config = seo.solutions[slug];
      }
    }
  }

  if (DEBUG || logRoute) {
    const fallback = matched === "default";
    console.log(
      `[seo] path=${path} matched=${matched} fallback=${fallback} title="${config.title}"`,
    );
  }

  return { path, config, matched, usedFallback: matched === "default" };
}

export function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

/**
 * Replace title + meta description + og tags. Throws if any replacement fails.
 */
export function injectSeo(html, { title, description }) {
  if (!title || !description) {
    throw new Error(
      `injectSeo: missing title or description (title=${String(title)}, description=${String(description)})`,
    );
  }

  const t = escapeHtmlAttr(title);
  const d = escapeHtmlAttr(description);
  const errors = [];

  let result = html;

  if (!/<title>[\s\S]*?<\/title>/i.test(result)) {
    errors.push("<title> tag not found in HTML template");
  } else {
    result = result.replace(/<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  }

  const metaPatterns = [
    {
      name: "description",
      pattern:
        /<meta\s+[^>]*name=["']description["'][^>]*\/?>/i,
      replacement: `<meta name="description" content="${d}" />`,
    },
    {
      name: "og:title",
      pattern:
        /<meta\s+[^>]*property=["']og:title["'][^>]*\/?>/i,
      replacement: `<meta property="og:title" content="${t}" />`,
    },
    {
      name: "og:description",
      pattern:
        /<meta\s+[^>]*property=["']og:description["'][^>]*\/?>/i,
      replacement: `<meta property="og:description" content="${d}" />`,
    },
  ];

  for (const { name, pattern, replacement } of metaPatterns) {
    if (!pattern.test(result)) {
      errors.push(`meta tag not found: ${name}`);
      continue;
    }
    result = result.replace(pattern, replacement);
  }

  if (!result.includes(`<title>${t}</title>`)) {
    errors.push("title injection did not apply");
  }
  if (!result.includes(`content="${d}"`)) {
    errors.push("description injection did not apply");
  }

  if (errors.length > 0) {
    throw new Error(`injectSeo failed:\n- ${errors.join("\n- ")}`);
  }

  return result;
}

export function pathnameFromRequestContext(ctx) {
  const raw = ctx.originalUrl ?? ctx.path ?? "/";
  if (raw.startsWith("/")) {
    return normalizePathname(raw);
  }
  try {
    return normalizePathname(new URL(raw, "http://localhost").pathname);
  } catch {
    return "/";
  }
}

/** All routes that receive a prerendered dist/<route>/index.html */
export function listPrerenderRoutes() {
  const seo = loadSeoConfig();
  const routes = Object.keys(seo.routes);
  const solutions = Object.keys(seo.solutions).map(
    (slug) => `/solutions/${slug}`,
  );
  return [...routes, ...solutions];
}
