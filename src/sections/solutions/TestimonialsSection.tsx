import type { SolutionData } from "@/data/solutions";
import { Quote, Star } from "lucide-react";

const logos = [
  { id: "accenture", name: "Accenture" },
  { id: "deloitte", name: "Deloitte" },
  { id: "mckinsey", name: "McKinsey" },
  { id: "salesforce", name: "Salesforce" },
  { id: "microsoft", name: "Microsoft" },
  { id: "ibm", name: "IBM" },
  { id: "oracle", name: "Oracle" },
  { id: "sap", name: "SAP" },
];

const logosDoubled = [
  ...logos.map((l) => ({ ...l, uid: `a-${l.id}` })),
  ...logos.map((l) => ({ ...l, uid: `b-${l.id}` })),
];

interface Props {
  data: SolutionData;
}

export default function TestimonialsSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px] overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {data.testimonialsHeading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            {data.testimonialsSubheading}
          </p>
        </div>

        {/* Logo strip */}
        <div className="relative mb-16 overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, #f8fafc, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(-90deg, #f8fafc, transparent)",
            }}
          />

          <div
            className="flex gap-12 items-center"
            style={{
              animation: "logo-scroll 24s linear infinite",
              width: "max-content",
            }}
          >
            {logosDoubled.map((logo) => (
              <div
                key={logo.uid}
                className="text-lg font-bold tracking-wide transition-smooth cursor-default select-none flex-shrink-0"
                style={{
                  color: "rgba(107,114,128,0.6)",
                  minWidth: "max-content",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#4f8ef7";
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 0 8px rgba(79,142,247,0.4))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(107,114,128,0.6)";
                  (e.currentTarget as HTMLElement).style.filter = "none";
                }}
                data-ocid="logo-strip-item"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative p-8 rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(79,142,247,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              data-ocid={`testimonial-card-${i}`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-4 opacity-40"
                style={{ color: t.color }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill="#f59e0b"
                    style={{ color: "#f59e0b" }}
                  />
                ))}
              </div>

              <p
                className="italic leading-relaxed mb-6 text-base"
                style={{ color: "#374151" }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, #7c5cbf)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#1a1a2e" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
