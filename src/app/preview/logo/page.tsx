import Link from "next/link";

export const metadata = { title: "Preview — Logo Variants", robots: { index: false, follow: false } };

const variants = [
  { file: "/brand/logo.png", name: "Primary — Teal (Image 1) ★", desc: "Master: crown teal + LEYBROS dark navy + O brain gold. Transparent bg — Image 1 as provided." },
  { file: "/brand/variants/variant-teal.png", name: "Variant Teal (A-TL)", desc: "Grid A top-left — same teal, cropped." },
  { file: "/brand/variants/variant-bronze.png", name: "Variant Bronze (A-TR)", desc: "Brown #8C5A2B — warm premium." },
  { file: "/brand/variants/variant-gold-black.png", name: "Variant Gold-Black (A-BL)", desc: "Black + gold Circuit — luxury night." },
  { file: "/brand/variants/variant-purple.png", name: "Variant Purple (A-BR)", desc: "Purple #6B3FA0 → pink — creative pop." },
  { file: "/brand/variants/variant-teal2.png", name: "Variant Teal2 (B-TL)", desc: "Grid B top-left teal duplicate." },
  { file: "/brand/variants/variant-red.png", name: "Variant Red (B-TR)", desc: "Red/dark #6D1E2A — bold." },
  { file: "/brand/variants/variant-bronze2.png", name: "Variant Bronze2 (B-BL)", desc: "Bronze alt — warmer gold." },
  { file: "/brand/variants/variant-blue-purple.png", name: "Variant Blue-Purple (B-BR)", desc: "Blue→purple gradient — tech vibe." },
];

export default function LogoPreview() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <div className="rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-4 text-sm text-zinc-300">Restored — <code className="bg-white/10 px-1">/brand/logo.png</code> is Image 1 dark master (copy-paste from transparent checker, hard dark edge, B/R fully transparent, no white fringe). Header shows it inside <span className="bg-white text-black px-1 rounded">white pill</span> on dark <code className="bg-[#081410] px-1 text-[#E8D5B5]">#081410</code> for contrast.</div>

      <h1 className="mt-6 font-display text-[28px] font-medium text-white">Logo — Image 1 Master, Transparent Background</h1>
      <p className="mt-2 text-[14px] text-zinc-400">Checker background removed (hard edge). B/R holes transparent, crown white stroke preserved, wordmark solid dark navy. Click image to open full PNG.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/" className="rounded-full bg-[#C9A86A] px-6 py-2.5 text-[13px] font-semibold text-[#081410]">Back to Home (see header)</Link>
        <a href="/brand/logo.png" target="_blank" className="rounded-full border border-[#C9A86A]/20 px-6 py-2.5 text-[13px] text-[#E8D5B5]">Open /brand/logo.png ★</a>
        <a href="/brand/logo-icon.png" target="_blank" className="rounded-full border border-white/10 px-6 py-2.5 text-[13px] text-zinc-300">Open /brand/logo-icon.png</a>
      </div>

      <div className="mt-8 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 p-6">
        <div className="text-[12px] tracking-[0.18em] text-[#C9A86A]">HEADER — DARK EMERALD WITH WHITE PILL</div>
        <div className="mt-4 bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-6 flex justify-center">
          <span className="bg-white rounded-full px-4 py-2 flex items-center">
            <img src="/brand/logo.png" alt="LeyBros" className="h-9 w-auto" />
          </span>
        </div>
        <div className="mt-3 text-[12px] text-zinc-500 text-center">As rendered in Header — dark LEYBROS on white pill, B/R transparent shows white pill (no dark hole blending)</div>
      </div>

      <div className="mt-8 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 p-6">
        <div className="text-[12px] tracking-[0.18em] text-[#C9A86A]">ICON — CROWN ONLY</div>
        <div className="mt-4 flex gap-6 items-center">
          <img src="/brand/logo-icon.png" alt="icon" className="h-20 w-auto bg-[#081410] rounded-xl p-2 border border-[#C9A86A]/10" />
          <img src="/brand/logo-icon.png" alt="icon" className="h-16 w-auto bg-white rounded-xl p-2 border border-black/10" />
          <span className="text-[12px] text-zinc-500">550×364 • for favicon/OG</span>
        </div>
      </div>

      {variants.map(v=>(
        <div key={v.file} className="mt-6 rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/40 overflow-hidden">
          <div className="p-4 border-b border-[#C9A86A]/10">
            <div className="font-display text-[16px] font-medium text-white">{v.name}</div>
            <div className="text-[13px] text-zinc-400">{v.desc}</div>
            <div className="text-[11px] text-zinc-500 mt-1">{v.file}</div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-[#081410] flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-[#C9A86A]">ON DARK #081410 — with white pill (as header)</div>
              <div className="bg-[#081410] border border-[#C9A86A]/10 rounded-xl p-4 flex justify-center">
                <span className="bg-white rounded-full px-3 py-1.5 flex items-center">
                  <img src={v.file} alt={v.name} className="h-8 w-auto object-contain" />
                </span>
              </div>
              <div className="text-[11px] text-zinc-500">Dark navy on white pill — sharp, no white patches</div>
            </div>
            <div className="p-6 bg-white flex flex-col gap-3">
              <div className="text-[11px] tracking-[0.14em] text-zinc-500">ON LIGHT #FFFFFF — direct (for OG/light pages)</div>
              <a href={v.file} target="_blank" className="bg-white border border-black/10 rounded-xl p-4 flex justify-center">
                <img src={v.file} alt={v.name} className="h-10 w-auto object-contain" />
              </a>
              <div className="text-[11px] text-zinc-500">Dark navy on white — B/R transparent shows white (correct)</div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 rounded-xl border border-[#C9A86A]/15 bg-[#10201A]/60 p-5 text-[13px] leading-6 text-zinc-300">
        <strong className="text-white">Expected (Image 1) restored:</strong> Solid dark navy LEYBROS on transparent — copy-paste from checker, no recolor, B/R fully transparent hard edge, no white squares. Header uses white pill to keep dark text legible on dark emerald.
      </div>
    </div>
  );
}
