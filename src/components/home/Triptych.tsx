import Link from "next/link";

const items = [
  { k:"BUILD", title:"Code that becomes presence", desc:"Enterprise-grade engineering → modern vibe coding. Websites, web apps, SEO structure that scores on Core Web Vitals and Search Console.", href:"/build", accent:"from-sky-500/20 to-sky-500/5 border-sky-500/20", cta:"Explore Build" },
  { k:"CREATE", title:"Images that move people", desc:"AI-assisted art, photoreal product/architecture, cinematic video, 3D exploded views, UGC reels — built to sell, not just to show.", href:"/create", accent:"from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20", cta:"Explore Create" },
  { k:"OBSERVE", title:"Notes before narratives", desc:"Private investor practice. Screens, price action, volume/delivery, breakouts — taught with screenshots, not promises. Education only.", href:"/observe", accent:"from-amber-500/20 to-amber-500/5 border-amber-500/20", cta:"Enter Observe" },
];

export function Triptych() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(it=>(
          <Link key={it.k} href={it.href} className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b p-6 ${it.accent} hover:bg-white/[0.02] transition`}>
            <div className="text-[11px] tracking-[0.18em] text-zinc-400">{it.k}</div>
            <div className="mt-2 text-lg font-semibold leading-tight text-white">{it.title}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{it.desc}</p>
            <div className="mt-4 text-xs font-semibold tracking-wide text-white group-hover:underline">{it.cta} →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
