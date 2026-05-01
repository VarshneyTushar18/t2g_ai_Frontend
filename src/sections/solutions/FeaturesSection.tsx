import type { SolutionData } from "@/data/solutions";

interface Props {
  data: SolutionData;
}

export default function FeaturesSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px]"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a2e" }}
          >
            {data.featuresHeading}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4b5563" }}>
            {data.featuresSubheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {data.features.map((feature, i) => (
            <div
              key={feature.name}
              className="group relative p-5 rounded-2xl flex flex-col transition-smooth hover:scale-[1.02] cursor-default"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${feature.color}33`;
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.1), 0 0 20px ${feature.color}12`;
                el.style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(0,0,0,0.08)";
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                el.style.background = "#ffffff";
              }}
              data-ocid={`feature-card-${i}`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${feature.color}12`,
                }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>

              <h3
                className="text-base font-bold mb-3"
                style={{ color: "#1a1a2e" }}
              >
                {feature.name}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#4b5563" }}
              >
                {feature.description}
              </p>

              <a
                href={feature.link}
                className="inline-flex items-center gap-1 text-sm font-medium mt-4 transition-fast hover:gap-2"
                style={{ color: feature.color }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
