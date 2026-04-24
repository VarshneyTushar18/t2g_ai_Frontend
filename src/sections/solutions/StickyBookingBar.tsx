import { PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StickyBookingBarProps {
  /** Element ref whose exit from view triggers the bar to appear. Defaults to detecting 300px of scroll. */
  heroRef?: React.RefObject<Element>;
}

export function StickyBookingBar({ heroRef }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (heroRef?.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setVisible(!entry.isIntersecting);
        },
        { threshold: 0.05 },
      );
      observerRef.current.observe(heroRef.current);
    } else {
      const handleScroll = () => {
        setVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [heroRef]);

  return (
    <div
      data-ocid="sticky-bar.section"
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 48,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        transform: visible ? "translateY(0)" : "translateY(-56px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition:
          "transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Left: tagline */}
      <p
        data-ocid="sticky-bar.label"
        className="text-sm font-body hidden sm:block"
        style={{ color: "#6b7280" }}
      >
        Ready to{" "}
        <span style={{ color: "#1a1a2e" }} className="font-medium">
          transform your business?
        </span>
      </p>

      {/* Right: CTA button */}
      <button
        data-ocid="sticky-bar.cta_button"
        type="button"
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-semibold
                   transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
          color: "#fff",
          boxShadow: "0 2px 12px rgba(79,142,247,0.3)",
          whiteSpace: "nowrap",
        }}
      >
        <PhoneCall size={13} strokeWidth={2.2} />
        Book a Free Call
        <span aria-hidden="true" style={{ fontSize: "0.9em" }}>
          →
        </span>
      </button>
    </div>
  );
}
