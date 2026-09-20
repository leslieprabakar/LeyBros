export function SectionHeader({ kicker, title, desc, action }: { kicker: string; title: string; desc: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[#C9A86A]">
          <span className="text-[10px]">✦</span> {kicker}
        </div>
        <h2 className="mt-2 font-display text-[26px] sm:text-[32px] font-medium tracking-tight text-white leading-tight">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{desc}</p>
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#C9A86A]/40 to-transparent" />
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
