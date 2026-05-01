import { motion } from "motion/react";
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface Platform {
  tag: string;
  name: string;
  description: string;
  gradient: string;
  tagColor: string;
  icon: string;
}

const platforms: Platform[] = [
  {
    tag: "Full-Stack Web Apps",
    name: "Lovable",
    description:
      "React frontends, Supabase backends — complete web apps deployed instantly with AI prompt engineering.",
    gradient: "linear-gradient(90deg, #00c49a, #0ea5e9)",
    tagColor: "#007a64",
    icon: "/assets/images/lovable-logo.png",
  },
  {
    tag: "Autonomous Agents",
    name: "Emergent",
    description:
      "Complex AI-driven applications with autonomous agent workflows and intelligent decision systems.",
    gradient: "linear-gradient(90deg, #7c3aed, #ec4899)",
    tagColor: "#6d28d9",
    icon: "/assets/images/emergent-logo.png",
  },
  {
    tag: "Rapid Prototyping",
    name: "Caffeine",
    description:
      "High-performance MVP delivery and product prototyping at blazing speed with powered AI.",
    gradient: "linear-gradient(90deg, #d97706, #dc2626)",
    tagColor: "#b45309",
    icon: "/assets/images/caffeine-logo.png",
  },
  {
    tag: "Generative AI Platforms",
    name: "GenW.AI",
    description:
      "Generative AI-powered websites, content tools, and creative platforms for next-gen businesses.",
    gradient: "linear-gradient(90deg, #059669, #00c49a)",
    tagColor: "#047857",
    icon: "/assets/images/genw-ai-logo.svg",
  },
  {
    tag: "Enterprise UI Systems",
    name: "Horizon",
    description:
      "Enterprise-grade UI systems and design-to-code pipelines for large-scale digital products.",
    gradient: "linear-gradient(90deg, #4f46e5, #7c3aed)",
    tagColor: "#4338ca",
    icon: "/assets/images/horizon-logo.jpg",
  },
  {
    tag: "Design to Live App",
    name: "Framer AI",
    description:
      "Figma-to-live-app conversion with AI layout intelligence — pixel-perfect every time.",
    gradient: "linear-gradient(90deg, #db2777, #d97706)",
    tagColor: "#be185d",
    icon: "/assets/images/framer-ai-logo.png",
  },
  {
    tag: "Open Source AI Coding",
    name: "OpenCode AI",
    description:
      "AI coding automation for scalable software delivery with open-source precision and speed.",
    gradient: "linear-gradient(90deg, #00c49a, #7c3aed)",
    tagColor: "#007a64",
    icon: "/assets/images/opencode-logo.png",
  },
];

export default function AIPlatforms() {
  const [labelRef, labelVisible] = useScrollAnimation({ threshold: 0.1 });
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.1 });
  const [gridRef, cardVisible] = useStaggeredScrollAnimation(platforms.length, {
    threshold: 0.05,
  });

  return (
    <section
      id="platforms"
      className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#f0f4ff" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 196, 154, 0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(124, 58, 237, 0.07) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <div
          ref={labelRef}
          className={`scroll-hidden ${labelVisible ? "scroll-visible" : ""} flex justify-center mb-3`}
        >
        </div>

        {/* Heading */}
        <div
          ref={headingRef}
          className={`scroll-hidden ${headingVisible ? "scroll-visible" : ""} text-center mb-5`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h2
            className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight max-w-3xl mx-auto"
            style={{ color: "#0f172a" }}
          >
            Specialists In The World's{" "}
            <span className="gradient-text">Top AI Development</span> Platforms
          </h2>
        </div>

        {/* Cards grid — 7 cards, last row centered automatically */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 justify-items-center"
          data-ocid="platforms-grid"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className={`scroll-hidden ${cardVisible[index] ? "scroll-visible" : ""} w-full`}
              style={{ transitionDelay: `${index * 0.08}s` }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              data-ocid={`platform-card-${platform.name.toLowerCase().replace(/[\s.]/g, "-")}`}
            >
              <PlatformCard platform={platform} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden h-full"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 0, 0, 0.07)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0, 196, 154, 0.45)";
        el.style.boxShadow =
          "0 0 24px rgba(0, 196, 154, 0.18), 0 8px 32px rgba(0, 0, 0, 0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0, 0, 0, 0.07)";
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: platform.gradient }}
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="p-4 sm:p-5">
        {/* Category tag */}
        <p
          className="font-orbitron text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: platform.tagColor, letterSpacing: "0.1em" }}
        >
          {platform.tag}
        </p>

        {/* Platform name with icon */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={platform.icon}
            alt={`${platform.name} logo`}
            width={32}
            height={32}
            className="w-8 h-8 object-contain rounded flex-shrink-0"
            style={{ minWidth: "2rem" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <h3
            className="font-orbitron text-xl font-bold leading-snug"
            style={{ color: "#0f172a" }}
          >
            {platform.name}
          </h3>
        </div>

        {/* Accent divider */}
        <div
          className="w-8 h-px mb-3"
          style={{ background: platform.gradient }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className="font-space-grotesk text-sm leading-relaxed"
          style={{ color: "#475569" }}
        >
          {platform.description}
        </p>
      </div>
    </div>
  );
}
