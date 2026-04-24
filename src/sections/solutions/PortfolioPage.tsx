import Navbar from "@/components/Navbar";
// import { Layout } from "@/components/Layout";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────
type Category =
  | "All"
  | "AI Agents"
  | "Lovable AI"
  | "Emergent AI"
  | "Caffeine AI"
  | "E-commerce"
  | "Applications"
  | "MVP Design";

interface Project {
  id: number;
  category: Exclude<Category, "All">;
  title: string;
  client: string;
  description: string;
  techStack: string[];
  results: string;
  tags: string[];
  accentBg: string;
  accentText: string;
  resultsBg: string;
  resultsText: string;
}

interface CaseStudy {
  id: number;
  categoryLabel: string;
  categoryColor: string;
  headline: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  team: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: 1,
    category: "AI Agents",
    title: "AutoDeal AI — Autonomous Sales Agent",
    client: "FinTech Startup, USA",
    description:
      "Built a fully autonomous sales agent that qualifies leads, schedules demos, sends follow-up emails, and updates CRM records without human intervention — reducing SDR workload by 80%.",
    techStack: ["LangGraph", "GPT-4o", "HubSpot API", "Python"],
    results:
      "80% reduction in SDR workload | 3x increase in qualified leads | $200K ARR pipeline automated",
    tags: ["AI Agent", "LangGraph", "GPT-4o", "Sales Automation"],
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 2,
    category: "AI Agents",
    title: "LegalMind — AI Contract Review Agent",
    client: "Legal Tech Company, UK",
    description:
      "Deployed a multi-agent legal document review system that extracts key clauses, flags risk items, and generates plain-English summaries — cutting lawyer review time by 70%.",
    techStack: ["CrewAI", "Claude 3.5", "LangChain", "Pinecone"],
    results:
      "70% faster contract review | 99.2% clause extraction accuracy | Handles 500+ contracts/day",
    tags: ["CrewAI", "Claude 3.5", "Legal AI", "RAG"],
    accentBg: "bg-purple-50",
    accentText: "text-purple-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 3,
    category: "AI Agents",
    title: "InventIQ — Supply Chain Optimization Agent",
    client: "Manufacturing Enterprise, Germany",
    description:
      "Developed an agentic AI system that monitors inventory levels, predicts demand spikes, triggers purchase orders autonomously, and alerts procurement teams — eliminating stockouts.",
    techStack: ["AutoGen", "GPT-4o", "SAP Integration", "Python"],
    results:
      "42% reduction in stockouts | $1.2M in saved inventory costs annually | 15min automated reorder cycles",
    tags: ["AutoGen", "Supply Chain", "GPT-4o", "Enterprise AI"],
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 4,
    category: "AI Agents",
    title: "SupportBot Pro — Tier-1 Customer Support Agent",
    client: "SaaS Platform, Canada",
    description:
      "Built a multi-agent customer support system that handles Tier-1 tickets end-to-end: reads tickets, searches knowledge base, generates solutions, escalates edge cases, and closes resolved tickets automatically.",
    techStack: ["LangGraph", "GPT-4 Turbo", "Zendesk API", "Pinecone"],
    results:
      "92% ticket resolution without human touch | 67% reduction in support costs | 4.8/5 CSAT score",
    tags: ["LangGraph", "Support Automation", "Zendesk", "NLP"],
    accentBg: "bg-green-50",
    accentText: "text-green-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 5,
    category: "Lovable AI",
    title: "RecruitFlow — AI-Powered Hiring Platform",
    client: "HR Tech Startup, USA",
    description:
      "Shipped a complete AI-powered recruitment platform in 11 days using Lovable.dev — applicant tracking, AI resume scoring, automated interview scheduling, and recruiter dashboards.",
    techStack: ["Lovable.dev", "React", "Supabase", "OpenAI Embeddings"],
    results:
      "Full ATS live in 11 days | 5x faster hiring cycle | Raised $500K seed after MVP demo",
    tags: ["Lovable.dev", "HR Tech", "MVP", "AI Scoring"],
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 6,
    category: "Lovable AI",
    title: "ContentForge — AI Content Studio",
    client: "Digital Marketing Agency, Australia",
    description:
      "Built a white-label AI content generation platform for agencies — SEO blog writer, social media scheduler, ad copy generator, and brand voice trainer in one dashboard.",
    techStack: ["Lovable.dev", "GPT-4o", "Stripe", "Node.js"],
    results:
      "Launched in 9 days | 200+ agency clients onboarded in 30 days | $18K MRR at Month 2",
    tags: ["Lovable.dev", "SaaS", "Content AI", "White-Label"],
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 7,
    category: "Emergent AI",
    title: "PriceGuard — Dynamic Pricing Intelligence System",
    client: "E-commerce Retailer, Netherlands",
    description:
      "Designed an emergent AI system that monitors competitor pricing, consumer demand signals, and inventory levels in real-time — dynamically adjusting prices across 50,000+ SKUs every 15 minutes.",
    techStack: ["Emergent AI", "Python", "Kafka", "PostgreSQL"],
    results:
      "12% increase in gross margin | $4.2M revenue uplift in Year 1 | 50K+ SKUs managed autonomously",
    tags: ["Emergent AI", "Dynamic Pricing", "E-commerce", "Autonomous"],
    accentBg: "bg-purple-50",
    accentText: "text-purple-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 8,
    category: "Emergent AI",
    title: "FraudSentinel — Adaptive Fraud Detection Engine",
    client: "Neo-Bank, Singapore",
    description:
      "Deployed an emergent AI fraud detection engine that continuously learns from transaction patterns, adapts to new attack vectors without retraining, and reduces false positives by 60%.",
    techStack: ["Emergent AI", "Kafka Streams", "PostgreSQL", "Kubernetes"],
    results:
      "60% fewer false positives | 99.97% fraud detection rate | $3.1M in fraud prevented Year 1",
    tags: ["Emergent AI", "Fraud Detection", "FinTech", "Real-Time"],
    accentBg: "bg-red-50",
    accentText: "text-red-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 9,
    category: "MVP Design",
    title: "SpaceList — AI Real Estate Discovery Platform MVP",
    client: "PropTech Startup, USA",
    description:
      "Built an AI-powered real estate discovery platform that uses NLP and ML to match buyers and renters with properties based on personal preferences, neighborhood data, and live market trends — turning a 2-hour search into a 5-minute experience.",
    techStack: ["React", "NLP", "Python", "OpenAI API", "Mapbox", "PostgreSQL"],
    results:
      "Reduced property search time by 60% — 2,400+ active users in first month",
    tags: ["MVP", "AI Application", "PropTech", "NLP"],
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 10,
    category: "Caffeine AI",
    title: "MeetMind — AI Meeting Summarizer",
    client: "Enterprise Team, UK",
    description:
      "Delivered a Caffeine AI-powered meeting intelligence tool that transcribes calls, identifies action items, assigns owners, tracks follow-ups, and integrates with Slack and Notion in real time.",
    techStack: ["Caffeine AI", "Whisper API", "GPT-4o", "Slack API"],
    results:
      "Built and deployed in 8 hours | 40% faster meeting follow-up | Adopted by 6 enterprise teams on Day 1",
    tags: ["Caffeine AI", "Meeting Intelligence", "Whisper", "Slack"],
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 11,
    category: "E-commerce",
    title: "LuxCart — Premium Fashion E-commerce Platform",
    client: "Luxury Fashion Brand, UAE",
    description:
      "Built a full-scale premium e-commerce platform with AI-powered product recommendations, virtual try-on preview, multi-currency checkout, loyalty points system, and a custom CMS for the merchandising team.",
    techStack: ["React", "Node.js", "Stripe", "OpenAI Embeddings"],
    results:
      "340% increase in conversion rate | $2.8M GMV in first 6 months | 4.9/5 app store rating",
    tags: ["E-commerce", "AI Recommendations", "Luxury Retail", "Full-Stack"],
    accentBg: "bg-yellow-50",
    accentText: "text-yellow-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 12,
    category: "E-commerce",
    title: "FreshRoute — Hyperlocal Grocery Delivery App",
    client: "Grocery Chain, India",
    description:
      "Developed a hyperlocal grocery delivery platform with real-time inventory sync, AI-driven demand forecasting, dynamic delivery slot allocation, and a driver management dashboard.",
    techStack: ["React Native Web", "Node.js", "Google Maps API", "Firebase"],
    results:
      "Live in 4 cities within 60 days | 25,000+ orders in Month 1 | 18-minute average delivery time",
    tags: ["E-commerce", "Hyperlocal", "Delivery", "AI Forecasting"],
    accentBg: "bg-green-50",
    accentText: "text-green-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 13,
    category: "Applications",
    title: "MediTrack — Patient Health Management App",
    client: "Healthcare Provider, USA",
    description:
      "Built a comprehensive patient health management application — appointment booking, prescription tracking, lab result viewer, AI-powered symptom checker, and secure telemedicine video consultations.",
    techStack: ["React", "Node.js", "WebRTC", "AWS"],
    results:
      "15,000+ patients onboarded in 90 days | 60% reduction in missed appointments | HIPAA compliant",
    tags: ["Healthcare App", "Telemedicine", "AI Symptom Checker", "HIPAA"],
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 14,
    category: "Applications",
    title: "EduSpark — Adaptive Learning Platform",
    client: "EdTech Company, Canada",
    description:
      "Built an adaptive learning platform that personalizes curriculum paths for K-12 students using AI — adjusting difficulty, pacing, and content format based on each student's learning style and performance data.",
    techStack: ["React", "Python", "GPT-4o", "AWS Lambda"],
    results:
      "32% improvement in test scores | 4.7/5 student satisfaction | 50,000+ learners in Year 1",
    tags: ["EdTech", "Adaptive AI", "Personalization", "K-12"],
    accentBg: "bg-purple-50",
    accentText: "text-purple-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 15,
    category: "MVP Design",
    title: "TrackZen — Habit & Productivity Tracker MVP",
    client: "Consumer App Startup, USA",
    description:
      "Designed and built a beautifully minimal habit tracking MVP in 14 days — streak visualization, smart reminders, weekly insight reports, and a gamified progress system. App Store ready on launch.",
    techStack: ["React", "Tailwind CSS", "Supabase", "Framer Motion"],
    results:
      "MVP live in 14 days | 2,000+ downloads in Week 1 | Featured in Product Hunt Top 10",
    tags: ["MVP", "Habit Tracker", "PWA", "Productivity"],
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
  {
    id: 16,
    category: "MVP Design",
    title: "NestFinder — AI Property Search MVP",
    client: "PropTech Startup, USA",
    description:
      "Built a next-generation real estate discovery MVP with AI-powered property matching, natural language search, neighborhood insights, and a mortgage calculator.",
    techStack: ["React", "GPT-4o", "Google Maps API", "PostgreSQL"],
    results:
      "MVP live in 18 days | $750K pre-seed raised on demo | 500+ beta users in Week 2",
    tags: ["MVP", "PropTech", "AI Search", "Natural Language"],
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    resultsBg: "bg-amber-50",
    resultsText: "text-amber-800",
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    categoryLabel: "AI Agents",
    categoryColor: "bg-indigo-100 text-indigo-700",
    headline: "From 40 hours of manual SDR work to zero — every week.",
    overview:
      "A FinTech startup came to us with a single problem: their 6-person SDR team was spending 85% of their time on repetitive qualification tasks and follow-up emails. We built AutoDeal AI — a LangGraph-powered multi-agent system that handles the entire top-of-funnel autonomously.",
    challenge:
      "Manual lead qualification, inconsistent follow-ups, CRM data entry overhead, and 72-hour average response time to inbound leads.",
    solution:
      "4-agent pipeline: Lead Qualifier → Outreach Writer → Calendar Scheduler → CRM Updater. Runs continuously, escalates only when human judgment is required.",
    outcome:
      "80% SDR workload eliminated | 3x qualified pipeline | Response time dropped from 72 hours to 4 minutes | $200K ARR pipeline now runs on autopilot.",
    timeline: "8 weeks",
    team: "1 AI Architect + 1 Backend Engineer",
  },
  {
    id: 2,
    categoryLabel: "E-commerce",
    categoryColor: "bg-yellow-100 text-yellow-700",
    headline: "A luxury brand's digital flagship — built for conversions.",
    overview:
      "A premium fashion label from Dubai needed a shopping experience that matched their brand prestige — and delivered real revenue. We built LuxCart from scratch: AI recommendations, virtual previews, multi-currency, and a custom CMS their team could run independently.",
    challenge:
      "Existing Shopify store had poor mobile UX, no personalization, and couldn't support the brand's regional pricing strategy for 12 currencies.",
    solution:
      "Custom-built React frontend with OpenAI Embeddings for product recommendations, Cloudinary for responsive imagery, Stripe for multi-currency checkout, and a bespoke CMS.",
    outcome:
      "340% increase in conversion rate | $2.8M GMV in 6 months | Mobile sessions up 180% | 99.9% uptime throughout Middle East peak sale season.",
    timeline: "12 weeks",
    team: "2 Frontend Engineers + 1 Backend Engineer + 1 UI Designer",
  },
  {
    id: 3,
    categoryLabel: "Lovable AI",
    categoryColor: "bg-blue-100 text-blue-700",
    headline: "An AI-powered ATS that raised $500K before it left beta.",
    overview:
      "A solo founder came to us with a validated idea and a tight deadline — a demo day in two weeks. We used Lovable.dev to ship a full recruitment platform: ATS, AI resume scoring, interview scheduling, and recruiter dashboards — in 11 days.",
    challenge:
      "Zero technical co-founder, $15K budget, 11-day deadline to a live demo in front of 30 investors.",
    solution:
      "Lovable.dev for full-stack scaffolding, Supabase for backend data, OpenAI Embeddings for AI resume scoring, Stripe for subscription billing — all integrated and live.",
    outcome:
      "Full ATS live in 11 days | $500K seed round closed at demo day | 5x faster hiring cycle than competitors | 3 enterprise clients signed in Month 1.",
    timeline: "11 days",
    team: "1 Lovable AI Developer + 1 PM",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "AI Agents",
  "Lovable AI",
  "Emergent AI",
  "Caffeine AI",
  "E-commerce",
  "Applications",
  "MVP Design",
];

const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "AI Platforms" },
  { value: 20, suffix: "+", label: "Industries" },
  { value: 15, suffix: "+", label: "Countries" },
];

// ─── Animated stat counter ───────────────────────────────────────────────────
function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = 16;
          const increment = (value / duration) * step;
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-item" data-ocid="portfolio.hero_stat">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full overflow-hidden"
      data-ocid={`portfolio.project_card.${project.id}`}
    >
      {/* 1 — Category pill */}
      <div className="px-5 pt-5 pb-0">
        <span
          className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${project.accentBg} ${project.accentText}`}
        >
          {project.category}
        </span>
      </div>

      {/* 2 — Title */}
      <div className="px-5 pt-3">
        <h3 className="font-display font-bold text-base leading-snug text-gray-900">
          {project.title}
        </h3>
      </div>

      {/* 3 — Client / location subtitle */}
      <div className="px-5 pt-1">
        <p className="text-xs text-gray-400 font-medium">{project.client}</p>
      </div>

      {/* 4 — Description */}
      <div className="px-5 pt-3 flex-1">
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
          {project.description}
        </p>
      </div>

      {/* 5 — Tech stack tags */}
      <div className="px-5 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 6 — Results highlight (amber background, always at bottom before tags) */}
      <div className="px-5 pt-4">
        <div className="rounded-lg p-3 bg-amber-50 border border-amber-200">
          <p className="text-xs font-semibold text-amber-800 leading-relaxed">
            {project.results}
          </p>
        </div>
      </div>

      {/* 7 — Category / filter tags */}
      <div className="px-5 pt-3 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full border border-gray-200 text-gray-500 bg-white font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Featured Case Study Card ────────────────────────────────────────────────
function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="case-study-card"
      data-ocid={`portfolio.case_study.${cs.id}`}
    >
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start gap-4 flex-wrap">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${cs.categoryColor}`}
          >
            {cs.categoryLabel}
          </span>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
            {cs.headline}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {cs.overview}
          </p>
        </div>

        {/* 3-column breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Challenge",
              content: cs.challenge,
              color: "border-red-200 bg-red-50",
            },
            {
              label: "Solution",
              content: cs.solution,
              color: "border-blue-200 bg-blue-50",
            },
            {
              label: "Outcome",
              content: cs.outcome,
              color: "border-green-200 bg-green-50",
            },
          ].map(({ label, content, color }) => (
            <div key={label} className={`rounded-lg border p-4 ${color}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {label}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer meta */}
        <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Timeline
            </span>
            <p className="text-sm font-semibold text-foreground">
              {cs.timeline}
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Team
            </span>
            <p className="text-sm font-semibold text-foreground">{cs.team}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        {/* Dot-grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.52 0.22 264 / 0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Indigo gradient stripe */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-5 border border-indigo-100">
              500+ Completed Projects
            </span>

            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-5 leading-tight">
              Our Work. <span className="text-gradient">Your Inspiration.</span>
            </h1>

            <p className="portfolio-subtitle mx-auto mb-8 text-base md:text-lg">
              From autonomous AI agents to full-scale e-commerce platforms and
              rapid MVPs — explore 500+ projects built for founders,
              enterprises, and agencies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                type="button"
                onClick={scrollToGrid}
                className="text-white border-0 hover:opacity-90 transition font-semibold px-8 text-base rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                data-ocid="portfolio.hero.view_all_button"
              >
                View All Projects
              </button>

              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-smooth"
                data-ocid="portfolio.hero.start_project_button"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8 border-t border-border"
          >
            {STATS.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + PROJECT GRID ────────────────────────────────── */}
      <section
        ref={gridRef}
        className="bg-muted/30 py-16 md:py-20"
        data-ocid="portfolio.grid.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
              Hire the Right AI Specialist for Your Product
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              6 specialisations. One expert team. Every AI platform covered.
            </p>
          </motion.div>

          <div className="flex gap-2 overflow-x-auto pb-3 mt-6 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-button whitespace-nowrap shrink-0 ${activeCategory === cat
                  ? "filter-button-active"
                  : "filter-button-inactive"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── FEATURED CASE STUDIES ───────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3 border border-indigo-100 uppercase tracking-wide">
              Deep Dives
            </span>

            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
              Featured Case Studies
            </h2>

            <p className="text-muted-foreground text-base max-w-xl">
              Behind every number is a story. Here are three that defined the impact of our work.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1e2a4a 0%, #2d2060 50%, #1a1040 100%)",
        }}
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
              From AI agent pipelines to e-commerce platforms and rapid MVPs —
              tell us what you're building and we'll match you with the right
              team in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-sm bg-white text-indigo-800 hover:bg-indigo-50 transition-smooth shadow-lg"
              >
                Start Your Project →
              </a>

              <a
                href="/hire-ai-developers"
                className="px-8 py-3.5 rounded-full font-bold text-sm border border-white/40 text-white/90 hover:bg-white/10 transition-smooth"
              >
                View All Services
              </a>
            </div>

            <p className="text-white/45 text-xs">
              No commitment required · NDA on first call · Response within 1 Business Day
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
