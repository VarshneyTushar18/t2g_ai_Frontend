import {
  isTurnstileEnabled,
  TurnstileField,
  type TurnstileFieldRef,
} from "@/components/TurnstileField";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  normalizedPhoneForLead,
  phoneValueAfterCountryChange,
  validateContactLead,
} from "@/lib/contactLeadValidation";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  company: string;
  aiProduct: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  country: "",
  phone: "",
  company: "",
  aiProduct: "",
  message: "",
};

const AI_PRODUCT_OPTIONS = [
  "Hire Lovable Developer",
  "Hire Emergent Developer",
  "Hire OpenAI Developer",
  "Hire Caffeine AI Developer",
  "Hire GenW.ai Developer",
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const COUNTRY_DIAL_CODES: Record<string, string> = {
  Afghanistan: "+93",
  Albania: "+355",
  Algeria: "+213",
  Andorra: "+376",
  Angola: "+244",
  "Antigua and Barbuda": "+1268",
  Argentina: "+54",
  Armenia: "+374",
  Australia: "+61",
  Austria: "+43",
  Azerbaijan: "+994",
  Bahamas: "+1242",
  Bahrain: "+973",
  Bangladesh: "+880",
  Barbados: "+1246",
  Belarus: "+375",
  Belgium: "+32",
  Belize: "+501",
  Benin: "+229",
  Bhutan: "+975",
  Bolivia: "+591",
  "Bosnia and Herzegovina": "+387",
  Botswana: "+267",
  Brazil: "+55",
  Brunei: "+673",
  Bulgaria: "+359",
  "Burkina Faso": "+226",
  Burundi: "+257",
  "Cabo Verde": "+238",
  Cambodia: "+855",
  Cameroon: "+237",
  Canada: "+1",
  "Central African Republic": "+236",
  Chad: "+235",
  Chile: "+56",
  China: "+86",
  Colombia: "+57",
  Comoros: "+269",
  "Costa Rica": "+506",
  Croatia: "+385",
  Cuba: "+53",
  Cyprus: "+357",
  "Czech Republic": "+420",
  "Democratic Republic of the Congo": "+243",
  Denmark: "+45",
  Djibouti: "+253",
  Dominica: "+1767",
  "Dominican Republic": "+1809",
  Ecuador: "+593",
  Egypt: "+20",
  "El Salvador": "+503",
  "Equatorial Guinea": "+240",
  Eritrea: "+291",
  Estonia: "+372",
  Eswatini: "+268",
  Ethiopia: "+251",
  Fiji: "+679",
  Finland: "+358",
  France: "+33",
  Gabon: "+241",
  Gambia: "+220",
  Georgia: "+995",
  Germany: "+49",
  Ghana: "+233",
  Greece: "+30",
  Grenada: "+1473",
  Guatemala: "+502",
  Guinea: "+224",
  "Guinea-Bissau": "+245",
  Guyana: "+592",
  Haiti: "+509",
  Honduras: "+504",
  Hungary: "+36",
  Iceland: "+354",
  India: "+91",
  Indonesia: "+62",
  Iran: "+98",
  Iraq: "+964",
  Ireland: "+353",
  Israel: "+972",
  Italy: "+39",
  Jamaica: "+1876",
  Japan: "+81",
  Jordan: "+962",
  Kazakhstan: "+7",
  Kenya: "+254",
  Kiribati: "+686",
  Kosovo: "+383",
  Kuwait: "+965",
  Kyrgyzstan: "+996",
  Laos: "+856",
  Latvia: "+371",
  Lebanon: "+961",
  Lesotho: "+266",
  Liberia: "+231",
  Libya: "+218",
  Liechtenstein: "+423",
  Lithuania: "+370",
  Luxembourg: "+352",
  Madagascar: "+261",
  Malawi: "+265",
  Malaysia: "+60",
  Maldives: "+960",
  Mali: "+223",
  Malta: "+356",
  "Marshall Islands": "+692",
  Mauritania: "+222",
  Mauritius: "+230",
  Mexico: "+52",
  Micronesia: "+691",
  Moldova: "+373",
  Monaco: "+377",
  Mongolia: "+976",
  Montenegro: "+382",
  Morocco: "+212",
  Mozambique: "+258",
  Myanmar: "+95",
  Namibia: "+264",
  Nauru: "+674",
  Nepal: "+977",
  Netherlands: "+31",
  "New Zealand": "+64",
  Nicaragua: "+505",
  Niger: "+227",
  Nigeria: "+234",
  "North Korea": "+850",
  "North Macedonia": "+389",
  Norway: "+47",
  Oman: "+968",
  Pakistan: "+92",
  Palau: "+680",
  Panama: "+507",
  "Papua New Guinea": "+675",
  Paraguay: "+595",
  Peru: "+51",
  Philippines: "+63",
  Poland: "+48",
  Portugal: "+351",
  Qatar: "+974",
  "Republic of the Congo": "+242",
  Romania: "+40",
  Russia: "+7",
  Rwanda: "+250",
  "Saint Kitts and Nevis": "+1869",
  "Saint Lucia": "+1758",
  "Saint Vincent and the Grenadines": "+1784",
  Samoa: "+685",
  "San Marino": "+378",
  "Sao Tome and Principe": "+239",
  "Saudi Arabia": "+966",
  Senegal: "+221",
  Serbia: "+381",
  Seychelles: "+248",
  "Sierra Leone": "+232",
  Singapore: "+65",
  Slovakia: "+421",
  Slovenia: "+386",
  "Solomon Islands": "+677",
  Somalia: "+252",
  "South Africa": "+27",
  "South Korea": "+82",
  "South Sudan": "+211",
  Spain: "+34",
  "Sri Lanka": "+94",
  Sudan: "+249",
  Suriname: "+597",
  Sweden: "+46",
  Switzerland: "+41",
  Syria: "+963",
  Tajikistan: "+992",
  Tanzania: "+255",
  Thailand: "+66",
  "Timor-Leste": "+670",
  Togo: "+228",
  Tonga: "+676",
  "Trinidad and Tobago": "+1868",
  Tunisia: "+216",
  Turkey: "+90",
  Turkmenistan: "+993",
  Tuvalu: "+688",
  Uganda: "+256",
  Ukraine: "+380",
  "United Arab Emirates": "+971",
  "United Kingdom": "+44",
  "United States": "+1",
  Uruguay: "+598",
  Uzbekistan: "+998",
  Vanuatu: "+678",
  "Vatican City": "+379",
  Venezuela: "+58",
  Vietnam: "+84",
  Yemen: "+967",
  Zambia: "+260",
  Zimbabwe: "+263",
};

const inputClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 placeholder:text-slate-400";

const selectClass =
  "w-full bg-white border border-black/10 focus:border-[#00c49a] focus:ring-1 focus:ring-[#00c49a] rounded-lg p-2.5 sm:p-3 outline-none transition-all duration-200 font-space-grotesk text-sm sm:text-base text-slate-700 appearance-none cursor-pointer";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});
  const [captchaError, setCaptchaError] = useState<string | undefined>();
  const turnstileRef = useRef<TurnstileFieldRef>(null);

  const selectedDialCode = COUNTRY_DIAL_CODES[form.country] || "+91";

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

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleCountryChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      country: value,
      phone: phoneValueAfterCountryChange(
        prev.phone,
        value,
        COUNTRY_DIAL_CODES,
      ),
    }));
    setErrors((prev) => ({ ...prev, country: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateContactLead(form, COUNTRY_DIAL_CODES);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const captchaToken = turnstileRef.current?.getToken() ?? undefined;
    if (isTurnstileEnabled() && !captchaToken) {
      setCaptchaError("Please complete the captcha verification.");
      return;
    }
    setCaptchaError(undefined);

    setSubmitting(true);

    try {
      const normalizedPhone = normalizedPhoneForLead(
        form.phone,
        form.country,
        COUNTRY_DIAL_CODES,
      );

      await submitContactForm({
        ...form,
        phone: normalizedPhone,
        ...(captchaToken ? { captchaToken } : {}),
      });

      toast.success("Message sent successfully");

      setForm(initialForm);
      setErrors({});
      turnstileRef.current?.reset();
      setSubmitted(true);
      navigate("/thank-you");
    } catch (err: any) {
      turnstileRef.current?.reset();
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
      className="py-8 sm:py-10 lg:py-12 relative overflow-hidden"
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
          className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight"
          style={{ color: "#0f172a" }}
        >
          Ready to Build Something{" "}
          <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p
          className="font-space-grotesk text-base md:text-lg mb-5 max-w-2xl mx-auto"
          style={{ color: "#475569" }}
        >
          Tell us your idea. We assign the right AI Engineer. Your product ships
          — fast.
        </p>

        {/* Glass Panel */}
        <div
          className="max-w-4xl mx-auto rounded-2xl p-4 sm:p-5 md:p-6 text-left"
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
              className="rounded-2xl p-5 sm:p-6 lg:p-7"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

              {/* Country + AI Product (country first so dial code can fill phone) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-country"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Country <span style={{ color: "#4f8ef7" }}>*</span>
                  </Label>
                  <Select
                    value={form.country}
                    onValueChange={handleCountryChange}
                  >
                    <SelectTrigger
                      id="cu-country"
                      className="border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] focus:ring-[#4f8ef7] data-[placeholder]:text-[#9ca3af] h-11"
                      aria-invalid={!!errors.country}
                      data-ocid="contact-select-country"
                    >
                      <SelectValue placeholder="Select your country…" />
                    </SelectTrigger>
                    <SelectContent className="border-[rgba(0,0,0,0.1)] bg-white text-[#1a1a2e]">
                      {COUNTRIES.map((country) => (
                        <SelectItem
                          key={country}
                          value={country}
                          className="focus:bg-[rgba(79,142,247,0.08)] focus:text-[#1a1a2e]"
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="contact.country.field_error"
                    >
                      {errors.country}
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
                    <span style={{ color: "#4f8ef7" }}>*</span>
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

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 items-start">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-phone"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Phone{" "}
                    <span style={{ color: "#4f8ef7" }}>*</span>
                  </Label>
                  <Input
                    id="cu-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={
                      form.country
                        ? `${selectedDialCode} 771234567`
                        : "Select country first for country code"
                    }
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="form-field-glow border-[rgba(0,0,0,0.12)] bg-white text-[#1a1a2e] placeholder:text-[#9ca3af] focus-visible:ring-[#4f8ef7] h-11 tabular-nums tracking-wide"
                    aria-invalid={!!errors.phone}
                    data-ocid="contact-input-phone"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs text-red-500"
                      data-ocid="contact.phone.field_error"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="cu-company"
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    Company Name
                    <span style={{ color: "#4f8ef7" }}>*</span>

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

              {/* Message */}
              <div className="flex flex-col gap-1.5 mb-5">
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

              <TurnstileField
                ref={turnstileRef}
                onTokenChange={() => setCaptchaError(undefined)}
              />
              {captchaError && (
                <p
                  className="text-xs text-red-500 -mt-5 mb-3"
                  data-ocid="contact.captcha.field_error"
                >
                  {captchaError}
                </p>
              )}

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
