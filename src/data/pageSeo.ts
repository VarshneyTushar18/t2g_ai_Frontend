import seoData from "./pageSeo.json";

export interface PageSeoConfig {
  title: string;
  description: string;
}

export const DEFAULT_PAGE_SEO: PageSeoConfig = seoData.default;

/** Per-route SEO — keys match React Router paths in App.tsx. */
export const PAGE_SEO: Record<string, PageSeoConfig> = seoData.routes;

export const SOLUTION_PAGE_SEO: Record<string, PageSeoConfig> =
  seoData.solutions;

export function getPageSeo(pathname: string): PageSeoConfig {
  return PAGE_SEO[pathname] ?? DEFAULT_PAGE_SEO;
}

export const SOLUTIONS_PATH_PREFIX = "/solutions/";

export function getSolutionSlugFromPath(pathname: string): string | null {
  if (!pathname.startsWith(SOLUTIONS_PATH_PREFIX)) return null;
  const slug = pathname.slice(SOLUTIONS_PATH_PREFIX.length).split("/")[0];
  return slug || null;
}

export function getSolutionPageSeo(slug: string): PageSeoConfig | null {
  return SOLUTION_PAGE_SEO[slug] ?? null;
}
