import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#C9A86A]/10 bg-[#081410] mt-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-sm tracking-[0.14em] font-semibold text-white">LEYBROS PRIVATE LTD.</div>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
            Freelance technology & AI creative practice on a genuine software-engineering foundation. Build systems. Create visuals. Observe markets.
          </p>
          <p className="mt-4 text-xs tracking-wide text-zinc-500">Formerly: Atos Syntel → LTM Limited → TCS</p>
          <div className="mt-6 flex gap-2 text-[11px] tracking-wide">
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3 py-1 text-[#E8D5B5]">BUILD</span>
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3 py-1 text-[#E8D5B5]">CREATE</span>
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3 py-1 text-[#E8D5B5]">OBSERVE</span>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">FREELANCE SERVICES</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/build" className="hover:text-[#E8D5B5]">Website Development & Vibe Coding</Link></li>
            <li><Link href="/build" className="hover:text-[#E8D5B5]">SEO — Technical & Structure</Link></li>
            <li><Link href="/create" className="hover:text-[#E8D5B5]">AI Art & Image Enhancement</Link></li>
            <li><Link href="/create" className="hover:text-[#E8D5B5]">AI Video & 3D Visualization</Link></li>
            <li><Link href="/create" className="hover:text-[#E8D5B5]">Advertising & UGC Reels</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.14em] text-[#C9A86A]">KNOWLEDGE — SEPARATE</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/observe" className="hover:text-[#E8D5B5]">Stock-Market Knowledge Sharing</Link></li>
            <li><Link href="/contact?intent=observe" className="hover:text-[#E8D5B5]">Enquire — Knowledge Program</Link></li>
            <li><Link href="/about" className="hover:text-[#E8D5B5]">About & Timeline</Link></li>
            <li><Link href="/contact" className="hover:text-[#E8D5B5]">Contact — Split Enquiry</Link></li>
          </ul>
          <p className="mt-6 text-[11px] leading-5 text-zinc-500">
            Educational knowledge-sharing only. Not SEBI-registered. Not investment advice. Historical observations do not guarantee future outcomes.
          </p>
        </div>
      </div>
      {/* bottom CTA band */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pb-8">
        <div className="rounded-[16px] border border-[#C9A86A]/10 bg-gradient-to-r from-[#10201A] to-[#0f241c] p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
          <div>
            <div className="font-display text-lg font-medium text-white">Let&apos;s create something iconic</div>
            <p className="text-xs text-zinc-400 mt-1">Available for select projects worldwide. Let&apos;s build something extraordinary together.</p>
          </div>
          <div className="flex gap-4 text-xs">
            <div className="space-y-1 text-zinc-400">
              <div className="flex gap-2"><span className="text-[#C9A86A]">✉</span> hello@leybros.com</div>
              <div className="flex gap-2"><span className="text-[#C9A86A]">◎</span> ley bros.com</div>
              <div className="flex gap-2"><span className="text-[#C9A86A]">◈</span> India • Remote worldwide</div>
            </div>
            <Link href="/contact" className="hidden sm:inline-flex h-fit rounded-full bg-[#C9A86A] px-6 py-3 text-xs font-semibold text-[#081410] hover:bg-[#D4B78A]">BOOK A CALL →</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-6 border-t border-[#C9A86A]/10 flex flex-col sm:flex-row gap-2 justify-between text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} LeyBros Private Ltd. All rights reserved.</span>
        <span className="tracking-wide">DESIGNING PURPOSE • BUILDING LEGACY • Built with Code + AI</span>
      </div>
    </footer>
  );
}
