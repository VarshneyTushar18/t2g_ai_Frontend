import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  DollarSign,
  GitBranch,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  Palette,
  RefreshCw,
  Rocket,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ── Constants ──────────────────────────────────────────────────────────────
const ACCENT = "#7c3aed";
const ACCENT_SOFT = "rgba(124,58,237,0.08)";
const ACCENT_BORDER = "rgba(124,58,237,0.2)";

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { value: "200+", label: "OpenAI Projects Delivered" },
  { value: "5-10x", label: "Faster Than Traditional Dev" },
  { value: "3 Days", label: "MVP Turnaround" },
  { value: "100%", label: "Code Ownership Guaranteed" },
];

const benefits = [
  {
    icon: Zap,
    title: "Unmatched Speed to Market",
    description:
      "Prototype functional AI applications in days, not quarters. Our hire AI engineers for project model eliminates onboarding lag entirely.",
  },
  {
    icon: DollarSign,
    title: "60% Lower Development Costs",
    description:
      "Specialist AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
  },
  {
    icon: Shield,
    title: "Production-Ready Quality",
    description:
      "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever.",
  },
  {
    icon: GitBranch,
    title: "100% Code Ownership",
    description:
      "Full GitHub repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always.",
  },
  {
    icon: RefreshCw,
    title: "AI Workflow Automation Expertise",
    description:
      "Our AI workflow automation developers design systems that eliminate manual bottlenecks across operations, support, finance, and product teams.",
  },
  {
    icon: Layers,
    title: "Global Talent, On-Demand",
    description:
      "When you hire remote AI developers through our team, you access a pre-vetted pool of specialists without the risk of a direct hire that does not work out.",
  },
];

const services = [
  {
    icon: Cpu,
    title: "GPT-Powered Application Development",
    description:
      "We architect applications around GPT-4o and o1 that genuinely understand context, handle nuanced queries, and deliver responses that build user trust rather than frustrating them.",
  },
  {
    icon: Layers,
    title: "AI Agent Development & Automation",
    description:
      "Our specialists design agents powered by the OpenAI Assistants API, function calling, and multi-step reasoning that complete complex workflows without human intervention.",
  },
  {
    icon: Wrench,
    title: "LLM Integration & Custom Fine-Tuning",
    description:
      "We architect retrieval-augmented generation (RAG) pipelines and deliver custom fine-tuned models trained on your data, dramatically reducing hallucinations and increasing factual accuracy.",
  },
  {
    icon: TrendingUp,
    title: "Generative AI Product Development",
    description:
      "From AI-powered content platforms to intelligent document processing, we build end-to-end generative AI products handling everything from model selection to production deployment.",
  },
  {
    icon: MessageSquare,
    title: "AI Workflow Automation & Process Intelligence",
    description:
      "We design intelligent automation systems that connect OpenAI models with your existing tools — CRMs, ERPs, data warehouses — reducing human error and freeing your team for high-value work.",
  },
  {
    icon: Code2,
    title: "OpenAI API Integration for Existing Products",
    description:
      "We integrate GPT, Whisper, DALL·E, and vision capabilities into your existing codebase — regardless of stack — with clean, maintainable APIs your team can own and extend.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Discovery & Requirements Scoping",
    description:
      "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. Precise scoping prevents expensive revisions later.",
  },
  {
    num: "2",
    title: "AI Architecture & Prompt Engineering",
    description:
      "Our OpenAI experts design the model stack, prompt strategy, RAG pipeline, and function-calling schema. Every architectural decision is documented and justified against your specific requirements.",
  },
  {
    num: "3",
    title: "Human-Led Development & Integration",
    description:
      "Senior AI developers build, integrate, and test your application using best-practice coding standards. Every component is code-reviewed for accuracy, performance, and security.",
  },
  {
    num: "4",
    title: "Security, Compliance & Quality Assurance",
    description:
      "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, and load testing before any production deployment. Enterprise-grade rigour, every time.",
  },
  {
    num: "5",
    title: "Deployment, Handover & Ongoing Support",
    description:
      "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration.",
  },
];

const techStack = [
  {
    icon: Code2,
    name: "GPT-4o & o1",
    description:
      "OpenAI's frontier models powering intelligent, context-aware applications at scale",
  },
  {
    icon: Zap,
    name: "Assistants API",
    description:
      "Stateful AI agents with persistent threads, tool use, and file retrieval built-in",
  },
  {
    icon: Palette,
    name: "RAG Pipelines",
    description:
      "Retrieval-augmented generation grounding model responses in your proprietary knowledge base",
  },
  {
    icon: Globe,
    name: "Function Calling",
    description:
      "Structured outputs and tool integration enabling AI-driven automation workflows",
  },
  {
    icon: Shield,
    name: "Whisper & DALL·E 3",
    description:
      "Voice transcription and image generation capabilities for multimodal AI applications",
  },
  {
    icon: Cpu,
    name: "Fine-Tuning",
    description:
      "Custom model training on your domain-specific data for consistent, accurate outputs",
  },
  {
    icon: Database,
    name: "Vector Databases",
    description:
      "Semantic search and embedding storage powering high-performance knowledge retrieval",
  },
  {
    icon: Lock,
    name: "Enterprise Security",
    description:
      "SOC 2 compliance, data encryption, rate limiting, and audit logging built into every build",
  },
];

const portfolioProjects = [
  {
    tag: "SaaS Dashboard",
    title: "AI-Powered Analytics Platform",
    description:
      "Built a full-stack SaaS dashboard with real-time AI insights, user authentication, and interactive charts for a fintech startup.",
    badges: ["React", "OpenAI GPT-4o", "RAG", "3 Weeks"],
  },
  {
    tag: "AI Agent",
    title: "Autonomous Lead Qualification Agent",
    description:
      "Developed an OpenAI-powered agent that qualifies inbound leads, drafts personalised outreach emails, and logs activity to a CRM automatically.",
    badges: ["Assistants API", "Function Calling", "TypeScript", "2 Weeks"],
  },
  {
    tag: "MVP",
    title: "Intelligent Document Processor",
    description:
      "Launched an MVP with GPT-4o vision to extract, classify, and summarise structured data from unstructured documents in under 3 days.",
    badges: ["GPT-4o Vision", "OpenAI API", "React", "3 Days"],
  },
];

const testimonials = [
  {
    quote:
      "The team delivered our GPT-powered assistant in just 3 days. The OpenAI expertise was exceptional — every feature we described was built and functional within hours. Highly recommend!",
    name: "James Carter",
    role: "CEO, FinFlow Tech",
  },
  {
    quote:
      "We hired Tech2Globe to build our internal OpenAI automation platform. The result was incredible — what would have taken 3 months was done in 2 weeks, with better quality than we expected.",
    name: "Priya Sharma",
    role: "COO, NovaMed Solutions",
  },
  {
    quote:
      "Their expertise in RAG pipelines and OpenAI development transformed our product. The workflow is seamless, the code is clean, and team communication was excellent throughout.",
    name: "Marcus Webb",
    role: "Founder, LaunchPad Studio",
  },
];

const industries = [
  { icon: TrendingUp, name: "FinTech & Finance" },
  { icon: Heart, name: "Healthcare & MedTech" },
  { icon: ShoppingCart, name: "E-Commerce & Retail" },
  { icon: Rocket, name: "SaaS & Tech Startups" },
  { icon: Users, name: "HR & Recruitment" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: Building2, name: "Real Estate" },
  { icon: Megaphone, name: "Marketing & Agencies" },
];

const audiences = [
  {
    title: "Startups & Founders",
    description:
      "Racing to build an AI-first product without the overhead of a large internal engineering team. Our AI developers for hire remote model means you get senior expertise from day one without geographic constraints.",
  },
  {
    title: "SMEs & Growing Businesses",
    description:
      "Benefit enormously from custom AI workflow automation, intelligent document processing, and OpenAI-powered internal tools — with production-ready AI tools running within weeks.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Use OpenAI development to accelerate proof-of-concept builds, automate high-volume internal processes, and launch AI-powered products at speed with enterprise-grade security and compliance.",
  },
  {
    title: "Product Teams & Digital Agencies",
    description:
      "Deliver client projects faster and at higher margins. Our AI agent automation services are available as white-label partnerships for agencies wanting the competitive speed advantage.",
  },
];

const faqs = [
  {
    q: "What exactly does an OpenAI developer do?",
    a: "An OpenAI developer designs, builds, and integrates applications powered by OpenAI's suite of models — including GPT-4o, o1, Whisper, DALL·E 3, and the Assistants API. They combine advanced prompt engineering, RAG pipeline architecture, and traditional software development skills to produce clean, scalable, production-ready AI applications far faster and more reliably than general-purpose developers learning on the job.",
  },
  {
    q: "How quickly can you deliver an AI MVP using OpenAI?",
    a: "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom integrations, fine-tuned models, multi-step agent workflows, and advanced dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code, not a prototype.",
  },
  {
    q: "What types of applications can be built with OpenAI's APIs?",
    a: "Our OpenAI developers can build conversational AI platforms, AI-powered SaaS products, intelligent document processing systems, autonomous AI agents, GPT-integrated CRMs, AI content generation tools, voice applications using Whisper, image analysis systems using vision models, internal knowledge assistants, and fully automated AI workflows. If a use case benefits from language understanding, reasoning, or generation, OpenAI's models can power it.",
  },
  {
    q: "Is production code built on OpenAI APIs secure and enterprise-ready?",
    a: "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every OpenAI-powered build before deployment. Security is not an afterthought; it is built into the architecture from the first line of code.",
  },
  {
    q: "Will I own the code and AI infrastructure after the project?",
    a: "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely.",
  },
  {
    q: "Can you integrate OpenAI into our existing product or platform?",
    a: "Yes — this is one of our most common engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add OpenAI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack, and we write integration code that your existing engineering team can understand, own, and extend independently.",
  },
  {
    q: "Do you offer ongoing support and model updates after launch?",
    a: "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As OpenAI releases new model capabilities, we help you adopt them quickly and safely. Our OpenAI development services are designed for long-term strategic partnership, not one-time delivery.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function StatCard({
  value,
  label,
  index,
}: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-xl px-6 py-5 flex flex-col items-center text-center bg-white"
      style={{
        border: `1px solid ${ACCENT_BORDER}`,
        boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
      }}
      data-ocid={`openai-stats.item.${index + 1}`}
    >
      <span
        className="font-display text-3xl md:text-4xl font-bold mb-1"
        style={{ color: ACCENT }}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground font-body">{label}</span>
    </motion.div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="card-service rounded-xl p-6"
      data-ocid={`openai-services.item.${index + 1}`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: ACCENT_SOFT,
          border: `1px solid ${ACCENT_BORDER}`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
      </div>
      <h3 className="font-display font-bold text-base text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ProcessStep({
  num,
  title,
  description,
  index,
}: {
  num: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="flex gap-4 items-start"
      data-ocid={`openai-process.item.${index + 1}`}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm font-display flex-shrink-0 text-white"
        style={{ background: ACCENT }}
      >
        {num}
      </div>
      <div className="flex-1 pb-6 border-b border-border last:border-0">
        <h3 className="font-display font-bold text-base text-foreground mb-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border last:border-0"
      data-ocid={`openai-faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer group"
        aria-expanded={open}
        data-ocid={`openai-faq.toggle.${index + 1}`}
      >
        <span
          className="font-display font-semibold text-sm md:text-base text-foreground transition-colors duration-200"
          style={{ ...(open ? { color: ACCENT } : {}) }}
        >
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="pb-4 text-sm text-muted-foreground font-body leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

// ── Contact Form ───────────────────────────────────────────────────────────

const initialFormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center rounded-2xl bg-white"
        style={{ border: `1px solid ${ACCENT_BORDER}` }}
        data-ocid="openai-contact.success_state"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: ACCENT_SOFT }}
        >
          <Star className="w-8 h-8" style={{ color: ACCENT }} />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          Thank you!
        </h3>
        <p className="text-muted-foreground font-body max-w-sm">
          Your project brief has been received. We'll get back to you within 24
          hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialFormState);
          }}
          className="mt-6 text-sm font-semibold underline"
          style={{ color: ACCENT }}
          data-ocid="openai-contact.reset_button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 space-y-5"
      style={{
        border: `1px solid ${ACCENT_BORDER}`,
        boxShadow: "0 4px 24px rgba(124,58,237,0.07)",
      }}
      data-ocid="openai-contact.form"
    >
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="openai-name"
        >
          Full Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="openai-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="openai-contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="openai-email"
        >
          Email Address <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="openai-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="openai-contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="openai-company"
        >
          Company Name{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="openai-company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="openai-contact.input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="openai-projectType"
          >
            Project Type
          </label>
          <select
            id="openai-projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="openai-contact.select"
          >
            <option value="">Select Project Type</option>
            <option value="gpt-app">GPT-Powered Application</option>
            <option value="ai-agent">AI Agent Development</option>
            <option value="rag">RAG / Fine-Tuning</option>
            <option value="saas">SaaS Platform</option>
            <option value="integration">OpenAI API Integration</option>
            <option value="consultation">Architecture Consultation</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="openai-budget"
          >
            Budget Range
          </label>
          <select
            id="openai-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="openai-contact.select"
          >
            <option value="">Select Budget Range</option>
            <option value="under5k">Under $5,000</option>
            <option value="5to15k">$5,000 - $15,000</option>
            <option value="15to50k">$15,000 - $50,000</option>
            <option value="50kplus">$50,000+</option>
            <option value="notsure">Not Sure Yet</option>
          </select>
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="openai-message"
        >
          Message / Project Description
        </label>
        <textarea
          id="openai-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2 resize-none"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="openai-contact.textarea"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold text-white text-base transition-colors duration-200"
        style={{ background: ACCENT }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#6d28d9";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = ACCENT;
        }}
        data-ocid="openai-contact.submit_button"
      >
        Send My Project Brief
      </button>
    </form>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export function HireOpenAIPage() {
  const navigate = useNavigate();
  const scrollToOverview = () => {
    const el = document.querySelector("#openai-overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        id="openai-overview"
        className="relative overflow-hidden py-14 md:py-20 bg-white"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(109,40,217,0.05) 0%, transparent 55%), #fff",
        }}
        data-ocid="openai-hero.section"
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: ACCENT_SOFT,
                  color: "#5b21b6",
                  border: `1px solid ${ACCENT_BORDER}`,
                }}
              >
                Expert OpenAI Developers | GPT Engineers | AI Workflow
                Automation &amp; Agent Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline mb-6 text-foreground"
              data-ocid="openai-hero.headline"
            >
              Hire an <span style={{ color: ACCENT }}>OpenAI</span> Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lead text-muted-foreground mb-4 font-semibold"
            >
              Ship Smarter. Automate Fearlessly. Scale Without Limits.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground font-body mb-10 max-w-2xl leading-relaxed"
            >
              Our team of certified OpenAI developers, GPT engineers, and AI
              integration specialists combines cutting-edge model expertise with
              deep software engineering discipline — delivering production-grade
              AI applications, intelligent automation platforms, and LLM-powered
              SaaS products that create measurable business value from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-start"
            >
              <Button
                className="px-8 py-3 text-base h-auto font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick={() => navigate("/ai-expert")}
                data-ocid="openai-hero.primary_button"
              >
                Get a Free Consultation
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="btn-secondary px-8 py-3 text-base h-auto"
                onClick={scrollToOverview}
                data-ocid="openai-hero.secondary_button"
              >
                View Our Services
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl"
            data-ocid="openai-stats.section"
          >
            {stats.map((s, i) => (
              <StatCard
                key={s.value}
                value={s.value}
                label={s.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ship Smarter Scale Faster Banner ────────── */}
      <section
        className="py-10 bg-white border-b border-border"
        data-ocid="openai-shipsmart.section"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Hire an OpenAI Developer —{" "}
              <span style={{ color: ACCENT }}>
                Build Smarter AI, Ship Faster
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Artificial intelligence is no longer a competitive advantage — it
              is the baseline. Businesses that hire AI developers with genuine
              OpenAI expertise today are the ones setting industry benchmarks
              tomorrow. The companies still waiting on traditional development
              cycles are already falling behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What Is OpenAI Development? ──────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="openai-about.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-5">
                What Is OpenAI Development?
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  OpenAI development refers to the professional design,
                  integration, and deployment of applications and systems
                  powered by OpenAI's suite of foundation models — including
                  GPT-4o, o1, DALL·E 3, Whisper, and the Assistants API. When
                  enterprises and startups choose to hire OpenAI experts, they
                  gain access to capabilities that were science fiction just a
                  few years ago: conversational AI that genuinely understands
                  intent, code generation that accelerates engineering output by
                  orders of magnitude, vision models that analyse images and
                  documents at scale, and autonomous AI agents that complete
                  complex multi-step tasks without human hand-holding.
                </p>
                <p>
                  However, OpenAI's APIs are only as powerful as the engineers
                  working with them. Extracting real business value requires
                  skilled professionals who understand prompt engineering,
                  retrieval-augmented generation (RAG), fine-tuning, function
                  calling, agentic frameworks, and production-grade deployment —
                  not just basic API calls. That is precisely the expertise our
                  dedicated AI developer team brings to every engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Hire an OpenAI Developer ───────────────────────── */}
      <section
        className="py-12 bg-white"
        id="openai-why"
        data-ocid="openai-benefits.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Why Hire an OpenAI Developer Instead of Building In-House?
              </h2>
              <p className="text-base text-muted-foreground font-body">
                The case for choosing to hire AI engineers from a specialist
                team rather than growing an internal capability is compelling,
                measurable, and immediate.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="openai-benefits.list"
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-elevated rounded-xl p-6"
                  data-ocid={`openai-benefits.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: ACCENT_SOFT,
                        border: `1px solid ${ACCENT_BORDER}`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────── */}
      <section
        className="border-y border-border py-12"
        id="openai-services"
        style={{ background: "#f5f3ff" }}
        data-ocid="openai-services.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                What We Build
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Our OpenAI Development Services
              </h2>
              <p className="text-base text-muted-foreground font-body">
                End-to-end OpenAI development services tailored precisely to
                your industry, business goals, and timelines.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="openai-process"
        data-ocid="openai-process.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our OpenAI Development{" "}
                <span style={{ color: ACCENT }}>Process Works</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                A streamlined, transparent workflow that combines OpenAI's
                frontier model capabilities with senior human engineering
                expertise across five clear stages.
              </p>
              <Button
                className="font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick={() => navigate("/ai-expert")}
                data-ocid="openai-process.cta_button"
              >
                Start Your Project
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <ProcessStep
                  key={step.num}
                  num={step.num}
                  title={step.title}
                  description={step.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OpenAI Tech Stack ─────────────────────── */}
      <section
        className="py-12 border-y border-border"
        id="openai-tech-stack"
        style={{ background: "#f5f3ff" }}
        data-ocid="openai-techstack.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Powered by the OpenAI Tech Stack
              </h2>
              <p className="text-base text-muted-foreground font-body">
                We build on OpenAI's frontier model suite and battle-tested
                infrastructure — ensuring your AI application is fast, accurate,
                and future-proof.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="openai-techstack.list"
          >
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="bg-white rounded-xl p-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                  }}
                  data-ocid={`openai-techstack.item.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: ACCENT_SOFT }}
                  >
                    <Icon className="w-6 h-6" style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Work That Speaks for Itself ─────────────── */}
      <section
        className="py-12 bg-white"
        id="openai-portfolio"
        data-ocid="openai-portfolio.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Work That Speaks for Itself
              </h2>
              <p className="text-base text-muted-foreground font-body">
                Real OpenAI projects we've shipped — from idea to live product.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="openai-portfolio.list"
          >
            {portfolioProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  borderTopWidth: "4px",
                  borderTopColor: ACCENT,
                  boxShadow: "0 2px 12px rgba(124,58,237,0.07)",
                }}
                data-ocid={`openai-portfolio.item.${i + 1}`}
              >
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ background: ACCENT_SOFT, color: ACCENT }}
                  >
                    {proj.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-5">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs px-2.5 py-1 rounded-md font-semibold"
                        style={{
                          background: "rgba(124,58,237,0.06)",
                          color: "#5b21b6",
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Our Clients Say ────────────────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        id="openai-testimonials"
        data-ocid="openai-testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base text-muted-foreground font-body">
                Don't just take our word for it — here's what our clients
                experienced working with us.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="openai-testimonials.list"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 flex flex-col relative"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  boxShadow: "0 2px 12px rgba(124,58,237,0.07)",
                }}
                data-ocid={`openai-testimonials.item.${i + 1}`}
              >
                {/* Big quote mark */}
                <span
                  className="text-6xl leading-none font-serif absolute top-4 right-6 select-none"
                  style={{ color: ACCENT, opacity: 0.15 }}
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                    <Star
                      key={sk}
                      className="w-4 h-4 fill-current"
                      style={{ color: "#f59e0b" }}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-6 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: ACCENT }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ─────────────────────── */}
      <section
        className="py-12 bg-white"
        id="openai-industries"
        data-ocid="openai-industries.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Industries We Serve
              </h2>
              <p className="text-base text-muted-foreground font-body">
                Our OpenAI expertise spans across diverse industries —
                delivering tailored AI solutions for every sector.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="openai-industries.list"
          >
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                  }}
                  data-ocid={`openai-industries.item.${i + 1}`}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                    style={{ background: ACCENT_SOFT }}
                  >
                    <Icon className="w-7 h-7" style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground leading-snug">
                    {ind.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who Should Hire ────────────────────────── */}
      <section
        className="border-y border-border py-12"
        style={{ background: "#f5f3ff" }}
        data-ocid="openai-audience.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-section-label text-muted-foreground mb-3 block">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Who Should Hire an OpenAI Developer?
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                }}
                data-ocid={`openai-audience.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  <h3 className="font-display font-bold text-base text-foreground">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="openai-faq"
        data-ocid="openai-faq.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-section-label text-muted-foreground mb-3 block">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked{" "}
                  <span style={{ color: ACCENT }}>Questions</span>
                </h2>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Everything you need to know about OpenAI development and
                  working with our team.
                </p>
              </motion.div>
            </div>
            <div className="md:col-span-2">
              {faqs.map((f, i) => (
                <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────── */}
      <section
        className="py-14 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d0d2b 0%, #1a1035 100%)",
        }}
        data-ocid="openai-cta.section"
      >
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(167,139,250,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span
              className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(167,139,250,0.12)",
                color: "#a78bfa",
                border: "1px solid rgba(167,139,250,0.3)",
              }}
            >
              + Start Building Today
            </span>
            <h2 className="text-subheadline mb-6 text-white">
              Ready to Build Smarter with an{" "}
              <span style={{ color: "#a78bfa" }}>OpenAI Developer?</span>
            </h2>
            <p
              className="text-base font-body mb-8 leading-relaxed"
              style={{ color: "#d1d5db" }}
            >
              Stop waiting months for software that should take days. Hire an
              OpenAI expert today and launch your next AI product with frontier
              model power and production-grade engineering quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="px-8 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95 cursor-pointer"
                style={{ background: "#ffffff", color: "#0d0d2b" }}
                onClick={() => navigate("/ai-expert")}
                data-ocid="openai-cta.primary_button"
              >
                Get a Free Consultation
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(167,139,250,0.5)",
                  color: "#a78bfa",
                }}
                onClick={() => navigate("/hire-ai-lovable-developer")}
                data-ocid="openai-cta.secondary_button"
              >
                Let's Talk with an AI Expert
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {[
                "hire openai developer",
                "openai development",
                "gpt-4o developer",
                "hire gpt engineer",
                "ai agent development",
                "rag pipeline developer",
                "hire ai developer",
                "hire llm engineer",
              ].map((kw) => (
                <Badge
                  key={kw}
                  variant="outline"
                  className="text-xs font-body"
                  style={{
                    borderColor: "rgba(167,139,250,0.25)",
                    color: "#9ca3af",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {kw}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────── */}

    </div>
  );
}
