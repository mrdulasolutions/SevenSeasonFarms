import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-ivory">
        <Image
          src="/images/product-2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest-deep/70 to-forest-deep/95" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-40">
          <Eyebrow>
            <span className="text-wheat">Family farm · Oxford, NC</span>
          </Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-[2.75rem] leading-[1.05] text-ivory md:text-7xl">
            Small farm.{" "}
            <span className="italic text-wheat">Big heart.</span>{" "}
            Food you can trust.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
            We&rsquo;re Chad &amp; Chrissy Wilkins. We raise A2A2 Jersey cows
            and grow food the way our grandparents did — slow, clean, and with
            a whole lot of care. Welcome to our little corner of North Carolina.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-black/20 transition hover:bg-terracotta-deep"
            >
              Shop Fresh Milk
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ivory/10"
            >
              Meet the Farm →
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <Section className="!py-20 md:!py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "100% A2A2 herd",
              body: "Every cow on our farm tested A2A2 — the easier-to-digest beta casein.",
              icon: "🐄",
            },
            {
              title: "RAWMI Listed",
              body: "One of only three raw-milk dairies in North Carolina meeting RAWMI safety standards.",
              icon: "✓",
            },
            {
              title: "Vine-ripened, always",
              body: "No synthetic pesticides. Nothing harvested before it&rsquo;s ready. If we wouldn&rsquo;t feed it to our kids, it&rsquo;s not for sale.",
              icon: "🌿",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-forest/10 bg-cream-soft p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-xl text-ivory">
                {item.icon}
              </div>
              <h3 className="mt-6 font-display text-2xl text-forest-deep">
                {item.title}
              </h3>
              <p
                className="mt-3 text-ink-soft"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Story teaser */}
      <section className="bg-cream-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
              Roots in this dirt,{" "}
              <span className="italic">decades deep.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Chad grew up on this land, following his grandparents through
              summers of squash, okra, and cattle. Chrissy brought the courage
              to jump in headfirst. Together, we&rsquo;ve built Seven Seasons
              Farm into the kind of place we wish every family could eat from.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We&rsquo;re not just looking for customers. We&rsquo;re looking
              to build relationships — we want to know you, feed you well, and
              hear what you think.
            </p>
            <Link
              href="/our-story"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta hover:text-terracotta-deep"
            >
              Read the Full Story
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/chad-and-chrissy.jpg"
              alt="Chad and Chrissy Wilkins"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-ivory/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep">
              Chad &amp; Chrissy Wilkins
            </div>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <Section>
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-10">
          <div>
            <Eyebrow>From our herd to your table</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
              Fresh milk the way it used to taste.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest-deep transition hover:border-forest hover:bg-forest hover:text-ivory"
          >
            See All Products →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ProductCard
            title="Fresh Milk"
            blurb="Creamy, pasture-raised A2A2 milk from our Jersey herd. Available in gallon and half-gallon."
            image="/images/product-1.jpg"
            sizes="1 Gallon · Half Gallon"
          />
          <ProductCard
            title="Fresh Buttermilk"
            blurb="Tangy, traditional buttermilk cultured with live probiotics. Perfect for biscuits, pancakes, or sipping cold."
            image="/images/product-3.jpg"
            sizes="Half Gallon"
          />
        </div>
      </Section>

      {/* Consulting teaser */}
      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wheat">
              For fellow homesteaders
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              We drank from the firehose{" "}
              <span className="italic text-wheat">so you don&rsquo;t have to.</span>
            </h2>
            <p className="mt-6 max-w-xl text-ivory/85">
              When we started this farm, we asked so many questions and kept
              hearing &ldquo;you&rsquo;ll figure it out.&rdquo; We learned the
              hard way. If you&rsquo;re starting or growing a farm, we&rsquo;re
              happy to share what we know.
            </p>
          </div>
          <div className="rounded-3xl border border-ivory/15 bg-forest-deep/60 p-8 backdrop-blur">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-wheat">$50</span>
              <span className="text-sm text-ivory/70">/ hour by phone</span>
            </div>
            <p className="mt-4 text-sm text-ivory/80">
              On-site consults available too, priced by distance from Oxford.
            </p>
            <Link
              href="/consulting"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <Section className="!py-20">
        <div className="rounded-3xl bg-ivory p-10 text-center shadow-sm ring-1 ring-forest/10 md:p-14">
          <Eyebrow>Call for availability</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-forest-deep md:text-4xl">
            We&rsquo;re small, but growing fast.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Milk sells out quickly. Give us a call to check availability, or
            reach out through the contact form and we&rsquo;ll get back to you
            the same day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+19193892290"
              className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-forest-deep"
            >
              📞 919-389-2290
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-forest/30 px-7 py-3.5 text-sm font-semibold text-forest-deep transition hover:bg-forest hover:text-ivory"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function ProductCard({
  title,
  blurb,
  image,
  sizes,
}: {
  title: string;
  blurb: string;
  image: string;
  sizes: string;
}) {
  return (
    <Link
      href="/products"
      className="group overflow-hidden rounded-3xl bg-cream-soft ring-1 ring-forest/10 transition hover:ring-forest/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          {sizes}
        </p>
        <h3 className="mt-3 font-display text-3xl text-forest-deep">
          {title}
        </h3>
        <p className="mt-3 text-ink-soft">{blurb}</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-forest-deep group-hover:text-terracotta">
          View Details →
        </p>
      </div>
    </Link>
  );
}
