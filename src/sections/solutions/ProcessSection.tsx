import type { SolutionData } from "@/data/solutions";

interface Props {
  data: SolutionData;
}

export default function ProcessSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px] overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a2e" }}
          >
            {data.processHeading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#4b5563" }}>
            {data.processSubheading}
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-[52px] left-[10%] right-[10%] h-px"
            style={{ background: "rgba(0,0,0,0.1)" }}
          />

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${data.steps.length}, 1fr)` }}
          >
            {data.steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
                data-ocid={`process-step-${i}`}
              >
                {/* Icon above number */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(79,142,247,0.08)" }}
                >
                  <step.icon size={20} style={{ color: "#4f8ef7" }} />
                </div>

                {/* Number badge */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white z-10 relative mb-4"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                    boxShadow: "0 4px 16px rgba(79,142,247,0.35)",
                  }}
                >
                  {i + 1}
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#1a1a2e" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4b5563" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">
          {/* Dotted line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{
              background:
                "repeating-linear-gradient(to bottom, rgba(79,142,247,0.4) 0px, rgba(79,142,247,0.4) 6px, transparent 6px, transparent 12px)",
            }}
          />

          <div className="space-y-6 sm:space-y-8">
            {data.steps.map((step, i) => (
              <div
                key={step.number}
                className="relative"
                data-ocid={`process-step-mobile-${i}`}
              >
                {/* Circle bullet */}
                <div
                  className="absolute -left-[26px] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                  }}
                >
                  {i + 1}
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon size={18} style={{ color: "#4f8ef7" }} />
                    <h3
                      className="text-base font-bold"
                      style={{ color: "#1a1a2e" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4b5563" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
