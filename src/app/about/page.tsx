import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export const metadata = { title: "About — Evolution", description: "Former software engineer → freelancer → AI creative → private investor. The LeyBros story." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="ABOUT — PROFESSIONAL STORY" title="Built on enterprise engineering. Practicing as a freelancer." desc="No invented titles, dates, or achievements. The journey is the credential." />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 sm:p-8">
          <h3 className="font-display text-lg font-medium text-white">LeyBros Private Ltd. — freelance technology & AI creative practice.</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            I began as a software engineer in enterprise environments. That foundation — systems thinking, quality, delivery — now powers freelance work across vibe coding, website development, SEO, AI-assisted imagery, AI video/3D, and advertising creatives. Separately, I invest privately with a focus on micro/small caps and share observations educationally.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex gap-3"><span className="text-zinc-500 w-16">FORMER</span><span className="text-white">Software Engineer</span></div>
            <div className="flex gap-3"><span className="text-[#C9A86A] w-16">WEB</span><span className="text-white">Enterprise experience → Freelancing → Websites → SEO</span></div>
            <div className="flex gap-3"><span className="text-[#C9A86A] w-16">AI</span><span className="text-white">AI art / enhancement / video / 3D / UGC & cinematic ads</span></div>
            <div className="flex gap-3"><span className="text-amber-300 w-16">MARKET INSIGHT</span><span className="text-white">Private investor → Stock-market knowledge sharing (education only)</span></div>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-[#C9A86A]/20 to-transparent" />
          <p className="mt-4 font-script text-xl text-[#C9A86A]/70">Leslie</p>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-gradient-to-b from-[#10201A] to-[#0d1a14] p-6 sm:p-8">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">PROFESSIONAL TIMELINE</div>
          <div className="mt-4 relative pl-6 border-l border-[#C9A86A]/15 space-y-6">
            {site.timeline.map(t=>(
              <div key={t.org} className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[#C9A86A] border-2 border-[#10201A]" />
                <div className="text-sm font-medium text-white">{t.org}</div>
                <div className="text-xs text-zinc-500">{t.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-amber-500/15 bg-amber-500/[0.04] p-4 text-xs leading-5 text-zinc-400">
            <span className="text-amber-200">Note:</span> LTM Limited is the current name — not LTIMindtree. No invented dates/roles.
          </div>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-[#C9A86A] px-6 py-2.5 text-xs font-semibold text-[#081410] hover:bg-[#D4B78A]">Work with me →</Link>
        </div>
      </div>
    </div>
  );
}
