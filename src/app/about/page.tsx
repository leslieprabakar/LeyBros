import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export const metadata = { title: "About — Leslie Prabakar | Engineering + Harvard Accessibility", description: "B.Tech IT First Class with Distinction, 8 years TCS/L&T Infotech/Syntel, LAPIZ Harvard alt-text, freelance AI engineer, decade+ investor." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="ABOUT — LESLIE PRABAKAR" title="Engineering foundation. Creative practice. Observed markets." desc="Curated from documented work — only what matters to clients, no CV dump." />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 sm:p-8">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">WHO I AM</div>
          <h3 className="mt-2 font-display text-[22px] font-medium text-white leading-tight">Freelance technology & AI creative practice.</h3>
          <p className="mt-3 text-[15px] leading-7 text-zinc-300">
            8 years as Project Lead / Developer cum Tester in enterprise delivery (Java/J2EE, Struts) — now building with Next.js, Tailwind, Supabase, and AI-assisted visuals, video & 3D. My edge is systems thinking from large-scale programs, applied to fast, search-ready freelance delivery.
          </p>
          <div className="mt-6 rounded-xl border border-[#C9A86A]/15 bg-[#081410] p-4">
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">EDUCATION</div>
            <div className="mt-2 text-[15px] font-medium text-white">{site.education.degree}</div>
            <div className="text-[14px] text-zinc-300">{site.education.college}</div>
            <div className="mt-1 inline-flex rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/20 px-3 py-1 text-[12px] text-[#E8D5B5]">{site.education.distinction}</div>
          </div>
          <div className="mt-6 flex gap-2 text-[12px]">
            <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-[#E8D5B5]">BUILD</span>
            <span className="rounded-full border border-[#C9A86A]/15 px-3 py-1 text-[#E8D5B5]">CREATE</span>
            <span className="rounded-full border border-amber-500/15 px-3 py-1 text-amber-200">OBSERVE — education only</span>
          </div>
          <p className="mt-4 font-script text-[20px] text-[#C9A86A]/70">Leslie Prabakar</p>
        </div>

        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-gradient-to-b from-[#10201A] to-[#0d1a14] p-6 sm:p-8">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">WHERE I&apos;VE BUILT</div>
          <div className="mt-4 relative pl-6 border-l border-[#C9A86A]/15 space-y-5">
            {site.timeline.map(t=>(
              <div key={t.org} className="relative">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-[#C9A86A] border-2 border-[#10201A]" />
                <div className="text-[15px] font-medium text-white">{t.org}</div>
                <div className="text-[13px] text-zinc-400">{t.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-zinc-500">L&T Infotech (LTM Limited) — not LTIMindtree. Clients as documented.</p>
          <div className="mt-6">
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">RECOGNITION</div>
            <ul className="mt-2 space-y-1 text-[13px] text-zinc-300 list-disc pl-5">
              {site.recognitions.map(r=> <li key={r}>{r}</li>)}
            </ul>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#C9A86A] px-7 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">Work with me →</Link>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">CREATE — ACCESSIBILITY</div>
          <h4 className="mt-2 font-display text-[16px] font-medium text-white">Harvard/LAPIZ — Section 508 alt-text</h4>
          <p className="mt-2 text-[14px] leading-6 text-zinc-400">Alt-text for charts, diagrams and academic figures — equal access for screen readers, without losing meaning. Useful when your site must be truly accessible, not just compliant.</p>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">BUILD — NOW</div>
          <h4 className="mt-2 font-display text-[16px] font-medium text-white">Vibe coding → production</h4>
          <p className="mt-2 text-[14px] leading-6 text-zinc-400">Next.js, Tailwind, Supabase, Vercel — from idea to live, with SEO structure and performance baked in. Heritage: Java/J2EE, Struts.</p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">{site.skills.modern.map(s=> <span key={s} className="rounded-full border border-[#C9A86A]/10 bg-[#081410] px-2.5 py-1 text-zinc-300">{s}</span>)}</div>
        </div>
        <div className="rounded-[16px] border border-amber-500/15 bg-amber-500/[0.04] p-6">
          <div className="text-[13px] tracking-[0.18em] text-amber-300">OBSERVE — MARKET</div>
          <h4 className="mt-2 font-display text-[16px] font-medium text-white">Decade+ investor — Stepper</h4>
          <p className="mt-2 text-[14px] leading-6 text-zinc-400">{site.stock.summary} Automated research, shared as knowledge — no calls, no advice. Historical ≠ future.</p>
        </div>
      </div>
    </div>
  );
}
