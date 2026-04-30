import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ── Constants ──────────────────────────────────────────────────────────────
const ACCENT = "#7c3aed";
const ACCENT_SOFT = "rgba(124,58,237,0.08)";
const ACCENT_BORDER = "rgba(124,58,237,0.2)";

// ── Data ───────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "20+", label: "Industries Transformed" },
  { value: "60%", label: "Avg. Cost Reduction" },
  { value: "10x", label: "Faster Automation" },
  { value: "100%", label: "Ownership Delivered" },
];

const industries = [
  { emoji: "🚚", name: "Logistics & Freight" },
  { emoji: "🛢️", name: "Oil & Gas" },
  { emoji: "🌐", name: "Import & Export" },
  { emoji: "🏥", name: "Healthcare" },
  { emoji: "🏦", name: "Banking & Finance" },
  { emoji: "🛒", name: "E-Commerce & Retail" },
  { emoji: "🏭", name: "Manufacturing" },
  { emoji: "⚖️", name: "Legal & Compliance" },
  { emoji: "🏗️", name: "Real Estate" },
  { emoji: "📦", name: "Supply Chain" },
  { emoji: "✈️", name: "Travel & Tourism" },
  { emoji: "🎓", name: "Education & EdTech" },
  { emoji: "🍽️", name: "Food & Hospitality" },
  { emoji: "💊", name: "Pharmaceuticals" },
  { emoji: "🔋", name: "Energy & Utilities" },
  { emoji: "📡", name: "Telecom" },
  { emoji: "🚗", name: "Automotive" },
  { emoji: "🛡️", name: "Insurance" },
  { emoji: "🏛️", name: "Government & Public Sector" },
  { emoji: "🎬", name: "Media & Entertainment" },
  { emoji: "🧪", name: "Life Sciences & R&D" },
  { emoji: "💼", name: "HR & Talent Operations" },
  { emoji: "📊", name: "SaaS & Tech Startups" },
  { emoji: "🌱", name: "Agriculture & AgriTech" },
];

const logisticsChallenges = [
  {
    title: "High Volume, Low Value Queries",
    description:
      "Thousands of daily queries about shipment status, ETA updates, and delay notifications were consuming dispatcher and support team capacity.",
  },
  {
    title: "Fragmented Communication Channels",
    description:
      "Customers contacted via WhatsApp, email, web chat, and phone — with no unified system managing or routing these interactions intelligently.",
  },
  {
    title: "No 24/7 Coverage",
    description:
      "International shipments don't stop at 5 PM. The client had no night coverage, leading to delayed responses and frustrated customers across time zones.",
  },
  {
    title: "Zero Integration with Live Systems",
    description:
      "Existing chatbot tools couldn't connect to their live TMS, carrier tracking APIs, or internal freight databases — making automation impossible.",
  },
];

const logisticsCapabilities = [
  "Real-time shipment tracking via conversational queries — no form filling, no portal login",
  "Automated ETA updates, delay alerts, and delivery confirmation notifications",
  "Multi-channel deployment: WhatsApp, web chat widget, and email bot in a single unified system",
  "Intelligent escalation to human agents for complex disputes, claims, or high-value shipment queries",
  "Multilingual support across English, Hindi, and Arabic for international freight clients",
  "Proactive outbound notifications triggered by shipment status events — not just reactive responses",
  "Full integration with TMS, carrier APIs (FedEx, DHL, Maersk), and internal freight databases",
];

const logisticsStats = [
  { value: "78%", label: "Reduction in Support Tickets" },
  { value: "24/7", label: "Autonomous Coverage" },
  { value: "4 min", label: "Avg. Query Resolution Time" },
  { value: "3 weeks", label: "Full Deployment Timeline" },
];

const logisticsTechStack = [
  "GPT-4o fine-tuned on logistics domain data",
  "LangChain for orchestration",
  "WhatsApp Business API",
  "REST API integrations with carrier systems",
  "FastAPI backend",
  "Kubernetes deployment",
  "LangSmith for observability",
];

const oilChallenges = [
  {
    title: "Manual Permit-to-Work Processes",
    description:
      "Field engineers were completing paper-based or spreadsheet-driven permit-to-work workflows that took hours to process and were prone to compliance gaps.",
  },
  {
    title: "Disconnected Field & Office Systems",
    description:
      "Field data — sensor readings, maintenance logs, inspection reports — lived in isolated systems with no automated pathway to management dashboards or ERP.",
  },
  {
    title: "Slow Incident Reporting & Escalation",
    description:
      "Incident reports were filed manually, often hours after the event, with no automated escalation to the right teams or regulatory bodies.",
  },
  {
    title: "Compliance Documentation Bottlenecks",
    description:
      "Preparing regulatory compliance reports required analysts to manually pull data from multiple systems — a process taking days, not hours.",
  },
];

const oilWorkflows = [
  "Digital Permit-to-Work system with AI-assisted risk assessment and multi-level approval routing",
  "Automated anomaly detection on IoT sensor data — pressure, temperature, flow rate — with instant alert generation",
  "Incident report auto-generation from field inputs, with intelligent escalation routing based on severity classification",
  "Compliance documentation auto-assembly: regulatory reports built from live operational data, reviewed and formatted by AI",
  "Maintenance scheduling automation triggered by predictive wear models, not fixed calendar cycles",
  "Real-time operational dashboards synced from field data — no manual reporting inputs required",
  "Vendor and procurement workflow automation: PO generation, approval chains, and delivery tracking",
];

const oilStats = [
  { value: "65%", label: "Reduction in Manual Reporting" },
  { value: "90%", label: "Faster Permit Processing" },
  { value: "Zero", label: "Compliance Gaps Post-Deployment" },
  { value: "4x", label: "Faster Incident Escalation" },
];

const oilTechStack = [
  "LangGraph multi-agent orchestration",
  "IoT sensor API integrations",
  "SAP ERP integration",
  "Custom LLM-powered document generation",
  "Azure cloud infrastructure",
  "Power BI dashboards",
  "MLflow for model monitoring",
  "Secure on-premises data handling",
];

const importChallenges = [
  {
    title: "Customs Documentation Done Manually",
    description:
      "HS code classification, customs declarations, and certificate of origin documents were being prepared manually — slow, error-prone, and compliance-risky.",
  },
  {
    title: "No Intelligent Trade Intelligence",
    description:
      "The platform held transaction data but offered no insight — no demand forecasting, no duty optimisation, no tariff change alerts.",
  },
  {
    title: "Compliance Blind Spots",
    description:
      "With trade regulations changing constantly across 15+ countries, the team had no system to flag compliance risks or sanction screening issues before shipments moved.",
  },
  {
    title: "Disconnected Communication",
    description:
      "Supplier communication, freight coordination, and buyer updates were managed manually outside the SaaS platform — creating information gaps and delays.",
  },
];

const importCapabilities = [
  "Automated HS code classification engine trained on 80,000+ product descriptions — 97% accuracy, instant results",
  "AI-generated customs documentation: declarations, packing lists, and certificates of origin drafted and validated automatically",
  "Real-time compliance screening: sanctions lists, restricted party checks, and country-specific regulation alerts embedded in the shipment workflow",
  "Demand forecasting module: predicts import volumes and inventory needs using historical transaction data and market signals",
  "Duty and tariff optimisation: AI analyses trade agreements and tariff schedules to surface the most cost-effective routing and classification options",
  "Automated supplier and buyer communication: AI drafts order confirmations, shipment advisories, and delay notifications in multiple languages",
  "AI-powered document extraction: pulls structured data from supplier invoices, bills of lading, and inspection certificates — eliminating manual data entry",
  "Trade analytics dashboard: AI-generated insights on margins, supplier performance, and trade route efficiency — updated in real time",
];

const importStats = [
  { value: "97%", label: "HS Code Accuracy" },
  { value: "70%", label: "Faster Doc Processing" },
  { value: "100%", label: "Compliance Screening Coverage" },
  { value: "3x", label: "Improvement in Margin Visibility" },
];

const importTechStack = [
  "Custom-trained NLP classification model",
  "LangChain document processing pipelines",
  "REST API integration into existing SaaS platform",
  "RAG architecture for trade regulation knowledge base",
  "Multilingual generation with GPT-4o",
  "AWS infrastructure",
  "Pinecone vector store",
  "Real-time compliance database integrations (OFAC, UN, EU)",
];

// ── Sub-components ─────────────────────────────────────────────────────────

function HeroStatCard({
  value,
  label,
  index,
}: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
      className="rounded-xl px-6 py-5 flex flex-col items-center text-center bg-white"
      style={{
        border: `1px solid ${ACCENT_BORDER}`,
        boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
      }}
      data-ocid={`hero.stats.item.${index + 1}`}
    >
      <span
        className="font-display text-3xl md:text-4xl font-bold mb-1"
        style={{ color: ACCENT }}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground font-body">{label}</span>
    </motion.div>
  );
}

function ResultStatCard({
  value,
  label,
  index,
  accentColor,
}: { value: string; label: string; index: number; accentColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-xl p-6 flex flex-col items-center text-center bg-white"
      style={{
        border: `1px solid ${accentColor}33`,
        boxShadow: `0 4px 20px ${accentColor}12`,
      }}
      data-ocid={`result.stat.${index + 1}`}
    >
      <span
        className="font-display text-3xl md:text-4xl font-black mb-2"
        style={{ color: accentColor }}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground font-body font-medium text-center">
        {label}
      </span>
    </motion.div>
  );
}

function ChallengeCard({
  title,
  description,
  index,
  badgeColor,
}: { title: string; description: string; index: number; badgeColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl p-6"
      style={{
        borderLeft: `4px solid ${badgeColor}`,
        border: "1px solid rgba(0,0,0,0.07)",
        borderLeftColor: badgeColor,
        borderLeftWidth: "4px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
      data-ocid={`challenge.item.${index + 1}`}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-sm font-bold text-white"
        style={{ background: badgeColor }}
      >
        {index + 1}
      </div>
      <h4 className="font-display font-bold text-sm text-foreground mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function CapabilityList({
  items,
  accentColor,
}: { items: string[]; accentColor: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <span
            className="flex-shrink-0 mt-0.5 font-bold text-sm"
            style={{ color: accentColor }}
          >
            →
          </span>
          <span className="text-sm text-muted-foreground font-body leading-relaxed">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function TechStackPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs px-3 py-1.5 rounded-md font-mono font-medium"
          style={{
            background: "rgba(124,58,237,0.07)",
            color: "#5b21b6",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function UseCaseDivider({
  label,
  color,
  emoji,
}: { label: string; color: string; emoji: string }) {
  return (
    <div className="flex items-center gap-4 mb-8" data-ocid="usecase.divider">
      <div
        className="w-1.5 h-12 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <div>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-1"
          style={{
            background: `${color}18`,
            color: color,
            border: `1px solid ${color}44`,
          }}
        >
          <span>{emoji}</span>
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}

// ── Contact Form ───────────────────────────────────────────────────────────
const initialFormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center rounded-2xl bg-white"
        style={{ border: `1px solid ${ACCENT_BORDER}` }}
        data-ocid="contact.success_state"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: ACCENT_SOFT }}
        >
          <Star className="w-8 h-8" style={{ color: ACCENT }} />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          Thank you!
        </h3>
        <p className="text-muted-foreground font-body max-w-sm">
          Your message has been received. We'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialFormState);
          }}
          className="mt-6 text-sm font-semibold underline"
          style={{ color: ACCENT }}
          data-ocid="contact.reset_button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 space-y-5"
      style={{
        border: `1px solid ${ACCENT_BORDER}`,
        boxShadow: "0 4px 24px rgba(124,58,237,0.07)",
      }}
      data-ocid="contact.form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="uc-name"
          >
            Full Name <span style={{ color: ACCENT }}>*</span>
          </label>
          <input
            id="uc-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.name_input"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="uc-email"
          >
            Email Address <span style={{ color: ACCENT }}>*</span>
          </label>
          <input
            id="uc-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.email_input"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="uc-company"
          >
            Company Name
          </label>
          <input
            id="uc-company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.company_input"
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="uc-industry"
          >
            Industry / Use Case
          </label>
          <select
            id="uc-industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.industry_select"
          >
            <option value="">Select Industry</option>
            <option value="logistics">Logistics & Freight</option>
            <option value="oilgas">Oil & Gas</option>
            <option value="importexport">Import & Export</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Banking & Finance</option>
            <option value="ecommerce">E-Commerce & Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="uc-message"
        >
          Your AI Challenge / Use Case
        </label>
        <textarea
          id="uc-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your operational challenge or AI use case..."
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2 resize-none"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.textarea"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold text-white text-base transition-colors duration-200"
        style={{ background: ACCENT }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#6d28d9";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = ACCENT;
        }}
        data-ocid="contact.submit_button"
      >
        Talk to Our AI Solutions Team
      </button>
    </form>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function AIUseCasesPage() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden py-14 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(109,40,217,0.05) 0%, transparent 55%), #fff",
        }}
        data-ocid="hero.section"
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: ACCENT_SOFT,
                  color: "#5b21b6",
                  border: `1px solid ${ACCENT_BORDER}`,
                }}
              >
                AI Solutions — Real Industries. Real Results.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-headline mb-4 text-foreground"
              data-ocid="hero.headline"
            >
              These are real-world AI deployments built by{" "}
              <span style={{ color: ACCENT }}>Tech2Globe AI</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-start"
            >
              <Button
                className="px-8 py-3 text-base h-auto font-semibold text-white rounded-md transition-smooth active:scale-95"
                style={{ background: ACCENT }}
                onClick{(navigate("/ai-expert")}
                data-ocid="hero.primary_button"
              >
                Talk to Our AI Team
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="btn-secondary px-8 py-3 text-base h-auto"
                onClick={() => {
                  const el = document.querySelector("#use-cases");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="hero.secondary_button"
              >
                View Use Cases
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl"
            data-ocid="hero.stats.section"
          >
            {heroStats.map((s, i) => (
              <HeroStatCard
                key={s.value}
                value={s.value}
                label={s.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section >

      {/* ── INDUSTRIES GRID ────────────────────────────────── */}
      < section
        id="industries"
        className="py-12 border-y border-border"
        style={{ background: "#f5f3ff" }
        }
        data - ocid="industries.section"
  >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-section-label text-muted-foreground mb-3 block">
            Our Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            20+ Industries We Have{" "}
            <span style={{ color: ACCENT }}>Transformed with AI</span>
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            From high-volume freight networks to regulated financial
            institutions, from fast-moving e-commerce platforms to complex oil
            field operations — tech2globe has deployed production AI across
            more than 20 industries.
          </p>
        </motion.div>

        <div
          className="flex flex-wrap gap-3 justify-center"
          data-ocid="industries.list"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white font-medium text-sm transition-smooth cursor-default"
              style={{
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: "0 1px 6px rgba(124,58,237,0.07)",
              }}
              data-ocid={`industries.item.${i + 1}`}
            >
              <span>{ind.emoji}</span>
              <span className="text-foreground font-body">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section >

  {/* ── USE CASES ─────────────────────────────────────── */ }
  < div id="use-cases" >
    {/* ── USE CASE 01 — LOGISTICS ──────────────────────── */}
    < section
      id="logistics"
      className="py-14 bg-white border-b border-border"
      data - ocid="usecase1.section"
  >
    <div className="max-w-7xl mx-auto px-6">
      <UseCaseDivider
        label="USE CASE 01 — LOGISTICS"
        color="#0ea5e9"
        emoji="🚚"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-subheadline text-foreground mb-4">
          Next-Generation AI Chatbot for a{" "}
          <span style={{ color: "#0ea5e9" }}>
            Global Logistics Client
          </span>
        </h2>
        <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
          When one of our logistics clients came to tech2globe, they were
          losing hours every day — dispatchers handling repetitive
          tracking queries, customer support teams buried in shipment
          status calls, and operations teams manually coordinating freight
          updates across time zones. The answer wasn't hiring more people.
          It was building a smarter system. We built them a
          next-generation AI chatbot — not a rule-based FAQ bot, but a
          fully conversational, context-aware AI assistant that
          understands logistics language, integrates directly with their
          TMS and carrier APIs, and resolves queries end-to-end without
          any human intervention.
        </p>
      </motion.div>

      {/* Challenge grid */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-5">
          The Challenge
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          data-ocid="usecase1.challenges"
        >
          {logisticsChallenges.map((c, i) => (
            <ChallengeCard
              key={c.title}
              title={c.title}
              description={c.description}
              index={i}
              badgeColor="#ef4444"
            />
          ))}
        </div>
      </div>

      {/* What we built */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-4">
          What Tech2Globe Built
        </h3>
        <p className="text-base text-muted-foreground font-body leading-relaxed mb-6 max-w-4xl">
          We designed and deployed a logistics-specific AI chatbot powered
          by a fine-tuned large language model — built to understand
          freight, shipping, and supply chain terminology natively. The
          system integrates directly with the client's TMS and major
          carrier APIs to pull real-time shipment data on demand.
        </p>
        <h4 className="font-display font-semibold text-base text-foreground mb-4">
          Core Capabilities Delivered
        </h4>
        <CapabilityList
          items={logisticsCapabilities}
          accentColor="#0ea5e9"
        />
      </div>

      {/* Results */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-5">
          The Result
        </h3>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          data-ocid="usecase1.results"
        >
          {logisticsStats.map((s, i) => (
            <ResultStatCard
              key={s.label}
              value={s.value}
              label={s.label}
              index={i}
              accentColor="#0ea5e9"
            />
          ))}
        </div>
        <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
          The client's support team was freed from repetitive query
          handling and redirected to high-value operations tasks. Customer
          satisfaction scores improved measurably within the first 30 days
          of deployment. The chatbot now handles over 85% of inbound
          queries autonomously — around the clock, across every channel.
        </p>
      </div>

      {/* Tech stack */}
      <div>
        <h3 className="font-display font-bold text-base text-foreground mb-3">
          Tech Stack
        </h3>
        <TechStackPills items={logisticsTechStack} />
      </div>
    </div>
  </section >

  {/* ── USE CASE 02 — OIL & GAS ──────────────────────── */ }
  < section
    id="oil-gas"
    className="py-14 border-b border-border"
    style={{ background: "#f5f3ff" }}
    data - ocid="usecase2.section"
      >
      <div className="max-w-7xl mx-auto px-6">
        <UseCaseDivider
          label="USE CASE 02 — OIL & GAS"
          color="#f59e0b"
          emoji="🛢️"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-subheadline text-foreground mb-4">
            AI-Powered Workflow Automation for an{" "}
            <span style={{ color: "#f59e0b" }}>Oil & Gas Enterprise</span>
          </h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
            Oil and gas operations run on precision, compliance, and speed —
            and in this sector, inefficient workflows don't just slow things
            down, they create safety risks, regulatory exposure, and
            significant financial loss. Our client, a mid-size oil & gas
            company managing field operations across multiple sites, was
            operating on a patchwork of spreadsheets, manual approval
            chains, and disconnected reporting systems. Tech2globe came in
            and redesigned their operational backbone — replacing manual,
            error-prone workflows with an AI-driven automation layer that
            connects their field data, compliance processes, and management
            reporting into a single, intelligent system.
          </p>
        </motion.div>

        {/* Challenge grid */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-xl text-foreground mb-5">
            The Challenge
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            data-ocid="usecase2.challenges"
          >
            {oilChallenges.map((c, i) => (
              <ChallengeCard
                key={c.title}
                title={c.title}
                description={c.description}
                index={i}
                badgeColor="#ef4444"
              />
            ))}
          </div>
        </div>

        {/* What we built */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-xl text-foreground mb-4">
            What Tech2Globe Built
          </h3>
          <p className="text-base text-muted-foreground font-body leading-relaxed mb-6 max-w-4xl">
            We deployed a multi-agent AI automation system that connects
            field operations, compliance management, and executive reporting
            into an intelligent, event-driven workflow engine. Every major
            operational process — from permit issuance to incident
            escalation — is now orchestrated by AI agents that act,
            document, and alert without waiting for human triggers.
          </p>
          <h4 className="font-display font-semibold text-base text-foreground mb-4">
            Workflows Automated
          </h4>
          <CapabilityList items={oilWorkflows} accentColor="#f59e0b" />
        </div>

        {/* Results */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-xl text-foreground mb-5">
            The Result
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
            data-ocid="usecase2.results"
          >
            {oilStats.map((s, i) => (
              <ResultStatCard
                key={s.label}
                value={s.value}
                label={s.label}
                index={i}
                accentColor="#f59e0b"
              />
            ))}
          </div>
          <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
            What previously required a team of coordinators manually
            managing paper trails and chasing approvals now runs
            autonomously. The client passed their next regulatory audit with
            zero findings — for the first time in four years. Field
            engineers spend their time on actual engineering, not paperwork.
            Management gets live visibility into operations without waiting
            for weekly reports.
          </p>
        </div>

        {/* Tech stack */}
        <div>
          <h3 className="font-display font-bold text-base text-foreground mb-3">
            Tech Stack
          </h3>
          <TechStackPills items={oilTechStack} />
        </div>
      </div>
        </section >

    {/* ── USE CASE 03 — IMPORT / EXPORT ─────────────────── */ }
    < section
  id = "import-export"
  className = "py-14 bg-white border-b border-border"
  data - ocid="usecase3.section"
    >
    <div className="max-w-7xl mx-auto px-6">
      <UseCaseDivider
        label="USE CASE 03 — IMPORT / EXPORT"
        color="#10b981"
        emoji="🌐"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-subheadline text-foreground mb-4">
          AI Integration into SaaS-Based Software for an{" "}
          <span style={{ color: "#10b981" }}>Import-Export Client</span>
        </h2>
        <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
          The import-export industry runs on documentation, compliance,
          and split-second decision-making. Our client — a growing
          import-export business managing cross-border trade across 15+
          countries — had invested in a SaaS platform to manage their
          operations, but the platform was fundamentally reactive. It
          stored data. It did not think. Tech2globe embedded AI
          intelligence directly into their existing SaaS software —
          transforming it from a data management tool into a proactive,
          decision-supporting, compliance-aware system that works as hard
          as the team using it.
        </p>
      </motion.div>

      {/* Challenge grid */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-5">
          The Challenge
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          data-ocid="usecase3.challenges"
        >
          {importChallenges.map((c, i) => (
            <ChallengeCard
              key={c.title}
              title={c.title}
              description={c.description}
              index={i}
              badgeColor="#ef4444"
            />
          ))}
        </div>
      </div>

      {/* What we built */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-4">
          What Tech2Globe Built
        </h3>
        <p className="text-base text-muted-foreground font-body leading-relaxed mb-6 max-w-4xl">
          We engineered a deep AI integration layer within the client's
          existing SaaS platform — no rip-and-replace, no disruption to
          current workflows. Instead, we added AI modules that plugged
          directly into the platform's data architecture, surfacing
          intelligence where decisions are actually made.
        </p>
        <h4 className="font-display font-semibold text-base text-foreground mb-4">
          AI Capabilities Integrated
        </h4>
        <CapabilityList
          items={importCapabilities}
          accentColor="#10b981"
        />
      </div>

      {/* Results */}
      <div className="mb-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-5">
          The Result
        </h3>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
          data-ocid="usecase3.results"
        >
          {importStats.map((s, i) => (
            <ResultStatCard
              key={s.label}
              value={s.value}
              label={s.label}
              index={i}
              accentColor="#10b981"
            />
          ))}
        </div>
        <p className="text-base text-muted-foreground font-body leading-relaxed max-w-4xl">
          The client's compliance team went from chasing paperwork to
          managing by exception. Documentation that previously took a full
          working day to prepare is now generated in minutes. Duty savings
          from AI-optimised classification covered the entire project cost
          within the first quarter post-launch. And for the first time,
          the business has a real-time view of trade performance across
          every market they operate in.
        </p>
      </div>

      {/* Tech stack */}
      <div>
        <h3 className="font-display font-bold text-base text-foreground mb-3">
          Tech Stack
        </h3>
        <TechStackPills items={importTechStack} />
      </div>
    </div>
        </section >
      </div >

    {/* ── FINAL CTA ─────────────────────────────────────── */ }
    < section
  className = "py-14 relative overflow-hidden"
  style = {{
    background: "linear-gradient(135deg, #0d0d2b 0%, #1a1035 100%)",
        }
}
data - ocid="cta.section"
  >
  {/* Dot overlay */ }
  < div
className = "absolute inset-0 pointer-events-none"
style = {{
  backgroundImage:
  "radial-gradient(circle, rgba(167,139,250,0.08) 1px, transparent 1px)",
    backgroundSize: "36px 36px",
          }}
        />
  < div className = "relative max-w-7xl mx-auto px-6" >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-12"
    >
      <span
        className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
        style={{
          background: "rgba(167,139,250,0.12)",
          color: "#a78bfa",
          border: "1px solid rgba(167,139,250,0.3)",
        }}
      >
        Start Your AI Journey
      </span>
      <h2 className="text-subheadline mb-4 text-white">
        Your Industry.{" "}
        <span style={{ color: "#a78bfa" }}>Your Problem.</span> Our AI.
      </h2>
      <p
        className="text-base font-body mb-8 leading-relaxed"
        style={{ color: "#d1d5db" }}
      >
        Every use case above started with a conversation. Not a sales
        pitch — a real discovery session where we listened, assessed, and
        proposed. We build AI that solves your specific operational
        challenges — not generic demos dressed up as solutions.
      </p>
      <Button
        className="px-10 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95"
        style={{ background: ACCENT, color: "#fff" }}
        onClick{(navigate("/ai-expert")}
        data-ocid="cta.primary_button"
      >
        Talk to Our AI Solutions Team
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </motion.div >
        </div >
      </section >

  {/* ── CONTACT FORM ──────────────────────────────────── */ }
  < section
id = "contact"
className = "py-12 border-t border-border"
style = {{ background: "#f5f3ff" }}
data - ocid="contact.section"
  >
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-section-label text-muted-foreground mb-3 block">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Your{" "}
          <span style={{ color: ACCENT }}>AI Transformation</span>
        </h2>
        <p className="text-base text-muted-foreground font-body">
          Tell us about your industry and operational challenge. We'll get
          back to you within 24 hours with a tailored approach.
        </p>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3"
      >
        <ContactForm />
      </motion.div>

      {/* Side trust panel */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-2 space-y-4"
      >
        {/* Why work with us */}
        <div
          className="bg-white rounded-xl p-6"
          style={{
            border: `1px solid ${ACCENT_BORDER}`,
            boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
          }}
        >
          <h4 className="font-display font-bold text-sm text-foreground mb-4">
            Why Work With Tech2Globe
          </h4>
          <ul className="space-y-3">
            {[
              "Free discovery session — no commitment",
              "500+ AI projects delivered across 20+ industries",
              "Production-grade deployment, not demos",
              "100% code ownership on every project",
              "NDA protected — enterprise-grade security",
              "Ongoing support & model iteration",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5"
                  style={{ background: ACCENT }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Case stat callout */}
        <div
          className="bg-white rounded-xl p-5"
          style={{
            border: `1px solid ${ACCENT_BORDER}`,
            boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
          }}
        >
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Proven Outcomes
          </p>
          <div className="space-y-2">
            {[
              {
                stat: "78%",
                desc: "Reduction in support tickets — Logistics",
              },
              {
                stat: "Zero",
                desc: "Compliance gaps post-deployment — Oil & Gas",
              },
              { stat: "97%", desc: "HS code accuracy — Import / Export" },
            ].map((item) => (
              <div key={item.stat} className="flex items-center gap-3">
                <span
                  className="font-display font-black text-xl"
                  style={{ color: ACCENT, minWidth: "3rem" }}
                >
                  {item.stat}
                </span>
                <span className="text-xs text-muted-foreground font-body">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
      </section >
    </div >
  );
}
