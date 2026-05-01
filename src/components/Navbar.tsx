import { Menu, X, ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const NAV_LINKS: NavItem[] = [
  {
    label: "Hire AI Developers",
    href: "/hire-ai-developer",
    children: [
      { label: "Hire AI Lovable Developer", href: "/hire-lovable" },
      { label: "Hire AI Emergent Developer", href: "/hire-emergent-ai" },
      { label: "Hire OpenAI Developer", href: "/hire-openai" },
      { label: "Hire Caffeine Developer", href: "/hire-caffeine-developer" },
      { label: "Hire Genw.AI Developer", href: "/hire-genwai-developer" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Let's Talk with AI Expert", href: "/ai-expert" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = -100;
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

  // ✅ FIXED NAVIGATION LOGIC
  const handleNavClick = (item: NavItem) => {
    setMobileOpen(false);

    if (!item.href) return;

    // scroll support if needed later (#section)
    if (item.href.startsWith("#")) {
      scrollToSection(item.href.replace("#", ""));
      return;
    }

    navigate(item.href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={
        scrolled
          ? {
              backgroundColor: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(15,23,42,0.10)",
              boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
            }
          : {
              backgroundColor: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 4px 18px rgba(15,23,42,0.07)",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex min-h-[76px] items-center justify-between py-2 sm:min-h-[88px] sm:py-3">
          
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center">
            <img
              src="/assets/images/tech2globe-logo.png"
              alt="logo"
              className="h-[50px] sm:h-[60px]"
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div className="relative group">
                    
                    {/* Parent: clickable + dropdown */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleNavClick(item)}
                        className="text-sm font-semibold text-gray-600 hover:text-green-600 transition"
                      >
                        {item.label}
                      </button>

                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </div>

                    {/* Hover buffer */}
                    <div className="absolute left-0 top-full h-3 w-64"></div>

                    {/* Dropdown */}
                    <div
                      className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-lg rounded-md py-2 z-50
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-150"
                    >
                      {item.children.map((child) => (
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
              onClick={() => navigate("/hire-us")}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition"
            >
              Hire Us
            </button>
          </div>

          {/* Mobile Toggle */}
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
              {item.children ? (
                <div className="flex flex-col">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-left text-sm font-semibold text-gray-900"
                  >
                    {item.label}
                  </button>

                  <div className="pl-3 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
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
              navigate("/hire-us");
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