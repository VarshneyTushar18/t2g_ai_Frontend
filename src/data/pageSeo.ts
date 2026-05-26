export interface PageSeoConfig {
  title: string;
  description: string;
}

/** Default meta from index.html — used for unmapped routes. */
export const DEFAULT_PAGE_SEO: PageSeoConfig = {
  title: "Tech2Globe AI Engineering | Hire an AI Engineer",
  description:
    "Hire expert AI Engineers specializing in Lovable, Emergent, Caffeine, GenW.AI, Horizon, Framer AI & OpenCode AI. We turn your vision into a fully functional app, website, or software at record-breaking speed.",
};

/**
 * Per-page SEO from Tech2Globe_AI_Meta_Titles_Descriptions.docx
 * plus additional site routes.
 * Keys match React Router paths in App.tsx.
 */
export const PAGE_SEO: Record<string, PageSeoConfig> = {
  "/": DEFAULT_PAGE_SEO,

  "/hire/emergent/developer": {
    title: "Hire AI Developers for Custom AI Solutions & Automation",
    description:
      "Hire experienced AI developers to build custom AI solutions, intelligent automation systems, machine learning models, and scalable AI-powered applications for your business growth.",
  },
  "/hire/openai/developer": {
    title: "Hire OpenAI Developers for Generative AI Applications",
    description:
      "Hire OpenAI developers to create advanced AI chatbots, generative AI tools, GPT-powered applications, and intelligent automation solutions tailored to your business needs.",
  },
  "/hire-caffeine-developer": {
    title: "Hire AI Software Developers for Intelligent Digital Solutions",
    description:
      "Hire expert AI software developers to build smart applications, automate workflows, integrate AI technologies, and deliver scalable digital transformation solutions.",
  },
  "/hire/lovable/developer": {
    title: "Hire Lovable AI Developers for Rapid App & SaaS Development",
    description:
      "Hire Lovable AI developers to build production-ready web apps, SaaS platforms, and MVPs with expert prompt engineering, fast delivery, and full code ownership.",
  },
  "/hire-ai-developer": {
    title: "Hire AI Developers | NLP, AI Agents & LLM Engineering",
    description:
      "Hire expert AI developers for NLP, AI agent development, LLM engineering, and generative AI solutions with production-grade quality and full code ownership.",
  },
  "/hire-ai-developers": {
    title: "AI Solutions & Hire AI Developers | Tech2Globe AI",
    description:
      "Explore AI-powered solutions, intelligent automation, and expert AI developers to help your business build smarter systems and scale faster.",
  },
  "/industries": {
    title: "AI Solutions for Industries & Business Automation Services",
    description:
      "Explore AI-powered industry solutions designed to improve operational efficiency, automate business workflows, enhance customer experiences, and accelerate digital transformation.",
  },
  "/portfolio": {
    title:
      "AI Development Portfolio | AI Projects, Chatbots & Automation Solutions",
    description:
      "Explore our AI development portfolio featuring generative AI projects, intelligent chatbots, workflow automation systems, and custom AI-powered business solutions.",
  },
  "/about/us": {
    title: "About Tech2Globe AI | AI Innovation & Automation Experts",
    description:
      "Learn about Tech2Globe AI, a trusted AI development company delivering intelligent automation, AI-powered solutions, machine learning services, and digital innovation.",
  },
  "/ai-expert": {
    title: "AI Experts for Machine Learning & Generative AI Solutions",
    description:
      "Connect with AI experts specializing in generative AI, machine learning, chatbot development, automation, and scalable AI solutions for modern businesses.",
  },
  "/hire/us": {
    title: "Hire AI Developers in USA for Custom AI Development",
    description:
      "Hire dedicated AI developers in the USA for generative AI solutions, AI chatbot development, automation services, and intelligent business applications.",
  },
  "/blog": {
    title: "AI Development Blog | Insights, Trends & Engineering",
    description:
      "Explore the latest in AI development, engineering trends, generative AI insights, and expert guidance on hiring AI developers for your business.",
  },
  "/our-team": {
    title: "Our Team | Tech2Globe AI Experts & Leadership",
    description:
      "Meet the innovators, strategists, and AI experts behind Tech2Globe — delivering excellence across every AI development and automation project.",
  },
  "/thank-you": {
    title: "Thank You | Tech2Globe AI",
    description:
      "Thank you for contacting Tech2Globe AI. Our team will respond within one business day to discuss your AI project needs.",
  },
};

export function getPageSeo(pathname: string): PageSeoConfig {
  return PAGE_SEO[pathname] ?? DEFAULT_PAGE_SEO;
}

export const SOLUTIONS_PATH_PREFIX = "/solutions/";

export function getSolutionSlugFromPath(pathname: string): string | null {
  if (!pathname.startsWith(SOLUTIONS_PATH_PREFIX)) return null;
  const slug = pathname.slice(SOLUTIONS_PATH_PREFIX.length).split("/")[0];
  return slug || null;
}
