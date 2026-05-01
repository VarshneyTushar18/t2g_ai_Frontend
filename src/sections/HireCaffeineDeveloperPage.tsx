import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/api/contactApi";
import { toast } from "sonner";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  Eye,
  FileText,
  Gavel,
  GraduationCap,
  Heart,
  Home,
  Layers,
  MessageSquare,
  Monitor,
  Package,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  description: string;
  metrics: string[];
  accentColor: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "mvp",
    icon: <Rocket className="w-5 h-5" />,
    title: "MVP Development with Caffeine AI",
    description:
      "Turn your product idea into a functional, market-validated AI application within days. Our team — consistently ranked among the top generative AI developers for hire — uses Caffeine AI's composable agent framework to generate clean, testable, production-ready code. Validate your concept and capture real user feedback before committing to full-scale engineering investment.",
  },
  {
    id: "agent",
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "AI Agent Development & Orchestration",
    description:
      "Autonomous AI agents are the defining enterprise AI use case of this decade. When you need to hire AI agent developer expertise with real platform depth, our specialists design and deploy agents on Caffeine AI that handle complex, multi-step workflows — from intelligent lead qualification and contract drafting to automated research, data extraction, and cross-system task execution. Our AI agent automation services are engineered for reliability, observability, and graceful failure handling from the ground up.",
  },
  {
    id: "saas",
    icon: <Server className="w-5 h-5" />,
    title: "SaaS Platform Development",
    description:
      "Build subscription-ready SaaS products with Caffeine AI at the core — complete with multi-tenant architecture, role-based access control, usage-based billing, and LLM orchestration baked in from day one. Whether you are launching an AI-first product into a new market or rebuilding an existing platform around intelligent automation, our hire caffeine experts model delivers SaaS infrastructure built to grow.",
  },
  {
    id: "llm",
    icon: <FileText className="w-5 h-5" />,
    title: "LLM Integration & Custom Fine-Tuning",
    description:
      "Not every use case is served by an off-the-shelf foundation model. When your application demands domain-specific language, proprietary terminology, or highly consistent output formatting, our hire LLM engineer capability delivers custom fine-tuned models trained on your data. We also architect retrieval-augmented generation (RAG) pipelines that ground model responses in your proprietary knowledge base — dramatically reducing hallucinations and increasing factual accuracy in production.",
  },
  {
    id: "automation",
    icon: <Zap className="w-5 h-5" />,
    title: "AI Workflow Automation & Process Intelligence",
    description:
      "Manual, repetitive work is the single biggest drain on operational efficiency in every industry. Our AI workflow automation developers design and implement intelligent automation systems that connect Caffeine AI agents with your existing tools — CRMs, ERPs, data warehouses, communication platforms, and document systems. The result is end-to-end workflows that operate autonomously at enterprise scale, eliminating human error and freeing your team for high-leverage work.",
  },
  {
    id: "internal-tools",
    icon: <Monitor className="w-5 h-5" />,
    title: "Internal Tools & Custom AI Dashboards",
    description:
      "Replace disconnected spreadsheets, manual reporting cycles, and fragmented data processes with powerful AI-native internal tools. Our hire AI caffeine developers service builds custom dashboards, admin panels, and intelligent automation systems that streamline operations from day one — delivering measurable productivity gains within the first week of deployment.",
  },
  {
    id: "generative-ai",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Generative AI Application Development",
    description:
      "From AI-powered content platforms and creative tools to intelligent document processing and synthetic data generation, our hire generative AI developer team builds end-to-end generative AI products on the Caffeine AI platform. We handle everything from model selection and prompt architecture to frontend integration, API design, and production deployment — one engagement, full stack.",
  },
  {
    id: "support",
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Application Optimisation & Ongoing Support",
    description:
      "Already have an application built on Caffeine AI? Our dedicated AI developer hire model covers code audits, agent performance optimisation, security hardening, LLM cost reduction, feature enhancements, and ongoing maintenance — ensuring your AI system scales reliably with your business and adopts new platform capabilities as they are released.",
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "customer-service",
    title: "AI Customer Service Platform",
    tag: "ChatGPT Integration",
    description:
      "Built an intelligent customer service platform for a leading e-commerce company, reducing support tickets by 60% and improving customer satisfaction scores by 35%.",
    metrics: ["60% ticket reduction", "35% higher satisfaction"],
    accentColor: "#6366f1",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Dashboard",
    tag: "Machine Learning",
    description:
      "Developed a real-time predictive analytics system for a financial services firm, enabling data-driven decisions that increased revenue by 25%.",
    metrics: ["25% revenue increase", "Real-time predictions"],
    accentColor: "#0ea5e9",
  },
  {
    id: "document-processing",
    title: "Intelligent Document Processing",
    tag: "Process Automation",
    description:
      "Automated document processing for a legal firm, extracting key data from thousands of contracts per day with 99.2% accuracy.",
    metrics: ["99.2% accuracy", "10x faster processing"],
    accentColor: "#10b981",
  },
];

const STATS = [
  { value: "150+", label: "Caffeine AI Projects Delivered" },
  { value: "5-10x", label: "Faster Than Traditional Dev" },
  { value: "3 Days", label: "MVP Turnaround" },
  { value: "100%", label: "Code Ownership Guaranteed" },
];

const WHY_BENEFITS = [
  {
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
    title: "5–10x Faster Delivery",
    desc: "Deliver production-ready AI agents and applications in days, not quarters. Our hire AI engineers for project model eliminates onboarding lag and accelerates time-to-value from sprint one.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-violet-600" />,
    title: "Up to 60% Lower Costs",
    desc: "Specialist Caffeine AI developers work with battle-tested agent frameworks, pre-built integration patterns, and reusable orchestration components — cutting development costs dramatically versus building from scratch.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Enterprise-Grade Quality",
    desc: "Every AI system undergoes security auditing, load testing, compliance review, and performance validation before deployment. No shortcuts, no technical debt handed to your team.",
  },
  {
    icon: <Eye className="w-6 h-6 text-emerald-600" />,
    title: "100% Code & IP Ownership",
    desc: "Full GitHub repository access from day one. Your application, your models, your data — zero vendor lock-in, unconditionally.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-600" />,
    title: "Purpose-Built AI Workflow Automation",
    desc: "Our AI workflow automation developers design and implement intelligent automation systems that eliminate manual bottlenecks across operations, finance, support, and product functions — at scale.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-600" />,
    title: "Global Talent, Zero Friction",
    desc: "When you hire remote AI developers through our team, you access a pre-vetted pool of Caffeine AI specialists immediately — without the risk, delay, and cost of a direct hire process.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-teal-600" />,
    title: "Rapid Iteration Built In",
    desc: "Pivot agent behaviours, adjust LLM logic, or add new automation flows after real-world user feedback — without burning engineering sprints or incurring sunk salary cost.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    icon: <FileText className="w-5 h-5" />,
    title: "Discovery & Requirement Scoping",
    desc: "Free consultation to map your AI use case, target users, data sources, integration requirements, and business goals. Precise scoping prevents costly revisions and misaligned deliverables.",
  },
  {
    num: "02",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Agent Architecture & Prompt Engineering",
    desc: "Our Caffeine AI experts design the agent topology, LLM orchestration strategy, RAG pipeline, and tool-calling schema. Every architectural decision is documented and justified against your specific requirements.",
  },
  {
    num: "03",
    icon: <Server className="w-5 h-5" />,
    title: "Human-Led Development & Integration",
    desc: "Senior Caffeine AI developers build, integrate, and rigorously test your application. Every component is code-reviewed for logic accuracy, performance, security, and business alignment before it progresses.",
  },
  {
    num: "04",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Security, Compliance & Quality Assurance",
    desc: "Full security assessments, GDPR and SOC 2 compliance checks, penetration testing, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
  },
  {
    num: "05",
    icon: <Rocket className="w-5 h-5" />,
    title: "Deployment, Handover & Ongoing Support",
    desc: "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration.",
  },
];

const TECH_STACK = [
  {
    category: "Frontend Technologies",
    color: "blue",
    bgClass: "bg-blue-50",
    textClass: "text-blue-700",
    borderClass: "border-blue-200",
    headerBg: "bg-blue-600",
    items: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "TanStack Router",
      "TanStack Query",
    ],
  },
  {
    category: "Backend & Infrastructure",
    color: "purple",
    bgClass: "bg-violet-50",
    textClass: "text-violet-700",
    borderClass: "border-violet-200",
    headerBg: "bg-violet-600",
    items: [
      "Motoko",
      "Internet Computer",
      "DFINITY SDK",
      "Canister Architecture",
      "Web3 Storage",
    ],
  },
  {
    category: "AI & ML",
    color: "green",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-700",
    borderClass: "border-emerald-200",
    headerBg: "bg-emerald-600",
    items: [
      "OpenAI GPT-4",
      "Claude AI",
      "LangChain",
      "Vector Databases",
      "Embeddings API",
      "RAG",
    ],
  },
  {
    category: "DevOps & Quality",
    color: "orange",
    bgClass: "bg-orange-50",
    textClass: "text-orange-700",
    borderClass: "border-orange-200",
    headerBg: "bg-orange-500",
    items: [
      "GitHub Actions",
      "Automated Testing",
      "DFX Deploy",
      "Type Safety",
      "Code Review",
      "Performance Monitoring",
    ],
  },
];

const TESTIMONIALS = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    quote:
      "The team delivered our AI-powered platform in just 3 weeks. The quality exceeded our expectations, and the ongoing support has been exceptional. We've seen a 40% increase in user engagement since launch.",
    rating: 5,
  },
  {
    id: "michael",
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Inc",
    quote:
      "Working with this team transformed our data processing pipeline. Their deep understanding of AI and modern architecture saved us months of development time and significant budget.",
    rating: 5,
  },
  {
    id: "emma",
    name: "Emma Rodriguez",
    role: "Founder",
    company: "StartupAI",
    quote:
      "From discovery to deployment, the process was seamless. They understood our vision perfectly and delivered a product that our customers absolutely love. Highly recommended!",
    rating: 5,
  },
];

const INDUSTRIES = [
  {
    icon: <Heart className="w-6 h-6" />,
    name: "Healthcare & Medical",
    desc: "AI diagnostics, patient data management, telehealth platforms, medical imaging analysis",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    name: "Finance & Fintech",
    desc: "Fraud detection, algorithmic trading, risk assessment, automated compliance",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <Package className="w-6 h-6" />,
    name: "E-Commerce & Retail",
    desc: "Personalization engines, inventory AI, dynamic pricing, customer behavior analysis",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    name: "Education & EdTech",
    desc: "Adaptive learning, automated grading, student analytics, content personalization",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <Home className="w-6 h-6" />,
    name: "Real Estate",
    desc: "Property valuation AI, market analysis, virtual tours, lead scoring",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    name: "Legal & Compliance",
    desc: "Document analysis, contract review, regulatory compliance, case research",
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    name: "Manufacturing",
    desc: "Predictive maintenance, quality control AI, supply chain optimization",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: <Star className="w-6 h-6" />,
    name: "Media & Entertainment",
    desc: "Content recommendation, audience analytics, automated content creation",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

const FAQS = [
  {
    id: "faq1",
    question: "What exactly does a Caffeine AI developer do?",
    answer:
      "A Caffeine AI developer uses the Caffeine AI platform to design, build, and deploy LLM-powered applications and autonomous AI agents. They combine advanced prompt engineering, agent orchestration, and traditional software development expertise to produce clean, scalable, production-ready AI systems far faster and more reliably than a general-purpose developer learning the platform on the job. When you hire caffeine developers, you are engaging specialists who know how to get maximum value from the platform immediately.",
  },
  {
    id: "faq2",
    question: "How quickly can you deliver an AI MVP using Caffeine AI?",
    answer:
      "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom LLM integrations, multi-step agent orchestration, role-based access, and enterprise dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code with full documentation, not a throwaway prototype.",
  },
  {
    id: "faq3",
    question: "What types of applications can be built with Caffeine AI?",
    answer:
      "Our hire AI caffeine developers service covers a wide range of applications: autonomous AI agents, AI-powered SaaS platforms, intelligent document processing systems, conversational AI assistants, automated workflow systems, generative AI content tools, LLM-integrated CRMs, internal knowledge bases, AI-driven analytics dashboards, and multi-step agentic automation pipelines. If a use case benefits from language understanding, autonomous reasoning, or intelligent automation, Caffeine AI can power it.",
  },
  {
    id: "faq4",
    question:
      "Is production code built on Caffeine AI secure and enterprise-ready?",
    answer:
      "Absolutely — when built by specialists. Our team conducts full security audits, implements appropriate data handling and model output validation, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every Caffeine AI build before deployment. Security is designed into the architecture from the first line of code, not bolted on at the end.",
  },
  {
    id: "faq5",
    question:
      "Will I own the code and AI systems after the project is complete?",
    answer:
      "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, agent configuration files, and zero vendor lock-in. Your application, your agents, your data — always and entirely.",
  },
  {
    id: "faq6",
    question: "Do you offer post-launch support for Caffeine AI applications?",
    answer:
      "Yes. We offer flexible post-launch support packages covering bug fixes, agent behaviour refinement, LLM version upgrades, RAG pipeline tuning, performance and cost optimisation, security updates, and feature additions. Our hire caffeine experts model is designed for long-term strategic partnership, not one-time delivery. As the Caffeine AI platform evolves, we help you adopt new capabilities quickly and safely.",
  },
];

const WHO_SHOULD_HIRE = [
  {
    title: "Startups & Founders",
    desc: "Startups and Founders launching an AI-native product without the overhead of a large internal engineering team are the most natural fit. The ability to hire remote AI developers with genuine Caffeine AI depth means you can get a working, intelligent product into users' hands within days — at a fraction of the cost of a traditional engineering hire. Speed to market is the single most critical early-stage objective, and Caffeine AI development makes it achievable.",
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "SMEs & Growing Businesses",
    desc: "SMEs and Growing Businesses benefit enormously from custom AI workflow automation, intelligent document processing, and Caffeine AI-powered internal tools. Rather than waiting months for a bespoke software project, businesses can hire AI engineers for project-based engagements and have production-ready AI systems running within weeks — without the overhead of growing a permanent AI team.",
    icon: <Building2 className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Enterprise Teams",
    desc: "Enterprise Teams use Caffeine AI development to accelerate proof-of-concept builds, automate high-volume internal workflows, and launch AI-powered products at speed. With expert oversight from our dedicated AI developer hire model, enterprise-grade security, compliance, and operational observability are fully guaranteed throughout every phase of delivery.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Agencies & Consultancies",
    desc: "Agencies and Consultancies are increasingly using Caffeine AI to deliver client projects faster and at significantly higher margins. Our AI agent automation services and generative AI development capabilities are available as white-label partnerships for agencies that want the speed advantage of a specialist Caffeine AI team without the internal learning curve or platform investment.",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
  },
];

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPES = [
  "Web Application",
  "Mobile App",
  "AI Integration",
  "Data Analytics",
  "Custom AI Model",
  "Other",
];

function FAQItem({ faq }: { faq: (typeof FAQS)[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-indigo-300 shadow-sm" : "border-gray-200"
        }`}
      data-ocid={`faq.item.${faq.id}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        data-ocid={`faq.toggle.${faq.id}`}
        aria-expanded={open}
      >
        <span
          className={`font-display font-semibold text-sm md:text-base ${open ? "text-indigo-600" : "text-gray-900"}`}
        >
          {faq.question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-indigo-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-indigo-100 pt-4">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    aiProduct: "",
    message: "",
  });

  const EMPTY_FORM = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    aiProduct: "",
    message: "",
  };

  const [errors, setErrors] = useState<any>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = (form: any) => {
    const errors: any = {};

    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    if (!form.service) errors.service = "Service is required";
    if (!form.message) errors.message = "Message is required";

    return errors;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    try {
      await submitContactForm(form);

      toast.success("Message sent successfully");

      setForm(EMPTY_FORM);
      setErrors({});
      setFormSubmitted(true); // ✅ FIXED
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all w-full";

  const selectClass =
    "px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all w-full appearance-none";

  const SERVICE_OPTIONS = ["AI Development", "Automation", "Consulting"];

  const AI_PRODUCT_OPTIONS = [
    "Chatbot",
    "Recommendation Engine",
    "Computer Vision",
  ];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #f5f3ff 0%, #ede9fe 40%, #f8f7ff 100%)",
        }}
        data-ocid="hero.section"
      >
        <div
          aria-hidden="true"
          className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #c4b5fd, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a5b4fc, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* <div
            className="mb-6 text-xs text-black flex items-center gap-1.5 font-medium"
            data-ocid="hero.breadcrumb"
          >
            <span>Solutions</span>
            <span>›</span>
            <span className="text-indigo-600">Hire AI Developer</span>
          </div> */}

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Badge
                className="mb-6 bg-violet-100 text-violet-700 border-violet-200 text-xs font-display tracking-wide px-3 py-1 rounded-full"
                data-ocid="hero.badge"
              >
                ✦ Expert AI Development Team
              </Badge>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 text-gray-900">
                <span>Hire a</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Caffeine AI Developer
                </span>
              </h1>

              <p className="text-gray-800 text-xl font-display font-semibold mb-3">
                Build Faster. Automate Deeper. Deploy with Confidence.
              </p>
              <p className="text-gray-700 text-base max-w-2xl leading-relaxed mb-9">
                Expert Caffeine AI Developers | LLM Engineers | AI Agent &amp;
                Workflow Automation Specialists
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => navigate("/ai-expert")}
                  className="relative overflow-hidden font-orbitron font-bold tracking-wider 
  px-6 sm:px-8 py-3 sm:py-4 rounded-xl
  border border-indigo-400/40 
  bg-gradient-to-r from-[#1a1f3a] to-[#2d1b69] 
  text-indigo-300
  transition-all duration-300 ease-out
  hover:text-white hover:border-indigo-300
  hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
  hover:-translate-y-1
  data-ocid='hero.cta_primary.button'"
                >
                  Get a Free Consultation
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const el = document.getElementById("portfolio");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative overflow-hidden font-orbitron font-bold tracking-wider 
  px-6 sm:px-8 py-3 sm:py-4 rounded-xl
  border border-indigo-400/30 
  bg-transparent
  text-indigo-400
  transition-all duration-300 ease-out
  hover:bg-indigo-500/10 hover:text-black hover:border-indigo-300
  hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
  hover:-translate-y-1
  data-ocid='hero.cta_secondary.button'"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 sm:gap-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              data-ocid="hero.stats.section"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display font-bold text-2xl text-gradient">
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-600 mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro / Ship Smarter Section ─────────────────────────── */}
      <section id="intro" className="bg-white py-16" data-ocid="intro.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Hire a Caffeine AI Developer — Ship Smarter, Scale Faster
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              The AI race is not won by the companies with the biggest budgets —
              it is won by the teams that hire AI engineers for project delivery
              with the right specialist knowledge. Caffeine AI is one of the
              fastest-growing platforms for enterprise-grade autonomous agent
              development and LLM-powered application building, and the
              businesses choosing to hire caffeine developers today are locking
              in a compounding speed advantage their competitors will struggle
              to close.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Our team of certified Caffeine AI developers, LLM engineers, and
              AI automation specialists merges the raw generative power of the
              Caffeine AI platform with deep software engineering discipline —
              delivering production-grade AI agents, intelligent automation
              systems, and LLM-native SaaS products that create measurable ROI
              from the first sprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What Is Caffeine AI Development ─────────────────────── */}
      <section
        id="what-is"
        className="py-16"
        style={{ backgroundColor: "#f8f9fa" }}
        data-ocid="what_is.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              What Is Caffeine AI Development?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Caffeine AI is a next-generation platform purpose-built for
              designing, orchestrating, and deploying large language
              model-powered applications and autonomous AI agents at enterprise
              scale. Unlike general-purpose AI tools, Caffeine AI provides a
              structured, composable framework for building complex multi-agent
              workflows, integrating proprietary data sources, and shipping
              production-ready AI systems with the reliability and observability
              that serious businesses demand.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              When enterprises and growth-stage startups choose to hire caffeine
              experts, they gain access to a platform that dramatically
              accelerates the delivery of conversational AI, document
              intelligence, automated decision-making, and multi-step agentic
              workflows — all with the consistency and auditability that
              general-purpose LLM wrappers simply cannot provide.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              However, Caffeine AI is a tool, not a shortcut. Extracting genuine
              business value requires skilled professionals who understand
              prompt architecture, agent orchestration, retrieval-augmented
              generation (RAG), LLM fine-tuning, and production-grade deployment
              pipelines. That is precisely what our dedicated AI developer hire
              team brings to every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services / What We Deliver ───────────────────────────── */}
      <section
        id="services"
        className="bg-white py-16"
        data-ocid="services.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              OUR SERVICES
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Our Caffeine AI Development Services
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              We provide end-to-end Caffeine AI development services tailored
              precisely to your industry, workflow complexity, and business
              goals:
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                className="bg-white border border-border rounded-xl p-6 hover-lift shadow-card flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-gray-900 mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="mt-auto self-start bg-indigo-600 text-white hover:bg-indigo-700 transition-smooth text-xs font-display font-semibold rounded-full px-4 py-2 border-0"
                  onClick={() => navigate({ to: "/contact" })}
                  data-ocid={`services.explore.button.${i + 1}`}
                >
                  Explore →
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Leading Businesses Choose Us ─────────────────────── */}
      <section
        id="why-us"
        className="py-16"
        style={{ backgroundColor: "#f8f9fa" }}
        data-ocid="why_us.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              OUR ADVANTAGES
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-2 leading-tight">
              Why Hire a Caffeine AI Developer
            </h2>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 leading-tight">
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Instead of Building Traditionally?
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #7c3aed)",
                  }}
                />
              </span>
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mt-4">
              The advantages of choosing to hire AI caffeine developers from a
              specialist team — rather than attempting to grow an internal AI
              capability from scratch — are concrete, measurable, and immediate:
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="why_us.list"
          >
            {WHY_BENEFITS.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white border border-border rounded-xl p-6 flex flex-col gap-4 hover-lift shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`why_us.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ──────────────────────────────────────────── */}
      <section
        id="solutions"
        className="py-14"
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
        }}
        data-ocid="stats.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`stats.item.${i + 1}`}
              >
                <div className="font-display font-bold text-4xl text-white mb-1">
                  {s.value}
                </div>
                <div className="text-indigo-200 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Our Development Process Works ────────────────────── */}
      <section
        id="process"
        className="bg-white py-16"
        data-ocid="process.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              OUR PROCESS
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              How Our Caffeine AI Development Process Works
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              A transparent, five-stage workflow that combines the speed of
              Caffeine AI's agent platform with senior human engineering rigour:
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="process.list"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative bg-white border border-border rounded-xl p-6 hover-lift shadow-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`process.item.${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-indigo-600">{step.icon}</span>
                      <h3 className="font-display font-semibold text-sm text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────── */}
      <section
        id="tech-stack"
        className="py-16"
        style={{ backgroundColor: "#f8f9fa" }}
        data-ocid="techstack.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              TECHNOLOGY
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Caffeine AI Tech Stack
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Battle-tested technologies powering next-generation applications.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-ocid="techstack.list"
          >
            {TECH_STACK.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`techstack.item.${i + 1}`}
              >
                <div className={`${cat.headerBg} px-5 py-3`}>
                  <h3 className="font-display font-semibold text-sm text-white">
                    {cat.category}
                  </h3>
                </div>
                <div className="p-5 flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${cat.bgClass} ${cat.textClass} ${cat.borderClass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio / Work That Speaks ──────────────────────────── */}
      <section
        id="portfolio"
        className="bg-white py-16"
        data-ocid="portfolio.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              OUR PORTFOLIO
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Work That Speaks for Itself
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Explore our AI development case studies and see the real business
              impact we've delivered
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="portfolio.list"
          >
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                className="bg-white rounded-xl overflow-hidden border border-border hover-lift shadow-card flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`portfolio.item.${i + 1}`}
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: cs.accentColor }}
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <Badge className="self-start bg-indigo-50 text-indigo-600 border-indigo-100 text-xs font-display">
                    {cs.tag}
                  </Badge>
                  <h3 className="font-display font-semibold text-base text-gray-900">
                    {cs.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs bg-green-50 text-green-700 border border-green-100 rounded-full px-2.5 py-0.5 font-medium"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="self-start bg-indigo-600 text-white hover:bg-indigo-700 transition-smooth text-xs font-display font-semibold rounded-full px-4 py-2 border-0 mt-auto"
                    onClick={() => navigate({ to: "/contact" })}
                    data-ocid={`portfolio.view_case_study.button.${i + 1}`}
                  >
                    View Case Study →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-16"
        style={{ backgroundColor: "#f8f9fa" }}
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              CLIENT REVIEWS
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Real results from real businesses who trusted us to build their
              vision.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-white border border-border rounded-xl p-6 flex flex-col gap-4 shadow-card hover-lift"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <span className="text-indigo-600 text-2xl font-serif leading-none">
                    "
                  </span>
                </div>
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }, (_, idx) => (
                    <Star
                      key={`star-${t.id}-${idx}`}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-display font-bold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-indigo-600 text-xs mt-0.5">
                    {t.role} at {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ──────────────────────────────────── */}
      <section
        id="industries"
        className="bg-white py-16"
        data-ocid="industries.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              INDUSTRIES
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              We deliver specialized AI solutions across diverse industries.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-ocid="industries.list"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 hover-lift shadow-card cursor-pointer group"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                data-ocid={`industries.item.${i + 1}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${ind.bg} flex items-center justify-center ${ind.color}`}
                >
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Should Hire ──────────────────────────────────────── */}
      <section
        id="who-should-hire"
        className="py-16"
        style={{ backgroundColor: "#f8f9fa" }}
        data-ocid="who_should_hire.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              IS THIS FOR YOU?
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Who Should Hire a Caffeine AI Developer?
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-ocid="who_should_hire.list"
          >
            {WHO_SHOULD_HIRE.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white border border-border rounded-xl p-6 flex flex-col gap-4 hover-lift shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`who_should_hire.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="bg-white py-16" data-ocid="faq.section">
        <div className="px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-indigo-600 text-xs font-display font-semibold uppercase tracking-widest mb-2">
              FAQs
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Frequently Asked Questions About Caffeine AI Development
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Everything you need to know before you start building.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3" data-ocid="faq.list">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <FAQItem faq={faq} idx={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Build Smarter CTA ───────────────────────────── */}
      <section
        id="build-smarter"
        className="relative overflow-hidden py-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        }}
        data-ocid="build_smarter.section"
      >
        {/* Decorative dots grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "#6366f1" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "#818cf8" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Badge className="mb-6 bg-indigo-900/60 text-indigo-300 border-indigo-700 text-xs font-display tracking-wide px-3 py-1 rounded-full">
              ✦ Start Building Today
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Ready to Build Smarter with a{" "}
              <span className="text-indigo-400">Caffeine AI Developer?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Stop waiting months for AI software that should take days. Hire a
              certified Caffeine AI developer today and launch your next
              intelligent product with agent-grade power and production-ready
              engineering quality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-indigo text-white border-0 hover:opacity-90 transition-smooth font-display font-semibold px-9 text-base rounded-full"
                onClick={() => navigate("/ai-expert")}
                data-ocid="build_smarter.start_project.button"
              >
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 transition-smooth font-display font-semibold px-9 text-base rounded-full bg-transparent"
                onClick={() => navigate("/ai-expert")}
                data-ocid="build_smarter.talk_expert.button"
              >
                Let's Talk with an AI Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Get In Touch Lead Form ────────────────────────────────── */}

    </>
  );
}


