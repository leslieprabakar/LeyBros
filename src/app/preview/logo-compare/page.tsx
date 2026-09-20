import Link from "next/link";

export const metadata = { title: "Preview — Logo Light Compare", robots: { index: false, follow: false } };

export default function LogoCompare() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-4 text-sm text-zinc-300">Compare — <code className="bg-white/10 px-1">logo-light-gold.png</code> (#E8D5B5) vs <code className="bg-white/10 px-1">logo-light-white.png</code> (#FFFFFF). Both have hard transparent B/R (no white fringe). Header currently uses <code className="bg-[#C9A86A]/20 px-1 text-[#E8D5B5]">logo-light.png (= gold)</code>. Tell me “keep gold” or “switch to white”.</div>

      <h1 className="mt-6 font-display text-[28px] font-medium text-white">Logo — Light Gold vs Pure White on Dark</h1>
      <p className="mt-2 text-[14px] text-zinc-400">Both at <code className="bg-white/10 px-1">h-8</code> (header) and <code className="bg-white/10 px-1">h-14</code> (hero) on <code className="bg-[#081410] px-1 text-[#E8D5B5]">#081410</code> and <code className="bg-white px-1 text-black">#FFFFFF</code>. B/R holes fully transparent (hard dark edge, no white squares).</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Option A Gold */}
        <div className="rounded-[16px] border border-[#C9A86A]/30 bg-[#10201A]/40 overflow-hidden">
          <div className="p-4 border-b border-[#C9A86A]/10 bg-[#C9A86A]/10">
            <div className="font-display text-[16px] font-medium text-[#E8D5B5]">Option A — Light Gold ★ Current</div>
            <div className="text-[13px] text-zinc-400">LE YBROS #E8D5B5 / tagline #C9A86A — matches gold hairlines, premium</div>
            <div className="text-[11px] text-zinc-500 mt-1">/brand/logo-light-gold.png (1359×404) — also /brand/logo-light.png</div>
          </div>
          <div className="p-6 bg-[#081410] flex flex-col gap-4">
            <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">ON DARK #081410 — HEADER h-8</div>
            <div className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
              <img src="/brand/logo-light-gold.png" alt="gold" className="h-8 w-auto object-contain" />
            </div>
            <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON DARK — HERO h-14</div>
            <div className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
              <img src="/brand/logo-light-gold.png" alt="gold" className="h-14 w-auto object-contain" />
            </div>
            <a href="/brand/logo-light-gold.png" target="_blank" className="text-[12px] text-[#C9A86A] hover:underline text-center">Open PNG ↗</a>
          </div>
          <div className="p-6 bg-white flex flex-col gap-2">
            <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON LIGHT #FFFFFF — reference (gold on white is low contrast)</div>
            <div className="bg-white border border-black/10 rounded-xl p-4 flex justify-center">
              <img src="/brand/logo-light-gold.png" alt="gold" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Option B White */}
        <div className="rounded-[16px] border border-white/10 bg-[#10201A]/40 overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5">
            <div className="font-display text-[16px] font-medium text-white">Option B — Pure White</div>
            <div className="text-[13px] text-zinc-400">LE YBROS #FFFFFF / tagline #E8D5B5 — maximum contrast</div>
            <div className="text-[11px] text-zinc-500 mt-1">/brand/logo-light-white.png (1359×404)</div>
          </div>
          <div className="p-6 bg-[#081410] flex flex-col gap-4">
            <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">ON DARK #081410 — HEADER h-8</div>
            <div className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
              <img src="/brand/logo-light-white.png" alt="white" className="h-8 w-auto object-contain" />
            </div>
            <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON DARK — HERO h-14</div>
            <div className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
              <img src="/brand/logo-light-white.png" alt="white" className="h-14 w-auto object-contain" />
            </div>
            <a href="/brand/logo-light-white.png" target="_blank" className="text-[12px] text-[#C9A86A] hover:underline text-center">Open PNG ↗</a>
          </div>
          <div className="p-6 bg-[#F5F5F0] flex flex-col gap-2">
            <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON LIGHT #F5F5F0 — white almost invisible</div>
            <div className="bg-[#F5F5F0] border border-black/10 rounded-xl p-4 flex justify-center opacity-90">
              <img src="/brand/logo-light-white.png" alt="white" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/" className="rounded-full bg-[#C9A86A] px-6 py-2.5 text-[13px] font-semibold text-[#081410]">Back to Home</Link>
        <Link href="/preview/logo" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[13px] text-[#E8D5B5]">All variants → /preview/logo</Link>
      </div>

      <div className="mt-6 rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-5 text-[13px] leading-6 text-zinc-300">
        <strong className="text-white">Expected (your Image 1):</strong> Solid dark navy LEYBROS for light bg — that is <code className="bg-white/10 px-1">/brand/logo.png</code> (dark). For dark header, expected is solid light (gold or white) with transparent B/R. Both options above are now solid (no two-tone seam) and B/R hard transparent. Choose which light you prefer.
      </div>
    </div>
  );
}
