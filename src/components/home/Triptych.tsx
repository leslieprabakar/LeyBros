import Link from "next/link";

const items = [
  { k:"WEB", title:"Code that becomes presence", desc:"Feather Creations + Moow.Hub + LeyBros — 3 responsive websites (HTML/CSS/JS, Next.js 16, Vercel Serverless + Supabase) that ship, rank, and sell. Detailed.docx Atlas #2, #3, #7.", href:"/web" },
  { k:"AI & AUTOMATION", title:"Images + bots that save days", desc:"ALT-Text Generator (Harvard University) (Desktop AI, 3 LLM failover) + NEST Trading Terminal Automation (Win32 memory scrape) + II*A Private Sector Office Work Automation — Atlas #1, #4, #5. Built to automate, not just render.", href:"/ai" },
  { k:"MARKET INSIGHT", title:"Quant, not tips", desc:"AmiBroker Desktop App Automation — Quantitative Backtesting Platform (pandas + Bhavcopy + AFL). Price action, HRoC 570, Harmonic XABC — taught with screenshots, not promises. Atlas #6.", href:"/market-insight" },
];

export function Triptych() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(it=>(
          <Link key={it.k} href={it.href} className="group relative overflow-hidden rounded-2xl border border-[#C9A86A]/12 bg-gradient-to-b from-[#10201A] to-[#0d1a14] p-6 hover:border-[#C9A86A]/25 hover:bg-[#123727]/50 transition">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-center gap-2 text-[13px] tracking-[0.18em] text-[#C9A86A]"><span>✦</span> {it.k}</div>
            <div className="mt-3 font-display text-[20px] font-medium leading-tight text-white">{it.title}</div>
            <p className="mt-2 text-[15px] leading-7 text-zinc-300">{it.desc}</p>
            <div className="mt-4 text-[14px] font-semibold tracking-wide text-[#E8D5B5] group-hover:underline">{it.k==="WEB" ? "Explore Web" : it.k==="AI" ? "Explore AI" : "Enter Market Insight"} →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
