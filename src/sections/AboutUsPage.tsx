import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Link } from "@tanstack/react-router";
import { Link } from "react-router-dom";
import {
  Award,
  BarChart2,
  Bot,
  Building2,
  Cloud,
  Code2,
  Globe,
  Lightbulb,
  MapPin,
  Phone,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { label: "Years of Excellence", value: "14+" },
  { label: "Industry Verticals", value: "10+" },
  { label: "Seasoned Professionals", value: "300+" },
  { label: "Successful Projects", value: "7000+" },
  { label: "Customer Satisfaction", value: "99%" },
];

const SERVICES = [
  { icon: TrendingUp, label: "Online Marketing" },
  { icon: ShoppingCart, label: "Ecommerce" },
  { icon: Lightbulb, label: "IT Consulting" },
  { icon: Users, label: "BPO/KPO" },
  { icon: BarChart2, label: "Data Management" },
  { icon: Star, label: "Graphic and Video Services" },
  { icon: Code2, label: "App Development" },
  { icon: Wrench, label: "Software Development" },
  { icon: Globe, label: "Digital Marketing" },
  { icon: Award, label: "Amazon Consulting" },
  { icon: Zap, label: "IoT Data Support" },
  { icon: Building2, label: "Custom Web Development" },
  { icon: Cloud, label: "Cloud-based Solutions" },
  { icon: Bot, label: "AI & Blockchain" },
];

const MILESTONES = [
  { value: "15+", label: "Years shaping digital futures" },
  { value: "7,000+", label: "Projects delivered globally" },
  { value: "300+", label: "Professionals collaborating daily" },
  { value: "99%", label: "Client satisfaction record" },
  { value: "2011", label: "Founded by passionate marketers & developers" },
  {
    value: "25+",
    label: "Countries including USA, Canada, UAE, Singapore, Germany",
  },
];

const OFFICES = [
  {
    city: "NEW YORK",
    address: "1538, Old Country Road, Plainview, New York, 11803",
    phone: "+1-516-858-5840",
    label: "Sales",
  },
  {
    city: "MISSISSAUGA, CANADA",
    address: "975 Mid-Way Blvd UNIT 12, Mississauga, ON L5T 2C6, Canada",
    phone: "+1-516-858-4836",
    label: "Sales",
  },
  {
    city: "PORT ALBERNI, CANADA",
    address: "3836 Keeha Dr Port Alberni, BC, V9Y8C8, Canada",
    phone: "+1-778-382-9628",
    label: "Sales",
  },
  {
    city: "INDIA (Noida)",
    address: "701, 7th Floor, Noida, Uttar Pradesh",
    phone: null,
    label: null,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function AboutUsPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        data-ocid="about.hero.section"
      >
        {/* Subtle background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.52 0.22 264 / 0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div {...fadeUp(0)}>
            <Badge className="mb-5 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700">
              Empowering Your Online Success
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6"
            {...fadeUp(0.08)}
          >
            Your Partner in IT Excellence and Marketing Mastery
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            {...fadeUp(0.16)}
          >
            Reliability, actuality, and results are all associated with the name
            Tech2Globe. We are a group of eminent specialists who are constantly
            looking for new challenges and are motivated to provide cutting-edge
            services to our clients.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
            {...fadeUp(0.24)}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center py-5 px-4 rounded-2xl bg-white border border-indigo-100 shadow-card hover-lift"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.28 + i * 0.07 }}
              >
                <span className="text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground text-center leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: COMPANY OVERVIEW ─────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-indigo-50/40"
        data-ocid="about.overview.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
            {...fadeUp(0)}
          >
            Tech2Globe, A Platform To Convert Your Business Dreams Into Reality
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
            {...fadeUp(0.1)}
          >
            Tech2Globe Web Solutions is a renowned solution-provider that was
            established in 2014 with superior quality of our services, we have
            managed to carve out a coveted position for ourselves in this
            fiercely competitive sector. We provide you with real, reasonable
            services and an unwavering customer-centric approach thanks to the
            top talent in the industry.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 3: OUR JOURNEY ──────────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-white"
        data-ocid="about.journey.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Journey: From Vision to Reality
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The story of Tech2Globe began with a compact team of marketing
                and web developing enthusiasts and their commitment to optimize
                technology for transforming businesses in the digital spectrum.
                We set out on a quest to close the gap between businesses and
                their objectives for going digital. Furthermore, We have
                developed into a powerful force over the years, serving clients
                from a variety of industries and assisting them in thriving in
                the always changing digital ecosystem.
              </p>
            </motion.div>
            {/* Visual accent */}
            <motion.div
              className="flex items-center justify-center"
              {...fadeUp(0.12)}
            >
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 opacity-60" />
                <div className="absolute inset-6 rounded-2xl border-2 border-indigo-200 flex flex-col items-center justify-center gap-6 p-8">
                  <div className="text-6xl font-display font-bold text-gradient leading-none">
                    2014
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-indigo-700 mb-1">
                      Founded
                    </div>
                    <div className="text-xs text-muted-foreground">
                      A decade of digital excellence
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3 text-center">
                      <div className="text-xl font-bold text-indigo-700">
                        7K+
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Projects
                      </div>
                    </div>
                    <div className="rounded-xl bg-violet-50 border border-violet-100 p-3 text-center">
                      <div className="text-xl font-bold text-violet-700">
                        25+
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TEAM & EXPERTISE ─────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-indigo-50/40"
        data-ocid="about.expertise.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5"
              {...fadeUp(0)}
            >
              Innovation-Driven Team With Wide-Ranging Expertise
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
              {...fadeUp(0.08)}
            >
              At Tech2Globe, we are ready for any challenge with a team of
              people who are passionate about innovation, have a sharp eye for
              detail, and consistently push the boundaries of technology. Our
              professionals have a broad range of specialties, including online
              marketing, ecommerce, IT consulting, and BPO/KPO. Additionally, we
              have data management, graphic and video services, app development.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              {...fadeUp(0.14)}
            >
              Despite the fact that we have deep roots in our hometown, we have
              expanded to serve clients on a global scale.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.label}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white border border-indigo-100 shadow-card hover-lift cursor-default text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <svc.icon className="w-6 h-6 text-indigo-600 shrink-0" />
                <span className="text-xs font-semibold text-foreground leading-tight">
                  {svc.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: NAVIGATING COMPLEXITY ───────────────────── */}
      <section
        className="py-16 md:py-24 bg-white"
        data-ocid="about.complexity.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left accent block */}
            <motion.div
              className="order-2 lg:order-1 relative"
              {...fadeUp(0.08)}
            >
              <div className="rounded-3xl gradient-indigo p-px overflow-hidden shadow-card-hover">
                <div className="rounded-3xl bg-white p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: "14+", txt: "Years Experience" },
                      { num: "99%", txt: "Client Satisfaction" },
                      { num: "300+", txt: "Team Members" },
                      { num: "10+", txt: "Industry Verticals" },
                    ].map((item) => (
                      <div
                        key={item.txt}
                        className="flex flex-col items-center py-5 px-3 rounded-2xl bg-indigo-50 border border-indigo-100"
                      >
                        <span className="text-2xl font-display font-bold text-gradient">
                          {item.num}
                        </span>
                        <span className="text-xs text-muted-foreground text-center mt-1 font-medium">
                          {item.txt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" {...fadeUp(0)}>
              <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Navigating the Complexities of Business Advancement Through
                Expertise
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tech2Globe is a team of smart and dedicated people who are
                experts in providing comprehensive digital solutions. We combine
                cutting-edge technology with deep industry knowledge to help
                businesses navigate the complex landscape of digital
                transformation and emerge stronger, more efficient, and more
                competitive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: KEY MILESTONES ───────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-indigo-50/40"
        data-ocid="about.milestones.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Key Milestones
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A track record built on consistency, quality, and global reach.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-indigo-100 shadow-card hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="shrink-0 w-14 h-14 rounded-xl gradient-indigo flex items-center justify-center">
                  <span className="text-sm font-display font-bold text-white">
                    {m.value}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug self-center">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: GLOBAL PRESENCE ──────────────────────────── */}
      <section
        className="py-16 md:py-24 bg-indigo-50/40"
        data-ocid="about.global.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeUp(0)}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Our Global Presence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a presence in over 25 countries—including the USA, Canada,
              UAE, Singapore, and Germany—Tech2Globe brings global reach with
              local expertise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-card hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`about.office.item.${i + 1}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-xs font-display font-bold text-indigo-700 uppercase tracking-wider">
                    {office.city}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {office.address}
                </p>
                {office.phone && (
                  <a
                    href={`tel:${office.phone}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {office.phone}
                    {office.label && (
                      <span className="text-xs text-muted-foreground font-normal">
                        ({office.label})
                      </span>
                    )}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        data-ocid="about.cta.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.22 264) 0%, oklch(0.45 0.24 290) 100%)",
          }}
        />
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, white 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight"
            {...fadeUp(0)}
          >
            Let's Build Your Digital Future Together
          </motion.h2>
          <motion.p className="text-lg text-white/80 mb-10" {...fadeUp(0.08)}>
            Let's chat about turning your business vision into reality
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeUp(0.16)}
          >
            <Link to="/contact" data-ocid="about.cta.get_in_touch.button">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50 border-0 font-display font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-smooth"
              >
                Get in Touch
              </Button>
            </Link>
            <Link
              to="/industries"
              data-ocid="about.cta.explore_services.button"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white/10 bg-transparent font-display font-semibold px-8 rounded-full transition-smooth"
              >
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
