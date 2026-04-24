import { Briefcase, Check, UserPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface EngagementModel {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  features: string[];
  idealFor: string;
  isPopular?: boolean;
}

interface Props {
  models: EngagementModel[];
}

const defaultModels: EngagementModel[] = [
  {
    id: "dedicated-team",
    name: "Dedicated Team",
    tagline: "A fully embedded extension of your engineering org",
    icon: Users,
    features: [
      "Full-time developers, QA & PM assigned exclusively to you",
      "Direct communication — Slack, standups, sprint reviews",
      "Scales up or down based on your roadmap",
      "Full IP ownership from day one",
      "NDA + dedicated infra environment included",
    ],
    idealFor: "Long-term product teams",
  },
  {
    id: "project-based",
    name: "Project Based",
    tagline: "Fixed scope, fixed timeline — zero guesswork",
    icon: Briefcase,
    features: [
      "Defined milestones with clear deliverables",
      "Fixed price or capped T&M — no surprise invoices",
      "Senior-led execution with dedicated project manager",
      "Weekly progress demos and status reports",
      "30-day post-launch support included",
    ],
    idealFor: "Fixed-scope builds",
    isPopular: true,
  },
  {
    id: "staff-augmentation",
    name: "Staff Augmentation",
    tagline: "Drop elite engineers into your existing team, instantly",
    icon: UserPlus,
    features: [
      "Pre-vetted senior engineers in 48 hours",
      "Works within your processes, tools, and culture",
      "No long-term commitment — scale on demand",
      "Technical assessments before every placement",
      "Replacement guarantee within 7 days",
    ],
    idealFor: "Scaling existing teams",
  },
];

export function EngagementModel({ models }: Props) {
  const cards = models.length > 0 ? models : defaultModels;

  return (
    <section
      className="relative overflow-hidden py-[60px] md:py-[40px]"
      style={{ backgroundColor: "#ffffff" }}
      data-ocid="engagement-model.section"
    >
      {/* Ambient light accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 60%, rgba(124,92,191,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 40%, rgba(79,142,247,0.05) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-[42px] md:text-4xl sm:text-3xl font-bold mb-4 leading-tight"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            Choose Your{" "}
            <span style={{ color: "#4f8ef7" }}>Engagement Model</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            Flexible partnership structures designed to match your goals,
            timeline, and team size.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((model, i) => (
            <ModelCard key={model.id} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelCard({
  model,
  index,
}: {
  model: EngagementModel;
  index: number;
}) {
  const Icon = model.icon;

  return (
    <div
      className="relative rounded-2xl p-7 flex flex-col"
      style={
        model.isPopular
          ? {
              background: "#ffffff",
              border: "1px solid rgba(79,142,247,0.4)",
              boxShadow: "0 4px 30px rgba(79,142,247,0.12)",
              transition: "box-shadow 0.3s ease",
            }
          : {
              background: "#f8fafc",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
            }
      }
      onMouseEnter={(e) => {
        if (!model.isPopular) {
          const el = e.currentTarget as HTMLElement;
          el.style.border = "1px solid rgba(79,142,247,0.3)";
          el.style.boxShadow = "0 4px 20px rgba(79,142,247,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!model.isPopular) {
          const el = e.currentTarget as HTMLElement;
          el.style.border = "1px solid rgba(0,0,0,0.08)";
          el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
        }
      }}
      data-ocid={`engagement-model.item.${index + 1}`}
    >
      {/* Most Popular badge */}
      {model.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
              boxShadow: "0 2px 12px rgba(79,142,247,0.3)",
            }}
          >
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: model.isPopular
            ? "rgba(79,142,247,0.1)"
            : "rgba(124,92,191,0.08)",
          boxShadow: model.isPopular
            ? "0 0 16px rgba(79,142,247,0.15)"
            : "0 0 12px rgba(124,92,191,0.1)",
        }}
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          style={{ color: model.isPopular ? "#4f8ef7" : "#7c5cbf" }}
        />
      </div>

      {/* Name + tagline */}
      <h3
        className="text-[20px] font-bold mb-2 leading-snug"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
      >
        {model.name}
      </h3>
      <p
        className="text-[14px] mb-6 leading-relaxed"
        style={{ color: "#6b7280" }}
      >
        {model.tagline}
      </p>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-7">
        {model.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                background: model.isPopular
                  ? "rgba(79,142,247,0.12)"
                  : "rgba(124,92,191,0.1)",
              }}
            >
              <Check
                size={10}
                strokeWidth={3}
                style={{ color: model.isPopular ? "#4f8ef7" : "#7c5cbf" }}
              />
            </span>
            <span
              className="text-[14px] leading-relaxed"
              style={{ color: "#374151" }}
            >
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Ideal for tag */}
      <div className="mb-6">
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
            color: "#6b7280",
          }}
        >
          <span style={{ color: model.isPopular ? "#4f8ef7" : "#7c5cbf" }}>
            ✦
          </span>
          Ideal for: {model.idealFor}
        </span>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="w-full py-3 rounded-xl text-[14px] font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        style={
          model.isPopular
            ? {
                background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(79,142,247,0.25)",
              }
            : {
                background: "transparent",
                color: "#374151",
                border: "1px solid rgba(0,0,0,0.15)",
              }
        }
        data-ocid={`engagement-model.item.${index + 1}.primary_button`}
      >
        Get This Plan
      </button>
    </div>
  );
}
