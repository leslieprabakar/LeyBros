export function StatCounter({ items }: { items: { value: string; label: string; sub?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((s) => (
        <div key={s.label} className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-5 text-center">
          <div className="font-display text-[28px] font-semibold text-[#E8D5B5]">{s.value}</div>
          <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">{s.label}</div>
          {s.sub && <div className="mt-1 text-[11px] text-zinc-500">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
