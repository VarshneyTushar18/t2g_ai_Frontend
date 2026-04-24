import type { LucideIcon } from "lucide-react";
import { useState } from "react";

export interface IndustryTile {
  icon: LucideIcon;
  iconColor: string;
  name: string;
  tooltip: string;
}

interface IndustriesHexProps {
  industries: IndustryTile[];
}

export function IndustriesHex({ industries }: IndustriesHexProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#ffffff",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div
        style={{ paddingTop: 50, paddingBottom: 50 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-display font-bold"
            style={{
              fontSize: 42,
              lineHeight: 1.18,
              marginBottom: 16,
              color: "#1a1a2e",
            }}
          >
            Industries We Serve
          </h2>
          <p
            className="font-body mx-auto"
            style={{ fontSize: 17, color: "#6b7280", maxWidth: 560 }}
          >
            Specialized AI expertise tailored for the sectors that drive global
            economies.
          </p>
        </div>

        {/* Tile Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          {industries.map((tile, idx) => (
            <div
              key={tile.name}
              className="relative flex flex-col items-center cursor-pointer select-none"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-ocid={`industries.item.${idx + 1}`}
            >
              {/* Tooltip */}
              {hoveredIdx === idx && (
                <div
                  className="absolute z-20 font-body"
                  style={{
                    bottom: "calc(100% + 10px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#ffffff",
                    border: "1px solid rgba(79,142,247,0.35)",
                    borderRadius: 8,
                    padding: "6px 12px",
                    fontSize: 12,
                    color: "#374151",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                    pointerEvents: "none",
                  }}
                >
                  {tile.tooltip}
                  {/* Arrow */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: -5,
                      left: "50%",
                      transform: "translateX(-50%) rotate(45deg)",
                      width: 8,
                      height: 8,
                      background: "#ffffff",
                      border: "1px solid rgba(79,142,247,0.35)",
                      borderTop: "none",
                      borderLeft: "none",
                    }}
                  />
                </div>
              )}

              {/* Circle Tile */}
              <div
                className="relative flex items-center justify-center transition-smooth hover:scale-105"
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: "#f8fafc",
                  border:
                    hoveredIdx === idx
                      ? "1.5px solid rgba(79,142,247,0.7)"
                      : "1.5px solid rgba(0,0,0,0.1)",
                  boxShadow:
                    hoveredIdx === idx
                      ? "0 4px 20px rgba(79,142,247,0.18)"
                      : "0 2px 8px rgba(0,0,0,0.06)",
                  transition:
                    "border 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                }}
              >
                {(() => {
                  const Icon = tile.icon;
                  return (
                    <Icon
                      size={40}
                      style={{
                        color: tile.iconColor,
                        opacity: hoveredIdx === idx ? 1 : 0.82,
                        transition: "opacity 0.25s",
                      }}
                    />
                  );
                })()}
              </div>

              {/* Label */}
              <span
                className="font-body mt-3 text-center"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: hoveredIdx === idx ? "#1a1a2e" : "#6b7280",
                  transition: "color 0.22s",
                  letterSpacing: "0.01em",
                }}
              >
                {tile.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Default industries data ──────────────────────────────────────────────────
// Note: Import icons from lucide-react when using defaultIndustries directly.
export const defaultIndustries: IndustryTile[] = [];
