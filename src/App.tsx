import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ArrowUp } from "lucide-react";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import AIPlatforms from "./sections/AIPlatforms";
import Contact from "./sections/Contact";
import ContentSlide from "./sections/ContentSlide";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import WhatWeDo from "./sections/WhatWeDo";
import WhyChooseUs from "./sections/WhyChooseUs";
import IndustriesPage from "./sections/IndustriesPage";
import AboutUsPage from "./sections/AboutUsPage";
import BlogPage from "./sections/BlogPage";
import OurTeamPage from "./sections/OurTeamPage";

// 👇 ADD THIS (your new page)
import Solutions from "./sections/solutions/index";
import SolutionDetails from "./sections/solutionDetails";
import ContactPage from "./sections/solutions/contact";
import PortfolioPage from "./sections/solutions/PortfolioPage";
import { HireLovablePage } from "./sections/solutions/HireLovablePage";
import { HireOpenAIPage } from "./sections/solutions/HireOpenAIPage";
import HireCaffeineDeveloperPage from "./sections/HireCaffeineDeveloperPage";
import { HireEmergentAIPage } from "./sections/HireEmergentAIPage";
import { HireUsPage } from "./sections/HireUsPage";
import HireAIDevelopersPage from "./sections/HireAIDevelopersPage";


function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AIPlatforms />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ContentSlide />
      <Contact />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
        boxShadow: "0 10px 24px rgba(79,142,247,0.28)",
      }}
    >
      <ArrowUp size={20} strokeWidth={2.25} />
    </button>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen font-space-grotesk overflow-x-hidden"
      style={{ backgroundColor: "#f8faff" }}
    >
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<HomePage />} />

          {/* HIRE AI DEVELOPERS PAGE */}
          <Route
            path="/hire-ai-developers"
            element={<Solutions />}
          />

          <Route path="/solutions/:slug" element={<SolutionDetails />} />
          <Route path="/ai-expert" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/hire-caffeine-developer" element={<HireCaffeineDeveloperPage />} />
          <Route path="/hire-lovable" element={<HireLovablePage />} />
          <Route path="/hire-openai" element={<HireOpenAIPage />} />
          <Route path="/hire-emergent-ai" element={<HireEmergentAIPage />} />
          <Route path="/hire-us" element={<HireUsPage />} />
          <Route path="/hire-ai-developer" element={<HireAIDevelopersPage />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
