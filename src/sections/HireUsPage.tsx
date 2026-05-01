import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Lock,
  Mail,
  MessageSquare,
  Palette,
  RefreshCw,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
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
  { value: "48 Hours", label: "Hire in 48 Hours" },
  { value: "500+", label: "AI Projects Delivered" },
  { value: "8+", label: "Specializations" },
  { value: "100%", label: "Code Ownership" },
];

const services = [
  {
    icon: "💜",
    title: "Hire a Lovable Developer",
    description:
      "Build AI-powered web apps fast with Lovable.dev experts. Ideal for startups and MVPs — no-code speed with production quality.",
    tags: ["Lovable.dev", "No-Code AI", "Rapid MVP", "AI App Builder"],
  },
  {
    icon: "⚡",
    title: "Hire an Emergent Developer",
    description:
      "Emergent AI platform developers build autonomous, adaptive systems that solve complex problems dynamically — perfect for simulation and self-optimizing workflows.",
    tags: [
      "Emergent AI Platform",
      "Autonomous AI System Developer",
      "Adaptive AI",
    ],
  },
  {
    icon: "☕",
    title: "Hire a Caffeine Developer",
    description:
      "Lightning-fast engineers who use Bolt.new and instant app development AI tools to go from idea to deployed product in hours. Built for demos, hackathons, and rapid sprints.",
    tags: ["Instant App Development AI", "Bolt.new", "Rapid Prototyping"],
  },
  {
    icon: "🧠",
    title: "Hire an LLM Engineer",
    description:
      "Expert large language model developers who fine-tune and deploy GPT, Claude, Gemini, and LLaMA. Specialists in LLM integration, RAG systems, LangChain, and vector databases.",
    tags: [
      "GPT Developer for Hire",
      "LLM Integration Developer",
      "RAG Systems",
      "LangChain",
      "Vector DB",
    ],
  },
  {
    icon: "🔤",
    title: "Hire an NLP Developer",
    description:
      "Natural language processing engineers who build production NLP pipelines — sentiment analysis, NER, text classification, and transformer models using Hugging Face and BERT.",
    tags: [
      "Natural Language Processing Engineer",
      "NLP Model Development",
      "Hugging Face",
      "BERT / spaCy",
    ],
  },
  {
    icon: "🦾",
    title: "Hire an Agentic AI Developer",
    description:
      "AI agent developers who build autonomous multi-step systems using LangGraph, CrewAI, and AutoGen. Expert multi-agent system developers delivering real production agentic workflows.",
    tags: [
      "AI Agent Developer",
      "Autonomous AI Agent Development",
      "LangGraph Developer",
      "CrewAI Developer",
      "AutoGen Developer",
    ],
  },
  {
    icon: "🎯",
    title: "Hire a Prompt Engineer",
    description:
      "Prompt engineers who design and optimize LLM prompts — few-shot, chain-of-thought, structured outputs — to maximise output quality and reduce hallucinations.",
    tags: [
      "Few-Shot Prompting",
      "Chain-of-Thought",
      "Prompt Optimization",
      "Structured Output",
    ],
  },
  {
    icon: "🤖",
    title: "Hire a Dedicated AI Engineer",
    description:
      "Full-spectrum AI engineers covering MLOps, cloud AI (AWS, GCP, Azure), and end-to-end AI pipelines. Available for remote hire or AI staff augmentation.",
    tags: [
      "MLOps",
      "Cloud AI",
      "GenAI",
      "AI Staff Augmentation",
      "AI Pipelines",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We map your tech stack, goals, and role requirements — no guesswork, no wasted time.",
    timing: "Day 1 · 30 min",
  },
  {
    num: "02",
    title: "Talent Matching",
    description:
      "We match you with pre-vetted AI engineers from our pool — LLM, NLP, Agentic, Lovable, Emergent, and more.",
    timing: "Within 24 hours",
  },
  {
    num: "03",
    title: "Shortlist & Profiles",
    description:
      "Receive 2–4 curated developer profiles with portfolios, demos, and tech stacks.",
    timing: "Day 2",
  },
  {
    num: "04",
    title: "Technical Interview",
    description:
      "Run a live assessment tailored to your project — system design, LLM demos, or agent build challenges.",
    timing: "Day 3–4",
  },
  {
    num: "05",
    title: "Onboarding",
    description:
      "Your developer joins your Slack, codebase, and roadmap — delivering value from week one.",
    timing: "Day 5–7",
  },
  {
    num: "06",
    title: "Ongoing Support",
    description:
      "Regular check-ins, performance reviews, and instant replacement if needed.",
    timing: "Ongoing · Monthly",
  },
];

const benefits = [
  {
    icon: "🎯",
    title: "AI-Specialized Only",
    description:
      "Every developer is AI-native — LLMs, agentic systems, NLP pipelines. No generalists, no filler.",
  },
  {
    icon: "⚡",
    title: "Hire in 48 Hours",
    description:
      "Pre-vetted pool means discovery to first commit in under a week. Traditional AI hiring takes months.",
  },
  {
    icon: "🔍",
    title: "Deep Technical Vetting",
    description:
      "Multi-stage assessments: code reviews, LLM architecture tests, live agent builds — not resume screening.",
  },
  {
    icon: "🤝",
    title: "Flexible Engagement",
    description:
      "Part-time, full-time, project-based, or AI staff augmentation — scale up or down with no lock-ins.",
  },
  {
    icon: "🌐",
    title: "Cutting-Edge Stack",
    description:
      "LangGraph, CrewAI, AutoGen, RAG, vector DBs, Lovable.dev — tools that matter in 2026, not 2019.",
  },
  {
    icon: "🛡️",
    title: "Risk-Free Trial",
    description:
      "Not satisfied in 2 weeks? We replace your developer at no extra cost. No questions asked.",
  },
  {
    icon: "📈",
    title: "Production-First",
    description:
      "We build for real load, real users, real Monday mornings — not polished demos that break in production.",
  },
  {
    icon: "💬",
    title: "Transparent Always",
    description:
      "Every developer integrates with your Slack, attends standups, and communicates across all stakeholders.",
  },
];

const audiences = [
  {
    title: "Startups & Founders",
    description:
      "Race to market with AI-first products without the overhead of building an internal team. Our hire remote AI developers model gives you senior-level NLP, agent, and LLM expertise from day one — at a fraction of the cost of a direct hire.",
  },
  {
    title: "SMEs & Growing Businesses",
    description:
      "Automate high-value workflows, process documents at scale, and deploy AI-powered customer interactions without waiting months for bespoke software. Hire AI engineers for project-based engagements and deploy in weeks.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Accelerate proof-of-concept builds, launch AI-powered products at speed, and automate high-volume internal processes with enterprise-grade security, compliance, and full auditability on every delivery.",
  },
  {
    title: "Product Teams & Digital Agencies",
    description:
      "Deliver AI-powered client projects faster and at higher margins. Our AI agent automation services and NLP and LLM engineering capabilities are available as white-label partnerships for agencies scaling their AI practice.",
  },
];

const faqs = [
  {
    q: "What types of AI developers can you hire through your service?",
    a: "We connect you with AI-native engineers across all specializations: LLM engineers, NLP developers, Agentic AI developers, Prompt Engineers, Lovable builders, Emergent AI specialists, and Dedicated AI engineers covering MLOps and cloud AI. Every developer is pre-vetted and production-ready.",
  },
  {
    q: "How quickly can I hire an AI developer?",
    a: "Our pre-vetted talent pool means you can go from first contact to first commit in under a week. We typically deliver curated developer profiles within 24 hours, complete technical interviews by day 3–4, and onboard your developer by day 5–7.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer flexible engagement models to match your needs: project-based (fixed scope and timeline), dedicated team (monthly engagement with daily standups), and staff augmentation (embed AI experts directly into your team). Scale up or down with no lock-ins.",
  },
  {
    q: "Are your developers fully vetted before placement?",
    a: "Yes — every developer in our pool undergoes multi-stage technical assessments including code reviews, LLM architecture tests, and live agent build challenges. We vet for genuine AI-native expertise, not just resume claims.",
  },
  {
    q: "What if I'm not satisfied with the developer after placement?",
    a: "If you're not satisfied within the first 2 weeks, we replace your developer at no extra cost — no questions asked. Our risk-free trial guarantee is a core part of every engagement.",
  },
  {
    q: "Do I retain full code ownership of everything built?",
    a: "Absolutely. Full code ownership is non-negotiable in every engagement. You receive complete repository access, technical documentation, and zero vendor lock-in. Your application, your code — always and entirely.",
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
      data-ocid={`stats.item.${index + 1}`}
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

interface EmojiServiceCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

function EmojiServiceCard({
  icon,
  title,
  description,
  tags,
  index,
}: EmojiServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="card-service rounded-xl p-6 flex flex-col"
      data-ocid={`services.item.${index + 1}`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl"
        style={{
          background: ACCENT_SOFT,
          border: `1px solid ${ACCENT_BORDER}`,
        }}
      >
        {icon}
      </div>
      <h3 className="font-display font-bold text-base text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md font-medium"
            style={{ background: ACCENT_SOFT, color: "#5b21b6" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

interface HiringStepProps {
  num: string;
  title: string;
  description: string;
  timing: string;
  index: number;
}

function HiringStep({
  num,
  title,
  description,
  timing,
  index,
}: HiringStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex gap-4 items-start"
      data-ocid={`process.item.${index + 1}`}
    >
      <div
        className="flex items-center justify-center w-11 h-11 rounded-full font-bold text-sm font-display flex-shrink-0 text-white"
        style={{ background: ACCENT }}
      >
        {num}
      </div>
      <div className="flex-1 pb-6 border-b border-border last:border-0">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="font-display font-bold text-base text-foreground">
            {title}
          </h3>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
            style={{ background: ACCENT_SOFT, color: "#5b21b6" }}
          >
            ⏱ {timing}
          </span>
        </div>
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
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer group"
        aria-expanded={open}
        data-ocid={`faq.toggle.${index + 1}`}
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
        data-ocid="contact.success_state"
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
          data-ocid="contact.reset_button"
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
      data-ocid="contact.form"
    >
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="hu-name"
        >
          Full Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="hu-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="hu-email"
        >
          Email Address <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="hu-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="hu-company"
        >
          Company Name{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="hu-company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="hu-projectType"
          >
            Project Type
          </label>
          <select
            id="hu-projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.select"
          >
            <option value="">Select Project Type</option>
            <option value="llm">LLM Engineering</option>
            <option value="nlp">NLP Development</option>
            <option value="agent">AI Agent Development</option>
            <option value="lovable">Lovable Builder</option>
            <option value="emergent">Emergent AI</option>
            <option value="prompt">Prompt Engineering</option>
            <option value="augmentation">Staff Augmentation</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="hu-budget"
          >
            Budget Range
          </label>
          <select
            id="hu-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.select"
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
          htmlFor="hu-message"
        >
          Message / Project Description
        </label>
        <textarea
          id="hu-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2 resize-none"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.textarea"
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
        data-ocid="contact.submit_button"
      >
        Send My Project Brief
      </button>
    </form>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export function HireUsPage() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const el = document.querySelector("#contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        id="overview"
        className="relative overflow-hidden py-14 md:py-20 bg-white"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(109,40,217,0.05) 0%, transparent 55%), #fff",
        }}
        data-ocid="hero.section"
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
                AI Development Company | Custom AI Solutions | AI Staff
                Augmentation | 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline mb-4 text-foreground"
              data-ocid="hero.headline"
            >
              <span style={{ color: ACCENT }}>HIRE</span> US
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lead text-muted-foreground mb-4 font-semibold"
            >
              AI-Powered Engineers &amp; Developers
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground font-body mb-10 max-w-2xl leading-relaxed"
            >
              We are your dedicated AI development company — connecting you with
              pre-vetted, AI-native engineers who ship production-ready systems
              fast. From Agentic AI developers to LLM engineers, NLP developers,
              Prompt Engineers, Lovable builders, and Emergent specialists —
              find the right hire in 48 hours.
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
                onClick={() => navigate("/hire-us")}
                data-ocid="hero.primary_button"
              >
                Hire an AI Developer
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="btn-secondary px-8 py-3 text-base h-auto"
                onClick={scrollToServices}
                data-ocid="hero.secondary_button"
              >
                View Our Services
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl"
            data-ocid="stats.section"
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

      {/* ── Banner ────────────────────────────────────── */}
      <section
        className="py-10 bg-white border-b border-border"
        data-ocid="shipsmart.section"
      >
        <div className="px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              <span style={{ color: ACCENT }}>OUR SERVICES</span> — HIRE AI
              DEVELOPERS
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Hire a Developer: AI-Powered Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About / Intro ──────────────────────────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="about.section"
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
                Your Dedicated AI Development Company
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  We are your dedicated AI development company — connecting you
                  with pre-vetted, AI-native engineers who ship production-ready
                  systems fast. From Agentic AI developers to LLM engineers, NLP
                  developers, Prompt Engineers, Lovable builders, and Emergent
                  specialists — find the right hire in 48 hours.
                </p>
                <p>
                  Artificial intelligence has moved from competitive advantage
                  to operational necessity. Every industry — from healthcare and
                  finance to retail and logistics — is being reshaped by
                  companies that choose to hire AI developers with genuine,
                  multi-disciplinary expertise. The gap between businesses that
                  act decisively and those still evaluating is widening every
                  quarter.
                </p>
                <p>
                  Our team of certified AI engineers — spanning natural language
                  processing (NLP), autonomous AI agents, large language model
                  (LLM) engineering, and generative AI product development —
                  delivers production-grade intelligent systems that create
                  measurable business value from the very first deployment.
                </p>
                <p>
                  Whether you need one specialization or the full AI stack, our
                  dedicated AI developer teams deliver with the speed, security,
                  and rigour your business demands. When you hire AI developers
                  through us, you gain a strategic technology partner with
                  end-to-end capability across the entire AI stack.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────── */}
      <section
        className="border-y border-border py-12"
        id="services"
        style={{ background: "#f5f3ff" }}
        data-ocid="services.section"
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
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Hire a Developer: AI-Powered Services
              </h2>
              <p className="text-base text-muted-foreground font-body">
                Pre-vetted AI engineers across every specialization — ready to
                ship in 48 hours.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <EmojiServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                tags={s.tags}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Process ──────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="process"
        data-ocid="process.section"
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
                How It Works —{" "}
                <span style={{ color: ACCENT }}>6 Simple Steps</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                From first message to first commit — fast, transparent, and
                built for AI hiring.
              </p>
              <Button
                className="font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick={scrollToContact}
                data-ocid="process.cta_button"
              >
                Start Your Hire
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <HiringStep
                  key={step.num}
                  num={step.num}
                  title={step.title}
                  description={step.description}
                  timing={step.timing}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Hire Us ─────────────────────────────────── */}
      <section
        className="border-y border-border py-12"
        id="why"
        style={{ background: "#f5f3ff" }}
        data-ocid="benefits.section"
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
                Why Companies Choose Us
              </h2>
              <p className="text-base text-muted-foreground font-body">
                A specialized AI software development agency — not a generic
                recruiter. Here is what sets us apart.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="benefits.list"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-elevated rounded-xl p-6"
                data-ocid={`benefits.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{
                      background: ACCENT_SOFT,
                      border: `1px solid ${ACCENT_BORDER}`,
                    }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground">
                    {b.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Should Hire ─────────────────────────────── */}
      <section
        className="py-12 bg-white"
        id="audiences"
        data-ocid="audience.section"
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
                Who Should Hire AI Developers Through Us?
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
                data-ocid={`audience.item.${i + 1}`}
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

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section
        className="py-12 border-y border-border"
        id="faq"
        style={{ background: "#f5f3ff" }}
        data-ocid="faq.section"
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
                  Everything you need to know about hiring AI developers through
                  our service.
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

      {/* ── CTA Banner ──────────────────────────────────── */}
      <section
        className="py-14 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d0d2b 0%, #1a1035 100%)",
        }}
        data-ocid="cta.section"
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
            <h2 className="text-subheadline mb-4 text-white">
              Ready to Hire an{" "}
              <span style={{ color: "#a78bfa" }}>AI-Powered Developer?</span>
            </h2>
            <p
              className="text-base font-body mb-4 leading-relaxed"
              style={{ color: "#d1d5db" }}
            >
              LLM Engineer · NLP Developer · Agentic AI Developer · LangGraph ·
              CrewAI · AutoGen · Prompt Engineer · Lovable · Emergent · Caffeine
              Builder
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="px-8 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95 cursor-pointer"
                style={{ background: "#ffffff", color: "#0d0d2b" }}
                onClick={scrollToContact}
                data-ocid="cta.primary_button"
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
                onClick={scrollToServices}
                data-ocid="cta.secondary_button"
              >
                View All Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {[
                "hire AI developer",
                "hire LLM engineer",
                "hire NLP developer",
                "hire AI agent developer",
                "hire prompt engineer",
                "AI staff augmentation",
                "hire Lovable developer",
                "hire Emergent developer",
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

      {/* ── Contact Form ─────────────────────────────────── */}

    </div>
  );
}
