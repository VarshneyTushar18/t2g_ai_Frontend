import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_PAGE_SEO,
  getPageSeo,
  getSolutionPageSeo,
  getSolutionSlugFromPath,
} from "../data/pageSeo";
import { applyPageSeo } from "../lib/applyPageSeo";

/** Updates document title and meta tags when the route changes. */
export default function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = getSolutionSlugFromPath(pathname);
    if (slug) {
      applyPageSeo(getSolutionPageSeo(slug) ?? DEFAULT_PAGE_SEO);
      return;
    }
    applyPageSeo(getPageSeo(pathname));
  }, [pathname]);

  return null;
}
