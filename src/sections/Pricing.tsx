import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface PlanFeature {
  text: string;
}

interface Plan {
  id: string;
  name: string;
  priceLabel: string;
  engineerCount: string;
  features: PlanFeature[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "STARTER",
    priceLabel: "Custom Pricing",
    engineerCount: "1 AI Engineer",
    features: [
      { text: "1 AI Engineer assigned" },
      { text: "Up to 2 projects/month" },
      { text: "1 AI Platform specialist" },
      { text: "3 revision rounds" },
      { text: "Email support" },
    ],
  },
  {
    id: "growth",
    name: "GROWTH",
    priceLabel: "Custom Pricing",
    engineerCount: "2 AI Engineers",
    features: [
      { text: "2 dedicated AI Engineers" },
      { text: "Unlimited projects" },
      { text: "3 AI Platform specialists" },
      { text: "Unlimited revisions" },
      { text: "Priority support" },
    ],
    featured: true,
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    priceLabel: "Custom Pricing",
    engineerCount: "Full AI Team",
    features: [
      { text: "Dedicated AI team (4–5 engineers)" },
      { text: "All 7 AI platforms" },
      { text: "White-label delivery" },
      { text: "NDA + IP agreement" },
      { text: "24/7 dedicated support" },
    ],
  },
];

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Pricing() {
  const [headingRef, headingVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, childVisible] = useStaggeredScrollAnimation(plans.length, {
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section
      id="pricing"
      className="py-12 px-4"
      style={{ backgroundColor: "#f0f4ff" }}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headingRef}
          className={`text-center mb-8 scroll-hidden ${headingVisible ? "scroll-visible" : ""}`}
        >
          <span
            className="section-label mb-5 inline-block"
            data-ocid="pricing-label"
          >
            PRICING
          </span>
          <h2
            id="pricing-heading"
            className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            style={{ color: "#0f172a" }}
          >
            Flexible Hiring Plans for{" "}
            <span className="gradient-text">Every Business</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          data-ocid="pricing-grid"
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isVisible={childVisible[index] ?? false}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: Plan;
  isVisible: boolean;
  delay: number;
}

function PricingCard({ plan, isVisible, delay }: PricingCardProps) {
  const featured = plan.featured === true;

  if (featured) {
    return (
      <article
        className={`relative rounded-2xl p-6 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
        style={{
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
          transform: isVisible ? "scale(1.05)" : "scale(1.05) translateY(24px)",
          background: "rgba(124, 58, 237, 0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(124, 58, 237, 0.45)",
          boxShadow:
            "0 0 40px rgba(124, 58, 237, 0.18), 0 0 80px rgba(124, 58, 237, 0.08), 0 24px 48px rgba(0, 0, 0, 0.08)",
          transition:
            "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 60px rgba(124, 58, 237, 0.30), 0 0 100px rgba(124, 58, 237, 0.12), 0 24px 48px rgba(0, 0, 0, 0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 40px rgba(124, 58, 237, 0.18), 0 0 80px rgba(124, 58, 237, 0.08), 0 24px 48px rgba(0, 0, 0, 0.08)";
        }}
        data-ocid={`pricing-card-${plan.id}`}
      >
        {/* Most Popular badge */}
        <div className="flex justify-center mb-6">
          <span
            className="font-orbitron text-xs font-bold tracking-widest text-white px-4 py-1.5 rounded-full"
            style={{ backgroundColor: "#7c3aed" }}
          >
            MOST POPULAR
          </span>
        </div>

        {/* Plan name */}
        <h3 className="font-orbitron text-2xl font-bold gradient-text mb-1 text-center">
          {plan.name}
        </h3>

        {/* Price + engineer count */}
        <p
          className="font-space-grotesk text-center text-sm font-semibold mb-0.5"
          style={{ color: "#007a64" }}
        >
          {plan.priceLabel}
        </p>
        <p
          className="font-space-grotesk text-center text-sm mb-6"
          style={{ color: "#475569" }}
        >
          {plan.engineerCount}
        </p>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        />

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li
              key={feature.text}
              className="flex items-center gap-3 font-space-grotesk text-sm"
              style={{ color: "#334155" }}
            >
              <span
                className="flex-shrink-0 w-4 h-4 rounded-full"
                style={{
                  backgroundColor: "rgba(0, 196, 154, 0.18)",
                  boxShadow: "0 0 8px rgba(0, 196, 154, 0.40)",
                }}
                aria-hidden="true"
              />
              {feature.text}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          type="button"
          onClick={scrollToContact}
          className="w-full py-3 rounded-xl font-orbitron text-sm font-bold text-white transition-smooth"
          style={{
            backgroundColor: "#7c3aed",
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 35px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.25)";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px) scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 20px rgba(124, 58, 237, 0.35)";
            (e.currentTarget as HTMLElement).style.transform = "";
          }}
          data-ocid={`pricing-cta-${plan.id}`}
          aria-label={`Get custom quote for ${plan.name} plan`}
        >
          Get Custom Quote
        </button>
      </article>
    );
  }

  return (
    <article
      className={`rounded-2xl p-6 card-hover scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
        background: "rgba(255,255,255,0.90)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(124, 58, 237, 0.40)";
        el.style.boxShadow =
          "0 0 24px rgba(124, 58, 237, 0.14), 0 12px 32px rgba(0, 0, 0, 0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,0,0,0.07)";
        el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
      }}
      data-ocid={`pricing-card-${plan.id}`}
    >
      {/* Spacer to align with featured card badge */}
      <div className="h-10 mb-6" aria-hidden="true" />

      {/* Plan name */}
      <h3
        className="font-orbitron text-xl font-bold mb-1 text-center"
        style={{ color: "#0f172a" }}
      >
        {plan.name}
      </h3>

      {/* Price + engineer count */}
      <p
        className="font-space-grotesk text-center text-sm font-semibold mb-0.5"
        style={{ color: "#007a64" }}
      >
        {plan.priceLabel}
      </p>
      <p
        className="font-space-grotesk text-center text-sm mb-6"
        style={{ color: "#475569" }}
      >
        {plan.engineerCount}
      </p>

      {/* Divider */}
      <div
        className="mb-6"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      />

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className="flex items-center gap-3 font-space-grotesk text-sm"
            style={{ color: "#334155" }}
          >
            <span
              className="flex-shrink-0 w-4 h-4 rounded-full"
              style={{
                backgroundColor: "rgba(0, 196, 154, 0.12)",
                boxShadow: "0 0 6px rgba(0, 196, 154, 0.30)",
              }}
              aria-hidden="true"
            />
            {feature.text}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        type="button"
        onClick={scrollToContact}
        className="w-full py-3 rounded-xl font-orbitron text-sm font-bold transition-smooth"
        style={{
          border: "1px solid rgba(124, 58, 237, 0.50)",
          color: "#7c3aed",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = "#7c3aed";
          el.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = "transparent";
          el.style.color = "#7c3aed";
        }}
        data-ocid={`pricing-cta-${plan.id}`}
        aria-label={`Get custom quote for ${plan.name} plan`}
      >
        Get Custom Quote
      </button>
    </article>
  );
}
