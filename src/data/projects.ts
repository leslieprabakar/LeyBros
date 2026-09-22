export type ProjectCategory = "build" | "create" | "automate" | "research";
export type BuildType = "website" | "webapp" | "seo" | "hub";
export type CreateType = "image" | "enhancement" | "product" | "architecture" | "cinematic" | "advertising" | "video" | "3d";
export type AutomateType = "desktop-rpa" | "web-rpa";
export type ResearchType = "backtesting" | "screening";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  sub: BuildType | CreateType | AutomateType | ResearchType;
  excerpt: string;
  cover: string; // placeholder / real path
  tags: string[];
  status: "published" | "placeholder";
  href?: string;
  delivery?: "website" | "desktop" | "automation" | "research";
  responsive?: "yes" | "no" | "n/a";
  seoGrade?: string;
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
  // ── AUDITED — WEBSITE (build) ──
  {
    slug: "feather-creations-website",
    title: "Feather Creations — Premium Fabrics & Fashion Website",
    category: "build",
    sub: "website",
    excerpt: "Vanilla HTML/CSS/JS + Express 5.1 with Resend & sharp. 60+ pages, responsive, OG + JSON-LD, live on Vercel — catalog that converts bulk orders.",
    cover: "https://Feather-Creations.vercel.app/webp/fam-wide.webp?v=1",
    tags: ["HTML/CSS/JS", "Express 5.1", "Resend 4.0", "Vercel"],
    status: "published",
    delivery: "website",
    responsive: "yes",
    seoGrade: "★★★★",
    href: "/web",
    meta: {
      objective: "Catalog website for Pondicherry bulk fabrics — men's/women's/kids, T-shirts, caps, bags, school uniforms, embroidery",
      role: "Full-stack (vanilla frontend + Express contact API)",
      approach: "Hand-written HTML/CSS + Express static + Vercel @vercel/node+static; security headers + 1y cache",
      technology: ["HTML5", "CSS3", "JavaScript", "Express 5.1.0", "Resend 4.0.0", "sharp 0.35.3", "Vercel", "Poppin/Playfair Display"],
      features: ["22-URL navigation", "Multer 5MB image enquiry", "Security headers (nosniff/SAMEORIGIN/XSS)", "Static cache 1y immutable", "Animated grids + video showcases"],
      seo: ["OG + Twitter cards", "3× JSON-LD (Organization/LocalBusiness/Breadcrumb)", "sitemap.xml 22 URLs", "robots.txt", "canonical", "Google verify token"],
      result: "Live — responsive (768/480 media queries, hamburger, touch handling) • Evidence: index.html:6-102, server.js:1-104, vercel.json:1-62",
      liveUrl: "https://Feather-Creations.vercel.app",
    },
  },
  {
    slug: "moow-hub-ecommerce",
    title: "Moow.Hub — Wellness & Yoga E-Commerce Platform",
    category: "build",
    sub: "webapp",
    excerpt: "Vercel Serverless + Supabase + Stripe/Razorpay dual gateway. Auth, cart, orders, wishlist, COD OTP — lean commerce that ships.",
    cover: "/brand/moow-hub-wellness-kits.png?v=20250922-0431",
    tags: ["Vercel Serverless", "Supabase 2.45", "Stripe+Razorpay", "E-Commerce"],
    status: "published",
    delivery: "website",
    responsive: "yes",
    seoGrade: "★★★",
    href: "/web",
    meta: {
      objective: "Wellness/yoga lifestyle e-commerce — pose library, wellness AI, centers, products, partners",
      role: "Serverless API + static frontend (http shim for local dev)",
      approach: "Single serverless function api/index.js + public/ static with clean URL rewrites; Supabase Postgres+Auth+RLS",
      technology: ["Vercel Serverless", "Supabase 2.45", "Stripe 14.x", "Razorpay 2.8", "Resend 3.0", "JWT 9.0", "PDFKit 0.15", "sharp 0.35", "Node ≥18"],
      features: ["Cart + wishlist", "Stripe (global) / Razorpay (INR) routing", "COD OTP flow", "Free shipping ≥$100 logic", "Shipped tracking + 24h cancel", "Email log + PDF invoices"],
      seo: ["sitemap.xml 15 URLs", "robots.txt (disallow admin/cart)", "clean URLs /about→/pages/about.html", "CSP/HSTS headers"],
      result: "Production — 1.6k-line API handles auth/products/orders; Evidence: api/index.js, server.js:1-143, vercel.json:1-42",
      liveUrl: "https://Moow-Hub.vercel.app",
    },
  },
  {
    slug: "leybros-flagship-hub",
    title: "LeyBros — Flagship Portfolio Hub (This Site)",
    category: "build",
    sub: "hub",
    excerpt: "Next.js 16.3.5 App Router + Tailwind 4 + TypeScript. Programmatic sitemap/robots, triptych Web/AI/Market, hub for all 7 projects.",
    cover: "/brand/logo.png",
    tags: ["Next.js 16", "Tailwind 4", "TypeScript 5", "Vercel"],
    status: "published",
    delivery: "website",
    responsive: "yes",
    seoGrade: "★★★★",
    href: "/",
    meta: {
      objective: "Hub that lists all lanes — Web • AI • Market Insight — with SEO + contact pipeline",
      role: "Frontend + SEO + Vercel deploy",
      approach: "Next.js App Router, Tailwind 4, Resend contact API, avif/webp, redirects /build→/web etc.",
      technology: ["Next.js 16.3.5", "React 19.2.8", "Tailwind 4", "TypeScript 5", "Resend 6.28", "Vercel"],
      features: ["Hero + Triptych + StatCounter + Pricing", "Programmatic sitemap.ts + robots.ts", "ProjectCard / ObservationCard", "SectionHeader + Marquee"],
      seo: ["Programmatic sitemap/robots", "avif/webp images", "OG via metadata API", "redirects permanent"],
      result: "Live on localhost:3000 — evidence: src/app/page.tsx:1-210, next.config.ts:1-20, Detailed.docx filtered",
      liveUrl: "https://LeyBros.vercel.app",
    },
  },
  // ── AUDITED — AI & AUTOMATION ──
  {
    slug: "grid-alttextgen-accessibility-ai",
    title: "ALT-Text Generator (Harvard University) — Section 508 Alt-Text Factory (Desktop AI)",
    category: "create",
    sub: "enhancement",
    excerpt: "Python CLI: PNG → numbered 9-image grids → OpenAI/Anthropic/Gemini failover → validated alt text → Excel. Batch 1000s of books offline.",
    cover: "/portfolio/altttextgen-infographic.png?v=20250922",
    tags: ["Python 3.11", "Pillow/PyMuPDF", "OpenAI/Anthropic/Gemini", "Excel"],
    status: "published",
    delivery: "desktop",
    responsive: "n/a",
    seoGrade: "N/A (offline)",
    href: "/ai",
    meta: {
      objective: "Generate humanized Section 508 alt text for PNG images in single or 200+ book folders",
      role: "CLI pipeline + validation + Excel writer",
      approach: "Pillow grid tiling (640×480 3×3, --grid-size/--grid-quality), ThreadPoolExecutor MAX_WORKERS=8, provider failover, 10-370 char validation",
      technology: ["Python 3.11+", "Pillow ≥10", "PyMuPDF ≥1.24", "openpyxl ≥3.1", "openai ≥1.0", "anthropic ≥0.40", "google-genai ≥1.0", "python-dotenv"],
      features: ["6/9-image grid batching", "PDF mode (embedded images)", "Multi-folder parent-path mirror", "failed.csv + alt_texts.xlsx per book"],
      seo: ["Accessibility-grade alt validation (bans hallucinations)"],
      result: "Beta CLI — evidence: src/cli.py:36-475, src/config.py:27-50, README.md:1-221",
      workflow: "Folders → validation → GRID tiling → LLM call → validation → Excel",
      aspect: "3×3 grid (configurable)",
    },
  },
  {
    slug: "nest-trader-excel-bridge",
    title: "NEST Trading Terminal Automation — ListView → Excel Bridge (Desktop RPA)",
    category: "automate",
    sub: "desktop-rpa",
    excerpt: "Pure Win32 memory scrape: VirtualAllocEx + SendMessageW LVM_GETITEMTEXTW + ReadProcessMemory. NEST has no API — now it has Excel.",
    cover: "/portfolio/nest-infographic.png?v=20250922-2303",
    tags: ["Python + Win32", "ctypes", "openpyxl", "RPA"],
    status: "published",
    delivery: "automation",
    responsive: "n/a",
    seoGrade: "N/A",
    href: "/ai",
    meta: {
      objective: "Dump NEST Trading Terminal ‘FromScreenerRAW20’ SysListView32 table to FromScreenerRAW20_YYYY-MM-DD.xlsx",
      role: "Reverse-engineered Win32 RPA",
      approach: "EnumWindows → MDIClient → AfxFrameOrView140 → largest SysListView32 by area; OpenProcess + remote LVITEM/HDITEM via struct.pack 96B",
      technology: ["Python", "win32gui/win32process", "ctypes/kernel32", "openpyxl", "PowerShell batch"],
      features: ["Cross-process ListView read", "Header + cell extraction", "Progress every 100 rows", "Auto timestamped Excel"],
      result: "Working — evidence: export_excel.py:1-172, probe_*.py 20 probes, launcher.py + PowerShell",
      workflow: "NEST open → locate ListView → remote alloc → SendMessageW per cell → Excel",
    },
  },
  {
    slug: "iipa-auditor-automation",
    title: "II*A Private Sector Office Work Automation — Auditor Table Auto-Fill (Web RPA)",
    category: "automate",
    sub: "web-rpa",
    excerpt: "Selenium automation: URL → manual login → filter rows (x.y.z) → pa_value from col3 → 3-tier dropdown in col7 → ‘ok’ in col9. Half-day → minutes.",
    cover: "/portfolio/placeholders/create-4.jpg",
    tags: ["Python", "Selenium", "webdriver-manager", "RPA"],
    status: "published",
    delivery: "automation",
    responsive: "n/a",
    seoGrade: "N/A (internal)",
    href: "/ai",
    meta: {
      objective: "Automate auditor table: mirror col4 PA value into col8 select + col10 remarks",
      role: "Selenium RPA (manual login gate, auto fill)",
      approach: "Chrome detach maximized, 3-tier dropdown: Select → option click → custom div[role=button] fallback; regex row filter",
      technology: ["Python", "selenium", "webdriver-manager", "Chrome Options(detach)"],
      features: ["Manual login gate (ENTER)", "3 fallback selectors", "Regex ^\\d+\\.\\d+\\.\\d+$ filter", "0.3s throttle, browser stays open"],
      result: "Script — evidence: auditor_automation.py:1-109 (109 lines), debug_structure.py",
      workflow: "Prompt URL → Chrome → login → table tbody tr → select → remarks ok",
    },
  },
  {
    slug: "fno-rnd-quant-platform",
    title: "AmiBroker Desktop App Automation — Quantitative Backtesting & Screening Platform",
    category: "research",
    sub: "backtesting",
    excerpt: "Python 3.12 + pandas + NSE Bhavcopy + AFL. F&O 300%/5% screener, Harmonic Fractal XABC, HRoC 570 — research that becomes knowledge, not tips.",
    cover: "/portfolio/placeholders/create-6.jpg",
    tags: ["Python 3.12", "pandas", "Bhavcopy", "AFL", "Quant"],
    status: "published",
    delivery: "research",
    responsive: "n/a",
    seoGrade: "Via Market Insight",
    href: "/market-insight",
    meta: {
      objective: "Backtest & screen NSE micro/small-cap ideas — momentum + fractal + crash filters",
      role: "Quant research workbench (AFL + Python hybrid)",
      approach: "Join F&O bhav (fo*.zip) option high≥300% + spot ≥5% + 20/60/252 breakout; 6-loop XABC fractal; HRoC/Q60/M40 AFL explores",
      technology: ["Python 3.12", "pandas", "NSE Bhavcopy", "AmiBroker AFL", "ruff+pyright"],
      features: ["fno_300pct_spot5pct_2024plus.csv", "harmonic_fractal_XABC_YTD2026.csv", "Crash_Q60_M40 AFL", "HRoC 570", "Excel + CSV tear-sheets"],
      result: "Research — evidence: screener_300_5.py:1-182, harmonic_fractal.py:1-108, AGENTS.md:1-6, *.afl",
      workflow: "Bhav ingest → join → breakout → walk-forward → Excel/PDF tear-sheet",
      aspect: "Batch CSV/Excel + AFL explores",
    },
  },
  // ── REMAINING AI VISUAL PLACEHOLDERS (keep 6 to show upcoming lane) ──
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
    excerpt: "Natural light, correct perspective, material accuracy — built for developers. Upcoming lane.",
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
export const automateProjects = projects.filter((p) => p.category === "automate");
export const researchProjects = projects.filter((p) => p.category === "research");
export const publishedProjects = projects.filter((p) => p.status === "published");
export const placeholderProjects = projects.filter((p) => p.status === "placeholder");
