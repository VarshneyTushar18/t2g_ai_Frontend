import type { SolutionData } from "@/data/solutions";
import { CheckCircle } from "lucide-react";

interface Props {
  data: SolutionData;
}

export default function BenefitsSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px] relative overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      {/* Subtle mesh tints */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(124,92,191,0.04) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#4f8ef7", letterSpacing: "0.12em" }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "#1a1a2e",
              letterSpacing: "-0.02em",
            }}
          >
            {data.benefitsHeading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4b5563" }}>
            {data.benefitsSubheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left — Stat counters */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl text-center transition-smooth hover:scale-[1.04]"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e8f4fd 100%)",
                    border: "1.5px solid rgba(79,142,247,0.15)",
                    boxShadow:
                      "0 4px 24px rgba(79,142,247,0.12), 0 1px 4px rgba(0,0,0,0.06)",
                  }}
                  data-ocid="benefits-stat"
                >
                  <p
                    className="text-5xl font-bold mb-1"
                    style={{
                      color: "#4f8ef7",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Benefits list */}
          <div className="space-y-6">
            {data.benefits.map((b, i) => (
              <div
                key={b.title}
                className="flex items-start gap-4"
                data-ocid={`benefit-item-${i}`}
              >
                <CheckCircle
                  size={22}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#4f8ef7" }}
                />
                <div>
                  <h4
                    className="text-base font-bold mb-1"
                    style={{ color: "#1a1a2e" }}
                  >
                    {b.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4b5563" }}
                  >
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
