import Link from "next/link";

type Tier = {
  name: string;
  kicker: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  accent?: string;
};

export function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div className={`relative overflow-hidden rounded-[16px] border p-6 flex flex-col ${tier.popular ? "border-[#C9A86A]/30 bg-gradient-to-b from-[#1a3d2e] to-[#0f241c] shadow-[0_8px_32px_rgba(201,168,106,0.12)]" : "border-[#C9A86A]/12 bg-[#10201A]/60"}`}>
      {tier.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-full bg-[#C9A86A] px-4 py-1 text-[12px] tracking-[0.14em] font-semibold text-[#081410]">MOST POPULAR</div>
      )}
      <div className={`text-[13px] tracking-[0.18em] ${tier.popular ? "text-[#C9A86A] mt-4" : "text-zinc-400"}`}>{tier.kicker}</div>
      <div className="mt-2 font-display text-[22px] font-semibold text-white">{tier.name}</div>
      <p className="mt-1 text-[14px] leading-6 text-zinc-400">{tier.desc}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-[36px] font-semibold text-white">{tier.price}</span>
        <span className="text-[13px] text-zinc-400">{tier.period}</span>
      </div>
      <ul className="mt-6 space-y-2.5 text-[14px] leading-6 text-zinc-300 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A86A]/70 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href={tier.href} className={`mt-6 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-[14px] font-semibold tracking-wide transition ${tier.popular ? "bg-[#C9A86A] text-[#081410] hover:bg-[#D4B78A]" : "border border-[#C9A86A]/25 text-[#E8D5B5] hover:bg-[#C9A86A]/10"}`}>
        {tier.cta} →
      </Link>
      <p className="mt-3 text-center text-[12px] text-zinc-400">No hidden charges • 50% advance</p>
    </div>
  );
}

export const buildTiers: Tier[] = [
  {
    kicker: "LAUNCH",
    name: "Starter Presence",
    price: "₹4,999",
    period: "one-time",
    desc: "Perfect for individuals & freelancers starting out.",
    features: ["1-page portfolio (Next.js, responsive)", "Basic on-page SEO + OG tags", "Contact form → email", "Vercel deploy + domain connect", "1 revision • 7 days delivery"],
    cta: "Get Started",
    href: "/contact",
  },
  {
    kicker: "GROWTH",
    name: "Business Standard",
    price: "₹9,999",
    period: "one-time",
    desc: "Most chosen by startups & local businesses.",
    features: ["Up to 5 pages, CMS-ready", "Technical SEO (sitemap, canonical, alt)", "GA4 + Search Console setup", "Performance tuned (Core Web Vitals)", "2 revisions • 14 days • 30d support"],
    cta: "Get Started",
    href: "/contact",
    popular: true,
  },
  {
    kicker: "SCALE",
    name: "Premium Commerce",
    price: "₹18,999",
    period: "one-time",
    desc: "For brands that need to sell, not just show.",
    features: ["E-commerce / webapp + Supabase", "Payments + orders + dashboard", "Advanced SEO + speed optimization", "3 revisions • 21 days • 60d support", "Training + handover docs"],
    cta: "Get Started",
    href: "/contact",
  },
];

export const createTiers: Tier[] = [
  {
    kicker: "ENHANCE",
    name: "AI Visual Pack",
    price: "₹5,999",
    period: "/ 20 images",
    desc: "Product & architecture visuals — realistic, not cheap AI.",
    features: ["Background cleanup & upscale 4K", "Photoreal product/architecture (₹300/image value)", "Color, lighting & perspective correction", "Web-ready exports + source files"],
    cta: "Get Started",
    href: "/contact",
  },
  {
    kicker: "CINEMATIC",
    name: "Video & 3D Suite",
    price: "₹14,999",
    period: "/ campaign",
    desc: "Cinematic promos + 3D that feels premium — priced to respect craft.",
    features: ["UGC ad / cinematic promo (9:16, 16:9, 1:1)", "3D exploded view + turntable + lighting", "Script, captions & thumbnails included", "2 revisions • 10 days delivery"],
    cta: "Get Started",
    href: "/contact",
    popular: true,
  },
];
