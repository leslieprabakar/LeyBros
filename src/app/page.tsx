import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Triptych } from "@/components/home/Triptych";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ObservationCard } from "@/components/observe/ObservationCard";
import { Marquee } from "@/components/ui/Marquee";
import { StatCounter } from "@/components/ui/StatCounter";
import { PricingCard, buildTiers, createTiers } from "@/components/ui/PricingCard";
import { projects } from "@/data/projects";
import { observations } from "@/data/observations";

export default function Home() {
  return (
    <div>
      <Hero />
      <Triptych />

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <StatCounter items={[
          { value: "10+", label: "YEARS ENGINEERING", sub: "Atos • LTM • TCS foundation" },
          { value: "40+", label: "PROJECTS DELIVERED", sub: "Websites, apps, creatives" },
          { value: "25+", label: "HAPPY CLIENTS", sub: "Startups to enterprises" },
          { value: "100%", label: "DEDICATION", sub: "One practice, distinct lanes" },
        ]} />
      </section>

      <Marquee items={["ATOS SYNTEL","LTM LIMITED","TCS","NEXT.JS","SUPABASE","TAILWIND","VERCEL","FIGMA","AI CREATIVES"]} />

      {/* Services — What I can help you with */}
      <section id="services" className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12">
        <SectionHeader
          kicker="SERVICES"
          title="What I can help you with"
          desc="Every engagement starts from engineering fundamentals and ends with assets that perform — in the browser, in search, on the feed."
          action={<Link href="/contact" className="hidden sm:inline-flex rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[14px] font-semibold text-[#E8D5B5] hover:bg-[#C9A86A]/10">LET&apos;S TALK →</Link>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: "◈", t:"UI/UX Design", d:"User-centered designs that are intuitive, modern and engaging." },
            { icon: "</>", t:"Web Development", d:"Responsive, fast and scalable websites using modern technologies." },
            { icon: "⬢", t:"Landing Pages", d:"High-converting landing pages that drive engagement and grow your business." },
            { icon: "◆", t:"Image Enhancement", d:"Photoreal product & architecture, upscale and enhancement." },
            { icon: "◎", t:"Video & 3D", d:"Cinematic video, exploded views, image-to-video promo cuts." },
            { icon: "✦", t:"SEO & Growth", d:"Technical SEO, structure, metadata, performance, Search Console." },
          ].map(c=>(
            <div key={c.t} className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5 hover:border-[#C9A86A]/20 transition">
              <div className="h-9 w-9 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A]/20 grid place-items-center text-[#C9A86A] text-[15px]">{c.icon}</div>
              <div className="mt-3 text-[16px] font-semibold text-white">{c.t}</div>
              <p className="mt-2 text-[14px] leading-6 text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-[#C9A86A]"><span>✦</span> SELECTED WORK</div>
            <h2 className="mt-2 font-display text-[30px] sm:text-[34px] font-medium text-white">A selection of my recent work</h2>
          </div>
          <Link href="/ai" className="hidden sm:inline-flex text-[14px] tracking-wide text-[#C9A86A] hover:text-[#E8D5B5]">EXPLORE ALL PROJECTS →</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0,6).map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/web" className="rounded-full bg-[#C9A86A] px-6 py-2.5 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">View WEB case studies</Link>
          <Link href="/ai" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[14px] font-semibold text-[#E8D5B5] hover:bg-[#C9A86A]/10">View AI visuals</Link>
        </div>
        <p className="mt-3 text-[13px] text-zinc-400">Tip: drop images into <code className="px-1.5 py-0.5 bg-white/10 rounded text-[12px]">/public/portfolio/</code> and flip <code className="text-[12px]">status: placeholder → published</code> in <code className="text-[12px]">src/data/projects.ts</code></p>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-6">
        <div className="rounded-[16px] border border-[#C9A86A]/10 bg-[#10201A]/40 p-6">
          <div className="text-center text-[13px] tracking-[0.18em] text-[#C9A86A]">SKILLS & TOOLS — TECHNOLOGIES I WORK WITH</div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[14px]">
            {["Figma","Adobe XD","Photoshop","Illustrator","HTML5","CSS3","JavaScript","React.js","Tailwind CSS","Next.js","Supabase","Git & GitHub","VS Code"].map(t=>(
              <span key={t} className="rounded-full border border-[#C9A86A]/10 bg-[#081410] px-3.5 py-1.5 text-zinc-300">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About + Timeline with giant numbers */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 text-[120px] font-display font-bold text-white/[0.03] leading-none">01</div>
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">ABOUT ME</div>
            <h3 className="mt-2 font-display text-[22px] sm:text-[26px] font-medium text-white leading-tight">Passionate about design,<br /><span className="text-[#C9A86A]">driven by purpose.</span></h3>
            <p className="mt-4 text-[16px] leading-7 text-zinc-300">
              I&apos;m a freelance technology & AI creative — former software engineer at Atos Syntel → LTM Limited → TCS. Now building through LeyBros Private Ltd.: vibe coding, websites, SEO, and AI-enabled creative — product, architecture, ads, UGC. Private investor separately; stock-market sharing is education-only.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-[14px]">
              <div className="rounded-xl bg-[#081410] border border-[#C9A86A]/10 p-3"><div className="text-[#C9A86A] font-medium">✓ Pixel-Perfect</div><div className="text-zinc-500 mt-1 text-[13px]">Clean, modern and user-focused</div></div>
              <div className="rounded-xl bg-[#081410] border border-[#C9A86A]/10 p-3"><div className="text-[#C9A86A] font-medium">✓ Clean Code</div><div className="text-zinc-500 mt-1 text-[13px]">Scalable, semantic</div></div>
              <div className="rounded-xl bg-[#081410] border border-[#C9A86A]/10 p-3"><div className="text-[#C9A86A] font-medium">✓ User-Centered</div><div className="text-zinc-500 mt-1 text-[13px]">Empathy & focus</div></div>
            </div>
            <Link href="/about" className="mt-6 inline-flex rounded-full bg-[#C9A86A] px-7 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">MORE ABOUT ME →</Link>
          </div>
          <div className="rounded-2xl border border-[#C9A86A]/12 bg-gradient-to-b from-[#10201A] to-[#0d1a14] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 text-[120px] font-display font-bold text-white/[0.03] leading-none">02</div>
            <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">TIMELINE — NO INVENTED DATES</div>
            <div className="mt-6 space-y-5">
              {[
                ["Atos Syntel", "Enterprise foundation"],
                ["LTM Limited", "LTM Limited — not LTIMindtree"],
                ["Tata Consultancy Services (TCS)", "Large-scale delivery"],
                ["LeyBros Private Ltd. — Freelancer", "Web → AI → Market Insight"],
              ].map(([org, note])=>(
                <div key={org} className="flex gap-3">
                  <div className="h-2 w-2 mt-2.5 rounded-full bg-[#C9A86A] shrink-0" />
                  <div><div className="text-[16px] text-white">{org}</div><div className="text-[13px] text-zinc-400">{note}</div></div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-[#C9A86A]/20 to-transparent" />
            <p className="mt-4 font-script text-[20px] text-[#C9A86A]/70">Leslie</p>
          </div>
        </div>
      </section>

      {/* How I bring ideas to life — 06 steps */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="text-center">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">PROCESS</div>
          <h2 className="mt-2 font-display text-[28px] font-medium text-white">How I bring ideas to life</h2>
        </div>
        <div className="mt-8 relative">
          <div className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent" />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["01","Discover","Understand your goals, audience and requirements."],
              ["02","Plan","Structure the project and create a clear roadmap."],
              ["03","Design","Craft intuitive interfaces with strategy & beauty."],
              ["04","Develop","Build clean, responsive and scalable solutions."],
              ["05","Deliver","Testing, optimizing and launching with care."],
              ["06","Support","Ongoing care & iterations for long-term success."],
            ].map(([n,t,d])=>(
              <div key={n} className="text-center">
                <div className="mx-auto h-11 w-11 rounded-full bg-[#C9A86A] text-[#081410] grid place-items-center text-[13px] font-bold">{n}</div>
                <div className="mt-3 text-[16px] font-semibold text-white">{t}</div>
                <p className="mt-1 text-[14px] leading-6 text-zinc-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — affordable */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12">
        <SectionHeader kicker="PRICING — AFFORDABLE & TRANSPARENT" title="Flexible packages for every stage" desc="Economical pricing for Indian startups, local businesses and creators. No hidden charges. GST extra." />
        <div className="mt-3 text-[14px] text-zinc-400">Affordable by design — compare: Starter less than a month&apos;s ad spend.</div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {buildTiers.map(t=> <PricingCard key={t.name} tier={t} />)}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 max-w-[720px] mx-auto">
          {createTiers.map(t=> <PricingCard key={t.name} tier={t} />)}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center text-[13px]">
          <span className="rounded-full border border-[#C9A86A]/15 px-3.5 py-1 text-zinc-300">Add-on: SEO Retainer ₹1,999/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3.5 py-1 text-zinc-300">Maintenance ₹999/mo</span>
          <span className="rounded-full border border-[#C9A86A]/15 px-3.5 py-1 text-zinc-300">Domain & hosting guidance included</span>
        </div>
      </section>

      {/* Stock-market — separated */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="rounded-[24px] border border-amber-500/15 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-amber-500/25 bg-amber-500/15 px-3.5 py-1.5 text-[13px] tracking-wide text-amber-200">STOCK-MARKET — SEPARATE</span>
            <span className="rounded-full border border-[#C9A86A]/10 px-3.5 py-1.5 text-[13px] text-zinc-300">Education only</span>
            <span className="rounded-full border border-[#C9A86A]/10 px-3.5 py-1.5 text-[13px] text-zinc-300">Not SEBI-registered</span>
          </div>
          <h2 className="mt-4 font-display text-[28px] sm:text-[32px] font-medium text-white">Stock-market knowledge sharing — practical notes, not calls.</h2>
          <p className="mt-2 max-w-3xl text-[16px] leading-7 text-zinc-300">
            For learners interested in micro/small-cap observation, price action, volume/delivery, moving averages, breakouts. Screenshots are evidence; explanation stays crisp.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {observations.map(o=> <ObservationCard key={o.slug} o={o} />)}
          </div>
          <div className="mt-6 rounded-xl border border-amber-500/15 bg-black/30 p-4 text-[14px] leading-6 text-zinc-400">
            <strong className="text-zinc-200">Disclaimer:</strong> Private investor, not SEBI-registered. Educational only. Not personalized advice. Historical ≠ future.
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/market-insight" className="rounded-full bg-amber-500 px-7 py-3.5 text-[14px] font-semibold text-black hover:bg-amber-400">Explore the Knowledge Program →</Link>
            <Link href="/contact?intent=market-insight" className="rounded-full border border-amber-500/25 px-7 py-3.5 text-[14px] font-semibold text-amber-200 hover:bg-amber-500/10">Enquire — Knowledge Program</Link>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
        <div className="rounded-[24px] border border-[#C9A86A]/15 bg-gradient-to-r from-[#10201A] to-[#0f241c] p-8 text-center">
          <div className="text-[13px] tracking-[0.18em] text-[#C9A86A]">LET&apos;S WORK TOGETHER</div>
          <h2 className="mt-2 font-display text-[28px] sm:text-[34px] font-medium text-white">Have a project in mind?<br /><span className="font-script text-[#C9A86A] font-normal">Let&apos;s create something amazing.</span></h2>
          <p className="mt-3 text-[16px] text-zinc-400">I&apos;m available for freelance and collaborations. Let&apos;s talk about your idea.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="rounded-full bg-[#C9A86A] px-8 py-3.5 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">SEND MESSAGE ✉</Link>
            <Link href="/contact" className="rounded-full border border-[#C9A86A]/25 px-8 py-3.5 text-[14px] font-semibold text-[#E8D5B5] hover:bg-[#C9A86A]/10">BOOK A CALL</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
