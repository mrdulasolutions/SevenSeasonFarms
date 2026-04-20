import { Eyebrow, Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Seven Seasons Farm. Call 919-389-2290 or send a message. Located in Oxford, NC.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-5 font-display text-[2.25rem] leading-tight text-forest-deep md:whitespace-nowrap md:text-6xl">
            We&rsquo;d love to{" "}
            <span className="italic text-terracotta">hear from you.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Thank you for your interest in our farm. Ask a question, check
            availability, or just say hello. We try to respond to calls and
            emails the same day.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl bg-forest-deep p-8 text-ivory md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wheat">
                The quickest way
              </p>
              <p className="mt-4 font-display text-4xl">
                <a
                  href="tel:+19193892290"
                  className="hover:text-wheat"
                >
                  919-389-2290
                </a>
              </p>
              <p className="mt-3 text-ivory/80">
                Call to check product availability. If we don&rsquo;t answer,
                leave a message. We&rsquo;ll get back to you as soon as we
                can.
              </p>
            </div>

            <div className="rounded-3xl bg-ivory p-8 ring-1 ring-forest/10 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                Visit the farm
              </p>
              <p className="mt-4 font-display text-2xl text-forest-deep">
                Oxford, North Carolina
              </p>
              <p className="mt-2 text-ink-soft">
                About 5 minutes from I-85 at exit 204. Give us a call before
                you stop by.
              </p>
            </div>

            <div className="rounded-3xl bg-cream-soft p-8 ring-1 ring-forest/10 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                Payment
              </p>
              <p className="mt-3 text-ink-soft">
                We accept all major credit cards. We prefer cash or Cash App.
              </p>
            </div>

            <p className="text-sm text-ink-soft">
              If you haven&rsquo;t heard back from us within 24 hours, check
              your spam folder. Our replies sometimes land there.
            </p>
          </div>

          <div className="rounded-3xl bg-ivory p-8 ring-1 ring-forest/10 md:p-10">
            <h2 className="font-display text-3xl text-forest-deep">
              Send us a message
            </h2>
            <p className="mt-2 text-ink-soft">
              Fill out the form below and we&rsquo;ll reach back out.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
