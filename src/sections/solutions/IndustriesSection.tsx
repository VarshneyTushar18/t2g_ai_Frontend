import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SolutionData } from "@/data/solutions";
import { useState } from "react";

interface Props {
  data: SolutionData;
}

export default function IndustriesSection({ data }: Props) {
  const [activeTab, setActiveTab] = useState(data.industries[0]?.id ?? "");
  const activeIndustry =
    data.industries.find((ind) => ind.id === activeTab) ?? data.industries[0];

  if (!activeIndustry) return null;

  return (
    <section
      className="py-[60px] md:py-[40px]"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#1a1a2e", fontFamily: "var(--font-display)" }}
          >
            {data.industriesHeading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            {data.industriesSubheading}
          </p>
        </div>

        {/* Desktop: Tab UI */}
        <div className="hidden md:block">
          {/* Tab row */}
          <div
            className="flex items-center gap-2 p-1 rounded-xl mb-10 w-fit mx-auto flex-wrap justify-center"
            style={{
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {data.industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(ind.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-smooth"
                style={{
                  background:
                    activeTab === ind.id
                      ? "linear-gradient(135deg, #4f8ef7, #7c5cbf)"
                      : "transparent",
                  color: activeTab === ind.id ? "#fff" : "#6b7280",
                }}
                data-ocid={`industry-tab-${ind.id}`}
              >
                <ind.icon size={15} />
                {ind.label}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div
              className="rounded-2xl flex items-center justify-center h-72"
              style={{
                background: `linear-gradient(135deg, ${activeIndustry.color}10, rgba(124,92,191,0.06))`,
                border: `1px solid ${activeIndustry.color}22`,
              }}
            >
              <div className="text-center">
                <div className="text-8xl mb-4">
                  {activeIndustry.illustration}
                </div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: activeIndustry.color }}
                >
                  {activeIndustry.label} Intelligence
                </p>
              </div>
            </div>

            {/* Use cases */}
            <div className="space-y-6">
              {activeIndustry.useCases.map((uc, i) => (
                <div
                  key={uc.title}
                  className="flex items-start gap-4"
                  data-ocid={`industry-usecase-${i}`}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ background: activeIndustry.color }}
                  />
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
                      style={{ color: "#1a1a2e" }}
                    >
                      {uc.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6b7280" }}
                    >
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion
            type="single"
            collapsible
            defaultValue={data.industries[0]?.id}
          >
            {data.industries.map((ind) => (
              <AccordionItem
                key={ind.id}
                value={ind.id}
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <AccordionTrigger
                  className="hover:no-underline py-5"
                  style={{ color: "#1a1a2e" }}
                  data-ocid={`industry-accordion-${ind.id}`}
                >
                  <span className="flex items-center gap-3">
                    <ind.icon size={16} style={{ color: ind.color }} />
                    <span className="font-semibold">{ind.label}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5 pb-2">
                    {ind.useCases.map((uc) => (
                      <div key={uc.title} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ background: ind.color }}
                        />
                        <div>
                          <p
                            className="text-sm font-semibold mb-0.5"
                            style={{ color: "#1a1a2e" }}
                          >
                            {uc.title}
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#6b7280" }}
                          >
                            {uc.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
