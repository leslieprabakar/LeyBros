import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export const metadata = { title: "About — Leslie Prabakar | 8 Years Software + Decade Investor", description: "B.Tech IT First Class Distinction, TCS/L&T Infotech/Syntel, LAPIZ Harvard alt-text, Freelance AI Engineer (VibeCode), decade+ private investor — Stepper strategy." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="ABOUT — LESLIE PRABAKAR RUPHAS VANATHURAJ" title="8 years engineering. Harvard-grade accessibility. Decade+ market observation." desc="From enterprise Java to vibe coding, from alt-text for Harvard to AI video — one continuous practice. No invented dates, only documented work." />

      {/* Intro + Education */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 sm:p-8">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">INTRO</div>
          <h3 className="mt-2 font-display text-[22px] font-medium text-white leading-tight">LeyBros Private Ltd. — freelance technology & AI creative practice.</h3>
          <p className="mt-3 text-[15px] leading-7 text-zinc-300">
            IT professional with 8 years industry experience, including 3.5 years in Java/J2EE web application development with strong Struts framework expertise. Project Lead, Developer cum Tester. Exposure to Data Warehousing & BI, production support tools, automation testing (QTP 9.2 / QC). Today: vibe coding (VS Code / OpenCode), Next.js + Tailwind + Supabase, plus AI image/video/3D.
          </p>
          <div className="mt-6 rounded-xl border border-[#C9A86A]/15 bg-[#081410] p-4">
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">EDUCATION</div>
            <div className="mt-2 text-[15px] font-medium text-white">{site.education.degree}</div>
            <div className="text-[14px] text-zinc-300">{site.education.college}</div>
            <div className="mt-1 inline-flex rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/20 px-3 py-1 text-[12px] text-[#E8D5B5]">{site.education.distinction}</div>
          </div>
          <div className="mt-6 space-y-2 text-[14px]">
            <div className="flex gap-3"><span className="text-zinc-500 w-20">BUILD</span><span className="text-white">Enterprise → Vibe coding → Websites / SEO / Webapps</span></div>
            <div className="flex gap-3"><span className="text-[#C9A86A] w-20">CREATE</span><span className="text-white">AI art / enhancement / video / 3D / UGC + Alt-text (Harvard)</span></div>
            <div className="flex gap-3"><span className="text-amber-300 w-20">OBSERVE</span><span className="text-white">Decade+ private investor — Stepper strategy (automated)</span></div>
          </div>
          <p className="mt-4 font-script text-[20px] text-[#C9A86A]/70">Leslie Prabakar — +91-99625 34351 • LesliePrabakar@gmail.com</p>
        </div>

        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-gradient-to-b from-[#10201A] to-[#0d1a14] p-6 sm:p-8">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">PROFESSIONAL ORGANIZATIONS</div>
          <div className="mt-4 relative pl-6 border-l border-[#C9A86A]/15 space-y-5">
            {site.timeline.map(t=>(
              <div key={t.org} className="relative">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-[#C9A86A] border-2 border-[#10201A]" />
                <div className="text-[15px] font-medium text-white">{t.org}</div>
                <div className="text-[13px] text-zinc-400">{t.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-amber-500/15 bg-amber-500/[0.04] p-4 text-[13px] leading-6 text-zinc-400">
            <span className="text-amber-200">Note:</span> L&T Infotech Ltd. (LTM Limited) — not LTIMindtree. All clients and roles as documented.
          </div>
          <div className="mt-6">
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">RECOGNITIONS</div>
            <ul className="mt-2 space-y-1.5 text-[13px] text-zinc-300 list-disc pl-5">
              {site.recognitions.map(r=> <li key={r}>{r}</li>)}
            </ul>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#C9A86A] px-7 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">Work with me →</Link>
        </div>
      </div>

      {/* Stock expertise */}
      <div className="mt-6 rounded-[16px] border border-amber-500/15 bg-gradient-to-b from-amber-500/[0.06] to-[#10201A]/40 p-6 sm:p-8">
        <div className="text-[13px] tracking-[0.18em] text-amber-300">STOCK MARKET — PRIVATE INVESTOR</div>
        <h3 className="mt-2 font-display text-[20px] font-medium text-white">{site.stock.summary}</h3>
        <p className="mt-2 text-[13px] text-amber-200/70">Proprietary Stepper strategy | Automated both Fundamentals & Technicals • Education only, not SEBI-registered, no advice.</p>
        <ul className="mt-4 space-y-2 text-[14px] text-zinc-300 list-disc pl-5">
          {site.stock.bullets.map(b=> <li key={b}>{b}</li>)}
        </ul>
        <p className="mt-3 text-[12px] text-zinc-500">EOD Bhavcopy, series-wise & band-shift modules, watchlist generation — built for personal research, shared as learning.</p>
      </div>

      {/* Skills */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">SKILLS & EXPERIENCE SUMMARY</div>
          <ul className="mt-3 space-y-2 text-[14px] leading-6 text-zinc-300 list-disc pl-5">
            <li>IT professional with 8 years industry, 3.5 years Java/J2EE web apps, Struts mastery.</li>
            <li>QTP 9.2 (6 months, EZk app, John Hancock via Syntel) + Quality Center (2 months, PSW app).</li>
            <li>DW & BI concepts, production support tools.</li>
            <li>Freelance ALT Text Writer for LAPIZ — Harvard publications, Section 508 compliance.</li>
            <li>Freelance AI Engineer — Vibe coding (VS Code/OpenCode), Minimax M2.5, DeepSeek V4 Flash, Hy3, Ling 2.6 Flash, Big Pickle.</li>
            <li>Strong communication, collaboration, interpersonal skills.</li>
          </ul>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">SOFTWARE & TOOLS</div>
          <div className="mt-3 space-y-3 text-[13px]">
            <div><span className="text-zinc-500">Languages:</span> <span className="text-zinc-300">{site.skills.languages.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Frameworks:</span> <span className="text-zinc-300">{site.skills.frameworks.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Products:</span> <span className="text-zinc-300">{site.skills.products.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Databases:</span> <span className="text-zinc-300">{site.skills.databases.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Servers:</span> <span className="text-zinc-300">{site.skills.servers.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Modern:</span> <span className="text-zinc-300">{site.skills.modern.join(" • ")}</span></div>
            <div><span className="text-zinc-500">AI Models:</span> <span className="text-[#E8D5B5]">{site.skills.ai.join(" • ")}</span></div>
            <div><span className="text-zinc-500">Online tools:</span> <span className="text-zinc-300">Screener.in • ChartInk • TradingView • AmiBroker 5.70 (AFL) • Excel Live helper • Selenium</span></div>
          </div>
        </div>
      </div>

      {/* Alt-text */}
      <div className="mt-6 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 sm:p-8">
        <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">ALT TEXT — LAPIZ / HARVARD</div>
        <h3 className="mt-2 font-display text-[18px] font-medium text-white">Freelance Accessibility Specialist — meaningful descriptions for equal access.</h3>
        <p className="mt-2 text-[14px] leading-6 text-zinc-300">Developed alt-text for charts, graphs, illustrations, diagrams, scientific figures, equations and educational visuals in compliance with Section 508, for screen readers and assistive tech — preserving context and educational value, collaborating with publishing teams at scale.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-[12px]">
          {["ALT Text Writing","Section 508","Screen Reader Accessibility","Chart/Graph/Diagram Interpretation","Image Analysis","Technical Writing"].map(t=>(
            <span key={t} className="rounded-full border border-[#C9A86A]/15 bg-[#081410] px-3 py-1 text-zinc-300">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
