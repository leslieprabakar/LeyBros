import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { createProjects } from "@/data/projects";
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
      <p className="mt-3 text-center text-[11px] text-zinc-500">Value-based pricing — Enhance ₹5,999 / 20 images (≈₹300/image) • Cinematic ₹14,999 / campaign • Respects craft, stays affordable</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {createProjects.map(p=> <ProjectCard key={p.slug} p={p} />)}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">IMAGE QUALITY</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">High-res, sharp, correct proportions & perspective, natural crop, photoreal where needed. No distortion, no random text.</p>
        </div>
        <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">VIDEO / 3D META</div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">Thumbnails, duration, aspect (9:16/16:9/1:1), AI workflow, my contribution — shown crisply.</p>
        </div>
      </div>

      <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#C9A86A] px-6 py-2.5 text-xs font-semibold text-[#081410] hover:bg-[#D4B78A]">Enquire — Need visuals / video / 3D? →</Link>
    </div>
  );
}
