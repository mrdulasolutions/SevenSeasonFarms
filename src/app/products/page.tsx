import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

export const metadata = {
  title: "Products",
  description:
    "Fresh A2A2 milk and cultured buttermilk from Seven Seasons Farm in Oxford, NC. Available through our herd share or as registered pet milk.",
};

const PRODUCTS = [
  {
    slug: "fresh-milk",
    name: "Fresh Milk",
    tagline: "A2A2 · Jersey herd · Pasture-raised",
    image: "/images/product-1.jpg",
    image2: "/images/product-2.jpg",
    description:
      "Creamy, fresh milk from our pasture-raised A2A2 Jersey herd. Rich in natural flavor and easier to digest, our milk comes straight from happy cows grazing on lush pastures. Perfect for drinking, cooking, or making your own dairy creations at home.",
    details: [
      "100% A2A2 Jersey herd",
      "RAWMI Listed — tested weekly",
      "Bottled within hours of milking",
      "Cooled to under 40°F in a tank approved for raw milk",
    ],
    sizes: ["1 Gallon", "Half Gallon"],
    availability: [
      "Herd share (human consumption)",
      "Pet milk (registered with NCDA)",
    ],
  },
  {
    slug: "fresh-buttermilk",
    name: "Fresh Buttermilk",
    tagline: "Cultured · Probiotic · Traditional",
    image: "/images/product-3.jpg",
    image2: null,
    description:
      "Discover the tangy, creamy goodness of our Fresh Buttermilk — carefully cultured with live probiotic cultures to deliver authentic flavor and nutrition in every pour. Rich and thick, this traditional buttermilk is perfect for baking fluffy pancakes and tender biscuits, or enjoying straight from the glass.",
    details: [
      "Cultured in small batches",
      "Live probiotics for digestive health",
      "Rich, thick texture — the way buttermilk should be",
      "From the same A2A2 Jersey herd as our fresh milk",
    ],
    sizes: ["Half Gallon"],
    availability: [
      "Herd share (human consumption)",
      "Pet milk (registered with NCDA)",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>What we make</Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-tight text-forest-deep md:text-7xl">
            From our herd{" "}
            <span className="italic text-terracotta">to your home.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Every bottle starts in the same 30-gallon tank — cooled in an hour,
            filtered clean, and labeled with care. Two products, one standard:
            good enough for our kids first.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-20">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.slug}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-forest-deep/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                {product.image2 && (
                  <div className="relative hidden aspect-square overflow-hidden rounded-3xl bg-forest-deep/5 md:block">
                    <Image
                      src={product.image2}
                      alt={`${product.name} half gallon`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                  {product.tagline}
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
                  {product.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {product.description}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep">
                      Sizes
                    </p>
                    <ul className="mt-2 space-y-1 text-ink-soft">
                      {product.sizes.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep">
                      Available as
                    </p>
                    <ul className="mt-2 space-y-1 text-ink-soft">
                      {product.availability.map((a) => (
                        <li key={a} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="mt-6 grid gap-2 text-sm text-ink-soft">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="mt-0.5 text-forest"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+19193892290"
                    className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep"
                  >
                    Call 919-389-2290
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-forest/25 px-6 py-3 text-sm font-semibold text-forest-deep transition hover:bg-forest hover:text-ivory"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Notes */}
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-ivory p-8 ring-1 ring-forest/10">
              <h3 className="font-display text-2xl text-forest-deep">
                Herd share vs. pet milk
              </h3>
              <p className="mt-3 text-ink-soft">
                The milk is identical — same tank, same cows, same day. The
                only difference is the label and the lid color. Herd shares let
                you own a small piece of the herd, which is how raw milk is
                legally obtained for human consumption in NC. Pet milk is
                registered with the NCDA as a pet treat.
              </p>
              <Link
                href="/faqs"
                className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-terracotta hover:text-terracotta-deep"
              >
                Read the FAQs →
              </Link>
            </div>
            <div className="rounded-3xl bg-ivory p-8 ring-1 ring-forest/10">
              <h3 className="font-display text-2xl text-forest-deep">
                How to get your milk
              </h3>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <strong className="text-forest-deep">Call ahead.</strong>{" "}
                  We&rsquo;re small and sell out fast.
                </li>
                <li>
                  <strong className="text-forest-deep">Pick a pickup spot.</strong>{" "}
                  On-farm or a Triangle drop point — we&rsquo;ll work out a
                  schedule that fits.
                </li>
                <li>
                  <strong className="text-forest-deep">We accept</strong> cash,
                  Cash App (preferred), and all major credit cards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
