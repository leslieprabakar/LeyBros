import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ p }: { p: Project }) {
  const variant = p.category === "build" ? "build" as const : p.category === "create" ? "create" as const : "default" as const;
  const isPlaceholder = p.status === "placeholder";
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
      <div className="aspect-[16/10] relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] grid place-items-center overflow-hidden">
        {/* placeholder visual */}
        <div className="absolute inset-0 opacity-20" style={{ background: p.category==="build" ? "radial-gradient(400px 200px at 30% 20%, #0ea5e9, transparent)" : "radial-gradient(400px 200px at 70% 20%, #a855f7, transparent)"}}/>
        <div className="relative text-center px-6">
          <div className="text-[11px] tracking-[0.16em] text-zinc-400">{p.sub.toUpperCase()}</div>
          <div className="mt-2 text-sm font-semibold text-white line-clamp-2">{p.title}</div>
          {isPlaceholder && <div className="mt-2 inline-flex rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] text-zinc-300">Awaiting asset — integration ready</div>}
        </div>
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={variant}>{p.category.toUpperCase()}</Badge>
          {isPlaceholder && <Badge>Placeholder</Badge>}
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm font-medium text-white line-clamp-2">{p.title}</div>
        <p className="mt-1 text-xs leading-5 text-zinc-400 line-clamp-2">{p.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0,3).map(t=> <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-[10px] tracking-wide text-zinc-300">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-2">
          <Link href={p.category==="build" ? "/build" : "/create"} className="text-xs font-semibold text-white hover:underline">View hub →</Link>
          {isPlaceholder && <span className="text-xs text-zinc-500">• drop asset to publish</span>}
        </div>
      </div>
    </div>
  );
}
