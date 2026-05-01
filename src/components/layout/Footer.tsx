import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Hire Product Engineering" },
  { label: "Hire AI Developers", href: "/hire-ai-developers" },
  { label: "Industries" },
  { label: "Use cases" },
  { label: "Let's Talk with AI Expert" },
  { label: "Contact Us", href: "/contact" },
];

function NavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const baseStyle: React.CSSProperties = {
    color: "#374151",
  };

  const sharedProps = {
    className:
      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap",
    style: baseStyle,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#7c3aed";
      e.currentTarget.style.background = "rgba(124,58,237,0.06)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.color = "#374151";
      e.currentTarget.style.background = "transparent";
    },
    onClick,
  };

  if (href) {
    return (
      <Link to={href} {...sharedProps}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {label}
    </button>
  );
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
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMobile}>
          <img src="/assets/tech2globe-logo.png" className="h-12" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem
                label={link.label}
                href={link.href}
                onClick={closeMobile}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden lg:block bg-purple-600 text-white px-5 py-2 rounded-lg">
          Hire Now
        </button>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white p-4">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              label={link.label}
              href={link.href}
              onClick={closeMobile}
            />
          ))}
        </div>
      )}
    </header>
  );
}
