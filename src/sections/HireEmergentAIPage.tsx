import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
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
  Network,
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
  { value: "150+", label: "Emergent AI Projects Delivered" },
  { value: "8-12x", label: "Faster Than Traditional Dev" },
  { value: "5 Days", label: "MVP Turnaround" },
  { value: "100%", label: "Code Ownership Guaranteed" },
];

const benefits = [
  {
    icon: Zap,
    title: "Unmatched Speed to Market",
    description:
      "Prototype functional AI systems in days, not quarters. Our model eliminates onboarding lag entirely when you hire AI developers through our flexible engagement model.",
  },
  {
    icon: DollarSign,
    title: "60% Lower Development Costs",
    description:
      "Specialist Emergent AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
  },
  {
    icon: Shield,
    title: "Production-Ready Quality",
    description:
      "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever, regardless of timeline pressure.",
  },
  {
    icon: GitBranch,
    title: "100% Code Ownership",
    description:
      "Full repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always and unconditionally.",
  },
  {
    icon: Brain,
    title: "Deep Generative AI Expertise",
    description:
      "When you hire generative AI developers from our team, you access engineers fluent in GPT, Claude, Gemini, Llama, Stable Diffusion, and custom foundation model architectures.",
  },
  {
    icon: Network,
    title: "Autonomous Agent Development",
    description:
      "Our engineers who specialise as AI agent developers design multi-step reasoning systems that complete complex business workflows without human intervention.",
  },
  {
    icon: Layers,
    title: "Global Talent, On-Demand",
    description:
      "When you hire remote AI developers through our team, you access a pre-vetted pool of Emergent AI specialists without the risk or overhead of a direct hire.",
  },
  {
    icon: RefreshCw,
    title: "Rapid Iteration Without Penalty",
    description:
      "Pivot AI features after real-world user feedback without burning sprints of engineering time or sunk salary cost.",
  },
];

const services = [
  {
    icon: Cpu,
    title: "Generative AI Application Development",
    description:
      "Whether you need a customer-facing conversational AI, an internal knowledge generation platform, or a generative AI-powered creative tool, our team represents one of the most capable resources when you hire generative AI developers today. We architect applications around frontier generative models that genuinely understand context, produce high-quality outputs, and adapt to your domain.",
  },
  {
    icon: Layers,
    title: "AI Agent Development & Autonomous Automation",
    description:
      "Autonomous AI agents are the defining use case of Emergent AI. When you hire AI agent developers from our team, you get specialists who design multi-agent systems powered by LLM reasoning, tool use, memory architectures, and real-time decision trees. These agents complete complex workflows without human intervention.",
  },
  {
    icon: Wrench,
    title: "LLM Integration & Custom Fine-Tuning",
    description:
      "Not every use case requires a general-purpose model at full capacity. When your application demands domain-specific language, proprietary terminology, or highly consistent output formats, our hire LLM engineer capability delivers custom fine-tuned models trained directly on your data.",
  },
  {
    icon: TrendingUp,
    title: "GPT-Powered Product & Platform Development",
    description:
      "From GPT-driven SaaS products and intelligent customer service platforms to internal GPT-powered knowledge assistants and code generation tools, our team delivers exceptional results when you choose to hire GPT developers for complex product builds.",
  },
  {
    icon: MessageSquare,
    title: "Deep Learning Model Development & Deployment",
    description:
      "Computer vision, natural language processing, speech recognition, time-series forecasting, anomaly detection — when your use case requires custom deep learning rather than a pre-trained foundation model, our hire deep learning engineers capability delivers.",
  },
  {
    icon: Database,
    title: "Machine Learning Pipeline Engineering",
    description:
      "Emergent AI systems are only as strong as the data and infrastructure powering them. When you hire machine learning engineers from our team, you gain engineers who design robust, scalable ML pipelines — from data ingestion and feature engineering to model training, validation, versioning, and real-time serving.",
  },
  {
    icon: Code2,
    title: "AI Workflow Automation & Process Intelligence",
    description:
      "Manual, repetitive work is the single greatest drain on operational efficiency at scale. Our AI workflow automation developers design and implement intelligent automation systems that connect Emergent AI models with your existing tools — CRMs, ERPs, data warehouses, communication platforms, and more.",
  },
  {
    icon: Brain,
    title: "AI Consultation & Architecture Review",
    description:
      "Unsure whether your use case calls for a fine-tuned LLM, a RAG pipeline, a custom deep learning model, or an autonomous agent architecture? Our senior Emergent AI architects provide no-obligation consultation sessions that translate your business challenge into a clear, justified technical strategy.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Discovery & Requirements Scoping",
    description:
      "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. Precise scoping is what prevents expensive revisions downstream.",
  },
  {
    num: "2",
    title: "AI Architecture & Model Strategy",
    description:
      "Our Emergent AI experts design the model stack, fine-tuning approach, RAG pipeline, agent orchestration schema, and data architecture. Every decision is documented and justified against your specific requirements.",
  },
  {
    num: "3",
    title: "Human-Led Development & Integration",
    description:
      "Senior Emergent AI developers build, integrate, and test your application using best-practice coding and MLOps standards. Every component is code-reviewed for accuracy, performance, and security.",
  },
  {
    num: "4",
    title: "Security, Compliance & Quality Assurance",
    description:
      "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, model bias audits, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
  },
  {
    num: "5",
    title: "Deployment, Handover & Ongoing Support",
    description:
      "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages are available for scaling, fine-tuning, and feature iteration as your needs evolve.",
  },
];

const techStack = [
  {
    icon: Brain,
    name: "LLMs & Foundation Models",
    description:
      "GPT, Claude, Gemini, Llama — frontier language models powering adaptive, context-aware AI applications",
  },
  {
    icon: Zap,
    name: "Multi-Agent Orchestration",
    description:
      "Autonomous agent frameworks with persistent memory, tool use, and real-time decision trees",
  },
  {
    icon: Globe,
    name: "RAG Pipelines",
    description:
      "Retrieval-augmented generation grounding model responses in your proprietary knowledge base",
  },
  {
    icon: Code2,
    name: "Fine-Tuning & RLHF",
    description:
      "Custom model training on your domain-specific data for consistent, accurate, controlled outputs",
  },
  {
    icon: Shield,
    name: "Deep Neural Networks",
    description:
      "Custom deep learning architectures for computer vision, NLP, speech, and time-series forecasting",
  },
  {
    icon: Cpu,
    name: "MLOps Pipelines",
    description:
      "Production-grade ML infrastructure with monitoring, retraining, versioning, and drift detection",
  },
  {
    icon: Database,
    name: "Vector Databases",
    description:
      "Semantic search and embedding storage powering high-performance knowledge retrieval at scale",
  },
  {
    icon: Lock,
    name: "Enterprise Security",
    description:
      "SOC 2 compliance, data encryption, rate limiting, model bias auditing, and audit logging built in",
  },
];

const portfolioProjects = [
  {
    tag: "Autonomous Agent",
    title: "Multi-Agent Financial Intelligence Platform",
    description:
      "Built an Emergent AI-powered multi-agent system that autonomously analyses market data, generates investment reports, and executes compliance checks for a wealth management firm.",
    badges: ["LLM Agents", "RAG Pipeline", "Python", "4 Weeks"],
  },
  {
    tag: "Deep Learning",
    title: "AI Document Intelligence Engine",
    description:
      "Deployed a custom deep learning model combining vision and language reasoning to extract, classify, and route complex legal documents with 98% accuracy across 50+ document types.",
    badges: ["Deep Learning", "NLP", "MLOps", "3 Weeks"],
  },
  {
    tag: "MVP",
    title: "Adaptive LLM Customer Support Platform",
    description:
      "Launched an Emergent AI-powered support platform with fine-tuned domain models and multi-agent escalation that reduced support ticket resolution time by 70% in under 5 days.",
    badges: ["Fine-Tuning", "LLM", "React", "5 Days"],
  },
];

const testimonials = [
  {
    quote:
      "The team delivered our Emergent AI agent platform in under two weeks. Their deep expertise in LLM orchestration and RAG pipelines was exceptional — every feature was production-ready from day one.",
    name: "Sarah Mitchell",
    role: "CTO, NeuralEdge Ventures",
  },
  {
    quote:
      "We hired TechAvidus to build our adaptive AI automation system. The result was extraordinary — what we estimated would take four months was shipped in three weeks, with enterprise-grade quality throughout.",
    name: "Raj Patel",
    role: "Head of AI, Quantum Systems",
  },
  {
    quote:
      "Their expertise in Emergent AI and deep learning transformed our product entirely. The multi-agent system they built operates flawlessly at scale, and the code quality is the best we've seen from any vendor.",
    name: "Elena Kovacs",
    role: "Founder, DataSync AI",
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
      "Racing to build an AI-first product without the overhead of a large internal engineering team represent the most natural fit. Getting a working, genuinely intelligent product into users' hands quickly is the single most critical objective for early-stage companies — and the ability to hire remote AI developers with Emergent AI expertise makes it possible at a fraction of the cost of a traditional hire.",
  },
  {
    title: "SMEs & Growing Businesses",
    description:
      "Benefit enormously from custom Emergent AI workflow automation, intelligent document processing, and LLM-powered internal tools. Rather than waiting months for a custom software project to materialise, businesses can hire AI engineers for project-based engagements and have production-ready AI tools running within weeks.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Use Emergent AI development to accelerate proof-of-concept builds, automate high-volume internal processes, and launch AI-powered products at speed. With expert oversight from our dedicated AI developer hire model, enterprise-grade security, compliance, and auditability are fully guaranteed on every delivery.",
  },
  {
    title: "Product Teams & Digital Agencies",
    description:
      "Increasingly use Emergent AI development to deliver client projects faster and at significantly higher margins. Our AI agent automation services and hire deep learning engineers capability are available as white-label partnerships for agencies who want the competitive speed advantage without building an internal AI practice from scratch.",
  },
];

const faqs = [
  {
    q: "What exactly does a Emergent AI Developer do?",
    a: "A Emergent AI Developer designs, builds, and integrates applications powered by large language models, generative AI systems, autonomous agents, and deep learning architectures. They combine advanced prompt engineering, RAG pipeline design, fine-tuning, multi-agent orchestration, and traditional software engineering to produce clean, scalable, production-ready AI applications far faster and more reliably than general-purpose developers attempting to learn these disciplines on the job.",
  },
  {
    q: "How quickly can you deliver an Emergent AI MVP?",
    a: "Simple Emergent AI-powered MVPs are typically delivered within 5–7 business days. More complex applications with custom fine-tuned models, multi-step agent workflows, deep learning pipelines, and advanced dashboards generally take 2–6 weeks. Either way, our process is 8–12x faster than traditional software development timelines — and you receive production-ready, auditable code, not a fragile prototype.",
  },
  {
    q: "What types of applications can be built with Emergent AI?",
    a: "Our Emergent AI developers can build conversational AI platforms, generative AI SaaS products, autonomous multi-agent systems, intelligent document processing pipelines, GPT-powered CRMs and productivity tools, deep learning computer vision systems, voice AI applications, real-time recommendation engines, AI workflow automation platforms, and custom LLM-fine-tuned models for domain-specific applications. If a use case benefits from language understanding, reasoning, generation, or adaptive learning, Emergent AI can power it.",
  },
  {
    q: "Is production code built on Emergent AI secure and enterprise-ready?",
    a: "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, audits models for bias and fairness, and performs GDPR and SOC 2 compliance checks on every Emergent AI build before deployment. Security and governance are not afterthoughts; they are built into the architecture from the very first design decision.",
  },
  {
    q: "Will I own the code and AI infrastructure after the project?",
    a: "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete repository access, technical documentation, model cards, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely, with no ongoing licensing dependencies on our team.",
  },
  {
    q: "Can you integrate Emergent AI into our existing product or platform?",
    a: "Yes — this is one of our most frequently requested engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add Emergent AI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack, and we write integration code that your existing engineering team can understand, own, and extend completely independently.",
  },
  {
    q: "Do you offer ongoing support and model updates after launch?",
    a: "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As new Emergent AI model capabilities emerge from leading research labs, we help you adopt them quickly and safely. Our development services are designed for long-term strategic partnership, not one-time delivery.",
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
      data-ocid={`emergent-stats.item.${index + 1}`}
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
      data-ocid={`emergent-services.item.${index + 1}`}
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
      data-ocid={`emergent-process.item.${index + 1}`}
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
      data-ocid={`emergent-faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer group"
        aria-expanded={open}
        data-ocid={`emergent-faq.toggle.${index + 1}`}
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
        data-ocid="emergent-contact.success_state"
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
          data-ocid="emergent-contact.reset_button"
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
      data-ocid="emergent-contact.form"
    >
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="emergent-name"
        >
          Full Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="emergent-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="emergent-contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="emergent-email"
        >
          Email Address <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="emergent-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="emergent-contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="emergent-company"
        >
          Company Name{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="emergent-company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="emergent-contact.input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="emergent-projectType"
          >
            Project Type
          </label>
          <select
            id="emergent-projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="emergent-contact.select"
          >
            <option value="">Select Project Type</option>
            <option value="generative-ai">Generative AI Application</option>
            <option value="ai-agent">AI Agent Development</option>
            <option value="llm-finetune">LLM Fine-Tuning / RAG</option>
            <option value="deep-learning">Deep Learning Model</option>
            <option value="ml-pipeline">ML Pipeline Engineering</option>
            <option value="consultation">Architecture Consultation</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="emergent-budget"
          >
            Budget Range
          </label>
          <select
            id="emergent-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="emergent-contact.select"
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
          htmlFor="emergent-message"
        >
          Message / Project Description
        </label>
        <textarea
          id="emergent-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2 resize-none"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="emergent-contact.textarea"
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
        data-ocid="emergent-contact.submit_button"
      >
        Send My Project Brief
      </button>
    </form>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export function HireEmergentAIPage() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const el = document.querySelector("#emergent-contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToOverview = () => {
    const el = document.querySelector("#emergent-overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        id="emergent-overview"
        className="relative overflow-hidden py-14 md:py-20 bg-white"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(109,40,217,0.05) 0%, transparent 55%), #fff",
        }}
        data-ocid="emergent-hero.section"
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
                Expert Emergent AI Developers | Generative AI Engineers | LLM
                &amp; Agent Automation Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline mb-6 text-foreground"
              data-ocid="emergent-hero.headline"
            >
              Hire a <span style={{ color: ACCENT }}>Emergent AI</span>{" "}
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lead text-muted-foreground mb-4 font-semibold"
            >
              Build Intelligently. Automate Fearlessly. Scale Without Limits.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground font-body mb-10 max-w-2xl leading-relaxed"
            >
              Our team of certified Emergent AI engineers, generative AI
              architects, and LLM integration specialists combines frontier
              model expertise with deep software engineering rigour — delivering
              adaptive AI applications, self-improving automation platforms, and
              agent-driven systems that create measurable business value from
              the first deployment.
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
                data-ocid="hero.primary_button"
              >
                Get a Free Consultation
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                variant="outline"
                className="btn-secondary px-8 py-3 text-base h-auto"
                onClick={() => navigate("/hire-us")} // OR use navigate version if needed
                data-ocid="hero.secondary_button"
              >
                View Our Services
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl"
            data-ocid="emergent-stats.section"
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

      {/* ── Build Adaptive AI Banner ─────────────────── */}
      <section
        className="py-10 bg-white border-b border-border"
        data-ocid="emergent-shipsmart.section"
      >
        <div className="px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Hire a Emergent AI Developer —{" "}
              <span style={{ color: ACCENT }}>
                Build Adaptive AI, Ship Faster
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Artificial intelligence is no longer a future investment — it is
              the operational backbone of every industry-leading company today.
              Businesses that choose to hire AI developers with genuine Emergent
              AI expertise are the ones defining what the next generation of
              intelligent software looks like. Those still relying on static,
              rule-based systems are already falling behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What Is Emergent AI Development? ─────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="emergent-about.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-5">
                What Is Emergent AI Development?
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  Emergent AI refers to the design, integration, and deployment
                  of artificial intelligence systems that exhibit capabilities,
                  behaviours, and reasoning patterns that go beyond their
                  explicit training — adapting dynamically to new inputs,
                  evolving with real-world data, and solving complex problems
                  that rule-based systems cannot handle. When enterprises and
                  startups choose to hire artificial intelligence developers
                  specialising in emergent systems, they gain access to AI that
                  genuinely learns, reasons, and improves over time.
                </p>
                <p>
                  Emergent AI development spans large language models (LLMs),
                  generative foundation models, autonomous multi-agent systems,
                  deep learning architectures, and adaptive machine learning
                  pipelines. However, these technologies are only as powerful as
                  the engineers building with them. Extracting real business
                  value requires professionals who understand prompt
                  engineering, retrieval-augmented generation (RAG),
                  fine-tuning, multi-agent orchestration, deep neural network
                  optimisation, and production-grade MLOps — not just basic API
                  calls. That is exactly the expertise our dedicated AI
                  developer team delivers on every engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Hire a Emergent AI Developer ─────────── */}
      <section
        className="py-12 bg-white"
        id="emergent-why"
        data-ocid="emergent-benefits.section"
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
                Why Hire a Emergent AI Developer Instead of Building In-House?
              </h2>
              <p className="text-base text-muted-foreground font-body">
                The case for choosing to hire machine learning engineers and
                Emergent AI specialists from a dedicated team rather than
                growing an internal AI capability is compelling, measurable, and
                immediate.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="emergent-benefits.list"
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
                  data-ocid={`emergent-benefits.item.${i + 1}`}
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

      {/* ── Services ────────────────────────────────── */}
      <section
        className="border-y border-border py-12"
        id="emergent-services"
        style={{ background: "#f5f3ff" }}
        data-ocid="emergent-services.section"
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
                Our Emergent AI Development Services
              </h2>
              <p className="text-base text-muted-foreground font-body">
                End-to-end Emergent AI development services tailored precisely
                to your industry, business objectives, and timelines.
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

      {/* ── Process ─────────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="emergent-process"
        data-ocid="emergent-process.section"
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
                How Our Emergent AI Development{" "}
                <span style={{ color: ACCENT }}>Process Works</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                A streamlined, transparent workflow that combines Emergent AI's
                frontier capabilities with senior human engineering expertise
                across five clearly defined stages.
              </p>
              <Button
                className="font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick={scrollToContact}
                data-ocid="emergent-process.cta_button"
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

      {/* ── Emergent AI Tech Stack ───────────────────── */}
      <section
        className="py-12 border-y border-border"
        id="emergent-tech-stack"
        style={{ background: "#f5f3ff" }}
        data-ocid="emergent-techstack.section"
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
                Powered by the Emergent AI Tech Stack
              </h2>
              <p className="text-base text-muted-foreground font-body">
                We build on frontier model architectures and battle-tested
                infrastructure — ensuring your AI application is adaptive,
                accurate, and future-proof.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="emergent-techstack.list"
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
                  data-ocid={`emergent-techstack.item.${i + 1}`}
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

      {/* ── Work That Speaks for Itself ──────────────── */}
      <section
        className="py-12 bg-white"
        id="emergent-portfolio"
        data-ocid="emergent-portfolio.section"
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
                Real Emergent AI projects we've shipped — from idea to live
                product.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="emergent-portfolio.list"
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
                data-ocid={`emergent-portfolio.item.${i + 1}`}
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

      {/* ── What Our Clients Say ─────────────────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        id="emergent-testimonials"
        data-ocid="emergent-testimonials.section"
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
            data-ocid="emergent-testimonials.list"
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
                data-ocid={`emergent-testimonials.item.${i + 1}`}
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

      {/* ── Industries We Serve ──────────────────────── */}
      <section
        className="py-12 bg-white"
        id="emergent-industries"
        data-ocid="emergent-industries.section"
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
                Our Emergent AI expertise spans across diverse industries —
                delivering tailored adaptive AI solutions for every sector.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="emergent-industries.list"
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
                  data-ocid={`emergent-industries.item.${i + 1}`}
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

      {/* ── Who Should Hire ──────────────────────────── */}
      <section
        className="border-y border-border py-12"
        style={{ background: "#f5f3ff" }}
        data-ocid="emergent-audience.section"
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
                Who Should Hire a Emergent AI Developer?
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
                data-ocid={`emergent-audience.item.${i + 1}`}
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

      {/* ── FAQ ──────────────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="emergent-faq"
        data-ocid="emergent-faq.section"
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
                  Everything you need to know about Emergent AI development and
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

      {/* ── CTA Banner ───────────────────────────────── */}
      <section
        className="py-14 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d0d2b 0%, #1a1035 100%)",
        }}
        data-ocid="emergent-cta.section"
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
              <span style={{ color: "#a78bfa" }}>Emergent AI Developer?</span>
            </h2>
            <p
              className="text-base font-body mb-8 leading-relaxed"
              style={{ color: "#d1d5db" }}
            >
              Stop waiting months for software that should take days. Hire a
              Emergent AI Developer today and launch your next AI product with
              frontier model power and production-grade engineering quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="px-8 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95 cursor-pointer"
                style={{ background: "#ffffff", color: "#0d0d2b" }}
                onClick={scrollToContact}
                data-ocid="emergent-cta.primary_button"
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
                onClick={scrollToContact}
                data-ocid="emergent-cta.secondary_button"
              >
                Let's Talk with an AI Expert
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {[
                "hire emergent ai developer",
                "emergent ai development",
                "hire ai developer",
                "hire generative ai developer",
                "ai agent development",
                "llm fine-tuning engineers",
                "hire machine learning engineer",
                "hire deep learning engineer",
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
