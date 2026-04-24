import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

export interface ServiceCard {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

interface Props {
  services: ServiceCard[];
}

export function ServicesGrid({ services }: Props) {
  return (
    <section
      className="py-[70px] md:py-[50px] relative overflow-hidden bg-section-premium"
      style={{
        background: "linear-gradient(160deg, #fafafa 0%, #f0f4ff 100%)",
      }}
      data-ocid="services-grid.section"
    >
      {/* Subtle top highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#4f8ef7", letterSpacing: "0.12em" }}
          >
            Our Services
          </span>
          <h2
            className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "#1a1a2e",
              letterSpacing: "-0.02em",
            }}
          >
            What We <span style={{ color: "#4f8ef7" }}>Deliver</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#4b5563" }}
          >
            End-to-end capabilities engineered for enterprises that demand
            precision, speed, and scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCardItem key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardItem({
  service,
  index,
}: {
  service: ServiceCard;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.border = `1px solid ${service.color}44`;
    el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.1), 0 0 20px ${service.color}14`;
    el.style.background = "#ffffff";
    const bar = el.querySelector<HTMLElement>("[data-accent-bar]");
    if (bar) bar.style.width = "100%";
    if (bar)
      bar.style.background = `linear-gradient(90deg, ${service.color}, #06b6d4)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.border = "1px solid rgba(0,0,0,0.08)";
    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
    el.style.background = "#ffffff";
    const bar = el.querySelector<HTMLElement>("[data-accent-bar]");
    if (bar) bar.style.width = "0%";
    if (bar)
      bar.style.background = `linear-gradient(90deg, ${service.color}, #7c5cbf)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow:
          "0 4px 24px rgba(79,142,247,0.12), 0 1px 4px rgba(0,0,0,0.06)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      data-ocid={`services-grid.item.${index + 1}`}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: `${service.color}12`,
        }}
      >
        <service.icon
          size={22}
          strokeWidth={1.5}
          style={{ color: service.color }}
        />
      </div>

      {/* Content */}
      <h3
        className="text-[18px] font-bold mb-3 leading-snug"
        style={{ fontFamily: "var(--font-display)", color: "#1a1a2e" }}
      >
        {service.title}
      </h3>
      <p
        className="text-[14px] leading-relaxed flex-1"
        style={{ color: "#4b5563" }}
      >
        {service.description}
      </p>

      {/* Explore link */}
      <div className="flex justify-end mt-5">
        <span
          className="text-[13px] font-medium transition-all duration-200 group-hover:gap-2 inline-flex items-center gap-1 cursor-pointer"
          style={{ color: service.color }}
        >
          Explore →
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        data-accent-bar
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{
          width: "0%",
          background: `linear-gradient(90deg, ${service.color}, #7c5cbf)`,
          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
