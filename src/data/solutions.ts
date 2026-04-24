import {
  AlertTriangle,
  Archive,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Eye,
  Factory,
  FileText,
  Fingerprint,
  FlaskConical,
  GraduationCap,
  Heart,
  HeartPulse,
  HelpCircle,
  Landmark,
  Layers,
  LayoutDashboard,
  LineChart,
  Lock,
  type LucideIcon,
  MessageSquare,
  Mic2,
  Network,
  PackageOpen,
  Pencil,
  Plug,
  RefreshCcw,
  Rocket,
  Scale,
  Search,
  Server,
  Settings,
  Shield,
  ShieldAlert,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Target,
  Timer,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

// ─── Shared types ──────────────────────────────────────────────────────────────

export interface PainPoint {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  color: string;
  name: string;
  description: string;
  link: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  illustration: string;
  useCases: UseCase[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface SolutionData {
  slug: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subheading: string;
  heroStats: HeroStat[];
  ctaPrimary: string;
  ctaSecondary: string;

  problemHeading: string;
  problemParagraph1: string;
  problemParagraph2: string;
  painPoints: PainPoint[];

  featuresHeading: string;
  featuresSubheading: string;
  features: Feature[];

  processHeading: string;
  processSubheading: string;
  steps: ProcessStep[];

  benefitsHeading: string;
  benefitsSubheading: string;
  stats: Stat[];
  benefits: Benefit[];

  industriesHeading: string;
  industriesSubheading: string;
  industries: Industry[];

  testimonialsHeading: string;
  testimonialsSubheading: string;
  testimonials: Testimonial[];

  faqHeading: string;
  faqSubheading: string;
  faqs: FAQ[];

  ctaBannerHeading: string;
  ctaBannerAccent: string;
  ctaBannerSubtext: string;
  ctaBannerPrimary: string;
  ctaBannerSecondary: string;
}

// ─── AI-Powered Data Analytics ────────────────────────────────────────────────

const aiPoweredDataAnalytics: SolutionData = {
  slug: "ai-powered-data-analytics",
  badge: "AI-Powered Solution",
  headline: "AI-Powered",
  headlineAccent: "Data Analytics",
  subheading:
    "Turn raw data into intelligent decisions with real-time AI insights. Unify your data stack, predict outcomes, and surface anomalies before they cost you.",
  heroStats: [
    { value: "98%", label: "Accuracy" },
    { value: "3x", label: "Faster Decisions" },
    { value: "500+", label: "Enterprise Clients" },
  ],
  ctaPrimary: "Get Started",
  ctaSecondary: "Book a Demo",

  problemHeading: "The Challenge",
  problemParagraph1:
    "Modern enterprises generate more data than ever before — yet most organizations are paralyzed by it. Raw data locked in isolated systems, slow manual reporting cycles, and a lack of predictive intelligence means decision-makers are always reacting to yesterday's problems instead of anticipating tomorrow's opportunities.",
  problemParagraph2:
    "Without a unified, AI-driven analytics platform, your teams waste countless hours on low-value data work while high-impact insights remain buried. Competitive advantage today belongs to organizations that can turn data into action — instantly.",
  painPoints: [
    {
      icon: AlertTriangle,
      color: "#f97316",
      title: "Data Silos Block Growth",
      description:
        "Disconnected systems prevent a unified view of your business performance, forcing teams to reconcile conflicting reports manually.",
    },
    {
      icon: Timer,
      color: "#4f8ef7",
      title: "Slow Manual Analysis",
      description:
        "Teams spend days processing data instead of acting on live insights, leaving your business perpetually behind the curve.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Missed Revenue Opportunities",
      description:
        "Without predictive signals, critical business opportunities vanish undetected while competitors act on real-time intelligence.",
    },
  ],

  featuresHeading: "How We Solve It",
  featuresSubheading:
    "A comprehensive AI-native platform that transforms your data stack into a competitive advantage — end to end.",
  features: [
    {
      icon: Workflow,
      color: "#4f8ef7",
      name: "Smart Data Pipeline",
      description:
        "Seamlessly connect, clean, and normalize data from 200+ sources — cloud databases, APIs, data warehouses, and real-time streams — with zero-code ETL automation. Your data flows exactly where you need it, always fresh and reliable.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#7c5cbf",
      name: "Predictive Analytics Engine",
      description:
        "Deploy battle-tested machine learning models tailored to your industry. Forecast demand, predict churn, model risk, and uncover hidden revenue opportunities weeks before they materialize using proprietary AI trained on billions of data points.",
      link: "#",
    },
    {
      icon: LayoutDashboard,
      color: "#06b6d4",
      name: "Real-Time Dashboards",
      description:
        "Build pixel-perfect interactive dashboards that refresh in milliseconds. Drag-and-drop builder with 50+ chart types, custom KPI cards, and shareable reports — no SQL or BI expertise required. See your business pulse in real time.",
      link: "#",
    },
    {
      icon: ShieldAlert,
      color: "#f59e0b",
      name: "AI Anomaly Detection",
      description:
        "Proactively surface outliers, fraud signals, and operational anomalies before they escalate. Our unsupervised detection models learn your normal baselines and alert the right people at the right time with full context for fast resolution.",
      link: "#",
    },
    {
      icon: MessageSquare,
      color: "#10b981",
      name: "Natural Language Queries",
      description:
        "Ask questions in plain English and get instant, chart-backed answers. Our semantic query layer translates natural language into optimized SQL, enabling every team member — not just analysts — to self-serve data insights on demand.",
      link: "#",
    },
    {
      icon: FileText,
      color: "#f43f5e",
      name: "Automated Reports",
      description:
        "Schedule and deliver professional-grade reports to any stakeholder, automatically. Combine narrative AI commentary with live charts, brand your outputs, and distribute via email, Slack, or embedded portals — all without manual effort.",
      link: "#",
    },
  ],

  processHeading: "The Process",
  processSubheading: "Five streamlined steps from raw data to decisive action.",
  steps: [
    {
      icon: Database,
      number: "01",
      title: "Connect",
      description:
        "Link all your data sources — databases, APIs, cloud storage — in minutes using 200+ pre-built connectors.",
    },
    {
      icon: Search,
      number: "02",
      title: "Analyze",
      description:
        "Our AI automatically profiles, cleans, and classifies your data, surfacing quality issues and relationship maps.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "Model",
      description:
        "Deploy pre-trained or custom ML models tuned to your industry and business objectives — no data science team required.",
    },
    {
      icon: Target,
      number: "04",
      title: "Predict",
      description:
        "Generate forward-looking forecasts and risk scores that update continuously as new data flows into the platform.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Act",
      description:
        "Deliver insights, alerts, and automated actions directly to the tools your teams already use every day.",
    },
  ],

  benefitsHeading: "Key Benefits",
  benefitsSubheading:
    "Measurable outcomes that directly impact your bottom line.",
  stats: [
    { value: 98, suffix: "%", label: "Model Accuracy" },
    { value: 3, suffix: "x", label: "Faster Decisions" },
    { value: 500, suffix: "+", label: "Enterprise Clients" },
    { value: 24, suffix: "/7", label: "Monitoring" },
  ],
  benefits: [
    {
      title: "Unified Data Layer",
      description:
        "All your data sources consolidated into a single governed, query-ready layer — eliminating silos and manual reconciliation forever.",
    },
    {
      title: "Instant Time-to-Insight",
      description:
        "Go from raw data to published dashboard in hours, not months. Our no-code builder removes the dependency on engineering sprints.",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "SOC 2 Type II certified with end-to-end encryption, role-based access controls, and full audit logs for every query and export.",
    },
    {
      title: "Scales With Your Data",
      description:
        "Process petabyte-scale datasets without performance degradation. Our distributed compute layer handles any volume, any velocity.",
    },
    {
      title: "White-Glove Onboarding",
      description:
        "A dedicated implementation team gets you live within 30 days, with custom model training included in all enterprise plans.",
    },
  ],

  industriesHeading: "Who It's Built For",
  industriesSubheading:
    "Tailored intelligence for the industries that run the world.",
  industries: [
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Predictive Patient Readmission",
          description:
            "Identify high-risk patients before discharge and allocate care resources proactively, reducing 30-day readmission rates by up to 22%.",
        },
        {
          title: "Clinical Trial Optimization",
          description:
            "Accelerate patient recruitment and site selection using AI-driven eligibility matching across EHR systems and research databases.",
        },
        {
          title: "Operational Cost Intelligence",
          description:
            "Analyze staffing, supply chain, and facility utilization patterns to surface $2–5M in annual savings opportunities for mid-size hospitals.",
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      icon: DollarSign,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Real-Time Fraud Detection",
          description:
            "Score every transaction in under 50ms using our anomaly detection engine, reducing false positives by 40% compared to rule-based systems.",
        },
        {
          title: "Credit Risk Modeling",
          description:
            "Build dynamic credit scores from 500+ alternative data signals, extending credit access to underserved segments while controlling default risk.",
        },
        {
          title: "Portfolio Performance Analytics",
          description:
            "Deliver live P&L attribution, risk decomposition, and scenario analysis to portfolio managers through auto-refreshing executive dashboards.",
        },
      ],
    },
    {
      id: "retail",
      label: "Retail",
      icon: ShoppingBag,
      color: "#f59e0b",
      illustration: "🛍️",
      useCases: [
        {
          title: "Demand Forecasting at SKU Level",
          description:
            "Predict demand for every product at every location 12 weeks forward, reducing overstock by 18% and stockouts by 31%.",
        },
        {
          title: "Customer Lifetime Value Prediction",
          description:
            "Segment customers by predicted LTV and automate personalized marketing journeys that increase repeat purchase rates by 28%.",
        },
        {
          title: "Pricing Intelligence",
          description:
            "Implement dynamic pricing algorithms that respond to competitor moves, demand elasticity, and inventory levels in real time.",
        },
      ],
    },
    {
      id: "logistics",
      label: "Logistics",
      icon: Truck,
      color: "#10b981",
      illustration: "🚛",
      useCases: [
        {
          title: "Route & Fleet Optimization",
          description:
            "Reduce fuel costs and delivery times by 20% using live traffic, weather, and demand data to continuously reoptimize your fleet.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Forecast equipment failures 72+ hours in advance using sensor telemetry, slashing unplanned downtime and maintenance costs.",
        },
        {
          title: "Supply Chain Visibility",
          description:
            "Track every shipment, detect exceptions instantly, and give customers real-time ETA updates through a branded tracking portal.",
        },
      ],
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      color: "#7c5cbf",
      illustration: "🎓",
      useCases: [
        {
          title: "At-Risk Student Early Warning",
          description:
            "Identify students at risk of dropout 60 days in advance using engagement, attendance, and performance signals — enabling timely intervention.",
        },
        {
          title: "Curriculum Effectiveness Analysis",
          description:
            "Measure which content, formats, and instructors drive the strongest learning outcomes across cohorts, majors, and delivery modalities.",
        },
        {
          title: "Enrollment & Retention Forecasting",
          description:
            "Predict enrollment trends and financial aid impact to help institutions plan staffing, facilities, and program investments with confidence.",
        },
      ],
    },
  ],

  testimonialsHeading: "Trusted by Industry Leaders",
  testimonialsSubheading:
    "Powering data-driven decisions for enterprises across the globe.",
  testimonials: [
    {
      quote:
        "Tech 2Globe AI transformed how our clinical operations team uses data. We went from weekly reports to live dashboards — reducing ICU readmission rates by 19% in the first quarter.",
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "Apex Health Systems",
      initials: "SC",
      color: "#4f8ef7",
    },
    {
      quote:
        "The natural language query feature alone saved our analysts 15 hours per week. Our CFO gets live P&L breakdowns without waiting for the data team. Game-changing platform.",
      name: "Marcus Webb",
      role: "VP of Finance",
      company: "Meridian Capital Group",
      initials: "MW",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions",
  faqSubheading: "Quick answers to the questions we hear most.",
  faqs: [
    {
      id: "data-sources",
      question: "What data sources can you connect?",
      answer:
        "We support 200+ pre-built connectors including all major cloud databases (Snowflake, BigQuery, Redshift, PostgreSQL), SaaS applications (Salesforce, HubSpot, Shopify), data lakes (S3, Azure Data Lake, GCS), REST/GraphQL APIs, and real-time streams via Kafka and Kinesis. Custom connectors are available for enterprise plans.",
    },
    {
      id: "setup-time",
      question: "How long does setup take?",
      answer:
        "Most customers are fully live within 30 days. The first dashboard is typically ready within 48 hours of connecting your first data source. Our onboarding team provides a dedicated implementation manager, data model review, and three live training sessions for your team.",
    },
    {
      id: "security",
      question: "Is my data secure?",
      answer:
        "Absolutely. We are SOC 2 Type II certified and GDPR/CCPA compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We offer single-tenant cloud deployment, private VPC hosting, and an on-premises option for regulated industries like healthcare and finance.",
    },
    {
      id: "customization",
      question: "Can I customize the dashboards?",
      answer:
        "Yes — fully. Our drag-and-drop builder supports 50+ chart types, custom KPIs, conditional formatting, and white-label branding. Advanced users can write custom SQL, Python, or R transformations. Everything can be embedded into your existing product or portal via our SDK.",
    },
    {
      id: "integrations",
      question: "What integrations do you support?",
      answer:
        "Beyond data source connectors, we integrate with BI tools (Tableau, Power BI, Looker), notification channels (Slack, Teams, PagerDuty, email), and automation platforms (Zapier, Make, n8n). Our REST API and webhook system lets you build any custom workflow.",
    },
    {
      id: "pricing",
      question: "How is pricing structured?",
      answer:
        "We offer three tiers: Starter (up to 5 data sources, 3 users), Growth (unlimited sources, 25 users, predictive models), and Enterprise (unlimited everything + dedicated infra + SLA). All plans include a 14-day free trial. Enterprise pricing is usage-based and negotiated annually.",
    },
  ],

  ctaBannerHeading: "Ready to Transform",
  ctaBannerAccent: "Your Business?",
  ctaBannerSubtext:
    "Join 500+ companies already making smarter decisions with Tech 2Globe AI.",
  ctaBannerPrimary: "Start Free Trial",
  ctaBannerSecondary: "Talk to an Expert",
};

// ─── AI Automation ─────────────────────────────────────────────────────────────

const aiAutomation: SolutionData = {
  slug: "ai-automation",
  badge: "Intelligent Automation",
  headline: "Transform Your Workflows with",
  headlineAccent: "Intelligent Automation",
  subheading:
    "Eliminate manual bottlenecks and human error with RPA combined with AI-driven process orchestration. Deploy software robots that work 24/7, scale instantly, and integrate with every system in your enterprise.",
  heroStats: [
    { value: "80%", label: "Manual Tasks Eliminated" },
    { value: "5x", label: "Faster Throughput" },
    { value: "200+", label: "Bots Deployed" },
  ],
  ctaPrimary: "Start Automating",
  ctaSecondary: "Watch a Demo",

  problemHeading: "The Automation Gap",
  problemParagraph1:
    "Enterprise workflows are drowning in manual, repetitive tasks. Finance teams re-key data between systems. HR departments spend weeks onboarding employees across disconnected platforms. Operations managers chase approvals through email chains. Every manual handoff is a bottleneck, a compliance risk, and a cost center — and your skilled employees deserve better work.",
  problemParagraph2:
    "Traditional process automation requires expensive, brittle integrations and months of implementation. When systems change, automations break. Organizations that can't automate at scale fall behind competitors who process orders, invoices, and customer requests in seconds — not days.",
  painPoints: [
    {
      icon: AlertTriangle,
      color: "#f97316",
      title: "Repetitive Tasks Drain Talent",
      description:
        "Highly skilled employees waste 40–60% of their time on manual, rule-based tasks that could be automated — killing morale and productivity.",
    },
    {
      icon: Timer,
      color: "#4f8ef7",
      title: "Slow Process Cycles",
      description:
        "Invoice processing, employee onboarding, and order fulfillment take days instead of minutes due to manual handoffs and approval bottlenecks.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Human Error & Compliance Risk",
      description:
        "Manual data entry introduces errors that cascade into customer experience failures, audit findings, and costly remediation work.",
    },
  ],

  featuresHeading: "Our Automation Platform",
  featuresSubheading:
    "End-to-end intelligent automation that connects your people, processes, and systems into a seamless, error-free operation.",
  features: [
    {
      icon: Bot,
      color: "#4f8ef7",
      name: "Robotic Process Automation",
      description:
        "Deploy software robots that mimic human actions across any desktop or web application — no API required. Our bots log in, extract data, fill forms, and trigger workflows exactly as a human would, but at machine speed and without errors. Works with legacy systems out of the box.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#7c5cbf",
      name: "Workflow Intelligence",
      description:
        "Go beyond scripted automation with AI-powered decision-making embedded directly in your workflows. Our cognitive engine reads unstructured documents, classifies emails, extracts intent from support tickets, and routes tasks to the right queue — learning and improving with every interaction.",
      link: "#",
    },
    {
      icon: Settings,
      color: "#06b6d4",
      name: "Bot Management Console",
      description:
        "Monitor every bot across your entire digital workforce from a single pane of glass. Track utilization, throughput, error rates, and SLA compliance in real time. Schedule maintenance windows, manage credentials securely, and scale capacity up or down with a single click.",
      link: "#",
    },
    {
      icon: ShieldAlert,
      color: "#f59e0b",
      name: "Exception Handling & Escalation",
      description:
        "Automated processes encounter edge cases — our intelligent exception engine identifies ambiguous scenarios, captures full context, and routes exceptions to the right human reviewer with pre-filled resolution options. Mean time to resolution drops by 70% compared to manual exception queues.",
      link: "#",
    },
    {
      icon: Network,
      color: "#10b981",
      name: "Integration Hub",
      description:
        "Connect your automation workflows to 400+ enterprise systems — SAP, Oracle, Salesforce, ServiceNow, Workday, and every major ERP/CRM — through our pre-built integration library. Build new connectors visually or via REST. Changes in one system propagate automatically across all connected workflows.",
      link: "#",
    },
    {
      icon: BarChart3,
      color: "#f43f5e",
      name: "Analytics & ROI Dashboard",
      description:
        "Quantify the business value of every automation in real time. Track FTE hours saved, cost per transaction, error reduction rates, and process cycle times. Generate executive-ready ROI reports automatically, and identify the next highest-value automation opportunities from your process mining data.",
      link: "#",
    },
  ],

  processHeading: "From Discovery to Scale",
  processSubheading:
    "Our five-phase methodology takes you from process analysis to enterprise-scale automation in weeks.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description:
        "Our process mining tools analyze desktop event logs and system data to automatically identify your highest-ROI automation candidates — no workshops required.",
    },
    {
      icon: Settings,
      number: "02",
      title: "Design",
      description:
        "Collaborate with our automation architects to map the optimal bot workflow, define exception handling rules, and design the human-in-the-loop touchpoints.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Deploy",
      description:
        "Build and test automation bots in our sandbox environment, then promote to production with zero-downtime deployment. First bot typically goes live within 2 weeks.",
    },
    {
      icon: Target,
      number: "04",
      title: "Monitor",
      description:
        "The Bot Management Console tracks every automation 24/7, triggering alerts for failures, SLA breaches, or capacity bottlenecks before they impact the business.",
    },
    {
      icon: LineChart,
      number: "05",
      title: "Optimize",
      description:
        "Continuous process analytics surface improvement opportunities. Our AI recommends parameter tuning, new exception rules, and new automation candidates as your processes evolve.",
    },
  ],

  benefitsHeading: "Automation at Scale",
  benefitsSubheading:
    "Quantifiable outcomes delivered within the first 90 days of deployment.",
  stats: [
    { value: 80, suffix: "%", label: "Manual Task Reduction" },
    { value: 5, suffix: "x", label: "Faster Throughput" },
    { value: 200, suffix: "+", label: "Bots Deployed" },
    { value: 99, suffix: ".9%", label: "Uptime" },
  ],
  benefits: [
    {
      title: "Zero-Disruption Implementation",
      description:
        "Our bots work on top of existing systems — no rip-and-replace required. Legacy ERP, outdated portals, and custom applications are all supported without any system changes.",
    },
    {
      title: "Infinite Scalability",
      description:
        "Need to process 10x more invoices at month-end? Spin up additional bot instances in minutes. Your digital workforce scales on demand — no hiring, training, or overtime.",
    },
    {
      title: "Built-In Compliance & Audit Trail",
      description:
        "Every bot action is logged with full context: timestamp, input values, decision rationale, and output. Auditors get complete, tamper-proof records with zero additional effort.",
    },
    {
      title: "Rapid Time to Value",
      description:
        "Most customers deploy their first automation within 2 weeks and see measurable ROI within 60 days. Our automation-as-a-service model means no large upfront investment.",
    },
    {
      title: "Human + Bot Collaboration",
      description:
        "Our platform is designed for seamless human-bot handoffs. Bots handle high-volume routine tasks while humans focus on judgment-intensive exceptions — the best of both worlds.",
    },
  ],

  industriesHeading: "Industries We Automate",
  industriesSubheading:
    "Proven automation solutions tailored for high-complexity industries.",
  industries: [
    {
      id: "manufacturing",
      label: "Manufacturing",
      icon: Wrench,
      color: "#f59e0b",
      illustration: "🏭",
      useCases: [
        {
          title: "Purchase Order Automation",
          description:
            "Automate end-to-end procurement from requisition to PO creation across SAP and Oracle, cutting processing time from 3 days to 4 hours and eliminating 99% of data entry errors.",
        },
        {
          title: "Quality Control Data Collection",
          description:
            "Bots extract inspection data from IoT devices, lab systems, and manual forms into a unified quality dashboard, enabling real-time SPC and defect trend analysis.",
        },
        {
          title: "Production Report Generation",
          description:
            "Automatically compile shift production reports from 12+ data sources and distribute to supervisors and executives at the end of every shift — zero manual effort.",
        },
      ],
    },
    {
      id: "banking",
      label: "Banking",
      icon: DollarSign,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Loan Application Processing",
          description:
            "Automate document extraction, credit bureau pulls, compliance checks, and eligibility scoring — reducing loan processing from 5 days to same-day for 80% of applications.",
        },
        {
          title: "KYC & AML Compliance",
          description:
            "Bots perform automated identity verification, sanctions screening, and risk scoring across multiple regulatory databases, with full audit trails for every decision.",
        },
        {
          title: "Account Reconciliation",
          description:
            "Automate the reconciliation of millions of transactions across core banking, payment systems, and GL — flagging exceptions for human review and closing the books 60% faster.",
        },
      ],
    },
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Claims Processing Automation",
          description:
            "Automate insurance claims submission, eligibility verification, prior authorization requests, and denial management — reducing claims cycle time by 65%.",
        },
        {
          title: "Patient Data Migration",
          description:
            "Migrate patient records between EHR systems with zero manual re-entry, preserving data integrity, mapping to new schemas, and logging every field transformation.",
        },
        {
          title: "Appointment Scheduling & Reminders",
          description:
            "Bots handle scheduling logic, waitlist management, and multi-channel appointment reminders — reducing no-show rates by 28% and freeing front-desk staff.",
        },
      ],
    },
    {
      id: "hr",
      label: "HR",
      icon: Building2,
      color: "#10b981",
      illustration: "👥",
      useCases: [
        {
          title: "Employee Onboarding Automation",
          description:
            "Automate account creation, hardware provisioning, benefit enrollment, training assignments, and compliance document routing — completing onboarding in hours instead of weeks.",
        },
        {
          title: "Payroll Processing",
          description:
            "Automate timesheet validation, payroll calculations, tax filings, and payslip distribution across multi-country payrolls — with full compliance and zero manual touchpoints.",
        },
        {
          title: "CV Screening & Interview Scheduling",
          description:
            "AI-powered resume parsing and scoring against job criteria, combined with automated interview scheduling and candidate communication — cutting recruiter time-to-shortlist by 50%.",
        },
      ],
    },
    {
      id: "insurance",
      label: "Insurance",
      icon: Shield,
      color: "#7c5cbf",
      illustration: "🛡️",
      useCases: [
        {
          title: "First Notice of Loss Automation",
          description:
            "Bots capture FNOL data from multiple channels, validate policy details, assign adjusters, and initiate claim workflows — reducing FNOL processing time from 2 days to 20 minutes.",
        },
        {
          title: "Policy Renewal Processing",
          description:
            "Automate policy renewal notices, premium recalculations, endorsement processing, and document generation — handling renewal spikes without adding staff.",
        },
        {
          title: "Regulatory Reporting",
          description:
            "Automate the extraction, validation, formatting, and submission of regulatory reports to state and federal authorities — with a complete audit trail and zero missed deadlines.",
        },
      ],
    },
  ],

  testimonialsHeading: "Results That Speak for Themselves",
  testimonialsSubheading:
    "Enterprises across industries are transforming their operations with intelligent automation.",
  testimonials: [
    {
      quote:
        "We deployed 47 bots in the first 90 days and eliminated over 12,000 hours of manual data entry per month. Our finance team now closes the books 4 days faster every quarter. The ROI was undeniable.",
      name: "Jennifer Park",
      role: "CFO",
      company: "Summit Financial Services",
      initials: "JP",
      color: "#4f8ef7",
    },
    {
      quote:
        "Our loan processing team went from 5-day turnaround to same-day approvals for 78% of applications. Customers are noticing, and we've seen a 22% improvement in application conversion rates since deployment.",
      name: "David Okonkwo",
      role: "Head of Digital Operations",
      company: "Meridian Banking Group",
      initials: "DO",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Automation Questions Answered",
  faqSubheading:
    "Everything you need to know before starting your automation journey.",
  faqs: [
    {
      id: "roi-timeline",
      question: "How quickly will I see ROI from automation?",
      answer:
        "Most customers see measurable ROI within 60–90 days of their first deployment. A typical medium-complexity automation (e.g., invoice processing or employee onboarding) saves 2–4 FTE hours per day and pays back implementation costs within 3–4 months. Our ROI dashboard tracks savings in real time from day one.",
    },
    {
      id: "security",
      question: "How do you handle credential security for bots?",
      answer:
        "All bot credentials are stored in an encrypted vault (AES-256) with role-based access controls. Bots authenticate using rotating service accounts, never storing credentials in scripts. We support single sign-on, PAM integration (CyberArk, HashiCorp Vault), and hardware security modules for the most sensitive environments.",
    },
    {
      id: "integration",
      question: "Can bots work with our legacy systems?",
      answer:
        "Yes — this is a core strength of our platform. Our bots work at the UI layer, which means they can automate any application a human can interact with, including legacy systems with no API. We support Citrix/VDI environments, mainframe green-screen automation, and thick-client desktop applications in addition to web and API-based systems.",
    },
    {
      id: "exceptions",
      question: "What happens when a bot fails or encounters an error?",
      answer:
        "Every bot has configurable retry logic, fallback paths, and escalation rules. When an unhandled exception occurs, the bot logs full context (screenshot, input data, error trace), pauses the work item, and routes it to the human exception queue with pre-filled resolution options. Mean time to resolution is typically under 15 minutes.",
    },
    {
      id: "scalability",
      question: "How does the platform scale during peak periods?",
      answer:
        "Our cloud-native infrastructure auto-scales bot instances based on queue depth and SLA rules. During month-end close, open enrollment, or seasonal peaks, additional compute is provisioned automatically within minutes — then released when demand subsides. You only pay for what you use.",
    },
    {
      id: "maintenance",
      question: "What happens when the automated application changes its UI?",
      answer:
        "Our self-healing automation technology detects UI changes in real time and attempts automatic selector repair using AI-powered element recognition. When automatic repair isn't possible, the platform alerts your automation team with a targeted change analysis showing exactly which selectors need updating — dramatically reducing maintenance overhead.",
    },
  ],

  ctaBannerHeading: "Start Automating",
  ctaBannerAccent: "Today",
  ctaBannerSubtext:
    "Join 200+ enterprises that have deployed intelligent automation with Tech 2Globe AI. Your first bot can be live in 2 weeks.",
  ctaBannerPrimary: "Start Automating Today",
  ctaBannerSecondary: "Talk to an Expert",
};

// ─── Cloud Migration ───────────────────────────────────────────────────────────

const cloudMigration: SolutionData = {
  slug: "cloud-migration",
  badge: "Cloud Transformation",
  headline: "Accelerate Your Cloud Journey with",
  headlineAccent: "Zero Disruption",
  subheading:
    "Modernize your infrastructure with a proven hybrid cloud strategy that eliminates downtime risk, slashes costs by up to 60%, and positions your business for the next decade of growth.",
  heroStats: [
    { value: "60%", label: "Cost Reduction" },
    { value: "99.99%", label: "Migration Success Rate" },
    { value: "300+", label: "Apps Migrated" },
  ],
  ctaPrimary: "Plan Your Migration",
  ctaSecondary: "Schedule Assessment",

  problemHeading: "The Legacy Trap",
  problemParagraph1:
    "Legacy infrastructure is quietly strangling enterprise growth. Aging data centers consume 30–50% of IT budgets in maintenance while delivering diminishing performance. Every new business initiative gets delayed by 6–12 months while engineering teams retrofit capabilities onto brittle, decade-old systems. Meanwhile, cloud-native competitors move at ten times the speed.",
  problemParagraph2:
    "Failed cloud migrations are costly and disruptive — and most organizations have heard the horror stories. But the real risk is inaction. Every year spent on-premises is a year of compound technical debt, escalating license costs, and missed competitive windows. The question isn't whether to migrate — it's how to do it without disrupting operations.",
  painPoints: [
    {
      icon: Server,
      color: "#f97316",
      title: "Legacy Infrastructure Costs",
      description:
        "On-premises data centers consume 30–50% of IT budgets in hardware refresh, maintenance contracts, and facilities — with no scalability to show for it.",
    },
    {
      icon: AlertTriangle,
      color: "#4f8ef7",
      title: "Downtime Risk Paralysis",
      description:
        "Fear of service disruption keeps organizations locked in costly legacy environments long after the ROI case for cloud is overwhelming.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Skills & Complexity Gaps",
      description:
        "Cloud architecture, security hardening, and migration tooling require specialized expertise most in-house teams don't have — leading to stalled or failed projects.",
    },
  ],

  featuresHeading: "Our Migration Services",
  featuresSubheading:
    "A structured, risk-managed approach to cloud transformation — from initial assessment to fully optimized cloud operations.",
  features: [
    {
      icon: Search,
      color: "#4f8ef7",
      name: "Infrastructure Assessment",
      description:
        "Our automated discovery tools map every application, dependency, and data flow across your estate in days — not months. We produce a prioritized migration roadmap with TCO analysis, risk scores, and recommended migration strategies (lift-and-shift, re-platform, re-architect) for every workload.",
      link: "#",
    },
    {
      icon: Cloud,
      color: "#7c5cbf",
      name: "Lift-and-Shift Migration",
      description:
        "Rapidly migrate workloads to the cloud with minimal change using our automated rehosting toolchain. We handle VM conversion, network reconfiguration, security group mapping, and DNS cutover — delivering a working cloud environment in days while your team focuses on the business.",
      link: "#",
    },
    {
      icon: Cpu,
      color: "#06b6d4",
      name: "Re-Architecture & Modernization",
      description:
        "Transform monolithic applications into cloud-native microservices. Our modernization team decomposes tightly coupled applications, containerizes workloads, and implements event-driven architectures — unlocking the full performance, scalability, and cost benefits of the cloud.",
      link: "#",
    },
    {
      icon: Database,
      color: "#f59e0b",
      name: "Data Migration & Sync",
      description:
        "Migrate terabytes of data with zero loss and minimal downtime using our bi-directional sync technology. We handle schema transformation, data validation, referential integrity checks, and cutover orchestration — keeping source and target in sync right up to the final switchover.",
      link: "#",
    },
    {
      icon: Lock,
      color: "#10b981",
      name: "Security Hardening",
      description:
        "Implement defense-in-depth security posture on day one. Our cloud security framework enforces IAM least-privilege, network segmentation, encryption at rest and in transit, secrets management, and continuous compliance monitoring against CIS benchmarks, SOC 2, and HIPAA controls.",
      link: "#",
    },
    {
      icon: LineChart,
      color: "#f43f5e",
      name: "Cost Optimization",
      description:
        "Most organizations overspend on cloud by 30–40% after migration. Our FinOps practice deploys right-sizing recommendations, reserved instance planning, spot instance orchestration, and automated cost anomaly detection — delivering sustained savings month over month.",
      link: "#",
    },
  ],

  processHeading: "Our Migration Methodology",
  processSubheading:
    "A five-phase approach that de-risks every step of your cloud journey.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Assess",
      description:
        "Automated discovery tools map your full application estate, dependencies, and data flows — producing a prioritized migration roadmap with TCO analysis within 2 weeks.",
    },
    {
      icon: Archive,
      number: "02",
      title: "Plan",
      description:
        "Design the target cloud architecture, security model, and migration sequence. Define success criteria, rollback procedures, and communication plans before a single server moves.",
    },
    {
      icon: Cloud,
      number: "03",
      title: "Migrate",
      description:
        "Execute migrations in prioritized waves using our automated toolchain, with parallel testing in staging and real-time monitoring throughout. Zero-downtime cutover for critical workloads.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Validate",
      description:
        "Post-migration testing verifies performance, security posture, data integrity, and application behavior against pre-defined success criteria before decommissioning legacy infrastructure.",
    },
    {
      icon: LineChart,
      number: "05",
      title: "Optimize",
      description:
        "Ongoing FinOps and performance engineering squeeze maximum value from your cloud investment — right-sizing, reserved capacity planning, and architecture improvements.",
    },
  ],

  benefitsHeading: "The Cloud Advantage",
  benefitsSubheading:
    "Measurable business outcomes from our 300+ successful enterprise migrations.",
  stats: [
    { value: 60, suffix: "%", label: "Cost Reduction" },
    { value: 99, suffix: ".99%", label: "Migration Success" },
    { value: 300, suffix: "+", label: "Apps Migrated" },
    { value: 3, suffix: " wks", label: "Avg. Migration Time" },
  ],
  benefits: [
    {
      title: "Guaranteed Zero-Downtime Cutover",
      description:
        "Our bi-directional sync technology keeps source and cloud environments in lockstep until the final cutover — ensuring business continuity for 24/7 operations.",
    },
    {
      title: "Cloud-Native Security From Day One",
      description:
        "Our migration doesn't just move your workloads — it elevates your security posture. Every migration includes IAM hardening, encryption, and compliance baseline implementation.",
    },
    {
      title: "Sustained FinOps Practice",
      description:
        "Migration is just the beginning. Our FinOps team monitors your cloud spend continuously, delivering right-sizing, reserved capacity, and cost anomaly alerts every month.",
    },
    {
      title: "Multi-Cloud & Hybrid Flexibility",
      description:
        "We design architectures that avoid vendor lock-in. Whether AWS, Azure, GCP, or a hybrid combination, your architecture is portable and optimized for workload placement.",
    },
    {
      title: "Full Knowledge Transfer",
      description:
        "Your team becomes cloud-native through the process. We provide architecture documentation, runbooks, and training so you're fully self-sufficient by project completion.",
    },
  ],

  industriesHeading: "Industries We Migrate",
  industriesSubheading:
    "Specialized migration playbooks for regulated and complex industries.",
  industries: [
    {
      id: "financial-services",
      label: "Financial Services",
      icon: DollarSign,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Core Banking System Migration",
          description:
            "Migrate core banking platforms to cloud with zero transaction loss, regulatory compliance, and sub-millisecond latency for real-time payment processing.",
        },
        {
          title: "Trading Platform Modernization",
          description:
            "Re-architect high-frequency trading systems on cloud-native infrastructure, achieving 40% lower latency and 10x burst capacity for market volatility events.",
        },
        {
          title: "Regulatory Data Compliance",
          description:
            "Implement data residency controls, immutable audit logs, and encryption standards required for Basel IV, DORA, and MiFID II compliance in the cloud.",
        },
      ],
    },
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "EHR System Migration",
          description:
            "Migrate electronic health record systems to HIPAA-compliant cloud environments with PHI encryption, BAA compliance, and zero patient data loss.",
        },
        {
          title: "Medical Imaging Storage",
          description:
            "Migrate PACS and medical imaging archives (DICOM) to cloud object storage, cutting storage costs by 70% while improving radiologist access speeds.",
        },
        {
          title: "Clinical Research Data Platform",
          description:
            "Modernize clinical trial data infrastructure to enable real-time collaboration, advanced analytics, and FDA 21 CFR Part 11 compliance in the cloud.",
        },
      ],
    },
    {
      id: "retail",
      label: "Retail",
      icon: ShoppingBag,
      color: "#f59e0b",
      illustration: "🛍️",
      useCases: [
        {
          title: "E-Commerce Platform Migration",
          description:
            "Migrate high-traffic e-commerce platforms to cloud with auto-scaling for Black Friday peaks, global CDN, and sub-100ms page load times.",
        },
        {
          title: "Omnichannel Data Consolidation",
          description:
            "Unify POS, e-commerce, loyalty, and ERP data streams in a cloud data warehouse, enabling a single customer view and real-time inventory visibility.",
        },
        {
          title: "Supply Chain Modernization",
          description:
            "Migrate supply chain systems to event-driven cloud architecture, enabling real-time supplier collaboration, demand sensing, and exception management.",
        },
      ],
    },
    {
      id: "government",
      label: "Government",
      icon: Building2,
      color: "#10b981",
      illustration: "🏛️",
      useCases: [
        {
          title: "FedRAMP-Compliant Cloud Migration",
          description:
            "Migrate federal agency workloads to FedRAMP-authorized cloud environments with ATO documentation, continuous monitoring, and full FISMA compliance.",
        },
        {
          title: "Legacy Application Modernization",
          description:
            "Decommission aging COBOL and mainframe systems by re-hosting on modern cloud infrastructure — reducing operational costs by 50% while improving citizen service availability.",
        },
        {
          title: "Secure Data Sharing Platforms",
          description:
            "Build inter-agency data sharing capabilities on cloud with attribute-based access control, data lineage tracking, and cross-boundary security policies.",
        },
      ],
    },
    {
      id: "telecom",
      label: "Telecom",
      icon: Network,
      color: "#7c5cbf",
      illustration: "📡",
      useCases: [
        {
          title: "BSS/OSS Modernization",
          description:
            "Migrate billing, mediation, and operations support systems to cloud-native microservices, enabling faster product launches and 40% reduction in provisioning time.",
        },
        {
          title: "5G Network Function Virtualization",
          description:
            "Migrate network functions to cloud-native infrastructure for 5G rollout, enabling elastic capacity, rapid service deployment, and reduced TCO.",
        },
        {
          title: "Customer Experience Platform Migration",
          description:
            "Consolidate fragmented CX systems onto a unified cloud CRM, enabling omnichannel service delivery and real-time customer 360 for 50M+ subscribers.",
        },
      ],
    },
  ],

  testimonialsHeading: "Migration Success Stories",
  testimonialsSubheading:
    "Enterprises across industries trust Tech 2Globe AI to navigate their most complex migrations.",
  testimonials: [
    {
      quote:
        "We migrated 140 applications across 3 data centers in 18 months with zero unplanned downtime. Tech 2Globe AI's methodology is battle-tested — their assessment alone identified $4.2M in annual savings we were leaving on the table.",
      name: "Robert Castillo",
      role: "CTO",
      company: "Prism Financial Group",
      initials: "RC",
      color: "#4f8ef7",
    },
    {
      quote:
        "Our EHR migration was considered too risky to attempt internally. Tech 2Globe AI completed the project in 14 weeks with zero data loss and PHI compliance maintained throughout. Our IT costs dropped 52% in year one.",
      name: "Dr. Amanda Torres",
      role: "Chief Information Officer",
      company: "NorthStar Health Network",
      initials: "AT",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Migration Questions Answered",
  faqSubheading:
    "Common questions from enterprise teams planning their cloud journey.",
  faqs: [
    {
      id: "downtime-risk",
      question: "How do you ensure zero downtime during migration?",
      answer:
        "Our bi-directional sync technology keeps source and cloud environments in continuous lockstep throughout the migration period. All changes in the source system are replicated to the cloud environment in near-real-time. Final cutover is a DNS/load balancer switch that takes seconds — not a service outage. For the most critical workloads, we maintain rollback capability for 48 hours post-cutover.",
    },
    {
      id: "migration-risk",
      question: "What if something goes wrong during migration?",
      answer:
        "Every migration project includes a detailed rollback plan developed before a single server moves. Our automated testing suite validates application behavior at every migration wave. We maintain a shadow environment for parallel validation. In 300+ enterprise migrations, we have never had to execute a full rollback — but the plan is always ready.",
    },
    {
      id: "cost-savings",
      question: "How much can we realistically save?",
      answer:
        "Our average client achieves 40–60% infrastructure cost reduction after migration and optimization. Initial savings come from eliminating data center costs, hardware refresh cycles, and maintenance contracts. Sustained FinOps practices then deliver another 15–20% on top through right-sizing, reserved instances, and architectural optimizations. We model your specific savings during the assessment phase.",
    },
    {
      id: "timeline",
      question: "How long does a typical migration take?",
      answer:
        "Our average enterprise migration (50–150 applications) completes in 12–18 months. A single application or small workload cluster can migrate in 3–6 weeks. The timeline depends on application complexity, data volume, integration dependencies, and compliance requirements. We provide a phase-by-phase schedule with milestone commitments during the planning phase.",
    },
    {
      id: "compliance",
      question:
        "How do you handle regulatory compliance during and after migration?",
      answer:
        "Compliance is designed in from the start, not bolted on. Our team includes certified cloud security architects with deep expertise in HIPAA, PCI-DSS, SOC 2, FedRAMP, GDPR, and financial services regulations. We implement continuous compliance monitoring using cloud-native tools (AWS Security Hub, Azure Security Center, GCP Security Command Center) from day one of cloud operations.",
    },
    {
      id: "multi-cloud",
      question: "Can you support multi-cloud or hybrid cloud architectures?",
      answer:
        "Yes — we are cloud-agnostic and specialize in multi-cloud and hybrid designs. Many clients retain specific workloads on-premises for latency, sovereignty, or regulatory reasons. We design architectures that place each workload on the optimal platform and implement unified observability, security, and cost management across cloud boundaries.",
    },
  ],

  ctaBannerHeading: "Plan Your Migration",
  ctaBannerAccent: "Risk-Free",
  ctaBannerSubtext:
    "Start with a free infrastructure assessment. In 2 weeks, you'll have a complete migration roadmap with TCO analysis and savings projections.",
  ctaBannerPrimary: "Plan Your Migration",
  ctaBannerSecondary: "Schedule Assessment",
};

// ─── Premium Solution Types ────────────────────────────────────────────────────

/** A logo/brand name shown in the auto-scrolling social-proof strip. */
export interface SocialProofLogo {
  name: string;
  /** Optional abbreviation rendered as text when no image is available. */
  abbr: string;
}

/** One card in the 6-card "What We Deliver" services grid. */
export interface ServiceCard {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

/** One numbered benefit row in the "Why Choose Us" section. */
export interface NumberedBenefit {
  number: string; // e.g. "01"
  title: string;
  description: string;
}

/** One animated metric counter in the "Why Choose Us" stats panel. */
export interface AnimatedStat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

/** One engagement/hiring model card. */
export interface EngagementModel {
  icon: LucideIcon;
  name: string;
  tagline: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

/** One step in the horizontal process timeline. */
export interface PremiumProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

/** One logo item inside a tech-stack tab. */
export interface TechLogoItem {
  name: string;
  /** Short text abbreviation rendered if no image asset exists. */
  abbr: string;
  color: string;
}

/** One tab in the TechStack section. */
export interface TechTab {
  id: string;
  label: string;
  items: TechLogoItem[];
}

/** One horizontally-scrollable case study card. */
export interface CaseStudy {
  accentColor: string;
  projectName: string;
  industry: string;
  description: string;
  metrics: string[];
}

/** Featured (large rotating) testimonial. */
export interface FeaturedTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  rating: number;
}

/** Small stacked testimonial card. */
export interface StackedTestimonial {
  name: string;
  company: string;
  quote: string;
  initials: string;
  color: string;
  rating: number;
}

/** Industry hex/circle tile. */
export interface IndustryTile {
  icon: LucideIcon;
  color: string;
  label: string;
  tooltip: string;
}

/** One FAQ item for the split accordion section. */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/** Final CTA banner config. */
export interface FinalCTAConfig {
  heading: string;
  subtext: string;
  primaryLabel: string;
  secondaryLabel: string;
  trustItems: string[];
}

/**
 * Extended solution data interface for the 12-section premium page template.
 * Adds all new section data on top of the original SolutionData fields so that
 * existing pages remain 100% compatible.
 */
export interface PremiumSolutionData extends SolutionData {
  // Section 1 extras
  heroTrustBadges: string[];

  // Section 2 — Social Proof Strip
  socialProofTagline: string;
  socialProofLogos: SocialProofLogo[];

  // Section 3 — Services Grid
  servicesGridHeading: string;
  servicesGridSubheading: string;
  serviceCards: ServiceCard[];

  // Section 4 — Why Choose Us
  whyChooseUsHeading: string;
  numberedBenefits: NumberedBenefit[];
  animatedStats: AnimatedStat[];

  // Section 5 — Engagement Models
  engagementHeading: string;
  engagementSubheading: string;
  engagementModels: EngagementModel[];

  // Section 6 — Process Timeline (premium)
  premiumProcessHeading: string;
  premiumProcessSubheading: string;
  premiumProcessSteps: PremiumProcessStep[];
  premiumProcessCTA: string;

  // Section 7 — Tech Stack
  techStackHeading: string;
  techStackSubheading: string;
  techTabs: TechTab[];

  // Section 8 — Case Studies
  caseStudiesHeading: string;
  caseStudiesSubheading: string;
  caseStudies: CaseStudy[];

  // Section 9 — Testimonials V2
  testimonialsV2Heading: string;
  featuredTestimonial: FeaturedTestimonial;
  stackedTestimonials: StackedTestimonial[];

  // Section 10 — Industries Hex
  industriesHexHeading: string;
  industriesHexSubheading: string;
  industryTiles: IndustryTile[];

  // Section 11 — FAQ Split
  faqSplitHeading: string;
  faqSplitSubheading: string;
  faqItems: FAQItem[];

  // Section 12 — Final CTA Banner
  finalCTA: FinalCTAConfig;
}

// ─── Custom AI Development ─────────────────────────────────────────────────────

const customAIDevelopment: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "custom-ai-development",
  badge: "Custom AI Solutions",
  headline: "Custom AI Built",
  headlineAccent: "Precisely for You",
  subheading:
    "From intelligent document processing to generative AI products, we design, train, and deploy bespoke AI systems that integrate seamlessly into your existing stack and deliver measurable ROI from day one.",
  heroStats: [
    { value: "150+", label: "AI Models Shipped" },
    { value: "94%", label: "On-Time Delivery" },
    { value: "48hr", label: "Rapid Onboarding" },
  ],
  ctaPrimary: "Get Started →",
  ctaSecondary: "See How It Works",

  problemHeading: "The Custom AI Gap",
  problemParagraph1:
    "Off-the-shelf AI tools promise productivity gains but rarely deliver them at enterprise scale. Generic models trained on public data fail to understand your domain vocabulary, your edge cases, and your unique data distributions — leading to brittle automations that break when they encounter real-world complexity.",
  problemParagraph2:
    "Building AI internally requires scarce talent, months of R&D, and a model operations infrastructure most teams don't have. The result: great AI ideas that never make it to production, or rushed deployments that erode trust and get quietly abandoned. You need a partner who can bridge the gap between a business problem and a production-grade AI system.",
  painPoints: [
    {
      icon: AlertTriangle,
      color: "#f97316",
      title: "Generic Models Miss Domain Nuance",
      description:
        "Foundation models trained on public internet data lack the specialized knowledge needed to understand your industry's terminology, regulations, and edge cases.",
    },
    {
      icon: Timer,
      color: "#4f8ef7",
      title: "Long AI Roadmap, Slow Execution",
      description:
        "Internal AI teams are overwhelmed by backlog. Promising initiatives sit in design for months while the business waits and competitors ship new capabilities.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Models That Degrade in Production",
      description:
        "AI deployed without MLOps infrastructure drifts silently as data distributions shift — causing accuracy drops that aren't caught until customers notice.",
    },
  ],

  featuresHeading: "Our AI Development Services",
  featuresSubheading:
    "Full-spectrum custom AI capabilities, from strategy through to production-grade deployment and ongoing operations.",
  features: [
    {
      icon: Brain,
      color: "#4f8ef7",
      name: "Custom Model Training",
      description:
        "We design, fine-tune, and train models from scratch or adapt foundation models (LLMs, vision transformers, time-series networks) on your proprietary data — delivering domain-specific accuracy that generic APIs can never match.",
      link: "#",
    },
    {
      icon: MessageSquare,
      color: "#7c5cbf",
      name: "Generative AI Products",
      description:
        "Build production-grade LLM-powered applications: intelligent chatbots, document Q&A systems, automated content generation pipelines, and AI copilots — all grounded in your data with hallucination controls and audit trails.",
      link: "#",
    },
    {
      icon: Search,
      color: "#06b6d4",
      name: "Computer Vision Systems",
      description:
        "Deploy custom vision models for defect detection, medical image analysis, document OCR, identity verification, and real-time video analytics — built on annotated datasets from your operational environment.",
      link: "#",
    },
    {
      icon: Workflow,
      color: "#f59e0b",
      name: "AI Pipeline & MLOps",
      description:
        "We build the full ML lifecycle infrastructure: automated retraining pipelines, feature stores, model registries, A/B testing frameworks, and drift monitoring — so your models stay accurate and your team stays in control.",
      link: "#",
    },
    {
      icon: Layers,
      color: "#10b981",
      name: "AI Integration & APIs",
      description:
        "Every model we build ships with a production-grade REST or gRPC API, SDK, and integration connectors for your existing systems — making AI capabilities instantly consumable by your applications, workflows, and teams.",
      link: "#",
    },
    {
      icon: Shield,
      color: "#f43f5e",
      name: "Responsible AI & Compliance",
      description:
        "We embed fairness testing, explainability layers (SHAP, LIME), PII redaction, and bias audits into every model we build — giving you the documentation and controls needed for regulatory compliance and stakeholder trust.",
      link: "#",
    },
  ],

  processHeading: "How We Deliver",
  processSubheading:
    "From problem framing to production in a structured five-phase sprint.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description:
        "We run a 5-day AI opportunity sprint — mapping your data assets, defining success metrics, and scoping the highest-ROI AI use case to tackle first.",
    },
    {
      icon: Database,
      number: "02",
      title: "Data Prep",
      description:
        "Our ML engineers clean, label, and engineer features from your raw data, building a training dataset that reflects real-world distributions and edge cases.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "Build & Train",
      description:
        "We design the model architecture, run hyperparameter search, and train iteratively — sharing results with your team at each milestone for business validation.",
    },
    {
      icon: Target,
      number: "04",
      title: "Evaluate",
      description:
        "Rigorous offline and shadow-mode evaluation against your success metrics. Fairness audits, edge case testing, and stakeholder sign-off before anything goes live.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deploy & Monitor",
      description:
        "We deploy to your infrastructure (cloud, on-premises, or edge) with full MLOps tooling, then monitor model health and retrain automatically as your data evolves.",
    },
  ],

  benefitsHeading: "The AI Advantage",
  benefitsSubheading:
    "Tangible business outcomes from custom AI that actually works in production.",
  stats: [
    { value: 150, suffix: "+", label: "AI Models Shipped" },
    { value: 94, suffix: "%", label: "On-Time Delivery" },
    { value: 3, suffix: "x", label: "Avg. ROI Multiple" },
    { value: 24, suffix: "/7", label: "Model Monitoring" },
  ],
  benefits: [
    {
      title: "Domain-Tuned Accuracy",
      description:
        "Models trained on your data and validated by your domain experts consistently outperform generic APIs by 15–35% on real production tasks.",
    },
    {
      title: "Full IP Ownership",
      description:
        "You own 100% of every model, dataset, and pipeline we build. No vendor lock-in, no recurring inference fees for your own models.",
    },
    {
      title: "Production-Ready From Day One",
      description:
        "We deploy with containerized APIs, auto-scaling infrastructure, and SLA-backed uptime — not Jupyter notebooks handed off to your team to 'productionize'.",
    },
    {
      title: "Transparent Model Behaviour",
      description:
        "Every prediction comes with explainability outputs so business users can understand and trust AI decisions — critical for regulated industries and customer-facing applications.",
    },
    {
      title: "Continuous Model Improvement",
      description:
        "Our MLOps infrastructure detects performance drift and triggers automated retraining cycles, keeping your models accurate as your data and business evolve.",
    },
  ],

  industriesHeading: "Industries We Serve",
  industriesSubheading:
    "Tailored AI solutions for the sectors where accuracy and compliance matter most.",
  industries: [
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Clinical NLP & Coding Automation",
          description:
            "Extract diagnosis codes, medications, and clinical entities from unstructured EHR notes — reducing medical coding time by 60% with 97%+ accuracy.",
        },
        {
          title: "Diagnostic Imaging AI",
          description:
            "Custom vision models for radiology, pathology, and dermatology image analysis, trained on your annotated datasets and validated against specialist benchmarks.",
        },
        {
          title: "Patient Risk Stratification",
          description:
            "Predict patient deterioration, readmission risk, and treatment response using multi-modal models that combine structured data, vitals, and free-text clinical notes.",
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      icon: DollarSign,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Intelligent Document Processing",
          description:
            "Extract structured data from contracts, loan applications, and financial statements with custom NLP models that handle diverse formats and achieve 99%+ field-level accuracy.",
        },
        {
          title: "Fraud Detection Models",
          description:
            "Build proprietary fraud detection models trained on your transaction history — achieving lower false positive rates and higher recall than off-the-shelf solutions.",
        },
        {
          title: "Conversational Banking AI",
          description:
            "Deploy LLM-powered financial assistants grounded in your product catalog, FAQs, and compliance policies — with hallucination controls and audit logging for regulatory confidence.",
        },
      ],
    },
    {
      id: "retail",
      label: "Retail",
      icon: ShoppingBag,
      color: "#f59e0b",
      illustration: "🛍️",
      useCases: [
        {
          title: "Personalization Engine",
          description:
            "Build a custom recommendation engine trained on your full catalogue and customer behaviour — going beyond collaborative filtering to capture nuanced preference signals.",
        },
        {
          title: "Visual Search & Merchandising",
          description:
            "Custom vision models that enable customers to search by image, automate product tagging, and flag policy violations in user-generated content at scale.",
        },
        {
          title: "Generative Product Descriptions",
          description:
            "Fine-tune an LLM on your brand voice and product taxonomy to auto-generate SEO-optimised product descriptions, reducing content production costs by 70%.",
        },
      ],
    },
    {
      id: "logistics",
      label: "Logistics",
      icon: Truck,
      color: "#10b981",
      illustration: "🚛",
      useCases: [
        {
          title: "Document Intelligence for Freight",
          description:
            "Automate extraction from bills of lading, customs declarations, and proof-of-delivery documents using custom OCR and NLP pipelines — eliminating manual data entry.",
        },
        {
          title: "Predictive ETA Models",
          description:
            "Train custom transit time prediction models on your historical shipment data, carrier performance, and route-specific variables for industry-leading ETA accuracy.",
        },
        {
          title: "Damage Detection Vision AI",
          description:
            "Deploy edge vision models on warehouse cameras and mobile devices to detect cargo damage, label mismatches, and loading errors in real time.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS",
      icon: Cpu,
      color: "#7c5cbf",
      illustration: "💻",
      useCases: [
        {
          title: "AI Copilot Features",
          description:
            "Embed a domain-tuned AI copilot into your SaaS product that understands your data model, user intent, and workflow — differentiating your product and improving retention.",
        },
        {
          title: "Churn Prediction & Intervention",
          description:
            "Build a usage-based churn propensity model trained on your product telemetry, then trigger automated intervention workflows for at-risk accounts before they cancel.",
        },
        {
          title: "Intelligent Onboarding",
          description:
            "Deploy an AI assistant that guides new users to their 'aha moment' faster by learning from the activation patterns of your most successful accounts.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Teams across industries trust Tech 2Globe AI to ship AI that actually works.",
  testimonials: [
    {
      quote:
        "Tech 2Globe AI built a custom NLP model that extracts data from our contracts with 99.2% accuracy. We deprecated three legacy manual processes in the first month and saved over $800K annually.",
      name: "Priya Nair",
      role: "Head of AI & Automation",
      company: "Vantage Legal Services",
      initials: "PN",
      color: "#4f8ef7",
    },
    {
      quote:
        "Their team delivered a production-grade fraud detection model in 11 weeks that outperformed our existing vendor solution on every metric. The transition was seamless and the ROI was visible from week one.",
      name: "James Okafor",
      role: "VP of Risk Technology",
      company: "Pinnacle Financial Group",
      initials: "JO",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions",
  faqSubheading:
    "Clear answers to common questions about custom AI development.",
  faqs: [
    {
      id: "data-requirements",
      question: "How much data do we need to train a custom model?",
      answer:
        "It depends on the problem type. Classification tasks often work well with 1,000–10,000 labeled examples. Complex NLP or vision tasks may require more. We always assess your data situation during the discovery phase and can recommend data augmentation, synthetic data, or fine-tuning strategies to maximize what you have.",
    },
    {
      id: "timeline",
      question: "How long does it take to build and deploy a custom AI model?",
      answer:
        "A focused, well-scoped model (e.g., document classifier, sentiment analyzer, anomaly detector) typically takes 6–10 weeks from discovery to production deployment. More complex systems involving multi-modal inputs or custom LLM fine-tuning range from 12–20 weeks. We share a detailed project timeline with milestone dates during scoping.",
    },
    {
      id: "ip-ownership",
      question: "Who owns the models and training data?",
      answer:
        "You do — 100%. All models, weights, training datasets, and pipeline code developed during the engagement are transferred to you at project completion. We sign a comprehensive IP assignment agreement before work begins. There are no runtime licensing fees for models we build for you.",
    },
    {
      id: "integration",
      question: "How do you integrate AI models with our existing systems?",
      answer:
        "We deliver every model with a production-ready REST or gRPC API, Swagger documentation, and integration connectors for common platforms (Salesforce, SAP, ServiceNow, custom ERP). Our backend engineers handle the integration work as part of the project scope — you don't need to stand up a separate team.",
    },
    {
      id: "accuracy",
      question: "What accuracy levels can we realistically expect?",
      answer:
        "Accuracy depends heavily on data quality and task complexity. We establish baseline metrics during the discovery phase and agree on minimum acceptable performance thresholds before development starts. We don't release a model to production until it meets the agreed KPIs — accuracy, precision, recall, and latency are all measured against your production data distribution.",
    },
    {
      id: "maintenance",
      question: "What happens after the model is deployed?",
      answer:
        "We offer three post-deployment tiers: Standard (monthly accuracy reports + on-call support), Enhanced (automated drift detection + quarterly retraining), and Managed (full MLOps management, continuous retraining, feature engineering). All tiers include SLA-backed API uptime and a dedicated ML engineer for support.",
    },
  ],

  ctaBannerHeading: "Ready to Build Your",
  ctaBannerAccent: "Custom AI System?",
  ctaBannerSubtext:
    "Join 150+ teams that have shipped production-grade AI with Tech 2Globe AI. Your first discovery sprint starts within 48 hours.",
  ctaBannerPrimary: "Start Your Project",
  ctaBannerSecondary: "Schedule a Free Call",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: ["150+ AI Models Shipped", "48hr Onboarding", "No Lock-in"],

  socialProofTagline: "Trusted by 200+ companies worldwide",
  socialProofLogos: [
    { name: "Vantage Legal", abbr: "VL" },
    { name: "Pinnacle Financial", abbr: "PF" },
    { name: "Apex Health Systems", abbr: "AH" },
    { name: "Summit Retail Group", abbr: "SR" },
    { name: "Meridian Capital", abbr: "MC" },
    { name: "NorthStar Health", abbr: "NS" },
    { name: "Prism Analytics", abbr: "PA" },
    { name: "Orbis Logistics", abbr: "OL" },
    { name: "ClearPath SaaS", abbr: "CP" },
    { name: "DeltaStream AI", abbr: "DS" },
    { name: "Kodex Ventures", abbr: "KV" },
    { name: "Solera Technologies", abbr: "ST" },
  ],

  servicesGridHeading: "What We Deliver",
  servicesGridSubheading:
    "End-to-end custom AI development — from model design and training to production deployment and ongoing operations.",
  serviceCards: [
    {
      icon: Brain,
      color: "#4f8ef7",
      title: "Custom Model Training",
      description:
        "Fine-tune foundation models or train from scratch on your proprietary datasets. Domain-specific accuracy that generic APIs simply cannot match.",
    },
    {
      icon: MessageSquare,
      color: "#7c5cbf",
      title: "Generative AI & LLM Products",
      description:
        "Production LLM applications with grounding, citation tracking, and hallucination controls — chatbots, copilots, and document Q&A systems.",
    },
    {
      icon: Search,
      color: "#06b6d4",
      title: "Computer Vision Systems",
      description:
        "Custom vision models for defect detection, medical imaging, OCR, identity verification, and real-time video analytics at production scale.",
    },
    {
      icon: Workflow,
      color: "#f59e0b",
      title: "ML Pipeline & MLOps",
      description:
        "Automated retraining pipelines, feature stores, model registries, and drift monitoring so your AI stays accurate as your data evolves.",
    },
    {
      icon: Layers,
      color: "#10b981",
      title: "AI Integration APIs",
      description:
        "Every model ships with a production REST or gRPC API, SDK, and connectors for your existing systems — ready to consume immediately.",
    },
    {
      icon: Shield,
      color: "#f43f5e",
      title: "Responsible AI & Compliance",
      description:
        "Fairness testing, explainability layers (SHAP/LIME), PII redaction, and bias audits baked into every model we build.",
    },
  ],

  whyChooseUsHeading: "Why Leading Businesses Choose Us",
  numberedBenefits: [
    {
      number: "01",
      title: "Deep ML Engineering Expertise",
      description:
        "Our team includes PhDs and senior ML engineers from Google, DeepMind, and top AI research labs — bringing research-grade expertise to your production problems.",
    },
    {
      number: "02",
      title: "Outcome-Driven Engagements",
      description:
        "We agree on measurable performance thresholds before development starts. Models don't ship to production until they hit the KPIs we committed to together.",
    },
    {
      number: "03",
      title: "Full IP Transfer & No Lock-in",
      description:
        "You own 100% of every model, weight, and pipeline. No perpetual licensing fees. No dependency on our infrastructure after handoff.",
    },
    {
      number: "04",
      title: "Enterprise MLOps from Day One",
      description:
        "Every engagement includes production-grade deployment, automated monitoring, and drift detection — not just a notebook. Your models run reliably at scale.",
    },
  ],
  animatedStats: [
    { icon: CheckCircle2, value: 98, suffix: "%", label: "Client Retention" },
    { icon: Rocket, value: 150, suffix: "+", label: "Projects Delivered" },
    { icon: Timer, value: 72, suffix: "hr", label: "Avg. Turnaround" },
    { icon: Users, value: 15, suffix: "+", label: "Countries Served" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible engagement structures designed to match your project scope, team size, and time-to-market requirements.",
  engagementModels: [
    {
      icon: Users,
      name: "Dedicated AI Team",
      tagline: "A fully embedded ML team working exclusively on your product",
      features: [
        "Senior ML engineers + data scientists",
        "Dedicated Slack channel & daily standups",
        "Monthly sprint reviews with leadership",
        "Flexible ramp-up/down in 2-week notice",
        "Full IP transfer on all deliverables",
      ],
      idealFor: "Enterprises with ongoing AI product development",
    },
    {
      icon: Rocket,
      name: "Project Based",
      tagline: "Fixed scope, fixed timeline, guaranteed delivery",
      features: [
        "Discovery sprint → milestone-based delivery",
        "Agreed accuracy KPIs before work begins",
        "Production deployment included in scope",
        "60-day post-launch support warranty",
        "Transparent pricing, no hidden costs",
      ],
      idealFor: "Teams with a well-defined AI use case to ship fast",
      popular: true,
    },
    {
      icon: Layers,
      name: "Staff Augmentation",
      tagline: "Embed senior ML talent directly into your existing team",
      features: [
        "Vetted ML engineers in 5 business days",
        "Works inside your tools and processes",
        "Scales from 1 to 20+ engineers on demand",
        "Knowledge transfer built into the contract",
        "No long-term minimum commitment",
      ],
      idealFor: "Teams that need to accelerate capacity quickly",
    },
  ],

  premiumProcessHeading: "Our Process",
  premiumProcessSubheading:
    "From first call to first commit — here's what working with us looks like",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery Call",
      description:
        "30-minute session to understand your business problem, data assets, and success definition. No sales pressure — just problem-solving.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Solution Design",
      description:
        "Our ML architects produce a detailed technical proposal with model architecture, data requirements, timeline, and measurable KPIs.",
    },
    {
      icon: Database,
      number: "03",
      title: "Data Preparation",
      description:
        "We clean, label, and engineer features from your data — the most critical (and most neglected) phase of any AI project.",
    },
    {
      icon: Cpu,
      number: "04",
      title: "Build & Iterate",
      description:
        "Rapid model development with bi-weekly demos. You see progress early and often, and guide the direction before it's set in stone.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deploy & Handoff",
      description:
        "Production deployment with full MLOps tooling, documentation, and a 60-day support period. You own everything when we're done.",
    },
  ],
  premiumProcessCTA: "Ready to start? Let's talk →",

  techStackHeading: "Technologies We Use",
  techStackSubheading: "Best-in-class tools for every layer of your AI product",
  techTabs: [
    {
      id: "ml-frameworks",
      label: "ML & AI",
      items: [
        { name: "PyTorch", abbr: "PT", color: "#ee4c2c" },
        { name: "TensorFlow", abbr: "TF", color: "#ff6f00" },
        { name: "Hugging Face", abbr: "HF", color: "#ffcc00" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
        { name: "OpenAI API", abbr: "OA", color: "#10a37f" },
        { name: "scikit-learn", abbr: "SK", color: "#f7931e" },
        { name: "XGBoost", abbr: "XG", color: "#4f8ef7" },
        { name: "ONNX", abbr: "ON", color: "#7c5cbf" },
      ],
    },
    {
      id: "data-engineering",
      label: "Data Engineering",
      items: [
        { name: "Apache Spark", abbr: "SP", color: "#e25a1c" },
        { name: "dbt", abbr: "dbt", color: "#ff694b" },
        { name: "Airflow", abbr: "AF", color: "#017cee" },
        { name: "Kafka", abbr: "KF", color: "#231f20" },
        { name: "Snowflake", abbr: "SF", color: "#29b5e8" },
        { name: "BigQuery", abbr: "BQ", color: "#4285f4" },
        { name: "dask", abbr: "DK", color: "#fc6e4f" },
        { name: "Feast", abbr: "FS", color: "#7c5cbf" },
      ],
    },
    {
      id: "mlops",
      label: "MLOps",
      items: [
        { name: "MLflow", abbr: "ML", color: "#0194e2" },
        { name: "Kubeflow", abbr: "KF", color: "#326ce5" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
        { name: "Weights & Biases", abbr: "WB", color: "#ffbe00" },
        { name: "BentoML", abbr: "BM", color: "#f97316" },
        { name: "Ray", abbr: "RY", color: "#028cf0" },
        { name: "Seldon Core", abbr: "SC", color: "#7c5cbf" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud & Infra",
      items: [
        { name: "AWS SageMaker", abbr: "SM", color: "#ff9900" },
        { name: "Azure ML", abbr: "AZ", color: "#0089d6" },
        { name: "Google Vertex AI", abbr: "VA", color: "#4285f4" },
        { name: "Terraform", abbr: "TF", color: "#7b42bc" },
        { name: "GitHub Actions", abbr: "GA", color: "#2088ff" },
        { name: "Prometheus", abbr: "PM", color: "#e6522c" },
        { name: "Grafana", abbr: "GR", color: "#f46800" },
        { name: "FastAPI", abbr: "FA", color: "#009688" },
      ],
    },
  ],

  caseStudiesHeading: "Work That Speaks",
  caseStudiesSubheading: "Real projects. Real results.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "Contract Intelligence Platform",
      industry: "Legal Tech",
      description:
        "Built a custom NLP model to extract 40+ clause types and risk signals from complex commercial contracts for a top-10 law firm.",
      metrics: [
        "99.2% extraction accuracy",
        "80% faster review",
        "$800K annual savings",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "Real-Time Fraud Detection Engine",
      industry: "Fintech",
      description:
        "Trained a proprietary fraud scoring model on 5 years of transaction history, replacing a third-party vendor with a model that performs 30% better.",
      metrics: [
        "30% fewer false positives",
        "$2.4M fraud prevented in Q1",
        "18ms avg. scoring latency",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "Diagnostic Imaging AI Assistant",
      industry: "Healthcare",
      description:
        "Deployed a custom vision model that pre-screens chest X-rays for 12 pathology indicators, surfacing high-priority cases to radiologists.",
      metrics: [
        "94% sensitivity on priority cases",
        "40% reduction in review time",
        "FDA 510(k) documentation support",
      ],
    },
    {
      accentColor: "#f59e0b",
      projectName: "Retail Personalization Engine",
      industry: "E-Commerce",
      description:
        "Built a recommendation engine trained on 3 years of purchase data for a 10M-SKU catalogue, replacing a generic CF-based vendor solution.",
      metrics: [
        "2.8x CTR improvement",
        "22% higher AOV",
        "deployed in 8 weeks",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "Tech 2Globe AI built a contract intelligence system that transformed our due diligence practice. What used to take a team of paralegals three days now completes in under two hours — with higher accuracy than manual review. The ROI was visible within the first billing cycle.",
    name: "Priya Nair",
    role: "Head of AI & Automation",
    company: "Vantage Legal Services",
    initials: "PN",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "James Okafor",
      company: "Pinnacle Financial Group",
      quote:
        "Their fraud model outperformed our existing vendor on every benchmark. Delivered in 11 weeks, zero disruption.",
      initials: "JO",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Dr. Meera Patel",
      company: "ClearVision Diagnostics",
      quote:
        "The X-ray triage AI reduced our radiologist backlog by 40%. The team handled the FDA documentation process with us — invaluable.",
      initials: "MP",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "Carlos Rivera",
      company: "Lumio Retail Group",
      quote:
        "Best partner we've worked with. They delivered a personalization engine in 8 weeks that lifted our AOV by 22%.",
      initials: "CR",
      color: "#f59e0b",
      rating: 5,
    },
  ],

  industriesHexHeading: "Industries We Serve",
  industriesHexSubheading:
    "Custom AI solutions engineered for the complexity, regulation, and data realities of your industry.",
  industryTiles: [
    {
      icon: Heart,
      color: "#f43f5e",
      label: "Healthcare",
      tooltip: "Clinical NLP, diagnostic imaging AI, and patient risk models",
    },
    {
      icon: DollarSign,
      color: "#4f8ef7",
      label: "Finance",
      tooltip:
        "Fraud detection, credit scoring, and intelligent document processing",
    },
    {
      icon: ShoppingBag,
      color: "#f59e0b",
      label: "Retail",
      tooltip: "Personalization engines, visual search, and demand forecasting",
    },
    {
      icon: Truck,
      color: "#10b981",
      label: "Logistics",
      tooltip:
        "Predictive ETA models, damage detection, and freight document AI",
    },
    {
      icon: GraduationCap,
      color: "#7c5cbf",
      label: "EdTech",
      tooltip:
        "Adaptive learning systems, at-risk student detection, and curriculum optimization",
    },
    {
      icon: Building2,
      color: "#06b6d4",
      label: "Real Estate",
      tooltip:
        "Automated valuation models, document AI, and market forecasting",
    },
    {
      icon: Cpu,
      color: "#a855f7",
      label: "SaaS",
      tooltip:
        "AI copilot features, churn prediction, and intelligent onboarding",
    },
    {
      icon: Wrench,
      color: "#f97316",
      label: "Manufacturing",
      tooltip:
        "Predictive maintenance, quality inspection vision AI, and production optimization",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions",
  faqSplitSubheading:
    "Everything you need to know before starting your custom AI development journey.",
  faqItems: [
    {
      id: "data-requirements",
      question: "How much data do we need to train a custom model?",
      answer:
        "It depends on the problem type. Classification tasks often work well with 1,000–10,000 labeled examples. Complex NLP or vision tasks may require more. We assess your data situation during the discovery phase and recommend data augmentation, synthetic data, or fine-tuning strategies to maximize what you have.",
    },
    {
      id: "timeline",
      question: "How long does it take to build and deploy a custom AI model?",
      answer:
        "A focused, well-scoped model typically takes 6–10 weeks from discovery to production deployment. More complex systems involving multi-modal inputs or custom LLM fine-tuning range from 12–20 weeks. We share a detailed project timeline with milestone dates during scoping.",
    },
    {
      id: "ip-ownership",
      question: "Who owns the models and training data after delivery?",
      answer:
        "You do — 100%. All models, weights, training datasets, and pipeline code developed during the engagement are transferred to you at project completion. We sign a comprehensive IP assignment agreement before work begins. There are no runtime licensing fees for models we build for you.",
    },
    {
      id: "integration",
      question: "How do you integrate AI models with our existing systems?",
      answer:
        "We deliver every model with a production-ready REST or gRPC API, Swagger documentation, and integration connectors for common platforms (Salesforce, SAP, ServiceNow, custom ERP). Our backend engineers handle the integration work as part of the project scope.",
    },
    {
      id: "accuracy",
      question: "What accuracy levels can we realistically expect?",
      answer:
        "Accuracy depends on data quality and task complexity. We establish baseline metrics during the discovery phase and agree on minimum acceptable performance thresholds before development starts. Models don't go to production until they meet the agreed KPIs.",
    },
    {
      id: "maintenance",
      question: "What happens after the model is deployed?",
      answer:
        "We offer three post-deployment tiers: Standard (monthly accuracy reports + on-call support), Enhanced (automated drift detection + quarterly retraining), and Managed (full MLOps management and continuous retraining). All tiers include SLA-backed API uptime and a dedicated ML engineer.",
    },
  ],

  finalCTA: {
    heading: "Let's Build Something Extraordinary",
    subtext: "Join 200+ companies already scaling with Tech 2Globe AI",
    primaryLabel: "Start Your Project →",
    secondaryLabel: "Schedule a Free Call",
    trustItems: [
      "No commitment required",
      "Response within 24hrs",
      "NDA on request",
    ],
  },
};

// ─── Predictive AI Analytics ───────────────────────────────────────────────────

const predictiveAIAnalytics: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "predictive-ai-analytics",
  badge: "Predictive Intelligence",
  headline: "Predictive AI Analytics",
  headlineAccent: "Built for the Future",
  subheading:
    "Turn raw data into revenue-generating intelligence — before it happens. Our AI-powered predictive analytics platform transforms your business decisions from reactive to proactive, giving you a 6-month view of every critical metric.",
  heroStats: [
    { value: "98%", label: "Forecast Accuracy" },
    { value: "500+", label: "Models Deployed" },
    { value: "48hr", label: "Rapid Onboarding" },
  ],
  ctaPrimary: "Get Started →",
  ctaSecondary: "See How It Works",

  problemHeading: "The Prediction Gap",
  problemParagraph1:
    "Most businesses are flying blind — making high-stakes decisions based on last quarter's data while the market moves in real time. Demand forecasts built in spreadsheets. Churn signals buried in data silos. Revenue projections that are outdated the moment they're published. Every wrong call costs money, time, and competitive position.",
  problemParagraph2:
    "Without a purpose-built predictive analytics layer, your teams are always one step behind. Opportunities vanish before they're spotted. Risks materialize before they're detected. The organizations winning today aren't just collecting more data — they're predicting outcomes weeks before they happen and acting on those signals with precision.",
  painPoints: [
    {
      icon: AlertTriangle,
      color: "#f97316",
      title: "Reactive Decision-Making",
      description:
        "Decisions driven by historical reports miss emerging signals — leaving your business perpetually responding to last week's problems instead of anticipating next month's opportunities.",
    },
    {
      icon: Timer,
      color: "#4f8ef7",
      title: "Fragmented Data & Slow Models",
      description:
        "Disconnected data sources and manual modeling cycles mean forecasts arrive too late to act on, and are outdated by the time they reach decision-makers.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Missed Revenue & Hidden Risk",
      description:
        "Without continuous churn prediction, demand signals, and anomaly detection, businesses lose revenue they could have saved and absorb risks they could have avoided.",
    },
  ],

  featuresHeading: "Our Analytics Platform",
  featuresSubheading:
    "Six predictive intelligence capabilities that give your teams a data-driven edge — from demand forecasting to real-time anomaly detection.",
  features: [
    {
      icon: LineChart,
      color: "#4f8ef7",
      name: "Demand Forecasting",
      description:
        "Predict demand at SKU, region, and channel level up to 26 weeks forward using ensemble ML models trained on your sales history, seasonality, promotions, and external signals. Reduce overstock and stockouts simultaneously.",
      link: "#",
    },
    {
      icon: Users,
      color: "#7c5cbf",
      name: "Customer Churn Prediction",
      description:
        "Identify at-risk customers 30–60 days before they leave using behavioral telemetry, engagement signals, and support interaction patterns. Trigger automated retention playbooks the moment risk scores spike.",
      link: "#",
    },
    {
      icon: DollarSign,
      color: "#10b981",
      name: "Revenue Intelligence",
      description:
        "Generate real-time revenue forecasts and pipeline analytics that update as deals move. Understand pipeline health, forecast accuracy by rep and segment, and surface the deals most likely to slip — weeks before quarter end.",
      link: "#",
    },
    {
      icon: ShieldAlert,
      color: "#f59e0b",
      name: "Anomaly Detection",
      description:
        "Catch statistical outliers, fraud signals, and operational anomalies in real time across millions of data points. Our unsupervised detection engine learns your baselines and alerts the right teams with full context for rapid resolution.",
      link: "#",
    },
    {
      icon: Wrench,
      color: "#06b6d4",
      name: "Predictive Maintenance",
      description:
        "Reduce unplanned downtime by 40% by predicting equipment failures 72+ hours in advance. Our sensor telemetry models detect degradation signatures invisible to rule-based monitoring, enabling condition-based maintenance at scale.",
      link: "#",
    },
    {
      icon: BarChart3,
      color: "#f43f5e",
      name: "Market Trend Analysis",
      description:
        "Surface AI-powered competitive intelligence and market trend signals from structured and unstructured data sources. Know where your category is heading — and position ahead of the curve — weeks before your competitors do.",
      link: "#",
    },
  ],

  processHeading: "Our Delivery Process",
  processSubheading:
    "From raw data to production-grade predictive models in a structured, milestone-driven engagement.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Data Audit",
      description:
        "We assess your data assets, quality, and gaps — producing a prioritized list of prediction use cases ranked by ROI and feasibility.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Feature Engineering",
      description:
        "Our data scientists transform raw data into predictive signals, engineering domain-specific features that capture the patterns that matter most.",
    },
    {
      icon: Brain,
      number: "03",
      title: "Model Training",
      description:
        "We train, tune, and validate multiple model architectures against your success metrics — sharing results at each iteration for business sign-off.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Production Deployment",
      description:
        "Models deploy to your infrastructure with production-grade APIs, auto-scaling, and integration with your existing BI and operational tools.",
    },
    {
      icon: RefreshCcw,
      number: "05",
      title: "Continuous Monitoring",
      description:
        "Automated drift detection and retraining pipelines keep your models accurate as your data evolves — with performance dashboards for full visibility.",
    },
  ],

  benefitsHeading: "The Predictive Advantage",
  benefitsSubheading:
    "Measurable outcomes delivered within the first 90 days of deployment.",
  stats: [
    { value: 98, suffix: "%", label: "Forecast Accuracy" },
    { value: 500, suffix: "+", label: "Models Deployed" },
    { value: 72, suffix: "hr", label: "Avg. Go-Live" },
    { value: 40, suffix: "+", label: "Industries Served" },
  ],
  benefits: [
    {
      title: "Explainable AI Models",
      description:
        "Every prediction comes with plain-language explanations — not black-box scores. Business users understand what's driving each forecast and can act with confidence.",
    },
    {
      title: "Real-Time Pipeline Architecture",
      description:
        "Streaming data ingestion ensures your predictive models always operate on the freshest signal — not yesterday's batch. Decisions improve as events unfold.",
    },
    {
      title: "Domain-Specific Feature Engineering",
      description:
        "Our data scientists engineer features that capture the nuances of your industry — seasonality curves, behavioral cohorts, and custom lag windows generic tools miss.",
    },
    {
      title: "End-to-End Model Lifecycle Management",
      description:
        "From training to retraining, versioning to deployment, our MLOps layer keeps your model portfolio healthy — detecting drift and triggering updates automatically.",
    },
    {
      title: "BI Tool Integration",
      description:
        "Predictions surface directly in Tableau, Power BI, Looker, and your existing dashboards — no new tool to adopt, no change management for your analytics teams.",
    },
  ],

  industriesHeading: "Industries We Serve",
  industriesSubheading:
    "Predictive analytics tailored to the data realities, regulations, and decision patterns of your industry.",
  industries: [
    {
      id: "healthcare",
      label: "Healthcare",
      icon: Heart,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Patient Readmission Prediction",
          description:
            "Identify high-risk patients before discharge and allocate care resources proactively — reducing 30-day readmission rates by up to 28%.",
        },
        {
          title: "Operational Capacity Forecasting",
          description:
            "Predict bed demand, staffing needs, and supply consumption 2–4 weeks forward to eliminate last-minute crisis management in hospital operations.",
        },
        {
          title: "Claims Denial Prediction",
          description:
            "Score claims for denial risk before submission, enabling pre-emptive corrections that increase first-pass acceptance rates by 18%.",
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      icon: DollarSign,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Real-Time Fraud Detection",
          description:
            "Score every transaction in under 50ms using anomaly detection models trained on your transaction history — reducing false positives by 40%.",
        },
        {
          title: "Credit Default Forecasting",
          description:
            "Predict default probability with 500+ alternative data signals, enabling dynamic risk-based pricing and proactive portfolio management.",
        },
        {
          title: "Revenue Forecasting",
          description:
            "Generate rolling 12-month revenue forecasts with confidence intervals, updated daily as pipeline and market signals evolve.",
        },
      ],
    },
    {
      id: "retail",
      label: "Retail",
      icon: ShoppingBag,
      color: "#f59e0b",
      illustration: "🛍️",
      useCases: [
        {
          title: "SKU-Level Demand Forecasting",
          description:
            "Predict demand for every product at every location 12 weeks forward, reducing overstock by 35% and stockouts by 28%.",
        },
        {
          title: "Customer Lifetime Value Prediction",
          description:
            "Segment customers by predicted LTV and automate personalized marketing journeys that increase repeat purchase rates by 22%.",
        },
        {
          title: "Markdown Optimization",
          description:
            "Predict optimal markdown timing and depth by SKU to maximize margin recovery while clearing seasonal inventory efficiently.",
        },
      ],
    },
    {
      id: "logistics",
      label: "Logistics",
      icon: Truck,
      color: "#10b981",
      illustration: "🚛",
      useCases: [
        {
          title: "Predictive Routing",
          description:
            "Optimize routes in real time using traffic, weather, and demand predictions — cutting fuel costs by 22% and improving on-time delivery by 18%.",
        },
        {
          title: "Equipment Failure Prediction",
          description:
            "Forecast fleet maintenance needs 72+ hours in advance from sensor telemetry — reducing unplanned downtime by 40% and roadside failures by 60%.",
        },
        {
          title: "Network Capacity Forecasting",
          description:
            "Predict volume surges by lane and hub up to 4 weeks forward, enabling pre-emptive capacity allocation before bottlenecks form.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS",
      icon: Cpu,
      color: "#7c5cbf",
      illustration: "💻",
      useCases: [
        {
          title: "Churn Propensity Modeling",
          description:
            "Score every account's churn risk weekly using product telemetry, support interactions, and contract signals — triggering retention workflows automatically.",
        },
        {
          title: "Expansion Revenue Prediction",
          description:
            "Identify accounts most likely to expand based on feature adoption and usage velocity — giving customer success teams a precision target list every week.",
        },
        {
          title: "Product Usage Forecasting",
          description:
            "Forecast compute and storage consumption by customer segment to optimize infrastructure provisioning and prevent capacity incidents.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Data leaders across industries trust Tech 2Globe AI to turn raw data into competitive advantage.",
  testimonials: [
    {
      quote:
        "Tech 2Globe AI's predictive models gave us a 6-month revenue forecast with 97% accuracy. We restructured our entire go-to-market strategy around it — and beat our annual target by 14%.",
      name: "Sarah Chen",
      role: "VP of Data",
      company: "RetailMax",
      initials: "SC",
      color: "#4f8ef7",
    },
    {
      quote:
        "Their fraud detection model deployed in 9 weeks and immediately outperformed our legacy vendor. We prevented $4.5M in fraud in the first quarter alone.",
      name: "James Okonkwo",
      role: "Head of Risk Technology",
      company: "FinanceCore",
      initials: "JO",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions",
  faqSubheading: "Quick answers to the questions we hear most.",
  faqs: [
    {
      id: "deployment-time",
      question: "How long does it take to deploy a predictive model?",
      answer:
        "Most focused use cases (demand forecasting, churn prediction, anomaly detection) go from discovery to production in 6–10 weeks. More complex multi-source models with custom feature engineering range from 10–16 weeks. We share a milestone-based timeline during scoping, with your first model preview typically available within 3 weeks of kickoff.",
    },
    {
      id: "data-quality",
      question: "What data quality do I need to get started?",
      answer:
        "You don't need perfect data — you need sufficient data. Most prediction use cases work with 12–24 months of historical records in a relational database, data warehouse, or flat files. Our discovery phase includes a full data quality assessment where we identify gaps, recommend enrichment sources, and design data preprocessing pipelines to maximize model performance from what you have.",
    },
    {
      id: "bi-integration",
      question: "Can you integrate with our existing BI tools?",
      answer:
        "Yes — prediction outputs flow directly into Tableau, Power BI, Looker, Grafana, and any BI tool that reads from a database or REST endpoint. We also provide native connectors for Snowflake, BigQuery, and Redshift, so forecasts appear as first-class tables in your data warehouse — no new tool for your analysts to learn.",
    },
    {
      id: "model-accuracy",
      question: "How do you ensure model accuracy over time?",
      answer:
        "Every model we deploy includes automated drift detection that monitors prediction distributions and feature statistics against the training baseline. When drift exceeds agreed thresholds, our retraining pipeline triggers automatically — or alerts your team if human review is required. Monthly accuracy reports track model health across your full portfolio.",
    },
    {
      id: "data-security",
      question: "Is our data secure during the engagement?",
      answer:
        "Absolutely. We operate under a signed NDA and DPA from day one. Data is processed in isolated cloud environments with AES-256 encryption at rest and TLS 1.3 in transit. We support private VPC deployment, on-premises processing for regulated workloads, and role-based access controls so only authorized personnel touch your data. SOC 2 Type II documentation available on request.",
    },
    {
      id: "post-launch",
      question: "What happens after the model goes live?",
      answer:
        "We offer three post-deployment tiers: Monitor (automated drift alerts + monthly performance reports), Optimize (quarterly retraining + feature engineering improvements), and Managed (continuous model operations, full MLOps management, and a dedicated data scientist on retainer). All tiers include SLA-backed API uptime and direct Slack access to your model's engineering team.",
    },
  ],

  ctaBannerHeading: "Let's Turn Your Data Into",
  ctaBannerAccent: "Competitive Advantage",
  ctaBannerSubtext:
    "Join 200+ companies already scaling with Tech 2Globe AI's predictive analytics platform.",
  ctaBannerPrimary: "Start Your Project",
  ctaBannerSecondary: "Schedule a Free Call",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: ["500+ Models Deployed", "48hr Onboarding", "No Lock-in"],

  socialProofTagline: "Trusted by 200+ data-driven companies worldwide",
  socialProofLogos: [
    { name: "TensorFlow", abbr: "TF" },
    { name: "Apache Spark", abbr: "SP" },
    { name: "Databricks", abbr: "DB" },
    { name: "Snowflake", abbr: "SF" },
    { name: "dbt", abbr: "dbt" },
    { name: "Looker", abbr: "LK" },
    { name: "Tableau", abbr: "TB" },
    { name: "BigQuery", abbr: "BQ" },
    { name: "Redshift", abbr: "RS" },
    { name: "AWS SageMaker", abbr: "SM" },
    { name: "Azure ML", abbr: "AZ" },
    { name: "Google Cloud AI", abbr: "GC" },
  ],

  servicesGridHeading: "What We Deliver",
  servicesGridSubheading:
    "Six predictive intelligence capabilities engineered to turn your data into measurable business outcomes.",
  serviceCards: [
    {
      icon: LineChart,
      color: "#4f8ef7",
      title: "Demand Forecasting",
      description:
        "Predict demand at SKU, region, and channel level up to 26 weeks forward. Reduce overstock and eliminate stockouts with ensemble ML models trained on your sales signals.",
    },
    {
      icon: Users,
      color: "#7c5cbf",
      title: "Customer Churn Prediction",
      description:
        "Identify at-risk customers 30–60 days before they cancel using behavioral telemetry and engagement signals. Trigger retention playbooks automatically.",
    },
    {
      icon: DollarSign,
      color: "#10b981",
      title: "Revenue Intelligence",
      description:
        "Real-time revenue forecasts and pipeline analytics that update as deals move. Understand pipeline health and surface at-risk deals weeks before quarter end.",
    },
    {
      icon: ShieldAlert,
      color: "#f59e0b",
      title: "Anomaly Detection",
      description:
        "Catch outliers, fraud signals, and operational anomalies in real time. Our unsupervised detection engine learns your baselines and alerts the right teams instantly.",
    },
    {
      icon: Wrench,
      color: "#06b6d4",
      title: "Predictive Maintenance",
      description:
        "Predict equipment failures 72+ hours in advance from sensor telemetry. Reduce unplanned downtime by 40% with condition-based maintenance at industrial scale.",
    },
    {
      icon: BarChart3,
      color: "#f43f5e",
      title: "Market Trend Analysis",
      description:
        "AI-powered competitive intelligence and market trend signals from structured and unstructured data. Know where your category is heading weeks before competitors do.",
    },
  ],

  whyChooseUsHeading: "Why Data Leaders Choose Our Analytics Platform",
  numberedBenefits: [
    {
      number: "01",
      title: "Explainable AI Models",
      description:
        "Every prediction includes plain-language explanations and confidence scores — so business users can trust and act on forecasts without needing a data science degree.",
    },
    {
      number: "02",
      title: "Real-Time Pipeline Architecture",
      description:
        "Streaming data ingestion means your models always operate on the freshest signal — not yesterday's batch. Decisions improve as events unfold, in milliseconds.",
    },
    {
      number: "03",
      title: "Domain-Specific Feature Engineering",
      description:
        "Our data scientists engineer features that capture the nuances of your industry — seasonality curves, behavioral cohorts, and custom lag windows that generic tools miss.",
    },
    {
      number: "04",
      title: "End-to-End Model Lifecycle Management",
      description:
        "From training to retraining, versioning to deployment — our MLOps layer keeps your model portfolio healthy, detecting drift and triggering updates automatically.",
    },
  ],
  animatedStats: [
    { icon: Target, value: 98, suffix: "%", label: "Forecast Accuracy" },
    { icon: Rocket, value: 500, suffix: "+", label: "Models Deployed" },
    { icon: Timer, value: 72, suffix: "hr", label: "Avg. Go-Live" },
    { icon: Building2, value: 40, suffix: "+", label: "Industries Served" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible structures designed to match your project scope, team size, and time-to-market requirements.",
  engagementModels: [
    {
      icon: Users,
      name: "Dedicated Analytics Team",
      tagline:
        "A fully embedded data science team working exclusively on your platform",
      features: [
        "Senior data scientists + ML engineers",
        "Daily standups & dedicated Slack channel",
        "Monthly strategic reviews with leadership",
        "Flexible ramp-up/down in 2-week notice",
        "Full IP transfer on all models and pipelines",
      ],
      idealFor: "Enterprises with ongoing predictive analytics needs",
    },
    {
      icon: Rocket,
      name: "Project-Based Delivery",
      tagline: "Fixed scope, fixed timeline, guaranteed model performance",
      features: [
        "Discovery sprint → milestone-based delivery",
        "Agreed accuracy KPIs before work begins",
        "Production deployment included in scope",
        "60-day post-launch support warranty",
        "Transparent pricing, no hidden costs",
      ],
      idealFor: "Teams with a specific forecasting use case to ship fast",
      popular: true,
    },
    {
      icon: Layers,
      name: "Model Augmentation",
      tagline: "Embed senior ML talent directly into your existing data team",
      features: [
        "Vetted ML engineers placed in 5 business days",
        "Works inside your tools and workflows",
        "Scales from 1 to 10+ engineers on demand",
        "Knowledge transfer built into every engagement",
        "No long-term minimum commitment",
      ],
      idealFor: "Data teams that need to accelerate model delivery capacity",
    },
  ],

  premiumProcessHeading: "Our Process",
  premiumProcessSubheading:
    "From first call to first prediction — here's what working with us looks like",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Data Audit & Discovery",
      description:
        "We assess your data assets, quality, and prediction opportunities — ranking use cases by ROI and feasibility in a 5-day sprint.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Feature Engineering",
      description:
        "Our data scientists transform raw data into predictive signals — engineering domain-specific features that capture the patterns that drive outcomes.",
    },
    {
      icon: Brain,
      number: "03",
      title: "Model Training & Validation",
      description:
        "We train, tune, and validate multiple model architectures — sharing results at each iteration for business sign-off before production.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Production Deployment",
      description:
        "Models deploy with production-grade APIs, auto-scaling, and native integration with your BI tools and operational systems.",
    },
    {
      icon: RefreshCcw,
      number: "05",
      title: "Continuous Monitoring",
      description:
        "Automated drift detection and retraining pipelines keep your models accurate as your data evolves — with full performance visibility.",
    },
  ],
  premiumProcessCTA: "Ready to start? Let's talk →",

  techStackHeading: "Technologies We Use",
  techStackSubheading:
    "Best-in-class tools for every layer of your predictive analytics platform",
  techTabs: [
    {
      id: "data-engineering",
      label: "Data Engineering",
      items: [
        { name: "Apache Spark", abbr: "SP", color: "#e25a1c" },
        { name: "Apache Kafka", abbr: "KF", color: "#231f20" },
        { name: "dbt", abbr: "dbt", color: "#ff694b" },
        { name: "Airflow", abbr: "AF", color: "#017cee" },
        { name: "Snowflake", abbr: "SF", color: "#29b5e8" },
        { name: "BigQuery", abbr: "BQ", color: "#4285f4" },
        { name: "dask", abbr: "DK", color: "#fc6e4f" },
        { name: "Feast", abbr: "FS", color: "#7c5cbf" },
      ],
    },
    {
      id: "ml-ai",
      label: "ML / AI",
      items: [
        { name: "TensorFlow", abbr: "TF", color: "#ff6f00" },
        { name: "PyTorch", abbr: "PT", color: "#ee4c2c" },
        { name: "scikit-learn", abbr: "SK", color: "#f7931e" },
        { name: "XGBoost", abbr: "XG", color: "#4f8ef7" },
        { name: "Hugging Face", abbr: "HF", color: "#ffcc00" },
        { name: "MLflow", abbr: "ML", color: "#0194e2" },
        { name: "Prophet", abbr: "PR", color: "#10b981" },
        { name: "statsmodels", abbr: "SM", color: "#7c5cbf" },
      ],
    },
    {
      id: "visualization",
      label: "Visualization",
      items: [
        { name: "Tableau", abbr: "TB", color: "#1f77b4" },
        { name: "Power BI", abbr: "PB", color: "#f2c811" },
        { name: "Looker", abbr: "LK", color: "#4285f4" },
        { name: "Grafana", abbr: "GR", color: "#f46800" },
        { name: "Apache Superset", abbr: "SS", color: "#20a6c9" },
        { name: "Metabase", abbr: "MB", color: "#509ee3" },
        { name: "Redash", abbr: "RD", color: "#e8394d" },
        { name: "D3.js", abbr: "D3", color: "#f9a03c" },
      ],
    },
    {
      id: "cloud-infra",
      label: "Cloud & Infra",
      items: [
        { name: "AWS SageMaker", abbr: "SM", color: "#ff9900" },
        { name: "Azure ML", abbr: "AZ", color: "#0089d6" },
        { name: "Google Vertex AI", abbr: "VA", color: "#4285f4" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Terraform", abbr: "TF", color: "#7b42bc" },
        { name: "Redshift", abbr: "RS", color: "#8c4fff" },
        { name: "Databricks", abbr: "DB", color: "#ff3621" },
      ],
    },
  ],

  caseStudiesHeading: "Work That Speaks",
  caseStudiesSubheading: "Real projects. Real results.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "RetailMax Demand Intelligence",
      industry: "Retail",
      description:
        "Deployed SKU-level demand forecasting across 18,000 products and 340 store locations, replacing a legacy statistical model with an ensemble ML system.",
      metrics: [
        "35% overstock reduction",
        "$2.1M/yr inventory savings",
        "28% fewer stockouts",
      ],
    },
    {
      accentColor: "#f59e0b",
      projectName: "FinanceCore Fraud Prevention",
      industry: "Finance",
      description:
        "Built a real-time fraud scoring model trained on 5 years of transaction history, processing 12M transactions daily with sub-30ms latency.",
      metrics: [
        "99.2% detection precision",
        "$4.5M fraud prevented in Q1",
        "40% fewer false positives",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "HealthTrack Readmission AI",
      industry: "Healthcare",
      description:
        "Developed a patient readmission prediction model integrated with the EHR, providing risk scores at discharge for care coordination prioritization.",
      metrics: [
        "28% reduction in 30-day readmissions",
        "97% model AUC",
        "$3.2M annual cost avoidance",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "LogiFlow Predictive Routing",
      industry: "Logistics",
      description:
        "Deployed ML-powered route optimization and fleet maintenance prediction for a 2,400-vehicle logistics network across 12 countries.",
      metrics: [
        "22% fuel cost reduction",
        "18% faster delivery times",
        "40% fewer unplanned breakdowns",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "Tech 2Globe AI's predictive models gave us a 6-month revenue forecast with 97% accuracy. We restructured our entire go-to-market strategy around it — and beat our annual target by 14%. The team delivered production-ready models in 8 weeks, not 8 months.",
    name: "Sarah Chen",
    role: "VP of Data",
    company: "RetailMax",
    initials: "SC",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "James Okonkwo",
      company: "FinanceCore",
      quote:
        "Their fraud model deployed in 9 weeks and immediately outperformed our legacy vendor. Precision at 99.2% — a number I didn't think was achievable.",
      initials: "JO",
      color: "#f59e0b",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "HealthTrack Systems",
      quote:
        "The readmission prediction model is now core to our discharge planning workflow. 28% reduction in 30-day readmissions speaks for itself.",
      initials: "PS",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "Miguel Reyes",
      company: "LogiFlow Logistics",
      quote:
        "22% fuel savings and 18% faster delivery — deployed across our entire fleet in under 12 weeks. The ROI was undeniable from month one.",
      initials: "MR",
      color: "#7c5cbf",
      rating: 5,
    },
  ],

  industriesHexHeading: "Industries We Serve",
  industriesHexSubheading:
    "Predictive analytics engineered for the data complexity and decision patterns of your industry.",
  industryTiles: [
    {
      icon: Heart,
      color: "#f43f5e",
      label: "Healthcare",
      tooltip:
        "Patient readmission prediction, capacity forecasting, and claims denial prevention",
    },
    {
      icon: DollarSign,
      color: "#4f8ef7",
      label: "Finance",
      tooltip:
        "Fraud detection, credit default forecasting, and revenue pipeline intelligence",
    },
    {
      icon: ShoppingBag,
      color: "#f59e0b",
      label: "Retail",
      tooltip:
        "SKU-level demand forecasting, churn prediction, and markdown optimization",
    },
    {
      icon: Truck,
      color: "#10b981",
      label: "Logistics",
      tooltip:
        "Predictive routing, equipment failure forecasting, and network capacity planning",
    },
    {
      icon: Wrench,
      color: "#f97316",
      label: "Manufacturing",
      tooltip:
        "Predictive maintenance, quality defect prediction, and production yield forecasting",
    },
    {
      icon: Zap,
      color: "#06b6d4",
      label: "Energy",
      tooltip:
        "Energy demand forecasting, grid anomaly detection, and asset failure prediction",
    },
    {
      icon: Cpu,
      color: "#7c5cbf",
      label: "SaaS",
      tooltip:
        "Churn propensity modeling, expansion revenue prediction, and usage forecasting",
    },
    {
      icon: Network,
      color: "#a855f7",
      label: "Telecommunications",
      tooltip:
        "Network churn prediction, infrastructure failure forecasting, and ARPU optimization",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions",
  faqSplitSubheading:
    "Everything you need to know before starting your predictive analytics journey.",
  faqItems: [
    {
      id: "deployment-time",
      question: "How long does it take to deploy a predictive model?",
      answer:
        "Most focused use cases — demand forecasting, churn prediction, anomaly detection — go from discovery to production in 6–10 weeks. More complex multi-source models range from 10–16 weeks. We share a milestone-based timeline during scoping, with your first model preview typically available within 3 weeks of kickoff.",
    },
    {
      id: "data-quality",
      question: "What data quality do I need to get started?",
      answer:
        "You don't need perfect data — you need sufficient data. Most prediction use cases work with 12–24 months of historical records in a database, data warehouse, or flat files. Our discovery phase includes a full data quality assessment where we identify gaps, recommend enrichment sources, and design preprocessing pipelines to maximize model performance from what you have.",
    },
    {
      id: "bi-integration",
      question: "Can you integrate with our existing BI tools?",
      answer:
        "Yes — prediction outputs flow directly into Tableau, Power BI, Looker, Grafana, and any BI tool that reads from a database or REST endpoint. We also provide native connectors for Snowflake, BigQuery, and Redshift, so forecasts appear as first-class tables in your data warehouse — no new tool for your analysts to learn.",
    },
    {
      id: "model-accuracy",
      question: "How do you ensure model accuracy over time?",
      answer:
        "Every model we deploy includes automated drift detection that monitors prediction distributions and feature statistics against the training baseline. When drift exceeds agreed thresholds, our retraining pipeline triggers automatically. Monthly accuracy reports track model health across your full portfolio, with SLA-backed response times for critical models.",
    },
    {
      id: "data-security",
      question: "Is our data secure during the engagement?",
      answer:
        "Absolutely. We operate under a signed NDA and DPA from day one. Data is processed in isolated cloud environments with AES-256 encryption at rest and TLS 1.3 in transit. We support private VPC deployment and on-premises processing for regulated workloads. SOC 2 Type II documentation available on request.",
    },
    {
      id: "post-launch",
      question: "What happens after the model goes live?",
      answer:
        "We offer three post-deployment tiers: Monitor (automated drift alerts + monthly performance reports), Optimize (quarterly retraining + feature engineering improvements), and Managed (continuous model operations + dedicated data scientist on retainer). All tiers include SLA-backed API uptime and direct access to your model's engineering team via Slack.",
    },
  ],

  finalCTA: {
    heading: "Let's Turn Your Data Into a Competitive Advantage",
    subtext:
      "Join 200+ companies already scaling with Tech 2Globe AI's predictive analytics platform",
    primaryLabel: "Start Your Project →",
    secondaryLabel: "Schedule a Free Call",
    trustItems: [
      "No commitment required",
      "Response within 24hrs",
      "NDA on request",
    ],
  },
};

// ─── Hire Lovable AI Developer ─────────────────────────────────────────────────

const hireLovableAIDeveloper: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "hire-lovable-ai-developer",
  badge: "Lovable AI Development",
  headline: "Hire a Lovable",
  headlineAccent: "AI Developer",
  subheading:
    "Ship Faster. Build Smarter. Own Your Code.\n\nExpert Lovable.dev Developers, Prompt Engineers & Full-Stack AI App Builders — delivering production-grade web apps, SaaS platforms, and MVPs in days, not months.",
  heroStats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "5–10x", label: "Faster Than Traditional Dev" },
    { value: "3 Days", label: "MVP Turnaround" },
  ],
  ctaPrimary: "Hire a Lovable Developer →",
  ctaSecondary: "Get a Free Consultation",

  problemHeading: "Why Traditional Development Is Holding You Back",
  problemParagraph1:
    "In today's hyper-competitive digital landscape, speed to market is everything. Businesses that build and launch software faster consistently outperform those stuck in traditional development cycles. Months-long build timelines, bloated engineering costs, and brittle codebases are no longer acceptable — especially when AI-powered tools can change the game entirely.",
  problemParagraph2:
    "Lovable AI is a tool — not a replacement for expertise. Getting the best results requires skilled Lovable prompt engineers who know how to structure prompts, review generated code for performance and security, and integrate complex business logic. That is precisely what our team brings to every engagement.",
  painPoints: [
    {
      icon: Timer,
      color: "#f97316",
      title: "Months-Long Dev Cycles",
      description:
        "Traditional development takes 3–6 months to ship an MVP. Your competitors are already live while you're still in sprint planning.",
    },
    {
      icon: TrendingDown,
      color: "#4f8ef7",
      title: "Ballooning Dev Costs",
      description:
        "Building in-house or through traditional agencies burns budget on repetitive boilerplate work that AI can handle in minutes.",
    },
    {
      icon: AlertTriangle,
      color: "#7c5cbf",
      title: "Generic AI With No Expertise",
      description:
        "Raw AI output without expert review produces insecure, unscalable code. You need senior developers who know how to make AI output production-ready.",
    },
  ],

  featuresHeading: "Our Lovable AI Development Services",
  featuresSubheading:
    "End-to-end Lovable.dev development tailored precisely to your business goals and timelines.",
  features: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      name: "MVP Development with Lovable AI",
      description:
        "Turn your product idea into a functional, market-ready MVP within days. Our team — among the top generative AI developers for hire — uses structured prompt engineering to generate clean, testable code so you can validate your concept before committing to full-scale investment.",
      link: "#",
    },
    {
      icon: Layers,
      color: "#7c5cbf",
      name: "SaaS Application Development",
      description:
        "Build scalable, subscription-ready SaaS platforms with authentication, billing integrations, role-based dashboards, and multi-tenant architecture. We deliver SaaS applications built to grow from day one.",
      link: "#",
    },
    {
      icon: LayoutDashboard,
      color: "#06b6d4",
      name: "Internal Tools & Custom Dashboards",
      description:
        "Replace disconnected spreadsheets and manual workflows with powerful internal tools. Our Lovable.dev developers build custom dashboards, admin panels, and automation systems that streamline operations immediately.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#f59e0b",
      name: "AI-Powered Web Application Development",
      description:
        "Integrate large language models, predictive analytics, conversational AI, and intelligent automation directly into your web apps. Our team delivers AI-powered features that genuinely enhance user experience and business efficiency.",
      link: "#",
    },
    {
      icon: Pencil,
      color: "#10b981",
      name: "Expert Prompt Engineering",
      description:
        "Maximising Lovable.dev value requires precision prompting. Our certified Lovable prompt engineers craft structured, detailed prompts that produce cleaner code, reduce credit consumption, and eliminate costly revision cycles.",
      link: "#",
    },
    {
      icon: Wrench,
      color: "#f43f5e",
      name: "App Optimization & Ongoing Support",
      description:
        "Already have an app on Lovable.dev? We provide code audits, performance optimization, security hardening, feature enhancements, and maintenance so your application scales reliably with your business.",
      link: "#",
    },
  ],

  processHeading: "Our Lovable Development Process",
  processSubheading:
    "A streamlined, transparent workflow combining AI efficiency with senior human expertise.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Scoping",
      description:
        "Free consultation to understand your vision, users, technical requirements, and business goals. Clear scoping prevents costly revisions later.",
    },
    {
      icon: Pencil,
      number: "02",
      title: "Prompt Architecture",
      description:
        "Our expert Lovable prompt engineers design a structured prompt strategy. Precision prompting is the foundation of high-quality Lovable.dev output.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Code Review",
      description:
        "Senior Lovable developers review every line of generated code for logic accuracy, performance, security vulnerabilities, and business alignment.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security & Compliance",
      description:
        "Thorough security assessments before any deployment. GDPR, SOC 2, and industry-specific compliance checks are built into every engagement.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deploy & Handover",
      description:
        "Full production deployment, complete documentation, and 100% code ownership transfer. Post-launch support available for scaling and feature growth.",
    },
  ],

  benefitsHeading: "The Lovable AI Advantage",
  benefitsSubheading:
    "Concrete, measurable, and immediate advantages over traditional development.",
  stats: [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 60, suffix: "%", label: "Cost Reduction" },
    { value: 3, suffix: " days", label: "MVP Turnaround" },
    { value: 100, suffix: "%", label: "Code Ownership" },
  ],
  benefits: [
    {
      title: "Lightning-Fast Delivery",
      description:
        "Deliver MVPs in 3–7 days and full applications in weeks — 5–10x faster than conventional coding. Stop waiting months for software that should take days.",
    },
    {
      title: "Dramatically Lower Costs",
      description:
        "AI automation eliminates repetitive coding, cutting overall development costs by up to 60% compared to traditional full-stack development engagements.",
    },
    {
      title: "Production-Grade Quality",
      description:
        "Every build goes through security audits, compliance checks, and performance reviews — no shortcuts. AI speed does not mean lower standards.",
    },
    {
      title: "100% Code Ownership",
      description:
        "Full GitHub integration. Your codebase, your rules — zero vendor lock-in, ever. You own everything we build from the first commit.",
    },
    {
      title: "Rapid Iteration Cycles",
      description:
        "Pivot features quickly after user feedback without burning weeks of engineering time. AI-powered development makes iteration genuinely fast.",
    },
  ],

  industriesHeading: "Who Should Hire a Lovable AI Developer?",
  industriesSubheading:
    "Lovable AI development delivers maximum value across these key segments.",
  industries: [
    {
      id: "startups",
      label: "Startups & Founders",
      icon: Rocket,
      color: "#4f8ef7",
      illustration: "🚀",
      useCases: [
        {
          title: "Rapid MVP Validation",
          description:
            "Get a working product into users' hands in days. Validate your concept before committing to full-scale investment at a fraction of traditional costs.",
        },
        {
          title: "Investor-Ready Demos",
          description:
            "Build polished, functional prototypes that impress investors — not wireframes. Ship something real before your next fundraise.",
        },
        {
          title: "Zero Engineering Team Required",
          description:
            "Launch without hiring a full in-house engineering team. Our Lovable developers act as your technical co-founders for the early stages.",
        },
      ],
    },
    {
      id: "sme",
      label: "SMEs & Growing Businesses",
      icon: Building2,
      color: "#7c5cbf",
      illustration: "🏢",
      useCases: [
        {
          title: "Custom Internal Tools",
          description:
            "Replace disconnected spreadsheets and manual workflows with powerful dashboards and admin panels. Have tools running within weeks, not months.",
        },
        {
          title: "Workflow Automation Apps",
          description:
            "Build AI-powered apps that automate repetitive operations, reducing overhead and freeing your team to focus on growth.",
        },
        {
          title: "Customer-Facing Portals",
          description:
            "Create polished client portals, booking systems, and self-service tools that elevate your brand without massive engineering investment.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "Enterprise Teams",
      icon: Layers,
      color: "#10b981",
      illustration: "🏛️",
      useCases: [
        {
          title: "Proof-of-Concept Development",
          description:
            "Accelerate POC builds without pulling resources from core engineering. Validate department-level tools and innovation projects on-demand.",
        },
        {
          title: "Internal Tool Modernization",
          description:
            "Rapidly rebuild legacy internal tools with modern, AI-powered equivalents — at a fraction of traditional custom development cost.",
        },
        {
          title: "Enterprise-Grade Security",
          description:
            "With expert oversight, enterprise-grade security and compliance are fully achievable even on AI-generated codebases.",
        },
      ],
    },
    {
      id: "agencies",
      label: "Agencies & Consultancies",
      icon: Users,
      color: "#f59e0b",
      illustration: "🤝",
      useCases: [
        {
          title: "White-Label Development",
          description:
            "Deliver client projects faster and at higher margins using our Lovable AI development services as white-label partnerships.",
        },
        {
          title: "Faster Client Delivery",
          description:
            "Compress project timelines without sacrificing quality. Deliver 5x faster than traditional agencies and expand your capacity without adding headcount.",
        },
        {
          title: "Speed Advantage at Scale",
          description:
            "Use the speed advantage of Lovable AI development without the internal learning curve. We handle the complexity — you handle the client relationship.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS Product Teams",
      icon: Cpu,
      color: "#f43f5e",
      illustration: "💻",
      useCases: [
        {
          title: "Feature Iteration at Speed",
          description:
            "Prototype and validate new product features 5–10x faster. Get real user feedback before committing full engineering sprints to new functionality.",
        },
        {
          title: "AI Feature Integration",
          description:
            "Embed LLM-powered features, intelligent automation, and AI copilots directly into your SaaS product — shipped in days, not quarters.",
        },
        {
          title: "Onboarding & Dashboard Improvements",
          description:
            "Redesign onboarding flows and dashboards rapidly to improve activation and retention without blocking your core engineering team.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Teams across industries trust us to ship Lovable AI apps that actually work in production.",
  testimonials: [
    {
      quote:
        "We went from idea to live MVP in 4 days using Tech 2Globe's Lovable AI development team. What would have cost us $80K and 3 months traditionally cost a fraction of that. The code quality exceeded what our previous agency delivered.",
      name: "Marcus Webb",
      role: "Founder & CEO",
      company: "Launchpad Ventures",
      initials: "MW",
      color: "#4f8ef7",
    },
    {
      quote:
        "Their prompt engineering expertise is the real differentiator. We'd tried Lovable ourselves and got mediocre results. Their team delivered a polished SaaS dashboard in under 2 weeks with clean, maintainable code we fully own.",
      name: "Priya Nair",
      role: "Head of Product",
      company: "Meridian SaaS",
      initials: "PN",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions",
  faqSubheading:
    "Everything you need to know about hiring a Lovable AI developer.",
  faqs: [
    {
      id: "what-does",
      question: "What exactly does a Lovable AI developer do?",
      answer:
        "A Lovable AI developer uses the Lovable.dev platform to generate full-stack web applications from natural language descriptions. They combine advanced prompt engineering skills with traditional development expertise to produce clean, scalable, production-ready code far faster than conventional coding methods.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an MVP with Lovable?",
      answer:
        "Simple MVPs are typically delivered within 3–7 business days. More complex applications with custom integrations, multi-role authentication, and advanced workflows generally take 2–5 weeks. Either way, Lovable AI development is 5–10x faster than traditional software development timelines.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built using Lovable.dev?",
      answer:
        "Our Lovable developers can build web apps, SaaS platforms, e-commerce solutions, internal tools, admin dashboards, AI-integrated applications, mobile-responsive websites, CRM systems, and more. If it runs on modern web technology, Lovable.dev can build it.",
    },
    {
      id: "code-quality",
      question:
        "Is the code generated by Lovable AI secure and production-ready?",
      answer:
        "AI-generated code is production-ready when reviewed and refined by expert developers. Our team conducts full security audits, performance reviews, and compliance checks on every Lovable.dev build before deployment — ensuring your application meets enterprise standards.",
    },
    {
      id: "ownership",
      question: "Will I own the code after the project is complete?",
      answer:
        "Absolutely. Full code ownership is a core part of every engagement. We deliver complete GitHub repository access, technical documentation, and zero vendor lock-in. Your application, your code — always.",
    },
    {
      id: "post-launch",
      question: "Do you offer post-launch support for Lovable AI applications?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, feature additions, security updates, performance optimization, and scaling assistance. Our Lovable AI development services are designed for long-term partnership, not one-time delivery.",
    },
  ],

  ctaBannerHeading: "Stop Waiting Months",
  ctaBannerAccent: "for Software That Should Take Days",
  ctaBannerSubtext:
    "Hire an expert Lovable.dev developer today and launch your next product with AI speed and human-grade quality.",
  ctaBannerPrimary: "Get a Free Consultation",
  ctaBannerSecondary: "Talk to an Expert",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: [
    "500+ Projects Delivered",
    "3-Day MVP",
    "100% Code Ownership",
  ],

  socialProofTagline: "Trusted by startups and enterprises worldwide",
  socialProofLogos: [
    { name: "Launchpad Ventures", abbr: "LV" },
    { name: "Meridian SaaS", abbr: "MS" },
    { name: "Apex Startups", abbr: "AS" },
    { name: "NorthStar Tech", abbr: "NS" },
    { name: "Prism Digital", abbr: "PD" },
    { name: "ClearPath Studios", abbr: "CS" },
    { name: "Delta Innovations", abbr: "DI" },
    { name: "Kodex Agency", abbr: "KA" },
    { name: "Summit Labs", abbr: "SL" },
    { name: "Orbis Ventures", abbr: "OV" },
    { name: "Solera Digital", abbr: "SD" },
    { name: "TechBridge Group", abbr: "TB" },
  ],

  servicesGridHeading: "What We Deliver",
  servicesGridSubheading:
    "Full-stack Lovable AI development from prompt architecture and code generation to production deployment and ongoing support.",
  serviceCards: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      title: "MVP Development",
      description:
        "Market-ready MVPs in 3–7 days using structured Lovable.dev prompt engineering and senior code review.",
    },
    {
      icon: Layers,
      color: "#7c5cbf",
      title: "SaaS Applications",
      description:
        "Scalable SaaS platforms with auth, billing, dashboards, and multi-tenant architecture built to grow.",
    },
    {
      icon: LayoutDashboard,
      color: "#06b6d4",
      title: "Internal Tools & Dashboards",
      description:
        "Custom admin panels and automation systems that replace manual workflows immediately.",
    },
    {
      icon: Brain,
      color: "#f59e0b",
      title: "AI-Powered Web Apps",
      description:
        "LLM integrations, predictive analytics, and conversational AI features embedded into your web apps.",
    },
    {
      icon: Pencil,
      color: "#10b981",
      title: "Expert Prompt Engineering",
      description:
        "Precision prompting that produces cleaner code, reduces credits, and eliminates costly revision cycles.",
    },
    {
      icon: Wrench,
      color: "#f43f5e",
      title: "Optimization & Support",
      description:
        "Code audits, security hardening, performance optimization, and feature enhancements for existing apps.",
    },
  ],

  whyChooseUsHeading: "Why Leading Businesses Choose Us",
  numberedBenefits: [
    {
      number: "01",
      title: "Senior Lovable Prompt Engineers",
      description:
        "Our certified Lovable developers know exactly how to structure prompts to produce clean, maintainable, production-ready code — not just working demos.",
    },
    {
      number: "02",
      title: "Human Review on Every Build",
      description:
        "Every line of AI-generated code is reviewed by senior developers for security, performance, and business logic correctness before it goes to production.",
    },
    {
      number: "03",
      title: "Full IP Ownership Guaranteed",
      description:
        "You receive 100% GitHub ownership, complete documentation, and zero vendor lock-in. Your code belongs to you from the first commit.",
    },
    {
      number: "04",
      title: "5–10x Speed, Enterprise Quality",
      description:
        "We combine AI-powered speed with human-grade quality control — delivering GDPR-compliant, SOC 2-ready applications that actually scale.",
    },
  ],
  animatedStats: [
    { icon: Rocket, value: 500, suffix: "+", label: "Projects Delivered" },
    { icon: Timer, value: 3, suffix: " days", label: "Avg. MVP Time" },
    { icon: CheckCircle2, value: 100, suffix: "%", label: "Code Ownership" },
    { icon: Users, value: 60, suffix: "%", label: "Cost Savings" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible structures designed for your project scope, team size, and launch timeline.",
  engagementModels: [],

  premiumProcessHeading: "Our Development Process",
  premiumProcessSubheading:
    "From first call to live product — here's exactly what working with us looks like",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Scoping",
      description:
        "Free 30-minute consultation to understand your vision, users, technical requirements, and business goals. No sales pressure — just problem-solving.",
    },
    {
      icon: Pencil,
      number: "02",
      title: "Prompt Architecture",
      description:
        "Our Lovable prompt engineers design a structured prompt strategy that defines scope, technical constraints, and quality guardrails before any code is generated.",
    },
    {
      icon: Code2,
      number: "03",
      title: "AI Generation & Review",
      description:
        "Lovable.dev generates the application while senior developers review every output for logic accuracy, security gaps, and business alignment in real time.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security & Compliance",
      description:
        "Full security audit, performance review, and GDPR/SOC 2 compliance checks before anything touches production. No shortcuts.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deploy & Handover",
      description:
        "Production deployment with 100% GitHub code transfer, complete technical documentation, and a 14-day post-launch support window.",
    },
  ],
  premiumProcessCTA: "Ready to ship fast? Let's talk →",

  techStackHeading: "Lovable Tech Stack",
  techStackSubheading:
    "Lovable.dev plus the best supporting tools for every layer of your application",
  techTabs: [
    {
      id: "lovable-core",
      label: "Lovable Tech Stack",
      items: [
        { name: "Lovable.dev", abbr: "LV", color: "#ff5757" },
        { name: "React", abbr: "RE", color: "#61dafb" },
        { name: "TypeScript", abbr: "TS", color: "#3178c6" },
        { name: "Tailwind CSS", abbr: "TW", color: "#06b6d4" },
        { name: "Vite", abbr: "VI", color: "#646cff" },
        { name: "shadcn/ui", abbr: "SH", color: "#000000" },
        { name: "Supabase", abbr: "SB", color: "#3ecf8e" },
        { name: "PostgreSQL", abbr: "PG", color: "#4169e1" },
      ],
    },
    {
      id: "ai-integrations",
      label: "AI & LLM",
      items: [
        { name: "OpenAI GPT-4", abbr: "OA", color: "#10a37f" },
        { name: "Claude API", abbr: "CL", color: "#d97706" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
        { name: "Pinecone", abbr: "PC", color: "#000066" },
        { name: "Vercel AI SDK", abbr: "VA", color: "#000000" },
        { name: "Hugging Face", abbr: "HF", color: "#ffcc00" },
        { name: "Replicate", abbr: "RP", color: "#6366f1" },
        { name: "Anthropic", abbr: "AN", color: "#c96442" },
      ],
    },
    {
      id: "backend-auth",
      label: "Backend & Auth",
      items: [
        { name: "Supabase Auth", abbr: "SA", color: "#3ecf8e" },
        { name: "Stripe", abbr: "ST", color: "#635bff" },
        { name: "Resend", abbr: "RS", color: "#000000" },
        { name: "Cloudflare", abbr: "CF", color: "#f38020" },
        { name: "Vercel", abbr: "VC", color: "#000000" },
        { name: "Node.js", abbr: "ND", color: "#339933" },
        { name: "REST APIs", abbr: "API", color: "#4f8ef7" },
        { name: "Webhooks", abbr: "WH", color: "#7c5cbf" },
      ],
    },
    {
      id: "deployment",
      label: "Deployment & DevOps",
      items: [
        { name: "GitHub", abbr: "GH", color: "#181717" },
        { name: "Vercel", abbr: "VC", color: "#000000" },
        { name: "Netlify", abbr: "NL", color: "#00c7b7" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "AWS", abbr: "AW", color: "#ff9900" },
        { name: "Cloudflare Pages", abbr: "CP", color: "#f38020" },
        { name: "CI/CD Pipelines", abbr: "CD", color: "#2088ff" },
        { name: "Monitoring", abbr: "MN", color: "#e6522c" },
      ],
    },
  ],

  caseStudiesHeading: "Work That Speaks",
  caseStudiesSubheading: "Real Lovable AI projects. Real results.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "SaaS Onboarding Platform",
      industry: "HR Tech",
      description:
        "Built a full-featured employee onboarding SaaS with multi-role auth, automated workflows, and a branded client portal using Lovable.dev in 6 days.",
      metrics: [
        "Delivered in 6 days",
        "60% under budget",
        "100% code ownership",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "AI-Powered CRM Dashboard",
      industry: "Sales Tech",
      description:
        "Developed a custom CRM with AI-powered lead scoring, predictive pipeline analytics, and automated follow-up workflows for a Series A startup.",
      metrics: [
        "3-week full delivery",
        "GPT-4 lead scoring",
        "28% pipeline improvement",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "E-Commerce MVP",
      industry: "Retail",
      description:
        "Launched a production-ready e-commerce platform with Stripe payments, inventory management, and a customer portal — from zero to live in 5 days.",
      metrics: [
        "Live in 5 days",
        "Stripe integration included",
        "First $10K revenue in week 1",
      ],
    },
    {
      accentColor: "#f59e0b",
      projectName: "Internal Operations Tool",
      industry: "Logistics",
      description:
        "Replaced 6 disconnected spreadsheets with a unified operations dashboard featuring real-time tracking, automated reporting, and role-based access.",
      metrics: [
        "Replaced 6 spreadsheets",
        "4 hours saved per employee/week",
        "Zero-downtime deployment",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "We'd been quoted $120K and 5 months by traditional agencies. Tech 2Globe's Lovable AI team delivered a fully functional SaaS platform with auth, billing, and a polished dashboard in 9 days — at a fraction of the cost. The code is clean, we own it entirely, and it already has paying customers.",
    name: "Marcus Webb",
    role: "Founder & CEO",
    company: "Launchpad Ventures",
    initials: "MW",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "Priya Nair",
      company: "Meridian SaaS",
      quote:
        "Their prompt engineering expertise made all the difference. We had tried Lovable ourselves and got messy code. Their team delivered a polished, secure dashboard in 2 weeks.",
      initials: "PN",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Carlos Rivera",
      company: "Orbis Logistics",
      quote:
        "Replaced our entire spreadsheet operation in under a week. The tool is faster, more accurate, and our team adopted it immediately. Outstanding delivery.",
      initials: "CR",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      company: "Delta Innovations Agency",
      quote:
        "We white-label their Lovable AI services for our clients. Delivery is 5x faster and margins are significantly better. Genuinely changed our agency model.",
      initials: "SC",
      color: "#f59e0b",
      rating: 5,
    },
  ],

  industriesHexHeading: "Who We Build For",
  industriesHexSubheading:
    "Lovable AI development delivers maximum value for teams that need to move fast without sacrificing quality.",
  industryTiles: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      label: "Startups",
      tooltip: "MVP validation, investor demos, and zero-to-one product builds",
    },
    {
      icon: Store,
      color: "#7c5cbf",
      label: "SMEs",
      tooltip: "Internal tools, workflow automation, and custom dashboards",
    },
    {
      icon: Landmark,
      color: "#10b981",
      label: "Enterprise",
      tooltip:
        "POC development, tool modernization, and AI feature integration",
    },
    {
      icon: Briefcase,
      color: "#f59e0b",
      label: "Agencies",
      tooltip: "White-label delivery, faster client projects, higher margins",
    },
    {
      icon: Cloud,
      color: "#f43f5e",
      label: "SaaS Teams",
      tooltip: "Feature prototyping, AI integrations, and rapid iteration",
    },
    {
      icon: ShoppingCart,
      color: "#06b6d4",
      label: "E-Commerce",
      tooltip: "Store builds, custom portals, and AI-powered product features",
    },
    {
      icon: HeartPulse,
      color: "#ef4444",
      label: "HealthTech",
      tooltip: "HIPAA-aware apps, patient portals, and clinical tools",
    },
    {
      icon: GraduationCap,
      color: "#a855f7",
      label: "EdTech",
      tooltip: "Learning platforms, student dashboards, and assessment tools",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions",
  faqSplitSubheading:
    "Everything you need to know before hiring a Lovable AI developer.",
  faqItems: [
    {
      id: "what-does",
      question: "What exactly does a Lovable AI developer do?",
      answer:
        "A Lovable AI developer uses the Lovable.dev platform to generate full-stack web applications from natural language descriptions. They combine advanced prompt engineering skills with traditional development expertise to produce clean, scalable, production-ready code far faster than conventional coding methods.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an MVP with Lovable?",
      answer:
        "Simple MVPs are typically delivered within 3–7 business days. More complex applications with custom integrations, multi-role authentication, and advanced workflows generally take 2–5 weeks. Either way, Lovable AI development is 5–10x faster than traditional software development timelines.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built using Lovable.dev?",
      answer:
        "Our Lovable developers can build web apps, SaaS platforms, e-commerce solutions, internal tools, admin dashboards, AI-integrated applications, mobile-responsive websites, CRM systems, and more. If it runs on modern web technology, Lovable.dev can build it.",
    },
    {
      id: "code-quality",
      question:
        "Is the code generated by Lovable AI secure and production-ready?",
      answer:
        "AI-generated code is production-ready when reviewed and refined by expert developers. Our team conducts full security audits, performance reviews, and compliance checks on every Lovable.dev build before deployment — ensuring your application meets enterprise standards.",
    },
    {
      id: "ownership",
      question: "Will I own the code after the project is complete?",
      answer:
        "Absolutely. Full code ownership is a core part of every engagement. We deliver complete GitHub repository access, technical documentation, and zero vendor lock-in. Your application, your code — always.",
    },
    {
      id: "post-launch",
      question: "Do you offer post-launch support for Lovable AI applications?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, feature additions, security updates, performance optimization, and scaling assistance. Our Lovable AI development services are designed for long-term partnership, not one-time delivery.",
    },
  ],

  finalCTA: {
    heading: "Ready to Build Faster with a Lovable AI Developer?",
    subtext:
      "Stop waiting months for software that should take days. Hire an expert Lovable.dev developer today.",
    primaryLabel: "Get a Free Consultation →",
    secondaryLabel: "Talk to an Expert",
    trustItems: [
      "3-day MVP turnaround",
      "100% code ownership",
      "No commitment required",
    ],
  },
};

// ─── Hire OpenAI Developer ─────────────────────────────────────────────────────

const hireOpenAIDeveloper: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "hire-openai-developer",
  badge: "OpenAI Development",
  headline: "Hire an",
  headlineAccent: "OpenAI Developer",
  subheading:
    "Ship Smarter. Automate Fearlessly. Scale Without Limits.\n\nExpert OpenAI Developers | GPT Engineers | AI Workflow Automation & Agent Development",
  heroStats: [
    { value: "200+", label: "OpenAI Projects Delivered" },
    { value: "5-10x", label: "Faster Than Traditional Dev" },
    { value: "3 Days", label: "MVP Turnaround" },
    { value: "100%", label: "Code Ownership Guaranteed" },
  ],
  ctaPrimary: "Get a Free Consultation",
  ctaSecondary: "View Our Work",

  problemHeading: "Hire an OpenAI Developer — Build Smarter AI, Ship Faster",
  problemParagraph1:
    "Artificial intelligence is no longer a competitive advantage — it is the baseline. Businesses that hire AI developers with genuine OpenAI expertise today are the ones setting industry benchmarks tomorrow. The companies still waiting on traditional development cycles are already falling behind.",
  problemParagraph2:
    "Our team of certified OpenAI developers, GPT engineers, and AI integration specialists combines cutting-edge model expertise with deep software engineering discipline — delivering production-grade AI applications, intelligent automation platforms, and LLM-powered SaaS products that create measurable business value from day one.",
  painPoints: [
    {
      icon: Timer,
      color: "#f97316",
      title: "Months-Long Dev Cycles",
      description:
        "Traditional development takes 3–6 months to ship an MVP. Your competitors are already live while you're still in sprint planning.",
    },
    {
      icon: TrendingDown,
      color: "#4f8ef7",
      title: "Ballooning In-House Costs",
      description:
        "Hiring internal AI engineers is expensive, slow, and risky. Senior OpenAI talent is scarce — and onboarding timelines kill your speed to market.",
    },
    {
      icon: AlertTriangle,
      color: "#7c5cbf",
      title: "API Calls vs. Real AI Engineering",
      description:
        "Raw API access without expert architecture produces brittle, insecure integrations. You need engineers who understand prompt design, RAG, and production deployment.",
    },
  ],

  featuresHeading: "Our OpenAI Development Services",
  featuresSubheading:
    "End-to-end OpenAI development services tailored precisely to your industry, business goals, and timelines.",
  features: [
    {
      icon: MessageSquare,
      color: "#4f8ef7",
      name: "GPT-Powered Application Development",
      description:
        "We architect applications around GPT-4o and o1 that genuinely understand context, handle nuanced queries, and deliver responses that build user trust rather than frustrating them.",
      link: "#",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      name: "AI Agent Development & Automation",
      description:
        "Our specialists design agents powered by the OpenAI Assistants API, function calling, and multi-step reasoning that complete complex workflows without human intervention.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#06b6d4",
      name: "LLM Integration & Custom Fine-Tuning",
      description:
        "We deliver custom fine-tuned models trained on your data and architect RAG pipelines that ground model responses in your proprietary knowledge base.",
      link: "#",
    },
    {
      icon: Sparkles,
      color: "#7c3aed",
      name: "Generative AI Product Development",
      description:
        "From AI-powered content platforms and creative tools to intelligent document processing — we build end-to-end generative AI products from model selection to production deployment.",
      link: "#",
    },
    {
      icon: Workflow,
      color: "#10b981",
      name: "AI Workflow Automation & Process Intelligence",
      description:
        "We design intelligent automation systems that connect OpenAI models with your existing tools — CRMs, ERPs, data warehouses, and communication platforms.",
      link: "#",
    },
    {
      icon: LayoutDashboard,
      color: "#f97316",
      name: "SaaS Platform Development with OpenAI",
      description:
        "Build subscription-ready SaaS products with AI at the core — multi-tenant architecture, role-based access, usage-based billing, and OpenAI orchestration baked in from day one.",
      link: "#",
    },
    {
      icon: Plug,
      color: "#f43f5e",
      name: "OpenAI API Integration for Existing Products",
      description:
        "We integrate GPT, Whisper, DALL·E, and vision capabilities into your existing codebase with clean, maintainable APIs your team can own and extend.",
      link: "#",
    },
    {
      icon: Search,
      color: "#4f46e5",
      name: "AI Consultation & Architecture Review",
      description:
        "Our senior AI architects provide consultation sessions that translate your business problem into a clear technical strategy before a single line of code is written.",
      link: "#",
    },
  ],

  processHeading: "How Our OpenAI Development Process Works",
  processSubheading:
    "A streamlined, transparent workflow combining frontier model capabilities with senior engineering expertise.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirements Scoping",
      description:
        "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. Precise scoping prevents expensive revisions later.",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Architecture & Prompt Engineering",
      description:
        "Our OpenAI experts design the model stack, prompt strategy, RAG pipeline, and function-calling schema. Every architectural decision is documented and justified.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior AI developers build, integrate, and test your application using best-practice coding standards. Every component is code-reviewed for accuracy, performance, and security.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & Quality Assurance",
      description:
        "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, and load testing before any production deployment. Enterprise-grade rigour, every time.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling and feature iteration.",
    },
  ],

  benefitsHeading: "Why Hire an OpenAI Developer Instead of Building In-House?",
  benefitsSubheading:
    "The case for choosing a specialist team is compelling, measurable, and immediate.",
  stats: [
    { value: 200, suffix: "+", label: "OpenAI Projects" },
    { value: 60, suffix: "%", label: "Lower Dev Costs" },
    { value: 3, suffix: " days", label: "MVP Turnaround" },
    { value: 100, suffix: "%", label: "Code Ownership" },
  ],
  benefits: [
    {
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI applications in days, not quarters. Our hire AI engineers model eliminates onboarding lag entirely.",
    },
    {
      title: "60% Lower Development Costs",
      description:
        "Specialist AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
    },
    {
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever.",
    },
    {
      title: "100% Code Ownership",
      description:
        "Full GitHub repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always.",
    },
    {
      title: "AI Workflow Automation Expertise",
      description:
        "Our AI workflow automation developers design systems that eliminate manual bottlenecks across operations, support, finance, and product teams.",
    },
  ],

  industriesHeading: "Industries We Serve",
  industriesSubheading:
    "OpenAI development solutions engineered for the complexity and compliance needs of your industry.",
  industries: [
    {
      id: "startups",
      label: "Startups",
      icon: Rocket,
      color: "#4f8ef7",
      illustration: "🚀",
      useCases: [
        {
          title: "AI-First MVP in Days",
          description:
            "Race to market with an AI-powered product without the overhead of a large engineering team. Senior OpenAI expertise from day one.",
        },
        {
          title: "GPT-Powered Product Features",
          description:
            "Embed intelligent conversational features, smart search, and AI copilots that differentiate your product from day one.",
        },
        {
          title: "Investor-Ready AI Demos",
          description:
            "Build polished, functional AI prototypes that impress investors — not wireframes. Ship something real before your next fundraise.",
        },
      ],
    },
    {
      id: "fintech",
      label: "FinTech",
      icon: TrendingUp,
      color: "#10b981",
      illustration: "📈",
      useCases: [
        {
          title: "AI-Powered Document Intelligence",
          description:
            "Extract structured data from contracts, statements, and filings using GPT-4o with 99%+ accuracy — eliminating manual data entry.",
        },
        {
          title: "Conversational Banking Assistants",
          description:
            "Deploy compliance-aware GPT assistants grounded in your product catalog with hallucination controls and full audit logging.",
        },
        {
          title: "Automated Financial Reporting",
          description:
            "Generate intelligent narrative commentary alongside live charts and financial data — delivered to stakeholders automatically.",
        },
      ],
    },
    {
      id: "healthtech",
      label: "HealthTech",
      icon: HeartPulse,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Clinical NLP & Document AI",
          description:
            "Extract diagnosis codes, medications, and clinical entities from unstructured EHR notes with GPT-4o — reducing coding time by 60%.",
        },
        {
          title: "Patient-Facing AI Assistants",
          description:
            "Build HIPAA-aware conversational AI that guides patients through triage, symptom assessment, and care coordination workflows.",
        },
        {
          title: "Medical Knowledge Base QA",
          description:
            "Deploy RAG-powered knowledge assistants grounded in clinical guidelines, formularies, and proprietary medical content.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: Landmark,
      color: "#7c5cbf",
      illustration: "🏛️",
      useCases: [
        {
          title: "Enterprise Knowledge Assistants",
          description:
            "Deploy internal GPT-4o assistants grounded in your proprietary documentation, policies, and knowledge bases — with role-based access.",
        },
        {
          title: "AI-Powered Process Automation",
          description:
            "Connect OpenAI models to your existing CRM, ERP, and communication tools to automate high-volume workflows at enterprise scale.",
        },
        {
          title: "SOC 2 & GDPR-Compliant AI Builds",
          description:
            "Enterprise-grade security, compliance documentation, and audit trails built into every OpenAI deployment from the first line of code.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS Platforms",
      icon: Cloud,
      color: "#06b6d4",
      illustration: "☁️",
      useCases: [
        {
          title: "AI Copilot Feature Development",
          description:
            "Embed a GPT-powered copilot into your SaaS product that understands your data model and user intent — shipped in days, not quarters.",
        },
        {
          title: "Intelligent Onboarding Flows",
          description:
            "Deploy an AI assistant that guides new users to their activation moment faster by learning from your most successful account patterns.",
        },
        {
          title: "Usage-Based AI Features",
          description:
            "Build token-efficient, cost-controlled OpenAI integrations with rate limiting, caching, and cost monitoring baked in from the start.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Teams across industries trust Tech 2Globe AI to ship OpenAI-powered applications that work in production.",
  testimonials: [
    {
      quote:
        "Tech 2Globe's OpenAI team delivered a GPT-4o document intelligence system in 3 weeks that replaced our entire manual review process. Accuracy is 99.1% and we've cut document processing costs by 70%.",
      name: "Alexandra Chen",
      role: "VP of Operations",
      company: "Meridian Legal Group",
      initials: "AC",
      color: "#4f8ef7",
    },
    {
      quote:
        "We hired their team to build an AI agent that qualifies leads and drafts proposals autonomously. It now handles 80% of our inbound pipeline without human intervention. Extraordinary delivery.",
      name: "Daniel Park",
      role: "Head of Growth",
      company: "Apex SaaS Ventures",
      initials: "DP",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions About Hiring OpenAI Developers",
  faqSubheading:
    "Clear answers to the questions we hear most from teams evaluating OpenAI development partnerships.",
  faqs: [
    {
      id: "what-does",
      question: "What exactly does an OpenAI developer do?",
      answer:
        "An OpenAI developer designs, builds, and integrates applications powered by OpenAI's suite of models — including GPT-4o, o1, Whisper, DALL·E 3, and the Assistants API. They combine advanced prompt engineering, RAG pipeline architecture, and traditional software development skills to produce clean, scalable, production-ready AI applications far faster and more reliably than general-purpose developers learning on the job.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an AI MVP using OpenAI?",
      answer:
        "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom integrations, fine-tuned models, multi-step agent workflows, and advanced dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code, not a prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with OpenAI's APIs?",
      answer:
        "Our OpenAI developers can build conversational AI platforms, AI-powered SaaS products, intelligent document processing systems, autonomous AI agents, GPT-integrated CRMs, AI content generation tools, voice applications using Whisper, image analysis systems using vision models, internal knowledge assistants, and fully automated AI workflows.",
    },
    {
      id: "security",
      question:
        "Is production code built on OpenAI APIs secure and enterprise-ready?",
      answer:
        "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every OpenAI-powered build before deployment. Security is not an afterthought; it is built into the architecture from the first line of code.",
    },
    {
      id: "ownership",
      question: "Will I own the code and AI infrastructure after the project?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely.",
    },
    {
      id: "existing-product",
      question:
        "Can you integrate OpenAI into our existing product or platform?",
      answer:
        "Yes — this is one of our most common engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add OpenAI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack, and we write integration code that your existing engineering team can understand, own, and extend independently.",
    },
    {
      id: "post-launch",
      question: "Do you offer ongoing support and model updates after launch?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As OpenAI releases new model capabilities, we help you adopt them quickly and safely.",
    },
  ],

  ctaBannerHeading: "Ready to Build Smarter with an",
  ctaBannerAccent: "OpenAI Developer?",
  ctaBannerSubtext:
    "Stop waiting months for software that should take days. Hire an OpenAI expert today and launch your next AI product with frontier model power and production-grade engineering quality.",
  ctaBannerPrimary: "Get a Free Consultation",
  ctaBannerSecondary: "View Our Work",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: [
    "200+ OpenAI Projects Delivered",
    "3-Day MVP Turnaround",
    "100% Code Ownership",
  ],

  socialProofTagline: "Trusted by startups and enterprises worldwide",
  socialProofLogos: [
    { name: "Meridian Legal Group", abbr: "ML" },
    { name: "Apex SaaS Ventures", abbr: "AV" },
    { name: "NorthStar Health", abbr: "NH" },
    { name: "Prism FinTech", abbr: "PF" },
    { name: "ClearPath Enterprise", abbr: "CP" },
    { name: "Delta AI Labs", abbr: "DL" },
    { name: "Summit Digital", abbr: "SD" },
    { name: "Orbis Analytics", abbr: "OA" },
    { name: "Kodex Ventures", abbr: "KV" },
    { name: "Solera Technologies", abbr: "ST" },
    { name: "TechBridge Group", abbr: "TB" },
    { name: "Vantage AI", abbr: "VA" },
  ],

  servicesGridHeading: "Our OpenAI Development Services",
  servicesGridSubheading:
    "End-to-end OpenAI development services tailored precisely to your industry, business goals, and timelines.",
  serviceCards: [
    {
      icon: MessageSquare,
      color: "#4f8ef7",
      title: "GPT-Powered Application Development",
      description:
        "Applications around GPT-4o and o1 that understand context, handle nuanced queries, and build user trust with every interaction.",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      title: "AI Agent Development & Automation",
      description:
        "Autonomous agents powered by the Assistants API and function calling that complete complex workflows without human intervention.",
    },
    {
      icon: Brain,
      color: "#06b6d4",
      title: "LLM Integration & Fine-Tuning",
      description:
        "Custom fine-tuned models trained on your data and RAG pipelines that ground responses in your proprietary knowledge base.",
    },
    {
      icon: Sparkles,
      color: "#7c3aed",
      title: "Generative AI Product Development",
      description:
        "End-to-end generative AI products — from model selection and prompt architecture to frontend integration and production deployment.",
    },
    {
      icon: Workflow,
      color: "#10b981",
      title: "AI Workflow Automation",
      description:
        "Intelligent automation systems connecting OpenAI models with your CRMs, ERPs, data warehouses, and communication platforms.",
    },
    {
      icon: LayoutDashboard,
      color: "#f97316",
      title: "SaaS Platform Development",
      description:
        "Subscription-ready SaaS with multi-tenant architecture, role-based access, usage-based billing, and OpenAI orchestration from day one.",
    },
  ],

  whyChooseUsHeading:
    "Why Hire an OpenAI Developer Instead of Building In-House?",
  numberedBenefits: [
    {
      number: "01",
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI applications in days, not quarters. Our hire AI engineers model eliminates onboarding lag entirely.",
    },
    {
      number: "02",
      title: "60% Lower Development Costs",
      description:
        "Specialist AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
    },
    {
      number: "03",
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever.",
    },
    {
      number: "04",
      title: "100% Code Ownership",
      description:
        "Full GitHub repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always.",
    },
  ],
  animatedStats: [
    { icon: Rocket, value: 200, suffix: "+", label: "OpenAI Projects" },
    { icon: Timer, value: 3, suffix: " days", label: "Avg. MVP Time" },
    { icon: CheckCircle2, value: 100, suffix: "%", label: "Code Ownership" },
    { icon: Users, value: 60, suffix: "%", label: "Cost Savings" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible structures designed for your project scope, team size, and launch timeline.",
  engagementModels: [
    {
      icon: Users,
      name: "Dedicated AI Team",
      tagline:
        "A fully embedded OpenAI team working exclusively on your product",
      features: [
        "Senior OpenAI engineers + prompt specialists",
        "Dedicated Slack channel & daily standups",
        "Monthly sprint reviews with leadership",
        "Flexible ramp-up/down in 2-week notice",
        "Full IP transfer on all deliverables",
      ],
      idealFor: "Enterprises with ongoing OpenAI product development",
    },
    {
      icon: Rocket,
      name: "Project-Based Delivery",
      tagline: "Fixed scope, fixed timeline, guaranteed delivery",
      features: [
        "Discovery sprint → milestone-based delivery",
        "Agreed performance KPIs before work begins",
        "Production deployment included in scope",
        "60-day post-launch support warranty",
        "Transparent pricing, no hidden costs",
      ],
      idealFor: "Teams with a specific AI use case to ship fast",
      popular: true,
    },
    {
      icon: Layers,
      name: "Staff Augmentation",
      tagline: "Embed senior OpenAI talent directly into your existing team",
      features: [
        "Vetted AI engineers in 5 business days",
        "Works inside your tools and processes",
        "Scales from 1 to 20+ engineers on demand",
        "Knowledge transfer built into the contract",
        "No long-term minimum commitment",
      ],
      idealFor: "Teams that need to accelerate AI capacity quickly",
    },
  ],

  premiumProcessHeading: "Our Development Process",
  premiumProcessSubheading:
    "From first call to first commit — here's what working with us looks like",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirements Scoping",
      description:
        "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. No sales pressure — just problem-solving.",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Architecture & Prompt Engineering",
      description:
        "Our OpenAI experts design the model stack, prompt strategy, RAG pipeline, and function-calling schema. Every decision is documented and justified.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior AI developers build, integrate, and test your application. Every component is code-reviewed for accuracy, performance, and security.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & QA",
      description:
        "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, and load testing before any production deployment.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Support",
      description:
        "Production deployment with 100% code ownership transfer, full documentation, and post-launch support packages for scaling and iteration.",
    },
  ],
  premiumProcessCTA: "Ready to build with OpenAI? Let's talk →",

  techStackHeading: "OpenAI Tech Stack",
  techStackSubheading:
    "OpenAI's frontier models plus the best supporting tools for every layer of your AI product",
  techTabs: [
    {
      id: "openai-core",
      label: "OpenAI Tech Stack",
      items: [
        { name: "GPT-4o", abbr: "4o", color: "#10a37f" },
        { name: "OpenAI o1", abbr: "o1", color: "#10a37f" },
        { name: "DALL·E 3", abbr: "DE", color: "#10a37f" },
        { name: "Whisper API", abbr: "WH", color: "#10a37f" },
        { name: "Assistants API", abbr: "AS", color: "#10a37f" },
        { name: "Function Calling", abbr: "FC", color: "#4f8ef7" },
        { name: "RAG Pipelines", abbr: "RA", color: "#7c5cbf" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
      ],
    },
    {
      id: "vector-retrieval",
      label: "Vector & Retrieval",
      items: [
        { name: "LlamaIndex", abbr: "LI", color: "#f97316" },
        { name: "Pinecone", abbr: "PC", color: "#000066" },
        { name: "Weaviate", abbr: "WV", color: "#06b6d4" },
        { name: "Chroma", abbr: "CH", color: "#e11d48" },
        { name: "pgvector", abbr: "PV", color: "#4169e1" },
        { name: "Qdrant", abbr: "QD", color: "#7c5cbf" },
        { name: "FAISS", abbr: "FA", color: "#f59e0b" },
        { name: "Redis Vector", abbr: "RV", color: "#dc2626" },
      ],
    },
    {
      id: "backend-infra",
      label: "Backend & Infra",
      items: [
        { name: "Python", abbr: "PY", color: "#3776ab" },
        { name: "TypeScript", abbr: "TS", color: "#3178c6" },
        { name: "FastAPI", abbr: "FA", color: "#009688" },
        { name: "React", abbr: "RE", color: "#61dafb" },
        { name: "PostgreSQL", abbr: "PG", color: "#4169e1" },
        { name: "Node.js", abbr: "ND", color: "#339933" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
      ],
    },
    {
      id: "cloud-deployment",
      label: "Cloud & Deployment",
      items: [
        { name: "AWS", abbr: "AW", color: "#ff9900" },
        { name: "Azure OpenAI", abbr: "AZ", color: "#0089d6" },
        { name: "Google Cloud", abbr: "GC", color: "#4285f4" },
        { name: "Vercel", abbr: "VC", color: "#000000" },
        { name: "GitHub Actions", abbr: "GA", color: "#2088ff" },
        { name: "Terraform", abbr: "TF", color: "#7b42bc" },
        { name: "Stripe", abbr: "ST", color: "#635bff" },
        { name: "Monitoring", abbr: "MN", color: "#e6522c" },
      ],
    },
  ],

  caseStudiesHeading: "Work That Speaks",
  caseStudiesSubheading: "Real OpenAI projects. Real results.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "GPT-4o Document Intelligence Platform",
      industry: "Legal Tech",
      description:
        "Built a GPT-4o powered document review system that extracts clauses, risk signals, and obligations from complex commercial contracts for a top-10 law firm.",
      metrics: [
        "99.1% extraction accuracy",
        "70% faster document review",
        "$1.2M annual savings",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "Autonomous Lead Qualification Agent",
      industry: "SaaS",
      description:
        "Deployed an OpenAI Assistants API agent that qualifies inbound leads, drafts personalized proposals, and books discovery calls — completely autonomously.",
      metrics: [
        "80% of pipeline automated",
        "3x faster lead response",
        "28% higher conversion rate",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "Clinical Knowledge Assistant",
      industry: "HealthTech",
      description:
        "Built a HIPAA-compliant RAG pipeline grounded in 50,000+ clinical guidelines, enabling medical staff to query complex protocols in natural language.",
      metrics: [
        "Deployed in 4 weeks",
        "94% answer accuracy",
        "40% faster protocol lookup",
      ],
    },
    {
      accentColor: "#f59e0b",
      projectName: "AI-Powered Financial Report Generator",
      industry: "FinTech",
      description:
        "Developed a GPT-4o system that automatically generates narrative financial commentary alongside live charts for enterprise CFO reporting packages.",
      metrics: [
        "Reports generated in 2 minutes",
        "15 hours saved per analyst/week",
        "Zero-hallucination pipeline",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "Tech 2Globe's OpenAI team delivered a document intelligence system in 3 weeks that replaced our entire manual review process. Accuracy is 99.1%, costs are down 70%, and our associates now focus on high-value strategic work instead of document grinding. The ROI was visible in the first billing cycle.",
    name: "Alexandra Chen",
    role: "VP of Operations",
    company: "Meridian Legal Group",
    initials: "AC",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "Daniel Park",
      company: "Apex SaaS Ventures",
      quote:
        "Their OpenAI agent now handles 80% of our inbound pipeline autonomously. Delivered in 2 weeks — exceptional quality and zero post-launch issues.",
      initials: "DP",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      company: "NorthStar Health",
      quote:
        "The clinical knowledge assistant went live in 4 weeks with 94% accuracy. HIPAA-compliant from day one. Our care teams love it.",
      initials: "PS",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "James Okafor",
      company: "Prism FinTech",
      quote:
        "GPT-4o financial reporting used to take our team 3 days. Now it takes 2 minutes. The Tech 2Globe team engineered it perfectly.",
      initials: "JO",
      color: "#f59e0b",
      rating: 5,
    },
  ],

  industriesHexHeading: "Industries We Serve",
  industriesHexSubheading:
    "OpenAI development solutions engineered for the data complexity, compliance, and speed requirements of your industry.",
  industryTiles: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      label: "Startups",
      tooltip: "AI-first MVPs, GPT-powered features, and investor-ready demos",
    },
    {
      icon: TrendingUp,
      color: "#10b981",
      label: "FinTech",
      tooltip:
        "Document intelligence, conversational banking, and automated reporting",
    },
    {
      icon: HeartPulse,
      color: "#f43f5e",
      label: "HealthTech",
      tooltip:
        "Clinical NLP, HIPAA-aware AI assistants, and medical knowledge QA",
    },
    {
      icon: Scale,
      color: "#7c5cbf",
      label: "LegalTech",
      tooltip:
        "Contract intelligence, clause extraction, and compliance automation",
    },
    {
      icon: ShoppingCart,
      color: "#f59e0b",
      label: "E-Commerce",
      tooltip:
        "AI product recommendations, GPT search, and customer support automation",
    },
    {
      icon: Cloud,
      color: "#06b6d4",
      label: "SaaS Platforms",
      tooltip:
        "AI copilot features, intelligent onboarding, and churn-reducing assistants",
    },
    {
      icon: Landmark,
      color: "#4f46e5",
      label: "Enterprise",
      tooltip:
        "Knowledge assistants, process automation, and SOC 2-compliant AI deployments",
    },
    {
      icon: GraduationCap,
      color: "#a855f7",
      label: "EdTech",
      tooltip:
        "Adaptive learning AI, assessment automation, and personalized tutoring systems",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions About Hiring OpenAI Developers",
  faqSplitSubheading:
    "Everything you need to know before starting your OpenAI development journey.",
  faqItems: [
    {
      id: "what-does",
      question: "What exactly does an OpenAI developer do?",
      answer:
        "An OpenAI developer designs, builds, and integrates applications powered by OpenAI's suite of models — including GPT-4o, o1, Whisper, DALL·E 3, and the Assistants API. They combine advanced prompt engineering, RAG pipeline architecture, and traditional software development skills to produce clean, scalable, production-ready AI applications far faster and more reliably than general-purpose developers learning on the job.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an AI MVP using OpenAI?",
      answer:
        "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom integrations, fine-tuned models, multi-step agent workflows, and advanced dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code, not a prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with OpenAI's APIs?",
      answer:
        "Our OpenAI developers can build conversational AI platforms, AI-powered SaaS products, intelligent document processing systems, autonomous AI agents, GPT-integrated CRMs, AI content generation tools, voice applications using Whisper, image analysis systems using vision models, internal knowledge assistants, and fully automated AI workflows.",
    },
    {
      id: "security",
      question:
        "Is production code built on OpenAI APIs secure and enterprise-ready?",
      answer:
        "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every OpenAI-powered build before deployment. Security is built into the architecture from the first line of code.",
    },
    {
      id: "ownership",
      question: "Will I own the code and AI infrastructure after the project?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely.",
    },
    {
      id: "existing-product",
      question:
        "Can you integrate OpenAI into our existing product or platform?",
      answer:
        "Yes — this is one of our most common engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add OpenAI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack.",
    },
    {
      id: "post-launch",
      question: "Do you offer ongoing support and model updates after launch?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As OpenAI releases new model capabilities, we help you adopt them quickly and safely.",
    },
  ],

  finalCTA: {
    heading: "Ready to Build Smarter with an OpenAI Developer?",
    subtext:
      "Stop waiting months for software that should take days. Hire an OpenAI expert today and launch your next AI product with frontier model power and production-grade engineering quality.",
    primaryLabel: "Get a Free Consultation →",
    secondaryLabel: "View Our Work",
    trustItems: [
      "200+ OpenAI Projects Delivered",
      "3-Day MVP Turnaround",
      "100% Code Ownership",
      "Enterprise-Grade Security",
    ],
  },
};

// ─── Hire Emergent AI Developer ───────────────────────────────────────────────

const hireEmergentAIDeveloper: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "hire-emergent-ai-developer",
  badge: "Emergent AI Development",
  headline: "Hire a",
  headlineAccent: "Emergent AI Developer",
  subheading:
    "Build Intelligently. Automate Fearlessly. Scale Without Limits.\n\nExpert Emergent AI Developers | Generative AI Engineers | LLM & Agent Automation Specialists",
  heroStats: [
    { value: "150+", label: "Emergent AI Projects Delivered" },
    { value: "8-12x", label: "Faster Than Traditional Dev" },
    { value: "5 Days", label: "MVP Turnaround" },
    { value: "100%", label: "Code Ownership Guaranteed" },
  ],
  ctaPrimary: "Get a Free Consultation",
  ctaSecondary: "View Our Work",

  problemHeading:
    "Hire a Emergent AI Developer — Build Adaptive AI, Ship Faster",
  problemParagraph1:
    "Artificial intelligence is no longer a future investment — it is the operational backbone of every industry-leading company today. Businesses that choose to hire AI developers with genuine Emergent AI expertise are the ones defining what the next generation of intelligent software looks like. Those still relying on static, rule-based systems are already falling behind.",
  problemParagraph2:
    "Our team of certified Emergent AI engineers, generative AI architects, and LLM integration specialists combines frontier model expertise with deep software engineering rigour — delivering adaptive AI applications, self-improving automation platforms, and agent-driven systems that create measurable business value from the first deployment.",
  painPoints: [
    {
      icon: Timer,
      color: "#f97316",
      title: "Months-Long Dev Cycles",
      description:
        "Traditional development takes 3–6 months to ship an MVP. Your competitors are already live while you're still in sprint planning.",
    },
    {
      icon: TrendingDown,
      color: "#4f8ef7",
      title: "Ballooning In-House Costs",
      description:
        "Hiring internal AI engineers is expensive, slow, and risky. Senior Emergent AI talent is scarce — and onboarding timelines kill your speed to market.",
    },
    {
      icon: AlertTriangle,
      color: "#7c5cbf",
      title: "Static Systems Can't Adapt",
      description:
        "Rule-based systems fail as complexity grows. You need AI that genuinely learns, reasons, and improves — not brittle logic trees masquerading as intelligence.",
    },
  ],

  featuresHeading: "Our Emergent AI Development Services",
  featuresSubheading:
    "End-to-end Emergent AI development services tailored to your industry, business objectives, and timelines.",
  features: [
    {
      icon: Brain,
      color: "#4f8ef7",
      name: "Generative AI Application Development",
      description:
        "Customer-facing conversational AI, internal knowledge generation platforms, and generative AI-powered creative tools — built on frontier models that understand context and produce high-quality outputs users trust.",
      link: "#",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      name: "AI Agent Development & Autonomous Automation",
      description:
        "Multi-agent systems powered by LLM reasoning, tool use, memory architectures, and real-time decision trees that complete complex workflows — from lead qualification to automated financial reporting — without human intervention.",
      link: "#",
    },
    {
      icon: Code2,
      color: "#10b981",
      name: "LLM Integration & Custom Fine-Tuning",
      description:
        "Custom fine-tuned models trained on your data with domain-specific language and proprietary terminology. RAG pipelines that ground every model response in your knowledge base, reducing hallucinations and increasing factual accuracy.",
      link: "#",
    },
    {
      icon: Zap,
      color: "#f97316",
      name: "GPT-Powered Product & Platform Development",
      description:
        "GPT-driven SaaS products, intelligent customer service platforms, internal knowledge assistants, and code generation tools — from model selection and prompt architecture to API design and production deployment.",
      link: "#",
    },
    {
      icon: Cpu,
      color: "#f43f5e",
      name: "Deep Learning Model Development & Deployment",
      description:
        "Computer vision, NLP, speech recognition, time-series forecasting, and anomaly detection. Custom deep neural networks designed, trained, validated, and deployed with full MLOps pipelines for monitoring and drift detection.",
      link: "#",
    },
    {
      icon: Database,
      color: "#06b6d4",
      name: "Machine Learning Pipeline Engineering",
      description:
        "Robust, scalable ML pipelines — from data ingestion and feature engineering to model training, validation, versioning, and real-time serving. MLOps-first approach ensures models perform as data distributions evolve.",
      link: "#",
    },
    {
      icon: Workflow,
      color: "#7c5cbf",
      name: "AI Workflow Automation & Process Intelligence",
      description:
        "Intelligent automation systems connecting Emergent AI models with your existing tools — CRMs, ERPs, data warehouses, and communication platforms — delivering end-to-end workflows that operate autonomously at scale.",
      link: "#",
    },
    {
      icon: MessageSquare,
      color: "#0d9488",
      name: "AI Consultation & Architecture Review",
      description:
        "Senior Emergent AI architects translate your business challenge into a clear, justified technical strategy before a single line of code is written. Every recommendation is documented and benchmarked against your goals.",
      link: "#",
    },
  ],

  processHeading: "How Our Emergent AI Development Process Works",
  processSubheading:
    "A streamlined, transparent workflow combining Emergent AI's frontier capabilities with senior human engineering expertise.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirements Scoping",
      description:
        "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. Precise scoping prevents expensive revisions downstream.",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Architecture & Model Strategy",
      description:
        "Our Emergent AI experts design the model stack, fine-tuning approach, RAG pipeline, agent orchestration schema, and data architecture. Every decision is documented and justified.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior Emergent AI developers build, integrate, and test your application using best-practice coding and MLOps standards. Every component is code-reviewed for accuracy, performance, and security.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & Quality Assurance",
      description:
        "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, model bias audits, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration.",
    },
  ],

  benefitsHeading:
    "Why Hire a Emergent AI Developer Instead of Building In-House?",
  benefitsSubheading:
    "The case for choosing a specialist Emergent AI team is compelling, measurable, and immediate.",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 60, suffix: "%", label: "Lower Dev Costs" },
    { value: 5, suffix: " days", label: "MVP Turnaround" },
    { value: 100, suffix: "%", label: "Code Ownership" },
  ],
  benefits: [
    {
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI systems in days, not quarters. Our model eliminates onboarding lag entirely when you hire AI developers through our flexible engagement model.",
    },
    {
      title: "60% Lower Development Costs",
      description:
        "Specialist Emergent AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
    },
    {
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever, regardless of timeline pressure.",
    },
    {
      title: "100% Code Ownership",
      description:
        "Full repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always and unconditionally.",
    },
  ],

  industriesHeading: "Industries We Serve",
  industriesSubheading: "Emergent AI solutions engineered for every sector.",
  industries: [
    {
      id: "startups",
      label: "Startups",
      icon: Rocket,
      color: "#4f8ef7",
      illustration: "🚀",
      useCases: [
        {
          title: "AI-First MVP in Days",
          description:
            "Race to market with an AI-powered product without the overhead of a large engineering team. Senior Emergent AI expertise from day one.",
        },
        {
          title: "Autonomous Agent Features",
          description:
            "Embed multi-step reasoning agents that differentiate your product and automate complex workflows users would otherwise handle manually.",
        },
        {
          title: "Investor-Ready AI Demos",
          description:
            "Build polished, functional AI prototypes that impress investors — not wireframes. Ship something real before your next fundraise.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: Landmark,
      color: "#10b981",
      illustration: "🏛️",
      useCases: [
        {
          title: "Enterprise Knowledge Assistants",
          description:
            "Deploy internal LLM-powered assistants grounded in your proprietary documentation, policies, and knowledge bases — with role-based access.",
        },
        {
          title: "AI-Powered Process Automation",
          description:
            "Connect Emergent AI models to your existing CRM, ERP, and communication tools to automate high-volume workflows at enterprise scale.",
        },
        {
          title: "SOC 2 & GDPR-Compliant AI Builds",
          description:
            "Enterprise-grade security, compliance documentation, and audit trails built into every Emergent AI deployment from the first line of code.",
        },
      ],
    },
    {
      id: "healthtech",
      label: "HealthTech",
      icon: HeartPulse,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Clinical NLP & Document AI",
          description:
            "Extract diagnosis codes, medications, and clinical entities from unstructured EHR notes — reducing coding time by 60%.",
        },
        {
          title: "HIPAA-Compliant AI Pipelines",
          description:
            "Build HIPAA-aware AI workflows with appropriate data handling, retention policies, and end-to-end audit trails.",
        },
        {
          title: "Medical Knowledge Base QA",
          description:
            "Deploy RAG-powered knowledge assistants grounded in clinical guidelines, formularies, and proprietary medical content.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS Platforms",
      icon: Cloud,
      color: "#06b6d4",
      illustration: "☁️",
      useCases: [
        {
          title: "AI Copilot Feature Development",
          description:
            "Embed an LLM-powered copilot into your SaaS product that understands your data model and user intent — shipped in days, not quarters.",
        },
        {
          title: "Intelligent Onboarding Flows",
          description:
            "Deploy an AI assistant that guides new users to their activation moment faster by learning from your most successful account patterns.",
        },
        {
          title: "Usage-Based AI Features",
          description:
            "Build token-efficient, cost-controlled LLM integrations with rate limiting, caching, and cost monitoring baked in from the start.",
        },
      ],
    },
    {
      id: "fintech",
      label: "FinTech",
      icon: TrendingUp,
      color: "#f59e0b",
      illustration: "📈",
      useCases: [
        {
          title: "Autonomous Financial Agents",
          description:
            "Multi-step AI agents that perform market analysis, portfolio optimization, and automated financial reporting without human hand-holding.",
        },
        {
          title: "Intelligent Document Processing",
          description:
            "Extract structured data from contracts, statements, and filings using fine-tuned LLMs with 99%+ accuracy.",
        },
        {
          title: "Adaptive Risk Modeling",
          description:
            "Deep learning models that evolve with real-world data distributions, providing dynamic risk scores that outperform static rule-based systems.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Teams across industries trust Tech 2Globe AI to ship Emergent AI applications that work in production.",
  testimonials: [
    {
      quote:
        "Working with this team to hire Emergent AI developers was a game-changer. They delivered an autonomous agent system in 11 days that we thought would take 6 months to build. The engineering quality is exceptional — security-first, well-documented, and our team owns it entirely.",
      name: "Dr. Sarah Chen",
      role: "CTO",
      company: "AdaptiveIQ",
      initials: "SC",
      color: "#4f8ef7",
    },
    {
      quote:
        "The Emergent AI team built our entire LLM fine-tuning pipeline and RAG system in 3 weeks. The model outperforms GPT-4 on our domain by 40%. Genuinely impressive engineering depth.",
      name: "Marcus Williams",
      role: "VP Engineering",
      company: "NeuroDoc",
      initials: "MW",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions About Hiring Emergent AI Developers",
  faqSubheading: "Everything you need to know before you hire.",
  faqs: [
    {
      id: "what-does",
      question: "What exactly does a Emergent AI Developer do?",
      answer:
        "A Emergent AI Developer designs, builds, and integrates applications powered by large language models, generative AI systems, autonomous agents, and deep learning architectures. They combine advanced prompt engineering, RAG pipeline design, fine-tuning, multi-agent orchestration, and traditional software engineering to produce clean, scalable, production-ready AI applications far faster than general-purpose developers.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an Emergent AI MVP?",
      answer:
        "Simple Emergent AI-powered MVPs are typically delivered within 5–7 business days. More complex applications with custom fine-tuned models, multi-step agent workflows, deep learning pipelines, and advanced dashboards generally take 2–6 weeks. Either way, our process is 8–12x faster than traditional software development timelines — and you receive production-ready, auditable code, not a fragile prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with Emergent AI?",
      answer:
        "Our Emergent AI developers can build conversational AI platforms, generative AI SaaS products, autonomous multi-agent systems, intelligent document processing pipelines, GPT-powered CRMs and productivity tools, deep learning computer vision systems, voice AI applications, real-time recommendation engines, AI workflow automation platforms, and custom LLM fine-tuned models for domain-specific applications.",
    },
    {
      id: "security",
      question:
        "Is production code built on Emergent AI secure and enterprise-ready?",
      answer:
        "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, audits models for bias and fairness, and performs GDPR and SOC 2 compliance checks on every Emergent AI build before deployment. Security and governance are not afterthoughts; they are built into the architecture from the very first design decision.",
    },
    {
      id: "ownership",
      question: "Will I own the code and AI infrastructure after the project?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete repository access, technical documentation, model cards, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely, with no ongoing licensing dependencies on our team.",
    },
    {
      id: "existing-product",
      question:
        "Can you integrate Emergent AI into our existing product or platform?",
      answer:
        "Yes — this is one of our most frequently requested engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add Emergent AI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack, and we write integration code that your existing engineering team can understand, own, and extend completely independently.",
    },
    {
      id: "post-launch",
      question: "Do you offer ongoing support and model updates after launch?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As new Emergent AI model capabilities emerge from leading research labs, we help you adopt them quickly and safely. Our development services are designed for long-term strategic partnership, not one-time delivery.",
    },
  ],

  ctaBannerHeading: "Ready to Build Smarter with an",
  ctaBannerAccent: "Emergent AI Developer?",
  ctaBannerSubtext:
    "Stop waiting months for software that should take days. Hire a Emergent AI Developer today and launch your next AI product with frontier model power and production-grade engineering quality.",
  ctaBannerPrimary: "Get a Free Consultation",
  ctaBannerSecondary: "View Our Work",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: [
    "ISO 27001 Certified",
    "GDPR Compliant",
    "SOC 2 Type II",
    "NDA Protected",
  ],

  socialProofTagline:
    "Trusted by forward-thinking companies building with Emergent AI",
  socialProofLogos: [
    { name: "Google", abbr: "GO" },
    { name: "Microsoft", abbr: "MS" },
    { name: "OpenAI", abbr: "OA" },
    { name: "Anthropic", abbr: "AN" },
    { name: "Meta AI", abbr: "MA" },
    { name: "DeepMind", abbr: "DM" },
    { name: "Nvidia", abbr: "NV" },
    { name: "AWS", abbr: "AW" },
    { name: "AdaptiveIQ", abbr: "AQ" },
    { name: "NeuroDoc", abbr: "ND" },
    { name: "AgentFlow", abbr: "AF" },
    { name: "VisionEdge", abbr: "VE" },
  ],

  servicesGridHeading: "Our Emergent AI Development Services",
  servicesGridSubheading:
    "End-to-end Emergent AI development services tailored to your industry, business objectives, and timelines.",
  serviceCards: [
    {
      icon: Brain,
      color: "#4f8ef7",
      title: "Generative AI Application Development",
      description:
        "Customer-facing conversational AI, internal knowledge generation platforms, and generative AI-powered creative tools — built on frontier models that understand context and produce high-quality outputs users trust.",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      title: "AI Agent Development & Autonomous Automation",
      description:
        "Multi-agent systems powered by LLM reasoning, tool use, memory architectures, and real-time decision trees that complete complex workflows without human intervention.",
    },
    {
      icon: Code2,
      color: "#10b981",
      title: "LLM Integration & Custom Fine-Tuning",
      description:
        "Custom fine-tuned models trained on your data with domain-specific language. RAG pipelines that ground every model response in your knowledge base, reducing hallucinations.",
    },
    {
      icon: Zap,
      color: "#f97316",
      title: "GPT-Powered Product & Platform Development",
      description:
        "GPT-driven SaaS products, intelligent customer service platforms, internal knowledge assistants, and code generation tools — end-to-end from model selection to production deployment.",
    },
    {
      icon: Cpu,
      color: "#f43f5e",
      title: "Deep Learning Model Development & Deployment",
      description:
        "Computer vision, NLP, speech recognition, time-series forecasting, and anomaly detection — custom deep neural networks with full MLOps pipelines for monitoring and drift detection.",
    },
    {
      icon: Workflow,
      color: "#7c3aed",
      title: "AI Workflow Automation & Process Intelligence",
      description:
        "Intelligent automation systems connecting Emergent AI models with your existing tools — CRMs, ERPs, data warehouses, and communication platforms — operating autonomously at scale.",
    },
  ],

  whyChooseUsHeading:
    "Why Hire a Emergent AI Developer Instead of Building In-House?",
  numberedBenefits: [
    {
      number: "01",
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI systems in days, not quarters. Our model eliminates onboarding lag entirely when you hire AI developers through our flexible engagement model.",
    },
    {
      number: "02",
      title: "60% Lower Development Costs",
      description:
        "Specialist Emergent AI developers work with established frameworks, proven architectures, and reusable components — dramatically cutting time and cost versus building from scratch.",
    },
    {
      number: "03",
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, ever, regardless of timeline pressure.",
    },
    {
      number: "04",
      title: "100% Code Ownership",
      description:
        "Full repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always and unconditionally.",
    },
  ],
  animatedStats: [
    { icon: Rocket, value: 150, suffix: "+", label: "Projects Delivered" },
    { icon: Timer, value: 8, suffix: "-12x", label: "Faster Delivery" },
    { icon: Shield, value: 100, suffix: "%", label: "Code Ownership" },
    { icon: Users, value: 50, suffix: "+", label: "Expert Engineers" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible structures designed for your project scope, team size, and launch timeline.",
  engagementModels: [
    {
      icon: Users,
      name: "Dedicated AI Team",
      tagline:
        "A fully embedded Emergent AI team working exclusively on your product",
      features: [
        "Senior Emergent AI engineers + prompt specialists",
        "Dedicated Slack channel & daily standups",
        "Monthly sprint reviews with leadership",
        "Flexible ramp-up/down in 2-week notice",
        "Full IP transfer on all deliverables",
      ],
      idealFor: "Enterprises with ongoing Emergent AI product development",
    },
    {
      icon: Rocket,
      name: "Project-Based Delivery",
      tagline: "Fixed scope, fixed timeline, guaranteed delivery",
      features: [
        "Discovery sprint → milestone-based delivery",
        "Agreed performance KPIs before work begins",
        "Production deployment included in scope",
        "60-day post-launch support warranty",
        "Transparent pricing, no hidden costs",
      ],
      idealFor: "Teams with a specific AI use case to ship fast",
      popular: true,
    },
    {
      icon: Layers,
      name: "Staff Augmentation",
      tagline:
        "Embed senior Emergent AI talent directly into your existing team",
      features: [
        "Vetted AI engineers in 5 business days",
        "Works inside your tools and processes",
        "Scales from 1 to 20+ engineers on demand",
        "Knowledge transfer built into the contract",
        "No long-term minimum commitment",
      ],
      idealFor: "Teams that need to accelerate AI capacity quickly",
    },
  ],

  premiumProcessHeading: "How Our Emergent AI Development Process Works",
  premiumProcessSubheading:
    "A streamlined, transparent workflow combining Emergent AI's frontier capabilities with senior human engineering expertise across five clearly defined stages",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirements Scoping",
      description:
        "Free consultation to define your AI use case, target users, integration requirements, data sources, and business goals. Precise scoping is what prevents expensive revisions downstream.",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Architecture & Model Strategy",
      description:
        "Our Emergent AI experts design the model stack, fine-tuning approach, RAG pipeline, agent orchestration schema, and data architecture. Every decision is documented and justified against your specific requirements.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior Emergent AI developers build, integrate, and test your application using best-practice coding and MLOps standards. Every component is code-reviewed for accuracy, performance, and security.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & Quality Assurance",
      description:
        "Full security assessments, penetration testing, GDPR and SOC 2 compliance checks, model bias audits, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration as your needs evolve.",
    },
  ],
  premiumProcessCTA:
    "Start with a free discovery call — no obligation, no pressure",

  techStackHeading: "Emergent AI Tech Stack",
  techStackSubheading:
    "Industry-leading tools and frameworks powering every Emergent AI engagement",
  techTabs: [
    {
      id: "ml-ai",
      label: "ML & AI",
      items: [
        { name: "PyTorch", abbr: "PT", color: "#ee4c2c" },
        { name: "TensorFlow", abbr: "TF", color: "#ff6f00" },
        { name: "Hugging Face", abbr: "HF", color: "#ffcc00" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
        { name: "OpenAI API", abbr: "OA", color: "#10a37f" },
        { name: "scikit-learn", abbr: "SK", color: "#f7931e" },
        { name: "XGBoost", abbr: "XG", color: "#4f8ef7" },
        { name: "ONNX", abbr: "ON", color: "#7c5cbf" },
      ],
    },
    {
      id: "data-engineering",
      label: "Data Engineering",
      items: [
        { name: "Apache Spark", abbr: "SP", color: "#e25a1c" },
        { name: "dbt", abbr: "dbt", color: "#ff694b" },
        { name: "Airflow", abbr: "AF", color: "#017cee" },
        { name: "Kafka", abbr: "KF", color: "#231f20" },
        { name: "Snowflake", abbr: "SF", color: "#29b5e8" },
        { name: "BigQuery", abbr: "BQ", color: "#4285f4" },
        { name: "dask", abbr: "DK", color: "#fc6e4f" },
        { name: "Feast", abbr: "FS", color: "#7c5cbf" },
      ],
    },
    {
      id: "mlops",
      label: "MLOps",
      items: [
        { name: "MLflow", abbr: "ML", color: "#0194e2" },
        { name: "Kubeflow", abbr: "KF", color: "#326ce5" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
        { name: "Weights & Biases", abbr: "WB", color: "#ffbe00" },
        { name: "BentoML", abbr: "BM", color: "#f97316" },
        { name: "Ray", abbr: "RY", color: "#028cf0" },
        { name: "Seldon Core", abbr: "SC", color: "#7c5cbf" },
      ],
    },
    {
      id: "cloud-infra",
      label: "Cloud & Infra",
      items: [
        { name: "AWS SageMaker", abbr: "SM", color: "#ff9900" },
        { name: "Azure ML", abbr: "AZ", color: "#0089d6" },
        { name: "Google Vertex AI", abbr: "VA", color: "#4285f4" },
        { name: "Terraform", abbr: "TF", color: "#7b42bc" },
        { name: "GitHub Actions", abbr: "GA", color: "#2088ff" },
        { name: "Prometheus", abbr: "PM", color: "#e6522c" },
        { name: "Grafana", abbr: "GR", color: "#f46800" },
        { name: "FastAPI", abbr: "FA", color: "#009688" },
      ],
    },
  ],

  caseStudiesHeading: "Emergent AI in Action",
  caseStudiesSubheading:
    "Real results from real deployments — measurable impact across every engagement.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "AdaptiveIQ Platform",
      industry: "FinTech",
      description:
        "Emergent AI-powered investment intelligence platform with autonomous market analysis agents, real-time portfolio optimization, and adaptive risk modeling — deployed across 3 enterprise clients.",
      metrics: [
        "340% ROI in 6 months",
        "12M+ data points/day",
        "99.97% uptime",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "NeuroDoc AI",
      industry: "HealthTech",
      description:
        "Multi-agent document intelligence system with custom fine-tuned medical LLMs, RAG pipelines over 2M clinical documents, and automated compliance reporting for HIPAA-regulated environments.",
      metrics: [
        "89% faster processing",
        "0.003% error rate",
        "HIPAA compliant",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "AgentFlow CRM",
      industry: "SaaS",
      description:
        "Autonomous AI agent orchestration layer for enterprise CRM workflows — intelligent lead scoring, contract drafting, and pipeline forecasting powered by multi-step LLM reasoning chains.",
      metrics: [
        "5x pipeline velocity",
        "60% cost reduction",
        "Zero-touch automation",
      ],
    },
    {
      accentColor: "#f97316",
      projectName: "VisionEdge Analytics",
      industry: "E-Commerce",
      description:
        "Deep learning computer vision platform for real-time product defect detection, inventory optimization, and demand forecasting — integrated directly into existing warehouse management systems.",
      metrics: [
        "99.2% detection accuracy",
        "40% waste reduction",
        "3-week deployment",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "Working with this team to hire Emergent AI developers was a game-changer. They delivered an autonomous agent system in 11 days that we thought would take 6 months to build. The engineering quality is exceptional — security-first, well-documented, and our team owns it entirely.",
    name: "Dr. Sarah Chen",
    role: "CTO",
    company: "AdaptiveIQ",
    initials: "SC",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "Marcus Williams",
      company: "NeuroDoc",
      quote:
        "The Emergent AI team built our entire LLM fine-tuning pipeline and RAG system in 3 weeks. The model outperforms GPT-4 on our domain by 40%. Genuinely impressive engineering depth.",
      initials: "MW",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "TechForward",
      quote:
        "We needed multi-agent automation across 12 enterprise workflows. They scoped, architected, and deployed it in 4 weeks — under budget. The observability and monitoring setup alone is worth the engagement.",
      initials: "PS",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "James O'Brien",
      company: "VisionEdge",
      quote:
        "100% code ownership, zero vendor lock-in, full documentation — exactly what they promised. The Emergent AI system they built now handles 2.4M events per day with no intervention.",
      initials: "JO",
      color: "#f97316",
      rating: 5,
    },
  ],

  industriesHexHeading: "Industries We Serve",
  industriesHexSubheading: "Emergent AI solutions engineered for every sector.",
  industryTiles: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      label: "Startups",
      tooltip: "AI-first products built for speed",
    },
    {
      icon: Store,
      color: "#7c5cbf",
      label: "SMEs",
      tooltip: "Automation that scales with growth",
    },
    {
      icon: Landmark,
      color: "#10b981",
      label: "Enterprise",
      tooltip: "Secure, compliant Emergent AI at scale",
    },
    {
      icon: Briefcase,
      color: "#f97316",
      label: "Agencies",
      tooltip: "White-label AI services",
    },
    {
      icon: Cloud,
      color: "#06b6d4",
      label: "SaaS Teams",
      tooltip: "AI-native product features",
    },
    {
      icon: HeartPulse,
      color: "#f43f5e",
      label: "HealthTech",
      tooltip: "HIPAA-compliant AI pipelines",
    },
    {
      icon: GraduationCap,
      color: "#7c3aed",
      label: "EdTech",
      tooltip: "Personalized learning AI",
    },
    {
      icon: ShoppingCart,
      color: "#0d9488",
      label: "E-Commerce",
      tooltip: "Recommendation and automation AI",
    },
  ],

  faqSplitHeading:
    "Frequently Asked Questions About Hiring Emergent AI Developers",
  faqSplitSubheading: "Everything you need to know before you hire.",
  faqItems: [
    {
      id: "what-does",
      question: "What exactly does a Emergent AI Developer do?",
      answer:
        "A Emergent AI Developer designs, builds, and integrates applications powered by large language models, generative AI systems, autonomous agents, and deep learning architectures. They combine advanced prompt engineering, RAG pipeline design, fine-tuning, multi-agent orchestration, and traditional software engineering to produce clean, scalable, production-ready AI applications far faster and more reliably than general-purpose developers attempting to learn these disciplines on the job.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an Emergent AI MVP?",
      answer:
        "Simple Emergent AI-powered MVPs are typically delivered within 5–7 business days. More complex applications with custom fine-tuned models, multi-step agent workflows, deep learning pipelines, and advanced dashboards generally take 2–6 weeks. Either way, our process is 8–12x faster than traditional software development timelines — and you receive production-ready, auditable code, not a fragile prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with Emergent AI?",
      answer:
        "Our Emergent AI developers can build conversational AI platforms, generative AI SaaS products, autonomous multi-agent systems, intelligent document processing pipelines, GPT-powered CRMs and productivity tools, deep learning computer vision systems, voice AI applications, real-time recommendation engines, AI workflow automation platforms, and custom LLM fine-tuned models for domain-specific applications. If a use case benefits from language understanding, reasoning, generation, or adaptive learning, Emergent AI can power it.",
    },
    {
      id: "security",
      question:
        "Is production code built on Emergent AI secure and enterprise-ready?",
      answer:
        "Absolutely — when built by experts. Our team conducts full security audits, implements appropriate data handling and retention policies, enforces rate limiting and cost controls, audits models for bias and fairness, and performs GDPR and SOC 2 compliance checks on every Emergent AI build before deployment. Security and governance are not afterthoughts; they are built into the architecture from the very first design decision.",
    },
    {
      id: "ownership",
      question: "Will I own the code and AI infrastructure after the project?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete repository access, technical documentation, model cards, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely, with no ongoing licensing dependencies on our team.",
    },
    {
      id: "existing-product",
      question:
        "Can you integrate Emergent AI into our existing product or platform?",
      answer:
        "Yes — this is one of our most frequently requested engagements. Our dedicated AI developer hire model is specifically designed for teams that want to add Emergent AI capabilities to an existing product without rebuilding from scratch. We integrate cleanly with virtually any modern tech stack, and we write integration code that your existing engineering team can understand, own, and extend completely independently.",
    },
    {
      id: "post-launch",
      question: "Do you offer ongoing support and model updates after launch?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, prompt refinement, model version upgrades, fine-tuning iterations, performance optimisation, cost optimisation, and feature additions. As new Emergent AI model capabilities emerge from leading research labs, we help you adopt them quickly and safely. Our development services are designed for long-term strategic partnership, not one-time delivery.",
    },
  ],

  finalCTA: {
    heading: "Ready to Build Smarter with an Emergent AI Developer?",
    subtext:
      "Stop waiting months for software that should take days. Hire a Emergent AI Developer today and launch your next AI product with frontier model power and production-grade engineering quality.",
    primaryLabel: "Get a Free Consultation →",
    secondaryLabel: "View Our Work",
    trustItems: [
      "5-Day MVP Turnaround",
      "100% Code Ownership",
      "8-12x Faster Delivery",
      "Zero Vendor Lock-In",
    ],
  },
};

// ─── Hire Caffeine AI Developer ───────────────────────────────────────────────

const hireCaffeineAIDeveloper: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "hire-caffeine-ai-developer",
  badge: "Caffeine AI Development",
  headline: "Hire a",
  headlineAccent: "Caffeine AI Developer",
  subheading:
    "Build Faster. Automate Deeper. Deploy with Confidence.\n\nExpert Caffeine AI Developers | LLM Engineers | AI Agent & Workflow Automation Specialists",
  heroStats: [
    { value: "150+", label: "Caffeine AI Projects Delivered" },
    { value: "5-10x", label: "Faster Than Traditional Dev" },
    { value: "3 Days", label: "MVP Turnaround" },
    { value: "100%", label: "Code Ownership Guaranteed" },
  ],
  ctaPrimary: "Hire a Caffeine AI Developer",
  ctaSecondary: "View Our Work",

  problemHeading: "Hire a Caffeine AI Developer — Ship Smarter, Scale Faster",
  problemParagraph1:
    "The AI race is not won by the companies with the biggest budgets — it is won by the teams that hire AI engineers for project delivery with the right specialist knowledge. Caffeine AI is one of the fastest-growing platforms for enterprise-grade autonomous agent development and LLM-powered application building, and the businesses choosing to hire caffeine developers today are locking in a compounding speed advantage their competitors will struggle to close.",
  problemParagraph2:
    "Our team of certified Caffeine AI developers, LLM engineers, and AI automation specialists merges the raw generative power of the Caffeine AI platform with deep software engineering discipline — delivering production-grade AI agents, intelligent automation systems, and LLM-native SaaS products that create measurable ROI from the first sprint.",
  painPoints: [
    {
      icon: Timer,
      color: "#f97316",
      title: "Months-Long Dev Cycles",
      description:
        "Traditional development takes 3–6 months to ship an MVP. Your competitors are already live while you're still in sprint planning.",
    },
    {
      icon: TrendingDown,
      color: "#4f8ef7",
      title: "Ballooning In-House Costs",
      description:
        "Hiring internal AI engineers is expensive, slow, and risky. Senior Caffeine AI talent is scarce — and onboarding timelines kill your speed to market.",
    },
    {
      icon: AlertTriangle,
      color: "#7c5cbf",
      title: "Platform Without Expertise",
      description:
        "Caffeine AI is a tool, not a shortcut. Extracting genuine value requires prompt architects, agent orchestrators, and RAG specialists — not general-purpose developers learning on the job.",
    },
  ],

  featuresHeading: "Our Caffeine AI Development Services",
  featuresSubheading:
    "End-to-end Caffeine AI development services tailored to your industry, workflow complexity, and business goals.",
  features: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      name: "MVP Development with Caffeine AI",
      description:
        "Turn your product idea into a functional, market-validated AI application within days. Uses Caffeine AI composable agent framework to generate clean, testable, production-ready code. Validate your concept before committing to full-scale investment.",
      link: "#",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      name: "AI Agent Development & Orchestration",
      description:
        "Autonomous AI agents are the defining enterprise AI use case. Our specialists design and deploy agents on Caffeine AI that handle complex, multi-step workflows — from intelligent lead qualification and contract drafting to automated research, data extraction, and cross-system task execution.",
      link: "#",
    },
    {
      icon: Cloud,
      color: "#06b6d4",
      name: "SaaS Platform Development",
      description:
        "Build subscription-ready SaaS products with Caffeine AI at the core — complete with multi-tenant architecture, role-based access control, usage-based billing, and LLM orchestration baked in from day one.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#f59e0b",
      name: "LLM Integration & Custom Fine-Tuning",
      description:
        "When your application demands domain-specific language or highly consistent output formatting, our hire LLM engineer capability delivers custom fine-tuned models trained on your data. We also architect RAG pipelines that ground model responses in your proprietary knowledge base.",
      link: "#",
    },
    {
      icon: Workflow,
      color: "#10b981",
      name: "AI Workflow Automation & Process Intelligence",
      description:
        "Our AI workflow automation developers design and implement intelligent automation systems that connect Caffeine AI agents with your existing tools — CRMs, ERPs, data warehouses, communication platforms, and document systems.",
      link: "#",
    },
    {
      icon: LayoutDashboard,
      color: "#f97316",
      name: "Internal Tools & Custom AI Dashboards",
      description:
        "Replace disconnected spreadsheets and manual reporting with powerful AI-native internal tools. Our developers build custom dashboards, admin panels, and intelligent automation systems that deliver measurable productivity gains from day one.",
      link: "#",
    },
    {
      icon: Sparkles,
      color: "#a855f7",
      name: "Generative AI Application Development",
      description:
        "From AI-powered content platforms and creative tools to intelligent document processing and synthetic data generation, we build end-to-end generative AI products on the Caffeine AI platform — handling model selection, prompt architecture, frontend integration, and production deployment.",
      link: "#",
    },
    {
      icon: Settings,
      color: "#0d9488",
      name: "Application Optimisation & Ongoing Support",
      description:
        "Already have an application built on Caffeine AI? Our dedicated AI developer hire model covers code audits, agent performance optimisation, security hardening, LLM cost reduction, feature enhancements, and ongoing maintenance.",
      link: "#",
    },
  ],

  processHeading: "How Our Caffeine AI Development Process Works",
  processSubheading:
    "A transparent, five-stage workflow combining the speed of Caffeine AI agent platform with senior human engineering rigour.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirement Scoping",
      description:
        "Free consultation to map your AI use case, target users, data sources, integration requirements, and business goals. Precise scoping prevents costly revisions and misaligned deliverables.",
    },
    {
      icon: Brain,
      number: "02",
      title: "Agent Architecture & Prompt Engineering",
      description:
        "Our Caffeine AI experts design the agent topology, LLM orchestration strategy, RAG pipeline, and tool-calling schema. Every architectural decision is documented and justified against your specific requirements.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior Caffeine AI developers build, integrate, and rigorously test your application. Every component is code-reviewed for logic accuracy, performance, security, and business alignment before it progresses.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & Quality Assurance",
      description:
        "Full security assessments, GDPR and SOC 2 compliance checks, penetration testing, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration.",
    },
  ],

  benefitsHeading:
    "Why Hire a Caffeine AI Developer Instead of Building Traditionally?",
  benefitsSubheading:
    "The advantages of choosing to hire AI caffeine developers from a specialist team are concrete, measurable, and immediate.",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 60, suffix: "%", label: "Lower Dev Costs" },
    { value: 3, suffix: " days", label: "MVP Turnaround" },
    { value: 100, suffix: "%", label: "Code Ownership" },
  ],
  benefits: [
    {
      title: "5–10x Faster Delivery",
      description:
        "Deliver production-ready AI agents and applications in days, not quarters. Our hire AI engineers for project model eliminates onboarding lag and accelerates time-to-value from sprint one.",
    },
    {
      title: "Up to 60% Lower Costs",
      description:
        "Specialist Caffeine AI developers work with battle-tested agent frameworks, pre-built integration patterns, and reusable orchestration components — cutting development costs dramatically versus building from scratch.",
    },
    {
      title: "Enterprise-Grade Quality",
      description:
        "Every AI system undergoes security auditing, load testing, compliance review, and performance validation before deployment. No shortcuts, no technical debt handed to your team.",
    },
    {
      title: "100% Code & IP Ownership",
      description:
        "Full GitHub repository access from day one. Your application, your models, your data — zero vendor lock-in, unconditionally.",
    },
  ],

  industriesHeading: "Who Should Hire a Caffeine AI Developer?",
  industriesSubheading:
    "Caffeine AI development delivers maximum value across these key segments.",
  industries: [
    {
      id: "startups",
      label: "Startups & Founders",
      icon: Rocket,
      color: "#4f8ef7",
      illustration: "🚀",
      useCases: [
        {
          title: "AI-First MVP in Days",
          description:
            "Get a working, intelligent product into users' hands quickly at a fraction of the cost of a traditional hire. Our AI developers for hire remote model means senior expertise from day one.",
        },
        {
          title: "Caffeine AI Agent Features",
          description:
            "Embed multi-step reasoning agents that differentiate your product and automate complex workflows users would otherwise handle manually.",
        },
        {
          title: "Investor-Ready AI Demos",
          description:
            "Build polished, functional AI prototypes that impress investors — not wireframes. Ship something real before your next fundraise.",
        },
      ],
    },
    {
      id: "sme",
      label: "SMEs & Growing Businesses",
      icon: Store,
      color: "#7c5cbf",
      illustration: "🏢",
      useCases: [
        {
          title: "Custom AI Workflow Automation",
          description:
            "Hire AI engineers for project-based engagements and have production-ready AI tools running within weeks — without building a permanent AI team.",
        },
        {
          title: "Intelligent Document Processing",
          description:
            "Automate extraction, classification, and routing of unstructured documents using Caffeine AI agents trained on your document types.",
        },
        {
          title: "AI-Powered Internal Tools",
          description:
            "Replace disconnected spreadsheets and manual workflows with AI-native internal tools that streamline operations from day one.",
        },
      ],
    },
    {
      id: "enterprise",
      label: "Enterprise Teams",
      icon: Landmark,
      color: "#10b981",
      illustration: "🏛️",
      useCases: [
        {
          title: "Proof-of-Concept Acceleration",
          description:
            "Accelerate POC builds without pulling resources from core engineering. Validate department-level AI tools and innovation projects on-demand.",
        },
        {
          title: "High-Volume Workflow Automation",
          description:
            "Connect Caffeine AI agents to your existing CRM, ERP, and communication tools to automate high-volume workflows at enterprise scale.",
        },
        {
          title: "SOC 2 & GDPR-Compliant AI Builds",
          description:
            "Enterprise-grade security, compliance documentation, and audit trails built into every Caffeine AI deployment from the first line of code.",
        },
      ],
    },
    {
      id: "agencies",
      label: "Agencies & Consultancies",
      icon: Briefcase,
      color: "#f59e0b",
      illustration: "🤝",
      useCases: [
        {
          title: "White-Label AI Development",
          description:
            "Deliver client projects faster and at significantly higher margins using our AI agent automation services as white-label partnerships.",
        },
        {
          title: "Faster Client Delivery",
          description:
            "Compress project timelines without sacrificing quality. Deliver 5–10x faster than traditional agencies without the internal learning curve.",
        },
        {
          title: "Speed Advantage at Scale",
          description:
            "Use the speed advantage of Caffeine AI development without building an internal AI practice from scratch. We handle the complexity — you handle the client relationship.",
        },
      ],
    },
    {
      id: "saas",
      label: "SaaS Companies",
      icon: Cloud,
      color: "#f43f5e",
      illustration: "☁️",
      useCases: [
        {
          title: "AI Copilot Feature Development",
          description:
            "Embed a Caffeine AI-powered copilot into your SaaS product that understands your data model and user intent — shipped in days, not quarters.",
        },
        {
          title: "Intelligent Onboarding Flows",
          description:
            "Deploy an AI assistant that guides new users to their activation moment faster by learning from your most successful account patterns.",
        },
        {
          title: "LLM-Powered Feature Iteration",
          description:
            "Prototype and validate new AI features 5–10x faster. Get real user feedback before committing full engineering sprints to new functionality.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "Teams across industries trust Tech 2Globe AI to ship Caffeine AI-powered applications that work in production.",
  testimonials: [
    {
      quote:
        "Tech 2Globe's Caffeine AI team delivered a multi-agent automation platform in 10 days that replaced our entire manual operations workflow. The engineering quality is exceptional — secure, well-documented, and we own every line of code.",
      name: "James Thornton",
      role: "CTO",
      company: "FlowOps Intelligence",
      initials: "JT",
      color: "#4f8ef7",
    },
    {
      quote:
        "We needed RAG pipelines grounded in our proprietary knowledge base. Their Caffeine AI experts delivered a production-ready system in 3 weeks with near-zero hallucination rates. Our support team now resolves tickets 60% faster.",
      name: "Priya Kapoor",
      role: "Head of Product",
      company: "Meridian SaaS Platform",
      initials: "PK",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions About Caffeine AI Development",
  faqSubheading:
    "Clear answers to the questions we hear most from teams evaluating Caffeine AI development partnerships.",
  faqs: [
    {
      id: "what-does",
      question: "What exactly does a Caffeine AI developer do?",
      answer:
        "A Caffeine AI developer uses the Caffeine AI platform to design, build, and deploy LLM-powered applications and autonomous AI agents. They combine advanced prompt engineering, agent orchestration, and traditional software development expertise to produce clean, scalable, production-ready AI systems far faster and more reliably than a general-purpose developer learning the platform on the job. When you hire caffeine developers, you are engaging specialists who know how to get maximum value from the platform immediately.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an AI MVP using Caffeine AI?",
      answer:
        "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom LLM integrations, multi-step agent orchestration, role-based access, and enterprise dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code with full documentation, not a throwaway prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with Caffeine AI?",
      answer:
        "Our hire AI caffeine developers service covers: autonomous AI agents, AI-powered SaaS platforms, intelligent document processing systems, conversational AI assistants, automated workflow systems, generative AI content tools, LLM-integrated CRMs, internal knowledge bases, AI-driven analytics dashboards, and multi-step agentic automation pipelines.",
    },
    {
      id: "security",
      question:
        "Is production code built on Caffeine AI secure and enterprise-ready?",
      answer:
        "Absolutely. Our team conducts full security audits, implements appropriate data handling and model output validation, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every Caffeine AI build before deployment. Security is designed into the architecture from the first line of code, not bolted on at the end.",
    },
    {
      id: "ownership",
      question:
        "Will I own the code and AI systems after the project is complete?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, agent configuration files, and zero vendor lock-in. Your application, your agents, your data — always and entirely.",
    },
    {
      id: "post-launch",
      question:
        "Do you offer post-launch support for Caffeine AI applications?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, agent behaviour refinement, LLM version upgrades, RAG pipeline tuning, performance and cost optimisation, security updates, and feature additions. Our hire caffeine experts model is designed for long-term strategic partnership, not one-time delivery. As the Caffeine AI platform evolves, we help you adopt new capabilities quickly and safely.",
    },
  ],

  ctaBannerHeading: "Ready to Build Smarter with a",
  ctaBannerAccent: "Caffeine AI Developer?",
  ctaBannerSubtext:
    "Stop waiting months for AI software that should take days. Hire a certified Caffeine AI developer today and launch your next intelligent product with agent-grade power and production-ready engineering quality.",
  ctaBannerPrimary: "Get a Free Consultation",
  ctaBannerSecondary: "View Our Work",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: [
    "150+ Projects Delivered",
    "3-Day MVP Turnaround",
    "100% Code Ownership",
  ],

  socialProofTagline: "Trusted by startups and enterprises worldwide",
  socialProofLogos: [
    { name: "FlowOps Intelligence", abbr: "FO" },
    { name: "Meridian SaaS Platform", abbr: "MS" },
    { name: "Apex AI Ventures", abbr: "AV" },
    { name: "NorthStar Tech", abbr: "NS" },
    { name: "Prism Digital", abbr: "PD" },
    { name: "ClearPath Studios", abbr: "CS" },
    { name: "Delta AI Labs", abbr: "DL" },
    { name: "Kodex Ventures", abbr: "KV" },
    { name: "Summit Labs", abbr: "SL" },
    { name: "Orbis Analytics", abbr: "OA" },
    { name: "Solera Technologies", abbr: "ST" },
    { name: "TechBridge Group", abbr: "TB" },
  ],

  servicesGridHeading: "Our Caffeine AI Development Services",
  servicesGridSubheading:
    "End-to-end Caffeine AI development services tailored precisely to your industry, workflow complexity, and business goals.",
  serviceCards: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      title: "MVP Development with Caffeine AI",
      description:
        "Market-validated AI applications in days using Caffeine AI's composable agent framework. Validate your concept before committing to full-scale investment.",
    },
    {
      icon: Bot,
      color: "#7c5cbf",
      title: "AI Agent Development & Orchestration",
      description:
        "Multi-step autonomous agents for lead qualification, contract drafting, automated research, data extraction, and cross-system task execution.",
    },
    {
      icon: Cloud,
      color: "#06b6d4",
      title: "SaaS Platform Development",
      description:
        "Subscription-ready SaaS with multi-tenant architecture, role-based access, usage-based billing, and LLM orchestration built in from day one.",
    },
    {
      icon: Brain,
      color: "#f59e0b",
      title: "LLM Integration & Fine-Tuning",
      description:
        "Custom fine-tuned models trained on your data and RAG pipelines that ground responses in your proprietary knowledge base with near-zero hallucinations.",
    },
    {
      icon: Workflow,
      color: "#10b981",
      title: "AI Workflow Automation",
      description:
        "Intelligent automation systems connecting Caffeine AI agents with your CRMs, ERPs, data warehouses, and communication platforms.",
    },
    {
      icon: Sparkles,
      color: "#a855f7",
      title: "Generative AI Application Development",
      description:
        "End-to-end generative AI products on the Caffeine AI platform — from model selection and prompt architecture to frontend integration and production deployment.",
    },
  ],

  whyChooseUsHeading:
    "Why Hire a Caffeine AI Developer Instead of Building Traditionally?",
  numberedBenefits: [
    {
      number: "01",
      title: "5–10x Faster Delivery",
      description:
        "Deliver production-ready AI agents and applications in days, not quarters. Our hire AI engineers for project model eliminates onboarding lag and accelerates time-to-value from sprint one.",
    },
    {
      number: "02",
      title: "Up to 60% Lower Costs",
      description:
        "Specialist Caffeine AI developers work with battle-tested agent frameworks, pre-built integration patterns, and reusable orchestration components — cutting development costs dramatically versus building from scratch.",
    },
    {
      number: "03",
      title: "Enterprise-Grade Quality",
      description:
        "Every AI system undergoes security auditing, load testing, compliance review, and performance validation before deployment. No shortcuts, no technical debt handed to your team.",
    },
    {
      number: "04",
      title: "100% Code & IP Ownership",
      description:
        "Full GitHub repository access from day one. Your application, your models, your data — zero vendor lock-in, unconditionally.",
    },
  ],
  animatedStats: [
    { icon: Rocket, value: 150, suffix: "+", label: "Projects Delivered" },
    { icon: Timer, value: 5, suffix: "-10x", label: "Faster Delivery" },
    { icon: CheckCircle2, value: 100, suffix: "%", label: "Code Ownership" },
    { icon: Users, value: 60, suffix: "%", label: "Cost Savings" },
  ],

  engagementHeading: "Choose Your Engagement Model",
  engagementSubheading:
    "Flexible structures designed for your project scope, team size, and launch timeline.",
  engagementModels: [],

  premiumProcessHeading: "How Our Caffeine AI Development Process Works",
  premiumProcessSubheading:
    "A transparent, five-stage workflow combining the speed of Caffeine AI's agent platform with senior human engineering rigour",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Requirement Scoping",
      description:
        "Free consultation to map your AI use case, target users, data sources, integration requirements, and business goals. Precise scoping prevents costly revisions and misaligned deliverables.",
    },
    {
      icon: Brain,
      number: "02",
      title: "Agent Architecture & Prompt Engineering",
      description:
        "Our Caffeine AI experts design the agent topology, LLM orchestration strategy, RAG pipeline, and tool-calling schema. Every architectural decision is documented and justified.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Human-Led Development & Integration",
      description:
        "Senior Caffeine AI developers build, integrate, and rigorously test your application. Every component is code-reviewed for logic accuracy, performance, security, and business alignment.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & Quality Assurance",
      description:
        "Full security assessments, GDPR and SOC 2 compliance checks, penetration testing, and load testing before any production deployment. Enterprise-grade rigour, every engagement.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment, Handover & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Post-launch support packages available for scaling, fine-tuning, and feature iteration.",
    },
  ],
  premiumProcessCTA: "Ready to build with Caffeine AI? Let's talk →",

  techStackHeading: "Caffeine AI Tech Stack",
  techStackSubheading:
    "Caffeine AI's frontier agent platform plus best-in-class supporting tools for every layer of your product",
  techTabs: [
    {
      id: "caffeine-core",
      label: "Caffeine AI Tech Stack",
      items: [
        { name: "Caffeine AI", abbr: "CA", color: "#7c5cbf" },
        { name: "GPT-4o", abbr: "4o", color: "#10a37f" },
        { name: "Claude", abbr: "CL", color: "#d97706" },
        { name: "Gemini", abbr: "GM", color: "#4285f4" },
        { name: "Llama", abbr: "LL", color: "#0066cc" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
        { name: "AutoGPT", abbr: "AG", color: "#10a37f" },
        { name: "CrewAI", abbr: "CR", color: "#f43f5e" },
      ],
    },
    {
      id: "rag-data",
      label: "RAG & Data",
      items: [
        { name: "Pinecone", abbr: "PC", color: "#000066" },
        { name: "Weaviate", abbr: "WV", color: "#06b6d4" },
        { name: "Chroma", abbr: "CH", color: "#e11d48" },
        { name: "Redis Vector", abbr: "RV", color: "#dc2626" },
        { name: "pgvector", abbr: "PV", color: "#4169e1" },
        { name: "FAISS", abbr: "FA", color: "#f59e0b" },
        { name: "LlamaIndex", abbr: "LI", color: "#f97316" },
        { name: "Qdrant", abbr: "QD", color: "#7c5cbf" },
      ],
    },
    {
      id: "backend-dev",
      label: "Backend & Dev",
      items: [
        { name: "Python", abbr: "PY", color: "#3776ab" },
        { name: "TypeScript", abbr: "TS", color: "#3178c6" },
        { name: "FastAPI", abbr: "FA", color: "#009688" },
        { name: "Node.js", abbr: "ND", color: "#339933" },
        { name: "React", abbr: "RE", color: "#61dafb" },
        { name: "PostgreSQL", abbr: "PG", color: "#4169e1" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
      ],
    },
    {
      id: "cloud-deploy",
      label: "Cloud & Deploy",
      items: [
        { name: "AWS", abbr: "AW", color: "#ff9900" },
        { name: "GCP", abbr: "GC", color: "#4285f4" },
        { name: "Azure", abbr: "AZ", color: "#0089d6" },
        { name: "Vercel", abbr: "VC", color: "#000000" },
        { name: "GitHub Actions", abbr: "GA", color: "#2088ff" },
        { name: "Terraform", abbr: "TF", color: "#7b42bc" },
        { name: "Prometheus", abbr: "PM", color: "#e6522c" },
        { name: "Grafana", abbr: "GR", color: "#f46800" },
      ],
    },
  ],

  caseStudiesHeading: "Caffeine AI in Action",
  caseStudiesSubheading: "Real projects. Real results.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "Enterprise AI Agent Platform",
      industry: "Financial Services",
      description:
        "Built a Caffeine AI-powered autonomous agent platform for a financial services company, handling multi-step workflow automation across compliance, reporting, and client onboarding processes.",
      metrics: [
        "80% processing time reduction",
        "Zero human intervention workflows",
        "SOC 2 compliant from day one",
      ],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "LLM-Powered SaaS Product",
      industry: "HR Tech",
      description:
        "Delivered a GPT-powered candidate screening and matching platform for an HR tech startup, with RAG pipelines grounded in job descriptions and company culture documentation.",
      metrics: [
        "5x faster candidate screening",
        "Deployed in 3 weeks",
        "60% reduction in time-to-hire",
      ],
    },
    {
      accentColor: "#10b981",
      projectName: "AI Workflow Automation Suite",
      industry: "E-Commerce",
      description:
        "Designed and deployed an intelligent automation suite connecting Caffeine AI agents with the client's CRM, ERP, and customer support platform — eliminating manual bottlenecks across operations.",
      metrics: [
        "60% operational cost reduction",
        "12 workflows fully automated",
        "ROI visible within first sprint",
      ],
    },
    {
      accentColor: "#f59e0b",
      projectName: "Conversational AI Knowledge Base",
      industry: "Legal Tech",
      description:
        "Built a production-grade RAG pipeline over 200K+ proprietary legal documents, enabling natural language queries with near-zero hallucination rates for a leading law firm.",
      metrics: [
        "98% answer accuracy",
        "70% faster document lookup",
        "Deployed in 4 weeks",
      ],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "Tech 2Globe's Caffeine AI team delivered a multi-agent automation platform in 10 days that replaced our entire manual operations workflow. The engineering quality is exceptional — security-first, well-documented, production-ready, and we own every line of code. The ROI was visible within the first sprint.",
    name: "James Thornton",
    role: "CTO",
    company: "FlowOps Intelligence",
    initials: "JT",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "Priya Kapoor",
      company: "Meridian SaaS Platform",
      quote:
        "Their Caffeine AI RAG pipeline eliminated hallucinations entirely. Our support team resolves tickets 60% faster. Delivered in 3 weeks — outstanding quality.",
      initials: "PK",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Carlos Rivera",
      company: "Apex E-Commerce",
      quote:
        "12 workflows fully automated in a single engagement. 60% cost reduction from month one. The Caffeine AI agents they built now run our entire operations unattended.",
      initials: "CR",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      company: "Delta Legal Services",
      quote:
        "We queried 200K legal documents in natural language with 98% accuracy. What used to take hours takes seconds. Best technology investment we've made.",
      initials: "SM",
      color: "#f59e0b",
      rating: 5,
    },
  ],

  industriesHexHeading: "Who Should Hire a Caffeine AI Developer?",
  industriesHexSubheading:
    "Caffeine AI development delivers maximum value for teams that need to move fast without sacrificing quality.",
  industryTiles: [
    {
      icon: Rocket,
      color: "#4f8ef7",
      label: "Startups & Founders",
      tooltip: "AI-first MVPs, agent features, and investor-ready demos",
    },
    {
      icon: Store,
      color: "#7c5cbf",
      label: "SMEs",
      tooltip: "Workflow automation, document processing, and internal tools",
    },
    {
      icon: Landmark,
      color: "#10b981",
      label: "Enterprise Teams",
      tooltip:
        "POC acceleration, compliance-ready AI, and high-volume automation",
    },
    {
      icon: Briefcase,
      color: "#f59e0b",
      label: "Agencies & Consultancies",
      tooltip: "White-label AI services, faster delivery, higher margins",
    },
    {
      icon: Cloud,
      color: "#f43f5e",
      label: "SaaS Companies",
      tooltip: "AI copilot features, LLM integrations, and rapid iteration",
    },
    {
      icon: TrendingUp,
      color: "#06b6d4",
      label: "FinTech & Finance",
      tooltip:
        "Autonomous agents, document intelligence, and compliance automation",
    },
    {
      icon: HeartPulse,
      color: "#ef4444",
      label: "HealthTech",
      tooltip: "HIPAA-aware AI pipelines, clinical NLP, and patient portals",
    },
    {
      icon: ShoppingCart,
      color: "#a855f7",
      label: "E-Commerce",
      tooltip: "Automation suites, recommendation AI, and intelligent support",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions About Caffeine AI Development",
  faqSplitSubheading:
    "Everything you need to know before hiring a Caffeine AI developer.",
  faqItems: [
    {
      id: "what-does",
      question: "What exactly does a Caffeine AI developer do?",
      answer:
        "A Caffeine AI developer uses the Caffeine AI platform to design, build, and deploy LLM-powered applications and autonomous AI agents. They combine advanced prompt engineering, agent orchestration, and traditional software development expertise to produce clean, scalable, production-ready AI systems far faster and more reliably than a general-purpose developer learning the platform on the job. When you hire caffeine developers, you are engaging specialists who know how to get maximum value from the platform immediately.",
    },
    {
      id: "mvp-speed",
      question: "How quickly can you deliver an AI MVP using Caffeine AI?",
      answer:
        "Simple AI-powered MVPs are typically delivered within 3–7 business days. More complex applications with custom LLM integrations, multi-step agent orchestration, role-based access, and enterprise dashboards generally take 2–5 weeks. Either way, our process is 5–10x faster than traditional software development timelines — and you receive production-ready code with full documentation, not a throwaway prototype.",
    },
    {
      id: "app-types",
      question: "What types of applications can be built with Caffeine AI?",
      answer:
        "Our hire AI caffeine developers service covers: autonomous AI agents, AI-powered SaaS platforms, intelligent document processing systems, conversational AI assistants, automated workflow systems, generative AI content tools, LLM-integrated CRMs, internal knowledge bases, AI-driven analytics dashboards, and multi-step agentic automation pipelines.",
    },
    {
      id: "security",
      question:
        "Is production code built on Caffeine AI secure and enterprise-ready?",
      answer:
        "Absolutely. Our team conducts full security audits, implements appropriate data handling and model output validation, enforces rate limiting and cost controls, and performs GDPR and SOC 2 compliance checks on every Caffeine AI build before deployment. Security is designed into the architecture from the first line of code, not bolted on at the end.",
    },
    {
      id: "ownership",
      question:
        "Will I own the code and AI systems after the project is complete?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete GitHub repository access, technical documentation, deployment runbooks, agent configuration files, and zero vendor lock-in. Your application, your agents, your data — always and entirely.",
    },
    {
      id: "post-launch",
      question:
        "Do you offer post-launch support for Caffeine AI applications?",
      answer:
        "Yes. We offer flexible post-launch support packages covering bug fixes, agent behaviour refinement, LLM version upgrades, RAG pipeline tuning, performance and cost optimisation, security updates, and feature additions. Our hire caffeine experts model is designed for long-term strategic partnership, not one-time delivery. As the Caffeine AI platform evolves, we help you adopt new capabilities quickly and safely.",
    },
  ],

  finalCTA: {
    heading: "Ready to Build Smarter with a Caffeine AI Developer?",
    subtext:
      "Stop waiting months for AI software that should take days. Hire a certified Caffeine AI developer today and launch your next intelligent product with agent-grade power and production-ready engineering quality.",
    primaryLabel: "Get a Free Consultation →",
    secondaryLabel: "View Our Work",
    trustItems: [
      "150+ Projects Delivered",
      "5–10x Faster Delivery",
      "100% Code Ownership",
      "Enterprise-Grade Security",
    ],
  },
};

// ─── Hire AI Developers ────────────────────────────────────────────────────────

const hireAIDevelopers: PremiumSolutionData = {
  // ── Legacy SolutionData fields ──────────────────────────────────────────────
  slug: "hire-ai-developers",
  badge:
    "Expert AI Developers | NLP Engineers | AI Agent Specialists | LLM Engineers | Generative AI Architects",
  headline: "Hire AI Developers",
  headlineAccent: "",
  subheading: "Build Intelligently. Automate Fearlessly. Scale Without Limits.",
  heroStats: [
    { value: "500+", label: "AI Projects Delivered" },
    { value: "8-12×", label: "Faster Than Traditional Dev" },
    { value: "3 Days", label: "MVP Turnaround" },
    { value: "100%", label: "Code Ownership Guaranteed" },
  ],
  ctaPrimary: "Get a Free Consultation",
  ctaSecondary: "See Our Work",

  problemHeading: "Why AI Expertise Matters Now",
  problemParagraph1:
    "Artificial intelligence has moved from competitive advantage to operational necessity. Every industry — from healthcare and finance to retail and logistics — is being reshaped by companies that choose to hire AI developers with genuine, multi-disciplinary expertise. The gap between businesses that act decisively and those still evaluating is widening every quarter.",
  problemParagraph2:
    "Our team of certified AI engineers — spanning natural language processing (NLP), autonomous AI agents, large language model (LLM) engineering, and generative AI product development — delivers production-grade intelligent systems that create measurable business value from the very first deployment.",
  painPoints: [
    {
      icon: AlertTriangle,
      color: "#f97316",
      title: "Generic AI Tools Fall Short",
      description:
        "Off-the-shelf AI solutions lack the domain specificity, compliance guardrails, and integration depth that production enterprise deployments demand.",
    },
    {
      icon: Timer,
      color: "#4f8ef7",
      title: "Slow Internal AI Adoption",
      description:
        "Building an internal AI team takes months of recruiting and onboarding — while competitors with specialist partners are already in production.",
    },
    {
      icon: TrendingDown,
      color: "#7c5cbf",
      title: "Fragmented AI Stack",
      description:
        "NLP, agent systems, and LLM engineering are distinct disciplines. Finding all three under one roof — reliably — is the key challenge for growing businesses.",
    },
  ],

  featuresHeading: "Three Specialised AI Disciplines — One Expert Team",
  featuresSubheading:
    "From language intelligence to autonomous agents and enterprise LLM engineering — our certified AI developers deliver production-grade solutions across the full AI stack.",
  features: [
    {
      icon: MessageSquare,
      color: "#4f8ef7",
      name: "Sentiment Analysis & Opinion Mining",
      description:
        "Real-time sentiment pipelines that analyse brand mentions, product reviews, support tickets, and social media — delivering actionable insights for marketing, product, and CX teams.",
      link: "#",
    },
    {
      icon: FileText,
      color: "#7c5cbf",
      name: "Intelligent Document Processing",
      description:
        "NLP-driven document automation that extracts structured data from contracts, invoices, medical records, regulatory filings, and forms — at scale, with accuracy that outperforms manual review.",
      link: "#",
    },
    {
      icon: Cpu,
      color: "#06b6d4",
      name: "Custom AI Agent Development",
      description:
        "Bespoke autonomous agents tailored to your specific workflow requirements — from single-task specialists to complex multi-agent orchestrations handling entire business processes end-to-end.",
      link: "#",
    },
    {
      icon: Network,
      color: "#10b981",
      name: "Multi-Agent System Architecture",
      description:
        "Networks of specialised agents that communicate, collaborate, and hand off tasks to each other — enabling parallel processing of complex, multi-step enterprise workflows at scale.",
      link: "#",
    },
    {
      icon: Brain,
      color: "#f59e0b",
      name: "Domain-Adaptive Pre-Training",
      description:
        "Curate and enrich your proprietary data to create fine-tuned foundation models or efficient adapter layers that speak your industry's language — boosting accuracy and consistency out of the box.",
      link: "#",
    },
    {
      icon: Database,
      color: "#f43f5e",
      name: "Retrieval-Augmented Generation (RAG)",
      description:
        "Fuse your internal knowledge bases with frontier LLMs to produce grounded, citation-rich responses that dramatically reduce hallucinations and build user trust at scale.",
      link: "#",
    },
  ],

  processHeading: "Our AI Development Process",
  processSubheading:
    "A streamlined, transparent workflow across five clearly defined stages.",
  steps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Use Case Scoping",
      description:
        "Free consultation to define your AI workflow, data sources, integration requirements, success metrics, and business goals. Precise scoping prevents expensive rework.",
    },
    {
      icon: LayoutDashboard,
      number: "02",
      title: "AI Architecture Design",
      description:
        "Our senior AI architects design the agent topology, model stack, RAG pipeline, and orchestration schema. Every decision is documented and justified before any code is written.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Development, Integration & Testing",
      description:
        "Senior AI developers build, integrate, and test the system using production-grade standards. Components are code-reviewed for correctness, security, and performance.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & QA",
      description:
        "Full security audits, prompt injection testing, data access control reviews, GDPR/SOC 2 compliance checks, and load testing before any production deployment.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Flexible post-launch support covers performance optimisation and model upgrades.",
    },
  ],

  benefitsHeading: "Why Leading Businesses Choose Us",
  benefitsSubheading:
    "Four core reasons why enterprise teams, startups, and agencies trust our AI developer team.",
  stats: [
    { value: 500, suffix: "+", label: "AI Projects" },
    { value: 8, suffix: "-12×", label: "Faster Delivery" },
    { value: 3, suffix: " days", label: "MVP Turnaround" },
    { value: 100, suffix: "%", label: "Code Ownership" },
  ],
  benefits: [
    {
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI systems in days, not quarters. Our model eliminates onboarding lag across NLP, agent, and LLM disciplines.",
    },
    {
      title: "60% Lower Development Costs",
      description:
        "Specialist AI developers work with established frameworks and reusable components — dramatically cutting cost versus building from scratch.",
    },
    {
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, regardless of timeline pressure.",
    },
    {
      title: "100% Code Ownership",
      description:
        "Full repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always and unconditionally.",
    },
  ],

  industriesHeading: "Industries We Serve",
  industriesSubheading:
    "Production AI systems across every major sector — from regulated healthcare and finance to fast-moving retail and tech.",
  industries: [
    {
      id: "healthcare",
      label: "Healthcare & Life Sciences",
      icon: HeartPulse,
      color: "#f43f5e",
      illustration: "🏥",
      useCases: [
        {
          title: "Clinical NLP Pipelines",
          description:
            "Extract structured data from physician notes, EHR records, and clinical documents — reducing documentation time and improving care quality.",
        },
        {
          title: "Medical AI Agents",
          description:
            "Automate prior-authorisation, patient triage, and insurance pre-approval workflows with HIPAA-compliant AI agents.",
        },
        {
          title: "LLM-Powered Patient Engagement",
          description:
            "Multilingual patient education systems and 24/7 symptom triage bots that reduce phone-centre load by up to 40%.",
        },
      ],
    },
    {
      id: "finance",
      label: "Financial Services & FinTech",
      icon: Landmark,
      color: "#4f8ef7",
      illustration: "🏦",
      useCases: [
        {
          title: "Automated Loan Underwriting",
          description:
            "AI agents that interpret policy language, extract documents, and run compliance checks — reducing underwriting cycle time dramatically.",
        },
        {
          title: "Intelligent Contract Analysis",
          description:
            "NLP pipelines that extract risk signals, clause types, and anomalies from financial and legal documents at scale.",
        },
        {
          title: "LLM Regulatory Compliance",
          description:
            "RAG-powered compliance assistants grounded in regulatory knowledge bases — always current, always auditable.",
        },
      ],
    },
    {
      id: "ecommerce",
      label: "E-Commerce & Retail",
      icon: ShoppingCart,
      color: "#f59e0b",
      illustration: "🛍️",
      useCases: [
        {
          title: "AI-Powered Search & Discovery",
          description:
            "Semantic NLP search that understands intent, not just keywords — improving product findability and conversion rates.",
        },
        {
          title: "Customer Service Agents",
          description:
            "24/7 AI agents that handle returns, queries, and escalations with human-level understanding and sub-second response times.",
        },
        {
          title: "Personalisation at Scale",
          description:
            "LLM-powered recommendation and content generation systems that adapt to individual user preferences in real time.",
        },
      ],
    },
    {
      id: "legal",
      label: "Legal & Compliance",
      icon: Scale,
      color: "#7c5cbf",
      illustration: "⚖️",
      useCases: [
        {
          title: "Contract Review Automation",
          description:
            "NLP agents that review, flag risks, and extract structured data from contracts — reducing legal review time by orders of magnitude.",
        },
        {
          title: "Regulatory Change Monitoring",
          description:
            "AI pipelines that monitor regulatory filings and surface compliance obligations automatically — with full audit trails.",
        },
        {
          title: "Due Diligence Acceleration",
          description:
            "LLM-powered document intelligence that compresses weeks of due diligence into hours of structured, verifiable output.",
        },
      ],
    },
    {
      id: "hr",
      label: "HR & Talent Operations",
      icon: Users,
      color: "#06b6d4",
      illustration: "👥",
      useCases: [
        {
          title: "CV Screening AI Agents",
          description:
            "Automated agents that screen, score, and rank candidates against role requirements — cutting time-to-shortlist by 50%.",
        },
        {
          title: "Onboarding Workflow Automation",
          description:
            "Multi-step AI agents that coordinate account provisioning, training assignments, and compliance document routing autonomously.",
        },
        {
          title: "Employee Query Resolution",
          description:
            "LLM-powered HR assistants grounded in policy knowledge bases — handling Tier-1 queries 24/7 without human intervention.",
        },
      ],
    },
    {
      id: "sales-marketing",
      label: "Sales & Marketing",
      icon: TrendingUp,
      color: "#10b981",
      illustration: "📈",
      useCases: [
        {
          title: "Lead Qualification Agents",
          description:
            "AI agents that qualify, score, and route inbound leads based on ICP fit — operating autonomously at any volume.",
        },
        {
          title: "Personalised Outreach Automation",
          description:
            "LLM-powered outreach systems that generate hyper-personalised messaging at scale — increasing response rates significantly.",
        },
        {
          title: "Sentiment-Driven Campaign Analytics",
          description:
            "NLP pipelines that monitor brand sentiment across channels and surface campaign insights in real time.",
        },
      ],
    },
    {
      id: "software-it",
      label: "Software & IT Operations",
      icon: Cpu,
      color: "#6366f1",
      illustration: "💻",
      useCases: [
        {
          title: "LLM Code Assistants",
          description:
            "Context-aware code generation and review tools that accelerate engineering output by up to 30%.",
        },
        {
          title: "Incident Response Automation",
          description:
            "AI agents that monitor systems, detect anomalies, and suggest remediation steps from runbooks — reducing mean time to resolution.",
        },
        {
          title: "Knowledge Management AI",
          description:
            "RAG-powered search across wikis, tickets, and logs — eliminating tribal knowledge gaps that slow engineering teams.",
        },
      ],
    },
    {
      id: "manufacturing",
      label: "Manufacturing & Logistics",
      icon: Factory,
      color: "#f97316",
      illustration: "🏭",
      useCases: [
        {
          title: "Document Intelligence for Freight",
          description:
            "Automated extraction from bills of lading, customs declarations, and proof-of-delivery documents — eliminating manual data entry.",
        },
        {
          title: "Supply Chain AI Agents",
          description:
            "Autonomous agents that monitor supplier communications, flag exceptions, and trigger procurement workflows without human intervention.",
        },
        {
          title: "Quality Inspection NLP",
          description:
            "NLP pipelines that extract structured defect data from inspection reports, enabling root cause analysis at manufacturing scale.",
        },
      ],
    },
  ],

  testimonialsHeading: "What Our Clients Say",
  testimonialsSubheading:
    "AI-first teams worldwide trust our NLP, agent, and LLM engineering expertise.",
  testimonials: [
    {
      quote:
        "TechAvidus delivered a production-grade NLP pipeline in under two weeks — something our internal team estimated would take three months. The accuracy, documentation, and handover were all exceptional.",
      name: "Dr. Sarah Chen",
      role: "CTO",
      company: "HealthTech Ventures",
      initials: "SC",
      color: "#4f8ef7",
    },
    {
      quote:
        "Their AI agent development team is world-class. The multi-agent system they built processes our entire loan pipeline autonomously — reliability has been outstanding from day one.",
      name: "Mark Reynolds",
      role: "VP Engineering",
      company: "FinScale AI",
      initials: "MR",
      color: "#7c5cbf",
    },
  ],

  faqHeading: "Frequently Asked Questions",
  faqSubheading:
    "Common questions about our NLP, AI agent, and LLM engineering services.",
  faqs: [
    {
      id: "nlp-what",
      question:
        "What is natural language processing and why does my business need it?",
      answer:
        "Natural language processing (NLP) is an AI discipline that makes human language — text or speech — intelligible, searchable, and actionable for machines. Businesses need NLP to automate document processing, power intelligent chatbots, analyse customer sentiment at scale, extract structured data from unstructured sources, and build voice-enabled products.",
    },
    {
      id: "nlp-vs-chatbot",
      question:
        "How is NLP different from a standard chatbot or keyword search?",
      answer:
        "Standard chatbots use rule-based scripts; keyword search finds exact matches. NLP systems understand semantic meaning, contextual intent, entity relationships, and nuanced language patterns — enabling them to handle ambiguous queries, multi-turn conversations, and complex document analysis that simple rule-based systems fail at entirely.",
    },
    {
      id: "agents-what",
      question:
        "What exactly is an AI agent and how is it different from a chatbot?",
      answer:
        "An AI agent is an autonomous system that perceives its environment, makes decisions, executes multi-step actions, and adapts based on outcomes — without human direction at each step. A chatbot responds to individual messages; an AI agent pursues goals across multiple tools, systems, and sessions — with genuine autonomy, memory, and tool-use capability.",
    },
    {
      id: "agents-speed",
      question: "How quickly can AI agents be deployed in production?",
      answer:
        "Simple, well-scoped AI agents are typically deployed within 5–10 business days. Complex multi-agent systems with custom tool integrations, fine-tuned models, and enterprise compliance requirements generally take 3–6 weeks. Our process eliminates onboarding lag and delivers production-ready agent systems 8–12x faster than traditional in-house development.",
    },
    {
      id: "agents-security",
      question: "Are AI agents secure enough for enterprise use?",
      answer:
        "Yes — when built correctly by specialists who prioritise security from the architecture phase. Our team implements prompt injection defences, data access controls, API rate limiting, full audit logging, and compliance guardrails on every deployment. We conduct adversarial testing before launch and provide ongoing security monitoring.",
    },
    {
      id: "llm-engineering",
      question:
        "What is LLM engineering and how is it different from simply using a GPT API?",
      answer:
        "LLM engineering encompasses the full stack required to build reliable, production-grade large language model applications — including data engineering, fine-tuning, RAG pipeline architecture, prompt engineering, guardrail implementation, evaluation frameworks, MLOps, cost optimisation, and lifecycle management. Simply calling a GPT API creates a brittle prototype — LLM engineering creates sustainable, auditable systems.",
    },
    {
      id: "rag-vs-finetune",
      question: "When should I fine-tune an LLM versus using RAG?",
      answer:
        "Fine-tuning is appropriate when your use case requires domain-specific language patterns, consistent output formats, or specialised reasoning that prompt engineering alone cannot reliably produce. RAG is appropriate when you need responses grounded in specific, frequently updated proprietary knowledge. In many enterprise deployments, our team implements both.",
    },
    {
      id: "llm-compliance",
      question:
        "How do you ensure LLM outputs are compliant with GDPR, HIPAA, or SOC 2?",
      answer:
        "Compliance is architected at the system level — not applied as a post-deployment filter. Our team implements data handling controls, PHI/PII detection and redaction layers, output policy guardrails, full audit logging, access control enforcement, and data retention policies aligned with your regulatory obligations from the very first architecture design session.",
    },
    {
      id: "ownership",
      question: "Will I own the code and AI systems after the project?",
      answer:
        "Yes, unconditionally. Full code ownership is a non-negotiable part of every engagement. We deliver complete repository access, technical documentation, deployment runbooks, and zero vendor lock-in. Your application, your models, your data — always and entirely.",
    },
  ],

  ctaBannerHeading: "Ready to Hire AI Developers",
  ctaBannerAccent: "Who Deliver?",
  ctaBannerSubtext:
    "Stop waiting months for AI systems that should take days. Hire AI developers with genuine NLP, agent, and LLM engineering expertise — and launch with production-grade quality, full code ownership, and measurable business impact from day one.",
  ctaBannerPrimary: "Get a Free Consultation",
  ctaBannerSecondary: "View Our Solutions",

  // ── Premium section fields ─────────────────────────────────────────────────

  heroTrustBadges: [
    "NLP Engineering",
    "AI Agent Development",
    "LLM Engineering",
    "Generative AI",
  ],

  socialProofTagline: "Trusted by AI-first teams worldwide",
  socialProofLogos: [
    { name: "TechCorp", abbr: "TC" },
    { name: "DataSystems", abbr: "DS" },
    { name: "AIFirst", abbr: "AF" },
    { name: "CloudScale", abbr: "CS" },
    { name: "NeuralNet", abbr: "NN" },
    { name: "SmartOps", abbr: "SO" },
    { name: "DataSystems", abbr: "DS" },
    { name: "AIFirst", abbr: "AF" },
    { name: "CloudScale", abbr: "CS" },
    { name: "NeuralNet", abbr: "NN" },
    { name: "TechCorp", abbr: "TC" },
    { name: "SmartOps", abbr: "SO" },
  ],

  servicesGridHeading: "Three Specialised AI Disciplines — One Expert Team",
  servicesGridSubheading:
    "From language intelligence to autonomous agents and enterprise LLM engineering — our certified AI developers deliver production-grade solutions across the full AI stack.",
  serviceCards: [
    {
      icon: MessageSquare,
      color: "#4f8ef7",
      title: "Sentiment Analysis & Opinion Mining",
      description:
        "Real-time sentiment pipelines that analyse brand mentions, product reviews, support tickets, and social media — delivering actionable insights for marketing, product, and CX teams.",
    },
    {
      icon: FileText,
      color: "#7c5cbf",
      title: "Intelligent Document Processing",
      description:
        "NLP-driven document automation that extracts structured data from contracts, invoices, medical records, regulatory filings, and forms — at scale, with accuracy that outperforms manual review.",
    },
    {
      icon: Bot,
      color: "#06b6d4",
      title: "Conversational AI & Chatbots",
      description:
        "Domain-specific language models tailored to your vocabulary and use cases — delivering chatbots and virtual assistants that resolve queries, qualify leads, and escalate intelligently.",
    },
    {
      icon: Search,
      color: "#10b981",
      title: "Named Entity Recognition",
      description:
        "Extract precisely defined entities — names, dates, locations, product codes, financial figures, medical terms — from large-scale text corpora with high precision and recall.",
    },
    {
      icon: Cpu,
      color: "#f59e0b",
      title: "Custom AI Agent Development",
      description:
        "Bespoke autonomous agents tailored to your specific workflow requirements — from single-task specialists to complex multi-agent orchestrations handling entire business processes end-to-end.",
    },
    {
      icon: Network,
      color: "#f43f5e",
      title: "Multi-Agent System Architecture",
      description:
        "Networks of specialised agents that communicate, collaborate, and hand off tasks to each other — enabling parallel processing of complex, multi-step enterprise workflows at scale.",
    },
    {
      icon: Zap,
      color: "#4f8ef7",
      title: "AI Workflow Automation",
      description:
        "Intelligent automation pipelines connecting AI agents to your CRMs, ERPs, data warehouses, and communication platforms — running autonomously at any volume, 24/7.",
    },
    {
      icon: Eye,
      color: "#7c5cbf",
      title: "Agent Monitoring & Observability",
      description:
        "Full observability stacks — logging, tracing, alerting, and performance dashboards — so your team can monitor agent behaviour, detect anomalies, and optimise in real time.",
    },
    {
      icon: Brain,
      color: "#06b6d4",
      title: "Domain-Adaptive Pre-Training",
      description:
        "Curate and enrich your proprietary data to create fine-tuned foundation models or efficient adapter layers that speak your industry's language — boosting accuracy and consistency out of the box.",
    },
    {
      icon: Database,
      color: "#10b981",
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Fuse your internal knowledge bases with frontier LLMs to produce grounded, citation-rich responses that dramatically reduce hallucinations and build user trust at scale.",
    },
    {
      icon: Shield,
      color: "#f59e0b",
      title: "Guardrails & Regulatory Compliance",
      description:
        "Embed policy, safety, and governance filters into every prompt and response to meet HIPAA, GDPR, SOC 2, or custom enterprise compliance standards from the architecture phase.",
    },
    {
      icon: TrendingUp,
      color: "#f43f5e",
      title: "Scalable MLOps & Cost Optimisation",
      description:
        "Deploy on-prem, in VPC, or as a managed cloud service with intelligent routing, autoscaling, caching, and cost controls that keep LLM initiatives financially sustainable at any volume.",
    },
  ],

  whyChooseUsHeading: "Why Leading Businesses Choose Us",
  numberedBenefits: [
    {
      number: "01",
      title: "Unmatched Speed to Market",
      description:
        "Prototype functional AI systems in days, not quarters. Our model eliminates onboarding lag across NLP, agent, and LLM disciplines.",
    },
    {
      number: "02",
      title: "60% Lower Development Costs",
      description:
        "Specialist AI developers work with established frameworks and reusable components — dramatically cutting cost versus building from scratch.",
    },
    {
      number: "03",
      title: "Production-Ready Quality",
      description:
        "Every application is security-audited, load-tested, and reviewed for compliance before deployment. No shortcuts, regardless of timeline pressure.",
    },
    {
      number: "04",
      title: "100% Code Ownership",
      description:
        "Full repository access. Your intellectual property, your infrastructure — zero vendor lock-in, always and unconditionally.",
    },
  ],
  animatedStats: [
    { icon: CheckCircle2, value: 500, suffix: "+", label: "AI Projects" },
    { icon: Rocket, value: 8, suffix: "-12×", label: "Faster Delivery" },
    { icon: Timer, value: 3, suffix: " days", label: "MVP Turnaround" },
    { icon: Users, value: 100, suffix: "%", label: "Code Ownership" },
  ],

  engagementHeading: "Hire AI Developers — Your Way",
  engagementSubheading:
    "Three flexible engagement models designed to match your project scope, timeline, and team structure.",
  engagementModels: [
    {
      icon: Rocket,
      name: "Project-Based",
      tagline:
        "Fixed scope, milestone delivery, full code ownership on completion",
      features: [
        "Fixed scope & timeline",
        "Ideal for defined AI builds",
        "Milestone-based delivery",
        "Full code ownership on completion",
        "Best for MVPs & POCs",
      ],
      idealFor: "Teams with a well-defined AI use case to ship fast",
    },
    {
      icon: Users,
      name: "Dedicated Team",
      tagline: "Senior AI engineers dedicated exclusively to your product",
      features: [
        "Monthly engagement model",
        "Senior AI engineers, dedicated",
        "Daily standups & sprint reviews",
        "Scales up or down as needed",
        "Best for ongoing AI product development",
      ],
      idealFor: "Enterprises with ongoing AI product development",
      popular: true,
    },
    {
      icon: Layers,
      name: "Staff Augmentation",
      tagline: "Embed senior AI experts directly inside your existing team",
      features: [
        "Embed AI experts in your team",
        "Immediate access to senior talent",
        "You manage the workflow directly",
        "No long-term commitment required",
        "Best for teams needing specialist skills fast",
      ],
      idealFor: "Teams that need specialist AI skills immediately",
    },
  ],

  premiumProcessHeading: "Our AI Development Process",
  premiumProcessSubheading:
    "A streamlined, transparent workflow across five clearly defined stages.",
  premiumProcessSteps: [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Use Case Scoping",
      description:
        "Free consultation to define your AI workflow, data sources, integration requirements, success metrics, and business goals. Precise scoping prevents expensive rework.",
    },
    {
      icon: LayoutDashboard,
      number: "02",
      title: "AI Architecture Design",
      description:
        "Our senior AI architects design the agent topology, model stack, RAG pipeline, and orchestration schema. Every decision is documented and justified before any code is written.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Development, Integration & Testing",
      description:
        "Senior AI developers build, integrate, and test the system using production-grade standards. Components are code-reviewed for correctness, security, and performance.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Security, Compliance & QA",
      description:
        "Full security audits, prompt injection testing, data access control reviews, GDPR/SOC 2 compliance checks, and load testing before any production deployment.",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment & Ongoing Support",
      description:
        "Complete production deployment, full technical documentation, and 100% code ownership transfer. Flexible post-launch support covers performance optimisation and model upgrades.",
    },
  ],
  premiumProcessCTA: "Ready to hire AI developers? Let's talk →",

  techStackHeading: "Our AI Technology Stack",
  techStackSubheading:
    "Covering NLP, agentic AI, LLM engineering, and production MLOps across every major cloud and framework.",
  techTabs: [
    {
      id: "nlp-models",
      label: "NLP & Models",
      items: [
        { name: "BERT", abbr: "BR", color: "#ffcc00" },
        { name: "RoBERTa", abbr: "RB", color: "#f97316" },
        { name: "GPT-4o", abbr: "GP", color: "#10a37f" },
        { name: "LLaMA 3", abbr: "LL", color: "#7c5cbf" },
        { name: "Mistral", abbr: "MS", color: "#4f8ef7" },
        { name: "Falcon", abbr: "FC", color: "#06b6d4" },
        { name: "Hugging Face", abbr: "HF", color: "#ff9d00" },
        { name: "spaCy", abbr: "SP", color: "#09a3d5" },
        { name: "NLTK", abbr: "NK", color: "#3cab68" },
        { name: "PyTorch", abbr: "PT", color: "#ee4c2c" },
        { name: "TensorFlow", abbr: "TF", color: "#ff6f00" },
        { name: "LangChain", abbr: "LC", color: "#2d9e60" },
      ],
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      items: [
        { name: "LangGraph", abbr: "LG", color: "#2d9e60" },
        { name: "AutoGen", abbr: "AG", color: "#4f8ef7" },
        { name: "CrewAI", abbr: "CA", color: "#f43f5e" },
        { name: "Semantic Kernel", abbr: "SK", color: "#0078d4" },
        { name: "OpenAI Assistants", abbr: "OA", color: "#10a37f" },
        { name: "Pinecone", abbr: "PC", color: "#6366f1" },
        { name: "Weaviate", abbr: "WV", color: "#7c5cbf" },
        { name: "Qdrant", abbr: "QD", color: "#f97316" },
        { name: "Redis", abbr: "RD", color: "#dc382d" },
        { name: "pgvector", abbr: "PG", color: "#336791" },
        { name: "ChromaDB", abbr: "CH", color: "#f59e0b" },
        { name: "LangSmith", abbr: "LS", color: "#2d9e60" },
      ],
    },
    {
      id: "llm-engineering",
      label: "LLM Engineering",
      items: [
        { name: "LoRA/QLoRA", abbr: "LR", color: "#7c5cbf" },
        { name: "PEFT", abbr: "PF", color: "#4f8ef7" },
        { name: "DPO", abbr: "DP", color: "#f43f5e" },
        { name: "RLHF", abbr: "RL", color: "#10b981" },
        { name: "Axolotl", abbr: "AX", color: "#f97316" },
        { name: "LlamaIndex", abbr: "LI", color: "#7c5cbf" },
        { name: "RAGAS", abbr: "RG", color: "#06b6d4" },
        { name: "DeepEval", abbr: "DE", color: "#4f8ef7" },
        { name: "Promptfoo", abbr: "PF", color: "#f59e0b" },
        { name: "MLflow", abbr: "ML", color: "#0194e2" },
        { name: "Arize", abbr: "AR", color: "#f43f5e" },
        { name: "vLLM", abbr: "VL", color: "#10b981" },
      ],
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      items: [
        { name: "AWS SageMaker", abbr: "SM", color: "#ff9900" },
        { name: "Azure ML", abbr: "AZ", color: "#0089d6" },
        { name: "GCP Vertex AI", abbr: "VA", color: "#4285f4" },
        { name: "Kubeflow", abbr: "KF", color: "#326ce5" },
        { name: "MLflow", abbr: "ML", color: "#0194e2" },
        { name: "Docker", abbr: "DK", color: "#2496ed" },
        { name: "Kubernetes", abbr: "K8", color: "#326ce5" },
        { name: "FastAPI", abbr: "FA", color: "#009688" },
        { name: "Triton Inference", abbr: "TI", color: "#76b900" },
        { name: "AWS Bedrock", abbr: "AB", color: "#ff9900" },
        { name: "Azure OpenAI", abbr: "AO", color: "#0089d6" },
        { name: "ONNX Runtime", abbr: "ON", color: "#7c5cbf" },
      ],
    },
  ],

  caseStudiesHeading: "AI Solutions We've Delivered",
  caseStudiesSubheading:
    "Production-grade NLP, agent, and LLM systems deployed across healthcare, finance, retail, and enterprise.",
  caseStudies: [
    {
      accentColor: "#4f8ef7",
      projectName: "Healthcare NLP Pipeline",
      industry: "Healthcare",
      description:
        "Built a clinical documentation NLP system that extracts structured data from physician notes — reducing documentation time by 65% and improving EHR accuracy across 3 hospital networks.",
      metrics: ["65% time saved", "99.1% accuracy", "3 hospitals deployed"],
    },
    {
      accentColor: "#7c5cbf",
      projectName: "Enterprise AI Agent Platform",
      industry: "Financial Services",
      description:
        "Designed a multi-agent workflow automation platform that handles loan pre-qualification, document extraction, and compliance checks — processing 10,000+ applications monthly without human intervention.",
      metrics: ["10K+ monthly apps", "80% cost reduction", "Zero downtime SLA"],
    },
    {
      accentColor: "#10b981",
      projectName: "LLM-Powered Customer Service",
      industry: "E-Commerce",
      description:
        "Deployed a RAG-powered conversational AI system grounded in product catalogue and policy knowledge — achieving 87% first-contact resolution and reducing support tickets by 40%.",
      metrics: ["87% FCR rate", "40% ticket reduction", "24/7 availability"],
    },
  ],

  testimonialsV2Heading: "What Our Clients Say",
  featuredTestimonial: {
    quote:
      "TechAvidus delivered a production-grade NLP pipeline in under two weeks — something our internal team estimated would take three months. The accuracy, documentation, and handover were all exceptional.",
    name: "Dr. Sarah Chen",
    role: "CTO",
    company: "HealthTech Ventures",
    initials: "SC",
    color: "#4f8ef7",
    rating: 5,
  },
  stackedTestimonials: [
    {
      name: "Mark Reynolds",
      company: "FinScale AI",
      quote:
        "Their AI agent development team is world-class. The multi-agent system they built processes our entire loan pipeline autonomously — reliability has been outstanding from day one.",
      initials: "MR",
      color: "#7c5cbf",
      rating: 5,
    },
    {
      name: "Priya Kapoor",
      company: "RetailCore",
      quote:
        "The LLM-powered search and recommendation system they delivered increased our conversion rate by 23%. The RAG pipeline is accurate, fast, and scales effortlessly.",
      initials: "PK",
      color: "#10b981",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      company: "LegalAI GmbH",
      quote:
        "We hired their NLP team to build a contract analysis pipeline — it now reviews 500 contracts per hour with 97% accuracy. ROI in the first month alone was extraordinary.",
      initials: "TW",
      color: "#f59e0b",
      rating: 5,
    },
  ],

  industriesHexHeading: "Industries We Serve",
  industriesHexSubheading:
    "Production AI systems across every major sector — from regulated healthcare and finance to fast-moving retail and tech.",
  industryTiles: [
    {
      icon: HeartPulse,
      color: "#f43f5e",
      label: "Healthcare & Life Sciences",
      tooltip:
        "Clinical NLP, medical AI agents, and HIPAA-compliant LLM systems",
    },
    {
      icon: Landmark,
      color: "#4f8ef7",
      label: "Financial Services & FinTech",
      tooltip:
        "Loan underwriting agents, contract analysis NLP, and compliance LLMs",
    },
    {
      icon: ShoppingCart,
      color: "#f59e0b",
      label: "E-Commerce & Retail",
      tooltip:
        "Semantic search, customer service AI agents, and personalisation LLMs",
    },
    {
      icon: Scale,
      color: "#7c5cbf",
      label: "Legal & Compliance",
      tooltip:
        "Contract review NLP, regulatory monitoring agents, and due diligence AI",
    },
    {
      icon: Users,
      color: "#06b6d4",
      label: "HR & Talent Operations",
      tooltip:
        "CV screening agents, onboarding automation, and HR knowledge assistants",
    },
    {
      icon: TrendingUp,
      color: "#10b981",
      label: "Sales & Marketing",
      tooltip:
        "Lead qualification agents, personalised outreach, and sentiment analytics",
    },
    {
      icon: Cpu,
      color: "#6366f1",
      label: "Software & IT Operations",
      tooltip:
        "LLM code assistants, incident response agents, and knowledge base AI",
    },
    {
      icon: Factory,
      color: "#f97316",
      label: "Manufacturing & Logistics",
      tooltip:
        "Freight document intelligence, supply chain agents, and quality NLP",
    },
  ],

  faqSplitHeading: "Frequently Asked Questions",
  faqSplitSubheading:
    "Common questions about our NLP, AI agent, and LLM engineering services.",
  faqItems: [
    {
      id: "nlp-what",
      question:
        "What is natural language processing and why does my business need it?",
      answer:
        "Natural language processing (NLP) is an AI discipline that makes human language — text or speech — intelligible, searchable, and actionable for machines. Businesses need NLP to automate document processing, power intelligent chatbots, analyse customer sentiment at scale, extract structured data from unstructured sources, and build voice-enabled products. When you hire AI developers specialising in NLP, you unlock the ability to process language-based information at a scale and speed that manual methods cannot approach.",
    },
    {
      id: "nlp-vs-chatbot",
      question:
        "How is NLP different from a standard chatbot or keyword search?",
      answer:
        "Standard chatbots use rule-based scripts; keyword search finds exact matches. NLP systems understand semantic meaning, contextual intent, entity relationships, and nuanced language patterns — enabling them to handle ambiguous queries, multi-turn conversations, and complex document analysis that simple rule-based systems fail at entirely.",
    },
    {
      id: "nlp-industries",
      question: "What industries benefit most from NLP services?",
      answer:
        "Healthcare, financial services, legal, retail, and media all benefit enormously from NLP. Our team has delivered production NLP systems across clinical documentation, contract analysis, product search, review analysis, regulatory compliance, and automated content categorisation.",
    },
    {
      id: "agent-vs-chatbot",
      question:
        "What exactly is an AI agent and how is it different from a chatbot?",
      answer:
        "An AI agent is an autonomous system that perceives its environment, makes decisions, executes multi-step actions, and adapts based on outcomes — without human direction at each step. A chatbot responds to individual messages; an AI agent pursues goals across multiple tools, systems, and sessions — with genuine autonomy, memory, and tool-use capability.",
    },
    {
      id: "agent-speed",
      question: "How quickly can AI agents be deployed in production?",
      answer:
        "Simple, well-scoped AI agents are typically deployed within 5–10 business days. Complex multi-agent systems with custom tool integrations, fine-tuned models, and enterprise compliance requirements generally take 3–6 weeks. Our process eliminates onboarding lag and delivers production-ready agent systems 8–12x faster than traditional in-house development.",
    },
    {
      id: "agent-security",
      question: "Are AI agents secure enough for enterprise use?",
      answer:
        "Yes — when built correctly by specialists who prioritise security from the architecture phase. Our team implements prompt injection defences, data access controls, API rate limiting, full audit logging, and compliance guardrails on every deployment. We conduct adversarial testing before launch and provide ongoing security monitoring as part of post-launch support packages.",
    },
    {
      id: "llm-engineering",
      question:
        "What is LLM engineering and how is it different from simply using a GPT API?",
      answer:
        "LLM engineering encompasses the full stack required to build reliable, production-grade large language model applications — including data engineering, fine-tuning, RAG pipeline architecture, prompt engineering, guardrail implementation, evaluation frameworks, MLOps, cost optimisation, and lifecycle management. Simply calling a GPT API creates a brittle prototype — LLM engineering creates sustainable, auditable systems.",
    },
    {
      id: "rag-vs-finetune",
      question: "When should I fine-tune an LLM versus using RAG?",
      answer:
        "Fine-tuning is appropriate when your use case requires domain-specific language patterns, consistent output formats, or specialised reasoning that prompt engineering alone cannot reliably produce. RAG is appropriate when you need responses grounded in specific, frequently updated proprietary knowledge. In many enterprise deployments, our team implements both.",
    },
    {
      id: "llm-compliance",
      question:
        "How do you ensure LLM outputs are compliant with GDPR, HIPAA, or SOC 2?",
      answer:
        "Compliance is architected at the system level — not applied as a post-deployment filter. Our team implements data handling controls, PHI/PII detection and redaction layers, output policy guardrails, full audit logging, access control enforcement, and data retention policies aligned with your regulatory obligations from the very first architecture design session.",
    },
  ],

  finalCTA: {
    heading: "Ready to Hire AI Developers Who Deliver?",
    subtext:
      "Stop waiting months for AI systems that should take days. Hire AI developers with genuine NLP, agent, and LLM engineering expertise — and launch with production-grade quality, full code ownership, and measurable business impact from day one.",
    primaryLabel: "Get a Free Consultation",
    secondaryLabel: "View Our Solutions",
    trustItems: [
      "NLP Engineering",
      "AI Agent Development",
      "LLM Engineering",
      "100% Code Ownership",
    ],
  },
};

// ─── Registry ──────────────────────────────────────────────────────────────────

const registry: Record<string, SolutionData> = {
  "ai-powered-data-analytics": aiPoweredDataAnalytics,
  "ai-automation": aiAutomation,
  "cloud-migration": cloudMigration,
  "custom-ai-development": customAIDevelopment,
  "predictive-ai-analytics": predictiveAIAnalytics,
  "hire-lovable-ai-developer": hireLovableAIDeveloper,
  "hire-openai-developer": hireOpenAIDeveloper,
  "hire-emergent-ai-developer": hireEmergentAIDeveloper,
  "hire-caffeine-ai-developer": hireCaffeineAIDeveloper,
  "hire-ai-developers": hireAIDevelopers,
};

export function getSolutionData(slug: string): SolutionData | null {
  return registry[slug] ?? null;
}

export function getPremiumSolutionData(
  slug: string,
): PremiumSolutionData | null {
  const data = registry[slug];
  if (!data) return null;
  // Type-guard: PremiumSolutionData has finalCTA as a discriminating field
  if ("finalCTA" in data) return data as PremiumSolutionData;
  return null;
}

export function getAllSlugs(): string[] {
  return Object.keys(registry);
}
