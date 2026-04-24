import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const TRUST_ITEMS = [
  "500+ Global Clients",
  "Delivery in Minutes to Hours",
  "AI Prompt Engineering Experts",
  "NDA Protected",
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const blobRef1 = useRef<HTMLDivElement | null>(null);
  const blobRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const xFrac = e.clientX / window.innerWidth - 0.5;
      const yFrac = e.clientY / window.innerHeight - 0.5;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${xFrac * 22}px, ${yFrac * 22}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${xFrac * 14}px, ${yFrac * 14}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f0f4ff" }}
      aria-label="Hero section"
    >
      {/* Background blobs */}
      <div
        ref={blobRef1}
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          top: "-8%",
          left: "-5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        ref={blobRef2}
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          top: "-5%",
          right: "-5%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,196,154,0.16) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "12%",
          left: "28%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,154,127,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,154,127,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 pt-20 sm:pt-24 pb-10 sm:pb-14 lg:pb-16 w-full">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          data-ocid="hero-badge"
        >
          <div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            style={{
              background: "rgba(0,0,0,0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(0,196,154,0.30)",
              boxShadow: "0 0 15px rgba(0,196,154,0.10)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 pulse-dot"
              style={{
                backgroundColor: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.8)",
              }}
              aria-hidden="true"
            />
            <span
              className="font-space-grotesk text-xs font-medium tracking-wide"
              style={{ color: "#334155" }}
            >
              AI-Powered Engineering · Delivering in Minutes
            </span>
          </div>
        </motion.div>

        {/* H1 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          data-ocid="hero-headline"
          className="w-full"
        >
          <h1
            className="font-orbitron font-black leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 6vw, 5rem)" }}
          >
            <span className="gradient-text-hero block">
              Your Idea. Built by AI.
            </span>
            <span className="gradient-text-hero block mt-1 sm:mt-2">
              Delivered in Minutes.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="font-space-grotesk max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed px-2"
          style={{ color: "#475569" }}
          data-ocid="hero-subheadline"
        >
          Hire Expert AI Engineers specializing in{" "}
          <span style={{ color: "#007a64", fontWeight: 600 }}>
            Lovable, Emergent, Caffeine, GenW.AI, Horizon, Framer AI &amp;
            OpenCode AI
          </span>{" "}
          — we turn your vision into a fully functional app, website, or
          software at record-breaking speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full px-2"
          data-ocid="hero-cta-group"
        >
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="glow-btn-purple font-orbitron text-xs sm:text-sm font-bold tracking-wider text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            data-ocid="hero-cta-primary"
          >
            Hire an AI Engineer Now
          </button>
          <button
            type="button"
            onClick={() => scrollTo("process")}
            className="glow-btn-cyan font-orbitron text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c49a]"
            data-ocid="hero-cta-secondary"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 mt-1 w-full"
          data-ocid="hero-trust-row"
          aria-label="Trust indicators"
        >
          {TRUST_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <span
                  className="w-1 h-1 rounded-full mx-3 sm:mx-4 flex-shrink-0"
                  style={{
                    backgroundColor: "#00c49a",
                    boxShadow: "0 0 5px #00c49a",
                  }}
                  aria-hidden="true"
                />
              )}
              <span
                className="font-space-grotesk text-xs sm:text-sm font-medium"
                style={{ color: "#475569" }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(240,244,255,0.95))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
