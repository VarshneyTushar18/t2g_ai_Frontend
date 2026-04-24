import type { TechTab } from "@/data/solutions";
import { useState } from "react";

interface Props {
  heading: string;
  subheading: string;
  techTabs: TechTab[];
}

function LogoTile({
  name,
  abbr,
  color,
  index,
}: {
  name: string;
  abbr: string;
  color: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-5 cursor-default transition-smooth"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        minHeight: 104,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${color}66`;
        el.style.boxShadow = `0 4px 20px ${color}20`;
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,0,0,0.08)";
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
        el.style.transform = "translateY(0)";
      }}
      data-ocid={`tech-stack.tile.${index + 1}`}
    >
      {/* Abbr badge */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-smooth"
        style={{
          background: "rgba(0,0,0,0.05)",
          color: "#6b7280",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span className="font-mono text-xs" style={{ color: "inherit" }}>
          {abbr}
        </span>
      </div>

      {/* Tool name */}
      <span
        className="text-[12px] font-medium text-center leading-snug transition-smooth"
        style={{ color: "#6b7280" }}
      >
        {name}
      </span>

      {/* Color dot — glow indicator on hover */}
      <div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
    </div>
  );
}

export function TechStack({ heading, subheading, techTabs }: Props) {
  const [activeTab, setActiveTab] = useState(techTabs[0]?.id ?? "");

  const activeContent = techTabs.find((t) => t.id === activeTab);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: "clamp(40px, 5vw, 60px)",
        paddingBottom: "clamp(40px, 5vw, 60px)",
      }}
    >
      {/* Faint center accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(124,92,191,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[42px] font-bold leading-tight mb-4"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {heading}
          </h2>
          <p
            className="text-[18px] leading-relaxed max-w-xl mx-auto"
            style={{ color: "#6b7280" }}
          >
            {subheading}
          </p>
        </div>

        {/* Pill tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Technology categories"
        >
          {techTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                type="button"
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tech-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 rounded-full text-[14px] font-semibold transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4f8ef7]"
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, #4f8ef7 0%, #7c5cbf 100%)",
                        color: "#ffffff",
                        boxShadow: "0 4px 16px rgba(79,142,247,0.25)",
                        border: "1px solid transparent",
                      }
                    : {
                        background: "#ffffff",
                        color: "#6b7280",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }
                }
                data-ocid={`tech-stack.tab.${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div
          id={`tech-panel-${activeTab}`}
          role="tabpanel"
          aria-label={activeContent?.label}
          className="relative min-h-[200px]"
        >
          {activeContent && (
            <div>
              {/* Desktop: responsive grid */}
              <div
                className="hidden sm:grid gap-4"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                }}
              >
                {activeContent.items.map((item, i) => (
                  <LogoTile
                    key={item.name}
                    name={item.name}
                    abbr={item.abbr}
                    color={item.color}
                    index={i}
                  />
                ))}
              </div>

              {/* Mobile: horizontally scrollable single row */}
              <div className="sm:hidden overflow-x-auto pb-3 -mx-4 px-4">
                <div className="flex gap-3" style={{ minWidth: "max-content" }}>
                  {activeContent.items.map((item, i) => (
                    <div
                      key={item.name}
                      className="flex-shrink-0"
                      style={{ width: 110 }}
                    >
                      <LogoTile
                        name={item.name}
                        abbr={item.abbr}
                        color={item.color}
                        index={i}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
