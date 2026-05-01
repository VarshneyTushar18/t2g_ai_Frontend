import type { PremiumProcessStep } from "@/data/solutions";
import { Phone } from "lucide-react";

interface Props {
  heading: string;
  subheading: string;
  steps: PremiumProcessStep[];
  ctaText: string;
}

function StepNode({
  step,
  index,
}: {
  step: PremiumProcessStep;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <div
      className="flex flex-col items-center text-center px-2 relative z-10"
      data-ocid={`process-timeline.step.${index + 1}`}
    >
      {/* Icon chip */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3 transition-smooth hover:scale-105"
        style={{
          background: "rgba(79,142,247,0.08)",
          border: "1px solid rgba(79,142,247,0.2)",
        }}
      >
        <Icon size={20} style={{ color: "#4f8ef7" }} />
      </div>

      {/* Numbered circle */}
      <div
        className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center text-lg font-bold text-white mb-4"
        style={{
          background: "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 100%)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow:
              "0 0 0 6px rgba(79,142,247,0.1), 0 4px 20px rgba(79,142,247,0.25)",
          }}
        />
        <span className="relative z-10 text-sm font-bold">{step.number}</span>
      </div>

      <h3
        className="text-[15px] font-bold mb-2 leading-snug"
        style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
      >
        {step.title}
      </h3>
      <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>
        {step.description}
      </p>
    </div>
  );
}

function MobileStep({
  step,
  index,
  isLast,
}: {
  step: PremiumProcessStep;
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className="flex gap-4 relative"
      data-ocid={`process-timeline.step.mobile.${index + 1}`}
    >
      {/* Left: connector + circle */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 relative z-10"
          style={{
            background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
            boxShadow: "0 4px 12px rgba(79,142,247,0.3)",
          }}
        >
          {index + 1}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              minHeight: 40,
              background:
                "repeating-linear-gradient(to bottom, rgba(79,142,247,0.35) 0px, rgba(79,142,247,0.35) 6px, transparent 6px, transparent 12px)",
            }}
          />
        )}
      </div>

      {/* Right: content card */}
      <div
        className="flex-1 rounded-2xl p-5 mb-6"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(79,142,247,0.1)" }}
          >
            <Icon size={16} style={{ color: "#4f8ef7" }} />
          </div>
          <h3
            className="text-[15px] font-bold"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {step.title}
          </h3>
        </div>
        <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function PremiumProcessTimeline({
  heading,
  subheading,
  steps,
  ctaText,
}: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#f1f5f9",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,142,247,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 max-w-2xl">
          <h2
            className="text-[42px] font-bold leading-tight mb-4"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {heading}
          </h2>
          <p
            className="text-[18px] leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            {subheading}
          </p>
        </div>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden md:block relative">
          {/* Base connector line */}
          <div className="absolute top-[72px] left-[8%] right-[8%] h-px overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #4f8ef7 0%, #7c5cbf 60%, rgba(79,142,247,0.4) 100%)",
                boxShadow: "0 0 6px 1px rgba(79,142,247,0.3)",
              }}
            />
          </div>
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((step, i) => (
              <StepNode key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="md:hidden">
          {steps.map((step, i) => (
            <MobileStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA link */}
        <div className="flex justify-center mt-14">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-white px-6 py-3 rounded-lg transition-all duration-200 hover:brightness-110 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 100%)",
            }}
            data-ocid="process-timeline.cta_link"
          >
            <Phone
              size={16}
              className="text-white group-hover:rotate-12 transition-transform duration-200"
            />
            <span>{ctaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PremiumProcessTimeline;
