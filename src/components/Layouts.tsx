import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   FOOTER CONTACT FORM
───────────────────────────────────────────────────────────── */

function FooterContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 px-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Ready to start your AI project? Fill in your details and we'll get
            back to you within 1 Business Day.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-500 text-sm">
                Thank you! We'll be in touch within 1 Business Day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-5">
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="border p-3 rounded-lg min-h-[180px]"
                />
              </div>

              <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */

const HIRE_SUBMENU = [
  "Hire AI Lovable Developer",
  "Hire AI Emergent Developer",
  "Hire Open AI Developer",
  "Hire Caffeini AI Developer",
  "Hire Genw.AI Developer",
];

const FOOTER_SERVICES = [
  "ChatGPT & OpenAI Integration",
  "Custom ML Models",
  "NLP Solutions",
  "Computer Vision",
  "AI Process Automation",
  "Generative AI Apps",
];

const FOOTER_SOLUTIONS = [
  "Hire AI Developer",
  "Custom AI Apps",
  "AI Strategy",
  "Data Analytics",
];

const FOOTER_COMPANY = ["About Us", "Our Team", "Portfolio", "Blog", "Careers"];

const FOOTER_COMPANY_LINKS: Record<string, string> = {
  "About Us": "/about-us",
  "Our Team": "/our-team",
  Portfolio: "/portfolio",
  Blog: "/blog",
  Careers: "/",
};

/* ─────────────────────────────────────────────────────────────
   DROPDOWN
───────────────────────────────────────────────────────────── */

function DropdownMenu({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-xl shadow-lg py-2 z-50">
      {HIRE_SUBMENU.map((item) => (
        <a
          key={item}
          href="/contact"
          className="block px-4 py-2 text-sm hover:bg-gray-100"
        >
          {item}
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   LAYOUT
───────────────────────────────────────────────────────────── */

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const prevPath = useRef(location.pathname);

  if (prevPath.current !== location.pathname) {
    prevPath.current = location.pathname;
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ───────── NAV ───────── */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="font-bold">
            Logo
          </Link>

          <nav className="hidden lg:flex gap-4">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button onClick={() => setDropdownOpen((v) => !v)}>
                Hire Engineering
              </button>
              <DropdownMenu open={dropdownOpen} />
            </div>

            <button onClick={() => navigate("/industries")}>
              Industries
            </button>

            <button onClick={() => navigate("/about-us")}>
              About
            </button>

            <button onClick={() => navigate("/our-team")}>
              Team
            </button>

            <button onClick={() => navigate("/portfolio")}>
              Portfolio
            </button>

            <button onClick={() => navigate("/blog")}>
              Blog
            </button>

            <Link to="/contact">Let’s Talk</Link>
          </nav>

          <button onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden p-4 border-t">
            <button onClick={() => navigate("/industries")}>
              Industries
            </button>

            <button onClick={() => navigate("/about-us")}>
              About
            </button>

            <button onClick={() => navigate("/our-team")}>
              Team
            </button>

            <button onClick={() => navigate("/portfolio")}>
              Portfolio
            </button>

            <button onClick={() => navigate("/blog")}>
              Blog
            </button>

            <Link to="/contact">Contact</Link>
          </div>
        )}
      </header>

      {/* ───────── CONTENT ───────── */}
      <main className="flex-1">{children}</main>

      {/* ───────── FOOTER FORM ───────── */}
      <FooterContactForm />

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-slate-900 text-white p-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <img src="/logo.png" className="h-10 mb-4" />
            <p className="text-gray-400">
              AI development company building smart solutions.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            {FOOTER_SERVICES.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>

          <div>
            <h4>Solutions</h4>
            {FOOTER_SOLUTIONS.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>

          <div>
            <h4>Company</h4>
            {FOOTER_COMPANY.map((s) => (
              <a key={s} href={FOOTER_COMPANY_LINKS[s]}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;