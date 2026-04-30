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
  { value: "150+", label: "Lovable Projects Delivered" },
  { value: "5-10x", label: "Faster Than Traditional Dev" },
  { value: "3 Days", label: "MVP Turnaround" },
  { value: "100%", label: "Code Ownership" },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "Deliver MVPs in 3–7 days and full applications in weeks — 5–10x faster than conventional coding.",
  },
  {
    icon: DollarSign,
    title: "Dramatically Lower Costs",
    description:
      "AI automation eliminates repetitive coding, cutting overall development costs by up to 60%.",
  },
  {
    icon: Shield,
    title: "Production-Grade Quality",
    description:
      "Every build goes through security audits, compliance checks, and performance reviews — no shortcuts.",
  },
  {
    icon: GitBranch,
    title: "100% Code Ownership",
    description:
      "Full GitHub integration. Your codebase, your rules — zero vendor lock-in, ever.",
  },
  {
    icon: RefreshCw,
    title: "Rapid Iteration Cycles",
    description:
      "Pivot features quickly after user feedback without burning weeks of engineering time.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capability",
    description:
      "From responsive frontends to scalable backends, APIs, and databases — complete stack, single engagement.",
  },
];

const services = [
  {
    icon: Cpu,
    title: "MVP Development with Lovable AI",
    description:
      "Turn your product idea into a functional, market-ready MVP within days. Our team — among the top generative AI developers for hire — use structured prompt engineering to generate clean, testable code, so you can validate your concept before committing to full-scale investment.",
  },
  {
    icon: Layers,
    title: "SaaS Application Development",
    description:
      "Build scalable, subscription-ready SaaS platforms with authentication, billing integrations, role-based dashboards, and multi-tenant architecture. We deliver SaaS applications built to grow from day one.",
  },
  {
    icon: Wrench,
    title: "Internal Tools & Custom Dashboards",
    description:
      "Replace disconnected spreadsheets and manual workflows with powerful internal tools. Our Lovable.dev developers build custom dashboards, admin panels, and automation systems that streamline operations immediately.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Web Application Development",
    description:
      "Integrate large language models, predictive analytics, conversational AI, and intelligent automation directly into your web apps. Our team delivers AI-powered features that genuinely enhance user experience and business efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Expert Prompt Engineering",
    description:
      "Maximising Lovable.dev value requires precision prompting. Our certified Lovable prompt engineers craft structured, detailed prompts that produce cleaner code, reduce credit consumption, and eliminate costly revision cycles.",
  },
  {
    icon: Code2,
    title: "App Optimization & Ongoing Support",
    description:
      "Already have an app on Lovable.dev? We provide code audits, performance optimization, security hardening, feature enhancements, and maintenance so your application scales reliably with your business.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Discovery & Requirement Scoping",
    description:
      "Free consultation to understand your vision, users, technical requirements, and business goals. Clear scoping prevents costly revisions later.",
  },
  {
    num: "2",
    title: "Prompt Architecture & AI Generation",
    description:
      "Our expert Lovable prompt engineers design a structured prompt strategy. Precision prompting is the foundation of high-quality Lovable.dev output.",
  },
  {
    num: "3",
    title: "Human-Led Code Review & Refinement",
    description:
      "Senior Lovable developers review every line of generated code for logic accuracy, performance, security vulnerabilities, and business alignment.",
  },
  {
    num: "4",
    title: "Security & Compliance Review",
    description:
      "Thorough security assessments before any deployment. GDPR, SOC 2, and industry-specific compliance checks are built into every Lovable AI development engagement.",
  },
  {
    num: "5",
    title: "Deployment, Handover & Ongoing Support",
    description:
      "Full production deployment, complete documentation, and 100% code ownership transfer. Post-launch support available for scaling and feature growth.",
  },
];

const techStack = [
  {
    icon: Code2,
    name: "React + TypeScript",
    description:
      "Modern frontend with type-safe code and component-driven architecture",
  },
  {
    icon: Zap,
    name: "Motoko Backend",
    description:
      "Internet Computer's native language for secure, scalable canister smart contracts",
  },
  {
    icon: Palette,
    name: "Tailwind CSS",
    description:
      "Utility-first styling for pixel-perfect, responsive designs at speed",
  },
  {
    icon: Globe,
    name: "Internet Computer",
    description:
      "Decentralized cloud platform delivering web-speed dApps with no traditional servers",
  },
  {
    icon: Shield,
    name: "Vite",
    description:
      "Lightning-fast build tooling with instant hot module replacement",
  },
  {
    icon: Cpu,
    name: "Caffeine AI Studio",
    description:
      "AI-assisted coding environment optimized for rapid feature development",
  },
  {
    icon: Database,
    name: "Stable Memory",
    description:
      "Persistent on-chain data storage with automatic upgrades and backups",
  },
  {
    icon: Lock,
    name: "Internet Identity",
    description:
      "Passwordless authentication with cryptographic security built-in",
  },
];

const portfolioProjects = [
  {
    tag: "SaaS Dashboard",
    title: "AI-Powered Analytics Platform",
    description:
      "Built a full-stack SaaS dashboard with real-time AI insights, user authentication, and interactive charts for a fintech startup.",
    badges: ["React", "Lovable AI", "Motoko", "3 Weeks"],
  },
  {
    tag: "Internal Tool",
    title: "Smart HR Onboarding Tool",
    description:
      "Developed an automated employee onboarding platform with AI-generated task lists, document management, and progress tracking.",
    badges: ["Lovable AI", "TypeScript", "Tailwind", "2 Weeks"],
  },
  {
    tag: "MVP",
    title: "E-Commerce Recommender",
    description:
      "Launched an MVP with AI-driven product recommendations, cart management, and Stripe checkout in under 3 days.",
    badges: ["MVP", "AI Prompts", "React", "3 Days"],
  },
];

const testimonials = [
  {
    quote:
      "The team delivered our MVP in just 3 days. The Lovable AI approach was mind-blowing — every feature we described was built and functional within hours. Highly recommend!",
    name: "James Carter",
    role: "CEO, FinFlow Tech",
  },
  {
    quote:
      "We hired Tech2Globe to rebuild our internal tools using Lovable AI. The result was incredible — what would have taken 3 months was done in 2 weeks, with better quality than we expected.",
    name: "Priya Sharma",
    role: "COO, NovaMed Solutions",
  },
  {
    quote:
      "Their expertise in prompt engineering and Lovable AI development transformed our product. The workflow is seamless, the code is clean, and the team communication was excellent throughout.",
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
      "Launching fast without a large engineering team. Getting a working product into users' hands quickly is the single most important thing early-stage companies can do, and Lovable AI development makes it possible at a fraction of traditional costs.",
  },
  {
    title: "SMEs & Growing Businesses",
    description:
      "Benefit enormously from custom internal tools, workflow automation, and AI-powered dashboards. Instead of waiting months and spending heavily on custom software, businesses can hire a Lovable developer and have tools running within weeks.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Use Lovable.dev to accelerate proof-of-concept builds. Hire AI developer talent on-demand for department-level tools and innovation projects without pulling resources from core engineering.",
  },
  {
    title: "Agencies & Consultancies",
    description:
      "Increasingly using Lovable to deliver client projects faster and at higher margins. Our Lovable AI development services are available as white-label partnerships for agencies who want the speed advantage without the internal learning curve.",
  },
];

const faqs = [
  {
    q: "What exactly does a Lovable AI developer do?",
    a: "A Lovable AI developer uses the Lovable.dev platform to generate full-stack web applications from natural language descriptions. They combine advanced prompt engineering skills with traditional development expertise to produce clean, scalable, production-ready code far faster than conventional coding methods.",
  },
  {
    q: "How quickly can you deliver an MVP with Lovable?",
    a: "Simple MVPs are typically delivered within 3-7 business days. More complex applications with custom integrations, multi-role authentication, and advanced workflows generally take 2-5 weeks. Either way, Lovable AI development is 5-10x faster than traditional software development timelines.",
  },
  {
    q: "What types of applications can be built using Lovable.dev?",
    a: "Our Lovable developers can build web apps, SaaS platforms, e-commerce solutions, internal tools, admin dashboards, AI-integrated applications, mobile-responsive websites, CRM systems, and more. If it runs on modern web technology, Lovable.dev can build it.",
  },
  {
    q: "Is the code generated by Lovable AI secure and production-ready?",
    a: "AI-generated code is production-ready when reviewed and refined by expert developers. Our team conducts full security audits, performance reviews, and compliance checks on every Lovable.dev build before deployment — ensuring your application meets enterprise standards.",
  },
  {
    q: "Will I own the code after the project is complete?",
    a: "Absolutely. Full code ownership is a core part of every engagement. We deliver complete GitHub repository access, technical documentation, and zero vendor lock-in. Your application, your code — always.",
  },
  {
    q: "Do you offer post-launch support for Lovable AI applications?",
    a: "Yes. We offer flexible post-launch support packages covering bug fixes, feature additions, security updates, performance optimization, and scaling assistance. Our Lovable AI development services are designed for long-term partnership, not one-time delivery.",
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
      data-ocid={`services.item.${index + 1}`}
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
      data-ocid={`process.item.${index + 1}`}
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
          htmlFor="name"
        >
          Full Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="name"
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
          htmlFor="email"
        >
          Email Address <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="email"
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
          htmlFor="company"
        >
          Company Name{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="company"
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
            htmlFor="projectType"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.select"
          >
            <option value="">Select Project Type</option>
            <option value="mvp">MVP Development</option>
            <option value="saas">SaaS Platform</option>
            <option value="tool">Internal Tool</option>
            <option value="ai">AI Web App</option>
            <option value="prompt">Prompt Engineering</option>
            <option value="support">Support & Optimization</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="budget"
          >
            Budget Range
          </label>
          <select
            id="budget"
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
          htmlFor="message"
        >
          Message / Project Description
        </label>
        <textarea
          id="message"
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

export function HireLovablePage() {

  const navigate = useNavigate();


  const scrollToContact = () => {
    const el = document.querySelector("#contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToOverview = () => {
    const el = document.querySelector("#overview");
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
                Expert Lovable.dev Developers | Prompt Engineers | Full-Stack AI
                App Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline mb-6 text-foreground"
              data-ocid="hero.headline"
            >
              Hire a <span style={{ color: ACCENT }}>Lovable AI</span> Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lead text-muted-foreground mb-4 font-semibold"
            >
              Ship Faster. Build Smarter. Own Your Code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground font-body mb-10 max-w-2xl leading-relaxed"
            >
              Our team of expert Lovable developers, prompt engineers, and
              full-stack specialists merges the raw speed of Lovable.dev
              AI-powered app building with deep human development expertise —
              delivering production-grade web apps, SaaS platforms, and MVPs in
              days, not months.
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
                onClick={scrollToOverview} // OR use navigate version if needed
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

      {/* ── Ship Smarter Scale Faster Banner ────────── */}
      <section
        className="py-10 bg-white border-b border-border"
        data-ocid="shipsmart.section"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Hire a Lovable AI Developer —{" "}
              <span style={{ color: ACCENT }}>Ship Smarter, Scale Faster</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Partner with expert Lovable.dev developers who turn your ideas
              into production-ready apps — faster and smarter than traditional
              development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What Is Lovable AI Development? ──────────── */}
      <section
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="about.section"
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
                What Is Lovable AI Development?
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  In today's hyper-competitive digital landscape, speed to
                  market is everything. Businesses that can build and launch
                  software faster consistently outperform those stuck in
                  traditional development cycles. That's where hiring a
                  certified Lovable AI developer changes the game entirely.
                </p>
                <p>
                  Lovable.dev is a next-generation, AI-powered full-stack app
                  builder that converts plain English descriptions into working,
                  deployable applications. Instead of writing thousands of lines
                  of code manually, a Lovable AI developer simply describes what
                  needs to be built — and the platform instantly generates
                  frontend interfaces, backend logic, database schemas,
                  authentication, and third-party integrations.
                </p>
                <p>
                  Unlike generic AI code generators, Lovable produces
                  structured, maintainable, and scalable code that developers
                  can review, refine, and extend. It supports the full software
                  lifecycle — from early prototyping and MVP development all the
                  way to production deployment and ongoing feature iteration.
                  This makes Lovable.dev development ideal for startups racing
                  to market, enterprises building internal tools, and product
                  teams needing reliable results without ballooning budgets.
                </p>
                <p>
                  However, Lovable AI is a tool — not a replacement for
                  expertise. Getting the best results requires skilled Lovable
                  prompt engineers who know how to structure prompts, review
                  generated code for performance and security, and integrate
                  complex business logic. That is precisely what our team brings
                  to every engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Hire Lovable ───────────────────────── */}
      <section className="py-12 bg-white" id="why" data-ocid="benefits.section">
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
                Why Hire a Lovable Developer Instead of Building Traditionally?
              </h2>
              <p className="text-base text-muted-foreground font-body">
                The advantages of AI-powered development are concrete,
                measurable, and immediate.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="benefits.list"
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
                  data-ocid={`benefits.item.${i + 1}`}
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
                What We Build
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Our Lovable AI Development Services
              </h2>
              <p className="text-base text-muted-foreground font-body">
                End-to-end Lovable.dev development tailored precisely to your
                business goals and timelines.
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
                Our Lovable Development{" "}
                <span style={{ color: ACCENT }}>Process</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                A streamlined, transparent workflow that combines AI efficiency
                with senior human expertise across five clear stages.
              </p>
              <Button
                className="font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick={scrollToContact}
                data-ocid="process.cta_button"
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

      {/* ── Caffeine Tech Stack ─────────────────────── */}
      <section
        className="py-12 border-y border-border"
        id="tech-stack"
        style={{ background: "#f5f3ff" }}
        data-ocid="techstack.section"
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
                Powered by the Lovable Tech Stack
              </h2>
              <p className="text-base text-muted-foreground font-body">
                We build on a battle-tested, AI-native infrastructure that
                ensures your app is fast, scalable, and future-proof.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="techstack.list"
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
                  data-ocid={`techstack.item.${i + 1}`}
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
        id="portfolio"
        data-ocid="portfolio.section"
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
                Real Lovable AI projects we've shipped — from idea to live
                product.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="portfolio.list"
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
                data-ocid={`portfolio.item.${i + 1}`}
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
        id="testimonials"
        data-ocid="testimonials.section"
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
            data-ocid="testimonials.list"
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
                data-ocid={`testimonials.item.${i + 1}`}
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
        id="industries"
        data-ocid="industries.section"
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
                Our Lovable AI expertise spans across diverse industries —
                delivering tailored solutions for every sector.
              </p>
            </motion.div>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            data-ocid="industries.list"
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
                  data-ocid={`industries.item.${i + 1}`}
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
                Who Should Hire a Lovable AI Developer?
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

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="py-12 bg-white" id="faq" data-ocid="faq.section">
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
                  Everything you need to know about Lovable AI development and
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
            <h2 className="text-subheadline mb-6 text-white">
              Ready to Build Faster with a{" "}
              <span style={{ color: "#a78bfa" }}>Lovable AI Developer?</span>
            </h2>
            <p
              className="text-base font-body mb-8 leading-relaxed"
              style={{ color: "#d1d5db" }}
            >
              Stop waiting months for software that should take days. Hire an
              expert Lovable.dev developer today and launch your next product
              with AI speed and human-grade quality.
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
                onClick={scrollToContact}
                data-ocid="cta.secondary_button"
              >
                Let's Talk with an AI Expert
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {[
                "hire lovable developer",
                "lovable AI developer",
                "lovable.dev development",
                "lovable prompt engineer",
                "AI-powered web app",
                "lovable AI MVP",
                "hire AI developer",
                "hire generative AI developer",
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
      <section
        id="contact-form"
        className="py-12 border-t border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="contact.section"
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
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Start Your Lovable AI Project Today
              </h2>
              <p className="text-base text-muted-foreground font-body">
                Fill in your details and one of our Lovable AI experts will get
                back to you within 24 hours.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: MapPin,
                  title: "Our Office",
                  detail: "Tech2Globe, serving clients globally",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  detail: "hello@tech2globe.com",
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  detail: "Within 24 hours, Monday to Friday",
                },
                {
                  icon: Star,
                  title: "Rating",
                  detail: "5.0/5 — Rated by 50+ clients worldwide",
                },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl p-5 flex items-start gap-4"
                    style={{
                      border: `1px solid ${ACCENT_BORDER}`,
                      boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                    }}
                    data-ocid={`contact.info.${i + 1}`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: ACCENT_SOFT }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground mb-0.5">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Trust badges */}
              <div
                className="bg-white rounded-xl p-5 mt-6"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                }}
              >
                <h4 className="font-display font-bold text-sm text-foreground mb-3">
                  Why Work With Us
                </h4>
                <ul className="space-y-2">
                  {[
                    "Free initial consultation — no commitment",
                    "150+ Lovable projects delivered",
                    "NDA available on request",
                    "Fixed price or time & materials",
                    "100% code ownership guaranteed",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                        style={{ background: ACCENT }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
