import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ p }: { p: Project }) {
  const variant = p.category === "build" ? "build" as const : p.category === "create" ? "create" as const : "default" as const;
  const isPlaceholder = p.status === "placeholder";
  const isWebsite = p.delivery === "website" && p.status === "published" && !!p.meta?.liveUrl;
  const coverIsExternal = typeof p.cover === "string" && p.cover.startsWith("http");
  const hubHref = p.href ?? (p.category === "build" ? "/web" : p.category === "research" ? "/market-insight" : "/ai");
  const hideHubLink = new Set(["grid-alttextgen-accessibility-ai","nest-trader-excel-bridge","iipa-auditor-automation","fno-rnd-quant-platform"]).has(p.slug);

  return (
    <div className="group overflow-hidden rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 hover:border-[#C9A86A]/20 hover:bg-[#123727]/50 transition">
      <div className="aspect-[16/10] relative overflow-hidden bg-[#081410]">
        {/* Background: live homepage for 3 website cards, gradient fallback otherwise */}
        {isWebsite ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-top bg-no-repeat"
              style={{ backgroundImage: `url(${p.cover})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#C9A86A]/20 to-transparent" />
          </>
        ) : coverIsExternal ? (
          <>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${p.cover})` }} aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#10201A] to-[#081410]" />
            <div className="absolute inset-0 opacity-40" style={{ background: p.category==="build" ? "radial-gradient(400px 200px at 30% 20%, rgba(14,165,233,0.15), transparent)" : "radial-gradient(400px 200px at 70% 20%, rgba(168,85,247,0.15), transparent)"}}/>
          </>
        )}
        {/* gold bottom line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Top-left pills: BUILD + WEBSITE (only for 3 website cards) */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 items-center">
          <Badge variant={variant}>{p.category.toUpperCase()}</Badge>
          {isWebsite && <span className="inline-flex items-center rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/15 px-3 py-1.5 text-[11px] tracking-[0.14em] font-semibold text-[#E8D5B5]">WEBSITE</span>}
          {isPlaceholder && <Badge variant="gold">Placeholder</Badge>}
        </div>

        {/* Title + sub below pills, over live background for website cards */}
        <div className={`absolute left-0 right-0 px-5 ${isWebsite ? "top-[46px] text-left" : "inset-0 grid place-items-center text-center"}`}>
          <div className={isWebsite ? "" : "relative px-6 w-full"}>
            {!isWebsite && <div className="text-[13px] tracking-[0.16em] text-[#C9A86A]/70">{p.sub.toUpperCase()}</div>}
            <div className={`font-display text-white line-clamp-2 ${isWebsite ? "mt-1.5 text-[14px] font-semibold leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]" : "mt-2 text-[15px] font-medium"}`}>{p.title}</div>
            {isWebsite && <div className="mt-1 text-[11px] tracking-wide text-white/80 line-clamp-1">{p.meta?.liveUrl?.replace("https://","")}</div>}
            {isPlaceholder && !isWebsite && <div className="mt-2 inline-flex rounded-full border border-dashed border-[#C9A86A]/25 bg-black/40 px-3 py-1.5 text-[12px] text-zinc-400">Awaiting asset — integration ready</div>}
          </div>
        </div>

        {/* Subtle live badge bottom-right for website cards */}
        {isWebsite && (
          <div className="absolute right-2 bottom-2 rounded-full bg-black/55 border border-white/15 px-2.5 py-1 text-[10px] tracking-wide text-white/90 backdrop-blur">LIVE • {new URL(p.meta.liveUrl!).hostname}</div>
        )}
      </div>
      <div className="p-5">
        <div className="font-display text-[16px] font-medium text-white line-clamp-2">{p.title}</div>
        <p className="mt-1 text-[14px] leading-6 text-zinc-400 line-clamp-2">{p.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0,3).map(t=> <span key={t} className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[12px] tracking-wide text-zinc-300">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-2 items-center">
          {isWebsite && p.meta?.liveUrl ? (
            <a href={p.meta.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-[#E8D5B5] hover:text-[#C9A86A] hover:underline">View Website →</a>
          ) : hideHubLink ? null : (
            <Link href={hubHref} className="text-[14px] font-semibold text-[#E8D5B5] hover:underline">View hub →</Link>
          )}
          {isPlaceholder && <span className="text-[13px] text-zinc-500">• drop asset to publish</span>}
          {isWebsite && <span className="text-[11px] text-zinc-500">• opens {new URL(p.meta.liveUrl!).hostname}</span>}
        </div>
      </div>
    </div>
  );
}
