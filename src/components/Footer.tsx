import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const FOOTER_SERVICES = [
  "Hire AI Lovable Developer",
  "Hire AI Emergent Developer",
  "Hire OpenAI Developer",
  "Hire Caffeine Developer",
  "Hire Genw.AI Developer",
];

const FOOTER_SOLUTIONS = [
  "Hire AI Developer",
  "Hire Us",
];

const FOOTER_COMPANY = ["About Us", "Our Team", "Portfolio", "Blog", "Careers"];

const FOOTER_COMPANY_LINKS: Record<string, string> = {
  "About Us": "/about",
  "Our Team": "/our-team",
  Portfolio: "/portfolio",
  Blog: "/blog",
  Careers: "/",
};

export default function Footer() {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src="/assets/tech2globe-logo.png"
                alt="Tech2Globe"
                className="h-12 mb-5 brightness-0 invert"
              />

              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Building intelligent AI solutions for forward-thinking businesses.
                Partner with us to transform your vision into reality.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    link: "https://linkedin.com",
                    color: "hover:text-blue-500",
                  },
                  {
                    icon: Twitter,
                    link: "https://twitter.com",
                    color: "hover:text-sky-400",
                  },
                  {
                    icon: Facebook,
                    link: "https://facebook.com",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: Instagram,
                    link: "https://instagram.com",
                    color: "hover:text-pink-500",
                  },
                  {
                    icon: Youtube,
                    link: "https://youtube.com",
                    color: "hover:text-red-500",
                  },
                ].map(({ icon: Icon, link, color }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Icon
                      className={`w-5 h-5 text-white/70 transition-all duration-300 ${color}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Columns */}
            {[
              { title: "Hire AI Engineer", data: FOOTER_SERVICES },
              { title: "Solutions", data: FOOTER_SOLUTIONS },
              { title: "Company", data: FOOTER_COMPANY },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.data.map((item) => (
                    <li key={item}>
                      <Link
                        to={
                          section.title === "Company"
                            ? FOOTER_COMPANY_LINKS[item] ?? "/"
                            : "/"
                        }
                        className="text-sm text-white/60 hover:text-white relative group transition"
                      >
                        {item}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Tech2Globe. All rights reserved. Built smarter with {" "}
            <a
              href={`https://tech2globe.com?utm_source=tech2globe-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                hostname
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              AI
            </a>
          </p>

          <div className="flex gap-5 text-xs text-white/40">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  to="/"
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}