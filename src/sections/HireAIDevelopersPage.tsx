import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Brain,
  Building2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  Heart,
  Layers,
  LineChart,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  Network,
  RefreshCw,
  Search,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// ── Design tokens ───────────────────────────────────────────────────────────
const ACCENT = "#7c3aed";
const ACCENT_SOFT = "rgba(124,58,237,0.08)";
const ACCENT_BORDER = "rgba(124,58,237,0.2)";
const DARK_BG = "#1e1b4b";

// ── NLP Data ────────────────────────────────────────────────────────────────
const nlpServices = [
  {
    icon: TrendingUp,
    title: "Sentiment Analysis & Opinion Mining",
    description:
      "Gain an accurate, quantified view of customer perception with NLP-powered sentiment analysis. Our AI developers build real-time sentiment pipelines that analyse brand mentions, product reviews, support tickets, and social media — delivering actionable insights that marketing, product, and CX teams can act on immediately.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Processing",
    description:
      "Accelerate processing times and eliminate manual data entry with NLP-driven document automation. Systems capable of extracting structured data from contracts, invoices, medical records, regulatory filings, and forms — at scale, with accuracy rates that outperform manual review by a significant margin.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Chatbots",
    description:
      "Enable intelligent self-service and enhance digital customer experiences with conversational AI systems. Our NLP developers design and train domain-specific language models tailored to your vocabulary, use cases, and tone — delivering chatbots and virtual assistants that resolve queries, qualify leads, and escalate intelligently.",
  },
  {
    icon: Search,
    title: "Named Entity Recognition & Information Extraction",
    description:
      "Extract precisely defined entities — names, dates, locations, product codes, financial figures, medical terms — from large-scale text corpora with high precision. NLP pipelines that continuously monitor document streams and surface structured insights without manual review.",
  },
  {
    icon: Mic,
    title: "Speech Recognition & Voice AI",
    description:
      "Convert spoken language into structured, machine-actionable text with enterprise-grade accuracy using advanced automatic speech recognition (ASR) architectures. Custom ASR models for noisy environments, domain-specific vocabulary, multiple accents, and real-time or batch processing requirements.",
  },
  {
    icon: Globe,
    title: "Multilingual NLP & Real-Time Translation",
    description:
      "Break language barriers with NLP systems that understand, generate, and translate across 50+ languages. Multilingual pipelines that enable global customer support, cross-market content generation, and real-time interpretation — serving a genuinely global user base without quality degradation.",
  },
];

const nlpFeatures = [
  {
    title: "Hardware-Agnostic Architecture",
    description:
      "Full support for all hardware platforms and AI/ML frameworks — from GPU-accelerated on-prem inference clusters to serverless cloud functions.",
  },
  {
    title: "Modern MLOps & CI/CD Pipelines",
    description:
      "Automated model training, evaluation, versioning, and deployment pipelines that keep NLP systems current, observable, and continuously improving.",
  },
  {
    title: "Cloud-Agnostic Deployment",
    description:
      "Deploy to Azure, AWS, GCP, or hybrid multi-cloud environments — with zero architectural lock-in and seamless failover capabilities.",
  },
  {
    title: "Explainable AI & Audit Trails",
    description:
      "Every NLP prediction comes with interpretability layers, confidence scores, and audit-ready logging — essential for regulated industries and enterprise governance.",
  },
];

const nlpWhyUs = [
  {
    title: "Cutting-Edge Technical Expertise",
    description:
      "Our NLP engineers are fluent in Transformers, BERT, RoBERTa, spaCy, Hugging Face, and the latest LLM-based language architectures — applying industry best practices on every engagement.",
  },
  {
    title: "Deep Business Acumen",
    description:
      "Our engineers translate client requirements into effective NLP solutions with a thorough understanding of business operations across healthcare, finance, retail, legal, and media.",
  },
  {
    title: "MLOps-First Integration",
    description:
      "Every NLP solution is built on MLOps best practices — ensuring scalable, reliable, low-maintenance systems that minimise downtime and maximise operational efficiency.",
  },
  {
    title: "Client-Centred Approach",
    description:
      "We treat every project as a unique business case. Our consultants work closely with clients to identify root causes and optimal NLP solutions — delivering maximum, measurable value.",
  },
];

const nlpTechStack = [
  {
    label: "Models",
    items: ["BERT", "RoBERTa", "GPT-4o", "LLaMA 3", "Mistral", "Falcon"],
  },
  {
    label: "Frameworks",
    items: [
      "Hugging Face",
      "spaCy",
      "NLTK",
      "LangChain",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    label: "Infrastructure",
    items: ["AWS SageMaker", "Azure ML", "GCP Vertex AI", "MLflow", "Kubeflow"],
  },
  {
    label: "Deployment",
    items: [
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Triton Inference",
      "ONNX Runtime",
    ],
  },
];

const nlpFaqs = [
  {
    q: "What is natural language processing and why does my business need it?",
    a: "Natural language processing (NLP) is an AI discipline that makes human language — text or speech — intelligible, searchable, and actionable for machines. Businesses need NLP to automate document processing, power intelligent chatbots, analyse customer sentiment at scale, extract structured data from unstructured sources, and build voice-enabled products. When you hire AI developers specialising in NLP, you unlock the ability to process language-based information at a scale and speed that manual methods cannot approach.",
  },
  {
    q: "How is NLP different from a standard chatbot or keyword search?",
    a: "Standard chatbots use rule-based scripts; keyword search finds exact matches. NLP systems understand semantic meaning, contextual intent, entity relationships, and nuanced language patterns — enabling them to handle ambiguous queries, multi-turn conversations, and complex document analysis that simple rule-based systems fail at entirely.",
  },
  {
    q: "What industries benefit most from NLP services?",
    a: "Healthcare (clinical documentation, EHR analysis, patient triage), financial services (contract analysis, regulatory compliance, fraud detection), legal (document review, case research), retail (product search, review analysis, personalisation), and media (content categorisation, automated summarisation) all benefit enormously from NLP. Our team has delivered production NLP systems across all of these verticals.",
  },
];

// ── AI Agents Data ───────────────────────────────────────────────────────────
const agentServices = [
  {
    icon: Bot,
    title: "Custom AI Agent Development",
    description:
      "We design bespoke autonomous agents tailored to your specific workflow requirements — from single-task specialists to complex multi-agent orchestrations that handle entire business processes end-to-end.",
  },
  {
    icon: Network,
    title: "Multi-Agent System Architecture",
    description:
      "Deploy networks of specialised agents that communicate, collaborate, and hand off tasks to each other — enabling parallel processing of complex, multi-step enterprise workflows at scale.",
  },
  {
    icon: Wrench,
    title: "Tool-Use & Function Calling",
    description:
      "Our agents are equipped with tools — web search, database queries, API calls, code execution, file management — enabling them to interact with your existing systems and data sources autonomously.",
  },
  {
    icon: Brain,
    title: "Memory & Context Management",
    description:
      "Build agents with short-term working memory, long-term persistent memory, and episodic recall — enabling them to maintain context across sessions and learn from historical interactions over time.",
  },
  {
    icon: Database,
    title: "RAG-Powered Knowledge Agents",
    description:
      "Ground every agent response in your proprietary knowledge base with retrieval-augmented generation pipelines — eliminating hallucinations and ensuring every output is accurate, sourced, and auditable.",
  },
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description:
      "Replace manual, repetitive operational processes with intelligent automation pipelines that connect AI agents to your CRMs, ERPs, data warehouses, and communication platforms — running autonomously at any volume.",
  },
  {
    icon: LineChart,
    title: "Agent Monitoring & Observability",
    description:
      "Every agent deployment includes full observability stacks — logging, tracing, alerting, and performance dashboards — so your team can monitor agent behaviour, detect anomalies, and optimise in real time.",
  },
  {
    icon: Mic,
    title: "Voice & Conversational Agents",
    description:
      "Deploy voice-enabled AI agents for customer service, internal helpdesks, and sales support — combining speech recognition, NLP, and agentic reasoning for natural, context-aware interactions at any scale.",
  },
  {
    icon: Cpu,
    title: "Domain-Specific Agent Fine-Tuning",
    description:
      "Adapt foundation model-powered agents to your specific industry vocabulary, regulatory requirements, and workflow patterns through targeted fine-tuning — ensuring agents speak your business language from day one.",
  },
];

const agentWhyUs = [
  {
    title: "Agentic Framework Expertise",
    description:
      "Fluent in LangGraph, AutoGen, CrewAI, Semantic Kernel, and OpenAI Assistants API — our engineers select the right framework architecture for each specific use case rather than applying a one-size-fits-all approach.",
  },
  {
    title: "Production-Grade Reliability",
    description:
      "Every agent system undergoes rigorous testing including adversarial input testing, edge-case simulation, and load testing before deployment — ensuring zero-downtime, predictable behaviour at production scale.",
  },
  {
    title: "Security & Governance First",
    description:
      "Agent systems are built with prompt injection defences, data access controls, audit logging, and compliance guardrails baked in from the architecture phase — not bolted on after deployment.",
  },
  {
    title: "Full Observability Stack",
    description:
      "Real-time monitoring dashboards, agent trace logging, anomaly detection alerts, and performance optimisation support ensure your agent systems remain reliable and continuously improve in production.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "We deliver working AI agent prototypes within 3–5 business days — enabling rapid validation of your use case before committing to full-scale production development and infrastructure investment.",
  },
  {
    title: "Seamless System Integration",
    description:
      "Our agents integrate with virtually any modern tech stack — REST APIs, GraphQL, SQL/NoSQL databases, Salesforce, HubSpot, Slack, Microsoft 365, and custom enterprise systems — without requiring architectural rebuilds.",
  },
];

const agentTechStack = [
  {
    label: "Agent Frameworks",
    items: [
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "Semantic Kernel",
      "OpenAI Assistants",
    ],
  },
  {
    label: "LLM Providers",
    items: [
      "GPT-4o",
      "Claude 3.5",
      "Gemini 1.5",
      "LLaMA 3",
      "Mixtral",
      "Mistral",
    ],
  },
  {
    label: "Memory & Storage",
    items: ["Pinecone", "Weaviate", "Qdrant", "Redis", "pgvector", "ChromaDB"],
  },
  {
    label: "Observability",
    items: [
      "LangSmith",
      "Weights & Biases",
      "Datadog",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    label: "Deployment",
    items: [
      "AWS Lambda",
      "Azure Container Apps",
      "GCP Cloud Run",
      "Kubernetes",
      "Docker",
    ],
  },
];

const agentIndustries = [
  {
    icon: TrendingUp,
    title: "Financial Services & FinTech",
    description:
      "Automated loan underwriting agents, fraud detection pipelines, regulatory compliance monitors, trade reconciliation bots, and AI-powered client onboarding systems that reduce manual processing time by 70% or more.",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description:
      "Clinical documentation agents, patient triage and routing bots, insurance pre-authorisation automation, medical literature mining systems, and EHR data extraction pipelines — all built with HIPAA compliance at the core.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description:
      "AI agents for inventory management, dynamic pricing optimisation, personalised product recommendation, customer service automation, and supplier communication — operating 24/7 without human intervention.",
  },
  {
    icon: Lock,
    title: "Legal & Compliance",
    description:
      "Contract review and risk flagging agents, regulatory change monitoring systems, due diligence automation pipelines, and compliance reporting bots — reducing legal review time by orders of magnitude.",
  },
  {
    icon: Users,
    title: "HR & Talent Operations",
    description:
      "Automated CV screening agents, interview scheduling bots, onboarding workflow managers, employee query resolution systems, and performance data analysis pipelines — freeing HR teams for strategic work.",
  },
  {
    icon: Sparkles,
    title: "Sales & Marketing",
    description:
      "AI-powered lead qualification agents, personalised outreach automation, campaign performance analysis bots, competitor monitoring systems, and content generation pipelines — all operating autonomously at scale.",
  },
];

const agentProcess = [
  {
    num: "01",
    title: "Discovery & Use Case Scoping",
    description:
      "Free consultation to define your target workflow, data sources, integration requirements, success metrics, and business goals. Precise scoping prevents expensive rework and ensures the agent architecture fits your actual operational context from day one.",
  },
  {
    num: "02",
    title: "Agent Architecture Design",
    description:
      "Our senior AI architects design the agent topology, tool suite, memory architecture, reasoning strategy, and orchestration schema. Every architectural decision is documented, justified, and reviewed against your specific requirements before a single line of code is written.",
  },
  {
    num: "03",
    title: "Development, Integration & Testing",
    description:
      "Senior AI agent developers build, integrate, and test the agent system using production-grade coding standards. Components are code-reviewed for correctness, security, and performance. Adversarial testing ensures agents handle edge cases reliably.",
  },
  {
    num: "04",
    title: "Security, Compliance & Quality Assurance",
    description:
      "Full security audits, prompt injection testing, data access control reviews, GDPR/SOC 2 compliance checks, and load testing before any production deployment. Enterprise-grade rigour, applied on every single engagement.",
  },
  {
    num: "05",
    title: "Deployment, Handover & Ongoing Support",
    description:
      "Complete production deployment, full technical documentation, observability stack setup, and 100% code ownership transfer. Flexible post-launch support packages cover performance optimisation, new tool integrations, and model upgrades.",
  },
];

const agentFaqs = [
  {
    q: "What exactly is an AI agent and how is it different from a chatbot?",
    a: "An AI agent is an autonomous system that perceives its environment, makes decisions, executes multi-step actions, and adapts based on outcomes — without human direction at each step. A chatbot responds to individual messages; an AI agent pursues goals across multiple tools, systems, and sessions. When you hire AI agent developer talent, you get engineers who design systems with genuine autonomy, memory, and tool-use capability — not just scripted response flows.",
  },
  {
    q: "How quickly can AI agents be deployed in production?",
    a: "Simple, well-scoped AI agents are typically deployed within 5–10 business days. Complex multi-agent systems with custom tool integrations, fine-tuned models, and enterprise compliance requirements generally take 3–6 weeks. Our hire AI developers model eliminates onboarding lag and delivers production-ready agent systems 8–12x faster than traditional in-house development timelines.",
  },
  {
    q: "Are AI agents secure enough for enterprise use?",
    a: "Yes — when built correctly by specialists who prioritise security from the architecture phase. Our AI agent developer team implements prompt injection defences, data access controls, API rate limiting, full audit logging, and compliance guardrails on every deployment. We conduct adversarial testing before launch and provide ongoing security monitoring as part of post-launch support packages.",
  },
];

// ── LLM Data ─────────────────────────────────────────────────────────────────
const llmCapabilities = [
  {
    icon: Brain,
    title: "Domain-Adaptive Pre-Training",
    description:
      "Curate and enrich your proprietary data to create fine-tuned foundation models or efficient adapter layers that speak your industry's language — boosting accuracy, relevance, and consistency out of the box without the cost of full model retraining.",
  },
  {
    icon: Search,
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Fuse your internal knowledge bases with frontier LLMs to produce grounded, citation-rich responses that dramatically reduce hallucinations and build user trust. Both standard and advanced RAG architectures — including hybrid search, re-ranking, and contextual compression.",
  },
  {
    icon: Layers,
    title: "Multi-Modal Intelligence",
    description:
      "Combine text, images, audio, and structured data within unified model pipelines to unlock new cross-modal workflows — from automated radiology report generation and visual product search to document image extraction and video content analysis at scale.",
  },
  {
    icon: Shield,
    title: "Guardrails & Regulatory Compliance",
    description:
      "Embed policy, safety, and governance filters into every prompt and every response to meet HIPAA, GDPR, SOC 2, or custom enterprise compliance standards. Compliance-first LLM architectures as a core engineering requirement, not an afterthought.",
  },
  {
    icon: LineChart,
    title: "Model Evaluation & Observatory",
    description:
      "Continuous automated testing, bias detection, fairness audits, and performance dashboards ensure your LLMs remain accurate, fair, and secure across the full model lifecycle — from initial deployment through every subsequent version update.",
  },
  {
    icon: Zap,
    title: "Scalable MLOps & Cost Optimisation",
    description:
      "Deploy on-prem, in VPC, or as a fully managed cloud service with intelligent routing, autoscaling, caching, and cost controls that keep your LLM initiatives financially sustainable and operationally reliable at any traffic volume.",
  },
];

const llmServices = [
  {
    title: "LLM Strategy & Feasibility Consulting",
    description:
      "Assess your data readiness, define success metrics, and craft a roadmap that aligns LLM investments with concrete business KPIs. Actionable strategies — not generic AI playbooks.",
  },
  {
    title: "Custom Model Development & Fine-Tuning",
    description:
      "Design proprietary model architectures or adapt leading open-source and commercial base models to your unique domain data, specialised vocabulary, and multilingual requirements — with full performance benchmarking.",
  },
  {
    title: "Data Engineering & Governance",
    description:
      "Implement secure data pipelines, labelling standards, data lineage tracking, and quality controls to ensure the training and retrieval data powering your LLMs is accurate, compliant, and continuously improving.",
  },
  {
    title: "Evaluation, Safety & Compliance",
    description:
      "Deploy continuous red-team testing, adversarial prompt simulation, bias audits, and policy guardrails to meet regulatory and ethical obligations — including HIPAA, GDPR, CCPA, and AI Act compliance requirements.",
  },
  {
    title: "Deployment, MLOps & Cost Control",
    description:
      "Containerised, cloud-agnostic LLM deployment with intelligent request routing, autoscaling, caching layers, and real-time cost and performance monitoring — keeping your AI infrastructure efficient and predictable.",
  },
  {
    title: "Lifecycle Management & Continuous Improvement",
    description:
      "Ongoing model retraining schedules, data drift detection, performance regression testing, and feature enhancement ensure your LLMs remain current, competitive, and aligned with your evolving business requirements.",
  },
];

const llmIndustries = [
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description:
      "Clinical documentation agents generate concise, accurate notes from physician-patient dialogues — saving up to 2 hours per clinician per shift. Care-plan personalisation engines leverage patient history and clinical guidelines for individualised treatment recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Financial Services & Insurance",
    description:
      "Automated claims adjudication systems interpret policy language and detect anomalies for faster, more accurate approvals. Personalised member communications improve satisfaction scores and reduce call centre volume.",
  },
  {
    icon: Users,
    title: "Healthcare Operations & Patient Engagement",
    description:
      "24/7 AI-powered symptom triage bots route patients to the appropriate care level — reducing phone-centre load by up to 40%. Insurance pre-authorisation agents auto-populate payer forms with evidence-backed justifications.",
  },
  {
    icon: Code2,
    title: "Software Development & IT Operations",
    description:
      "LLM-powered code assistants accelerate development by up to 30% by generating secure, context-aware code snippets from natural language queries. Knowledge management systems provide contextual search across wikis, tickets, and logs.",
  },
  {
    icon: MessageSquare,
    title: "Customer Operations & Service",
    description:
      "Conversational AI systems handle Tier-1 customer queries with 24/7 availability and human-level understanding. Agent assist tools provide real-time suggestions that cut average handle time by 25%.",
  },
  {
    icon: Sparkles,
    title: "Life Sciences & Pharmaceutical R&D",
    description:
      "Literature mining agents scan millions of publications to identify novel biomarkers, trial endpoints, and competitive intelligence. Generative protocol optimisation tools propose adaptive trial designs that reduce time-to-market by months.",
  },
];

const llmTechStack = [
  {
    label: "Foundation Models",
    items: [
      "GPT-4o",
      "Claude 3.5 Sonnet",
      "Gemini 1.5 Pro",
      "LLaMA 3.1",
      "Mistral Large",
      "Mixtral",
    ],
  },
  {
    label: "Fine-Tuning",
    items: ["LoRA / QLoRA", "PEFT", "DPO", "RLHF", "Axolotl", "Unsloth"],
  },
  {
    label: "RAG & Search",
    items: [
      "LangChain",
      "LlamaIndex",
      "Weaviate",
      "Pinecone",
      "Elasticsearch",
      "pgvector",
    ],
  },
  {
    label: "Evaluation",
    items: [
      "RAGAS",
      "DeepEval",
      "Promptfoo",
      "Weights & Biases",
      "MLflow",
      "Arize",
    ],
  },
  {
    label: "Deployment",
    items: [
      "vLLM",
      "TGI",
      "Triton Inference",
      "BentoML",
      "AWS Bedrock",
      "Azure OpenAI",
    ],
  },
];

const llmFaqs = [
  {
    q: "What is LLM engineering and how is it different from simply using a GPT API?",
    a: "LLM engineering encompasses the full stack required to build reliable, production-grade large language model applications — including data engineering, fine-tuning, RAG pipeline architecture, prompt engineering, guardrail implementation, evaluation frameworks, MLOps, cost optimisation, and lifecycle management. Simply calling a GPT API creates a brittle prototype. When you hire LLM engineer specialists, you get production systems that are accurate, secure, auditable, and economically sustainable at enterprise scale.",
  },
  {
    q: "When should I fine-tune an LLM versus using RAG?",
    a: "Fine-tuning is appropriate when your use case requires domain-specific language patterns, consistent output formats, or specialised reasoning that prompt engineering alone cannot reliably produce. RAG is appropriate when you need responses grounded in specific, frequently updated proprietary knowledge. In many enterprise deployments, our team implements both — using RAG for knowledge retrieval and fine-tuning for output style and domain accuracy.",
  },
  {
    q: "How do you ensure LLM outputs are compliant with GDPR, HIPAA, or SOC 2?",
    a: "Compliance is architected at the system level — not applied as a post-deployment filter. Our team implements data handling controls, PHI/PII detection and redaction layers, output policy guardrails, full audit logging, access control enforcement, and data retention policies aligned with your regulatory obligations from the very first architecture design session. We also conduct ongoing compliance audits as part of our lifecycle management service.",
  },
];

// ── Shared sub-components ────────────────────────────────────────────────────

function StatCard({
  value,
  label,
  index,
}: { value: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-xl px-6 py-5 flex flex-col items-center text-center bg-white"
      style={{
        border: `1px solid ${ACCENT_BORDER}`,
        boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
      }}
      data-ocid={`stats.item.${index + 1}`}
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

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  ocidPrefix,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  ocidPrefix: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="card-service rounded-xl p-6"
      data-ocid={`${ocidPrefix}.item.${index + 1}`}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: ACCENT_SOFT,
          border: `1px solid ${ACCENT_BORDER}`,
        }}
      >
        <Icon className="w-5 h-5" style={{ color: ACCENT }} />
      </div>
      <h3 className="font-display font-bold text-base text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function TechStackRow({
  label,
  items,
  index,
}: { label: string; items: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-3 items-start py-3 border-b border-border last:border-0"
      data-ocid={`techstack.row.${index + 1}`}
    >
      <div className="flex-shrink-0 sm:w-44">
        <span
          className="inline-flex px-3 py-1 rounded-md text-xs font-bold text-white"
          style={{ background: ACCENT }}
        >
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-md font-medium"
            style={{
              background: ACCENT_SOFT,
              color: "#5b21b6",
              border: `1px solid ${ACCENT_BORDER}`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function FAQItem({
  q,
  a,
  index,
  ocidPrefix,
}: { q: string; a: string; index: number; ocidPrefix: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border last:border-0"
      data-ocid={`${ocidPrefix}.faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer"
        aria-expanded={open}
        data-ocid={`${ocidPrefix}.faq.toggle.${index + 1}`}
      >
        <span
          className="font-display font-semibold text-sm md:text-base text-foreground transition-colors duration-200"
          style={{ ...(open ? { color: ACCENT } : {}) }}
        >
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="pb-4 text-sm text-muted-foreground font-body leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

function SectionDivider({
  title,
  tagline,
}: { title: string; tagline: string }) {
  return (
    <div
      className="relative py-14 overflow-hidden"
      style={{ background: DARK_BG }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(167,139,250,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-base" style={{ color: "#a78bfa" }}>
            {tagline}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ── Contact Form ─────────────────────────────────────────────────────────────
const initialFormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          Your project brief has been received. We'll get back to you within 24
          hours.
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
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="ai-name"
        >
          Full Name <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="ai-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="ai-email"
        >
          Email Address <span style={{ color: ACCENT }}>*</span>
        </label>
        <input
          id="ai-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="ai-company"
        >
          Company Name{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="ai-company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
          style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
          data-ocid="contact.input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="ai-projectType"
          >
            Project Type
          </label>
          <select
            id="ai-projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.select"
          >
            <option value="">Select Project Type</option>
            <option value="nlp">NLP Development</option>
            <option value="agent">AI Agent Development</option>
            <option value="llm">LLM Engineering</option>
            <option value="generative">Generative AI</option>
            <option value="consultation">AI Consultation</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-foreground mb-1.5"
            htmlFor="ai-budget"
          >
            Budget Range
          </label>
          <select
            id="ai-budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none transition-colors duration-200 focus:ring-2"
            style={{ "--tw-ring-color": ACCENT } as React.CSSProperties}
            data-ocid="contact.select"
          >
            <option value="">Select Budget Range</option>
            <option value="under5k">Under $5,000</option>
            <option value="5to15k">$5,000 - $15,000</option>
            <option value="15to50k">$15,000 - $50,000</option>
            <option value="50kplus">$50,000+</option>
            <option value="notsure">Not Sure Yet</option>
          </select>
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-semibold text-foreground mb-1.5"
          htmlFor="ai-message"
        >
          Message / Project Description
        </label>
        <textarea
          id="ai-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your AI project, goals, and timeline..."
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
        Send My Project Brief
      </button>
    </form>
  );
}

// ── Sticky Tab Bar ────────────────────────────────────────────────────────────
function StickyTabBar({
  activeTab,
  onTabClick,
}: { activeTab: string; onTabClick: (id: string) => void }) {
  const tabs = [
    { id: "nlp-section", label: "NLP Services", color: "#7c3aed" },
    { id: "ai-agents-section", label: "AI Agents", color: "#0ea5e9" },
    { id: "llm-section", label: "LLM Engineering", color: "#10b981" },
  ];
  return (
    <div
      className="sticky top-16 z-40 bg-white border-b shadow-sm"
      data-ocid="discipline.tabs"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-0 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabClick(tab.id)}
              className="flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 cursor-pointer"
              style={{
                borderBottomColor:
                  activeTab === tab.id ? tab.color : "transparent",
                color: activeTab === tab.id ? tab.color : "#6b7280",
                background:
                  activeTab === tab.id ? `${tab.color}08` : "transparent",
              }}
              data-ocid={`discipline.tab.${tab.id}`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: tab.color }}
              />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function HireAIDevelopersPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("nlp-section");
  const nlpRef = useRef<HTMLDivElement>(null);
  const agentsRef = useRef<HTMLDivElement>(null);
  const llmRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const el = document.querySelector("#ai-contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const refs = [
      { ref: nlpRef, id: "nlp-section" },
      { ref: agentsRef, id: "ai-agents-section" },
      { ref: llmRef, id: "llm-section" },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const found = refs.find((r) => r.ref.current === entry.target);
            if (found) setActiveTab(found.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    for (const { ref } of refs) {
      if (ref.current) observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(109,40,217,0.05) 0%, transparent 55%), #fff",
        }}
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: ACCENT_SOFT,
                    color: "#5b21b6",
                    border: `1px solid ${ACCENT_BORDER}`,
                  }}
                >
                  NLP • AI Agents • LLM Engineering
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-headline mb-5 text-foreground"
                data-ocid="hero.headline"
              >
                Hire <span style={{ color: ACCENT }}>AI Developers</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lead text-muted-foreground mb-3 font-semibold"
              >
                Build Intelligently. Automate Fearlessly. Scale Without Limits.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-muted-foreground font-body mb-3 leading-relaxed"
              >
                Expert AI Developers | NLP Engineers | AI Agent Specialists |
                LLM Engineers | Generative AI Architects
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base text-muted-foreground font-body mb-8 leading-relaxed max-w-xl"
              >
                Our team of certified AI engineers — spanning natural language
                processing, autonomous AI agents, large language model
                engineering, and generative AI product development — delivers
                production-grade intelligent systems that create measurable
                business value from the very first deployment.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-start"
              >
                <Button
                  className="px-8 py-3 text-base h-auto font-semibold text-white rounded-md transition-smooth active:scale-95"
                  style={{ background: ACCENT }}
                  onClick={() => navigate("/ai-expert")}
                  data-ocid="hero.primary_button"
                >
                  Get a Free Consultation{" "}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 text-base h-auto"
                  onClick={() => navigate("/hire-us")}
                  data-ocid="hero.secondary_button"
                >
                  View Our Services
                </Button>
              </motion.div>
            </div>

            {/* Right — Glassmorphism service tiles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-4"
            >
              {[
                {
                  icon: Brain,
                  label: "NLP Intelligence",
                  stat: "50+ NLP Specialists",
                  color: "#7c3aed",
                  bg: "rgba(124,58,237,0.06)",
                },
                {
                  icon: Bot,
                  label: "AI Agent Systems",
                  stat: "Multi-step autonomous workflows",
                  color: "#0ea5e9",
                  bg: "rgba(14,165,233,0.06)",
                },
                {
                  icon: Cpu,
                  label: "LLM Engineering",
                  stat: "Enterprise-grade LLM solutions",
                  color: "#10b981",
                  bg: "rgba(16,185,129,0.06)",
                },
              ].map((tile, i) => (
                <motion.div
                  key={tile.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  className="rounded-2xl p-5 flex items-center gap-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(124,58,237,0.15)",
                    boxShadow:
                      "0 4px 24px rgba(124,58,237,0.09), 0 1px 3px rgba(0,0,0,0.05)",
                  }}
                  data-ocid={`hero.service_tile.${i + 1}`}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: tile.bg,
                      border: `1px solid ${tile.color}30`,
                    }}
                  >
                    <tile.icon
                      className="w-7 h-7"
                      style={{ color: tile.color }}
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-base text-foreground">
                      {tile.label}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      {tile.stat}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span
                      className="w-2 h-2 rounded-full block animate-pulse"
                      style={{ background: tile.color }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Mini stats row */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { val: "500+", label: "AI Projects" },
                  { val: "100%", label: "Code Ownership" },
                  { val: "3 Days", label: "MVP Turnaround" },
                  { val: "8-12×", label: "Faster Dev" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-4 text-center bg-white"
                    style={{
                      border: `1px solid ${ACCENT_BORDER}`,
                      boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                    }}
                    data-ocid={`hero.mini_stat.${i + 1}`}
                  >
                    <p className="font-bold text-xl" style={{ color: ACCENT }}>
                      {s.val}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ──────────────────────────────────────────── */}
      <section
        className="py-10 bg-white border-y border-border"
        data-ocid="stats.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "500+", label: "AI Projects Delivered" },
              { value: "8-12×", label: "Faster Than Traditional Dev" },
              { value: "3 Days", label: "MVP Turnaround" },
              { value: "100%", label: "Code Ownership Guaranteed" },
            ].map((s, i) => (
              <StatCard
                key={s.value}
                value={s.value}
                label={s.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ──────────────────────────────────────── */}
      <section
        className="py-14 border-b border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="intro.section"
      >
        <div className="px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hire AI Developers —{" "}
              <span style={{ color: ACCENT }}>
                Ship Smarter. Automate Fearlessly.
              </span>
            </h2>
            <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed text-left">
              <p>
                Artificial intelligence has moved from competitive advantage to
                operational necessity. Every industry — from healthcare and
                finance to retail and logistics — is being reshaped by companies
                that choose to hire AI developers with genuine,
                multi-disciplinary expertise. The gap between businesses that
                act decisively and those still evaluating is widening every
                quarter.
              </p>
              <p>
                Our team of certified AI engineers — spanning natural language
                processing (NLP), autonomous AI agents, large language model
                (LLM) engineering, and generative AI product development —
                delivers production-grade intelligent systems that create
                measurable business value from the very first deployment. When
                you hire AI developers through TechAvidus, you gain a strategic
                technology partner with end-to-end capability across the entire
                AI stack.
              </p>
              <p>
                This page brings together three specialised AI disciplines under
                one engagement: NLP-powered language intelligence, autonomous AI
                agent development, and enterprise LLM engineering. Whether you
                need one or all three, our dedicated AI developer teams deliver
                with the speed, security, and rigour your business demands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY TABS ────────────────────────────────────────── */}
      <StickyTabBar activeTab={activeTab} onTabClick={handleTabClick} />

      {/* ════════════════════════════════════════════════════════ */}
      {/* NLP SECTION                                             */}
      {/* ════════════════════════════════════════════════════════ */}
      <div id="nlp-section" ref={nlpRef}>
        {/* NLP Sub-hero */}
        <section className="py-14 bg-white" data-ocid="nlp.hero.section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-5 text-white"
                  style={{ background: ACCENT }}
                >
                  NLP SERVICES
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  Natural Language Processing —{" "}
                  <span style={{ color: ACCENT }}>
                    Language Intelligence at Scale
                  </span>
                </h2>
                <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                  <p>
                    Leverage natural language processing to automate processes,
                    gain quantifiable insights, and improve operational
                    efficiency across your organisation. When you hire
                    artificial intelligence developers who specialise in NLP,
                    you unlock the ability to make human language
                    machine-intelligible — transforming unstructured text,
                    speech, and documents into structured, actionable business
                    intelligence.
                  </p>
                  <p>
                    Our NLP engineers combine advanced linguistic modelling,
                    machine learning, and deep neural network architectures to
                    deliver solutions that understand context, detect intent,
                    extract insight, and generate natural-language responses —
                    at any scale and across any domain. Every NLP system we
                    build is cloud-agnostic, MLOps-integrated, and
                    production-hardened from day one.
                  </p>
                </div>
              </motion.div>

              {/* Right: NLP illustration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 420 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-md"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="nlpBg"
                      x1="0"
                      y1="0"
                      x2="420"
                      y2="320"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#f5f3ff" />
                      <stop offset="100%" stopColor="#ede9fe" />
                    </linearGradient>
                    <linearGradient id="nlpPipe" x1="0" y1="0" x2="1" y2="0">
                      <stop
                        offset="0%"
                        stopColor="#7c3aed"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="#7c3aed"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                    <filter
                      id="nlpShadow"
                      x="-10%"
                      y="-10%"
                      width="120%"
                      height="130%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="6"
                        floodColor="#7c3aed"
                        floodOpacity="0.12"
                      />
                    </filter>
                    <style>{`
                      @keyframes nlpPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.06)} }
                      @keyframes nlpFlow { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
                      @keyframes nlpBar1 { 0%,100%{height:22px;y:46px} 50%{height:34px;y:34px} }
                      @keyframes nlpBar2 { 0%,100%{height:30px;y:38px} 60%{height:18px;y:50px} }
                      @keyframes nlpBar3 { 0%,100%{height:14px;y:54px} 40%{height:38px;y:30px} }
                      @keyframes nlpFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
                      .nlp-float { animation: nlpFloat 3.5s ease-in-out infinite; }
                      .nlp-pulse { animation: nlpPulse 2.2s ease-in-out infinite; }
                      .nlp-flow { animation: nlpFlow 1.8s linear infinite; }
                    `}</style>
                  </defs>

                  {/* Background card */}
                  <rect
                    x="10"
                    y="10"
                    width="400"
                    height="300"
                    rx="20"
                    fill="url(#nlpBg)"
                    stroke="#ddd6fe"
                    strokeWidth="1.5"
                    filter="url(#nlpShadow)"
                  />

                  {/* ── INPUT TEXT BLOCK (top-left) ── */}
                  <g
                    className="nlp-float"
                    style={{ transformOrigin: "85px 72px" }}
                  >
                    <rect
                      x="28"
                      y="26"
                      width="130"
                      height="88"
                      rx="12"
                      fill="white"
                      stroke="#c4b5fd"
                      strokeWidth="1.2"
                    />
                    <text
                      x="42"
                      y="46"
                      fill="#7c3aed"
                      fontSize="9"
                      fontWeight="700"
                      fontFamily="monospace"
                    >
                      INPUT TEXT
                    </text>
                    <rect
                      x="38"
                      y="52"
                      width="85"
                      height="6"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="38"
                      y="62"
                      width="100"
                      height="6"
                      rx="3"
                      fill="#ede9fe"
                    />
                    <rect
                      x="38"
                      y="72"
                      width="70"
                      height="6"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="38"
                      y="82"
                      width="92"
                      height="6"
                      rx="3"
                      fill="#ede9fe"
                    />
                    <rect
                      x="38"
                      y="92"
                      width="55"
                      height="6"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    {/* Text "T" icon */}
                    <circle cx="136" cy="98" r="9" fill="#7c3aed" />
                    <text
                      x="131.5"
                      y="102"
                      fill="white"
                      fontSize="10"
                      fontWeight="900"
                      fontFamily="serif"
                    >
                      T
                    </text>
                  </g>

                  {/* ── NLP PIPELINE CENTRAL BOX ── */}
                  <rect
                    x="148"
                    y="110"
                    width="124"
                    height="100"
                    rx="14"
                    fill="#7c3aed"
                    filter="url(#nlpShadow)"
                  />
                  <rect
                    x="151"
                    y="113"
                    width="118"
                    height="94"
                    rx="12"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                  <text
                    x="210"
                    y="145"
                    fill="white"
                    fontSize="11"
                    fontWeight="800"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    NLP
                  </text>
                  <text
                    x="210"
                    y="160"
                    fill="rgba(255,255,255,0.8)"
                    fontSize="8.5"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    PIPELINE
                  </text>
                  {/* Neural nodes inside */}
                  {[165, 185, 205, 225, 245].map((cx, i) => (
                    <circle
                      key={cx}
                      cx={cx}
                      cy={178}
                      r={5}
                      fill="rgba(255,255,255,0.25)"
                      className="nlp-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                  {[165, 185, 205, 225, 245].map(
                    (cx, i) =>
                      i < 4 && (
                        <line
                          key={`ln${cx}`}
                          x1={cx + 5}
                          y1={178}
                          x2={cx + 15}
                          y2={178}
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="1.2"
                          strokeDasharray="4 2"
                          className="nlp-flow"
                        />
                      ),
                  )}
                  <text
                    x="210"
                    y="200"
                    fill="rgba(255,255,255,0.65)"
                    fontSize="7.5"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    BERT · spaCy · LLaMA
                  </text>

                  {/* ── FLOW ARROWS ── */}
                  {/* Input → Pipeline */}
                  <path
                    d="M158 70 Q180 70 148 132"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeDasharray="6 3"
                    fill="none"
                    className="nlp-flow"
                  />
                  <polygon
                    points="144,128 152,136 148,124"
                    fill="#7c3aed"
                    opacity="0.7"
                  />
                  {/* Pipeline → outputs (right side) */}
                  <path
                    d="M272 140 Q310 140 310 90"
                    stroke="#7c3aed"
                    strokeWidth="1.8"
                    strokeDasharray="5 3"
                    fill="none"
                    className="nlp-flow"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <path
                    d="M272 160 Q330 160 330 200"
                    stroke="#7c3aed"
                    strokeWidth="1.8"
                    strokeDasharray="5 3"
                    fill="none"
                    className="nlp-flow"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <path
                    d="M272 180 Q300 180 300 255"
                    stroke="#7c3aed"
                    strokeWidth="1.8"
                    strokeDasharray="5 3"
                    fill="none"
                    className="nlp-flow"
                    style={{ animationDelay: "0.9s" }}
                  />

                  {/* ── OUTPUT: SENTIMENT CHART (top-right) ── */}
                  <g
                    className="nlp-float"
                    style={{
                      transformOrigin: "340px 72px",
                      animationDelay: "0.5s",
                    }}
                  >
                    <rect
                      x="282"
                      y="26"
                      width="118"
                      height="90"
                      rx="12"
                      fill="white"
                      stroke="#c4b5fd"
                      strokeWidth="1.2"
                    />
                    <text
                      x="296"
                      y="44"
                      fill="#7c3aed"
                      fontSize="8.5"
                      fontWeight="700"
                    >
                      SENTIMENT
                    </text>
                    {/* Bar chart */}
                    <rect
                      x="298"
                      y="56"
                      width="14"
                      height="42"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="298"
                      y="68"
                      width="14"
                      height="30"
                      rx="3"
                      fill="#7c3aed"
                      opacity="0.8"
                    />
                    <rect
                      x="318"
                      y="56"
                      width="14"
                      height="42"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="318"
                      y="60"
                      width="14"
                      height="38"
                      rx="3"
                      fill="#7c3aed"
                    />
                    <rect
                      x="338"
                      y="56"
                      width="14"
                      height="42"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="338"
                      y="72"
                      width="14"
                      height="26"
                      rx="3"
                      fill="#7c3aed"
                      opacity="0.6"
                    />
                    <rect
                      x="358"
                      y="56"
                      width="14"
                      height="42"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="358"
                      y="64"
                      width="14"
                      height="34"
                      rx="3"
                      fill="#7c3aed"
                      opacity="0.9"
                    />
                    <text
                      x="298"
                      y="108"
                      fill="#6d28d9"
                      fontSize="7"
                      fontWeight="600"
                    >
                      😊 Positive 84%
                    </text>
                  </g>

                  {/* ── OUTPUT: ENTITY TAGS (middle-right) ── */}
                  <g
                    className="nlp-float"
                    style={{
                      transformOrigin: "350px 200px",
                      animationDelay: "1s",
                    }}
                  >
                    <rect
                      x="295"
                      y="170"
                      width="110"
                      height="68"
                      rx="12"
                      fill="white"
                      stroke="#c4b5fd"
                      strokeWidth="1.2"
                    />
                    <text
                      x="308"
                      y="188"
                      fill="#7c3aed"
                      fontSize="8.5"
                      fontWeight="700"
                    >
                      ENTITIES
                    </text>
                    <rect
                      x="308"
                      y="194"
                      width="32"
                      height="13"
                      rx="5"
                      fill="#7c3aed"
                    />
                    <text
                      x="324"
                      y="204"
                      fill="white"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      PERSON
                    </text>
                    <rect
                      x="346"
                      y="194"
                      width="26"
                      height="13"
                      rx="5"
                      fill="#8b5cf6"
                    />
                    <text
                      x="359"
                      y="204"
                      fill="white"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      ORG
                    </text>
                    <rect
                      x="308"
                      y="211"
                      width="24"
                      height="13"
                      rx="5"
                      fill="#a78bfa"
                    />
                    <text
                      x="320"
                      y="221"
                      fill="white"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      LOC
                    </text>
                    <rect
                      x="338"
                      y="211"
                      width="28"
                      height="13"
                      rx="5"
                      fill="#6d28d9"
                    />
                    <text
                      x="352"
                      y="221"
                      fill="white"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      DATE
                    </text>
                  </g>

                  {/* ── OUTPUT: CHAT BUBBLE (bottom-right) ── */}
                  <g
                    className="nlp-float"
                    style={{
                      transformOrigin: "335px 272px",
                      animationDelay: "1.5s",
                    }}
                  >
                    <rect
                      x="268"
                      y="248"
                      width="132"
                      height="52"
                      rx="12"
                      fill="white"
                      stroke="#c4b5fd"
                      strokeWidth="1.2"
                    />
                    <text
                      x="282"
                      y="266"
                      fill="#7c3aed"
                      fontSize="8.5"
                      fontWeight="700"
                    >
                      AI RESPONSE
                    </text>
                    <rect
                      x="282"
                      y="271"
                      width="105"
                      height="6"
                      rx="3"
                      fill="#ede9fe"
                    />
                    <rect
                      x="282"
                      y="281"
                      width="80"
                      height="6"
                      rx="3"
                      fill="#ddd6fe"
                    />
                    {/* Chat icon */}
                    <circle
                      cx="363"
                      cy="285"
                      r="8"
                      fill="#f5f3ff"
                      stroke="#c4b5fd"
                      strokeWidth="1"
                    />
                    <rect
                      x="358"
                      y="282"
                      width="10"
                      height="7"
                      rx="2"
                      fill="#7c3aed"
                      opacity="0.6"
                    />
                    <polygon
                      points="360,289 364,293 366,289"
                      fill="#7c3aed"
                      opacity="0.6"
                    />
                  </g>

                  {/* ── SPEECH WAVE (left-bottom) ── */}
                  <g
                    className="nlp-float"
                    style={{
                      transformOrigin: "85px 250px",
                      animationDelay: "0.8s",
                    }}
                  >
                    <rect
                      x="28"
                      y="222"
                      width="120"
                      height="68"
                      rx="12"
                      fill="white"
                      stroke="#c4b5fd"
                      strokeWidth="1.2"
                    />
                    <text
                      x="42"
                      y="240"
                      fill="#7c3aed"
                      fontSize="8.5"
                      fontWeight="700"
                    >
                      SPEECH WAVE
                    </text>
                    {/* Mic icon */}
                    <rect
                      x="76"
                      y="247"
                      width="8"
                      height="14"
                      rx="4"
                      fill="#7c3aed"
                    />
                    <path
                      d="M72 255 Q72 265 80 265 Q88 265 88 255"
                      stroke="#7c3aed"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <line
                      x1="80"
                      y1="265"
                      x2="80"
                      y2="270"
                      stroke="#7c3aed"
                      strokeWidth="1.5"
                    />
                    {/* Wave bars */}
                    {[98, 108, 118, 128].map((x, i) => {
                      const hs = [18, 28, 22, 14];
                      return (
                        <rect
                          key={x}
                          x={x}
                          y={258 - hs[i] / 2}
                          width="6"
                          height={hs[i]}
                          rx="3"
                          fill="#7c3aed"
                          opacity={0.5 + i * 0.1}
                        />
                      );
                    })}
                  </g>

                  {/* ── ACCURACY PILL ── */}
                  <g
                    className="nlp-pulse"
                    style={{ transformOrigin: "210px 295px" }}
                  >
                    <rect
                      x="155"
                      y="228"
                      width="110"
                      height="26"
                      rx="13"
                      fill="#7c3aed"
                    />
                    <text
                      x="210"
                      y="245"
                      fill="white"
                      fontSize="9"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      ✓ 97.4% Accuracy
                    </text>
                  </g>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NLP Stats */}
        <section
          className="py-10 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="nlp.stats.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "50+", label: "NLP Specialists On Team" },
                { value: "20+", label: "NLP Projects Delivered" },
                { value: "100%", label: "Client Success Rate" },
                { value: "48hr", label: "NLP POC Turnaround" },
              ].map((s, i) => (
                <StatCard
                  key={s.value + s.label}
                  value={s.value}
                  label={s.label}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NLP Services Grid */}
        <section className="py-14 bg-white" data-ocid="nlp.services.section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Our NLP Development Services
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  Six production-grade NLP capabilities for enterprise
                  intelligence at scale.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {nlpServices.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  index={i}
                  ocidPrefix="nlp.services"
                />
              ))}
            </div>
          </div>
        </section>

        {/* NLP Features */}
        <section
          className="py-12 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="nlp.features.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Features of Our NLP Solutions
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {nlpFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                  }}
                  data-ocid={`nlp.features.item.${i + 1}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-1.5 h-5 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {f.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our NLP Devs */}
        <section className="py-12 bg-white" data-ocid="nlp.why.section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Why Hire Our NLP Developers?
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {nlpWhyUs.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-xl p-5"
                  style={{
                    background: ACCENT_SOFT,
                    border: `1px solid ${ACCENT_BORDER}`,
                  }}
                  data-ocid={`nlp.why.item.${i + 1}`}
                >
                  <h4
                    className="font-display font-bold text-sm mb-2"
                    style={{ color: ACCENT }}
                  >
                    {r.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {r.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NLP Tech Stack */}
        <section
          className="py-12 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="nlp.techstack.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Our NLP Technology Toolkit
              </h3>
            </motion.div>
            <div
              className="bg-white rounded-xl p-6"
              style={{
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
              }}
            >
              {nlpTechStack.map((row, i) => (
                <TechStackRow
                  key={row.label}
                  label={row.label}
                  items={row.items}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NLP FAQ */}
        <section className="py-12 bg-white" data-ocid="nlp.faq.section">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                NLP Development —{" "}
                <span style={{ color: ACCENT }}>
                  Frequently Asked Questions
                </span>
              </h3>
            </motion.div>
            {nlpFaqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} ocidPrefix="nlp" />
            ))}
          </div>
        </section>
      </div>

      {/* ── CHAPTER DIVIDER ───────────────────────────────────── */}
      <SectionDivider
        title="AI Agent Development"
        tagline="Autonomous Workflows at Enterprise Scale"
      />

      {/* ════════════════════════════════════════════════════════ */}
      {/* AI AGENTS SECTION                                       */}
      {/* ════════════════════════════════════════════════════════ */}
      <div id="ai-agents-section" ref={agentsRef}>
        {/* Agents Sub-hero */}
        <section className="py-14 bg-white" data-ocid="agents.hero.section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-5 text-white"
                  style={{ background: "#0ea5e9" }}
                >
                  AI AGENTS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  AI Agent Development —{" "}
                  <span style={{ color: ACCENT }}>
                    Autonomous Workflows at Enterprise Scale
                  </span>
                </h2>
                <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                  <p>
                    Autonomous AI agents are the most transformative application
                    of artificial intelligence in enterprise today. When you
                    choose to hire AI agent developer talent from our team, you
                    gain engineers who design, build, and deploy multi-step
                    reasoning systems that complete complex business workflows —
                    from lead qualification and contract generation to data
                    extraction and financial reporting — entirely without human
                    intervention.
                  </p>
                  <p>
                    Our AI agent development services are built on the latest
                    agentic frameworks: LangGraph, AutoGen, CrewAI, OpenAI
                    Assistants API, and custom-built orchestration layers. Every
                    agent we deploy is designed for reliability, full
                    observability, and enterprise-grade scale.
                  </p>
                </div>
              </motion.div>

              {/* Right: AI Agents network diagram */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 420 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-md"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="agBg"
                      x1="0"
                      y1="0"
                      x2="420"
                      y2="320"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#f0f9ff" />
                      <stop offset="100%" stopColor="#e0f2fe" />
                    </linearGradient>
                    <linearGradient id="agHub" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <filter
                      id="agShadow"
                      x="-15%"
                      y="-15%"
                      width="130%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="4"
                        stdDeviation="8"
                        floodColor="#0ea5e9"
                        floodOpacity="0.18"
                      />
                    </filter>
                    <filter
                      id="agNodeShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="150%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="3"
                        stdDeviation="5"
                        floodColor="#0ea5e9"
                        floodOpacity="0.15"
                      />
                    </filter>
                    <style>{`
                      @keyframes agFlow { 0%{stroke-dashoffset:24} 100%{stroke-dashoffset:0} }
                      @keyframes agPulse { 0%,100%{r:38} 50%{r:44} }
                      @keyframes agOrbit { 0%{opacity:0.3} 50%{opacity:1} 100%{opacity:0.3} }
                      @keyframes agFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
                      @keyframes agSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
                      .ag-flow { animation: agFlow 1.6s linear infinite; }
                      .ag-pulse-ring { animation: agPulse 2.5s ease-in-out infinite; transform-origin: 210px 160px; }
                      .ag-float { animation: agFloat 3s ease-in-out infinite; }
                      .ag-orbit { animation: agOrbit 2s ease-in-out infinite; }
                    `}</style>
                  </defs>

                  {/* Background card */}
                  <rect
                    x="10"
                    y="10"
                    width="400"
                    height="300"
                    rx="20"
                    fill="url(#agBg)"
                    stroke="#bae6fd"
                    strokeWidth="1.5"
                    filter="url(#agShadow)"
                  />

                  {/* Pulse ring behind hub */}
                  <circle
                    cx="210"
                    cy="160"
                    r="44"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="1.2"
                    strokeOpacity="0.2"
                    className="ag-pulse-ring"
                  />
                  <circle
                    cx="210"
                    cy="160"
                    r="55"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="0.8"
                    strokeOpacity="0.12"
                    className="ag-pulse-ring"
                    style={{ animationDelay: "0.5s" }}
                  />

                  {/* ── CONNECTION LINES (drawn first, behind nodes) ── */}
                  {/* Hub to each satellite */}
                  {[
                    { x: 88, y: 72 },
                    { x: 335, y: 72 },
                    { x: 60, y: 200 },
                    { x: 360, y: 200 },
                    { x: 130, y: 278 },
                    { x: 295, y: 278 },
                  ].map((pt, i) => (
                    <line
                      key={`hub-${pt.x}-${pt.y}`}
                      x1={210}
                      y1={160}
                      x2={pt.x}
                      y2={pt.y}
                      stroke="#0ea5e9"
                      strokeWidth="1.8"
                      strokeDasharray="8 4"
                      strokeOpacity="0.5"
                      className="ag-flow"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  ))}
                  {/* Cross-connections between adjacent satellites */}
                  <line
                    x1={88}
                    y1={72}
                    x2={335}
                    y2={72}
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                    strokeOpacity="0.3"
                    className="ag-flow"
                    style={{ animationDelay: "0.4s" }}
                  />
                  <line
                    x1={60}
                    y1={200}
                    x2={130}
                    y2={278}
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                    strokeOpacity="0.3"
                    className="ag-flow"
                    style={{ animationDelay: "0.8s" }}
                  />
                  <line
                    x1={360}
                    y1={200}
                    x2={295}
                    y2={278}
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    strokeDasharray="5 4"
                    strokeOpacity="0.3"
                    className="ag-flow"
                    style={{ animationDelay: "1.2s" }}
                  />

                  {/* Data packets flowing along lines */}
                  {[
                    { cx: 155, cy: 118 },
                    { cx: 268, cy: 118 },
                    { cx: 140, cy: 178 },
                    { cx: 282, cy: 178 },
                    { cx: 170, cy: 220 },
                    { cx: 252, cy: 220 },
                  ].map((pt, i) => (
                    <circle
                      key={`pkt-${pt.cx}-${pt.cy}`}
                      cx={pt.cx}
                      cy={pt.cy}
                      r="3"
                      fill="#0ea5e9"
                      className="ag-orbit"
                      style={{ animationDelay: `${i * 0.33}s` }}
                    />
                  ))}

                  {/* ── CENTRAL HUB ── */}
                  <circle
                    cx="210"
                    cy="160"
                    r="38"
                    fill="url(#agHub)"
                    filter="url(#agShadow)"
                  />
                  <circle
                    cx="210"
                    cy="160"
                    r="35"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="210"
                    y="155"
                    fill="white"
                    fontSize="13"
                    fontWeight="900"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    AI
                  </text>
                  <text
                    x="210"
                    y="170"
                    fill="rgba(255,255,255,0.85)"
                    fontSize="8"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    ORCHESTRATOR
                  </text>
                  {/* Hub pulse dot */}
                  <circle
                    cx="210"
                    cy="183"
                    r="3"
                    fill="white"
                    opacity="0.7"
                    className="ag-orbit"
                  />

                  {/* ── SATELLITE NODES ── */}
                  {/* Node 1: Search / Web */}
                  <g className="ag-float" style={{ animationDelay: "0s" }}>
                    <circle
                      cx="88"
                      cy="72"
                      r="30"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="88"
                      y="66"
                      fill="#0ea5e9"
                      fontSize="8.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      SEARCH
                    </text>
                    {/* Magnifier icon */}
                    <circle
                      cx="84"
                      cy="76"
                      r="6"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="1.8"
                    />
                    <line
                      x1="89"
                      y1="81"
                      x2="93"
                      y2="85"
                      stroke="#0ea5e9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <text
                      x="88"
                      y="97"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      Web Agent
                    </text>
                  </g>

                  {/* Node 2: Database */}
                  <g className="ag-float" style={{ animationDelay: "0.5s" }}>
                    <circle
                      cx="335"
                      cy="72"
                      r="30"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="335"
                      y="62"
                      fill="#0ea5e9"
                      fontSize="8.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      DATA
                    </text>
                    {/* DB icon */}
                    <ellipse
                      cx="335"
                      cy="72"
                      rx="10"
                      ry="5"
                      fill="#e0f2fe"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="325"
                      y="72"
                      width="20"
                      height="8"
                      fill="#e0f2fe"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                    />
                    <ellipse
                      cx="335"
                      cy="80"
                      rx="10"
                      ry="5"
                      fill="#bae6fd"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                    />
                    <text
                      x="335"
                      y="95"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      DB Agent
                    </text>
                  </g>

                  {/* Node 3: Code */}
                  <g className="ag-float" style={{ animationDelay: "1s" }}>
                    <circle
                      cx="60"
                      cy="200"
                      r="30"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="60"
                      y="190"
                      fill="#0ea5e9"
                      fontSize="8.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      CODE
                    </text>
                    {/* Code brackets */}
                    <text
                      x="60"
                      y="207"
                      fill="#0ea5e9"
                      fontSize="16"
                      textAnchor="middle"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      &lt;/&gt;
                    </text>
                    <text
                      x="60"
                      y="222"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      Code Agent
                    </text>
                  </g>

                  {/* Node 4: Bot/Reasoning */}
                  <g className="ag-float" style={{ animationDelay: "1.5s" }}>
                    <circle
                      cx="360"
                      cy="200"
                      r="30"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="360"
                      y="190"
                      fill="#0ea5e9"
                      fontSize="8.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      REASON
                    </text>
                    {/* Brain-like icon */}
                    <ellipse
                      cx="360"
                      cy="203"
                      rx="10"
                      ry="8"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="355"
                      y1="200"
                      x2="365"
                      y2="200"
                      stroke="#0ea5e9"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="357"
                      y1="205"
                      x2="363"
                      y2="205"
                      stroke="#0ea5e9"
                      strokeWidth="1.2"
                    />
                    <text
                      x="360"
                      y="222"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      LLM Agent
                    </text>
                  </g>

                  {/* Node 5: Memory */}
                  <g className="ag-float" style={{ animationDelay: "0.75s" }}>
                    <circle
                      cx="130"
                      cy="278"
                      r="28"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="130"
                      y="270"
                      fill="#0ea5e9"
                      fontSize="8"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      MEMORY
                    </text>
                    {/* Stack lines */}
                    {[275, 280, 285].map((y) => (
                      <rect
                        key={y}
                        x="118"
                        y={y}
                        width="24"
                        height="3"
                        rx="1.5"
                        fill="#7dd3fc"
                        opacity="0.6"
                      />
                    ))}
                    <text
                      x="130"
                      y="299"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      RAG Agent
                    </text>
                  </g>

                  {/* Node 6: Output/Task */}
                  <g className="ag-float" style={{ animationDelay: "1.25s" }}>
                    <circle
                      cx="295"
                      cy="278"
                      r="28"
                      fill="white"
                      stroke="#7dd3fc"
                      strokeWidth="1.5"
                      filter="url(#agNodeShadow)"
                    />
                    <text
                      x="295"
                      y="268"
                      fill="#0ea5e9"
                      fontSize="8"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      OUTPUT
                    </text>
                    {/* Checkmarks */}
                    <text
                      x="295"
                      y="283"
                      fill="#0ea5e9"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      ✓ ✓
                    </text>
                    <text
                      x="295"
                      y="299"
                      fill="#7dd3fc"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      Task Agent
                    </text>
                  </g>

                  {/* ── STATUS BAR ── */}
                  <rect
                    x="28"
                    y="22"
                    width="112"
                    height="20"
                    rx="10"
                    fill="#0ea5e9"
                    opacity="0.12"
                  />
                  <circle
                    cx="38"
                    cy="32"
                    r="4"
                    fill="#0ea5e9"
                    className="ag-orbit"
                  />
                  <text
                    x="46"
                    y="36"
                    fill="#0369a1"
                    fontSize="8"
                    fontWeight="700"
                  >
                    Multi-Agent Active
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Agent Services */}
        <section
          className="py-14 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="agents.services.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Our AI Agent Development Services
                </h3>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {agentServices.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  index={i}
                  ocidPrefix="agents.services"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Agent Devs */}
        <section className="py-12 bg-white" data-ocid="agents.why.section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Why Hire Our AI Agent Developers?
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {agentWhyUs.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="rounded-xl p-5 bg-white"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                  }}
                  data-ocid={`agents.why.item.${i + 1}`}
                >
                  <h4
                    className="font-display font-bold text-sm mb-2"
                    style={{ color: ACCENT }}
                  >
                    {r.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {r.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Tech Stack */}
        <section
          className="py-12 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="agents.techstack.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                AI Agent Technology Stack
              </h3>
            </motion.div>
            <div
              className="bg-white rounded-xl p-6"
              style={{
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
              }}
            >
              {agentTechStack.map((row, i) => (
                <TechStackRow
                  key={row.label}
                  label={row.label}
                  items={row.items}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section
          className="py-14 bg-white"
          data-ocid="agents.industries.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Industries Our AI Agents Serve
              </h3>
              <p className="text-sm text-muted-foreground">
                Purpose-built agent solutions across every major vertical.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {agentIndustries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="rounded-xl p-6"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    background: "#faf8ff",
                    boxShadow: "0 2px 8px rgba(124,58,237,0.05)",
                  }}
                  data-ocid={`agents.industry.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: ACCENT_SOFT }}
                    >
                      <ind.icon className="w-4 h-4" style={{ color: ACCENT }} />
                    </div>
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {ind.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {ind.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Process */}
        <section
          className="py-14 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="agents.process.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our AI Agent{" "}
                  <span style={{ color: ACCENT }}>Development Process</span>
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  A streamlined, transparent workflow combining frontier AI
                  capabilities with senior human engineering expertise across
                  five clearly defined stages.
                </p>
                <Button
                  className="font-semibold text-white rounded-md transition-smooth active:scale-95"
                  style={{ background: ACCENT }}
                  onClick={scrollToContact}
                  data-ocid="agents.process.cta_button"
                >
                  Start Your Project <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
              <div className="space-y-0">
                {agentProcess.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                    data-ocid={`agents.process.item.${i + 1}`}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm font-display flex-shrink-0 text-white"
                      style={{ background: ACCENT }}
                    >
                      {step.num}
                    </div>
                    <div className="flex-1 pb-5 border-b border-border last:border-0">
                      <h4 className="font-display font-bold text-sm text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agents FAQ */}
        <section className="py-12 bg-white" data-ocid="agents.faq.section">
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                AI Agent Development —{" "}
                <span style={{ color: ACCENT }}>
                  Frequently Asked Questions
                </span>
              </h3>
            </motion.div>
            {agentFaqs.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                index={i}
                ocidPrefix="agents"
              />
            ))}
          </div>
        </section>
      </div>

      {/* ── CHAPTER DIVIDER ───────────────────────────────────── */}
      <SectionDivider
        title="LLM Engineering"
        tagline="Transformative AI, Tailored to Your Enterprise"
      />

      {/* ════════════════════════════════════════════════════════ */}
      {/* LLM SECTION                                             */}
      {/* ════════════════════════════════════════════════════════ */}
      <div id="llm-section" ref={llmRef}>
        {/* LLM Sub-hero */}
        <section className="py-14 bg-white" data-ocid="llm.hero.section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-5 text-white"
                  style={{ background: "#10b981" }}
                >
                  LLM ENGINEERING
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  LLM Engineering Services —{" "}
                  <span style={{ color: ACCENT }}>
                    Transformative AI, Tailored to Your Enterprise
                  </span>
                </h2>
                <div className="space-y-4 text-base text-muted-foreground font-body leading-relaxed">
                  <p>
                    Build, deploy, and evolve enterprise-grade large language
                    model solutions — without the guesswork. From initial
                    strategy to full production readiness, our hire LLM engineer
                    capability helps organisations turn advanced AI into
                    measurable, auditable, continuously improving business
                    value.
                  </p>
                  <p>
                    LLMs are fundamentally transforming how businesses process
                    information, automate knowledge work, and interact with
                    customers. Our tailored LLM engineering services integrate
                    these powerful models into your operations seamlessly — with
                    full data governance, compliance alignment, and cost
                    controls built in from day one.
                  </p>
                </div>
              </motion.div>

              {/* Right: LLM architecture diagram */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 420 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-md"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="llmBg"
                      x1="0"
                      y1="0"
                      x2="420"
                      y2="320"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#f0fdf4" />
                      <stop offset="100%" stopColor="#d1fae5" />
                    </linearGradient>
                    <linearGradient id="llmData" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient
                      id="llmFinetune"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="llmModel" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="llmRag" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#065f46" />
                    </linearGradient>
                    <linearGradient id="llmGuard" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#047857" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <filter
                      id="llmShadow"
                      x="-8%"
                      y="-8%"
                      width="116%"
                      height="130%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="3"
                        stdDeviation="5"
                        floodColor="#10b981"
                        floodOpacity="0.15"
                      />
                    </filter>
                    <style>{`
                      @keyframes llmRise { 0%{transform:translateX(-8px);opacity:0.3} 100%{transform:translateX(0);opacity:1} }
                      @keyframes llmArrow { 0%{opacity:0.2} 50%{opacity:1} 100%{opacity:0.2} }
                      @keyframes llmBar { 0%,100%{width:60px} 50%{width:90px} }
                      @keyframes llmGlow { 0%,100%{filter:drop-shadow(0 0 4px #10b98150)} 50%{filter:drop-shadow(0 0 10px #10b98190)} }
                      @keyframes llmPulse { 0%,100%{opacity:0.7} 50%{opacity:1} }
                      .llm-glow { animation: llmGlow 2.5s ease-in-out infinite; }
                      .llm-arrow { animation: llmArrow 1.5s ease-in-out infinite; }
                      .llm-pulse { animation: llmPulse 2s ease-in-out infinite; }
                    `}</style>
                  </defs>

                  {/* Background */}
                  <rect
                    x="10"
                    y="10"
                    width="400"
                    height="300"
                    rx="20"
                    fill="url(#llmBg)"
                    stroke="#a7f3d0"
                    strokeWidth="1.5"
                    filter="url(#llmShadow)"
                  />

                  {/* ── LAYER STACK (center column) ── */}
                  {/* Layer 1: DATA */}
                  <g className="llm-glow" style={{ animationDelay: "0s" }}>
                    <rect
                      x="130"
                      y="30"
                      width="160"
                      height="36"
                      rx="10"
                      fill="url(#llmData)"
                    />
                    <text
                      x="178"
                      y="52"
                      fill="white"
                      fontSize="11"
                      fontWeight="800"
                      textAnchor="middle"
                    >
                      DATA
                    </text>
                    <text
                      x="230"
                      y="52"
                      fill="rgba(255,255,255,0.75)"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      Ingestion & Prep
                    </text>
                    {/* Icon: stacked discs */}
                    <ellipse
                      cx="148"
                      cy="46"
                      rx="8"
                      ry="4"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <rect
                      x="140"
                      y="46"
                      width="16"
                      height="5"
                      fill="rgba(255,255,255,0.2)"
                    />
                    <ellipse
                      cx="148"
                      cy="51"
                      rx="8"
                      ry="4"
                      fill="rgba(255,255,255,0.2)"
                    />
                  </g>

                  {/* Arrow 1→2 */}
                  <g className="llm-arrow" style={{ animationDelay: "0.15s" }}>
                    <polygon
                      points="205,72 215,72 210,80"
                      fill="#10b981"
                      opacity="0.8"
                    />
                  </g>

                  {/* Layer 2: FINE-TUNING */}
                  <g className="llm-glow" style={{ animationDelay: "0.3s" }}>
                    <rect
                      x="120"
                      y="84"
                      width="180"
                      height="36"
                      rx="10"
                      fill="url(#llmFinetune)"
                    />
                    <text
                      x="170"
                      y="106"
                      fill="white"
                      fontSize="11"
                      fontWeight="800"
                      textAnchor="middle"
                    >
                      FINE-TUNING
                    </text>
                    <text
                      x="240"
                      y="106"
                      fill="rgba(255,255,255,0.75)"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      LoRA · RLHF
                    </text>
                    {/* Tuning icon: sliders */}
                    <line
                      x1="136"
                      y1="99"
                      x2="156"
                      y2="99"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                    />
                    <circle cx="144" cy="99" r="4" fill="white" opacity="0.7" />
                    <line
                      x1="136"
                      y1="108"
                      x2="156"
                      y2="108"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="150"
                      cy="108"
                      r="4"
                      fill="white"
                      opacity="0.7"
                    />
                  </g>

                  {/* Arrow 2→3 */}
                  <g className="llm-arrow" style={{ animationDelay: "0.3s" }}>
                    <polygon
                      points="205,126 215,126 210,134"
                      fill="#10b981"
                      opacity="0.8"
                    />
                  </g>

                  {/* Layer 3: LLM MODEL (highlighted) */}
                  <g className="llm-glow" style={{ animationDelay: "0.6s" }}>
                    <rect
                      x="108"
                      y="138"
                      width="204"
                      height="44"
                      rx="12"
                      fill="url(#llmModel)"
                    />
                    <rect
                      x="110"
                      y="140"
                      width="200"
                      height="40"
                      rx="10"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.5"
                    />
                    <text
                      x="175"
                      y="163"
                      fill="white"
                      fontSize="12"
                      fontWeight="900"
                      textAnchor="middle"
                    >
                      LLM MODEL
                    </text>
                    <text
                      x="255"
                      y="163"
                      fill="rgba(255,255,255,0.8)"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      GPT-4o · LLaMA
                    </text>
                    {/* Neural dots */}
                    {[118, 126, 134].map((cx) => (
                      <circle
                        key={cx}
                        cx={cx}
                        cy={160}
                        r="3.5"
                        fill="rgba(255,255,255,0.4)"
                        className="llm-pulse"
                      />
                    ))}
                  </g>

                  {/* Arrow 3→4 */}
                  <g className="llm-arrow" style={{ animationDelay: "0.45s" }}>
                    <polygon
                      points="205,188 215,188 210,196"
                      fill="#059669"
                      opacity="0.8"
                    />
                  </g>

                  {/* Layer 4: RAG PIPELINE */}
                  <g className="llm-glow" style={{ animationDelay: "0.9s" }}>
                    <rect
                      x="120"
                      y="200"
                      width="180"
                      height="36"
                      rx="10"
                      fill="url(#llmRag)"
                    />
                    <text
                      x="170"
                      y="222"
                      fill="white"
                      fontSize="11"
                      fontWeight="800"
                      textAnchor="middle"
                    >
                      RAG PIPELINE
                    </text>
                    <text
                      x="248"
                      y="222"
                      fill="rgba(255,255,255,0.75)"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      Retrieval+Gen
                    </text>
                    {/* Vector icon */}
                    <circle
                      cx="136"
                      cy="218"
                      r="6"
                      fill="none"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="130"
                      y1="218"
                      x2="142"
                      y2="218"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="136"
                      y1="212"
                      x2="136"
                      y2="224"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.2"
                    />
                  </g>

                  {/* Arrow 4→5 */}
                  <g className="llm-arrow" style={{ animationDelay: "0.6s" }}>
                    <polygon
                      points="205,242 215,242 210,250"
                      fill="#047857"
                      opacity="0.8"
                    />
                  </g>

                  {/* Layer 5: GUARDRAILS */}
                  <g className="llm-glow" style={{ animationDelay: "1.2s" }}>
                    <rect
                      x="130"
                      y="254"
                      width="160"
                      height="36"
                      rx="10"
                      fill="url(#llmGuard)"
                    />
                    <text
                      x="178"
                      y="276"
                      fill="white"
                      fontSize="11"
                      fontWeight="800"
                      textAnchor="middle"
                    >
                      GUARDRAILS
                    </text>
                    <text
                      x="238"
                      y="276"
                      fill="rgba(255,255,255,0.75)"
                      fontSize="8"
                      textAnchor="middle"
                    >
                      GDPR · SOC2
                    </text>
                    {/* Shield icon */}
                    <path
                      d="M147 268 L147 278 Q147 282 151 284 Q155 282 155 278 L155 268 L151 266 Z"
                      fill="rgba(255,255,255,0.3)"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x="151"
                      y="278"
                      fill="white"
                      fontSize="7"
                      textAnchor="middle"
                    >
                      ✓
                    </text>
                  </g>

                  {/* ── OUTPUT ARROW ── */}
                  <g className="llm-arrow" style={{ animationDelay: "0.75s" }}>
                    <polygon
                      points="205,296 215,296 210,304"
                      fill="#065f46"
                      opacity="0.8"
                    />
                  </g>
                  <text
                    x="210"
                    y="315"
                    fill="#065f46"
                    fontSize="8.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    OUTPUT
                  </text>

                  {/* ── PERFORMANCE METRICS (right side) ── */}
                  <g>
                    <rect
                      x="302"
                      y="34"
                      width="100"
                      height="16"
                      rx="8"
                      fill="#d1fae5"
                      stroke="#a7f3d0"
                      strokeWidth="1"
                    />
                    <rect
                      x="304"
                      y="36"
                      width="72"
                      height="12"
                      rx="6"
                      fill="#10b981"
                      className="llm-pulse"
                    />
                    <text
                      x="340"
                      y="46"
                      fill="#fff"
                      fontSize="7.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      72% Accuracy
                    </text>

                    <rect
                      x="302"
                      y="56"
                      width="100"
                      height="16"
                      rx="8"
                      fill="#d1fae5"
                      stroke="#a7f3d0"
                      strokeWidth="1"
                    />
                    <rect
                      x="304"
                      y="58"
                      width="88"
                      height="12"
                      rx="6"
                      fill="#059669"
                      className="llm-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                    <text
                      x="348"
                      y="68"
                      fill="#fff"
                      fontSize="7.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      89% Recall
                    </text>

                    <rect
                      x="302"
                      y="78"
                      width="100"
                      height="16"
                      rx="8"
                      fill="#d1fae5"
                      stroke="#a7f3d0"
                      strokeWidth="1"
                    />
                    <rect
                      x="304"
                      y="80"
                      width="94"
                      height="12"
                      rx="6"
                      fill="#047857"
                      className="llm-pulse"
                      style={{ animationDelay: "0.8s" }}
                    />
                    <text
                      x="351"
                      y="90"
                      fill="#fff"
                      fontSize="7.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      94% F1 Score
                    </text>

                    <text
                      x="352"
                      y="110"
                      fill="#059669"
                      fontSize="7.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      Performance
                    </text>
                  </g>

                  {/* ── METRICS LEFT SIDE ── */}
                  <g>
                    {[
                      { label: "Hallucination", pct: 8, y: 34, bad: true },
                      { label: "Latency p99", pct: 45, y: 56, bad: false },
                      { label: "Token Cost", pct: 30, y: 78, bad: false },
                    ].map(({ label, pct, y }) => (
                      <g key={label}>
                        <rect
                          x="18"
                          y={y}
                          width="100"
                          height="16"
                          rx="8"
                          fill="#d1fae5"
                          stroke="#a7f3d0"
                          strokeWidth="1"
                        />
                        <rect
                          x="20"
                          y={y + 2}
                          width={pct}
                          height="12"
                          rx="6"
                          fill="#10b981"
                          opacity="0.75"
                          className="llm-pulse"
                        />
                        <text
                          x="68"
                          y={y + 11}
                          fill="#065f46"
                          fontSize="7"
                          fontWeight="600"
                          textAnchor="middle"
                        >
                          {label}
                        </text>
                      </g>
                    ))}
                    <text
                      x="68"
                      y="110"
                      fill="#059669"
                      fontSize="7.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      Monitoring
                    </text>
                  </g>
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LLM Capabilities */}
        <section
          className="py-14 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="llm.capabilities.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                End-to-End Capabilities That De-Risk AI Adoption
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {llmCapabilities.map((c, i) => (
                <ServiceCard
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  description={c.description}
                  index={i}
                  ocidPrefix="llm.capabilities"
                />
              ))}
            </div>
          </div>
        </section>

        {/* LLM Services */}
        <section className="py-12 bg-white" data-ocid="llm.services.section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Specialised LLM Services We Provide
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {llmServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-xl p-6"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    background: "#faf8ff",
                    boxShadow: "0 2px 8px rgba(124,58,237,0.05)",
                  }}
                  data-ocid={`llm.services.item.${i + 1}`}
                >
                  <h4
                    className="font-display font-bold text-sm mb-2"
                    style={{ color: ACCENT }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LLM Industry Outcomes */}
        <section
          className="py-14 border-y border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="llm.industries.section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Business Outcomes Our LLM Engineers Deliver — By Industry
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {llmIndustries.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="bg-white rounded-xl p-6"
                  style={{
                    border: `1px solid ${ACCENT_BORDER}`,
                    boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                  }}
                  data-ocid={`llm.industry.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: ACCENT_SOFT }}
                    >
                      <ind.icon className="w-4 h-4" style={{ color: ACCENT }} />
                    </div>
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {ind.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {ind.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LLM Tech Stack */}
        <section className="py-12 bg-white" data-ocid="llm.techstack.section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                LLM Engineering Technology Stack
              </h3>
            </motion.div>
            <div
              className="bg-white rounded-xl p-6"
              style={{
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
              }}
            >
              {llmTechStack.map((row, i) => (
                <TechStackRow
                  key={row.label}
                  label={row.label}
                  items={row.items}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LLM FAQ */}
        <section
          className="py-12 border-t border-border"
          style={{ background: "#f5f3ff" }}
          data-ocid="llm.faq.section"
        >
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-foreground">
                LLM Engineering —{" "}
                <span style={{ color: ACCENT }}>
                  Frequently Asked Questions
                </span>
              </h3>
            </motion.div>
            {llmFaqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} ocidPrefix="llm" />
            ))}
          </div>
        </section>
      </div>

      {/* ── ENGAGEMENT MODELS ──────────────────────────────────── */}
      <section className="py-14 bg-white" data-ocid="engagement.section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Engagement Models —{" "}
                <span style={{ color: ACCENT }}>
                  Hire AI Developers Your Way
                </span>
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Three flexible models to match your team structure, timeline,
                and goals.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Project-Based",
                badge: "Fixed Scope",
                badgeColor: ACCENT,
                items: [
                  "Fixed scope & timeline",
                  "Ideal for defined AI builds",
                  "Milestone-based delivery",
                  "Full code ownership on completion",
                  "Best for MVPs & POCs",
                ],
              },
              {
                title: "Dedicated Team",
                badge: "Most Popular",
                badgeColor: "#0ea5e9",
                items: [
                  "Monthly engagement model",
                  "Senior AI engineers, dedicated",
                  "Daily standups & sprint reviews",
                  "Scales up or down as needed",
                  "Best for ongoing AI product development",
                ],
                featured: true,
              },
              {
                title: "Staff Augmentation",
                badge: "Instant Access",
                badgeColor: "#10b981",
                items: [
                  "Embed AI experts in your team",
                  "Immediate access to senior talent",
                  "You manage the workflow directly",
                  "No long-term commitment required",
                  "Best for teams needing specialist skills fast",
                ],
              },
            ].map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
                style={{
                  border: model.featured
                    ? `2px solid ${ACCENT}`
                    : `1px solid ${ACCENT_BORDER}`,
                  background: model.featured ? "#faf8ff" : "white",
                  boxShadow: model.featured
                    ? "0 8px 32px rgba(124,58,237,0.15)"
                    : "0 2px 12px rgba(124,58,237,0.06)",
                }}
                data-ocid={`engagement.item.${i + 1}`}
              >
                {model.featured && (
                  <div
                    className="absolute top-0 right-0 px-4 py-1.5 text-xs font-bold text-white rounded-bl-xl"
                    style={{ background: ACCENT }}
                  >
                    Most Popular
                  </div>
                )}
                <span
                  className="inline-flex self-start px-2.5 py-1 rounded-full text-xs font-bold mb-4 text-white"
                  style={{ background: model.badgeColor }}
                >
                  {model.badge}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground mb-5">
                  {model.title}
                </h3>
                <ul className="space-y-2.5 flex-1">
                  {model.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground font-body"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5"
                        style={{ background: model.badgeColor }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full font-semibold text-white rounded-md"
                  style={{ background: model.badgeColor }}
                  onClick={scrollToContact}
                  data-ocid={`engagement.cta.${i + 1}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD HIRE ────────────────────────────────────── */}
      <section
        className="py-14 border-y border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="audience.section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who Should Hire AI Developers Through TechAvidus?
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Zap,
                title: "Startups & Founders",
                description:
                  "Race to market with AI-first products without the overhead of building an internal team. Our hire remote AI developers model gives you senior-level NLP, agent, and LLM expertise from day one — at a fraction of the cost of a direct hire.",
              },
              {
                icon: Building2,
                title: "SMEs & Growing Businesses",
                description:
                  "Automate high-value workflows, process documents at scale, and deploy AI-powered customer interactions without waiting months for bespoke software. Hire AI engineers for project-based engagements and deploy in weeks.",
              },
              {
                icon: Shield,
                title: "Enterprise Teams",
                description:
                  "Accelerate proof-of-concept builds, launch AI-powered products at speed, and automate high-volume internal processes with enterprise-grade security, compliance, and full auditability on every delivery.",
              },
              {
                icon: Layers,
                title: "Product Teams & Digital Agencies",
                description:
                  "Deliver AI-powered client projects faster and at higher margins. Our AI agent automation services and NLP and LLM engineering capabilities are available as white-label partnerships for agencies scaling their AI practice.",
              },
            ].map((aud, i) => (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                }}
                data-ocid={`audience.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: ACCENT_SOFT }}
                >
                  <aud.icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {aud.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {aud.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d0d2b 0%, #1a1035 100%)",
        }}
        data-ocid="cta.section"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(167,139,250,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span
              className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(167,139,250,0.12)",
                color: "#a78bfa",
                border: "1px solid rgba(167,139,250,0.3)",
              }}
            >
              Start Building Today
            </span>
            <h2 className="text-subheadline mb-6 text-white">
              Ready to Hire AI Developers{" "}
              <span style={{ color: "#a78bfa" }}>Who Deliver?</span>
            </h2>
            <p
              className="text-base font-body mb-8 leading-relaxed"
              style={{ color: "#d1d5db" }}
            >
              Stop waiting months for AI systems that should take days. Hire AI
              developers with genuine NLP, agent, and LLM engineering expertise
              — and launch with production-grade quality, full code ownership,
              and measurable business impact from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                className="px-8 py-3 text-base h-auto font-semibold rounded-md transition-smooth active:scale-95 cursor-pointer"
                style={{ background: "#ffffff", color: "#0d0d2b" }}
                onClick={scrollToContact}
                data-ocid="cta.primary_button"
              >
                Get a Free Consultation{" "}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-base h-auto font-semibold rounded-md"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(167,139,250,0.5)",
                  color: "#a78bfa",
                }}
                onClick={scrollToContact}
                data-ocid="cta.secondary_button"
              >
                Let's Talk with an AI Expert
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {[
                "hire AI developer",
                "hire generative AI developer",
                "hire AI agent developer",
                "hire LLM engineer",
                "hire GPT developer",
                "hire artificial intelligence developer",
                "hire machine learning engineer",
                "hire deep learning engineer",
              ].map((kw) => (
                <Badge
                  key={kw}
                  variant="outline"
                  className="text-xs font-body"
                  style={{
                    borderColor: "rgba(167,139,250,0.25)",
                    color: "#9ca3af",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {kw}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────── */}
      {/* <section
        id="ai-contact-form"
        className="py-14 border-t border-border"
        style={{ background: "#f5f3ff" }}
        data-ocid="contact.section"
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
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Start Your AI Project Today
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Fill in your details and one of our AI experts will get back to
                you within 24 hours.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: MapPin,
                  title: "Our Office",
                  detail: "TechAvidus, serving clients globally",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  detail: "hello@techavidus.com",
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  detail: "Within 24 hours, Monday to Friday",
                },
                {
                  icon: Star,
                  title: "Rating",
                  detail: "5.0/5 — Rated by 100+ clients worldwide",
                },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl p-5 flex items-start gap-4"
                    style={{
                      border: `1px solid ${ACCENT_BORDER}`,
                      boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                    }}
                    data-ocid={`contact.info.${i + 1}`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: ACCENT_SOFT }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground mb-0.5">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div
                className="bg-white rounded-xl p-5"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  boxShadow: "0 2px 8px rgba(124,58,237,0.06)",
                }}
              >
                <h4 className="font-display font-bold text-sm text-foreground mb-3">
                  Why Work With TechAvidus
                </h4>
                <ul className="space-y-2">
                  {[
                    "Free initial consultation — no commitment",
                    "500+ AI projects delivered",
                    "NDA available on request",
                    "Fixed price or time & materials",
                    "100% code ownership guaranteed",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                        style={{ background: ACCENT }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
