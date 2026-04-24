import { Menu, X, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type NavItem = {
  label: string;
  type: "scroll" | "route" | "dropdown";
  href?: string;
  children?: NavItem[];
};

const NAV_LINKS: NavItem[] = [
  {
    label: "Hire AI Engineer",
    type: "dropdown",
    children: [
      { label: "Hire AI Lovable Developer", type: "scroll", href: "hire-ai-lovable-developer" },
      { label: "Hire AI Emergent Developer", type: "scroll", href: "hire-ai-emergent-developer" },
      { label: "Hire OpenAI Developer", type: "scroll", href: "hire-openai-developer" },
      { label: "Hire Caffeine Developer", type: "route", href: "/hire-caffeine-developer" },
      { label: "Hire Genw.AI Developer", type: "scroll", href: "hire-genwai-developer" },
    ],
  },
  { label: "Hire AI Developers", type: "route", href: "/hire-ai-developers" },
  { label: "Industries", type: "route", href: "/industries" },
  { label: "Portfolio", type: "route", href: "/portfolio" },
  { label: "About Us", type: "route", href: "/about" },
  { label: "Let's Talk with AI Expert", type: "route", href: "/ai-expert" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = -80; // navbar height offset
    const top = el.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);

    if (!item.href) return;

    if (item.type === "route") {
      navigate(item.href);
    } else if (item.type === "scroll") {
      scrollToSection(item.href);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={
        scrolled
          ? {
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0,196,154,0.18)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
          }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img
              src="/assets/images/tech2globe-logo.png"
              alt="logo"
              className="h-8 sm:h-10"
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="relative">

                {item.type === "dropdown" ? (
                  <div className="relative group">

                    <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-green-600 transition">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 top-full h-3 w-64"></div>

                    <div
                      className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-lg rounded-md py-2 z-50
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                 transition-all duration-150"
                    >
                      {item.children?.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-semibold text-gray-600 hover:text-green-600 transition"
                  >
                    {item.label}
                  </button>
                )}

              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => navigate("/ai-expert")}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition"
            >
              Hire Us
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-white"
        style={{
          maxHeight: mobileOpen ? "500px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="px-4 py-3 flex flex-col gap-4">

          {NAV_LINKS.map((item) => (
            <div key={item.label}>
              {item.type === "dropdown" ? (
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </span>

                  <div className="pl-3 mt-2 flex flex-col gap-2">
                    {item.children?.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNavClick(child)}
                        className="text-left text-sm text-gray-700"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-left text-sm font-medium text-gray-700"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              setMobileOpen(false);
              navigate("/ai-expert");
            }}
            className="bg-purple-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition"
          >
            Hire Us
          </button>

        </div>
      </div>
    </nav>
  );
}