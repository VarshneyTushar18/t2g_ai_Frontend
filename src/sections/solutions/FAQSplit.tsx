import { Plus } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSplitProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
}

export function FAQSplit({
  faqs,
  heading = "Got Questions?",
  subheading = "We've got answers. Browse our most frequently asked questions or reach out to our team for a direct conversation.",
}: FAQSplitProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section style={{ background: "#f8fafc" }}>
      <div
        style={{ paddingTop: 50, paddingBottom: 50 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section header */}
        <div className="mb-10 max-w-2xl">
          <span
            className="font-body font-semibold tracking-widest"
            style={{
              fontSize: 11,
              color: "#4f8ef7",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Frequently Asked
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{
              fontSize: 42,
              lineHeight: 1.15,
              marginBottom: 16,
              color: "#1a1a2e",
            }}
          >
            {heading}
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: 16,
              color: "#6b7280",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            {subheading}
          </p>
        </div>

        {/* FAQ accordion — full width */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                data-ocid={`faq.item.${idx + 1}`}
                style={{
                  background: "#ffffff",
                  border: isOpen
                    ? "1px solid rgba(79,142,247,0.3)"
                    : "1px solid rgba(0,0,0,0.08)",
                  borderLeft: isOpen
                    ? "3px solid #4f8ef7"
                    : "3px solid transparent",
                  borderRadius: 10,
                  overflow: "hidden",
                  transition: "border 0.22s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Question row */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between font-body text-left"
                  style={{
                    padding: "18px 20px",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    gap: 12,
                  }}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  data-ocid={`faq.toggle.${idx + 1}`}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: isOpen ? "#1a1a2e" : "#374151",
                      transition: "color 0.2s",
                      lineHeight: 1.45,
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      color: isOpen ? "#4f8ef7" : "#6b7280",
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.22s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus size={18} />
                  </span>
                </button>

                {/* Answer — CSS max-height transition */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    className="font-body"
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.75,
                      padding: "0 20px 18px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
