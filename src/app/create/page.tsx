import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { createProjects } from "@/data/projects";
import Link from "next/link";

export const metadata = { title: "Create — AI Art, Video, 3D, Ads", description: "Create lane: AI image enhancement & generation, video, 3D visualization, product/architecture, UGC ads." };

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="CREATE — INPUT → TRANSFORMATION → FINAL" title="AI art, video, 3D, advertising." desc="Large visuals do the explaining. Hover, lightbox, before/after — the craft is the caption." />
      <div className="mt-6 flex flex-wrap gap-2 text-xs">
        {["IMAGE","ENHANCEMENT","PRODUCT","ARCHITECTURE","CINEMATIC","ADVERTISING","VIDEO","3D"].map(t=> <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">{t}</span>)}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {createProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-xs tracking-[0.14em] text-zinc-400">IMAGE QUALITY</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">High-res, sharp, correct proportions & perspective, natural crop, photoreal where needed. No distortion, no random text, no spelling errors. Your original work is not modified unnecessarily.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-xs tracking-[0.14em] text-zinc-400">VIDEO / 3D META</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">Thumbnails, duration, aspect (9:16/16:9/1:1), AI workflow, my contribution — shown crisply without overloading the interface.</p>
        </div>
      </div>

      <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Enquire — Need visuals / video / 3D?</Link>
    </div>
  );
}
