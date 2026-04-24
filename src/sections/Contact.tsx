import { useEffect, useRef, useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  country: string;
  platform: string;
  budget: string;
  timeline: string;
  description: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  company: "",
  country: "",
  platform: "",
  budget: "",
  timeline: "",
  description: "",
};

const inputClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 placeholder:text-slate-400";

const selectClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 appearance-none cursor-pointer";

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>(
    {},
  );
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { fullName?: string; email?: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#f0f4ff" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(0,196,154,0.07) 0%, transparent 50%)",
        }}
      />

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Label */}
        <div className="mb-3 flex justify-center">
          <span className="section-label" data-ocid="contact-section-label">
            GET STARTED
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
          style={{ color: "#0f172a" }}
        >
          Ready to Build Something{" "}
          <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p
          className="font-space-grotesk text-base md:text-lg mb-6 max-w-2xl mx-auto"
          style={{ color: "#475569" }}
        >
          Tell us your idea. We assign the right AI Engineer. Your product ships
          — fast.
        </p>

        {/* Glass Panel */}
        <div
          className="max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 md:p-8 text-left"
          style={{
            background: "rgba(255,255,255,0.90)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          }}
        >
          {submitted ? (
            /* Success State */
            <div
              className="flex flex-col items-center justify-center py-12 gap-6 fade-in"
              data-ocid="contact-success-state"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                style={{
                  background: "rgba(0,196,154,0.10)",
                  border: "2px solid rgba(0,196,154,0.4)",
                  boxShadow: "0 0 30px rgba(0,196,154,0.25)",
                  color: "#007a64",
                }}
              >
                ✓
              </div>
              <div className="text-center">
                <h3
                  className="font-orbitron text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: "#007a64" }}
                >
                  Request Received!
                </h3>
                <p
                  className="font-space-grotesk text-base md:text-lg max-w-md mx-auto"
                  style={{ color: "#475569" }}
                >
                  Your AI Engineer will reach out within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} noValidate data-ocid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {/* Full Name */}
                <div>
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Smith"
                    data-ocid="contact-input-fullname"
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p
                      className="font-space-grotesk mt-1 text-xs"
                      style={{ color: "#dc2626" }}
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@company.com"
                    data-ocid="contact-input-email"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p
                      className="font-space-grotesk mt-1 text-xs"
                      style={{ color: "#dc2626" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="company"
                  >
                    Company / Startup Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Corp"
                    data-ocid="contact-input-company"
                    autoComplete="organization"
                  />
                </div>

                {/* Country */}
                <div>
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={form.country}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="United States"
                    data-ocid="contact-input-country"
                    autoComplete="country-name"
                  />
                </div>

                {/* AI Platform */}
                <div className="relative">
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="platform"
                  >
                    Which AI Platform Do You Need?
                  </label>
                  <div className="relative">
                    <select
                      id="platform"
                      name="platform"
                      value={form.platform}
                      onChange={handleChange}
                      className={selectClass}
                      data-ocid="contact-select-platform"
                    >
                      <option value="" disabled>
                        Select a platform...
                      </option>
                      <option value="Lovable">Lovable</option>
                      <option value="Emergent">Emergent</option>
                      <option value="Caffeine">Caffeine</option>
                      <option value="GenW.AI">GenW.AI</option>
                      <option value="Horizon">Horizon</option>
                      <option value="Framer AI">Framer AI</option>
                      <option value="OpenCode AI">OpenCode AI</option>
                      <option value="Multiple Platforms">
                        Multiple Platforms
                      </option>
                      <option value="Not Sure">
                        Not Sure — Help Me Choose
                      </option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-space-grotesk"
                      style={{ color: "#94a3b8" }}
                    >
                      ▾
                    </div>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="relative">
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="budget"
                  >
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={selectClass}
                      data-ocid="contact-select-budget"
                    >
                      <option value="" disabled>
                        Select budget...
                      </option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500-$2000">$500–$2,000</option>
                      <option value="$2000-$10000">$2,000–$10,000</option>
                      <option value="$10000+">$10,000+</option>
                      <option value="Monthly Retainer">Monthly Retainer</option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-space-grotesk"
                      style={{ color: "#94a3b8" }}
                    >
                      ▾
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="timeline"
                  >
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className={selectClass}
                      data-ocid="contact-select-timeline"
                    >
                      <option value="" disabled>
                        Select timeline...
                      </option>
                      <option value="ASAP">As fast as possible</option>
                      <option value="1 week">Within 1 week</option>
                      <option value="1 month">Within 1 month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <div
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-space-grotesk"
                      style={{ color: "#94a3b8" }}
                    >
                      ▾
                    </div>
                  </div>
                </div>

                {/* Spacer to push textarea to new row (sm+ only) */}
                <div className="hidden sm:block" />

                {/* Project Description — full width */}
                <div className="col-span-1 sm:col-span-2">
                  <label
                    className="font-space-grotesk block text-sm mb-1 font-medium"
                    style={{ color: "#334155" }}
                    htmlFor="description"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project — what you want to build, features you need, any examples you love..."
                    data-ocid="contact-textarea-description"
                  />
                </div>

                {/* Submit Button — full width */}
                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full font-orbitron font-bold text-sm sm:text-base text-white py-3 sm:py-4 rounded-lg transition-all duration-200 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #00c49a)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.30)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 40px rgba(124,58,237,0.55), 0 0 80px rgba(0,196,154,0.25)";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "scale(1.01)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 20px rgba(124,58,237,0.30)";
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "scale(1)";
                    }}
                    data-ocid="contact-submit-btn"
                  >
                    Submit — Hire My AI Engineer →
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
