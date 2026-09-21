// Filtered from Detailed.docx — Lens A/B/C — single source for site placeholders
// Generated 2026-09-21 from live repo inspection. No env values, only stack names.

export const auditVerdict = {
  title: "You Already Have Range. Now Frame It.",
  subtitle: "Seven builds, three delivery models, one founder. The engineering is real — the positioning needed to catch up.",
  metrics: [
    { metric: "Total projects audited", value: "7 (4 public-facing, 3 private/automation)" },
    { metric: "Languages & runtimes", value: "Python 3.11/3.12, Node 18+/22, TypeScript 5, HTML/CSS/JS, AFL" },
    { metric: "Frameworks", value: "Next.js 16.3.5 App Router + Tailwind 4, Express 5.x, Supabase, Vercel Serverless" },
    { metric: "AI providers", value: "OpenAI gpt-4o, Anthropic claude-sonnet-4, Gemini 2.5-flash (failover + retry)" },
    { metric: "Payments", value: "Stripe 14.x + Razorpay 2.8.x (dual gateway, INR vs global)" },
    { metric: "Responsive sites", value: "3 / 3 website apps are responsive (Feather Creations, Moow.Hub, LeyBros)" },
    { metric: "Desktop apps", value: "2 dedicated desktop (ALT-Text Generator (Harvard University) CLI + NEST Trading Terminal Automation Win32 scrape)" },
    { metric: "Automation", value: "Selenium RPA (II*A Private Sector Office Work Automation) + Win32 RPA (NEST Trading Terminal Automation) + Quant batch (AmiBroker Desktop App Automation)" },
    { metric: "SEO baseline", value: "LeyBros programmatic sitemap/robots + OG; Feather Creations JSON-LD + 22-URL sitemap" },
    { metric: "Commercial readiness", value: "Moow.Hub production-grade (orders, rate-limit, email, tracking)" },
  ],
  lensSummary: [
    { lens: "Engineering depth", proves: "Multi-provider failover, Win32 memory scraping, serverless e-commerce with RLS + payments", assumes: "‘Another Next.js portfolio’ unless hard parts are surfaced" },
    { lens: "Delivery models", proves: "Desktop CLI, Static Vercel, SSR Next.js, Automation — offline + online + back-office", assumes: "Confusion without triptych (Web/AI/Market)" },
    { lens: "Mobile", proves: "Feather Creations + Moow.Hub + LeyBros are genuinely responsive", assumes: "Desktop-only screenshots undersell you" },
    { lens: "SEO", proves: "LeyBros & Moow.Hub SEO-ready; Feather Creations full schema+sitemap", assumes: "Placeholders hide you from Google — ship real assets" },
    { lens: "IP moat", proves: "Harmonic Fractal XABC + HRoC 570 + FnO 300/5 — niche backtesting logic", assumes: "Loose .afl + CSV reads as dump — package as pipeline" },
  ],
} as const;

export const projectAtlas = [
  { n: 1, label: "ALT-Text Generator (Harvard University)", real: "Accessibility AI Pipeline — Desktop CLI (PNG → GRID → LLM → Excel)", model: "Desktop App (Python CLI)", responsive: "N/A — CLI", seo: "N/A (offline)", tech: "Python 3.11+, Pillow, PyMuPDF, openpyxl, OpenAI/Anthropic/Gemini, ThreadPoolExecutor" },
  { n: 2, label: "Feather Creations", real: "Static Website — Catalog + Express contact API", model: "Website App", responsive: "✓ Yes — flex/grid @media 768/480", seo: "★★★★ OG+JSON-LD+sitemap 22", tech: "HTML/CSS/JS, Express 5.1, Resend 4.0, sharp 0.35, Vercel" },
  { n: 3, label: "Moow.Hub", real: "E-Commerce Platform — Wellness/yoga with auth/cart/orders/payments", model: "Website (Vercel Serverless)", responsive: "✓ Yes", seo: "★★★ sitemap 15 + clean URLs", tech: "Vercel Serverless, Supabase 2.45, Stripe 14, Razorpay 2.8, JWT 9, PDFKit 0.15" },
  { n: 4, label: "NEST Trading Terminal Automation", real: "NEST Trading Terminal Scraper — SysListView32 → Excel (Win32)", model: "Desktop Automation (RPA)", responsive: "N/A", seo: "N/A", tech: "Python, Win32 API (VirtualAllocEx/ReadProcessMemory/SendMessageW), openpyxl" },
  { n: 5, label: "II*A Private Sector Office Work Automation", real: "Auditor Automation — Selenium table autofill (dropdown + remarks)", model: "Web Automation (RPA)", responsive: "Target-dependent", seo: "N/A (internal)", tech: "Python, Selenium, webdriver-manager" },
  { n: 6, label: "AmiBroker Desktop App Automation", real: "Quantitative Backtesting & Screening Platform", model: "Research / Backtesting App", responsive: "N/A — batch CSV/Excel+AFL", seo: "Via LeyBros wrapper", tech: "Python 3.12, pandas, Bhavcopy, AFL (AmiBroker)" },
  { n: 7, label: "LeyBros", real: "Flagship Hub — lists all lanes (Web • AI • Market Insight)", model: "Website (Next.js 16+Tailwind4)", responsive: "✓ Yes — mobile-first", seo: "★★★★ programmatic sitemap/robots", tech: "Next.js 16.3.5, React 19, Tailwind 4, TS 5, Resend 6.28, Vercel" },
] as const;

// Lens A — per-project Category & Technologies & Evidence (collapsed to tags for cards)
export const lensA = {
  grid: {
    category: "Desktop AI / CLI",
    evidence: "Pillow≥10, PyMuPDF≥1.24, openpyxl≥3.1, openai/anthropic/google-genai, MAX_WORKERS=8, GRID 640×480 3×3",
    tech: ["Python 3.11+", "Pillow", "PyMuPDF", "openpyxl", "OpenAI gpt-4o", "Anthropic sonnet-4", "Gemini 2.5-flash", "ThreadPoolExecutor"],
    pros: "Failover + grid batching 9× cheaper + strict 508 validation",
  },
  feather: {
    category: "Website — Static + API",
    evidence: "Vanilla HTML/CSS/JS, Express 5.1 POST /submit-login, sharp 0.35, Vercel @vercel/node+static",
    tech: ["HTML5", "CSS3", "JavaScript", "Express 5.1", "Resend 4.0", "sharp 0.35", "Vercel"],
    seo: ["OG + Twitter", "3× JSON-LD", "22-URL sitemap", "robots.txt", "verify token"],
  },
  moow: {
    category: "Website — E-Commerce",
    evidence: "api/index.js 1.6k lines, Supabase 2.45, Stripe 14 + Razorpay 2.8, JWT 9, rate-limit 50/min",
    tech: ["Vercel Serverless", "Supabase", "Stripe", "Razorpay", "Resend 3.0", "JWT", "PDFKit 0.15", "sharp 0.35"],
  },
  nest: {
    category: "Desktop Automation (RPA)",
    evidence: "win32gui/ctypes, VirtualAllocEx/ReadProcessMemory/SendMessageW LVM_GETITEMTEXTW 0x1073",
    tech: ["Python", "Win32 API", "ctypes", "openpyxl", "PowerShell"],
  },
  iipa: {
    category: "Web Automation (RPA)",
    evidence: "selenium, webdriver_manager, Select fallback 3-tier dropdown",
    tech: ["Python", "Selenium", "WebDriver-Manager", "Chrome"],
  },
  fno: {
    category: "Research / Backtesting",
    evidence: "Python 3.12 pandas, Bhavcopy fo*.zip, screener 300%/5%, harmonic XABC 6-loop, AFL HRoC 570",
    tech: ["Python 3.12", "pandas", "Bhavcopy", "AFL", "ruff+pyright"],
  },
  leybros: {
    category: "Website — Hub",
    evidence: "Next.js 16.3.5 App Router, Tailwind 4, TS 5, Resend 6.28, Vercel, avif/webp",
    tech: ["Next.js 16", "React 19", "Tailwind 4", "TypeScript 5", "Resend 6.28", "Vercel"],
  },
} as const;
