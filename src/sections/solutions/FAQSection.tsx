import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SolutionData } from "@/data/solutions";
import { Plus } from "lucide-react";

interface Props {
  data: SolutionData;
}

export default function FAQSection({ data }: Props) {
  return (
    <section
      className="py-[60px] md:py-[40px]"
      style={{ background: "#f1f5f9" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {data.faqHeading}
          </h2>
          <p className="text-lg" style={{ color: "#6b7280" }}>
            {data.faqSubheading}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {data.faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl px-6 border-0"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
              data-ocid={`faq-item-${i}`}
            >
              <AccordionTrigger
                className="hover:no-underline text-left font-semibold py-5 text-base group [&>svg]:hidden"
                style={{ color: "#1a1a2e" }}
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <Plus
                  size={18}
                  className="flex-shrink-0 text-[#4f8ef7] transition-transform duration-300 group-data-[state=open]:rotate-45"
                />
              </AccordionTrigger>
              <AccordionContent
                className="leading-relaxed text-sm pb-5"
                style={{ color: "#6b7280" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
