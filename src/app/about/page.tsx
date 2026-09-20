import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export const metadata = { title: "About — Evolution", description: "Former software engineer → freelancer → AI creative → private investor. The LeyBros story." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="ABOUT — PROFESSIONAL STORY" title="Built on enterprise engineering. Practicing as a freelancer." desc="No invented titles, dates, or achievements. The journey is the credential." />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">LeyBros Private Ltd. — freelance technology & AI creative practice.</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            I began as a software engineer in enterprise environments. That foundation — systems thinking, quality, delivery — now powers freelance work across vibe coding, website development, SEO, AI-assisted imagery, AI video/3D, and advertising creatives. Separately, I invest privately with a focus on micro/small caps and share observations educationally.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex gap-3"><span className="text-zinc-500">FORMER</span><span className="text-white">Software Engineer</span></div>
            <div className="flex gap-3"><span className="text-sky-300">BUILD</span><span className="text-white">Enterprise experience → Freelancing → Websites → SEO</span></div>
            <div className="flex gap-3"><span className="text-fuchsia-300">CREATE</span><span className="text-white">AI art / enhancement / video / 3D / UGC & cinematic ads</span></div>
            <div className="flex gap-3"><span className="text-amber-300">OBSERVE</span><span className="text-white">Private investor → Stock-market knowledge sharing (education only)</span></div>
          </div>
          <p className="mt-6 text-xs leading-5 text-zinc-500">Hindsight is labeled. Screenshots are primary. Services and knowledge program are kept distinct — different intents, different enquiries.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
          <div className="text-[11px] tracking-[0.18em] text-zinc-400">PROFESSIONAL TIMELINE</div>
          <div className="mt-4 relative pl-6 border-l border-white/10 space-y-6">
            {site.timeline.map(t=>(
              <div key={t.org} className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-white border-2 border-[#0a0a0b]" />
                <div className="text-sm font-medium text-white">{t.org}</div>
                <div className="text-xs text-zinc-500">{t.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-xs leading-5 text-zinc-400">
            <span className="text-amber-200">Note:</span> LTM Limited is the current name — not LTIMindtree. Job titles/dates/technologies are omitted until you provide them; no invention.
          </div>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Work with me</Link>
        </div>
      </div>
    </div>
  );
}
