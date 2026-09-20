export const site = {
  name: "LeyBros Private Ltd.",
  shortName: "LeyBros",
  tagline: "BUILD • CREATE • OBSERVE",
  url: "https://leybros.com",
  description:
    "Leslie Prabakar — B.Tech IT First Class with Distinction (IFET/Anna Univ, Silver Medal), 8 years software engineering (TCS, L&T Infotech, Syntel), freelance AI & web practice, Harvard/LAPIZ accessibility. Private investor decade+.",
  author: "Leslie Prabakar Ruphas Vanathuraj",
  email: "hello@leybros.com",
  phone: "+91-99625 34351",
  nav: [
    { label: "Build", href: "/build" },
    { label: "Create", href: "/create" },
    { label: "Observe", href: "/observe" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  education: {
    degree: "B.Tech., Information Technology — First Class with Distinction",
    college: "IFET College of Engineering, Affiliated to Anna University",
    distinction: "Silver Medal — Best Academic Performer",
  },
  concept: {
    build: {
      title: "BUILD",
      desc: "Enterprise engineering → vibe coding — websites, web apps, SEO. Performance and search-ready structure.",
      color: "#0ea5e9",
    },
    create: {
      title: "CREATE",
      desc: "AI visuals, video, 3D, product/architecture, UGC ads + Harvard-grade alt-text — accessibility included.",
      color: "#a855f7",
    },
    observe: {
      title: "OBSERVE",
      desc: "Decade+ private investor — proprietary Stepper strategy. Automated research, educational sharing only.",
      color: "#f59e0b",
    },
  },
  timeline: [
    { org: "Syntel Ltd.", note: "John Hancock (Canada)" },
    { org: "L&T Infotech Ltd.", note: "Standard Life (UK) • Marsh (Australia)" },
    { org: "Tata Consultancy Services", note: "Citi (USA) • Qantas (Australia)" },
    { org: "LAPIZ — Harvard University", note: "Alt-Text writer • Section 508 accessibility" },
    { org: "Freelance AI Engineer", note: "VibeCode • Minimax M2.5 • DeepSeek V4 Flash" },
  ],
  recognitions: [
    "Silver Medal — IFET/Anna University (Best Academic Performer)",
    "Paper presentation — SEO for revenue in $ (Organization level)",
  ],
  skills: {
    // curated — client-facing only
    modern: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "TypeScript", "Figma"],
    heritage: ["Java/J2EE", "Struts"],
    ai: ["Minimax M2.5", "DeepSeek V4 Flash"],
  },
  stock: {
    summary: "Decade+ Private Investor — proprietary Stepper strategy. Education only, not SEBI-registered.",
  },
  seo: {
    keywords: [
      "Leslie Prabakar",
      "LeyBros",
      "vibe coding",
      "website development",
      "SEO",
      "AI art",
      "AI video",
      "alt text",
      "Stepper",
    ],
  },
} as const;
