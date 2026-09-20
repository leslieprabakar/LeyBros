export type ProjectCategory = "build" | "create";
export type BuildType = "website" | "webapp" | "seo";
export type CreateType = "image" | "enhancement" | "product" | "architecture" | "cinematic" | "advertising" | "video" | "3d";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  sub: BuildType | CreateType;
  excerpt: string;
  cover: string; // placeholder / real path
  tags: string[];
  status: "published" | "placeholder";
  href?: string;
  meta: {
    objective?: string;
    role?: string;
    approach?: string;
    technology?: string[];
    features?: string[];
    seo?: string[];
    result?: string;
    liveUrl?: string;
    duration?: string;
    aspect?: string;
    workflow?: string;
  };
};

export const projects: Project[] = [
  // BUILD — placeholders
  {
    slug: "ecommerce-herby-inspired",
    title: "E-Commerce Build — Herby-inspired Standard",
    category: "build",
    sub: "website",
    excerpt: "Reference-standard e-commerce: mega nav, filters, Razorpay, Supabase. Full spec preserved for client reuse.",
    cover: "/portfolio/placeholders/build-1.jpg",
    tags: ["Next.js", "Supabase", "Razorpay", "SEO"],
    status: "placeholder",
    meta: {
      objective: "Replicate & improve herby.in with scalable stack",
      role: "Full-stack + SEO",
      approach: "Node/Next + Supabase, component architecture",
      technology: ["Next.js", "Tailwind", "Supabase", "Razorpay"],
      features: ["Mega nav", "Multi-filter", "Cart drawer", "Reviews"],
      seo: ["Schema.org Product", "Sitemap", "OG", "Core Web Vitals"],
      result: "Awaiting live deployment — spec ready",
    },
  },
  {
    slug: "moowhub-wellness-platform",
    title: "Moow.Hub — Wellness & Yoga Platform",
    category: "build",
    sub: "webapp",
    excerpt: "Static marketing → full e-commerce vision. Digital ecosystem & bundle flows.",
    cover: "/portfolio/placeholders/build-2.jpg",
    tags: ["Vibe coding", "E-commerce", "Wellness"],
    status: "placeholder",
    meta: {
      objective: "Transform wellness site into transactional platform",
      role: "Vibe coding, architecture",
      technology: ["Next.js", "Vercel", "Supabase"],
      features: ["Bundles", "Corporate wellness", "Performance tuned"],
      result: "Prototype & audit completed — awaiting assets",
    },
  },
  {
    slug: "seo-technical-foundation",
    title: "SEO — Technical Foundation & Structure",
    category: "build",
    sub: "seo",
    excerpt: "Semantic HTML, metadata, sitemap, performance. The site itself is the case study.",
    cover: "/portfolio/placeholders/build-3.jpg",
    tags: ["Technical SEO", "Performance", "Structure"],
    status: "placeholder",
    meta: {
      seo: ["Heading hierarchy", "Canonical", "Structured data", "Alt text", "Robots.txt"],
      result: "Lighthouse-ready baseline",
    },
  },
  // CREATE — placeholders
  {
    slug: "product-visualization-exploded",
    title: "Product Visualization — Exploded View",
    category: "create",
    sub: "product",
    excerpt: "Photoreal product render with exploded components for e-commerce & ads.",
    cover: "/portfolio/placeholders/create-1.jpg",
    tags: ["AI", "3D", "Product Viz"],
    status: "placeholder",
    meta: { workflow: "AI image → 3D refinement → studio lighting", aspect: "1:1 / 4:5", duration: "—" },
  },
  {
    slug: "architectural-cinematic-still",
    title: "Architectural Visualization — Cinematic Still",
    category: "create",
    sub: "architecture",
    excerpt: "Natural light, correct perspective, material accuracy — built for developers.",
    cover: "/portfolio/placeholders/create-2.jpg",
    tags: ["ArchViz", "Photoreal", "AI"],
    status: "placeholder",
    meta: { workflow: "Concept → AI generation → enhancement", aspect: "16:9" },
  },
  {
    slug: "ai-video-cinematic-promo",
    title: "AI Video — Cinematic Promo (9:16 & 16:9)",
    category: "create",
    sub: "video",
    excerpt: "Image-to-video promotional sequence with product hero and type-driven beats.",
    cover: "/portfolio/placeholders/create-3.jpg",
    tags: ["AI Video", "Cinematic", "UGC"],
    status: "placeholder",
    meta: { workflow: "Prompt → image → video → edit", duration: "15s / 30s", aspect: "9:16, 16:9" },
  },
  {
    slug: "ugc-ad-reel",
    title: "UGC-Style Ad — Reel/Short",
    category: "create",
    sub: "advertising",
    excerpt: "Native-feeling ad creative for performance channels — hook → proof → CTA.",
    cover: "/portfolio/placeholders/create-4.jpg",
    tags: ["UGC", "Reels", "Ads"],
    status: "placeholder",
    meta: { workflow: "Script → AI talent → edit", duration: "20s", aspect: "9:16" },
  },
  {
    slug: "image-enhancement-before-after",
    title: "AI Image Enhancement — Before / After",
    category: "create",
    sub: "enhancement",
    excerpt: "Resolution, texture, light correction while preserving original integrity.",
    cover: "/portfolio/placeholders/create-5.jpg",
    tags: ["Enhancement", "AI", "Retouch"],
    status: "placeholder",
    meta: { workflow: "Input → upscaling → natural finish" },
  },
  {
    slug: "3d-visual-generation",
    title: "3D Visual Generation — Conceptual",
    category: "create",
    sub: "3d",
    excerpt: "Stylized 3D assets for product and spatial storytelling.",
    cover: "/portfolio/placeholders/create-6.jpg",
    tags: ["3D", "Visualization"],
    status: "placeholder",
    meta: { workflow: "Prompt → 3D model → render" },
  },
];

export const buildProjects = projects.filter((p) => p.category === "build");
export const createProjects = projects.filter((p) => p.category === "create");
