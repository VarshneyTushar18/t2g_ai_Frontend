import type { AnimatedStat, NumberedBenefit } from "@/data/solutions";
import { Globe, Star, Timer, Users } from "lucide-react";

export interface WhyChooseUsProps {
  benefits: Array<{ number: string; title: string; description: string }>;
  stats: Array<{ value: string; label: string; icon: string; suffix?: string }>;
}

interface StatCardProps {
  stat: AnimatedStat;
}

function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <div
      className="group relative rounded-2xl p-5 flex flex-col gap-3 transition-smooth"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(79,142,247,0.12)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(79,142,247,0.4)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 20px rgba(79,142,247,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(79,142,247,0.12)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 12px rgba(0,0,0,0.05)";
      }}
      data-ocid="why-choose-us.stat-card"
    >
      {/* Icon badge */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(79,142,247,0.1)" }}
      >
        <Icon size={20} style={{ color: "#4f8ef7" }} />
      </div>

      {/* Number */}
      <p
        className="text-4xl font-bold stat-number leading-none"
        style={{
          color: "#4f8ef7",
          fontFamily: "var(--font-display)",
        }}
      >
        {stat.value}
        {stat.suffix}
      </p>

      {/* Label */}
      <p
        className="text-sm font-medium leading-snug"
        style={{ color: "#6b7280" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

interface BenefitRowProps {
  benefit: NumberedBenefit;
  isLast: boolean;
}

function BenefitRow({ benefit, isLast }: BenefitRowProps) {
  return (
    <>
      <div
        className="flex items-start gap-5 py-5"
        data-ocid="why-choose-us.benefit-row"
      >
        {/* Large accent number */}
        <span
          className="text-5xl font-bold leading-none select-none flex-shrink-0 w-14 text-right"
          style={{
            color: "#4f8ef7",
            fontFamily: "var(--font-display)",
            opacity: 0.9,
          }}
        >
          {benefit.number}
        </span>

        <div className="flex-1 min-w-0">
          <h4
            className="text-base font-bold mb-1.5 leading-snug"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {benefit.title}
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
            {benefit.description}
          </p>
        </div>
      </div>

      {/* Separator — omit after last row */}
      {!isLast && (
        <div
          className="w-full h-px"
          style={{ background: "rgba(0,0,0,0.07)" }}
        />
      )}
    </>
  );
}

export function WhyChooseUs({ benefits }: WhyChooseUsProps) {
  const defaultStats: AnimatedStat[] = [
    { icon: Star, value: 98, suffix: "%", label: "Client Retention" },
    { icon: Users, value: 500, suffix: "+", label: "Projects Delivered" },
    { icon: Timer, value: 72, suffix: "hr", label: "Avg. Turnaround" },
    { icon: Globe, value: 15, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: "clamp(40px, 5vw, 60px)",
        paddingBottom: "clamp(40px, 5vw, 60px)",
      }}
      data-ocid="why-choose-us.section"
    >
      {/* Subtle radial accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(79,142,247,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 xl:gap-20 items-center">
          {/* ── LEFT: Heading + numbered benefits ── */}
          <div>
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#4f8ef7", letterSpacing: "0.16em" }}
            >
              Our Advantages
            </p>

            {/* Section heading */}
            <h2
              className="text-4xl xl:text-[42px] font-bold leading-[1.15] mb-10"
              style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
            >
              Why Leading Businesses
              <br />
              <span style={{ color: "#4f8ef7" }}>Choose Us</span>
            </h2>

            {/* Numbered benefit rows */}
            <div>
              {benefits.map((benefit, i) => (
                <BenefitRow
                  key={benefit.number}
                  benefit={benefit}
                  isLast={i === benefits.length - 1}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: 2×2 stat cards ── */}
          <div
            className="grid grid-cols-2 gap-4"
            data-ocid="why-choose-us.stats-grid"
          >
            {defaultStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
