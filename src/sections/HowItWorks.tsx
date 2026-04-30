import { useEffect, useRef, useState } from "react";
import {
  useScrollAnimation,
  useStaggeredScrollAnimation,
} from "../hooks/useScrollAnimation";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Fill our form with your project idea — app, website, SaaS, or automation. No tech jargon needed.",
  },
  {
    number: "02",
    title: "AI Engineer Assigned",
    description:
      "A specialist matched to your tool and platform need is assigned within hours.",
  },
  {
    number: "03",
    title: "Prompt Engineering & Build",
    description:
      "We craft precision prompts and develop your product using the right AI platform for your need.",
  },
  {
    number: "04",
    title: "Review & Revise",
    description:
      "You review the output. We refine until every detail meets your expectation.",
  },
  {
    number: "05",
    title: "Delivery & Handoff",
    description:
      "Live product + source files + documentation delivered. You own everything.",
  },
];

function useTimelineLineAnimation(isVisible: boolean, stepCount: number) {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!isVisible || !lineRef.current) return;
    const parent = lineRef.current.parentElement;
    if (!parent) return;
    const totalHeight = parent.offsetHeight;
    let frame: number;
    let start: number | null = null;
    const duration = stepCount * 300;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setLineHeight(Math.round(totalHeight * progress));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    const delay = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [isVisible, stepCount]);

  return { lineRef, lineHeight };
}

export default function HowItWorks() {
  const [headingRef, headingVisible] = useScrollAnimation<HTMLDivElement>();
  const [timelineRef, childVisible, containerVisible] =
    useStaggeredScrollAnimation(steps.length, {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px",
    });
  const { lineRef, lineHeight } = useTimelineLineAnimation(
    containerVisible,
    steps.length,
  );

  return (
    <section
      id="process"
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f8faff" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Section header */}
        <div
          ref={headingRef}
          className={`text-center mb-8 scroll-hidden ${headingVisible ? "scroll-visible" : ""}`}
        >
      
          <h2
            id="process-heading"
            className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 leading-tight"
            style={{ color: "#0f172a" }}
          >
            From Idea to <span className="gradient-text">Live Product</span>
          </h2>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative"
          data-ocid="process-timeline"
        >
          {/* Animated vertical line */}
          <div
            className="absolute left-7 top-0 w-px"
            style={{
              height: `${lineHeight}px`,
              background:
                "linear-gradient(to bottom, #00c49a, rgba(0, 196, 154, 0.2))",
              boxShadow: "0 0 8px rgba(0, 196, 154, 0.5)",
              transition: "height 0.1s linear",
            }}
            aria-hidden="true"
          />

          {/* Static faded line track */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: "rgba(0, 196, 154, 0.12)" }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <StepItem
                key={step.number}
                step={step}
                isVisible={childVisible[index] ?? false}
                delay={index * 120}
                isLast={index === steps.length - 1}
                lineRef={index === 0 ? lineRef : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepItemProps {
  step: Step;
  isVisible: boolean;
  delay: number;
  isLast: boolean;
  lineRef?: React.MutableRefObject<HTMLDivElement | null>;
}

function StepItem({ step, isVisible, delay, isLast }: StepItemProps) {
  return (
    <article
      className={`relative flex gap-6 items-start scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        paddingBottom: isLast ? "0" : "0",
      }}
      data-ocid={`process-step-${step.number}`}
    >
      {/* Number circle */}
      <div
        className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-orbitron font-bold text-sm text-white"
        style={{
          backgroundColor: "#7c3aed",
          border: "2px solid #00c49a",
          boxShadow:
            "0 0 18px rgba(0, 196, 154, 0.45), 0 0 36px rgba(0, 196, 154, 0.15)",
        }}
        aria-hidden="true"
      >
        {step.number}
      </div>

      {/* Content */}
      <div className="pt-3 min-w-0 flex-1">
        <h3
          className="font-orbitron text-lg font-bold mb-2 leading-snug"
          style={{ color: "#0f172a" }}
        >
          {step.title}
        </h3>
        <p
          className="font-space-grotesk text-sm leading-relaxed"
          style={{ color: "#475569" }}
        >
          {step.description}
        </p>
      </div>
    </article>
  );
}
