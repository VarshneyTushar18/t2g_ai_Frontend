import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_PAGE_SEO,
  getPageSeo,
  getSolutionSlugFromPath,
} from "../data/pageSeo";
import { applyPageSeo } from "../lib/applyPageSeo";
import { buildSolutionPageSeo } from "../lib/solutionPageSeo";

/** Updates document title and meta tags when the route changes. */
export default function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = getSolutionSlugFromPath(pathname);

    if (!slug) {
      applyPageSeo(getPageSeo(pathname));
      return;
    }

    let cancelled = false;

    import("../data/solutions")
      .then(({ getSolutionData }) => {
        if (cancelled) return;
        const solution = getSolutionData(slug);
        applyPageSeo(
          solution ? buildSolutionPageSeo(solution) : DEFAULT_PAGE_SEO,
        );
      })
      .catch(() => {
        if (!cancelled) applyPageSeo(DEFAULT_PAGE_SEO);
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
