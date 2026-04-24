import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type Category =
  | "All Posts"
  | "AI Trends"
  | "Hiring Tips"
  | "Developer Guides"
  | "Case Studies";

interface Post {
  id: number;
  title: string;
  category: Exclude<Category, "All Posts">;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED_POSTS: Post[] = [
  {
    id: 0,
    title:
      "The Rise of Agentic AI: How Multi-Agent Systems Are Reshaping Software Development",
    category: "AI Trends",
    author: "Harpreet Singh Sethi",
    date: "Jan 15 2026",
    readTime: "8 min",
    excerpt:
      "From LangGraph to CrewAI, autonomous agent frameworks are changing how teams build software. We explore what agentic architecture means for your product team.",
    featured: true,
  },
  {
    id: 1,
    title:
      "LLM Engineers vs Traditional Software Developers: What Your Startup Actually Needs in 2026",
    category: "Hiring Tips",
    author: "Sahil Verma",
    date: "Feb 3 2026",
    readTime: "6 min",
    excerpt:
      "Hiring the wrong engineer type is the fastest way to derail your AI product launch. Here is how to tell the difference and hire with precision.",
    featured: true,
  },
];

const BLOG_POSTS: Post[] = [
  {
    id: 2,
    title: "Building Your First AI Agent with LangGraph: A Complete 2026 Guide",
    category: "Developer Guides",
    author: "Shivendra Tiwari",
    date: "Mar 10 2026",
    readTime: "12 min",
    excerpt:
      "Step-by-step walkthrough for building a production-grade agentic AI system using LangGraph, from environment setup to deployment.",
  },
  {
    id: 3,
    title: "Why Prompt Engineering Is the Most Underrated AI Skill of 2026",
    category: "AI Trends",
    author: "Prateek Sharma",
    date: "Feb 28 2026",
    readTime: "7 min",
    excerpt:
      "While everyone races to hire ML researchers, the engineers who master prompt design are quietly shipping better AI products faster.",
  },
  {
    id: 4,
    title:
      "How We Helped a FinTech Startup Cut Customer Support Costs by 60% with an AI Agent",
    category: "Case Studies",
    author: "Sahil Verma",
    date: "Feb 20 2026",
    readTime: "5 min",
    excerpt:
      "We built a multi-step AI agent that handled tier-1 support tickets autonomously — here is the full breakdown of the stack, timeline, and results.",
  },
  {
    id: 5,
    title: "NLP in Production: Lessons Learned from 50+ Real-World Deployments",
    category: "Developer Guides",
    author: "Megha Anand",
    date: "Feb 14 2026",
    readTime: "10 min",
    excerpt:
      "Deploying NLP models in production is fundamentally different from demos. We share the hard-won lessons from shipping NLP pipelines across 50+ enterprise projects.",
  },
  {
    id: 6,
    title:
      "AI Staff Augmentation vs Full-Time AI Hire: What Makes Sense for Your Stage",
    category: "Hiring Tips",
    author: "Harpreet Singh Sethi",
    date: "Jan 30 2026",
    readTime: "6 min",
    excerpt:
      "Choosing the wrong hiring model wastes 3-6 months. We break down when to augment, when to hire full-time, and how to transition between the two.",
  },
  {
    id: 7,
    title:
      "Lovable.dev Deep Dive: Building Production Apps Without Writing Backend Code",
    category: "Developer Guides",
    author: "Gaurav Kumar Tyagi",
    date: "Jan 25 2026",
    readTime: "9 min",
    excerpt:
      "Lovable is not just a prototyping tool — when used by engineers who understand its limits, it ships real products fast. Here is how we approach it.",
  },
  {
    id: 8,
    title:
      "The 2026 AI Developer Hiring Market: Salaries, Demand, and What Companies Are Getting Wrong",
    category: "Hiring Tips",
    author: "Manoj Kumar Sharma",
    date: "Jan 22 2026",
    readTime: "7 min",
    excerpt:
      "AI developer salaries have jumped 40% in 18 months. We analyze the market data and share what it means for companies trying to compete for top talent.",
  },
  {
    id: 9,
    title:
      "Emergent AI Platform Review: When Should You Choose It Over Custom LLM Pipelines?",
    category: "AI Trends",
    author: "Prateek Sharma",
    date: "Jan 18 2026",
    readTime: "8 min",
    excerpt:
      "Emergent is powerful for autonomous problem-solving, but it is not the right fit for every project. We explore the use cases where it genuinely excels.",
  },
  {
    id: 10,
    title:
      "Real Estate AI in Action: How SpaceList Used RAG to Surface Better Listings",
    category: "Case Studies",
    author: "Megha Anand",
    date: "Jan 12 2026",
    readTime: "6 min",
    excerpt:
      "SpaceList needed a way to surface hyper-relevant listings from a 2M property database. We built a RAG-powered search experience that changed how users discover homes.",
  },
  {
    id: 11,
    title:
      "Vector Databases Explained: Pinecone vs Weaviate vs Qdrant for Production AI Apps",
    category: "Developer Guides",
    author: "Gaurav Kumar Tyagi",
    date: "Dec 30 2025",
    readTime: "11 min",
    excerpt:
      "Every AI app needs a vector database — but they are not interchangeable. We compare the three leading options on cost, latency, and developer experience.",
  },
  {
    id: 12,
    title:
      "From Idea to MVP in 72 Hours: Our Caffeine AI Development Sprint Framework",
    category: "Case Studies",
    author: "Paritosh Singh",
    date: "Dec 22 2025",
    readTime: "5 min",
    excerpt:
      "We have run 30+ Caffeine AI development sprints. Here is the exact framework — standups, tools, decision gates, and the mistakes we stopped making after sprint 12.",
  },
  {
    id: 13,
    title:
      "How to Interview an AI Engineer: Questions That Actually Reveal Capability",
    category: "Hiring Tips",
    author: "Harpreet Singh Sethi",
    date: "Dec 15 2025",
    readTime: "8 min",
    excerpt:
      "Standard technical interviews do not work for AI engineers. We share the prompts, system design challenges, and live build tests that reveal real capability.",
  },
];

const CATEGORIES: Category[] = [
  "All Posts",
  "AI Trends",
  "Hiring Tips",
  "Developer Guides",
  "Case Studies",
];

// ── Category colour map (light theme) ────────────────────────────────────────

const CATEGORY_COLORS: Record<
  Exclude<Category, "All Posts">,
  { pill: string; accent: string }
> = {
  "AI Trends": {
    pill: "bg-blue-100 text-blue-700 border border-blue-200",
    accent: "group-hover:border-blue-200 group-hover:shadow-blue-100/60",
  },
  "Hiring Tips": {
    pill: "bg-violet-100 text-violet-700 border border-violet-200",
    accent: "group-hover:border-violet-200 group-hover:shadow-violet-100/60",
  },
  "Developer Guides": {
    pill: "bg-indigo-100 text-indigo-700 border border-indigo-200",
    accent: "group-hover:border-indigo-200 group-hover:shadow-indigo-100/60",
  },
  "Case Studies": {
    pill: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    accent: "group-hover:border-emerald-200 group-hover:shadow-emerald-100/60",
  },
};

// ── Sub-components ────────────────────────────────────────────────────────────

/** Subtle light dot-grid background for hero */
function LightGridBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="lightgrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="oklch(0.82 0.05 264)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lightgrid)" />
      </svg>
      {/* Soft decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl bg-indigo-100" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl bg-blue-100" />
    </div>
  );
}

function CategoryPill({
  category,
}: { category: Exclude<Category, "All Posts"> }) {
  const { pill } = CATEGORY_COLORS[category];
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${pill}`}
    >
      {category}
    </span>
  );
}

function FeaturedCard({ post, index }: { post: Post; index: number }) {
  const { accent } = CATEGORY_COLORS[post.category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group relative bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${accent} cursor-pointer flex flex-col gap-4`}
      data-ocid={`blog.featured_card.item.${index + 1}`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      <div className="flex items-center gap-3">
        <CategoryPill category={post.category} />
        <span className="text-xs text-gray-400 font-mono">
          {post.readTime} read
        </span>
      </div>

      <h3 className="text-lg font-display font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors duration-300 line-clamp-3">
        {post.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white bg-indigo-600">
            {post.author.charAt(0)}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {post.author}
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">{post.date}</span>
      </div>
    </motion.article>
  );
}

function BlogCard({ post, index }: { post: Post; index: number }) {
  const { accent } = CATEGORY_COLORS[post.category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
      className={`group relative bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${accent} cursor-pointer flex flex-col gap-3`}
      data-ocid={`blog.card.item.${index + 1}`}
    >
      <div className="flex items-center gap-2.5 flex-wrap">
        <CategoryPill category={post.category} />
        <span className="text-xs text-gray-400 font-mono">
          {post.readTime} read
        </span>
      </div>

      <h3 className="text-sm font-display font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors duration-300 line-clamp-3 flex-1">
        {post.title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-indigo-500 shrink-0">
            {post.author.charAt(0)}
          </div>
          <span className="text-xs text-gray-500 font-medium truncate">
            {post.author}
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono shrink-0 ml-2">
          {post.date}
        </span>
      </div>
    </motion.article>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Posts");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All Posts"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="min-h-screen bg-white" data-ocid="blog.page">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-12 pb-10 bg-gray-50"
          style={{ minHeight: "52vh" }}
          data-ocid="blog.hero.section"
        >
          <LightGridBg />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
              <span className="text-gradient">Insights</span>
              <span className="text-gray-900"> &amp; Innovation</span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore the latest in AI development, engineering trends, and tech
              hiring insights
            </p>
          </motion.div>

          {/* Bottom fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-transparent to-white" />
        </section>

        {/* ── Featured Posts ─────────────────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 py-8"
          data-ocid="blog.featured.section"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-indigo-600" />
            <span className="text-sm font-mono font-semibold text-indigo-600 tracking-widest uppercase">
              Featured
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_POSTS.map((post, i) => (
              <FeaturedCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </section>

        {/* ── Category Filters ───────────────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 pb-4"
          data-ocid="blog.filters.section"
        >
          <div
            className="flex items-center gap-2.5 flex-wrap"
            data-ocid="blog.category.filter"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  data-ocid={`blog.filter.${cat.toLowerCase().replace(/\s+/g, "_")}.tab`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Blog Grid ─────────────────────────────────────────────────────── */}
        <section
          className="max-w-7xl mx-auto px-4 sm:px-6 pb-10"
          data-ocid="blog.grid.section"
        >
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div
              className="bg-gray-50 border border-gray-200 rounded-2xl p-16 text-center"
              data-ocid="blog.grid.empty_state"
            >
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-400 text-sm">
                No posts in this category yet.
              </p>
            </div>
          )}
        </section>

        {/* ── Newsletter CTA ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden px-4 py-12 bg-gradient-to-br from-indigo-50 to-blue-50"
          data-ocid="blog.newsletter.section"
        >
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-indigo-900">
                Stay Ahead of AI
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Get the latest AI development insights, hiring guides, and case
                studies delivered to your inbox — curated by our engineering
                team.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-6 border border-indigo-100 shadow-sm"
                  data-ocid="blog.newsletter.success_state"
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-indigo-900 font-semibold">You're in!</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Expect your first digest soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  data-ocid="blog.newsletter.form"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none border border-indigo-200 focus:border-indigo-500 transition-colors shadow-sm"
                    data-ocid="blog.newsletter.email.input"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg font-semibold text-sm shrink-0 whitespace-nowrap bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
                    data-ocid="blog.newsletter.submit_button"
                  >
                    Subscribe →
                  </button>
                </form>
              )}

              <p className="text-gray-400 text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
