import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from "@/api/contactApi";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  aiProduct: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  aiProduct: "",
  message: "",
};

const SERVICE_OPTIONS = ["AI Development", "Automation", "Consulting"];

const AI_PRODUCT_OPTIONS = [
  "Chatbot",
  "Recommendation Engine",
  "Computer Vision",
];

const inputClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 placeholder:text-slate-400";

const selectClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 appearance-none cursor-pointer";

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({});

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

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.service.trim()) newErrors.service = "Service is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      await submitContactForm(form);

      toast.success("Message sent successfully");

      setForm(initialForm);
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Failed to send message");
    } finally {
      setSubmitting(false);
    }
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
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(79,142,247,0.15)",
                boxShadow:
                  "0 8px 40px rgba(79,142,247,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
              data-ocid="contact-form"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-name"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Full Name <span style={{ color: "#4f8ef7" }}>*</span>
                  </Label>
                  <Input
                    id="cu-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                    aria-invalid={!!errors.name}
                    data-ocid="contact.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="contact.name.field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-email"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Work Email <span style={{ color: "#4f8ef7" }}>*</span>
                  </Label>
                  <Input
                    id="cu-email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                    aria-invalid={!!errors.email}
                    data-ocid="contact-input-email"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="contact.email.field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-phone"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Phone{" "}
                    <span className="text-xs" style={{ color: "#9ca3af" }}>
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="cu-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                    data-ocid="contact-input-phone"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-company"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Company Name
                  </Label>
                  <Input
                    id="cu-company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11"
                    data-ocid="contact-input-company"
                  />
                </div>
              </div>

              {/* Service + AI Product — side by side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-service"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Service Interest <span style={{ color: "#4f8ef7" }}>*</span>
                  </Label>

                  <Select
                    value={form.service}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, service: value }))
                    }
                  >
                    <SelectTrigger
                      id="cu-service"
                      className="border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af] h-11"
                      aria-invalid={!!errors.service}
                      data-ocid="contact-select-service"
                    >
                      <SelectValue placeholder="Select a service…" />
                    </SelectTrigger>
                    <SelectContent className="border-[rgba(0,0,0,0.1)] bg-white text-[#1a1a2e]">
                      {SERVICE_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          className="focus:bg-[rgba(79,142,247,0.08)] focus:text-[#1a1a2e]"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="contact.service.field_error"
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-ai-product"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    AI Product{" "}
                    <span className="text-xs" style={{ color: "#9ca3af" }}>
                      (optional)
                    </span>
                  </Label>
                  <Select
                    value={form.aiProduct}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, aiProduct: value }))
                    }
                  >
                    <SelectTrigger
                      id="cu-ai-product"
                      className="border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af] h-11"
                      data-ocid="contact-select-ai-product"
                    >
                      <SelectValue placeholder="Select AI product…" />
                    </SelectTrigger>
                    <SelectContent className="border-[rgba(0,0,0,0.1)] bg-white text-[#1a1a2e]">
                      {AI_PRODUCT_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          className="focus:bg-[rgba(79,142,247,0.08)] focus:text-[#1a1a2e]"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 mb-7">
                <Label
                  htmlFor="cu-message"
                  className="text-sm font-medium"
                  style={{ color: "#374151" }}
                >
                  Your Message <span style={{ color: "#4f8ef7" }}>*</span>
                </Label>
                <Textarea
                  id="cu-message"
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific AI requirements…"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="form-field-glow resize-none border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                  aria-invalid={!!errors.message}
                  data-ocid="contact-textarea-message"
                />
                {errors.message && (
                  <p
                    className="text-xs text-red-500"
                    data-ocid="contact.message.field_error"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full gap-2 h-13 py-4 text-base font-semibold text-white transition-smooth hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
                }}
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </Button>
              <p
                className="mt-4 text-center text-xs"
                style={{ color: "#9ca3af" }}
              >
                We typically respond within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
