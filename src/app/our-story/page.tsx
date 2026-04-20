import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

export const metadata = {
  title: "Our Story",
  description:
    "Meet Chad and Chrissy Wilkins, the family behind Seven Seasons Farm in Oxford, NC.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-forest text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>
            <span className="text-wheat">Our Story</span>
          </Eyebrow>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            From our pastures{" "}
            <span className="italic text-wheat">to your table.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/85">
            We&rsquo;re a small family farm in Oxford, North Carolina —
            raising A2A2 Jersey cows and growing food the way our grandparents
            did.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="sticky top-28 hidden md:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/chad-and-chrissy.jpg"
                alt="Chad and Chrissy Wilkins"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm uppercase tracking-[0.22em] text-terracotta">
              Chad &amp; Chrissy Wilkins
            </p>
          </div>

          <article className="prose-farm max-w-none">
            <p className="font-display text-2xl leading-snug text-forest-deep">
              I&rsquo;m Chad Wilkins, and together with my wife, Chrissy, I run
              the daily whirlwind that is Seven Seasons Farm. We have a deep
              passion for this life, but more importantly, we love the
              connection it builds between our land and your table.
            </p>

            <div className="md:hidden">
              <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/chad-and-chrissy.jpg"
                  alt="Chad and Chrissy Wilkins"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mt-8">
              My history with this dirt goes back decades. I grew up right
              here, spending my childhood summers &ldquo;helping&rdquo; my
              grandparents harvest whatever was hitting its peak. If I&rsquo;m
              being honest, most of that help consisted of me grumbling about
              the heat and the dirt. Back then, you couldn&rsquo;t have paid me
              to care about squash, okra, or cattle. But time has a funny way
              of turning chores into treasures. Those long, dusty afternoons
              became the memories I value most, and I&rsquo;m determined to
              pass that same heritage down to my kids — even if they&rsquo;re
              currently following in my footsteps by complaining about the
              work.
            </p>

            <p>
              While I provide the roots, Chrissy is the heart and the courage
              behind this operation. She grew up with a relentless love for
              agriculture that she never outgrew. She is our resident dreamer:
              the kind of person who is completely unfazed by the challenge of
              a new crop or a stubborn animal. If it weren&rsquo;t for her
              vision and her &ldquo;jump first, ask questions later&rdquo;
              bravery, we&rsquo;d likely be sitting in a subdivision somewhere.
              Instead, she pushed us to dive headfirst into the dirt, and we
              haven&rsquo;t looked back since.
            </p>

            <div className="my-10 rounded-3xl border-l-4 border-terracotta bg-cream-soft p-8">
              <p className="!mt-0 font-display text-2xl leading-snug text-forest-deep">
                If we wouldn&rsquo;t serve it to our own family, we won&rsquo;t
                sell it to yours.
              </p>
            </div>

            <p>
              Our philosophy is straightforward. We&rsquo;ve poured ourselves
              into learning how to grow food that is as clean as it is
              delicious. We treat our animals with genuine respect and
              dignity, using only animal-welfare-approved facilities. We
              believe that an animal raised with care provides the best
              possible nutrition. The same goes for our crops. You won&rsquo;t
              find synthetic pesticides here, and we refuse to harvest anything
              until it has reached its full, vine-ripened potential.
            </p>

            <p>
              The only thing you&rsquo;ll find in our shop that isn&rsquo;t on
              our personal menu is the organ meat and pigs&rsquo; feet.
              We&rsquo;ll leave those to the experts, but we&rsquo;re proud to
              provide them for you!
            </p>

            <p>
              It&rsquo;s a true honor to be your farmers. We aren&rsquo;t just
              looking for customers — we&rsquo;re looking to build
              relationships. We can&rsquo;t wait to meet you, hear your
              stories, and get your honest take on what we&rsquo;re producing.
            </p>

            <p className="font-display text-2xl text-forest-deep">
              Welcome to Seven Seasons Farm. We&rsquo;re glad you&rsquo;ve
              joined us.
            </p>
          </article>
        </div>
      </Section>

      <section className="bg-forest-deep text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">
            Come meet the herd.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/80">
            Give us a call, stop by the farm, or shoot us a note. We&rsquo;d
            love to hear from you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-terracotta-deep"
            >
              See Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ivory/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
