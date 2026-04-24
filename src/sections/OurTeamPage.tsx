import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

// ── Types ──────────────────────────────────────────────────────────────────

type Department =
  | "Ecommerce"
  | "Data Management"
  | "Digital Marketing"
  | "Human Resource"
  | "IT"
  | "Graphics"
  | "Operations"
  | "Technology"
  | "Leadership";

interface TeamMember {
  name: string;
  title: string;
  department: Department;
}

interface Office {
  city: string;
  country: string;
  countryTag: string;
  address: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const LEADERS: TeamMember[] = [
  {
    name: "Harpreet Singh Sethi",
    title: "CEO & Founder",
    department: "Leadership",
  },
  {
    name: "Sarabjeet Singh",
    title: "Director of Operations",
    department: "Leadership",
  },
  { name: "Sahil Verma", title: "Sales Director", department: "Leadership" },
];

const PILLARS: TeamMember[] = [
  {
    name: "Shivendra Tiwari",
    title: "Assistant Vice President Technology",
    department: "Technology",
  },
  {
    name: "Prateek Sharma",
    title: "Operations Manager",
    department: "Ecommerce",
  },
  { name: "Megha Anand", title: "HR Manager", department: "Human Resource" },
  { name: "Gaurav Kumar Tyagi", title: "IT Manager", department: "IT" },
  {
    name: "Manoj Kumar Sharma",
    title: "Sr. Project Manager",
    department: "Data Management",
  },
  {
    name: "Paritosh Singh",
    title: "Project Coordinator",
    department: "Data Management",
  },
  { name: "Hidayat Hashmi", title: "PPC Manager", department: "Ecommerce" },
  {
    name: "Manisha Kashyap",
    title: "Subject Matter Expert",
    department: "Ecommerce",
  },
  {
    name: "Mohd. Rehan Khan",
    title: "Project Coordinator",
    department: "Data Management",
  },
  {
    name: "Raman Singh",
    title: "Team Developer",
    department: "Data Management",
  },
  {
    name: "Sahil Kumar",
    title: "Senior Executive",
    department: "Data Management",
  },
  {
    name: "David Mboyo",
    title: "Team Leader/QA (French)",
    department: "Data Management",
  },
];

// Removed members: Garima Mahajan, Devender Rathore, Mohit Bansal, Sorabh Nigam,
// Ritu Nawariya, Pankaj Lohani, Harvinder Singh, Vijay Kumar Roy

const OFFICES: Office[] = [
  {
    city: "New York",
    country: "USA",
    countryTag: "United States",
    address: "1538 Old Country Road, Plainview, NY 11803",
  },
  {
    city: "Mississauga",
    country: "Canada",
    countryTag: "Canada",
    address: "2000 Argentia Road, Suite 200, Mississauga, ON",
  },
  {
    city: "Port Alberni",
    country: "Canada",
    countryTag: "Canada",
    address: "4757 Elizabeth Street, Port Alberni, BC",
  },
  {
    city: "Noida",
    country: "India",
    countryTag: "India",
    address: "C-56/35, Sector 62, Noida, Uttar Pradesh 201301",
  },
];

// ── Department colour map ──────────────────────────────────────────────────

const DEPT_STYLE: Record<
  Department,
  { pill: string; avatar: string; initials: string }
> = {
  Ecommerce: {
    pill: "bg-blue-100 text-blue-700",
    avatar: "bg-blue-500",
    initials: "text-white",
  },
  "Data Management": {
    pill: "bg-green-100 text-green-700",
    avatar: "bg-green-500",
    initials: "text-white",
  },
  "Digital Marketing": {
    pill: "bg-purple-100 text-purple-700",
    avatar: "bg-purple-500",
    initials: "text-white",
  },
  "Human Resource": {
    pill: "bg-pink-100 text-pink-700",
    avatar: "bg-pink-500",
    initials: "text-white",
  },
  IT: {
    pill: "bg-orange-100 text-orange-700",
    avatar: "bg-orange-500",
    initials: "text-white",
  },
  Graphics: {
    pill: "bg-yellow-100 text-yellow-700",
    avatar: "bg-yellow-500",
    initials: "text-white",
  },
  Operations: {
    pill: "bg-teal-100 text-teal-700",
    avatar: "bg-teal-500",
    initials: "text-white",
  },
  Technology: {
    pill: "bg-indigo-100 text-indigo-700",
    avatar: "bg-indigo-500",
    initials: "text-white",
  },
  Leadership: {
    pill: "bg-indigo-100 text-indigo-700",
    avatar: "bg-gradient-to-br from-indigo-500 to-violet-600",
    initials: "text-white",
  },
};

// ── Helpers ────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

// ── Sub-components ─────────────────────────────────────────────────────────

function LeaderCard({ member, index }: { member: TeamMember; index: number }) {
  const styles = DEPT_STYLE[member.department];
  const initials = getInitials(member.name);

  return (
    <motion.div
      className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1 }}
      data-ocid={`team.leader.item.${index + 1}`}
    >
      {/* Avatar */}
      <div
        className={`w-24 h-24 rounded-full ${styles.avatar} flex items-center justify-center mb-5 shadow-lg ring-4 ring-indigo-50 group-hover:ring-indigo-100 transition-all duration-300`}
      >
        <span className={`text-2xl font-display font-bold ${styles.initials}`}>
          {initials}
        </span>
      </div>

      <h3 className="text-xl font-display font-bold text-gray-900 mb-1 leading-tight">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-gray-500 mb-4 leading-snug">
        {member.title}
      </p>
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.pill}`}
      >
        {member.department}
      </span>
    </motion.div>
  );
}

function PillarCard({ member, index }: { member: TeamMember; index: number }) {
  const styles = DEPT_STYLE[member.department];
  const initials = getInitials(member.name);

  return (
    <motion.div
      className="group flex flex-col items-center text-center p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.07 }}
      data-ocid={`team.pillar.item.${index + 1}`}
    >
      {/* Avatar */}
      <div
        className={`w-14 h-14 rounded-full ${styles.avatar} flex items-center justify-center mb-3 shadow-sm`}
      >
        <span className={`text-base font-display font-bold ${styles.initials}`}>
          {initials}
        </span>
      </div>

      <h4 className="text-sm font-display font-bold text-gray-900 mb-0.5 leading-snug">
        {member.name}
      </h4>
      <p className="text-xs text-gray-500 mb-3 leading-snug min-h-[2.5rem]">
        {member.title}
      </p>
      <span
        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles.pill}`}
      >
        {member.department}
      </span>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function OurTeamPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-12 md:py-16"
        data-ocid="team.hero.section"
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.52 0.22 264 / 0.07) 0%, transparent 70%)",
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.22 264 / 0.12) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.22 264 / 0.10) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div {...fadeUp(0)}>
            <Badge className="mb-3 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-200 bg-indigo-50 text-indigo-700">
              Meet The Team
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4"
            {...fadeUp(0.08)}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            {...fadeUp(0.16)}
          >
            The passionate people behind Tech2Globe's success — innovators,
            strategists, and experts dedicated to delivering excellence across
            every project.
          </motion.p>
        </div>
      </section>

      {/* ── LEADERSHIP ────────────────────────────────────────────────── */}
      <section
        className="py-12 md:py-14 bg-indigo-50/40"
        data-ocid="team.leadership.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-8" {...fadeUp(0)}>
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Driving the vision
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Leadership
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {LEADERS.map((leader, i) => (
              <LeaderCard key={leader.name} member={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PILLARS ───────────────────────────────────────────────── */}
      <section
        className="py-12 md:py-14 bg-white"
        data-ocid="team.pillars.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-8" {...fadeUp(0)}>
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
              The backbone of our operations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Pillars
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              The specialists and managers who power our operations day to day.
            </p>
          </motion.div>

          {/* Department legend */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-6"
            {...fadeUp(0.08)}
            data-ocid="team.dept_legend"
          >
            {(Object.keys(DEPT_STYLE) as Department[])
              .filter((d) => d !== "Leadership")
              .map((dept) => (
                <span
                  key={dept}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${DEPT_STYLE[dept].pill}`}
                >
                  {dept}
                </span>
              ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PILLARS.map((member, i) => (
              <PillarCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STRENGTH — GLOBAL PRESENCE ───────────────────────────── */}
      <section
        className="py-12 md:py-14 bg-gray-50"
        data-ocid="team.strength.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-8" {...fadeUp(0)}>
            <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Global reach, local expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Strength
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Serving clients globally from our offices across 3 continents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`team.office.item.${i + 1}`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-sm font-display font-bold text-gray-900 leading-tight">
                    {office.city}
                  </span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3 bg-indigo-100 text-indigo-700">
                  {office.countryTag}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-14 md:py-16"
        data-ocid="team.cta.section"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #ede8ff 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #c7d2fe 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #ddd6fe 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight"
            style={{ color: "#1a1a2e" }}
            {...fadeUp(0)}
          >
            Join Our Growing Team
          </motion.h2>
          <motion.p
            className="text-lg mb-10"
            style={{ color: "#4a4a6a" }}
            {...fadeUp(0.08)}
          >
            We're always looking for passionate people to help us deliver
            excellence for our clients worldwide.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeUp(0.16)}
          >
            <Link to="/contact" data-ocid="team.cta.contact.button">
              <Button
                size="lg"
                className="bg-indigo-600 text-white hover:bg-indigo-700 border-0 font-display font-semibold px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get in Touch
              </Button>
            </Link>
            <Link to="/about-us" data-ocid="team.cta.about.button">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-400 text-indigo-700 hover:bg-indigo-50 bg-transparent font-display font-semibold px-8 rounded-full transition-all duration-200"
              >
                About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
