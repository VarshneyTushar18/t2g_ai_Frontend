import type { SocialProofLogo } from "@/data/solutions";

interface SocialProofStripProps {
  logos?: SocialProofLogo[];
}

const DEFAULT_LOGOS: { name: string; color: string }[] = [
  { name: "Accenture", color: "#a100ff" },
  { name: "Deloitte", color: "#86bc25" },
  { name: "IBM", color: "#0f62fe" },
  { name: "Oracle", color: "#f80000" },
  { name: "SAP", color: "#0070f3" },
  { name: "Salesforce", color: "#00a1e0" },
  { name: "Workday", color: "#f5882d" },
  { name: "ServiceNow", color: "#62d84e" },
  { name: "Snowflake", color: "#29b5e8" },
  { name: "Databricks", color: "#ff3621" },
  { name: "Palantir", color: "#374151" },
  { name: "Confluent", color: "#0081cb" },
  { name: "HashiCorp", color: "#7b42bc" },
  { name: "DataStax", color: "#e8423e" },
];

export function SocialProofStrip({ logos }: SocialProofStripProps) {
  // Use provided logos or fallback to defaults
  const items =
    logos && logos.length > 0
      ? logos.map((l) => ({ name: l.name, color: "#4f8ef7" }))
      : DEFAULT_LOGOS;

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <section
      data-ocid="social-proof.section"
      className="relative py-16 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(79,142,247,0.1)",
        borderBottom: "1px solid rgba(79,142,247,0.1)",
      }}
    >
      {/* Top label */}
      <p
        data-ocid="social-proof.label"
        className="text-center text-sm font-body mb-8 tracking-widest uppercase"
        style={{ color: "#6b7280", letterSpacing: "0.14em" }}
      >
        Trusted by{" "}
        <span style={{ color: "#4f8ef7" }} className="font-semibold">
          200+
        </span>{" "}
        companies worldwide
      </p>

      {/* Marquee wrapper — edge-fade mask applied via CSS */}
      <div className="marquee-container" data-ocid="social-proof.marquee">
        <div className="marquee-track" style={{ width: "max-content" }}>
          {doubled.map((logo, idx) => (
            <LogoItem
              key={`${logo.name}-${idx}`}
              name={logo.name}
              color={logo.color}
            />
          ))}
        </div>
      </div>

      {/* Override marquee gradient masks to use white */}
      <style>{`
        .marquee-container::before {
          background: linear-gradient(90deg, #ffffff, transparent) !important;
        }
        .marquee-container::after {
          background: linear-gradient(-90deg, #ffffff, transparent) !important;
        }
      `}</style>
    </section>
  );
}

/* ─── Single Logo Item ──────────────────────────────────────── */
interface LogoItemProps {
  name: string;
  color: string;
}

function LogoItem({ name }: LogoItemProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <div
      className="marquee-item group flex items-center gap-2 cursor-default select-none"
      style={{ padding: "0 36px" }}
    >
      {/* Logo chip: initials badge + company name */}
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-300
                   group-hover:border-[rgba(79,142,247,0.4)]"
        style={{
          background: "rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.08)",
          transition: "border-color 0.3s",
        }}
      >
        {/* Initials circle */}
        <span
          className="flex items-center justify-center rounded-sm text-xs font-bold leading-none
                     group-hover:text-[#4f8ef7] group-hover:bg-[rgba(79,142,247,0.1)]"
          style={{
            width: 22,
            height: 22,
            background: "rgba(0,0,0,0.06)",
            color: "#6b7280",
            transition: "color 0.3s, background 0.3s",
          }}
        >
          {initials}
        </span>
        {/* Company name */}
        <span
          className="text-sm font-semibold tracking-tight whitespace-nowrap
                     group-hover:text-[#4f8ef7]"
          style={{
            color: "#6b7280",
            transition: "color 0.3s",
          }}
        >
          {name}
        </span>
      </span>
    </div>
  );
}
