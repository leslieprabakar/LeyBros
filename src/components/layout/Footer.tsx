import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#C9A86A]/10 bg-[#081410] mt-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="inline-flex bg-white rounded-full px-3 py-2">
            <img src="/brand/logo.png" alt="LeyBros" className="h-8 w-auto" />
          </span>
          <p className="mt-3 max-w-md text-[15px] leading-7 text-zinc-400">
            Freelance technology & AI creative practice on a genuine software-engineering foundation. Web systems. AI visuals. Market insight.
          </p>
          <p className="mt-4 text-[13px] tracking-wide text-zinc-400">Formerly: Atos Syntel → LTM Limited → TCS</p>
          <div className="mt-6 flex gap-2 text-[13px] tracking-wide">
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3.5 py-1.5 text-[#E8D5B5]">WEB</span>
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3.5 py-1.5 text-[#E8D5B5]">AI</span>
            <span className="rounded-full border border-[#C9A86A]/15 bg-[#C9A86A]/5 px-3.5 py-1.5 text-[#E8D5B5]">MARKET INSIGHT</span>
          </div>
        </div>
        <div>
          <div className="text-[13px] tracking-[0.14em] text-[#C9A86A]">FREELANCE SERVICES</div>
          <ul className="mt-3 space-y-2 text-[15px] text-zinc-300">
            <li><Link href="/web" className="hover:text-[#E8D5B5]">Website Development & Vibe Coding</Link></li>
            <li><Link href="/web" className="hover:text-[#E8D5B5]">SEO — Technical & Structure</Link></li>
            <li><Link href="/ai" className="hover:text-[#E8D5B5]">AI Art & Image Enhancement</Link></li>
            <li><Link href="/ai" className="hover:text-[#E8D5B5]">AI Video & 3D Visualization</Link></li>
            <li><Link href="/ai" className="hover:text-[#E8D5B5]">Advertising & UGC Reels</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[13px] tracking-[0.14em] text-[#C9A86A]">KNOWLEDGE — SEPARATE</div>
          <ul className="mt-3 space-y-2 text-[15px] text-zinc-300">
            <li><Link href="/market-insight" className="hover:text-[#E8D5B5]">Stock-Market Knowledge Sharing</Link></li>
            <li><Link href="/contact?intent=market-insight" className="hover:text-[#E8D5B5]">Enquire — Knowledge Program</Link></li>
            <li><Link href="/about" className="hover:text-[#E8D5B5]">About & Timeline</Link></li>
            <li><Link href="/contact" className="hover:text-[#E8D5B5]">Contact — Split Enquiry</Link></li>
          </ul>
          <p className="mt-6 text-[13px] leading-6 text-zinc-400">
            Educational knowledge-sharing only. Not SEBI-registered. Not investment advice. Historical observations do not guarantee future outcomes.
          </p>
        </div>
      </div>
      {/* bottom CTA band */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 pb-8">
        <div className="rounded-[16px] border border-[#C9A86A]/10 bg-gradient-to-r from-[#10201A] to-[#0f241c] p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
          <div>
            <div className="font-display text-[22px] font-medium text-white">Let&apos;s create something iconic</div>
            <p className="text-[14px] text-zinc-400 mt-1">Available for select projects worldwide. Let&apos;s build something extraordinary together.</p>
          </div>
          <div className="flex gap-4 text-[13px]">
            <div className="space-y-1 text-zinc-400">
              <div className="flex gap-2"><span className="text-[#C9A86A]">✉</span> LesliePrabakar@GMail.com</div>
              <div className="flex gap-2"><span className="text-[#C9A86A]">◎</span> https://LeyBros.vercel.app</div>
            </div>
            <Link href="/contact" className="hidden sm:inline-flex h-fit rounded-full bg-[#C9A86A] px-7 py-3 text-[14px] font-semibold text-[#081410] hover:bg-[#D4B78A]">BOOK A CALL →</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-6 border-t border-[#C9A86A]/10 flex flex-col sm:flex-row gap-2 justify-between text-[13px] text-zinc-400">
        <span>© {new Date().getFullYear()} LeyBros Private Ltd., All rights reserved.</span>
        <span className="tracking-wide">ENGINEERING TRUST • CRAFTING VISIBILITY • Built with Code + AI</span>
      </div>
    </footer>
  );
}
