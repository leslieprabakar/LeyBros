export const site = {
  name: "LeyBros Private Ltd.",
  shortName: "LeyBros",
  tagline: "Web • AI • Market Insight",
  url: "https://leybros.com",
  description:
    "Freelance technology & AI creative practice built on enterprise software engineering. Websites, vibe coding, SEO, AI art/video/3D, advertising. Separate stock-market knowledge sharing.",
  author: "LeyBros Private Ltd.",
  email: "hello@leybros.com",
  nav: [
    { label: "Web", href: "/web" },
    { label: "AI", href: "/ai" },
    { label: "Market Insight", href: "/market-insight" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  concept: {
    build: {
      title: "WEB",
      desc: "Software engineering foundation → vibe coding, websites, web apps, SEO. Performance, structure, search-ready.",
      color: "#0ea5e9",
    },
    create: {
      title: "AI",
      desc: "AI image enhancement, generation, video, 3D visualization, product & architectural renders, advertising creatives.",
      color: "#a855f7",
    },
    observe: {
      title: "MARKET INSIGHT",
      desc: "Private investing lens — micro/small-cap market observation, price action, knowledge sharing. Not a service.",
      color: "#f59e0b",
    },
  },
  timeline: [
    { org: "Atos Syntel", note: "Enterprise software engineering foundation" },
    { org: "LTM Limited", note: "Enterprise systems & delivery experience" },
    { org: "Tata Consultancy Services", note: "TCS — large-scale software practice" },
    { org: "LeyBros Private Ltd.", note: "Freelancer → Vibe coding → AI creative → Private investor" },
  ],
  seo: {
    keywords: [
      "LeyBros",
      "vibe coding",
      "website development",
      "SEO",
      "AI art",
      "AI video",
      "3D visualization",
      "product visualization",
      "UGC ads",
    ],
  },
} as const;
