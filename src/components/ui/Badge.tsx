export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "build" | "create" | "observe" | "gold" }) {
  const map: Record<string,string> = {
    default: "border-[rgba(201,168,106,0.14)] text-zinc-300 bg-white/[0.04]",
    gold: "border-[#C9A86A]/30 text-[#E8D5B5] bg-[#C9A86A]/10",
    build: "border-sky-500/20 text-sky-200 bg-sky-500/10",
    create: "border-fuchsia-500/20 text-fuchsia-200 bg-fuchsia-500/10",
    observe: "border-amber-500/25 text-amber-200 bg-amber-500/10",
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${map[variant]}`}>{children}</span>;
}
