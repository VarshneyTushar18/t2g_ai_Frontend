import type { SolutionData } from "@/data/solutions";

interface Props {
  data: SolutionData;
}

export default function ProblemSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px] relative"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-14">
          <div className="inline-block">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a2e" }}
            >
              {data.problemHeading}
            </h2>
            <div
              className="h-0.5 w-2/3 rounded-full"
              style={{ background: "linear-gradient(90deg, #4f8ef7, #7c5cbf)" }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Problem paragraph */}
          <div>
            <p
              className="text-lg font-semibold leading-relaxed mb-6"
              style={{ color: "#1a1a2e" }}
            >
              {data.problemParagraph1}
            </p>
            <p className="leading-relaxed" style={{ color: "#4b5563" }}>
              {data.problemParagraph2}
            </p>
          </div>

          {/* Right — Pain-point cards */}
          <div className="space-y-4">
            {data.painPoints.map((point, i) => (
              <div
                key={point.title}
                className="flex items-start gap-4 p-5 rounded-xl transition-smooth hover:scale-[1.02]"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${point.color}22`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                data-ocid={`pain-point-card-${i}`}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${point.color}12` }}
                >
                  <point.icon size={22} style={{ color: point.color }} />
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: "#1a1a2e" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#4b5563" }}>
                    {point.description}
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
