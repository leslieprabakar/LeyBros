import { Observation } from "@/data/observations";
import { Badge } from "@/components/ui/Badge";

export function ObservationCard({ o }: { o: Observation }) {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] overflow-hidden">
      <div className="aspect-[16/9] bg-gradient-to-br from-amber-500/20 to-white/5 grid place-items-center relative">
        <div className="text-center px-6">
          <div className="text-[11px] tracking-[0.16em] text-amber-200/70">OBSERVATION</div>
          <div className="mt-2 text-sm font-semibold text-white">{o.title}</div>
          {o.status==="placeholder" && <div className="mt-2 inline-flex rounded-full border border-amber-500/30 bg-black/40 px-3 py-1 text-[11px] text-amber-200">Awaiting screenshot — placeholder</div>}
        </div>
        <div className="absolute left-3 top-3"><Badge variant="observe">Observe</Badge></div>
      </div>
      <div className="p-4">
        <div className="text-sm font-medium text-white">{o.title}</div>
        <p className="mt-1 text-xs leading-5 text-zinc-400">{o.excerpt}</p>
        <div className="mt-3 grid gap-2 text-xs">
          <div><span className="text-zinc-400">Observed:</span> <span className="text-zinc-200">{o.observed}</span></div>
          <div><span className="text-zinc-400">Afterward:</span> <span className="text-zinc-200">{o.afterward}</span></div>
          <div className="text-amber-200/80">Learned: {o.learned}</div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">{o.tags.map(t=> <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-zinc-300">{t}</span>)}</div>
        <p className="mt-3 text-[11px] leading-5 text-zinc-500">Educational only — what was known at the time is separated from what happened afterward. No advice, no targets.</p>
      </div>
    </div>
  );
}
