export function SectionHeader({ kicker, title, desc, action }: { kicker: string; title: string; desc: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="text-[11px] tracking-[0.18em] text-zinc-400">{kicker}</div>
        <h2 className="mt-2 text-[22px] sm:text-[28px] font-semibold tracking-tight text-white leading-tight">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{desc}</p>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
