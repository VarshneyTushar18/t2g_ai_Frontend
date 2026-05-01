import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      className="herohome relative min-h-[clamp(460px,72vh,600px)] flex flex-col items-center justify-center overflow-hidden pb-4"
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-2 pt-8 sm:pt-12 pb-4 sm:pb-6 w-full">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          data-ocid="hero-badge"
        >
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full"
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
            style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)" }}
          >
            <span className="gradient-text-hero block">
              Your Idea. Built by AI.
            </span>
            <span className="gradient-text-hero block mt-1">
              Delivered in Minutes.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="font-space-grotesk max-w-3xl text-sm sm:text-base md:text-lg leading-snug px-2"
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
          className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full px-2"
          data-ocid="hero-cta-group"
        >
          <button
            type="button"
            onClick={() => navigate("/ai-expert")}
            className="relative overflow-hidden font-orbitron text-xs sm:text-sm font-bold tracking-wider 
  px-6 sm:px-8 py-2.5 rounded-xl w-full sm:w-auto 
  border border-cyan-400/40 
  bg-gradient-to-r from-[#001f1a] to-[#003d33] 
  text-cyan-300 
  transition-all duration-300 ease-out
  hover:text-white hover:border-cyan-300
  hover:shadow-[0_0_20px_rgba(0,196,154,0.6)]
  hover:-translate-y-1
  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c49a]"
          >
            Hire an AI Engineer Now
          </button>

          <button
            type="button"
            onClick={() => scrollTo("process")}
            className="relative overflow-hidden font-orbitron text-xs sm:text-sm font-bold tracking-wider 
  px-6 sm:px-8 py-2.5 rounded-xl w-full sm:w-auto 
  border border-cyan-400/30 
  bg-transparent 
  text-cyan-400 
  transition-all duration-300 ease-out
  hover:bg-[#00c49a]/10 hover:text-black hover:border-cyan-300
  hover:shadow-[0_0_15px_rgba(0,196,154,0.5)]
  hover:-translate-y-1
  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c49a]"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-0 gap-y-1.5 w-full"
          data-ocid="hero-trust-row"
          aria-label="Trust indicators"
        >
          {TRUST_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center pt-5">
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
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(240,244,255,0.95))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
