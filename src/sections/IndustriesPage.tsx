import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/api/contactApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Award,
  BarChart2,
  Bot,
  Brain,
  Briefcase,
  Building,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Code2,
  Cpu,
  Database,
  Eye,
  Factory,
  Film,
  GraduationCap,
  Heart,
  Layers,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plane,
  Rocket,
  Scale,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "300+", label: "Expert Professionals" },
  { value: "99%", label: "Client Satisfaction" },
];

const INDUSTRIES = [
  {
    id: "healthcare",
    icon: <Heart className="w-6 h-6" />,
    name: "Healthcare & MedTech",
    desc: "AI diagnostics, EHR integrations, telemedicine platforms, and clinical workflow automation.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    id: "finance",
    icon: <BarChart2 className="w-6 h-6" />,
    name: "Finance & Fintech",
    desc: "Fraud detection, algorithmic trading, robo-advisors, and AI-powered credit scoring.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "retail",
    icon: <ShoppingCart className="w-6 h-6" />,
    name: "Retail & E-Commerce",
    desc: "Personalized recommendations, inventory optimization, AI chatbots, and demand forecasting.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: "manufacturing",
    icon: <Factory className="w-6 h-6" />,
    name: "Manufacturing & Industry 4.0",
    desc: "Predictive maintenance, quality control automation, supply chain AI, and smart factory solutions.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "education",
    icon: <GraduationCap className="w-6 h-6" />,
    name: "Education & EdTech",
    desc: "Adaptive learning platforms, AI tutors, student analytics, and automated grading systems.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    id: "realestate",
    icon: <Building2 className="w-6 h-6" />,
    name: "Real Estate & PropTech",
    desc: "Property valuation AI, smart search, virtual tours, and investment analysis platforms.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    id: "legal",
    icon: <Scale className="w-6 h-6" />,
    name: "Legal & LegalTech",
    desc: "Contract analysis, legal research AI, case prediction, and document automation.",
    color: "text-indigo-700",
    bg: "bg-indigo-50",
  },
  {
    id: "logistics",
    icon: <Truck className="w-6 h-6" />,
    name: "Logistics & Supply Chain",
    desc: "Route optimization, warehouse AI, last-mile delivery solutions, and demand sensing.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: "insurance",
    icon: <Shield className="w-6 h-6" />,
    name: "Insurance & InsurTech",
    desc: "Risk scoring, claims automation, fraud prevention, and personalized policy pricing.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: "energy",
    icon: <Leaf className="w-6 h-6" />,
    name: "Energy & CleanTech",
    desc: "Smart grid optimization, renewable energy forecasting, carbon tracking, and consumption analytics.",
    color: "text-lime-600",
    bg: "bg-lime-50",
  },
  {
    id: "media",
    icon: <Film className="w-6 h-6" />,
    name: "Media & Entertainment",
    desc: "Content recommendation engines, AI video editing, audience analytics, and personalization at scale.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    id: "travel",
    icon: <Plane className="w-6 h-6" />,
    name: "Travel & Hospitality",
    desc: "Dynamic pricing, AI concierge, itinerary planning, and customer experience automation.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
];

const WHY_CHOOSE = [
  {
    icon: <Award className="w-6 h-6 text-indigo-600" />,
    title: "Deep Domain Expertise",
    desc: "Our specialists have worked directly in the industries they serve, not just built software for them.",
  },
  {
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    title: "End-to-End Delivery",
    desc: "From strategy to deployment, we own the full lifecycle — design, build, test, launch, and support.",
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    title: "AI-First Approach",
    desc: "Every solution is architected with AI at its core, not bolted on as an afterthought.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
    title: "Proven Track Record",
    desc: "500+ successful projects delivered across 10+ industries with a 99% client satisfaction rate.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
    title: "Scalable Architecture",
    desc: "Solutions built to grow with your business — from MVP to enterprise-scale deployment.",
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock monitoring, proactive alerts, and dedicated support engineers.",
  },
];

const SERVICES = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Custom AI Models",
    desc: "Build and fine-tune ML models specific to your industry data and use cases.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Analytics Platforms",
    desc: "Turn raw operational data into actionable business intelligence dashboards.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Process Automation",
    desc: "Eliminate repetitive workflows with intelligent RPA and AI-driven automation.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Predictive Systems",
    desc: "Forecast demand, risk, churn, and opportunities before they happen.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Integration & APIs",
    desc: "Connect legacy systems with modern AI tools via robust middleware and APIs.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Chatbots & Agents",
    desc: "Deploy conversational agents trained on your domain knowledge and workflows.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Computer Vision",
    desc: "Visual inspection, document digitization, facial recognition, and video analytics.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "NLP Solutions",
    desc: "Sentiment analysis, document summarization, named entity recognition, and multilingual AI.",
  },
];

const PROCESS = [
  {
    num: "1",
    title: "Discovery & Requirements",
    desc: "We learn your industry, map your workflows, and define clear technical requirements.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    num: "2",
    title: "Solution Architecture",
    desc: "Our architects design a scalable, AI-first solution blueprint tailored to your industry.",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    num: "3",
    title: "Agile Development",
    desc: "Iterative sprints with bi-weekly demos, continuous testing, and transparent progress tracking.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    num: "4",
    title: "Quality & Compliance",
    desc: "Rigorous QA, security audits, and industry-specific compliance validation (HIPAA, SOC2, GDPR).",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    num: "5",
    title: "Launch & Growth",
    desc: "Smooth deployment, team training, monitoring, and ongoing optimization post-launch.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const CASE_STUDIES = [
  {
    id: "cs-health",
    tag: "Healthcare",
    tagColor: "text-rose-600 bg-rose-50 border-rose-100",
    accentColor: "#f43f5e",
    title: "HealthFlow AI",
    challenge:
      "A hospital network needed to reduce patient triage time by automating intake workflows.",
    solution:
      "Built an AI-powered triage assistant that analyzed symptoms, patient history, and vitals in real time.",
    result:
      "40% reduction in triage time, 95% diagnostic accuracy, deployed across 12 hospital locations.",
    tags: ["Healthcare", "AI Automation"],
  },
  {
    id: "cs-finance",
    tag: "Finance",
    tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    accentColor: "#10b981",
    title: "TradeSmart Platform",
    challenge:
      "A fintech startup needed a real-time fraud detection engine capable of handling 50K+ transactions/sec.",
    solution:
      "Designed a streaming ML pipeline with anomaly detection models trained on historical fraud patterns.",
    result:
      "99.2% fraud detection accuracy, $2.3M in prevented losses in the first quarter.",
    tags: ["Finance", "Machine Learning"],
  },
  {
    id: "cs-retail",
    tag: "E-Commerce",
    tagColor: "text-orange-600 bg-orange-50 border-orange-100",
    accentColor: "#f97316",
    title: "RetailMind",
    challenge:
      "An e-commerce brand was losing customers to irrelevant product recommendations.",
    solution:
      "Deployed a real-time personalization engine using collaborative filtering and behavioral AI.",
    result:
      "32% increase in average order value, 41% improvement in click-through rate on recommendations.",
    tags: ["Retail", "Personalization AI"],
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Tech2Globe transformed our diagnostic workflows. Their AI platform reduced our radiologist workload by 60% while improving accuracy. The team's healthcare domain knowledge was exceptional.",
    name: "Dr. Sarah Mitchell",
    title: "CTO",
    company: "MedCore Systems",
    stars: 5,
  },
  {
    id: "t2",
    quote:
      "The fraud detection system they built handles millions of transactions daily without a single missed alert. ROI was visible within 6 weeks of deployment.",
    name: "James Harrington",
    title: "VP Engineering",
    company: "NexPay",
    stars: 5,
  },
  {
    id: "t3",
    quote:
      "We launched our AI-powered retail personalization engine in 8 weeks. The Tech2Globe team delivered beyond expectations — on time and on budget.",
    name: "Linda Park",
    title: "Head of Digital",
    company: "ShopZen",
    stars: 5,
  },
];

const WHO_WE_WORK_WITH = [
  {
    icon: <Building className="w-6 h-6 text-indigo-600" />,
    title: "Enterprise Corporations",
    desc: "Large organizations scaling AI initiatives across business units globally.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-violet-600" />,
    title: "Growth-Stage Startups",
    desc: "Series A–C companies building their core AI product or platform.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Digital Agencies",
    desc: "Marketing and product agencies adding AI capability for their clients.",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    title: "Government & Public Sector",
    desc: "Public institutions modernizing legacy systems with AI-powered solutions.",
  },
];

const FAQS = [
  {
    id: "faq1",
    question: "What industries does Tech2Globe specialize in?",
    answer:
      "We work across 10+ industries including healthcare, fintech, retail, manufacturing, education, real estate, legal, logistics, insurance, energy, media, and travel. Our team includes domain specialists for each sector.",
  },
  {
    id: "faq2",
    question: "How long does an AI solution typically take to develop?",
    answer:
      "Project timelines vary from 6–8 weeks for targeted AI modules to 6–12 months for full enterprise platforms. We use agile sprints so you see working demos every 2 weeks.",
  },
  {
    id: "faq3",
    question: "Do you work with legacy systems?",
    answer:
      "Yes. We specialize in connecting legacy infrastructure with modern AI tools using API middleware, ETL pipelines, and microservices architecture.",
  },
  {
    id: "faq4",
    question: "What compliance standards do you support?",
    answer:
      "Our solutions are built with compliance-first architecture supporting HIPAA, SOC 2 Type II, GDPR, PCI-DSS, and ISO 27001 depending on industry requirements.",
  },
  {
    id: "faq5",
    question: "Can you start with a small pilot before full deployment?",
    answer:
      "Absolutely. We recommend starting with a focused AI pilot (4–6 weeks) to validate the approach and demonstrate ROI before scaling.",
  },
  {
    id: "faq6",
    question: "What happens after launch?",
    answer:
      "We offer 24/7 monitoring, monthly performance reports, quarterly model retraining, and a dedicated support engineer for all production deployments.",
  },
];

const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Finance",
  "Retail",
  "Manufacturing",
  "Education",
  "Real Estate",
  "Legal",
  "Logistics",
  "Insurance",
  "Energy",
  "Media",
  "Travel",
  "Other",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function FAQItem({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${open ? "border-indigo-300 shadow-sm" : "border-gray-200"}`}
      data-ocid={`faq.item.${faq.id}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-indigo-50/40 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        data-ocid={`faq.toggle.${faq.id}`}
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
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-indigo-100 pt-4 bg-white">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

interface ContactState {
  fullName: string;
  email: string;
  company: string;
  country: string;
  platform: string;
  budget: string;
  timeline: string;
  description: string;
}

export default function IndustriesPage() {
  const navigate = useNavigate();
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const selectClass =
    "w-full rounded-lg border border-gray-200 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500";

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


  const SERVICE_OPTIONS = [
    "Custom AI Development",
    "AI Consulting",
    "Automation",
    "Data Analytics",
    "Machine Learning",
  ];

  const AI_PRODUCT_OPTIONS = [
    "Chatbot",
    "Recommendation Engine",
    "Computer Vision",
    "NLP System",
    "Predictive Analytics",
  ];


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
      setSubmitted(true); // ✅ ensure UI uses this
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setSubmitting(false); // ✅ VERY IMPORTANT
    }
  }

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #f5f3ff 50%, #ede9fe 100%)",
        }}
        data-ocid="hero.section"
      >
        {/* Decorative blobs */}
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #c4b5fd, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-10 w-[320px] h-[320px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a5b4fc, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #818cf8, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div
            className="mb-6 text-xs text-gray-500 flex items-center gap-1.5 font-medium"
            data-ocid="hero.breadcrumb"
          >
            <button
              type="button"
              className="hover:text-indigo-600 cursor-pointer transition-colors bg-transparent border-0 p-0 text-gray-500 text-xs font-medium"
              onClick={() => navigate({ to: "/" })}
            >
              Home
            </button>
            <span>›</span>
            <span className="text-indigo-600">Industries</span>
          </div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900">
                Transforming Industries with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  AI-Powered Solutions
                </span>
              </h1>

              <p className="text-gray-700 text-lg max-w-2xl leading-relaxed mb-9">
                We deliver cutting-edge AI and software solutions tailored for
                your industry — from healthcare to fintech, retail to
                manufacturing.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="text-white border-0 hover:opacity-90 transition font-semibold px-8 text-base rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                  onClick={() => {
                    const el = document.getElementById("industries-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-ocid="hero.explore.button"
                >
                  Explore Our Solutions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition-smooth font-display font-semibold px-8 text-base rounded-full bg-transparent"
                  onClick={() => navigate('/hire-us')}
                  data-ocid="hero.consultation.button"
                >
                  Get a Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. INDUSTRIES GRID ──────────────────────────────────────── */}
      <section
        id="industries-grid"
        className="py-16"
        style={{ backgroundColor: "#f8f9ff" }}
        data-ocid="industries_grid.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              From healthcare to finance, we bring deep domain expertise and
              innovative AI solutions to every sector.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="industries_grid.list"
          >
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.id}
                className="bg-white border border-gray-100 rounded-xl p-5 hover-lift shadow-card flex flex-col gap-3 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-ocid={`industries_grid.item.${i + 1}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${ind.bg} flex items-center justify-center ${ind.color} group-hover:scale-110 transition-transform duration-200 shrink-0`}
                >
                  {ind.icon}
                </div>
                <h3 className="font-display font-semibold text-sm text-gray-900 leading-snug">
                  {ind.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">
                  {ind.desc}
                </p>
                <button
                  type="button"
                  className="self-start text-indigo-600 text-xs font-semibold font-display hover:text-indigo-800 transition-colors mt-1"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  onKeyUp={(e) => {
                    if (e.key === "Enter")
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-ocid={`industries_grid.learn_more.${i + 1}`}
                >
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ────────────────────────────────────────── */}
      <section
        id="why-choose-us"
        className="bg-white py-16"
        data-ocid="why_choose.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Why Industry Leaders Choose Tech2Globe
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              We combine technical excellence with deep domain knowledge to
              deliver transformative results.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="why_choose.list"
          >
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover-lift shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`why_choose.item.${i + 1}`}
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

      {/* ── 4. STATS BANNER ─────────────────────────────────────────── */}
      <section
        id="stats"
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
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">
                  {s.value}
                </div>
                <div className="text-indigo-200 text-sm font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES BY INDUSTRY ─────────────────────────────────── */}
      <section
        id="services"
        className="py-16"
        style={{ backgroundColor: "#f8f9ff" }}
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              What We Build for Your Industry
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Specialized solutions engineered for the unique challenges of each
              sector.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="services.list"
          >
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-white border border-indigo-50 rounded-xl p-5 flex flex-col gap-3 hover-lift shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  {svc.icon}
                </div>
                <h3 className="font-display font-semibold text-sm text-gray-900 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ──────────────────────────────────────────────── */}
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              How We Deliver
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              A proven 5-step approach that takes your idea from concept to
              deployed, production-ready solution.
            </p>
          </motion.div>

          {/* Horizontal flow with connector line */}
          <div className="relative" data-ocid="process.list">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 z-0"
              aria-hidden
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="flex flex-col items-center text-center gap-3"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  data-ocid={`process.item.${i + 1}`}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl shrink-0 shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-gray-900 mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES ─────────────────────────────────────────── */}
      <section
        id="case-studies"
        className="py-16"
        style={{ backgroundColor: "#f8f9ff" }}
        data-ocid="case_studies.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Industry Success Stories
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Real results from real clients across the industries we serve.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="case_studies.list"
          >
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover-lift shadow-card flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`case_studies.item.${i + 1}`}
              >
                {/* Color bar */}
                <div
                  className="h-1.5 w-full shrink-0"
                  style={{ backgroundColor: cs.accentColor }}
                />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border font-display ${cs.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900">
                    {cs.title}
                  </h3>

                  <div className="flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-indigo-700 text-xs font-semibold font-display uppercase tracking-wide mb-1">
                        Challenge
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-indigo-700 text-xs font-semibold font-display uppercase tracking-wide mb-1">
                        Solution
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-green-700 text-xs font-semibold font-display uppercase tracking-wide mb-1">
                        Result
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-16"
        style={{ backgroundColor: "#f5f3ff" }}
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              What Our Clients Say
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-white border border-indigo-100 rounded-xl p-6 flex flex-col gap-4 shadow-card hover-lift"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }, (_, idx) => (
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
                  <p className="text-indigo-600 text-xs mt-0.5 font-medium">
                    {t.title}, {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. WHO WE WORK WITH ─────────────────────────────────────── */}
      <section
        id="who-we-work-with"
        className="bg-white py-16"
        data-ocid="who_we_work_with.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Who We Work With
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="who_we_work_with.list"
          >
            {WHO_WE_WORK_WITH.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white border-l-4 border-indigo-500 rounded-xl p-6 flex flex-col gap-4 hover-lift shadow-card border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`who_we_work_with.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
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

      {/* ── 10. FAQ ─────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="py-16"
        style={{ backgroundColor: "#f8f9ff" }}
        data-ocid="faq.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div
            className="max-w-3xl mx-auto flex flex-col gap-3"
            data-ocid="faq.list"
          >
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <FAQItem faq={faq} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. DARK CTA ────────────────────────────────────────────── */}
      <section
        id="cta"
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        }}
        data-ocid="cta.section"
      >
        {/* Animated blob */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(79,70,229,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to Transform Your Industry with AI?
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto mb-9 leading-relaxed">
              Tell us about your industry and use case — our experts will design
              a solution tailored to your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-100 transition-smooth font-display font-bold px-8 text-base rounded-full border-0"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="cta.start_project.button"
              >
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 transition-smooth font-display font-semibold px-8 text-base rounded-full bg-transparent"
                onClick={() => navigate({ to: "/contact" })}
                data-ocid="cta.schedule_call.button"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 12. CONTACT / GET IN TOUCH ──────────────────────────────── */}

    </>
  );
}
