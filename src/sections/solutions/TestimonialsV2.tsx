import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

export interface FeaturedTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarColor: string;
  rating?: number;
}

export interface StackedTestimonial {
  quote: string;
  name: string;
  company: string;
  initials: string;
  avatarColor: string;
  rating?: number;
}

interface TestimonialsV2Props {
  featuredTestimonials: FeaturedTestimonial[];
  stackedTestimonials: StackedTestimonial[];
  title?: string;
}

const defaultFeatured: FeaturedTestimonial[] = [
  {
    quote:
      "Tech 2Globe AI transformed how our clinical operations team uses data. We went from weekly reports to live dashboards — reducing ICU readmission rates by 19% in the first quarter alone.",
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "Apex Health Systems",
    initials: "SC",
    avatarColor: "#4f8ef7",
    rating: 5,
  },
  {
    quote:
      "The natural language query feature alone saved our analysts 15 hours per week. Our CFO gets live P&L breakdowns without waiting for the data team. Genuinely game-changing platform.",
    name: "Marcus Webb",
    role: "VP of Finance",
    company: "Meridian Capital Group",
    initials: "MW",
    avatarColor: "#7c5cbf",
    rating: 5,
  },
  {
    quote:
      "We deployed 47 bots in 90 days and eliminated over 12,000 hours of manual data entry per month. The ROI dashboard made the business case effortless to communicate upward.",
    name: "Jennifer Park",
    role: "CFO",
    company: "Summit Financial Services",
    initials: "JP",
    avatarColor: "#10b981",
    rating: 5,
  },
];

const defaultStacked: StackedTestimonial[] = [
  {
    quote:
      "Best technical partner we've worked with in a decade of digital transformation.",
    name: "Robert Castillo",
    company: "Prism Financial Group",
    initials: "RC",
    avatarColor: "#f59e0b",
    rating: 5,
  },
  {
    quote:
      "Zero downtime migration. Our CIO called it the smoothest IT project in company history.",
    name: "Dr. Amanda Torres",
    company: "NorthStar Health Network",
    initials: "AT",
    avatarColor: "#06b6d4",
    rating: 5,
  },
  {
    quote:
      "Predictive models went live in 3 weeks. Our demand forecasting accuracy jumped by 34%.",
    name: "David Okonkwo",
    company: "Meridian Banking Group",
    initials: "DO",
    avatarColor: "#f43f5e",
    rating: 5,
  },
];

const STAR_IDS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_IDS.slice(0, count).map((id) => (
        <Star
          key={id}
          size={14}
          style={{ fill: "#4f8ef7", color: "#4f8ef7" }}
        />
      ))}
    </div>
  );
}

function AvatarCircle({
  initials,
  color,
  size = 40,
}: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold"
      style={{
        width: size,
        height: size,
        background: color,
        fontSize: size * 0.35,
        color: "#ffffff",
      }}
    >
      {initials}
    </div>
  );
}

export function TestimonialsV2({
  featuredTestimonials = defaultFeatured,
  stackedTestimonials = defaultStacked,
  title = "What Our Clients Say",
}: TestimonialsV2Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (featuredTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  const active = featuredTestimonials[activeIdx];

  return (
    <section
      className="relative py-[70px] max-md:py-[50px] overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      data-ocid="testimonials.section"
    >
      {/* Large faded watermark quote mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(280px, 30vw, 480px)",
          color: "rgba(79,142,247,0.04)",
          zIndex: 0,
          lineHeight: 1,
        }}
        aria-hidden
      >
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section title */}
        <h2
          className="font-display text-[42px] font-bold leading-tight text-center mb-14"
          style={{ color: "#1a1a2e" }}
        >
          {title}
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">
          {/* ── LEFT: featured rotating testimonial ── */}
          <div
            className="relative rounded-2xl p-8 lg:p-10 flex flex-col gap-6"
            style={{
              background: "#f8fafc",
              border: "1px solid rgba(79,142,247,0.12)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
            data-ocid="testimonials.featured_panel"
          >
            {/* Decorative quote icon */}
            <Quote
              size={52}
              strokeWidth={1.5}
              style={{ color: "#4f8ef7", opacity: 0.8 }}
            />

            {/* Quote text */}
            <div className="relative min-h-[140px]">
              <blockquote
                className="italic text-[20px] leading-relaxed font-body"
                style={{ color: "#374151" }}
                data-ocid="testimonials.quote"
              >
                "{active.quote}"
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <AvatarCircle
                initials={active.initials}
                color={active.avatarColor}
                size={48}
              />
              <div className="min-w-0">
                <p
                  className="font-display font-bold text-[14px] leading-snug"
                  style={{ color: "#1a1a2e" }}
                >
                  {active.name}
                </p>
                <p
                  className="text-[13px] mt-0.5 truncate"
                  style={{ color: "#6b7280" }}
                >
                  {active.role}, {active.company}
                </p>
                <div className="mt-1.5">
                  <StarRating count={active.rating ?? 5} />
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-2" data-ocid="testimonials.nav_dots">
              {featuredTestimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.name}
                  data-ocid={`testimonials.dot.${i + 1}`}
                  onClick={() => setActiveIdx(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activeIdx ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === activeIdx ? "#4f8ef7" : "rgba(0,0,0,0.15)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: stacked static testimonial cards ── */}
          <div
            className="flex flex-col gap-4"
            data-ocid="testimonials.stacked_list"
          >
            {stackedTestimonials.map((t, i) => (
              <div
                key={t.name}
                data-ocid={`testimonials.stacked_item.${i + 1}`}
                className="rounded-xl p-5 flex flex-col gap-3 transition-smooth hover:scale-[1.015]"
                style={{
                  background: "#f8fafc",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex items-center gap-3">
                  <AvatarCircle
                    initials={t.initials}
                    color={t.avatarColor}
                    size={36}
                  />
                  <div className="min-w-0">
                    <p
                      className="font-display font-bold text-[13px] leading-snug truncate"
                      style={{ color: "#1a1a2e" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[12px] truncate"
                      style={{ color: "#6b7280" }}
                    >
                      {t.company}
                    </p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <StarRating count={t.rating ?? 5} />
                  </div>
                </div>
                <p
                  className="text-[13px] leading-relaxed line-clamp-2"
                  style={{ color: "#6b7280" }}
                >
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
