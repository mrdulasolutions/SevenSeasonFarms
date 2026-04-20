"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-cream-soft p-8 text-center">
        <p className="text-2xl font-display text-forest-deep">
          Thank you!
        </p>
        <p className="mt-3 text-ink-soft">
          Your message is on its way. We&rsquo;ll be in touch within 24 hours.
          Check your spam folder if you don&rsquo;t see a reply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <Field label="How can we help?" name="message" textarea required />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-terracotta-deep">
          Something went wrong. Please call us at 919-389-2290 instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-2xl border border-forest/15 bg-cream-soft px-4 py-3 text-ink outline-none transition focus:border-forest focus:bg-ivory focus:ring-2 focus:ring-forest/10";
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={base}
          autoComplete={
            name === "email" ? "email" : name === "phone" ? "tel" : name === "name" ? "name" : undefined
          }
        />
      )}
    </label>
  );
}
