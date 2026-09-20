import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { buildProjects } from "@/data/projects";
import { PricingCard, buildTiers } from "@/components/ui/PricingCard";
import Link from "next/link";

export const metadata = { title: "Web — Websites, Vibe Coding, SEO", description: "Web lane: websites, web apps, vibe coding, SEO — engineering that ships and ranks." };

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="WEB — SOFTWARE → PRESENCE" title="Websites, web apps, vibe coding, SEO." desc="Everything starts with structure — semantic HTML, performant code, search-ready architecture. The site itself is the SEO demo." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {k:"WEBSITE DEVELOPMENT", t:"Creation • Web apps • Responsive • UI/UX", d:"Next.js + Supabase + Tailwind. Vibe-coded where it speeds you up, engineered where it must last."},
          {k:"SEO", t:"On-page • Technical • Structure", d:"Heading hierarchy, canonical, OG, sitemap, robots, alt, perf, Search Console readiness. No stuffing."},
          {k:"PROCESS", t:"CODE → WEBSITE", d:"Discovery → architecture → build → perf → QA → deploy on Vercel. Your domain, your ownership."},
        ].map(c=>(
          <div key={c.k} className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5">
            <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">{c.k}</div>
            <div className="mt-2 font-display text-sm font-medium text-white">{c.t}</div>
            <p className="mt-2 text-xs leading-5 text-zinc-400">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-sm tracking-[0.14em] text-[#C9A86A]">PRICING — AFFORDABLE FOR INDIAN BUSINESSES</h3>
        <p className="mt-2 text-xs text-zinc-500">Economical, transparent, no hidden charges. GST extra. 50% advance.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {buildTiers.map(t=> <PricingCard key={t.name} tier={t} />)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">SEO Retainer ₹1,999/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">Maintenance ₹999/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">Add-ons: domain, hosting, analytics</span>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-sm tracking-[0.14em] text-zinc-400">CASE STUDIES — WEB</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>

      <div className="mt-10 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
        <h4 className="font-display text-sm font-medium text-white">For each website project, documented fields:</h4>
        <p className="mt-2 text-xs leading-5 text-zinc-400">Project • Objective • My Role • Approach • Technology • Key Features • SEO • Result/Status • Live URL (when available). No invented results — placeholders stay honest until you drop real data.</p>
        <Link href="/contact" className="mt-4 inline-flex rounded-full bg-[#C9A86A] px-6 py-2.5 text-xs font-semibold text-[#081410] hover:bg-[#D4B78A]">Enquire — Need a website? →</Link>
      </div>
    </div>
  );
}
