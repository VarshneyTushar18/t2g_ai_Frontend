import type { PageSeoConfig } from "../data/pageSeo";

export interface SolutionSeoInput {
  headline: string;
  headlineAccent: string;
  subheading: string;
  problemParagraph1: string;
}

const META_DESCRIPTION_MAX = 160;

function truncateDescription(text: string): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= META_DESCRIPTION_MAX) return cleaned;
  return `${cleaned.slice(0, META_DESCRIPTION_MAX - 3).trimEnd()}...`;
}

function primarySubheading(subheading: string): string {
  const firstBlock = subheading.split("\n\n")[0] ?? subheading;
  return firstBlock.split("\n")[0]?.trim() ?? subheading;
}

export function buildSolutionPageSeo(solution: SolutionSeoInput): PageSeoConfig {
  const headline = `${solution.headline} ${solution.headlineAccent}`
    .replace(/\s+/g, " ")
    .trim();
  const descriptionSource =
    primarySubheading(solution.subheading) || solution.problemParagraph1;

  return {
    title: `${headline} | Tech2Globe AI`,
    description: truncateDescription(descriptionSource),
  };
}
