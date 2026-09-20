import Link from "next/link";

export const metadata = { title: "Preview — Logo Variants", robots: { index: false, follow: false } };

const variants = [
  { file: "/brand/logo.png", fileLight: "/brand/logo-light.png", name: "Primary — Teal (Image 1) ★", desc: "Master: crown teal + LEYBROS (dark for light bg / light for dark header). Crown preserved." },
  { file: "/brand/variants/variant-teal.png", fileLight: "/brand/variants/variant-teal-light.png", name: "Variant Teal (A-TL)", desc: "Grid A top-left — same teal, cropped." },
  { file: "/brand/variants/variant-bronze.png", fileLight: "/brand/variants/variant-bronze-light.png", name: "Variant Bronze (A-TR)", desc: "Brown #8C5A2B — warm premium." },
  { file: "/brand/variants/variant-gold-black.png", fileLight: "/brand/variants/variant-gold-black-light.png", name: "Variant Gold-Black (A-BL)", desc: "Black + gold Circuit — luxury night." },
  { file: "/brand/variants/variant-purple.png", fileLight: "/brand/variants/variant-purple-light.png", name: "Variant Purple (A-BR)", desc: "Purple #6B3FA0 → pink — creative pop." },
  { file: "/brand/variants/variant-teal2.png", fileLight: "/brand/variants/variant-teal2-light.png", name: "Variant Teal2 (B-TL)", desc: "Grid B top-left teal duplicate." },
  { file: "/brand/variants/variant-red.png", fileLight: "/brand/variants/variant-red-light.png", name: "Variant Red (B-TR)", desc: "Red/dark #6D1E2A — bold." },
  { file: "/brand/variants/variant-bronze2.png", fileLight: "/brand/variants/variant-bronze2-light.png", name: "Variant Bronze2 (B-BL)", desc: "Bronze alt — warmer gold." },
  { file: "/brand/variants/variant-blue-purple.png", fileLight: "/brand/variants/variant-blue-purple-light.png", name: "Variant Blue-Purple (B-BR)", desc: "Blue→purple gradient — tech vibe." },
];

export default function LogoPreview() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-xl border border-[#C9A86A]/15 bg-amber-500/10 p-4 text-sm text-amber-200">Preview — header now uses <code className="bg-black/30 px-1">/brand/logo-light.png</code> (light LEYBROS on dark). Dark variants are for light backgrounds. Hard-refresh Ctrl+F5 to see.</div>

      <h1 className="mt-6 font-display text-[28px] font-medium text-white">Logo — Fixed: hard dark edge, transparent B/R, sharp borders</h1>
      <p className="mt-2 text-[14px] text-zinc-400">Checker removed, B/R holes fully transparent (hard edge). Header uses light variant for contrast on <code className="bg-white/10 px-1">#081410</code>. Crown white stroke preserved.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/" className="rounded-full bg-[#C9A86A] px-6 py-2.5 text-[13px] font-semibold text-[#081410]">Back to Home (see header)</Link>
        <a href="/brand/logo-light.png" target="_blank" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[13px] text-[#E8D5B5]">Open /brand/logo-light.png ★</a>
        <a href="/brand/logo.png" target="_blank" className="rounded-full border border-white/10 px-6 py-2.5 text-[13px] text-zinc-300">Open /brand/logo.png (dark wordmark)</a>
      </div>

      <div className="mt-8 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 p-6">
        <div className="text-[12px] tracking-[0.18em] text-[#C9A86A]">ICON — CROWN ONLY</div>
        <div className="mt-4 flex gap-6 items-center">
          <img src="/brand/logo-icon-light.png" alt="icon" className="h-20 w-auto bg-[#081410] rounded-xl p-2 border border-[#C9A86A]/10" />
          <img src="/brand/logo-icon.png" alt="icon" className="h-16 w-auto bg-white rounded-xl p-2 border border-black/10" />
          <span className="text-[12px] text-zinc-500">550×364 • dark/light</span>
        </div>
      </div>

      {variants.map(v=>(
        <div key={v.file} className="mt-6 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 overflow-hidden">
          <div className="p-4 border-b border-[#C9A86A]/10">
            <div className="font-display text-[16px] font-medium text-white">{v.name}</div>
            <div className="text-[13px] text-zinc-400">{v.desc}</div>
            <div className="text-[11px] text-zinc-500 mt-1">{v.file} → {v.fileLight}</div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-[#081410] flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">ON DARK #081410 (header) — uses LIGHT variant</div>
              <a href={v.fileLight} target="_blank" className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
                <img src={v.fileLight} alt={v.name} className="h-12 sm:h-14 w-auto object-contain" />
              </a>
              <div className="bg-[#081410] rounded-xl p-3 flex justify-center border border-[#C9A86A]/10">
                <img src={v.fileLight} alt={v.name} className="h-7 w-auto" />
              </div>
              <div className="text-[11px] text-zinc-500">No white patches — B/R transparent (dark), borders hard</div>
            </div>
            <div className="p-6 bg-white flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON LIGHT #FFFFFF — uses DARK variant</div>
              <a href={v.file} target="_blank" className="bg-white border border-black/10 rounded-xl p-4 flex justify-center">
                <img src={v.file} alt={v.name} className="h-12 sm:h-14 w-auto object-contain" />
              </a>
              <div className="bg-[#F5F5F0] rounded-xl p-3 flex justify-center border border-black/10">
                <img src={v.file} alt={v.name} className="h-7 w-auto" />
              </div>
              <div className="text-[11px] text-zinc-500">Original dark wordmark for light bg</div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-5 text-[13px] leading-6 text-zinc-300">
        <strong className="text-white">Now fixed:</strong> B/R white fringe removed (hard dark edge, fully transparent holes). Header shows <code className="bg-white/10 px-1">logo-light.png</code> — light LEYBROS #E8D5B5 on dark, so contrast sharp and no white patches on dark. Confirm at <code>http://localhost:3000</code> header.
      </div>
    </div>
  );
}
