export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "build" | "create" | "observe" }) {
  const map: Record<string,string> = {
    default: "border-white/10 text-zinc-300 bg-white/[0.04]",
    build: "border-sky-500/30 text-sky-300 bg-sky-500/10",
    create: "border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10",
    observe: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${map[variant]}`}>{children}</span>;
}
