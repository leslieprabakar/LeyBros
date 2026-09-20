import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Triptych } from "@/components/home/Triptych";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ObservationCard } from "@/components/observe/ObservationCard";
import { projects } from "@/data/projects";
import { observations } from "@/data/observations";

export default function Home() {
  return (
    <div>
      <Hero />
      <Triptych />

      {/* Freelance services */}
      <section id="services" className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <SectionHeader
          kicker="FREELANCER — CLIENT SERVICES"
          title="Hire for what you need, discover what else is possible."
          desc="Every engagement starts from engineering fundamentals and ends with assets that perform — in the browser, in search, on the feed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[
            { t:"Website Development", d:"Responsive sites, web apps, vibe-coded builds. UI/UX implemented to spec.", href:"/build" },
            { t:"SEO", d:"On-page, technical, structure, metadata, performance, Search Console readiness.", href:"/build" },
            { t:"AI Art", d:"Enhancement, photoreal renders, product & architectural visualization.", href:"/create" },
            { t:"AI Video / 3D", d:"Cinematic video, exploded views, image-to-video, promo cuts.", href:"/create" },
            { t:"Advertising / UGC", d:"Product ads, reels, shorts, cinematic creatives that feel native.", href:"/create" },
          ].map(c=>(
            <Link key={c.t} href={c.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="text-sm font-semibold text-white">{c.t}</div>
              <p className="mt-2 text-xs leading-5 text-zinc-400">{c.d}</p>
              <div className="mt-3 text-xs font-semibold text-white">Explore →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Portfolio — visually dominant */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <SectionHeader
          kicker="PORTFOLIO — VISUAL DOMINANCE"
          title="The work sells the capability."
          desc="Large visuals, hover reveals, filters. Only categories with real material will show published status — everything else stays as a clean placeholder awaiting your drop."
          action={<Link href="/create" className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white hover:bg-white/10">Filter by type</Link>}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0,6).map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/build" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">View BUILD case studies</Link>
          <Link href="/create" className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white">View CREATE visuals</Link>
        </div>
        <p className="mt-3 text-[11px] text-zinc-500">Tip: drop images/videos into <code className="px-1 py-0.5 bg-white/10 rounded">/public/portfolio/</code> and flip <code>status: placeholder → published</code> in <code>src/data/projects.ts</code> — no code changes elsewhere.</p>
      </section>

      {/* About strip + timeline */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-[11px] tracking-[0.18em] text-zinc-400">ABOUT — PROFESSIONAL STORY</div>
            <h3 className="mt-2 text-xl font-semibold text-white">From enterprise code to AI visuals to market observation.</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Former software engineer at enterprise systems. Now freelancing through LeyBros Private Ltd. across vibe coding, websites, SEO, and AI-enabled creative — product, architecture, ads, UGC. Private investor separately; stock-market knowledge sharing is education-only and never a freelance upsell.
            </p>
            <Link href="/about" className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Read the full evolution</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
            <div className="text-[11px] tracking-[0.18em] text-zinc-400">TIMELINE — NO INVENTED DATES</div>
            <div className="mt-4 space-y-4">
              {[
                ["Atos Syntel", "Enterprise foundation"],
                ["LTM Limited", "LTM Limited — not LTIMindtree"],
                ["Tata Consultancy Services (TCS)", "Large-scale delivery"],
                ["LeyBros Private Ltd. — Freelancer", "Build → Create → Observe"],
              ].map(([org, note])=>(
                <div key={org} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-white" />
                  <div><div className="text-sm text-white">{org}</div><div className="text-xs text-zinc-500">{note}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stock-market — separated */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="rounded-[24px] border border-amber-500/20 bg-gradient-to-b from-amber-500/[0.08] to-transparent p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-[11px] tracking-wide text-amber-200">STOCK-MARKET — SEPARATE</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">Education only</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">Not SEBI-registered</span>
          </div>
          <h2 className="mt-4 text-[22px] sm:text-[28px] font-semibold text-white">Stock-market knowledge sharing — practical notes, not calls.</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">
            For learners interested in micro/small-cap observation, price action, volume/delivery, moving averages, breakouts. Screenshots are evidence; explanation stays crisp and separates what was known from what happened after.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {observations.map(o=> <ObservationCard key={o.slug} o={o} />)}
          </div>
          <div className="mt-6 rounded-xl border border-amber-500/20 bg-black/30 p-4 text-xs leading-5 text-zinc-400">
            <strong className="text-zinc-200">Disclaimer:</strong> I am a private investor, not a SEBI-registered investment adviser or research analyst. Content is educational knowledge-sharing based on personal observation and experience. It is not personalized investment advice. Please do your own research and make your own decisions; historical observations do not guarantee future outcomes. No BUY/SELL targets or return guarantees are offered.
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/observe" className="rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold text-black hover:bg-amber-400">Explore the Knowledge Program →</Link>
            <Link href="/contact?intent=observe" className="rounded-full border border-amber-500/30 px-6 py-3 text-xs font-semibold text-amber-200 hover:bg-amber-500/10">Enquire — Knowledge Program</Link>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-[11px] tracking-[0.18em] text-zinc-400">NEED A WEBSITE / SEO / VISUALS?</div>
            <div className="mt-2 text-lg font-semibold text-white">Freelance client enquiry</div>
            <p className="mt-2 text-sm text-zinc-400">Tell me the outcome you want — site, ranking, visual, reel. I’ll map the path: Build or Create.</p>
            <Link href="/contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Start freelance enquiry</Link>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6">
            <div className="text-[11px] tracking-[0.18em] text-amber-300">CURIOUS ABOUT MARKETS?</div>
            <div className="mt-2 text-lg font-semibold text-white">Knowledge program enquiry</div>
            <p className="mt-2 text-sm text-zinc-400">Separate track — discussion, charts, screenshots, practical notes. No docs, no promises.</p>
            <Link href="/contact?intent=observe" className="mt-4 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-xs font-semibold text-amber-200">Enquire — Knowledge</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
