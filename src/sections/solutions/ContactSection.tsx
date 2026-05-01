import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const AI_PRODUCT_OPTIONS = [
  "Hire Lovable Developer",
  "Hire Emergent Developer",
  "Hire OpenAI Developer",
  "Hire Caffeine AI Developer",
  "Hire GenW.ai Developer",
];
  
interface EnquiryActor {
  submitEnquiry?: (input: EnquiryInput) => Promise<bigint>;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  aiProduct: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "AI Integration",
  "Agentic AI",
  "Workflow Automation",
  "AI Chatbot"
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@tech2globe.com",
    href: "mailto:info@tech2globe.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1-516-858-5840",
    href: "tel:+15168585840",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "1538, Old Country Road, Plainview, New York, United State - 11803",
    href: "#",
  },
];

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  aiProduct: "",
  message: "",
};

function validate(
  data: ContactFormData,
): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email.";
  if (!data.service) errors.service = "Please select a service.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactSection() {
  const { actor } = useActor(createActor);
  const enquiryActor = actor as unknown as EnquiryActor | null;
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [submitting, setSubmitting] = useState(false);

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      if (enquiryActor && typeof enquiryActor.submitEnquiry === "function") {
        await enquiryActor.submitEnquiry({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          message: form.message,
        });
      }
      toast.success("Enquiry submitted! We will be in touch shortly.");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16"
      style={{ background: "#f8fafc" }}
    >
      {/* Static decorative blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,191,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(79,142,247,0.08)",
              border: "1px solid rgba(79,142,247,0.25)",
              color: "#4f8ef7",
            }}
          >
            Contact Us
          </span>
          <h2
            className="mt-4 text-4xl font-bold sm:text-5xl"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            Get <span style={{ color: "#4f8ef7" }}>In Touch</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "#6b7280" }}
          >
            Tell us about your project and we'll reach out within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: description + contact detail cards */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3
                className="mb-4 text-2xl font-bold"
                style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
              >
                We'd love to hear from you
              </h3>
              <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                Whether you're exploring AI solutions, ready to start a project,
                or simply want to learn more — our team of experts is here to
                help you build smarter, scale faster, and stay ahead of the
                curve.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-xl p-4 transition-smooth hover:scale-[1.02]"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(79,142,247,0.12)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  data-ocid={`contact-detail-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      border: "1px solid rgba(79,142,247,0.2)",
                    }}
                  >
                    <Icon size={20} color="#4f8ef7" />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#4f8ef7" }}
                    >
                      {label}
                    </p>
                    <p
                      className="truncate text-sm"
                      style={{ color: "#1a1a2e" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(79,142,247,0.06) 0%, rgba(124,92,191,0.04) 50%, transparent 80%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-5 sm:p-6"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(79,142,247,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              data-ocid="contact-form"
            >
              {/* Name + Email */}
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    Full Name <span className="text-[#4f8ef7]">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                    aria-invalid={!!errors.name}
                    data-ocid="contact-input-name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    Email <span className="text-[#4f8ef7]">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                    aria-invalid={!!errors.email}
                    data-ocid="contact-input-email"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Company */}
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    Phone{" "}
                    <span className="text-xs" style={{ color: "#9ca3af" }}>
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                    data-ocid="contact-input-phone"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-company"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    Company
                  </Label>
                  <Input
                    id="contact-company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                    data-ocid="contact-input-company"
                  />
                </div>
              </div>

              {/* Service + AI Product — side by side on desktop, stacked on mobile */}
              <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-service"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    Service <span className="text-[#4f8ef7]">*</span>
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(val) => handleChange("service", val)}
                  >
                    <SelectTrigger
                      id="contact-service"
                      className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af]"
                      aria-invalid={!!errors.service}
                      data-ocid="contact-select-service"
                    >
                      <SelectValue placeholder="Select a service…" />
                    </SelectTrigger>
                    <SelectContent className="border-[rgba(0,0,0,0.1)] text-[#1a1a2e] bg-white">
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
                    <p className="text-xs text-red-500">{errors.service}</p>
                  )}
                </div>

                {/* AI Product */}
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-ai-product"
                    className="text-sm"
                    style={{ color: "#374151" }}
                  >
                    AI Product{" "}
                    <span className="text-xs" style={{ color: "#9ca3af" }}>
                      (optional)
                    </span>
                  </Label>
                  <Select
                    value={form.aiProduct}
                    onValueChange={(val) => handleChange("aiProduct", val)}
                  >
                    <SelectTrigger
                      id="contact-ai-product"
                      className="border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af]"
                      data-ocid="contact-select-ai-product"
                    >
                      <SelectValue placeholder="Select AI Product" />
                    </SelectTrigger>
                    <SelectContent className="border-[rgba(0,0,0,0.1)] text-[#1a1a2e] bg-white">
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
              <div className="mb-7 flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm"
                  style={{ color: "#374151" }}
                >
                  Message <span className="text-[#4f8ef7]">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements…"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="resize-none border-[rgba(0,0,0,0.15)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7]"
                  aria-invalid={!!errors.message}
                  data-ocid="contact-textarea-message"
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full gap-2 py-6 text-base font-semibold text-white transition-smooth hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                  border: "none",
                }}
                data-ocid="contact-submit"
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
                  "Send Message"
                )}
              </Button>

              <p
                className="mt-4 text-center text-xs"
                style={{ color: "#9ca3af" }}
              >
                We typically respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
