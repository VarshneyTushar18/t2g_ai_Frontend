import type { SolutionData } from "@/data/solutions";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface Props {
  data: SolutionData;
}

export default function CTABanner({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px] relative overflow-hidden"
      style={{ background: "#f1f5f9" }}
    >
      {/* Subtle light accent — no animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, rgba(124,92,191,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
        >
          {data.ctaBannerHeading}{" "}
          <span style={{ color: "#4f8ef7" }}>{data.ctaBannerAccent}</span>
        </h2>

        <p
          className="text-lg mb-10 max-w-xl mx-auto"
          style={{ color: "#6b7280" }}
        >
          {data.ctaBannerSubtext}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-smooth hover:opacity-90 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
            }}
            data-ocid="cta-banner-primary"
          >
            {data.ctaBannerPrimary}
            <ArrowRight size={18} />
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-smooth hover:bg-[rgba(79,142,247,0.08)]"
            style={{
              border: "1px solid rgba(79,142,247,0.4)",
              background: "transparent",
              color: "#374151",
            }}
            data-ocid="cta-banner-secondary"
          >
            {data.ctaBannerSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
