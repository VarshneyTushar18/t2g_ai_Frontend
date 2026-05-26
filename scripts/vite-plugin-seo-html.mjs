import {
  injectSeo,
  pathnameFromRequestContext,
  resolveSeoForPath,
} from "./seo-html.mjs";

/**
 * Injects per-route <title> and meta tags into index.html during `npm run dev`
 * so View Source shows unique SEO per page (same as production prerender).
 */
export function vitePluginSeoHtml() {
  return {
    name: "vite-plugin-seo-html",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const pathname = pathnameFromRequestContext(ctx);
        const config = resolveSeoForPath(pathname);
        return injectSeo(html, config);
      },
    },
  };
}
