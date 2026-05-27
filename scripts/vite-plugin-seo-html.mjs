import {
  injectSeo,
  pathnameFromRequestContext,
  resolveSeoForPath,
} from "./seo-html.mjs";
import { runPrerender } from "./prerender-html.mjs";

/**
 * Dev: inject per-route SEO into index.html on each request.
 * Build: prerender dist/<route>/index.html in closeBundle (cannot be skipped).
 */
export function vitePluginSeoHtml() {
  return [
    {
      name: "vite-plugin-seo-html-dev",
      apply: "serve",
      transformIndexHtml: {
        order: "pre",
        handler(html, ctx) {
          const pathname = pathnameFromRequestContext(ctx);
          const { config } = resolveSeoForPath(pathname);
          return injectSeo(html, config);
        },
      },
    },
    {
      name: "vite-plugin-seo-html-prerender",
      apply: "build",
      closeBundle() {
        runPrerender();
      },
    },
  ];
}
