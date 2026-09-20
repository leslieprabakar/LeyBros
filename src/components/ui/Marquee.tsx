export function Marquee({ items }: { items: string[] }) {
  const dup = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-[#C9A86A]/10 bg-[#0B1E16]/60 py-4">
      <div className="flex w-max animate-marquee gap-8">
        {dup.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8 text-sm tracking-[0.14em] text-[#E8D5B5]/70">
            <span className="font-display text-[15px] font-medium">{t}</span>
            <span className="text-[#C9A86A]/40 text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
