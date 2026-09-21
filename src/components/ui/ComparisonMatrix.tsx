import { projectAtlas } from "@/data/detailed";

export function ComparisonMatrix({ highlight }: { highlight?: number[] }) {
  const isHighlighted = (n: number) => !highlight || highlight.includes(n);
  const hasHighlight = !!highlight && highlight.length > 0;
  return (
    <div className="overflow-x-auto rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60">
      <div className="p-4 border-b border-[#C9A86A]/10 bg-[#0B1A14]">
        <div className="text-[11px] tracking-[0.18em] text-[#C9A86A]">CROSS-PROJECT COMPARISON</div>
        <div className="mt-1 text-[12px] text-zinc-400">The Matrix — One Glance to Explain Everything</div>
      </div>
      <table className="w-full text-left text-[12px]">
        <thead>
          <tr className="bg-[#0B1A14] text-[11px] tracking-wide text-[#C9A86A]">
            <th className="px-3 py-2.5 font-semibold">#</th>
            <th className="px-3 py-2.5 font-semibold">Project</th>
            <th className="px-3 py-2.5 font-semibold">What It Really Is</th>
            <th className="px-3 py-2.5 font-semibold">Model</th>
            <th className="px-3 py-2.5 font-semibold">Responsive</th>
            <th className="px-3 py-2.5 font-semibold">Tech Pillars</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#C9A86A]/10">
          {projectAtlas.map((row) => {
            const hl = isHighlighted(row.n);
            return (
            <tr key={row.n} className={
              hl && hasHighlight
                ? "bg-gradient-to-r from-[#C9A86A]/20 via-[#C9A86A]/10 to-[#10201A]/60 border-l-2 border-[#C9A86A] shadow-[inset_0_0_20px_rgba(201,168,106,0.12)] relative"
                : row.n % 2 === 0 ? "bg-[#081410]/50" : "bg-[#10201A]/40"
            }>
              <td className={`px-3 py-2.5 font-semibold ${hl && hasHighlight ? "text-[#FFD700]" : "text-[#C9A86A]"}`}>{row.n}</td>
              <td className={`px-3 py-2.5 font-medium leading-5 ${hl && hasHighlight ? "text-white drop-shadow-[0_0_8px_rgba(201,168,106,0.35)]" : "text-white"}`}>{row.label}{hl && hasHighlight ? " ★" : ""}</td>
              <td className={`px-3 py-2.5 leading-5 ${hl && hasHighlight ? "text-[#E8D5B5] font-medium" : "text-zinc-300"}`}>{row.real}</td>
              <td className={`px-3 py-2.5 ${hl && hasHighlight ? "text-[#E8D5B5]" : "text-zinc-300"}`}>{row.model}</td>
              <td className="px-3 py-2.5 align-middle">
                <span className={row.responsive.includes("✓") ? `inline-flex items-center justify-center text-center leading-[1.35] whitespace-normal break-words rounded-[10px] px-2.5 py-1.5 text-[11px] min-h-[28px] max-w-[170px] ${hl && hasHighlight ? "bg-emerald-500/25 border border-emerald-400/40 text-emerald-100 shadow-[0_0_12px_rgba(16,185,129,0.25)]" : "bg-emerald-500/15 border border-emerald-500/20 text-emerald-200"}` : `inline-flex items-center justify-center text-center leading-[1.35] whitespace-normal break-words rounded-[10px] px-2.5 py-1.5 text-[11px] min-h-[28px] max-w-[170px] ${hl && hasHighlight ? "bg-white/10 border border-[#C9A86A]/30 text-[#E8D5B5]" : "bg-white/5 border border-white/10 text-zinc-400"}`}>{row.responsive}</span>
              </td>
              <td className={`px-3 py-2.5 leading-5 ${hl && hasHighlight ? "text-zinc-200" : "text-zinc-400"}`}>{row.tech}</td>
            </tr>
          )})}
        </tbody>
      </table>
      <div className="p-3 text-center text-[11px] text-zinc-500 border-t border-[#C9A86A]/10">7 Builds: 3 Responsive websites, 2 Desktop automations, 1 Web automation, and 1 Quant platform</div>
    </div>
  );
}
