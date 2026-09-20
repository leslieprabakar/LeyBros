import { SectionHeader } from "@/components/ui/SectionHeader";
import { ObservationCard } from "@/components/observe/ObservationCard";
import { observations } from "@/data/observations";
import Link from "next/link";

export const metadata = { title: "Observe — Stock-Market Knowledge Sharing", description: "Separate educational knowledge-sharing based on private investing observation. Not SEBI-registered, not advice." };

export default function ObservePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6">
        <div className="text-[11px] tracking-[0.18em] text-amber-300">OBSERVE — PRIVATE INVESTOR • EDUCATION ONLY</div>
        <h1 className="mt-2 text-[26px] sm:text-[32px] font-semibold text-white leading-tight">Stock-market knowledge sharing / mentorship.</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">Not a freelance service. Not a tip service. Discussion + screenshots + charts + explanations + practical knowledge sharing. No PDFs/ebooks, no buy/sell calls, no targets.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {["Market observation","Price action","Chart reading","Volume","Delivery data","Moving averages","Breakouts","Micro/small-cap (~₹2,000 cr & below)","Setups","Risk awareness","Psychology","Historical analysis"].map(t=> <span key={t} className="rounded-full border border-amber-500/20 bg-black/20 px-3 py-1 text-amber-100/80">{t}</span>)}
        </div>
      </div>

      <div className="mt-8">
        <SectionHeader kicker="VISUAL STORYTELLING" title="Screenshot → Observation → Afterward → Learning" desc="Each case study keeps the screenshot primary and clearly separates what was known at the time from what happened subsequently — no hindsight bias." />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {observations.map(o=> <ObservationCard key={o.slug} o={o} />)}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-amber-500/20 bg-black/40 p-5 text-xs leading-5 text-zinc-400">
        <div className="text-sm font-semibold text-white">Regulatory position & disclaimer</div>
        <p className="mt-2">I am a private investor. I am not a SEBI-registered investment adviser, research analyst, licensed adviser, or portfolio manager. Content reflects personal observations and experience for educational knowledge-sharing. It is not personalized investment advice. Participants should conduct their own research and make their own decisions. Historical observations do not guarantee future outcomes. No guaranteed returns, multibagger guarantees, or profit promises are offered.</p>
        <p className="mt-2">For now, learning is through discussion, visuals, screenshots, charts, explanations, and practical sharing — no document packages, PDFs, or research reports.</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact?intent=observe" className="rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold text-black hover:bg-amber-400">Explore the Knowledge Program → Enquire</Link>
        <Link href="/" className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/10">Back to portfolio</Link>
      </div>
    </div>
  );
}
