/** Hire developer routes — keep in sync with Navbar dropdown + platform cards */
export const HIRE_DEVELOPER_NAV = [
  {
    label: "Hire AI Lovable Developer",
    href: "/hire-lovable",
    platformName: "Lovable",
  },
  {
    label: "Hire AI Emergent Developer",
    href: "/hire-emergent-ai",
    platformName: "Emergent",
  },
  {
    label: "Hire OpenAI Developer",
    href: "/hire-openai",
    platformName: "OpenCode AI",
  },
  {
    label: "Hire Caffeine Developer",
    href: "/hire-caffeine-developer",
    platformName: "Caffeine",
  },
] as const;

export const HIRE_AI_DEVELOPERS_HREF = "/hire-ai-developer";

/** Navbar dropdown items (label + href only) */
export const HIRE_DEVELOPER_NAV_ITEMS = HIRE_DEVELOPER_NAV.map(
  ({ label, href }) => ({ label, href }),
);

/** Platform card name → same href as navbar (Framer uses parent hire page) */
export function platformHref(platformName: string): string {
  const match = HIRE_DEVELOPER_NAV.find((item) => item.platformName === platformName);
  return match?.href ?? HIRE_AI_DEVELOPERS_HREF;
}
