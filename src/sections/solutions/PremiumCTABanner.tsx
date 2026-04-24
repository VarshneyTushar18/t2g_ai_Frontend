import { ArrowRight, Phone } from "lucide-react";

interface PremiumCTABannerProps {
  heading?: string;
  accentWord?: string;
  subtext?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  trustItems?: string[];
}

const defaultTrustItems = [
  "No commitment required",
  "Response within 24hrs",
  "NDA on request",
];

export function PremiumCTABanner({
  heading = "Let's Build Something",
  accentWord = "Extraordinary",
  subtext = "Join 200+ companies already scaling with Tech 2Globe AI",
  primaryLabel = "Start Your Project →",
  secondaryLabel = "Schedule a Free Call",
  trustItems = defaultTrustItems,
}: PremiumCTABannerProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 450,
        background: "#f1f5f9",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Diagonal gradient band */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(124,92,191,0.07) 50%, transparent 100%)",
          transform: "rotate(-6deg) scale(1.2)",
          pointerEvents: "none",
        }}
      />

      {/* Blue orb — static */}
      <div
        className="gradient-orb"
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "28%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Purple orb — static */}
      <div
        className="gradient-orb"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(124,92,191,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "12%",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center flex flex-col items-center"
        style={{ padding: "80px 24px", maxWidth: 720, margin: "0 auto" }}
      >
        {/* Heading */}
        <h2
          className="font-display font-bold"
          style={{
            fontSize: 48,
            lineHeight: 1.12,
            marginBottom: 20,
            letterSpacing: "-0.01em",
            color: "#1a1a2e",
          }}
        >
          {heading} <span style={{ color: "#4f8ef7" }}>{accentWord}</span>
        </h2>

        {/* Subtext */}
        <p
          className="font-body"
          style={{
            fontSize: 18,
            color: "#6b7280",
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          {subtext}
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: 16, marginBottom: 32 }}
        >
          <a
            href="#contact"
            className="font-body font-semibold flex items-center gap-2 transition-smooth hover:opacity-90"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "14px 32px",
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(79,142,247,0.25)",
              textDecoration: "none",
            }}
            data-ocid="cta.primary_button"
          >
            {primaryLabel}
            <ArrowRight size={17} />
          </a>

          <a
            href="#contact"
            className="font-body font-semibold flex items-center gap-2 transition-smooth hover:bg-[rgba(79,142,247,0.08)]"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "#374151",
              border: "1.5px solid rgba(79,142,247,0.4)",
              borderRadius: 10,
              padding: "13px 30px",
              fontSize: 16,
              cursor: "pointer",
              textDecoration: "none",
            }}
            data-ocid="cta.secondary_button"
          >
            <Phone size={16} />
            {secondaryLabel}
          </a>
        </div>

        {/* Trust items */}
        <div
          className="flex flex-wrap items-center justify-center font-body"
          style={{ gap: 0 }}
        >
          {trustItems.map((item, idx) => (
            <span key={item} style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </span>
              {idx < trustItems.length - 1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.2)",
                    margin: "0 12px",
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
