import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

export const metadata = {
  title: "Consulting",
  description:
    "Farm and homestead consulting from Chad and Chrissy Wilkins. One-hour phone calls or on-site visits.",
};

export default function ConsultingPage() {
  return (
    <>
      <section className="bg-forest text-ivory">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>
            <span className="text-wheat">Consulting</span>
          </Eyebrow>
          <h1 className="mt-6 font-display text-[2.25rem] leading-tight md:whitespace-nowrap md:text-6xl">
            We&rsquo;ve been there.{" "}
            <span className="italic text-wheat">We&rsquo;ll help.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/85">
            When you start a farm or homestead, you have to wear a lot of
            hats. We&rsquo;ve drunk from the firehose, made the mistakes, and
            kept the lights on. Here&rsquo;s what we learned.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <article className="prose-farm max-w-none">
            <p className="font-display text-2xl leading-snug text-forest-deep">
              When you start a farm or homestead, you immediately have to wear
              multiple hats. You&rsquo;re more than a farmer. You&rsquo;re a
              livestock nutritionist, a veterinarian, an electrician, a
              plumber, a carpenter. You have to get comfortable with all of
              it, unless you&rsquo;re independently wealthy and can hire it
              out. (A good relationship with a vet is a must.)
            </p>
            <p>
              When we started this venture, we asked other small farmers so
              many questions. Many times the answer was,{" "}
              <em>&ldquo;You&rsquo;ll figure it out.&rdquo;</em> They
              wouldn&rsquo;t even offer what they did know. So we drank from
              the firehose, failed more than once, and along the way we
              learned a lot. There&rsquo;s a lot to be said for experience.
            </p>
            <p>
              We&rsquo;d like to help where we can. In that spirit, we offer
              consulting services for your farm or homestead.
            </p>
            <p>
              We are not experts. But we&rsquo;ve learned a lot, and
              we&rsquo;re happy to share what we know with you.
            </p>
          </article>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl bg-ivory p-8 ring-1 ring-forest/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Phone consultation
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl text-forest-deep">
                  $50
                </span>
                <span className="text-ink-soft">/ hour</span>
              </div>
              <p className="mt-4 text-ink-soft">
                From the comfort of your living room. Up to one hour discussing
                your farm. Whatever questions you&rsquo;ve got, we&rsquo;ll
                bring what we know.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep"
              >
                Book a Call
              </Link>
            </div>

            <div className="rounded-3xl bg-cream-soft p-8 ring-1 ring-forest/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                On-site consultation
              </p>
              <div className="mt-3">
                <span className="font-display text-3xl text-forest-deep">
                  Quote on request
                </span>
              </div>
              <p className="mt-4 text-ink-soft">
                We&rsquo;ll come to your homestead to see the lay of the land
                and help plan your setup. Pricing depends on distance from
                Oxford, NC.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest-deep transition hover:bg-forest hover:text-ivory"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-cream-soft">
        <Section className="!py-16 md:!py-20">
          <h2 className="font-display text-3xl text-forest-deep md:text-4xl">
            What we can talk through.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Animal husbandry",
                body: "Dairy cattle, beef cattle, laying hens, and the day-to-day of keeping animals healthy and happy.",
              },
              {
                title: "Raw-milk dairying",
                body: "From milking routine to cooling to RAWMI standards. The real cost and rhythm of a small dairy.",
              },
              {
                title: "Land &amp; setup",
                body: "Pasture layout, fencing, water, barns, and the small decisions that compound over years.",
              },
              {
                title: "Crops &amp; produce",
                body: "Seasonal planning, vine-ripening, pest management without synthetics, and what to grow first.",
              },
              {
                title: "Selling direct",
                body: "Drop points, herd shares, NCDA registration for pet products, and the admin side of a farm.",
              },
              {
                title: "Starting out",
                body: "What we wish we&rsquo;d known day one, and the mistakes we made so you can skip them.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl bg-ivory p-6 ring-1 ring-forest/10"
              >
                <h3
                  className="font-display text-xl text-forest-deep"
                  dangerouslySetInnerHTML={{ __html: topic.title }}
                />
                <p
                  className="mt-2 text-ink-soft"
                  dangerouslySetInnerHTML={{ __html: topic.body }}
                />
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
