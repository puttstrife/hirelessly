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
    title: "What is an AI Virtual Assistant? Complete Guide 2026",
    excerpt: "The complete guide to understanding AI virtual assistants — how they work, what they automate, and why businesses are choosing them over traditional VAs. Start here.",
    category: "Pillar Guide",
    date: "2026-03-17",
    readTime: "8 min read",
    isPillar: true,
    seoTitle: "What is an AI Virtual Assistant? Complete Guide 2026 | Hirelessly",
    seoDescription: "Learn what an AI virtual assistant is, how it works, and why businesses replace Filipino VAs with AI assistant services. Full guide with FAQs.",
  },
  {
    slug: "ai-virtual-assistant-vs-human",
    title: "AI Virtual Assistant vs Human VA",
    excerpt: "An honest comparison of AI and human virtual assistants across cost, availability, accuracy, and scalability.",
    category: "Comparison",
    date: "2026-03-15",
    readTime: "6 min read",
    seoTitle: "AI Virtual Assistant vs Human VA — Full Comparison 2026 | Hirelessly",
    seoDescription: "AI virtual assistant vs Filipino human VA — cost, availability, accuracy, and scalability compared side by side.",
  },
  {
    slug: "virtual-assistant-salary-philippines",
    title: "Virtual Assistant Salary Philippines 2026",
    excerpt: "Complete breakdown of Filipino VA salaries by role and experience — and how AI compares on total cost.",
    category: "Salary Guide",
    date: "2026-03-14",
    readTime: "5 min read",
    seoTitle: "Virtual Assistant Salary Philippines 2026 | Hirelessly",
    seoDescription: "Full breakdown of Filipino virtual assistant salaries by role, experience, and niche — plus how AI assistant costs compare.",
  },
  {
    slug: "ai-replacing-virtual-assistants",
    title: "Will AI Replace Virtual Assistants?",
    excerpt: "Why businesses are replacing traditional VA operations with AI automation — and what the hybrid future looks like.",
    category: "Industry Trends",
    date: "2026-03-13",
    readTime: "6 min read",
    seoTitle: "Will AI Replace Virtual Assistants? | Hirelessly",
    seoDescription: "The honest answer to whether AI will replace Filipino virtual assistants — and what the hybrid future of VA work looks like.",
  },
  {
    slug: "best-ai-virtual-assistant-tools",
    title: "Best AI Virtual Assistant Tools 2026",
    excerpt: "The top AI virtual assistant tools for business — compared by category, use case, and who they're best for.",
    category: "Tools",
    date: "2026-03-12",
    readTime: "7 min read",
    seoTitle: "Best AI Virtual Assistant Tools 2026 | Hirelessly",
    seoDescription: "The top AI virtual assistant tools for business in 2026 — compared by category, use case, pricing, and ideal user.",
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
    title: "How to Hire an AI Virtual Assistant",
    excerpt: "A step-by-step guide to deploying an AI virtual assistant — what to look for and how to get started.",
    category: "Getting Started",
    date: "2026-03-09",
    readTime: "6 min read",
    seoTitle: "How to Hire an AI Virtual Assistant | Hirelessly",
    seoDescription: "Step-by-step guide to hiring or deploying an AI virtual assistant for your business — what to look for, costs, and setup process.",
  },
  {
    slug: "virtual-assistant-philippines-vs-ai",
    title: "Virtual Assistant Philippines vs AI",
    excerpt: "Filipino VAs vs AI automation — an honest head-to-head for businesses deciding between the two.",
    category: "Comparison",
    date: "2026-03-08",
    readTime: "6 min read",
    seoTitle: "Virtual Assistant Philippines vs AI — Full Comparison | Hirelessly",
    seoDescription: "Filipino virtual assistant vs AI automation — cost, speed, reliability, and scalability compared for businesses in 2026.",
  },
  {
    slug: "ai-customer-support-assistant",
    title: "AI Virtual Assistant for Customer Support",
    excerpt: "How AI support assistants resolve 40–60% of tickets automatically and cut support costs significantly.",
    category: "Customer Support",
    date: "2026-03-07",
    readTime: "5 min read",
    seoTitle: "AI Virtual Assistant for Customer Support | Hirelessly",
    seoDescription: "How AI customer support assistants automatically resolve 40–60% of support tickets and reduce support costs for businesses.",
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
