import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] mt-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="text-sm tracking-[0.14em] font-semibold">LEYBROS PRIVATE LTD.</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
            Freelance technology & AI creative practice on a genuine software-engineering foundation. Build systems. Create visuals. Observe markets.
          </p>
          <p className="mt-4 text-xs tracking-wide text-zinc-500">Formerly: Atos Syntel → LTM Limited → TCS</p>
          <div className="mt-6 flex gap-2 text-[11px] tracking-wide">
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">BUILD</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">CREATE</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-300">OBSERVE</span>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.14em] text-zinc-400">FREELANCE SERVICES</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/build" className="hover:text-white">Website Development & Vibe Coding</Link></li>
            <li><Link href="/build" className="hover:text-white">SEO — Technical & Structure</Link></li>
            <li><Link href="/create" className="hover:text-white">AI Art & Image Enhancement</Link></li>
            <li><Link href="/create" className="hover:text-white">AI Video & 3D Visualization</Link></li>
            <li><Link href="/create" className="hover:text-white">Advertising & UGC Reels</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.14em] text-zinc-400">KNOWLEDGE — SEPARATE</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/observe" className="hover:text-white">Stock-Market Knowledge Sharing</Link></li>
            <li><Link href="/contact?intent=observe" className="hover:text-white">Enquire — Knowledge Program</Link></li>
            <li><Link href="/about" className="hover:text-white">About & Timeline</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact — Split Enquiry</Link></li>
          </ul>
          <p className="mt-6 text-[11px] leading-5 text-zinc-500">
            Educational knowledge-sharing only. Not SEBI-registered. Not investment advice. Historical observations do not guarantee future outcomes.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} LeyBros Private Ltd. All rights reserved.</span>
        <span className="tracking-wide">Built with Code + AI • Responsive • SEO-first • a11y</span>
      </div>
    </footer>
  );
}
