import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

export const metadata = {
  title: "Our Story",
  description:
    "Meet Chad and Chrissy Wilkins, the family behind Seven Seasons Farm in Oxford, NC.",
};

const STATS = [
  { value: "Est. 2018", label: "Family-run" },
  { value: "100%", label: "A2A2 Jersey herd" },
  { value: "RAWMI", label: "Listed dairy" },
  { value: "Oxford, NC", label: "Our little corner" },
];

export default function OurStoryPage() {
  return (
    <>
      {/* HERO: photo-forward split */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-ivory">
        <Image
          src="/images/product-2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/75 to-forest-deep" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-8 md:py-28">
          <div>
            <Eyebrow>
              <span className="text-wheat">Our Story</span>
            </Eyebrow>
            <h1 className="mt-6 font-display text-[2.25rem] leading-[1.05] md:whitespace-nowrap md:text-6xl">
              Roots in this dirt,{" "}
              <span className="italic text-wheat">decades deep.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/85">
              Chad &amp; Chrissy Wilkins, raising A2A2 Jersey cows, growing
              clean food, and building a farm the way our grandparents would
              recognize.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-ivory/10 md:mx-0">
            <Image
              src="/images/chad-and-chrissy.jpg"
              alt="Chad and Chrissy Wilkins"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-ivory/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep">
              Chad &amp; Chrissy
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="border-b border-forest/10 bg-cream-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-8 md:py-14">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-3xl text-forest-deep md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-FOUNDER SPLIT */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <article className="relative overflow-hidden rounded-3xl bg-cream-soft p-8 ring-1 ring-forest/10 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              Chad, the roots
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-forest-deep md:text-4xl">
              I grew up on this dirt.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              My grandparents taught me this land, one hot summer at a time:
              squash, okra, cattle, and more grumbling than I&rsquo;d like to
              admit. Time turned those chores into the memories I value most,
              and now I get to pass the same heritage down to my kids.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl bg-forest p-8 text-ivory ring-1 ring-forest md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wheat">
              Chrissy, the heart
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              She jumped first.
            </h2>
            <p className="mt-5 leading-relaxed text-ivory/85">
              Chrissy grew up loving agriculture and never outgrew it. The
              dreamer, unfazed by a new crop or a stubborn animal. Without her
              &ldquo;ask questions later&rdquo; bravery, we&rsquo;d be in a
              subdivision somewhere. Instead, we&rsquo;re here.
            </p>
          </article>
        </div>
      </Section>

      {/* PULL QUOTE */}
      <section className="bg-forest-deep text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
          <svg
            className="mx-auto text-wheat/60"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V7zm12 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V7z" />
          </svg>
          <p className="mt-6 font-display text-3xl italic leading-snug md:text-5xl">
            If we wouldn&rsquo;t serve it to our own family,
            <br className="hidden md:block" /> we won&rsquo;t sell it to yours.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-wheat">
            Our whole philosophy, in one line.
          </p>
        </div>
      </section>

      {/* HOW WE DO IT: icon grid */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How we do it</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
            Clean, slow,{" "}
            <span className="italic text-terracotta">done right.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Happy animals",
              body: "Animal-welfare-approved facilities. We believe an animal raised with care produces the best nutrition, every time.",
            },
            {
              title: "No synthetics",
              body: "No synthetic pesticides on our crops. We don&rsquo;t harvest until it&rsquo;s truly ripe. Vine, stem, or otherwise.",
            },
            {
              title: "Family table first",
              body: "Everything we sell is food we feed our own kids. The only exceptions are organ meat and pigs&rsquo; feet. We leave those to the experts.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-forest/10 bg-cream-soft p-8 text-left"
            >
              <h3 className="font-display text-2xl text-forest-deep">
                {item.title}
              </h3>
              <p
                className="mt-3 leading-relaxed text-ink-soft"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-24">
          <h2 className="font-display text-4xl leading-tight text-forest-deep md:text-5xl">
            We&rsquo;re not just looking for customers.{" "}
            <span className="italic text-terracotta">
              We&rsquo;re looking for neighbors.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            It&rsquo;s an honor to be your farmers. Come meet the herd, hear
            the story, and tell us what you think.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep"
            >
              See Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-forest/25 px-7 py-3.5 text-sm font-semibold text-forest-deep transition hover:bg-forest hover:text-ivory"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
