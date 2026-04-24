import { Link } from "react-router-dom";

import {
  ArrowRight,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  LineChart,
  Shield,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const solutions = [
  {
    slug: "ai-powered-data-analytics",
    icon: BarChart3,
    title: "AI-Powered Data Analytics",
    description:
      "Transform raw data into actionable insights with real-time AI-driven analytics dashboards.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    slug: "intelligent-automation",
    icon: Zap,
    title: "Intelligent Automation",
    description:
      "Automate complex workflows and eliminate manual bottlenecks with smart AI orchestration.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    slug: "predictive-modeling",
    icon: Brain,
    title: "Predictive Modeling",
    description:
      "Forecast trends and outcomes with precision using advanced machine learning models.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    slug: "enterprise-security-ai",
    icon: Shield,
    title: "Enterprise Security AI",
    description:
      "Protect your business with intelligent threat detection and automated incident response.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    slug: "ai-automation",
    icon: Zap,
    title: "AI Automation",
    description:
      "Scale automation across departments with AI-driven decisions and integrations.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    slug: "cloud-migration",
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Modernize infrastructure with AI-guided cloud transformation.",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
  },
  {
    slug: "predictive-ai-analytics",
    icon: LineChart,
    title: "Predictive AI Analytics",
    description:
      "Turn data into revenue with AI forecasting and predictive models.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    slug: "hire-lovable-ai-developer",
    icon: Code2,
    title: "Hire AI Developer",
    description:
      "Build MVPs fast with expert AI engineers delivering production-ready apps.",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* MAIN CONTENT */}
      <main className="flex-1 pt-16">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center max-w-3xl">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Power Your Business <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                with AI Intelligence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Build smarter systems, automate workflows, and scale faster with
              cutting-edge AI solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/hire-ai-developers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
              >
                Hire AI Developers <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our AI Solutions
            </h2>
            <p className="text-gray-600">
              Explore powerful AI services designed for modern businesses
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/solutions/${sol.slug}`}
                  className="block p-6 rounded-xl bg-white border hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${sol.iconBg}`}
                  >
                    <sol.icon className={sol.iconColor} size={22} />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {sol.description}
                  </p>

                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}