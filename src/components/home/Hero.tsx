import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CircularBadge } from "@/components/ui/CircularBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#081410]" />
      <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(700px 500px at 20% 0%, rgba(201,168,106,0.10), transparent), radial-gradient(600px 400px at 90% 30%, rgba(16,55,39,0.6), transparent)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pt-10 sm:pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-[13px] tracking-[0.18em] text-[#C9A86A]/80">
          <span>✦</span> LESLIE PRABAKAR — 8 YEARS • B.TECH IT DISTINCTION <span className="hidden sm:inline text-zinc-600">—</span> <span className="text-zinc-400">TCS • L&T INFOTECH • HARVARD/LAPIZ</span>
          <span className="ml-auto hidden sm:inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/20 bg-[#C9A86A]/10 px-3 py-1.5 text-[12px] tracking-[0.14em] text-[#E8D5B5]">● AVAILABLE FOR PROJECTS</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div>
            <h1 className="leading-[0.9]">
              <span className="block font-display text-[48px] sm:text-[72px] font-light tracking-tight text-[#E8D5B5]">LESLIE</span>
              <span className="block font-display text-[48px] sm:text-[72px] font-semibold tracking-tight text-[#C9A86A] -mt-2">PRABAKAR</span>
              <span className="block mt-3 font-script text-[32px] sm:text-[36px] text-[#C9A86A]/90 leading-none">LeyBros Private Ltd.</span>
              <span className="block font-display text-[18px] sm:text-[22px] font-light tracking-[0.18em] text-zinc-400 mt-1">FREELANCE TECHNOLOGY & AI</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-8 text-zinc-300">
              Enterprise engineering (8 years at TCS, L&T Infotech, Syntel) now applied to vibe-coded websites, AI visuals and video/3D that rank and sell. Harvard/LAPIZ alt-text heritage means accessibility is default. Private markets observed separately — education only.
            </p>
            <p className="mt-3 font-script text-[18px] text-[#C9A86A]/70">B.Tech IT — First Class with Distinction • IFET/Anna University</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/build" className="rounded-full bg-[#C9A86A] px-7 py-3.5 text-[14px] font-semibold tracking-wide text-[#081410] hover:bg-[#D4B78A] transition">VIEW PORTFOLIO →</Link>
              <Link href="/contact" className="rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/5 px-7 py-3.5 text-[14px] font-semibold tracking-wide text-[#E8D5B5] hover:bg-[#C9A86A]/10 transition">BOOK A CALL</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
              <div className="rounded-xl border border-[#C9A86A]/10 bg-[#10201A]/60 p-4">
                <div className="text-[13px] tracking-[0.14em] text-[#C9A86A]">BUILD</div>
                <div className="mt-1 text-[15px] text-white">Websites • SEO</div>
                <div className="text-[13px] text-zinc-400">Next.js • Performance</div>
              </div>
              <div className="rounded-xl border border-[#C9A86A]/10 bg-[#10201A]/60 p-4">
                <div className="text-[13px] tracking-[0.14em] text-[#C9A86A]">CREATE</div>
                <div className="mt-1 text-[15px] text-white">AI Visuals + Alt-text</div>
                <div className="text-[13px] text-zinc-400">Harvard Section 508</div>
              </div>
              <div className="rounded-xl border border-amber-500/15 bg-amber-500/[0.06] p-4">
                <div className="text-[13px] tracking-[0.14em] text-amber-300">OBSERVE</div>
                <div className="mt-1 text-[15px] text-white">Decade+ investor</div>
                <div className="text-[13px] text-zinc-500">Stepper • Education</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="gold">B.Tech IT — Distinction</Badge>
              <Badge>TCS • L&T Infotech • Syntel • Harvard/LAPIZ</Badge>
              <Badge variant="build">Vibe Coding</Badge>
              <Badge variant="observe">Stepper — Private</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] border border-[#C9A86A]/15 bg-gradient-to-b from-[#123727] to-[#081410] p-6 sm:p-8 min-h-[480px] flex flex-col">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-4 rounded-t-[220px] rounded-b-[16px] border border-[#C9A86A]/20" />
                <div className="absolute top-6 right-6 h-20 w-20 rounded-full border border-[#C9A86A]/10" />
              </div>
              <div className="relative flex-1 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/20 grid place-items-center text-[#C9A86A] text-xl">LB</div>
                  <div className="mt-4 font-display text-xl text-[#E8D5B5]">Photo of Leslie</div>
                  <p className="mt-2 text-[14px] leading-6 text-zinc-400 max-w-[260px]">Drop your photo to <code className="text-[#C9A86A]">public/brand/leslie-hero.webp</code></p>
                  <div className="mt-4 inline-flex rounded-full border border-dashed border-[#C9A86A]/30 px-4 py-2 text-[13px] tracking-wide text-zinc-400">Awaiting asset — integration ready</div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 hidden sm:block">
                <CircularBadge text="BUILD • CREATE • OBSERVE • " />
              </div>
              <div className="relative mt-6 rounded-xl border border-[#C9A86A]/10 bg-black/30 p-4 backdrop-blur">
                <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">AT A GLANCE</div>
                <div className="mt-3 space-y-2 text-[14px]">
                  {[
                    ["B.Tech IT — IFET/Anna Univ", "First Class with Distinction"],
                    ["8 years — Project Lead", "TCS • L&T • Syntel"],
                    ["Harvard/LAPIZ", "Section 508 Alt-Text Specialist"],
                    ["Freelance AI Engineer", "Minimax M2.5 • DeepSeek V4 Flash"],
                  ].map(([t,s])=>(
                    <div key={t} className="flex gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A86A]" />
                      <div><div className="text-white">{t}</div><div className="text-zinc-400 text-[13px]">{s}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[#C9A86A]/10 bg-[#10201A]/80 p-5">
              <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">WHAT CLIENTS HIRE FOR</div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-[14px] text-zinc-300">
                <li>✓ Ranking website?</li><li>✓ Accessible build?</li>
                <li>✓ Product 3D / enhance?</li><li>✓ AI video / reel?</li>
                <li>✓ VibeCoded webapp?</li><li>✓ Stepper learning?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
