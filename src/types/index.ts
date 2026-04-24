export interface PlatformCard {
  id: string;
  tag: string;
  name: string;
  description: string;
  accentFrom: string;
  accentTo: string;
}

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface BenefitCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  teamSize: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FormData {
  fullName: string;
  email: string;
  company: string;
  country: string;
  platform: string;
  budget: string;
  timeline: string;
  projectDescription: string;
}

export type FormField = keyof FormData;

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustItem {
  id: string;
  text: string;
}
