import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // For now, log to Worker logs (visible via `wrangler tail`). Wire up an
  // email provider (Resend, Postmark, SendGrid) by setting CONTACT_WEBHOOK_URL
  // as a Worker secret and this handler will forward the submission.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "sevenseasonsfarm.com",
          name,
          email,
          phone: phone || null,
          message,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("contact webhook failed", err);
    }
  } else {
    console.log("[contact]", { name, email, phone, message });
  }

  return NextResponse.json({ ok: true });
}
