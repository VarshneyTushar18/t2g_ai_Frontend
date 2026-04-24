import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export interface CaseStudy {
  projectName: string;
  industry: string;
  description: string;
  metrics: [string, string, string];
  accentGradient: string;
  link?: string;
}

const defaultCaseStudies: CaseStudy[] = [
  {
    projectName: "HealthIQ Analytics Platform",
    industry: "Healthcare",
    description:
      "Unified patient data across 12 hospital systems into a real-time AI analytics layer, enabling predictive readmission scoring and operational cost reduction.",
    metrics: [
      "19% fewer readmissions",
      "3x faster reporting",
      "$2.4M saved annually",
    ],
    accentGradient: "linear-gradient(90deg, #4f8ef7, #06b6d4)",
    link: "#",
  },
  {
    projectName: "MeridianPay Fraud Engine",
    industry: "FinTech",
    description:
      "Built a real-time ML fraud detection pipeline processing 8M+ daily transactions with sub-50ms scoring, slashing false positives by 40%.",
    metrics: [
      "40% fewer false positives",
      "$1.2M fraud prevented/mo",
      "50ms avg. latency",
    ],
    accentGradient: "linear-gradient(90deg, #7c5cbf, #4f8ef7)",
    link: "#",
  },
  {
    projectName: "RetailMax Demand Forecast",
    industry: "Retail",
    description:
      "Deployed SKU-level demand forecasting across 4,200 store locations, enabling dynamic inventory allocation and precision markdown optimization.",
    metrics: [
      "31% fewer stockouts",
      "2x conversion rate",
      "18% overstock reduction",
    ],
    accentGradient: "linear-gradient(90deg, #06b6d4, #10b981)",
    link: "#",
  },
  {
    projectName: "FleetOps Intelligence Suite",
    industry: "Logistics",
    description:
      "Integrated IoT sensor telemetry with predictive maintenance models to eliminate unplanned fleet downtime and optimize last-mile delivery routing.",
    metrics: [
      "72hr failure prediction",
      "20% fuel cost down",
      "99.2% on-time delivery",
    ],
    accentGradient: "linear-gradient(90deg, #10b981, #7c5cbf)",
    link: "#",
  },
];

interface CaseStudiesSectionProps {
  caseStudies?: CaseStudy[];
}

export function CaseStudiesSection({
  caseStudies = defaultCaseStudies,
}: CaseStudiesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  function onMouseDown(e: React.MouseEvent) {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX,
      scrollLeft: scrollRef.current.scrollLeft,
    };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }

  function onMouseUp() {
    setIsDragging(false);
  }

  return (
    <section
      className="relative py-[70px] max-md:py-[50px] overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12" data-ocid="case-studies.section">
          <h2
            className="font-display text-[42px] font-bold leading-tight mb-3"
            style={{ color: "#1a1a2e" }}
          >
            Work That Speaks
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
            Real projects. Real results.
          </p>
        </div>

        {/* Scrollable cards row — desktop */}
        <div
          ref={scrollRef}
          data-ocid="case-studies.list"
          className="flex gap-5 overflow-x-auto pb-4 select-none hidden-scrollbar"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.projectName} study={study} index={i} />
          ))}
        </div>

        {/* Mobile: single column stack */}
        <div className="md:hidden flex flex-col gap-5 mt-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={`m-${study.projectName}`}
              study={study}
              index={i}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hidden-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div
      data-ocid={`case-studies.item.${index + 1}`}
      className="relative flex-shrink-0 w-[380px] max-md:w-full h-[280px] rounded-xl flex flex-col overflow-hidden group transition-smooth hover:-translate-y-1"
      style={{
        background: "#f8fafc",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* Colored top accent bar */}
      <div
        className="w-full h-[4px] flex-shrink-0"
        style={{ background: study.accentGradient }}
      />

      {/* Hover shadow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "0 8px 30px rgba(79,142,247,0.12)",
        }}
      />

      <div className="flex flex-col flex-1 p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <h3
            className="font-display font-bold text-[16px] leading-snug pr-2"
            style={{ color: "#1a1a2e" }}
          >
            {study.projectName}
          </h3>
          <Badge
            variant="secondary"
            className="flex-shrink-0 text-[11px] px-2 py-0.5"
            style={{
              background: "rgba(79,142,247,0.1)",
              color: "#4f8ef7",
              border: "1px solid rgba(79,142,247,0.2)",
            }}
          >
            {study.industry}
          </Badge>
        </div>

        {/* Description */}
        <p
          className="text-[13px] leading-relaxed line-clamp-3 mb-auto"
          style={{ color: "#6b7280" }}
        >
          {study.description}
        </p>

        {/* Metrics chips */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
          {study.metrics.map((m) => (
            <span
              key={m}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                color: "#374151",
                background: "rgba(0,0,0,0.04)",
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={study.link ?? "#"}
          data-ocid={`case-studies.link.${index + 1}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 group/link self-end"
          style={{ color: "#4f8ef7" }}
          onClick={(e) => e.stopPropagation()}
        >
          View Case Study
          <ArrowRight
            size={13}
            className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
}
