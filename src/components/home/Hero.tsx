import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_20%_0%,rgba(168,85,247,0.15),transparent),radial-gradient(700px_500px_at_90%_20%,rgba(14,165,233,0.14),transparent),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))] " />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
        <div className="flex flex-wrap gap-2">
          <Badge>Former Software Engineer</Badge>
          <Badge>Atos Syntel → LTM Limited → TCS</Badge>
          <Badge variant="build">Vibe Coding</Badge>
          <Badge variant="create">AI Creatives</Badge>
          <Badge variant="observe">Private Investor</Badge>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div>
            <h1 className="text-[32px] sm:text-[46px] font-semibold tracking-tight leading-[0.95]">
              <span className="block text-zinc-100">LEYBROS PRIVATE LTD.</span>
              <span className="block text-zinc-400 font-light">A freelance technology &</span>
              <span className="block bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">AI creative practice</span>
              <span className="block text-zinc-400 font-light text-[22px] sm:text-[28px] mt-2">built on enterprise engineering.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-zinc-400">
              I build websites & web apps that rank, create AI-driven visuals, video & 3D that sell, and separately share stock-market observations as education — not a service. One practice, two distinct lanes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/build" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200">Need a website → Build</Link>
              <Link href="/create" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Need visuals → Create</Link>
              <Link href="/observe" className="rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20">Explore Knowledge → Observe</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl text-xs">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[11px] tracking-[0.14em] text-zinc-400">BUILD</div>
                <div className="mt-1 text-sm text-white">Websites • Webapps • SEO</div>
                <div className="text-zinc-500">Vibe coding • performance</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="text-[11px] tracking-[0.14em] text-zinc-400">CREATE</div>
                <div className="mt-1 text-sm text-white">AI Art • Video • 3D</div>
                <div className="text-zinc-500">Product • Arch • Ads</div>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-3">
                <div className="text-[11px] tracking-[0.14em] text-amber-300">OBSERVE</div>
                <div className="mt-1 text-sm text-white">Market notes</div>
                <div className="text-zinc-500">Education only</div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-zinc-500 max-w-xl">
              Stock-market content is <span className="text-zinc-300">educational knowledge-sharing</span> based on personal observation. Not SEBI-registered, not investment advice. Historical ≠ future.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 sm:p-6 backdrop-blur">
              <div className="text-xs tracking-[0.14em] text-zinc-400">EVOLUTION</div>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  ["Former Software Engineer", "Enterprise foundation"],
                  ["Freelancer", "Websites & vibe coding"],
                  ["AI-Enabled Creative", "Art / Video / 3D / UGC"],
                  ["Private Investor", "Micro/small-cap observation"],
                  ["Knowledge Sharer", "Mentorship — education only"],
                ].map(([t,s])=>(
                  <div key={t} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <div><div className="text-white">{t}</div><div className="text-xs text-zinc-500">{s}</div></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <Link href="/contact" className="rounded-xl bg-white text-black px-4 py-3 text-center font-semibold">Hire — Freelance</Link>
                <Link href="/contact?intent=observe" className="rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 px-4 py-3 text-center font-semibold">Ask — Knowledge</Link>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-xs tracking-[0.14em] text-zinc-400">WHAT VIEWERS FIND FIRST</div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-300">
                <li>✓ Responsive website?</li><li>✓ Product 3D?</li>
                <li>✓ SEO-ready build?</li><li>✓ AI video / reel?</li>
                <li>✓ Enhance an image?</li><li>✓ Market notes?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
