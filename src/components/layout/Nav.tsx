import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Hire Product Engineering", type: "scroll", href: "hire-product-engineering" },
  { label: "Hire AI Developers", type: "route", href: "/hire-ai-developers" },
  { label: "Industries", type: "scroll", href: "industries" },
  { label: "Use cases", type: "scroll", href: "use-cases" },
  { label: "Let's Talk with AI Expert", type: "scroll", href: "contact" },
  { label: "Contact Us", type: "route", href: "/contact" },
];

const navLinkStyle: React.CSSProperties = { color: "#374151" };

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function NavItem({
  label,
  href,
  type,
  onClick,
}: {
  label: string;
  href?: string;
  type?: "route" | "scroll";
  onClick?: () => void;
}) {
  const navigate = useNavigate();

  const sharedProps = {
    className:
      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap",
    style: navLinkStyle,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#7c3aed";
      e.currentTarget.style.background = "rgba(124,58,237,0.06)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#374151";
      e.currentTarget.style.background = "transparent";
    },
    onClick: () => {
      if (type === "route" && href) {
        navigate(href);
      } else if (href) {
        scrollToSection(href);
      }
      onClick?.();
    },
  };

  return <button {...sharedProps}>{label}</button>;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[76px] py-2 sm:min-h-[88px] sm:py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          onClick={closeMobile}
        >
          <img
            src="/assets/tech2globe-logo.png"
            alt="Tech2Globe"
            className="h-[60px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem
                label={link.label}
                href={link.href}
                type={link.type}
              />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/hire-ai-developers"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: "#7c3aed" }}
          >
            Hire Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                label={link.label}
                href={link.href}
                type={link.type}
                onClick={closeMobile}
              />
            ))}

            <Link
              to="/hire-ai-developers"
              onClick={closeMobile}
              className="block text-center mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ background: "#7c3aed" }}
            >
              Hire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
