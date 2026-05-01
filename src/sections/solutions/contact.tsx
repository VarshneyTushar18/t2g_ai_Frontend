import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/api/contactApi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Code2,
  HeadphonesIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactUsPage,
});

/* ── Types ─────────────────────────────────────── */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  aiProduct: string;
  message: string;
}

/* ── Constants ─────────────────────────────────── */
const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  aiProduct: "",
  message: "",
};

const SERVICE_OPTIONS = [
  "AI Data Analytics",
  "AI Automation",
  "Cloud Migration",
  "Predictive Modeling",
  "Enterprise Security",
  "Other",
];

const AI_PRODUCT_OPTIONS = [
  "Hire Lovable Developer",
  "Hire Emergent Developer",
  "Hire OpenAI Developer",
  "Hire Caffeine AI Developer",
  "Hire GenW.ai Developer",
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@tech2globe.com",
    href: "mailto:info@tech2globe.com",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.08)",
    border: "rgba(79,142,247,0.2)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1-516-858-5840",
    href: "tel:+15168585840",
    color: "#7c5cbf",
    bg: "rgba(124,92,191,0.08)",
    border: "rgba(124,92,191,0.2)",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "1538, Old Country Road, Plainview, New York, United State - 11803",
    href: "#map",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
];

const TRUST_BADGES = [
  {
    icon: Code2,
    stat: "500+",
    label: "AI Projects Delivered",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.08)",
    border: "rgba(79,142,247,0.18)",
    glow: "rgba(79,142,247,0.15)",
  },
  {
    icon: CheckCircle2,
    stat: "100%",
    label: "Code Ownership Guaranteed",
    color: "#7c5cbf",
    bg: "rgba(124,92,191,0.08)",
    border: "rgba(124,92,191,0.18)",
    glow: "rgba(124,92,191,0.15)",
  },
  {
    icon: Zap,
    stat: "3 Days",
    label: "MVP Turnaround",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.18)",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: HeadphonesIcon,
    stat: "24/7",
    label: "Expert Support",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.18)",
    glow: "rgba(16,185,129,0.15)",
  },
];

const FAQ_ITEMS = [
  {
    q: "How quickly can you start on my project?",
    a: "We typically onboard new clients within 1–2 business days. For urgent projects, same-day kickoffs are available. Our pre-built frameworks mean your first sprint starts delivering value immediately.",
  },
  {
    q: "Do I retain full ownership of the code?",
    a: "Yes — 100%, unconditionally. Every line of code, every model, every deployment config is transferred to you at project completion with full GitHub access and documentation. Zero vendor lock-in.",
  },
  {
    q: "What types of AI projects do you specialize in?",
    a: "We cover the full AI stack: LLM-powered applications, autonomous AI agents, NLP pipelines, computer vision, ML workflow automation, generative AI products, and SaaS platforms with AI at the core.",
  },
  {
    q: "Can you integrate AI into our existing product?",
    a: "Absolutely — this is one of our most requested services. We integrate cleanly with virtually any modern stack, adding GPT, agent automation, or ML capabilities without requiring a full rebuild.",
  },
  {
    q: "What does a free consultation include?",
    a: "A 30-minute session with a senior AI architect to scope your use case, identify the right model and architecture, estimate timelines and costs, and create a clear technical roadmap — with zero obligation.",
  },
];

/* ── Neural Node positions (fixed to avoid re-render jitter) ── */
const NODES = [
  { x: 8, y: 12, size: 10, delay: 0, color: "#4f8ef7" },
  { x: 92, y: 18, size: 8, delay: 0.8, color: "#7c5cbf" },
  { x: 18, y: 72, size: 7, delay: 1.6, color: "#06b6d4" },
  { x: 78, y: 65, size: 11, delay: 0.4, color: "#4f8ef7" },
  { x: 50, y: 8, size: 6, delay: 1.2, color: "#7c5cbf" },
  { x: 35, y: 55, size: 9, delay: 0.6, color: "#06b6d4" },
  { x: 65, y: 35, size: 7, delay: 1.8, color: "#4f8ef7" },
  { x: 85, y: 80, size: 6, delay: 1.0, color: "#7c5cbf" },
  { x: 12, y: 42, size: 8, delay: 2.0, color: "#06b6d4" },
  { x: 55, y: 78, size: 10, delay: 0.2, color: "#4f8ef7" },
];

/* ── SVG Connection Lines between nodes ─────────── */
const CONNECTIONS = [
  [0, 4],
  [4, 1],
  [0, 2],
  [2, 5],
  [5, 6],
  [6, 1],
  [6, 3],
  [3, 7],
  [5, 9],
  [9, 7],
  [2, 8],
  [8, 5],
];

function validate(
  data: ContactFormData,
): Partial<Record<keyof ContactFormData, string>> {
  const errs: Partial<Record<keyof ContactFormData, string>> = {};
  if (!data.name.trim()) errs.name = "Name is required.";
  if (!data.email.trim()) errs.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Please enter a valid email.";
  if (!data.service) errs.service = "Please select a service.";
  if (!data.message.trim()) errs.message = "Message is required.";
  return errs;
}

/* ── FAQ Item ───────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden"
      style={{
        background: "#fff",
        border: open
          ? "1px solid rgba(79,142,247,0.3)"
          : "1px solid rgba(0,0,0,0.08)",
        boxShadow: open
          ? "0 4px 20px rgba(79,142,247,0.08)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "all 0.25s ease",
      }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-fast"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-ocid={`faq-item-${index + 1}`}
      >
        <span
          className="font-semibold text-base pr-4"
          style={{ color: "#1a1a2e" }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#4f8ef7",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: "#6b7280" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Page ──────────────────────────────────── */
export default function ContactUsPage() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }
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
      setSubmitted(true);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#ffffff" }}
    >
      <Navbar />

      <main className="flex-1 pt-16">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f0f7ff 0%, #faf5ff 50%, #f0fdff 100%)",
            minHeight: "88vh",
            display: "flex",
            alignItems: "center",
          }}
          data-ocid="contact-hero-section"
        >
          {/* Neural background image with overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url('/assets/generated/contact-hero-neural.dim_1400x600.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.12,
            }}
          />

          {/* Gradient orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                top: "-10%",
                left: "-5%",
                width: 600,
                height: 600,
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 70%)",
                filter: "blur(70px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                top: "30%",
                right: "-8%",
                width: 500,
                height: 500,
                background:
                  "radial-gradient(circle, rgba(124,92,191,0.14) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                bottom: "-15%",
                left: "40%",
                width: 400,
                height: 400,
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          {/* Animated neural nodes (SVG overlay) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 100 100"
          >
            {/* Connection lines */}
            {CONNECTIONS.map(([a, b]) => (
              <line
                key={`conn-${a}-${b}`}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke={NODES[a].color}
                strokeWidth="0.08"
                strokeOpacity="0.25"
              />
            ))}
            {/* Node circles */}
            {NODES.map((node) => (
              <circle
                key={`node-${node.x}-${node.y}`}
                cx={node.x}
                cy={node.y}
                r={node.size * 0.08}
                fill={node.color}
                fillOpacity="0.5"
              >
                <animate
                  attributeName="r"
                  values={`${node.size * 0.08};${node.size * 0.12};${node.size * 0.08}`}
                  dur={`${3 + node.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.4;0.7;0.4"
                  dur={`${3 + node.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>

          {/* Circuit line accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="circuit-line"
              style={{ top: "35%", left: 0, width: "30%", height: 1 }}
            />
            <div
              className="circuit-line"
              style={{
                top: "60%",
                right: 0,
                width: "25%",
                height: 1,
                background:
                  "linear-gradient(270deg, transparent, rgba(124,92,191,0.3), transparent)",
              }}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* Left: Headline + CTAs */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5"
                >
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      border: "1px solid rgba(79,142,247,0.25)",
                      color: "#4f8ef7",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#4f8ef7" }}
                    />
                    Get In Touch
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
                  style={{
                    color: "#1a1a2e",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-display)",
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                >
                  Contact{" "}
                  <span
                    className="gradient-text-clip"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 55%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Our AI
                  </span>
                  <br />
                  Experts
                </motion.h1>

                <motion.p
                  className="text-lg lg:text-xl mb-10 leading-relaxed max-w-lg"
                  style={{ color: "#4b5563" }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Have questions about our AI solutions? Ready to transform your
                  business with intelligent automation? Connect with our team —
                  we respond within 24 hours.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                >
                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-smooth hover:opacity-90 hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                      boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
                    }}
                    data-ocid="hero-cta-send-message"
                  >
                    <Send size={16} />
                    Send a Message
                  </a>
                  <a
                    href="tel:+15168585840"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-smooth hover:scale-[1.03]"
                    style={{
                      border: "1px solid rgba(79,142,247,0.4)",
                      background: "rgba(79,142,247,0.06)",
                      color: "#4f8ef7",
                    }}
                    data-ocid="hero-cta-call"
                  >
                    <Phone size={16} />
                    Book a Free Call
                  </a>
                </motion.div>

                {/* Quick stats row */}
                <motion.div
                  className="flex flex-wrap gap-6 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  {[
                    { v: "< 24h", l: "Response Time" },
                    { v: "500+", l: "Projects Shipped" },
                    { v: "98%", l: "Client Satisfaction" },
                  ].map((s) => (
                    <div key={s.l} className="flex flex-col">
                      <span
                        className="text-2xl font-extrabold gradient-text-clip"
                        style={{
                          background:
                            "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.v}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "#6b7280" }}
                      >
                        {s.l}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Contact info cards */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
              >
                {CONTACT_DETAILS.map(
                  ({ icon: Icon, label, value, href, color, bg, border }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-5 rounded-2xl p-5 transition-smooth hover:scale-[1.02] group"
                      style={{
                        background: "rgba(255,255,255,0.88)",
                        backdropFilter: "blur(12px)",
                        border: `1px solid ${border}`,
                        boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 0 ${color}`,
                      }}
                      data-ocid={`hero-contact-${label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-smooth group-hover:scale-110"
                        style={{
                          background: bg,
                          border: `1px solid ${border}`,
                        }}
                      >
                        <Icon size={22} color={color} />
                      </span>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                          style={{ color }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-semibold text-sm truncate"
                          style={{ color: "#1a1a2e" }}
                        >
                          {value}
                        </p>
                      </div>
                      <span
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-fast"
                        style={{ color }}
                      >
                        →
                      </span>
                    </a>
                  ),
                )}

                {/* Hours card */}
                <div
                  className="flex items-center gap-5 rounded-2xl p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(124,92,191,0.06) 100%)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <Clock size={22} color="#10b981" />
                  </span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: "#10b981" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1a1a2e" }}
                    >
                      Within 24 hours — often same day
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gradient divider */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #4f8ef7 0%, #7c5cbf 50%, #06b6d4 100%)",
              opacity: 0.6,
            }}
          />
        </section>

        {/* ── TRUST BADGES ──────────────────────────────────── */}
        <section
          className="py-14 px-4"
          style={{
            background: "#fafafa",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
          data-ocid="contact-trust-section"
        >
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
              style={{ color: "#9ca3af" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Trusted by 500+ companies worldwide
            </motion.p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {TRUST_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="flex flex-col items-center text-center gap-3 rounded-2xl p-6 transition-smooth hover:scale-[1.03]"
                  style={{
                    background: badge.bg,
                    border: `1px solid ${badge.border}`,
                    boxShadow: `0 4px 16px ${badge.glow}`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-ocid={`trust-badge-${i + 1}`}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `${badge.bg}`,
                      border: `1px solid ${badge.border}`,
                    }}
                  >
                    <badge.icon size={22} color={badge.color} />
                  </span>
                  <div>
                    <p
                      className="text-2xl font-extrabold mb-1"
                      style={{ color: badge.color }}
                    >
                      {badge.stat}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#6b7280" }}
                    >
                      {badge.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM + INFO ───────────────────────────── */}
        <section
          id="contact-form"
          className="relative overflow-hidden py-24 px-4"
          style={{
            background:
              "linear-gradient(160deg, #ffffff 0%, #f5f3ff 50%, #f0fdff 100%)",
          }}
          data-ocid="contact-form-section"
        >
          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                top: "10%",
                left: "-8%",
                width: 450,
                height: 450,
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                bottom: "5%",
                right: "-5%",
                width: 400,
                height: 400,
                background:
                  "radial-gradient(circle, rgba(124,92,191,0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              className="text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  background: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.22)",
                  color: "#4f8ef7",
                }}
              >
                Start a Conversation
              </span>
              <h2
                className="text-4xl lg:text-5xl font-extrabold mb-4"
                style={{
                  color: "#1a1a2e",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-display)",
                }}
              >
                Tell Us About Your{" "}
                <span
                  className="gradient-text-clip"
                  style={{
                    background:
                      "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 55%, #06b6d4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI Project
                </span>
              </h2>
              <p
                className="max-w-xl mx-auto text-lg"
                style={{ color: "#6b7280" }}
              >
                Fill in the form and a senior AI specialist will reach out
                within 24 hours with a tailored consultation.
              </p>
            </motion.div>

            {/* Two column: info left, form right */}
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left info panel */}
              <motion.div
                className="lg:col-span-2 flex flex-col gap-6"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(79,142,247,0.12)",
                    boxShadow: "0 4px 24px rgba(79,142,247,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      color: "#1a1a2e",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    We'd love to hear from you
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#6b7280" }}
                  >
                    Whether you're exploring AI solutions, ready to kick off a
                    project, or just want to understand what's possible — our
                    engineers are here to help you build smarter.
                  </p>

                  <div className="flex flex-col gap-3">
                    {CONTACT_DETAILS.map(
                      ({
                        icon: Icon,
                        label,
                        value,
                        href,
                        color,
                        bg,
                        border,
                      }) => (
                        <a
                          key={label}
                          href={href}
                          className="flex items-center gap-4 rounded-xl p-4 transition-smooth hover:scale-[1.02]"
                          style={{
                            background: bg,
                            border: `1px solid ${border}`,
                          }}
                          data-ocid={`form-contact-${label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{
                              background: "rgba(255,255,255,0.8)",
                              border: `1px solid ${border}`,
                            }}
                          >
                            <Icon size={17} color={color} />
                          </span>
                          <div className="min-w-0">
                            <p
                              className="text-xs font-semibold uppercase tracking-widest"
                              style={{ color }}
                            >
                              {label}
                            </p>
                            <p
                              className="text-sm font-medium truncate"
                              style={{ color: "#1a1a2e" }}
                            >
                              {value}
                            </p>
                          </div>
                        </a>
                      ),
                    )}
                  </div>
                </div>

                {/* Why work with us */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(124,92,191,0.06) 100%)",
                    border: "1px solid rgba(79,142,247,0.14)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "#4f8ef7" }}
                  >
                    Why work with us?
                  </p>
                  {[
                    "Senior AI engineers on every project",
                    "Production-ready code, not prototypes",
                    "Full IP & code ownership guaranteed",
                    "Enterprise security & compliance built-in",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 mb-3 last:mb-0"
                    >
                      <CheckCircle2
                        size={16}
                        color="#10b981"
                        className="mt-0.5 shrink-0"
                      />
                      <p className="text-sm" style={{ color: "#374151" }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Awards mini card */}
                <div
                  className="rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(250,204,21,0.25)",
                    boxShadow: "0 2px 12px rgba(250,204,21,0.08)",
                  }}
                >
                  <Award size={28} color="#f59e0b" className="shrink-0" />
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#1a1a2e" }}
                    >
                      #1 AI Development Partner
                    </p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>
                      Recognized by 50+ enterprise clients globally
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                {submitted ? (
                  <div
                    className="rounded-2xl p-12 flex flex-col items-center text-center gap-6"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      boxShadow: "0 8px 32px rgba(16,185,129,0.08)",
                    }}
                    data-ocid="contact-success_state"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(16,185,129,0.1)",
                        border: "2px solid rgba(16,185,129,0.3)",
                      }}
                    >
                      <CheckCircle2 size={40} color="#10b981" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: "#1a1a2e" }}
                      >
                        Message Received!
                      </h3>
                      <p style={{ color: "#6b7280" }}>
                        Thank you for reaching out. A senior AI specialist will
                        contact you within 24 hours with a tailored response.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-smooth hover:opacity-90"
                      style={{
                        background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                      }}
                      data-ocid="contact-send-another-button"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="rounded-2xl p-8 lg:p-10"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(79,142,247,0.15)",
                      boxShadow:
                        "0 8px 40px rgba(79,142,247,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    }}
                    data-ocid="contact-form"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-name"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Full Name <span style={{ color: "#4f8ef7" }}>*</span>
                        </Label>
                        <Input
                          id="cu-name"
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                          aria-invalid={!!errors.name}
                          data-ocid="contact.input"
                        />
                        {errors.name && (
                          <p
                            className="text-xs text-red-500"
                            data-ocid="contact.name.field_error"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-email"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Work Email <span style={{ color: "#4f8ef7" }}>*</span>
                        </Label>
                        <Input
                          id="cu-email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                          aria-invalid={!!errors.email}
                          data-ocid="contact-input-email"
                        />
                        {errors.email && (
                          <p
                            className="text-xs text-red-500"
                            data-ocid="contact.email.field_error"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-phone"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Phone{" "}
                          <span
                            className="text-xs"
                            style={{ color: "#9ca3af" }}
                          >
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="cu-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                          data-ocid="contact-input-phone"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-company"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Company Name
                        </Label>
                        <Input
                          id="cu-company"
                          type="text"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                          data-ocid="contact-input-company"
                        />
                      </div>
                    </div>

                    {/* Service + AI Product — side by side on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      {/* <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-service"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Service Interest{" "}
                          <span style={{ color: "#4f8ef7" }}>*</span>
                        </Label>
                        <Select
                          value={form.service}
                          onValueChange={(v) => handleChange("service", v)}
                        >
                          <SelectTrigger
                            id="cu-service"
                            className="border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af] h-11"
                            aria-invalid={!!errors.service}
                            data-ocid="contact-select-service"
                          >
                            <SelectValue placeholder="Select a service…" />
                          </SelectTrigger>
                          <SelectContent className="border-[rgba(0,0,0,0.1)] bg-white text-[#1a1a2e]">
                            {SERVICE_OPTIONS.map((opt) => (
                              <SelectItem
                                key={opt}
                                value={opt}
                                className="focus:bg-[rgba(79,142,247,0.08)] focus:text-[#1a1a2e]"
                              >
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p
                            className="text-xs text-red-500"
                            data-ocid="contact.service.field_error"
                          >
                            {errors.service}
                          </p>
                        )}
                      </div> */}

                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="cu-ai-product"
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          AI Product{" "}
                          <span
                            className="text-xs"
                            style={{ color: "#9ca3af" }}
                          >
                            (optional)
                          </span>
                        </Label>
                        <Select
                          value={form.aiProduct}
                          onValueChange={(v) => handleChange("aiProduct", v)}
                        >
                          <SelectTrigger
                            id="cu-ai-product"
                            className="border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af] h-11"
                            data-ocid="contact-select-ai-product"
                          >
                            <SelectValue placeholder="Select AI product…" />
                          </SelectTrigger>
                          <SelectContent className="border-[rgba(0,0,0,0.1)] bg-white text-[#1a1a2e]">
                            {AI_PRODUCT_OPTIONS.map((opt) => (
                              <SelectItem
                                key={opt}
                                value={opt}
                                className="focus:bg-[rgba(79,142,247,0.08)] focus:text-[#1a1a2e]"
                              >
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 mb-7">
                      <Label
                        htmlFor="cu-message"
                        className="text-sm font-medium"
                        style={{ color: "#374151" }}
                      >
                        Your Message <span style={{ color: "#4f8ef7" }}>*</span>
                      </Label>
                      <Textarea
                        id="cu-message"
                        rows={5}
                        placeholder="Tell us about your project goals, timeline, and any specific AI requirements…"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        className="form-field-glow resize-none border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                        aria-invalid={!!errors.message}
                        data-ocid="contact-textarea-message"
                      />
                      {errors.message && (
                        <p
                          className="text-xs text-red-500"
                          data-ocid="contact.message.field_error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full gap-2 h-13 py-4 text-base font-semibold text-white transition-smooth hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                        border: "none",
                        boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
                      }}
                      data-ocid="contact.submit_button"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p
                      className="mt-4 text-center text-xs"
                      style={{ color: "#9ca3af" }}
                    >
                      We typically respond within 24 hours. No spam, ever.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section
          className="py-24 px-4"
          style={{ background: "#f8fafc" }}
          data-ocid="contact-faq-section"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  background: "rgba(124,92,191,0.08)",
                  border: "1px solid rgba(124,92,191,0.22)",
                  color: "#7c5cbf",
                }}
              >
                FAQ
              </span>
              <h2
                className="text-4xl font-extrabold mb-3"
                style={{
                  color: "#1a1a2e",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-display)",
                }}
              >
                Common Questions
              </h2>
              <p style={{ color: "#6b7280" }}>
                Everything you need to know before starting your AI project
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  index={FAQ_ITEMS.indexOf(item)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ──────────────────────────────── */}
        <section
          className="relative overflow-hidden py-24 px-4"
          style={{
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a2a4a 100%)",
          }}
          data-ocid="contact-cta-section"
        >
          {/* Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                top: "-20%",
                left: "20%",
                width: 500,
                height: 500,
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 70%)",
                filter: "blur(70px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                bottom: "-15%",
                right: "15%",
                width: 400,
                height: 400,
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            {/* Mini neural nodes SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              {CONNECTIONS.slice(0, 6).map(([a, b]) => (
                <line
                  key={`cta-conn-${a}-${b}`}
                  x1={NODES[a].x}
                  y1={NODES[a].y}
                  x2={NODES[b].x}
                  y2={NODES[b].y}
                  stroke="white"
                  strokeWidth="0.06"
                  strokeOpacity="0.3"
                />
              ))}
              {NODES.slice(0, 6).map((n) => (
                <circle
                  key={`cta-node-${n.x}-${n.y}`}
                  cx={n.x}
                  cy={n.y}
                  r={n.size * 0.06}
                  fill="white"
                  fillOpacity="0.4"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#93c5fd",
                }}
              >
                Free Consultation
              </span>

              <h2
                className="text-4xl lg:text-6xl font-extrabold mb-6 text-white leading-tight"
                style={{
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-display)",
                }}
              >
                Ready to Build Your{" "}
                <span
                  className="gradient-text-clip"
                  style={{
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #c084fc 55%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Next AI Product?
                </span>
              </h2>
              <p
                className="text-xl mb-10 max-w-2xl mx-auto"
                style={{ color: "#93c5fd" }}
              >
                Stop waiting months for software that should take days. Book a
                free 30-minute consultation with a senior AI engineer — zero
                commitment, maximum value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-base text-white transition-smooth hover:opacity-90 hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(135deg, #4f8ef7, #7c5cbf, #06b6d4)",
                    boxShadow: "0 6px 28px rgba(79,142,247,0.4)",
                  }}
                  data-ocid="cta-get-consultation-button"
                >
                  <Send size={18} />
                  Book a Free Consultation
                </a>
                <a
                  href="tel:+15168585840"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-semibold text-base transition-smooth hover:scale-[1.03]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                  }}
                  data-ocid="cta-call-button"
                >
                  <Phone size={18} />
                  Talk to an Expert Now
                </a>
              </div>

              {/* Trust micro-indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {[
                  "No commitment required",
                  "Response within 24 hours",
                  "Senior AI specialist assigned",
                  "Free architecture review",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} color="#10b981" />
                    <span className="text-sm" style={{ color: "#93c5fd" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
