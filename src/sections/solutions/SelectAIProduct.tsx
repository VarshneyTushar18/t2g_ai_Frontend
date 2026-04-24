import { Link } from "@tanstack/react-router";
import {
  Bot,
  Brain,
  ChevronDown,
  ChevronRight,
  Code2,
  Sparkles,
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

export default function SelectAIProduct() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl transition-all duration-300"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(79,142,247,0.12)",
        boxShadow: open
          ? "0 8px 32px rgba(79,142,247,0.14)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transform: open ? "translateY(-2px)" : "translateY(0)",
      }}
      data-ocid="select-ai-product.card"
    >
      {/* Card header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 rounded-2xl p-5 text-left transition-all duration-200 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f8ef7]"
        aria-expanded={open}
        aria-controls="select-ai-product-dropdown"
        data-ocid="select-ai-product.toggle"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
          style={{
            background: "rgba(79,142,247,0.08)",
            border: "1px solid rgba(79,142,247,0.2)",
          }}
        >
          <Bot size={20} color="#4f8ef7" />
        </span>

        <div className="min-w-0 flex-1">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#4f8ef7" }}
          >
            Select AI Product
          </p>
          <p className="truncate text-sm" style={{ color: "#1a1a2e" }}>
            Choose from our AI developer services
          </p>
        </div>

        <ChevronDown
          size={18}
          style={{
            color: "#4f8ef7",
            flexShrink: 0,
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        />
      </button>

      {/* Expandable dropdown */}
      <div
        id="select-ai-product-dropdown"
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden={!open}
        data-ocid="select-ai-product.dropdown"
      >
        <div
          style={{
            borderTop: "1px solid rgba(79,142,247,0.08)",
          }}
        >
          <ul className="py-2">
            {AI_PRODUCTS.map(({ label, href, icon: Icon, color }, idx) => (
              <li key={label}>
                <Link
                  to={href as "/"}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4f8ef7]"
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
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={14} style={{ color }} />
                  </span>
                  <span className="flex-1 truncate">{label}</span>
                  <ChevronRight
                    size={14}
                    style={{ color: "#9ca3af", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-5 pb-5 pt-2">
            <Link
              to="/"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cbf]"
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
