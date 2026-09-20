import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data?.email || !data?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Fallback — no key configured, echo success for v1 without sending
    return NextResponse.json({ ok: true, mode: "no-key-placeholder", received: data });
  }

  // When RESEND_API_KEY is provided, this will send via Resend.
  try {
    // @ts-ignore
    const mod = await import("resend").catch(() => null);
    if (!mod) throw new Error("resend package not installed — run npm i resend when ready");
    const { Resend } = mod as { Resend: new (k: string) => { emails: { send: (o: unknown) => Promise<unknown> } } };
    const resend = new Resend(key);
    const to = data.category === "stock-knowledge" ? process.env.CONTACT_TO_OBSERVE || process.env.CONTACT_TO || "hello@leybros.com" : process.env.CONTACT_TO_FREELANCE || process.env.CONTACT_TO || "hello@leybros.com";
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "LeyBros <onboarding@resend.dev>",
      to,
      subject: `[LeyBros] ${data.category} — ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nCategory: ${data.category}\n\n${data.message}`,
    });
    return NextResponse.json({ ok: true, mode: "resend" });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Resend error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
