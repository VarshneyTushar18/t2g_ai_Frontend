import type { SolutionData } from "@/data/solutions";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

interface Props {
  data: SolutionData;
}

export default function HeroSection({ data }: Props) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            filter: "blur(90px)",
            opacity: 0.12,
            background:
              "radial-gradient(circle, #4f8ef7, #7c5cbf, transparent)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 text-sm">
          <Link to="/" style={{ color: "#6b7280" }}>
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/" style={{ color: "#6b7280" }}>
            Solutions
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: "#4f8ef7", fontWeight: 500 }}>
            {data.headlineAccent}
          </span>
        </nav>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                background: "rgba(79,142,247,0.1)",
                color: "#4f8ef7",
              }}
            >
              <Zap size={12} />
              {data.badge}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                marginTop: 20,
                lineHeight: 1.1,
              }}
            >
              {data.headline}{" "}
              <span style={{ color: "#4f8ef7" }}>
                {data.headlineAccent}
              </span>
            </h1>

            {/* Subheading */}
            <p style={{ marginTop: 20, color: "#4b5563", fontSize: 16 }}>
              {data.subheading}
            </p>

            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <Link
                to="/contact"
                style={{
                  padding: "12px 22px",
                  borderRadius: 10,
                  background: "linear-gradient(135deg,#4f8ef7,#7c5cbf)",
                  color: "#fff",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {data.ctaPrimary}
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                style={{
                  padding: "12px 22px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  background: "#fff",
                  fontWeight: 600,
                }}
              >
                {data.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              {data.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontSize: 22, fontWeight: 700 }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 13, color: "#6b7280" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (CHART SECTION FIXED) */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Chart Container */}
            <div
              style={{
                width: "100%",
                maxWidth: "360px", // ✅ REDUCED WIDTH
                background: "#fff",
                borderRadius: 16,
                padding: 20,
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p style={{ fontSize: 12, color: "#6b7280" }}>
                    Performance Overview
                  </p>
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>
                    {data.headlineAccent}
                  </h3>
                </div>

                <BarChart3 size={20} color="#4f8ef7" />
              </div>

              {/* BARCHART */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 6,
                  height: 140,
                }}
              >
                {[
                  40, 55, 45, 70, 50, 80, 65, 90, 60, 85,
                ].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: 4,
                      background:
                        i > 6
                          ? "linear-gradient(180deg,#4f8ef7,#7c5cbf)"
                          : "#e5edff",
                    }}
                  />
                ))}
              </div>

              {/* STATS GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                {data.heroStats.slice(0, 3).map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: 10,
                      background: "#f9fafb",
                      borderRadius: 10,
                    }}
                  >
                    <p style={{ fontSize: 11, color: "#6b7280" }}>
                      {s.label}
                    </p>
                    <p style={{ fontWeight: 700, color: "#4f8ef7" }}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                background: "#fff",
                padding: 12,
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <TrendingUp size={18} color="#4f8ef7" />
              <div>
                <p style={{ fontSize: 12 }}>Accuracy</p>
                <p style={{ fontWeight: 700 }}>98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}