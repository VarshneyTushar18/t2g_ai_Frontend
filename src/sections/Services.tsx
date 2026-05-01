import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "AI-Powered Web Development",
    description:
      "Stunning, functional websites built using Lovable, Framer AI & Horizon in hours — not weeks. Powered AI infrastructure, production-ready output.",
  },
  {
    number: "02",
    title: "App Development via AI Engineering",
    description:
      "iOS, Android, and PWA apps built through Emergent and OpenCode AI with clean, production-grade code and AI prompt engineering.",
  },
  {
    number: "03",
    title: "AI Prompt Engineering Services",
    description:
      "We engineer, test & optimize prompts that deliver consistent, high-quality AI outputs for your team and products.",
  },
  {
    number: "04",
    title: "SaaS & Software MVP Development",
    description:
      "Launch your startup idea as a working MVP using Caffeine and GenW.AI — demo-ready, pitch-ready, or ship-ready.",
  },
  {
    number: "05",
    title: "AI Agent & Workflow Automation",
    description:
      "Build autonomous AI agents using Emergent's framework that handle tasks, decisions, and processes automatically.",
  },
  {
    number: "06",
    title: "Figma to Live App (AI-Powered)",
    description:
      "Upload your Figma design — we use Framer AI to deliver a pixel-perfect, fully functional live application.",
  },
];

export default function Services() {
  const [headingRef, headingVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, childVisible] = useStaggeredScrollAnimation(services.length, {
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section
      id="services"
      className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f8faff" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headingRef}
          className={`text-center mb-6 scroll-hidden ${headingVisible ? "scroll-visible" : ""}`}
        >
          <h2
            id="services-heading"
            className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold"
            style={{ color: "#0f172a" }}
          >
            What You Can <span className="gradient-text">Hire Us For</span>
          </h2>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          data-ocid="services-grid"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              isVisible={childVisible[index] ?? false}
              delay={index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  isVisible: boolean;
  delay: number;
}

function ServiceCard({ service, isVisible, delay }: ServiceCardProps) {
  return (
    <article
      className={`
        group relative rounded-xl p-4 sm:p-5
        border-l-4 border-l-purple-400/50
        scroll-hidden
        ${isVisible ? "scroll-visible" : ""}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0,0,0,0.07)",
        borderLeft: "4px solid rgba(124,58,237,0.40)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-2px)";
        el.style.borderLeftColor = "#00c49a";
        el.style.boxShadow =
          "-4px 0 20px rgba(0, 196, 154, 0.20), 0 8px 24px rgba(0, 0, 0, 0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.borderLeftColor = "rgba(124,58,237,0.40)";
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
      }}
      data-ocid={`service-card-${service.number}`}
    >
      {/* Faded large number */}
      <div className="neon-number mb-2 select-none" aria-hidden="true">
        {service.number}
      </div>

      {/* Title */}
      <h3
        className="font-orbitron text-base font-bold leading-snug mb-3"
        style={{ color: "#0f172a" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="font-space-grotesk text-sm leading-relaxed"
        style={{ color: "#475569" }}
      >
        {service.description}
      </p>
    </article>
  );
}
