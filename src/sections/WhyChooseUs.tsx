import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface Benefit {
  emoji: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    emoji: "⚡",
    title: "Unmatched Speed",
    description:
      "Apps & websites delivered in minutes to hours using AI-native tools and powered AI workflows.",
  },
  {
    emoji: "🧠",
    title: "Deep Prompt Engineering",
    description:
      "We don't just click buttons — we engineer intelligence through expert AI prompt engineering techniques.",
  },
  {
    emoji: "🌐",
    title: "Global Delivery",
    description:
      "World-class output at competitive pricing — Indian precision for a global client base.",
  },
  {
    emoji: "🔒",
    title: "NDA & IP Protection",
    description:
      "Your idea stays yours. Always. Full legal protection with every engagement.",
  },
  {
    emoji: "🎯",
    title: "Requirement-First Approach",
    description:
      "We deeply understand your need before writing a single AI prompt or line of code.",
  },
  {
    emoji: "🔄",
    title: "Unlimited Revisions",
    description:
      "Not satisfied? We iterate until it's perfect — no extra charge, no questions asked.",
  },
  {
    emoji: "👤",
    title: "Dedicated AI Engineer",
    description:
      "One specialist, one point of contact, full accountability from kickoff to delivery.",
  },
  {
    emoji: "🚀",
    title: "Powered AI Infrastructure",
    description:
      "Built on the latest LLM, generative AI, and agentic AI infrastructure available today.",
  },
];

export default function WhyChooseUs() {
  const [headingRef, headingVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, childVisible] = useStaggeredScrollAnimation(benefits.length, {
    threshold: 0.04,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section
      id="why-us"
      className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f0f4ff" }}
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headingRef}
          className={`text-center mb-6 scroll-hidden ${headingVisible ? "scroll-visible" : ""}`}
        >
          <h2
            id="why-us-heading"
            className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-4xl mx-auto leading-tight"
            style={{ color: "#0f172a" }}
          >
            Why Global Businesses Hire Their AI Engineers{" "}
            <span className="gradient-text">From Us</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4"
          data-ocid="why-us-grid"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              isVisible={childVisible[index] ?? false}
              delay={index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  benefit: Benefit;
  isVisible: boolean;
  delay: number;
}

function BenefitCard({ benefit, isVisible, delay }: BenefitCardProps) {
  return (
    <article
      className={`
        rounded-xl p-4
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
        border: "1px solid rgba(0,196,154,0.15)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow =
          "0 0 20px rgba(0, 196, 154, 0.18), 0 0 40px rgba(0, 196, 154, 0.07), 0 12px 28px rgba(0, 0, 0, 0.10)";
        el.style.borderColor = "rgba(0, 196, 154, 0.40)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        el.style.borderColor = "rgba(0,196,154,0.15)";
      }}
      data-ocid={`benefit-card-${benefit.title.toLowerCase().replace(/[\s&]+/g, "-")}`}
    >
      {/* Emoji icon */}
      <div
        className="text-3xl mb-3 leading-none select-none"
        aria-hidden="true"
      >
        {benefit.emoji}
      </div>

      {/* Title */}
      <h3
        className="font-orbitron text-sm font-bold mb-2 leading-snug"
        style={{ color: "#0f172a" }}
      >
        {benefit.title}
      </h3>

      {/* Description */}
      <p
        className="font-space-grotesk text-xs leading-relaxed"
        style={{ color: "#475569" }}
      >
        {benefit.description}
      </p>
    </article>
  );
}
