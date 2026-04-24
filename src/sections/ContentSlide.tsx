import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface CardData {
  icon: string;
  heading: string;
  body: string;
  accentStart: string;
  accentEnd: string;
}

const cards: CardData[] = [
  {
    icon: "🚀",
    heading: "Startup MVP",
    body: "Launch your idea quickly",
    accentStart: "#00f5c8",
    accentEnd: "#00b89c",
  },
  {
    icon: "🏢",
    heading: "Enterprise Solutions",
    body: "Custom applications that scale",
    accentStart: "#7c3aed",
    accentEnd: "#00f5c8",
  },
  {
    icon: "⚙️",
    heading: "Internal Tools",
    body: "Streamline your operations",
    accentStart: "#00f5c8",
    accentEnd: "#7c3aed",
  },
];

export default function ContentSlide() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, childVisible] = useStaggeredScrollAnimation(cards.length, {
    threshold: 0.05,
  });

  return (
    <section
      id="content-slide"
      style={{ backgroundColor: "#f8faff" }}
      className="pt-16 pb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-8"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
            style={{
              background: "linear-gradient(90deg, #00f5c8, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Build the Software & MVP Together
          </h2>
          <p
            className="font-space-grotesk text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#475569" }}
          >
            Whether you're launching a startup MVP, developing a custom
            enterprise solution, or creating an internal product, Tech2Globe AI
            is your trusted AI Development Company.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <div
              key={card.heading}
              data-ocid={`content-slide-card-${card.heading.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                opacity: childVisible[index] ? 1 : 0,
                transform: childVisible[index]
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.97)",
                transition: `opacity 0.65s ease ${index * 0.15}s, transform 0.65s ease ${index * 0.15}s`,
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(0,245,200,0.3)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 6px 32px rgba(124,58,237,0.10), 0 1.5px 6px rgba(0,245,200,0.08)",
              }}
              className="flex flex-col group hover:shadow-xl"
            >
              {/* Top accent bar */}
              <div
                style={{
                  height: "4px",
                  background: `linear-gradient(90deg, ${card.accentStart}, ${card.accentEnd})`,
                  flexShrink: 0,
                }}
              />

              <div className="p-8 flex flex-col items-center text-center flex-1 gap-5">
                {/* Icon */}
                <div
                  className="text-4xl w-16 h-16 flex items-center justify-center rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${card.accentStart}18, ${card.accentEnd}2a)`,
                    border: `1px solid ${card.accentStart}40`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                {/* Heading */}
                <h3
                  className="font-orbitron font-bold text-lg sm:text-xl"
                  style={{
                    background: `linear-gradient(90deg, ${card.accentStart}, ${card.accentEnd})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {card.heading}
                </h3>

                {/* Body */}
                <p
                  className="font-space-grotesk text-base leading-relaxed"
                  style={{ color: "#334155" }}
                >
                  {card.body}
                </p>

                {/* Decorative bottom accent dot row */}
                <div className="flex gap-1.5 mt-auto pt-2">
                  {(["start", "mid", "end"] as const).map((pos) => (
                    <span
                      key={pos}
                      className="block rounded-full"
                      style={{
                        width: pos === "mid" ? "20px" : "8px",
                        height: "4px",
                        background:
                          pos === "mid" ? card.accentEnd : card.accentStart,
                        opacity: 0.6,
                        transition: "width 0.3s ease",
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
