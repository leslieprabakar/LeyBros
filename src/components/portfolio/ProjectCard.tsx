import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ p }: { p: Project }) {
  const variant = p.category === "build" ? "build" as const : p.category === "create" ? "create" as const : "default" as const;
  const isPlaceholder = p.status === "placeholder";
  return (
    <div className="group overflow-hidden rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 hover:border-[#C9A86A]/20 hover:bg-[#123727]/50 transition">
      <div className="aspect-[16/10] relative bg-gradient-to-br from-[#10201A] to-[#081410] grid place-items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: p.category==="build" ? "radial-gradient(400px 200px at 30% 20%, rgba(14,165,233,0.15), transparent)" : "radial-gradient(400px 200px at 70% 20%, rgba(168,85,247,0.15), transparent)"}}/>
        {/* gold bottom line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
        <div className="relative text-center px-6">
          <div className="text-[13px] tracking-[0.16em] text-[#C9A86A]/70">{p.sub.toUpperCase()}</div>
          <div className="mt-2 font-display text-[15px] font-medium text-white line-clamp-2">{p.title}</div>
          {isPlaceholder && <div className="mt-2 inline-flex rounded-full border border-dashed border-[#C9A86A]/25 bg-black/40 px-3 py-1.5 text-[12px] text-zinc-400">Awaiting asset — integration ready</div>}
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={variant}>{p.category.toUpperCase()}</Badge>
          {isPlaceholder && <Badge variant="gold">Placeholder</Badge>}
        </div>
      </div>
      <div className="p-5">
        <div className="font-display text-[16px] font-medium text-white line-clamp-2">{p.title}</div>
        <p className="mt-1 text-[14px] leading-6 text-zinc-400 line-clamp-2">{p.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0,3).map(t=> <span key={t} className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[12px] tracking-wide text-zinc-300">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-2">
          <Link href={p.category==="build" ? "/build" : "/create"} className="text-[14px] font-semibold text-[#E8D5B5] hover:underline">View hub →</Link>
          {isPlaceholder && <span className="text-[13px] text-zinc-500">• drop asset to publish</span>}
        </div>
      </div>
    </div>
  );
}
