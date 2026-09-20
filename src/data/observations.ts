export type Observation = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  status: "published" | "placeholder";
  observed: string;
  whyInteresting: string;
  dataShowed: string;
  afterward: string;
  learned: string;
  tags: string[];
  disclaimer?: string;
};

export const observations: Observation[] = [
  {
    slug: "double-bottom-small-bottom-breakout",
    title: "Double Bottom → Small Bottom → Breakout",
    excerpt: "A micro-cap consolidation study. What was visible at the time vs. what followed.",
    cover: "/observe/placeholders/obs-1.jpg",
    status: "placeholder",
    observed: "Price formed a double bottom base, then a shallow pullback with contracting volume.",
    whyInteresting: "Constructive base, delivery participation rising on up days.",
    dataShowed: "Volume expansion on breakout attempt, moving averages aligning.",
    afterward: "Breakout followed by measured follow-through. Not every similar setup sustains — selection matters.",
    learned: "Wait for confirmation, define risk, avoid hindsight bias. Base quality > prediction.",
    tags: ["Price action", "Volume", "Breakout", "Micro-cap"],
  },
  {
    slug: "fno-crash-q60-m40",
    title: "FnO Crash Screen — Q60/M40 Study",
    excerpt: "Quant screen (Q60/M40) crash conditions — observation window, not a call.",
    cover: "/observe/placeholders/obs-2.jpg",
    status: "placeholder",
    observed: "Screen flagged stress: momentum breakdown, range expansion.",
    whyInteresting: "Systematic flag vs. discretionary narrative.",
    dataShowed: "Cross-sectional weakness; historical crash quarters re-tested.",
    afterward: "Some names recovered quickly, others did not — underscores survivorship bias.",
    learned: "Screen = awareness, not timing. Position sizing & risk dominate.",
    tags: ["Screener", "Risk", "Quant"],
  },
  {
    slug: "harmonic-fractal-xabc",
    title: "Harmonic / Fractal — XABC Structure",
    excerpt: "Pattern observation exercise. Education, not forecast.",
    cover: "/observe/placeholders/obs-3.jpg",
    status: "placeholder",
    observed: "XABC retracement approaching harmonic zone.",
    whyInteresting: "Confluence of fib + structure near prior swing.",
    dataShowed: "Volume inconclusive at that moment; awaiting trigger.",
    afterward: "Pattern completed in some cases, failed in others — no guarantee.",
    learned: "Patterns are hypotheses. Reaction > prediction.",
    tags: ["Harmonics", "Structure", "Education"],
  },
];
