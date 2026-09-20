import Link from "next/link";

export const metadata = { title: "Preview — Logo Variants", robots: { index: false, follow: false } };

const variants = [
  { file: "/brand/logo.png", name: "Primary — Teal (Image 1) ★", desc: "Master: crown teal + LEYBROS navy + O brain gold. For dark emerald header." },
  { file: "/brand/variants/variant-teal.png", name: "Variant Teal (A-TL)", desc: "Same teal — from grid A top-left (duplicate of primary, cropped)." },
  { file: "/brand/variants/variant-bronze.png", name: "Variant Bronze (A-TR)", desc: "Brown #8C5A2B — matches gold hairlines, warm premium." },
  { file: "/brand/variants/variant-gold-black.png", name: "Variant Gold-Black (A-BL)", desc: "Black + gold Circuit — luxury night." },
  { file: "/brand/variants/variant-purple.png", name: "Variant Purple (A-BR)", desc: "Purple #6B3FA0 → pink — creative pop." },
  { file: "/brand/variants/variant-teal2.png", name: "Variant Teal2 (B-TL)", desc: "Teal duplicate from grid B." },
  { file: "/brand/variants/variant-red.png", name: "Variant Red (B-TR)", desc: "Red/dark #6D1E2A — bold, not finance-premium." },
  { file: "/brand/variants/variant-bronze2.png", name: "Variant Bronze2 (B-BL)", desc: "Bronze alt — warmer gold." },
  { file: "/brand/variants/variant-blue-purple.png", name: "Variant Blue-Purple (B-BR)", desc: "Blue→purple gradient — tech vibe." },
];

export default function LogoPreview() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-xl border border-[#C9A86A]/15 bg-amber-500/10 p-4 text-sm text-amber-200">Preview only — not indexed. Choose a primary, then tell me the variant name. I&apos;ll keep others in <code className="bg-black/30 px-1">/brand/variants/</code>.</div>

      <h1 className="mt-6 font-display text-[28px] font-medium text-white">Logo — Preview & Selection</h1>
      <p className="mt-2 text-[14px] text-zinc-400">All PNGs transparent (checker background removed), ~700×230 cropped with padding. Primary <code className="bg-white/10 px-1">/brand/logo.png</code> currently used in header/footer. Click image to open full PNG.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/" className="rounded-full bg-[#C9A86A] px-6 py-2.5 text-[13px] font-semibold text-[#081410]">Back to Home</Link>
        <a href="/brand/logo.png" target="_blank" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[13px] text-[#E8D5B5]">Open /brand/logo.png</a>
        <a href="/brand/logo-icon.png" target="_blank" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[13px] text-[#E8D5B5]">Open /brand/logo-icon.png</a>
      </div>

      {/* Icon */}
      <div className="mt-8 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 p-6">
        <div className="text-[12px] tracking-[0.18em] text-[#C9A86A]">ICON — CROWN ONLY</div>
        <div className="mt-4 flex gap-6 items-center">
          <img src="/brand/logo-icon.png" alt="icon" className="h-20 w-auto bg-[#081410] rounded-xl p-2 border border-[#C9A86A]/10" />
          <img src="/brand/logo-icon.png" alt="icon" className="h-16 w-auto bg-white rounded-xl p-2 border border-black/10" />
          <span className="text-[12px] text-zinc-500">551×365 • for favicon/OG</span>
        </div>
      </div>

      {variants.map(v=>(
        <div key={v.file} className="mt-6 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 overflow-hidden">
          <div className="p-4 border-b border-[#C9A86A]/10 flex flex-wrap justify-between gap-2">
            <div>
              <div className="font-display text-[16px] font-medium text-white">{v.name}</div>
              <div className="text-[13px] text-zinc-400">{v.desc}</div>
              <div className="text-[11px] text-zinc-500 mt-1">{v.file}</div>
            </div>
            <a href={v.file} target="_blank" className="text-[12px] text-[#C9A86A] hover:underline shrink-0">Open PNG ↗</a>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-[#081410] flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON DARK #081410 (header)</div>
              <a href={v.file} target="_blank" className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
                <img src={v.file} alt={v.name} className="h-12 sm:h-14 w-auto object-contain" />
              </a>
              <div className="bg-[#081410] rounded-xl p-3 flex justify-center border border-[#C9A86A]/10">
                <img src={v.file} alt={v.name} className="h-7 w-auto" />
              </div>
            </div>
            <div className="p-6 bg-white flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON LIGHT #FFFFFF (footer/OG light)</div>
              <a href={v.file} target="_blank" className="bg-white border border-black/10 rounded-xl p-4 flex justify-center">
                <img src={v.file} alt={v.name} className="h-12 sm:h-14 w-auto object-contain" />
              </a>
              <div className="bg-[#F5F5F0] rounded-xl p-3 flex justify-center border border-black/10">
                <img src={v.file} alt={v.name} className="h-7 w-auto" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-5 text-[13px] leading-6 text-zinc-300">
        <strong className="text-white">Recommendation:</strong> Keep <strong>Primary — Teal</strong> as header default (emerald+gold site, arrow growth, O brain gold). Use <strong>Bronze</strong> variants as alternate for light backgrounds/OG if needed. Tell me: e.g., “keep teal” or “switch to bronze” or “use variant-X”.
      </div>
    </div>
  );
}
