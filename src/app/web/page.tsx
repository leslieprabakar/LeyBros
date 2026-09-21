import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { buildProjects, createProjects, automateProjects, researchProjects } from "@/data/projects";
import { PricingCard, buildTiers } from "@/components/ui/PricingCard";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import Link from "next/link";

export const metadata = { title: "Web — Websites, Vibe Coding, SEO", description: "Web lane: websites, web apps, vibe coding, SEO — engineering that ships and ranks." };

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="WEB — ENGINEERING → VISIBILITY → GROWTH" title="Websites, web apps, vibe coding, SEO." desc="Structure that becomes visibility — semantic HTML, lightning-fast performance, and SEO engineered into every layer. Not an afterthought, the foundation. This site is the proof." />

      <div className="mt-12">
        <h3 className="font-display text-sm tracking-[0.14em] text-[#C9A86A]">PRICING — AFFORDABLE FOR INDIAN BUSINESSES</h3>
        <p className="mt-2 text-xs leading-5 text-zinc-500">India pricing shown — GST extra, 50% advance. Other countries: pricing varies — <Link href="/contact" className="text-[#E8D5B5] hover:text-[#C9A86A] underline decoration-[#C9A86A]/30 hover:decoration-[#C9A86A]">contact for details</Link>.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {buildTiers.map(t=> <PricingCard key={t.name} tier={t} />)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">SEO Retainer ₹2,999/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">Maintenance ₹1,499/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-zinc-400">Domain purchase & hosting billed separately</span>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-sm tracking-[0.14em] text-zinc-400">CASE STUDIES — WEB (PUBLISHED)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildProjects.filter(p=>p.status==="published").map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...automateProjects.filter(p=>p.slug==="iipa-auditor-automation")].map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        {buildProjects.filter(p=>p.status==="placeholder").length>0 && <p className="mt-3 text-[11px] text-zinc-500">Placeholders hidden — only published show. To publish, add asset to <code className="bg-white/10 px-1 rounded">/public/portfolio/</code>.</p>}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">WEBSITE DEVELOPMENT</div>
          <div className="mt-2 font-display text-sm font-medium text-white">Creation • Web apps • Responsive • UI/UX</div>
          <p className="mt-2 text-xs leading-5 text-zinc-400">Next.js 16.3.5 + React 19 + Tailwind 4 + TypeScript 5, Express 5.1, Vercel Serverless + Supabase 2.45, Stripe 14 / Razorpay 2.8 + JWT/PDFKit, HTML/CSS/JS + sharp + Resend: Feather (Express/Vercel), Moow.Hub (Serverless/Supabase/Stripe), LeyBros Hub (Next.js/App Router). Responsive, SEO, payments-ready — engineered.</p>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">SEO — 9 PILLARS</div>
          <div className="mt-2 font-display text-sm font-medium text-white">On-page • Technical • Structured</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["On-Page SEO","Social Media SEO","Structured Data","Technical SEO","Content SEO","Performance","Accessibility","Mobile SEO","Server-Side SEO"].map(h=>(
              <span key={h} className="rounded-full border border-[#C9A86A]/15 bg-[#081410] px-2.5 py-1 text-[11px] font-medium text-zinc-200">{h}</span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/10 px-2.5 py-1 text-[11px] text-[#E8D5B5]">Sitemap generation</span>
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/10 px-2.5 py-1 text-[11px] text-[#E8D5B5]">Security implementation</span>
          </div>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">PROCESS</div>
          <div className="mt-2 font-display text-sm font-medium text-white">CODE → WEBSITE</div>
          <p className="mt-2 text-xs leading-5 text-zinc-400">Discovery → architecture → build → perf → QA → deploy on Vercel. Your domain, your ownership. Sitemap + security shipped by default.</p>
        </div>
      </div>

      <div className="mt-10">
        <ComparisonMatrix highlight={[2,3,5,7]} />
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/contact" className="rounded-full bg-[#C9A86A] px-8 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">Enquire — Need a website?</Link>
      </div>
    </div>
  );
}
