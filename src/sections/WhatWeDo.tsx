import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhatWeDo() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const [labelRef, labelVisible] = useScrollAnimation({ threshold: 0.15 });
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.15 });
  const [p1Ref, p1Visible] = useScrollAnimation({ threshold: 0.15 });
  const [p2Ref, p2Visible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative py-5 sm:py-6 lg:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#f8faff" }}
    >
      {/* Background glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(124, 58, 237, 0.07) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0, 196, 154, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Glassmorphism panel */}
        <div className="glassmorphism-dark rounded-2xl text-center">
          {/* Section label */}
          <div
            ref={labelRef}
            className={`scroll-hidden ${labelVisible ? "scroll-visible" : ""} flex justify-center mb-2`}
          >
          </div>

          {/* Heading */}
          <div
            ref={headingRef}
            className={`scroll-hidden ${headingVisible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2
              className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-2"
              style={{ color: "#0f172a" }}
            >
              The Future of Development is Here —{" "}
              <span className="gradient-text">And We Lead It</span>
            </h2>
          </div>

          {/* Divider line */}
          <div
            className="w-16 h-0.5 mx-auto mb-3"
            style={{ background: "linear-gradient(90deg, #00c49a, #7c3aed)" }}
          />

          {/* Paragraph 1 */}
          <div
            ref={p1Ref}
            className={`scroll-hidden ${p1Visible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p
              className="font-space-grotesk text-sm sm:text-base lg:text-lg leading-relaxed mb-3 max-w-3xl mx-auto"
              style={{ color: "#475569" }}
            >
              Forget months of development cycles. At Tech2Globe AI, our
              certified AI Engineers use the world's most powerful AI-native
              development platforms to build your dream product — fast, smart,
              and scalable.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div
            ref={p2Ref}
            className={`scroll-hidden ${p2Visible ? "scroll-visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <p
              className="font-space-grotesk text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#475569" }}
            >
              Whether you need a SaaS dashboard, a mobile app, an e-commerce
              platform, or a custom enterprise solution — our AI Prompt
              Engineering team delivers it with precision-crafted prompts,
              intelligent workflows, and zero compromise on quality.
            </p>
          </div>

          {/* Bottom accent tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              sectionVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5 mt-4"
          >
            {["Fast", "Smart", "Scalable", "Precision AI"].map((tag) => (
              <span
                key={tag}
                className="font-orbitron text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0, 196, 154, 0.08)",
                  border: "1px solid rgba(0, 196, 154, 0.25)",
                  color: "#007a64",
                  letterSpacing: "0.1em",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
