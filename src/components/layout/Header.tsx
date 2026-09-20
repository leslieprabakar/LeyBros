"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0a0b]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 flex h-[64px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-lg bg-white text-black grid place-items-center font-black text-[11px] tracking-widest">LB</div>
          <div>
            <div className="text-[13px] font-semibold tracking-[0.12em] leading-none">{site.shortName.toUpperCase()} PRIVATE LTD.</div>
            <div className="text-[10px] tracking-[0.18em] text-zinc-400">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="px-3 py-2 text-[13px] tracking-wide text-zinc-300 hover:text-white rounded-md hover:bg-white/[0.06] transition">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 rounded-full bg-white px-5 py-2 text-[12px] font-semibold tracking-wide text-black hover:bg-zinc-200 transition">
            Enquire
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-white/10"
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0b] px-4 py-4 flex flex-col gap-1">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-md text-sm text-zinc-200 hover:bg-white/5">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-white text-black text-center py-3 text-sm font-semibold">
            Enquire — Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
