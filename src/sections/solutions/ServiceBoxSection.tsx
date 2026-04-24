import { Link } from "@tanstack/react-router";
import {
  Bot,
  Brain,
  Calendar,
  ChevronDown,
  ChevronRight,
  Code2,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const AI_PRODUCTS = [
  {
    label: "Hire Lovable Developer",
    href: "/solutions/hire-lovable-ai-developer",
    icon: Sparkles,
    color: "#4f8ef7",
  },
  {
    label: "Hire Emergent Developer",
    href: "/solutions/hire-emergent-developer",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    label: "Hire OpenAI Developer",
    href: "/solutions/hire-openai-developer",
    icon: Brain,
    color: "#10b981",
  },
  {
    label: "Hire Caffeine AI Developer",
    href: "/solutions/hire-caffeine-ai-developer",
    icon: Code2,
    color: "#7c5cbf",
  },
  {
    label: "Hire GenW.ai Developer",
    href: "/solutions/hire-genw-ai-developer",
    icon: Bot,
    color: "#ec4899",
  },
];

function ConsultationBox() {
  return (
    <div
      className="flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 100%)",
        boxShadow: "0 8px 32px rgba(79,142,247,0.30)",
      }}
      data-ocid="consultation-box.card"
    >
      {/* Icon */}
      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ background: "rgba(255,255,255,0.18)" }}
      >
        <Calendar size={26} color="#ffffff" />
      </div>

      {/* Heading */}
      <h3
        className="mb-2 text-2xl font-bold leading-snug"
        style={{ color: "#ffffff", fontFamily: "var(--font-display)" }}
      >
        Book a Free Consultation
      </h3>
      <p
        className="mb-8 leading-relaxed text-sm"
        style={{ color: "rgba(255,255,255,0.82)" }}
      >
        Talk directly with our AI specialists. Get a tailored roadmap for your
        project within 24 hours — no commitment required.
      </p>

      {/* Trust badges */}
      <div className="mb-8 flex flex-wrap gap-3">
        {[
          { icon: Users, text: "50+ AI Experts" },
          { icon: MessageSquare, text: "24h Response" },
        ].map(({ icon: Icon, text }) => (
          <span
            key={text}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.18)", color: "#ffffff" }}
          >
            <Icon size={13} />
            {text}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
        style={{ background: "#ffffff", color: "#4f8ef7" }}
        data-ocid="consultation-box.cta"
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Calendar size={16} />
        Schedule Free Call
      </button>
    </div>
  );
}

function SelectAIProductBox() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#ffffff",
        border: open ? "2px solid #4f8ef7" : "2px solid #c7d9ff",
        boxShadow: open
          ? "0 12px 40px rgba(79,142,247,0.22)"
          : "0 6px 24px rgba(79,142,247,0.14)",
      }}
      data-ocid="select-ai-product.card"
    >
      {/* Card header */}
      <div className="p-8 pb-6">
        {/* Icon */}
        <div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
          style={{
            background: "rgba(79,142,247,0.08)",
            border: "1.5px solid rgba(79,142,247,0.22)",
          }}
        >
          <Bot size={26} color="#4f8ef7" />
        </div>

        <h3
          className="mb-2 text-2xl font-bold leading-snug"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
        >
          Select AI Product
        </h3>
        <p
          className="mb-6 text-sm leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          Choose the right AI developer for your stack. Instantly hire vetted
          experts for any AI platform.
        </p>

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f8ef7]"
          style={{
            background: open
              ? "rgba(79,142,247,0.08)"
              : "rgba(79,142,247,0.06)",
            border: "1.5px solid rgba(79,142,247,0.20)",
            color: "#4f8ef7",
          }}
          aria-expanded={open}
          aria-controls="service-ai-product-dropdown"
          data-ocid="select-ai-product.toggle"
        >
          <span className="flex items-center gap-2">
            <Sparkles size={15} />
            {open ? "Hide Developer Options" : "Browse Developer Options"}
          </span>
          <ChevronDown
            size={17}
            aria-hidden="true"
            style={{
              transition: "transform 0.25s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>

      {/* Expandable list — overflow visible so nothing is clipped */}
      <div
        id="service-ai-product-dropdown"
        style={{
          maxHeight: open ? "420px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden={!open}
        data-ocid="select-ai-product.dropdown"
      >
        <div style={{ borderTop: "1px solid rgba(79,142,247,0.10)" }}>
          <ul className="py-2">
            {AI_PRODUCTS.map(({ label, href, icon: Icon, color }, idx) => (
              <li key={label}>
                <Link
                  to={href as "/"}
                  className="flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4f8ef7]"
                  style={{ color: "#374151" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(79,142,247,0.05)";
                    (e.currentTarget as HTMLElement).style.color = "#1a1a2e";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "";
                    (e.currentTarget as HTMLElement).style.color = "#374151";
                  }}
                  data-ocid={`select-ai-product.item.${idx + 1}`}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}38`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </span>
                  <span className="flex-1">{label}</span>
                  <ChevronRight
                    size={15}
                    style={{ color: "#9ca3af", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6 pb-6 pt-3">
            <Link
              to="/"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cbf]"
              style={{
                background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
              }}
              data-ocid="select-ai-product.get-started"
            >
              <Sparkles size={15} />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceBoxSection() {
  return (
    <section
      className="py-20"
      style={{ background: "#e8f0fe" }}
      data-ocid="service-box.section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(79,142,247,0.10)",
              border: "1px solid rgba(79,142,247,0.25)",
              color: "#4f8ef7",
            }}
          >
            Get Started Today
          </span>
          <h2
            className="mt-3 text-4xl font-bold sm:text-5xl"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            Choose Your <span style={{ color: "#4f8ef7" }}>Service</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "#6b7280" }}
          >
            Book a consultation or browse our AI developer options — both paths
            get you results fast.
          </p>
        </div>

        {/* Two boxes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          <ConsultationBox />
          <SelectAIProductBox />
        </div>
      </div>
    </section>
  );
}
