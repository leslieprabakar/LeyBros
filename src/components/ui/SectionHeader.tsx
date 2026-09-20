export function SectionHeader({ kicker, title, desc, action }: { kicker: string; title: string; desc: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-[#C9A86A]">
          <span className="text-[12px]">✦</span> {kicker}
        </div>
        <h2 className="mt-3 font-display text-[30px] sm:text-[36px] font-medium tracking-tight text-white leading-tight">{title}</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-7 text-zinc-300">{desc}</p>
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#C9A86A]/40 to-transparent" />
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
