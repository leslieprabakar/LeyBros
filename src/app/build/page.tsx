import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { buildProjects } from "@/data/projects";
import Link from "next/link";

export const metadata = { title: "Build — Websites, Vibe Coding, SEO", description: "Build lane: websites, web apps, vibe coding, SEO — engineering that ships and ranks." };

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="BUILD — SOFTWARE → PRESENCE" title="Websites, web apps, vibe coding, SEO." desc="Everything starts with structure — semantic HTML, performant code, search-ready architecture. The site itself is the SEO demo." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {k:"WEBSITE DEVELOPMENT", t:"Creation • Web apps • Responsive • UI/UX", d:"Next.js + Supabase + Tailwind. Vibe-coded where it speeds you up, engineered where it must last."},
          {k:"SEO", t:"On-page • Technical • Structure", d:"Heading hierarchy, canonical, OG, sitemap, robots, alt, perf, Search Console readiness. No stuffing."},
          {k:"PROCESS", t:"CODE → WEBSITE", d:"Discovery → architecture → build → perf → QA → deploy on Vercel. Your domain, your ownership."},
        ].map(c=>(
          <div key={c.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] tracking-[0.18em] text-sky-300">{c.k}</div>
            <div className="mt-2 text-sm font-semibold text-white">{c.t}</div>
            <p className="mt-2 text-xs leading-5 text-zinc-400">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm tracking-[0.14em] text-zinc-400">CASE STUDIES — BUILD</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h4 className="text-sm font-semibold text-white">For each website project, documented fields:</h4>
        <p className="mt-2 text-xs leading-5 text-zinc-400">Project • Objective • My Role • Approach • Technology • Key Features • SEO • Result/Status • Live URL (when available). No invented results — placeholders stay honest until you drop real data.</p>
        <Link href="/contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Enquire — Need a website?</Link>
      </div>
    </div>
  );
}
