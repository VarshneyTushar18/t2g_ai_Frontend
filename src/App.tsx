import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

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
import HireCaffeineDeveloperPage from "./sections/HireCaffeineDeveloperPage";

// 👇 ADD THIS (your new page)
import Solutions from "./sections/solutions/index";
import SolutionDetails from "./sections/solutionDetails";
import ContactPage from "./sections/solutions/contact";
import PortfolioPage from "./sections/solutions/PortfolioPage";

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

export default function App() {
  return (
    <div
      className="min-h-screen font-space-grotesk overflow-x-hidden"
      style={{ backgroundColor: "#f8faff" }}
    >
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

        </Routes>
      </main>

      <Footer />
    </div>
  );
}