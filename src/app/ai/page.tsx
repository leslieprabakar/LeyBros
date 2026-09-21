import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { createProjects, automateProjects, researchProjects, placeholderProjects } from "@/data/projects";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import { PricingCard, createTiers } from "@/components/ui/PricingCard";
import Link from "next/link";

export const metadata = { title: "AI — Art, Video, 3D, Ads", description: "AI lane: image enhancement & generation, video, 3D visualization, product/architecture, UGC ads." };

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="AI — INPUT → TRANSFORMATION → FINAL" title="AI art, video, 3D, advertising." desc="Large visuals do the explaining. Hover, lightbox, before/after — the craft is the caption." />
      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {["IMAGE","ENHANCEMENT","PRODUCT","ARCHITECTURE","CINEMATIC","ADVERTISING","VIDEO","3D"].map(t=> <span key={t} className="rounded-full border border-[#C9A86A]/12 bg-[#10201A]/60 px-3 py-1 text-zinc-300">{t}</span>)}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {createTiers.map(t=> <PricingCard key={t.name} tier={t} />)}
      </div>
      <p className="mt-3 text-center text-[11px] text-zinc-500">₹5,999 / 20 images (≈₹300/image) • Cinematic ₹14,999 / campaign</p>

      <div className="mt-10">
        <h3 className="font-display text-xs tracking-[0.14em] text-[#C9A86A]">AI — PUBLISHED</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...createProjects.filter(p=>p.status==="published"), ...automateProjects.filter(p=>p.status==="published" && p.slug !== "iipa-auditor-automation")].map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        <h3 className="mt-8 font-display text-xs tracking-[0.14em] text-zinc-500">RESEARCH — AmiBroker Desktop App Automation (links to Market Insight)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
        {createProjects.filter(p=>p.status==="placeholder").length>0 && <p className="mt-3 text-[11px] text-zinc-500">Upcoming visuals stay as placeholders — honest until asset drop.</p>}
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xs tracking-[0.14em] text-zinc-400">UPCOMING — Visual Concepts (Placeholders)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[16px] border border-dashed border-[#C9A86A]/20 bg-[#10201A]/40 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">CAMERA — ALT-Text Generator (Harvard University)</div>
          <p className="mt-2 text-[12px] leading-5 text-zinc-500">Add camera movement sets here — e.g. grid capture, pan, validation angles. Edit <code className="bg-white/10 px-1 rounded">src/data/projects.ts:111 meta.workflow</code> to populate table.</p>
          <div className="mt-2 text-[11px] text-zinc-600">Table placeholder — ready for your camera data</div>
        </div>
        <div className="rounded-[16px] border border-dashed border-[#C9A86A]/20 bg-[#10201A]/40 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">CAMERA — NEST Trading Terminal Automation</div>
          <p className="mt-2 text-[12px] leading-5 text-zinc-500">Add camera movement sets here — e.g. ListView scan, zoom, capture. Edit <code className="bg-white/10 px-1 rounded">src/data/projects.ts:136 meta.workflow</code>.</p>
          <div className="mt-2 text-[11px] text-zinc-600">Table placeholder — ready for your camera data</div>
        </div>
        <div className="rounded-[16px] border border-dashed border-[#C9A86A]/20 bg-[#10201A]/40 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">CAMERA — II*A Private Sector Office Work Automation</div>
          <p className="mt-2 text-[12px] leading-5 text-zinc-500">Add camera movement sets here — e.g. table scan, dropdown select, remarks. Edit <code className="bg-white/10 px-1 rounded">src/data/projects.ts:159 meta.workflow</code>.</p>
          <div className="mt-2 text-[11px] text-zinc-600">Table placeholder — ready for your camera data</div>
        </div>
        <div className="rounded-[16px] border border-dashed border-[#C9A86A]/20 bg-[#10201A]/40 p-5">
          <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">CAMERA — AmiBroker Desktop App Automation</div>
          <p className="mt-2 text-[12px] leading-5 text-zinc-500">Add camera movement sets here — e.g. chart pan, timeframe switch, AFL explore. Edit <code className="bg-white/10 px-1 rounded">src/data/projects.ts:182 meta.workflow</code>.</p>
          <div className="mt-2 text-[11px] text-zinc-600">Table placeholder — ready for your camera data</div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">IMAGE QUALITY</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">High-res, sharp, correct proportions & perspective, natural crop, photoreal where needed. No distortion, no random text.</p>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">VIDEO / 3D META</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">Every detail framed with intent — aspect, duration, workflow and contribution presented to show the craft behind each frame.</p>
        </div>
      </div>

      <div className="mt-10">
        <ComparisonMatrix highlight={[1,4,6]} />
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/contact" className="rounded-full bg-[#C9A86A] px-8 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">Enquire — Need visuals / video / 3D?</Link>
      </div>
    </div>
  );
}
