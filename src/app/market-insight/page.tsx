import { SectionHeader } from "@/components/ui/SectionHeader";
import { ObservationCard } from "@/components/observe/ObservationCard";
import { observations } from "@/data/observations";
import Link from "next/link";

export const metadata = { title: "Market Insight — Stock-Market Knowledge Sharing", description: "Separate educational knowledge-sharing based on private investing observation. Not SEBI-registered, not advice." };

export default function ObservePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-[16px] border border-amber-500/15 bg-gradient-to-b from-amber-500/[0.06] to-[#10201A]/40 p-6 sm:p-8">
        <div className="text-[11px] tracking-[0.18em] text-amber-300">MARKET INSIGHT — PRIVATE INVESTOR • EDUCATION ONLY</div>
        <h1 className="mt-2 font-display text-[28px] sm:text-[34px] font-medium text-white leading-tight">Stock-market knowledge sharing.</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">Not a freelance service. Not a tip service. Discussion + screenshots + charts + explanations. No PDFs, no buy/sell calls, no targets.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {["Market observation","Price action","Volume","Delivery data","Moving averages","Breakouts","Micro/small-cap (~₹2,000 cr & below)"].map(t=> <span key={t} className="rounded-full border border-amber-500/15 bg-black/20 px-3 py-1 text-amber-100/70">{t}</span>)}
        </div>
      </div>

      <div className="mt-8">
        <SectionHeader kicker="VISUAL STORYTELLING" title="Screenshot → Observation → Afterward → Learning" desc="Each case keeps the screenshot primary and separates what was known from what happened after — no hindsight bias." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {observations.map(o=> <ObservationCard key={o.slug} o={o} />)}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-amber-500/15 bg-black/30 p-5 text-xs leading-5 text-zinc-400">
        <div className="font-display text-sm font-medium text-white">Regulatory position & disclaimer</div>
        <p className="mt-2">I am a private investor, not a SEBI-registered adviser. Educational knowledge-sharing only. Not personalized advice. Historical observations do not guarantee future outcomes.</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact?intent=market-insight" className="rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold text-black hover:bg-amber-400">Explore the Knowledge Program → Enquire</Link>
        <Link href="/" className="rounded-full border border-[#C9A86A]/20 px-6 py-3 text-xs font-semibold text-[#E8D5B5] hover:bg-[#C9A86A]/10">Back to portfolio</Link>
      </div>
    </div>
  );
}
