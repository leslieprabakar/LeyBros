import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CircularBadge } from "@/components/ui/CircularBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* emerald + gold radial bg */}
      <div className="absolute inset-0 -z-10 bg-[#081410]" />
      <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(700px 500px at 20% 0%, rgba(201,168,106,0.10), transparent), radial-gradient(600px 400px at 90% 30%, rgba(16,55,39,0.6), transparent)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* subtle marble vein top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-10 sm:pt-14 pb-10">
        {/* top kicker */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.18em] text-[#C9A86A]/80">
          <span>✦</span> WEB & AI CREATIVE PRACTICE <span className="hidden sm:inline text-zinc-600">—</span> <span className="text-zinc-400">ENTERPRISE ENGINEERING • VIBE CODING • AI VISUALS</span>
          <span className="ml-auto hidden sm:inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/20 bg-[#C9A86A]/10 px-3 py-1 text-[10px] tracking-[0.14em] text-[#E8D5B5]">● AVAILABLE FOR PROJECTS</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          {/* Left: headline */}
          <div>
            <h1 className="leading-[0.9]">
              <span className="block font-display text-[44px] sm:text-[68px] font-light tracking-tight text-[#E8D5B5]">LEYBROS</span>
              <span className="block font-display text-[44px] sm:text-[68px] font-semibold tracking-tight text-[#C9A86A] -mt-2">PRIVATE LTD.</span>
              <span className="block mt-3 font-script text-[28px] sm:text-[32px] text-[#C9A86A]/90 leading-none">A freelance technology</span>
              <span className="block font-display text-[18px] sm:text-[22px] font-light tracking-[0.18em] text-zinc-400 mt-1"> & AI CREATIVE PRACTICE</span>
            </h1>
            <p className="mt-5 max-w-xl text-[14px] leading-7 text-zinc-400">
              I build websites & web apps that rank, create AI-driven visuals, video & 3D that sell, and separately share stock-market observations as education — not a service. One practice, two distinct lanes built on enterprise engineering.
            </p>
            <p className="mt-3 font-script text-[18px] text-[#C9A86A]/70">Leslie — Former Software Engineer, Atos → LTM → TCS</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/build" className="rounded-full bg-[#C9A86A] px-6 py-3 text-xs font-semibold tracking-wide text-[#081410] hover:bg-[#D4B78A] transition">VIEW PORTFOLIO →</Link>
              <Link href="/contact" className="rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/5 px-6 py-3 text-xs font-semibold tracking-wide text-[#E8D5B5] hover:bg-[#C9A86A]/10 transition">BOOK A CALL</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
              <div className="rounded-xl border border-[#C9A86A]/10 bg-[#10201A]/60 p-3">
                <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">BUILD</div>
                <div className="mt-1 text-sm text-white">Websites • Webapps • SEO</div>
                <div className="text-[11px] text-zinc-500">Vibe coding • performance</div>
              </div>
              <div className="rounded-xl border border-[#C9A86A]/10 bg-[#10201A]/60 p-3">
                <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">CREATE</div>
                <div className="mt-1 text-sm text-white">AI Art • Video • 3D</div>
                <div className="text-[11px] text-zinc-500">Product • Arch • Ads</div>
              </div>
              <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-3">
                <div className="text-[11px] tracking-[0.14em] text-amber-300">OBSERVE</div>
                <div className="mt-1 text-sm text-white">Market notes</div>
                <div className="text-[11px] text-zinc-500">Education only</div>
              </div>
            </div>

            {/* badges row */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="gold">Former Software Engineer</Badge>
              <Badge>Atos Syntel → LTM Limited → TCS</Badge>
              <Badge variant="build">Vibe Coding</Badge>
              <Badge variant="create">AI Creatives</Badge>
              <Badge variant="observe">Private Investor</Badge>
            </div>
          </div>

          {/* Right: arch placeholder + badge */}
          <div className="relative">
            {/* gold arch */}
            <div className="relative overflow-hidden rounded-[24px] border border-[#C9A86A]/15 bg-gradient-to-b from-[#123727] to-[#081410] p-6 sm:p-8 min-h-[480px] flex flex-col">
              {/* arch outline SVG */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-4 rounded-t-[220px] rounded-b-[16px] border border-[#C9A86A]/20" />
                <div className="absolute top-6 right-6 h-20 w-20 rounded-full border border-[#C9A86A]/10" />
              </div>
              {/* placeholder content */}
              <div className="relative flex-1 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/20 grid place-items-center text-[#C9A86A] text-xl">LB</div>
                  <div className="mt-4 font-display text-lg text-[#E8D5B5]">Photo of Leslie</div>
                  <p className="mt-2 text-xs leading-5 text-zinc-400 max-w-[240px]">Drop your photo to <code className="text-[#C9A86A]">public/brand/leslie-hero.webp</code> — arch will frame it automatically.</p>
                  <div className="mt-4 inline-flex rounded-full border border-dashed border-[#C9A86A]/30 px-4 py-2 text-[11px] tracking-wide text-zinc-400">Awaiting asset — integration ready</div>
                </div>
              </div>

              {/* circular badge absolute */}
              <div className="absolute bottom-6 right-6 hidden sm:block">
                <CircularBadge text="BUILD • CREATE • OBSERVE • " />
              </div>

              {/* evolution */}
              <div className="relative mt-6 rounded-xl border border-[#C9A86A]/10 bg-black/30 p-4 backdrop-blur">
                <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">EVOLUTION</div>
                <div className="mt-3 space-y-2.5 text-xs">
                  {[
                    ["Former Software Engineer", "Enterprise foundation"],
                    ["Freelancer — Vibe Coding", "Websites & SEO"],
                    ["AI Creative", "Art / Video / 3D / UGC"],
                    ["Private Investor", "Micro & small-cap observation"],
                  ].map(([t,s])=>(
                    <div key={t} className="flex gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A86A]" />
                      <div><div className="text-white">{t}</div><div className="text-zinc-500">{s}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* what viewers find first */}
            <div className="mt-4 rounded-2xl border border-[#C9A86A]/10 bg-[#10201A]/80 p-4">
              <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">WHAT VIEWERS FIND FIRST</div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-zinc-300">
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
