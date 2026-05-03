export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  isPillar?: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

export const posts: Post[] = [
  {
    slug: "what-is-ai-virtual-assistant",
    title: "What is an AI Assistant? Complete Guide 2026",
    excerpt: "The complete guide to understanding AI assistants — how they work, what they automate, and why businesses are choosing them over traditional VAs. Start here.",
    category: "Pillar Guide",
    date: "2026-03-17",
    readTime: "8 min read",
    isPillar: true,
    seoTitle: "What is an AI Assistant? Complete Guide 2026 | Hirelessly",
    seoDescription: "Learn what an AI assistant is, how it works, and why businesses replace Filipino VAs with AI assistant services. Full guide with FAQs.",
  },
  {
    slug: "ai-virtual-assistant-vs-human",
    title: "AI Assistant vs Human VA",
    excerpt: "An honest comparison of AI and human virtual assistants across cost, availability, accuracy, and scalability.",
    category: "Comparison",
    date: "2026-03-15",
    readTime: "6 min read",
    seoTitle: "AI vs Human Operations: What's Right for Your Business?",
    seoDescription: "Comparing AI-managed operations to traditional hires. Costs, availability, consistency — what actually matters for small business owners.",
  },
  {
    slug: "virtual-assistant-salary-philippines",
    title: "Virtual Assistant Salary Philippines 2026",
    excerpt: "Complete breakdown of Filipino VA salaries by role and experience — and how AI compares on total cost.",
    category: "Salary Guide",
    date: "2026-03-14",
    readTime: "5 min read",
    seoTitle: "The True Cost of Manual Business Operations in 2026",
    seoDescription: "Salaries are just the start. Learn the real cost of running operations manually — and what businesses are doing instead.",
  },
  {
    slug: "ai-replacing-virtual-assistants",
    title: "Will AI Replace Virtual Assistants?",
    excerpt: "Why businesses are replacing traditional VA operations with AI automation — and what the hybrid future looks like.",
    category: "Industry Trends",
    date: "2026-03-13",
    readTime: "6 min read",
    seoTitle: "Why Manual Operations Don't Scale — And What Founders Do Instead",
    seoDescription: "Manual, people-dependent processes hit a ceiling. Here's what's replacing them and why AI-first operations are becoming the new standard for lean teams.",
  },
  {
    slug: "best-ai-virtual-assistant-tools",
    title: "Best AI Assistant Tools 2026",
    excerpt: "The top AI assistant tools for business — compared by category, use case, and who they're best for.",
    category: "Tools",
    date: "2026-03-12",
    readTime: "7 min read",
    seoTitle: "Best AI Assistant Tools 2026 | Hirelessly",
    seoDescription: "The top AI assistant tools for business in 2026 — compared by category, use case, pricing, and ideal user.",
  },
  {
    slug: "ai-automation-admin-tasks",
    title: "How AI Automates Admin Tasks",
    excerpt: "Email, scheduling, data entry, reporting — how an AI automation assistant eliminates your most time-consuming admin work.",
    category: "Automation",
    date: "2026-03-11",
    readTime: "5 min read",
    seoTitle: "How AI Automates Admin Tasks | Hirelessly",
    seoDescription: "Email, scheduling, data entry, and reporting — how AI automation assistants eliminate repetitive admin work from your business.",
  },
  {
    slug: "ai-assistant-small-business",
    title: "AI Assistant for Small Business",
    excerpt: "How small businesses and startups use AI assistants to run lean operations and compete at scale.",
    category: "Small Business",
    date: "2026-03-10",
    readTime: "5 min read",
    seoTitle: "AI Assistant for Small Business 2026 | Hirelessly",
    seoDescription: "How small businesses and startups use AI assistants to automate operations, reduce costs, and scale without hiring.",
  },
  {
    slug: "hire-ai-virtual-assistant",
    title: "How to Hire an AI Assistant",
    excerpt: "A step-by-step guide to deploying an AI assistant — what to look for and how to get started.",
    category: "Getting Started",
    date: "2026-03-09",
    readTime: "6 min read",
    seoTitle: "How to Hire an AI Assistant | Hirelessly",
    seoDescription: "Step-by-step guide to hiring or deploying an AI assistant for your business — what to look for, costs, and setup process.",
  },
  {
    slug: "virtual-assistant-philippines-vs-ai",
    title: "Virtual Assistant Philippines vs AI",
    excerpt: "Filipino VAs vs AI automation — an honest head-to-head for businesses deciding between the two.",
    category: "Comparison",
    date: "2026-03-08",
    readTime: "6 min read",
    seoTitle: "Manual Ops vs AI Ops: What Changes When You Automate",
    seoDescription: "A direct comparison of running operations manually vs deploying AI. Costs, hours, consistency, and what founders say after switching.",
  },
  {
    slug: "ai-customer-support-assistant",
    title: "AI Assistant for Customer Support",
    excerpt: "How AI support assistants resolve 40–60% of tickets automatically and cut support costs significantly.",
    category: "Customer Support",
    date: "2026-03-07",
    readTime: "5 min read",
    seoTitle: "AI Assistant for Customer Support | Hirelessly",
    seoDescription: "How AI customer support assistants automatically resolve 40–60% of support tickets and reduce support costs for businesses.",
  },
  {
    slug: "ai-assistant-capabilities-for-business",
    title: "What Can an AI Assistant Actually Do for Your Business?",
    excerpt: "From email management to document filing to internal coordination — a grounded breakdown of exactly what an AI assistant handles, how it works, and what it still can't replace.",
    category: "Capabilities",
    date: "2026-04-09",
    readTime: "9 min read",
    seoTitle: "What Can an AI Assistant Actually Do for Your Business? | Hirelessly",
    seoDescription: "A practical breakdown of AI assistant capabilities — administration, sales, support, and operations. Real examples, honest limitations, and how to get started.",
  },
  {
    slug: "ai-lead-generation-assistant",
    title: "AI Assistant for Lead Generation",
    excerpt: "How AI lead assistants respond instantly, qualify prospects, and book calls — automatically.",
    category: "Sales",
    date: "2026-03-06",
    readTime: "5 min read",
    seoTitle: "AI Assistant for Lead Generation | Hirelessly",
    seoDescription: "How AI lead generation assistants respond instantly, qualify prospects, and book sales calls automatically — 24/7.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
