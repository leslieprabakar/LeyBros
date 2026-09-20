import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "Contact — Split Enquiry", description: "Contact LeyBros: freelance services vs. stock-market knowledge program — two distinct enquiries." };

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ intent?: string }> }) {
  const intent = (await searchParams)?.intent;
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10">
      <SectionHeader kicker="CONTACT — PREMIUM ENQUIRY" title="Two lanes, one inbox — choose your intent." desc="Freelance client enquiries and knowledge-program enquiries are handled separately. Pick the lane so context stays clean." />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form action="#" method="post" className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6 grid gap-4">
          {intent === "market-insight" && <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-200">Knowledge Program intent pre-selected — education only, not advice. You can switch below.</div>}
          <div className="grid gap-2">
            <label htmlFor="category" className="text-xs tracking-[0.12em] text-zinc-400">CATEGORY *</label>
            <select id="category" name="category" defaultValue={intent==="market-insight" ? "stock-knowledge" : ""} className="rounded-xl border border-[#C9A86A]/15 bg-[#081410] px-3 py-3 text-sm text-white" required>
              <option value="" disabled>Select one</option>
              <option value="website">Website Development — ₹4,999 onwards</option>
              <option value="seo">SEO — ₹1,999/mo</option>
              <option value="ai-image">AI Image / Enhancement — ₹5,999/20 images</option>
              <option value="ai-video">AI Video & 3D — ₹14,999/campaign</option>
              <option value="3d">3D Visualization</option>
              <option value="ads">Advertising / UGC</option>
              <option value="other">Other Freelance Requirement</option>
              <option value="stock-knowledge">Stock-Market Knowledge Program</option>
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2"><label htmlFor="name" className="text-xs tracking-[0.12em] text-zinc-400">FULL NAME *</label><input id="name" name="name" required placeholder="Your name" className="rounded-xl border border-[#C9A86A]/15 bg-[#081410] px-3 py-3 text-sm text-white placeholder:text-zinc-500" /></div>
            <div className="grid gap-2"><label htmlFor="email" className="text-xs tracking-[0.12em] text-zinc-400">EMAIL *</label><input id="email" name="email" type="email" required placeholder="you@company.com" className="rounded-xl border border-[#C9A86A]/15 bg-[#081410] px-3 py-3 text-sm text-white placeholder:text-zinc-500" /></div>
          </div>
          <div className="grid gap-2"><label htmlFor="message" className="text-xs tracking-[0.12em] text-zinc-400">MESSAGE *</label><textarea id="message" name="message" required rows={5} placeholder="Outcome you want, timeline, budget range (e.g. ₹4,999 / ₹9,999 / ₹18,999), links..." className="rounded-xl border border-[#C9A86A]/15 bg-[#081410] px-3 py-3 text-sm text-white placeholder:text-zinc-500" /></div>

          <button type="submit" className="rounded-full bg-[#C9A86A] px-6 py-3 text-sm font-semibold text-[#081410] hover:bg-[#D4B78A]">Send enquiry →</button>
          <p className="text-[11px] leading-5 text-zinc-500">Pricing: Websites ₹4,999/₹9,999/₹18,999 • AI Visuals ₹5,999/20 • Video & 3D ₹14,999/campaign. 50% advance. Uses <code className="bg-white/10 px-1 py-0.5 rounded">mailto</code> fallback until <code>RESEND_API_KEY</code> is set.</p>
        </form>

        <div className="space-y-4">
          <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#10201A]/60 p-6">
            <div className="text-xs tracking-[0.18em] text-[#C9A86A]">WHAT HAPPENS NEXT</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300 list-disc pl-5">
              <li>Freelance: scope → approach → timeline → estimate → start</li>
              <li>Knowledge: program overview → example observations → next discussion</li>
            </ul>
          </div>
          <div className="rounded-[16px] border border-amber-500/15 bg-amber-500/[0.06] p-6 text-xs leading-5 text-zinc-400">
            <div className="text-sm font-semibold text-amber-200">Separate lanes matter</div>
            <p className="mt-2">Stock-market mentorship is <span className="text-zinc-200">not</span> bundled with freelance services. No buy/sell calls. If you’re here for a website, choose a WEB/AI category.</p>
          </div>
          <div className="rounded-[16px] border border-[#C9A86A]/12 bg-[#081410] p-4 text-[11px] leading-5 text-zinc-500">
            Email direct: <a href="mailto:hello@leybros.com" className="text-[#E8D5B5] hover:underline">hello@leybros.com</a> • Websites ₹4,999–18,999 • AI ₹5,999–14,999
          </div>
        </div>
      </div>
    </div>
  );
}
