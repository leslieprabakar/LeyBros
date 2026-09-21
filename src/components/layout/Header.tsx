"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-[#C9A86A]/10 bg-[#081410]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 flex h-[64px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="bg-white rounded-full px-3 py-1.5 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.15)] border border-[#C9A86A]/10">
            <Image src="/brand/logo.png" alt="LeyBros" width={180} height={52} className="h-7 sm:h-8 w-auto object-contain" priority />
          </span>
          <div className="hidden sm:block leading-none">
            <div className="font-display text-[13px] font-semibold tracking-[0.10em] text-[#E8D5B5] group-hover:text-[#C9A86A] transition">LeyBros Private Ltd.,</div>
            <div className="mt-0.5 flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-zinc-500">
              <span className="h-px w-4 bg-gradient-to-r from-[#C9A86A]/40 to-transparent hidden sm:inline-block"></span>
              {site.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {site.nav.map((n) => {
            const isActive = pathname === n.href || pathname.startsWith(n.href + "/");
            const isMarket = n.href === "/market-insight";
            const activeClass = isActive
              ? isMarket
                ? "bg-amber-500/10 text-amber-300 border border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                : "bg-white/[0.08] text-[#C9A86A] border border-[#C9A86A]/20 shadow-[0_0_12px_rgba(201,168,106,0.12)]"
              : "text-zinc-300 hover:text-[#E8D5B5] hover:bg-white/[0.04] border border-transparent";
            return (
            <Link key={n.href} href={n.href} aria-current={isActive ? "page" : undefined} className={`px-4 py-2 text-[14px] tracking-[0.14em] rounded-md transition ${activeClass}`}>
              {n.label.toUpperCase()}
            </Link>
          )})}
          <Link href="/contact" className="ml-3 rounded-full bg-[#C9A86A] px-7 py-3 text-[13px] font-semibold tracking-[0.14em] text-[#081410] hover:bg-[#D4B78A] transition">
            BOOK A CALL →
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-[#C9A86A]/20 text-[#E8D5B5]"
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#C9A86A]/10 bg-[#081410] px-4 py-4 flex flex-col gap-1">
          {site.nav.map((n) => {
            const isActive = pathname === n.href || pathname.startsWith(n.href + "/");
            const isMarket = n.href === "/market-insight";
            const activeClass = isActive
              ? isMarket
                ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                : "bg-[#C9A86A]/15 text-[#E8D5B5] border border-[#C9A86A]/20"
              : "text-zinc-200 hover:bg-white/5 border border-transparent";
            return (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={isActive ? "page" : undefined} className={`px-3 py-3 rounded-md text-sm border transition ${activeClass}`}>
              {n.label}
            </Link>
          )})}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#C9A86A] text-[#081410] text-center py-3 text-sm font-semibold">
            Book a Call — Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
