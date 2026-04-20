import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";
import { PickupLocations } from "@/components/PickupLocations";

export const metadata = {
  title: "FAQs",
  description:
    "Your farm-fresh FAQ guide. Raw milk safety, A2A2 genetics, herd shares, RAWMI certification, and more.",
};

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is fresh milk?",
    a: (
      <p>
        Fresh milk is just that: fresh. It&rsquo;s never cooked, heated, or
        treated to remove any of its natural goodness. It isn&rsquo;t
        pasteurized or homogenized. It&rsquo;s milk straight from the cow,
        filtered into a jug.
      </p>
    ),
  },
  {
    q: "What is A2A2 milk?",
    a: (
      <p>
        A2A2 milk comes from cows that have two copies of the A2 gene for beta
        casein. A2A2 milk does not carry the BCM7 peptide, which is thought to
        have pro-inflammatory properties and could contribute to certain
        chronic issues. More study is needed, but many people report being
        able to more easily digest A2A2 milk than the A1A1 and A1A2 counterparts
        widely available in supermarkets today.
      </p>
    ),
  },
  {
    q: "Is A2A2 milk better than A1A1 or A1A2?",
    a: (
      <>
        <p>
          For a lot of people, yes, and it&rsquo;s the reason we chose to
          build our herd around it. A2A2 milk doesn&rsquo;t contain the BCM7
          peptide associated with the A1 beta-casein, and many of our
          customers tell us it&rsquo;s noticeably easier to digest, especially
          folks who struggle with typical supermarket milk.
        </p>
        <p>
          We won&rsquo;t oversell the science. Most published digestibility
          studies have been on ultra-pasteurized, homogenized milk, not
          fresh milk like ours, so the research doesn&rsquo;t perfectly
          match what ends up in your glass. What we can tell you is that our
          entire herd is 100% tested A2A2, and we built it that way on
          purpose: it&rsquo;s the gentlest option we could offer, and our
          family drinks it every day.
        </p>
        <p>
          If you&rsquo;ve had trouble with dairy in the past, A2A2 fresh
          milk is often where people start, and where they stay.
        </p>
      </>
    ),
  },
  {
    q: "Is your milk A2A2?",
    a: <p>Yes. Our herd is 100% A2A2.</p>,
  },
  {
    q: "What does &ldquo;RAWMI Listed&rdquo; mean?",
    a: (
      <>
        <p>
          RAWMI Listed means we&rsquo;ve been trained and certified by the Raw
          Milk Institute. There are only 39 raw milk dairies in the world,
          three in North Carolina, that have gone through this process. RAWMI
          Listed means our milk is tested monthly for coliform bacteria (total
          coliform and E. coli) and total bacteria count. RAWMI standards
          allow no more than 10 CFU of coliform per mL of milk (E. coli must
          be 0) and no more than 5000 CFU for Standard Plate Count. These
          standards exceed US standards for pasteurized milk.
        </p>
        <p>
          Carrying this certification means you can trust our milk is as safe
          as possible. We test weekly (more if necessary) and publish our
          results with{" "}
          <a
            href="http://www.rawmilkinstitute.org/"
            target="_blank"
            rel="noreferrer"
            className="text-terracotta underline hover:text-terracotta-deep"
          >
            the Raw Milk Institute
          </a>
          . We&rsquo;ve made significant investments, financial and otherwise,
          to hold this certification so our customers can enjoy our products
          with peace of mind.
        </p>
        <p>
          RAWMI Listed is not a guarantee on safety. You still need to do
          your own research to decide if fresh milk is right for you and your
          family.
        </p>
      </>
    ),
  },
  {
    q: "What&rsquo;s the difference between herd share and pet milk?",
    a: (
      <p>
        The label and the lid color. That&rsquo;s it. We milk every cow the
        same way, and it all goes into the same 30-gallon tank. When we
        bottle, we figure out how many herd-share gallons are scheduled, use
        white lids and herd-share labels for those, and red lids and pet-milk
        labels for the rest. Otherwise the milk is the same.
      </p>
    ),
  },
  {
    q: "Why does the pet milk label say &ldquo;Not for human consumption&rdquo;?",
    a: (
      <>
        <p>
          It is not legal to sell raw milk for human consumption in North
          Carolina. However, it is legal to sell raw milk as a pet treat,
          provided the product is registered with the NC Department of
          Agriculture (which ours is). Part of registration requires an
          approved label that includes the phrase &ldquo;Not for human
          consumption.&rdquo;
        </p>
        <p>
          Fresh milk can be legally obtained for human consumption from a farm
          where you own all or part of a cow/goat or herd. This is called
          herd-sharing.
        </p>
      </>
    ),
  },
  {
    q: "Are herd shares the same as buying milk?",
    a: (
      <>
        <p>No.</p>
        <p>
          In herd shares, you purchase a small portion of the herd. That
          partial ownership gives you access to the milk the herd produces.
          Once you buy in, you pay the farm a monthly board fee that covers
          care, feeding, labor, and bottling. We work with you to pick a pickup
          day each week. One share = one gallon per week. Two shares = two
          gallons, and so on. You pay at the beginning of each month for the
          entire month. No refunds if you miss a week. We can&rsquo;t
          guarantee makeups, but we&rsquo;ll work with you given enough
          notice.
        </p>
      </>
    ),
  },
  {
    q: "Is fresh milk safe to drink?",
    a: (
      <>
        <p>
          We do not sell our fresh milk for human consumption (not legal in
          NC). What you do with it when you get home is up to you. Our milk is
          collected with the highest standards of safety and cleanliness. Our
          family consumes and uses our milk without pasteurizing it.
        </p>
        <p>
          We recommend doing your own research to decide if fresh milk is
          right for you and your family. There&rsquo;s plenty of material
          online on the risks and benefits.
        </p>
      </>
    ),
  },
  {
    q: "That label is scary. Is the milk safe?",
    a: (
      <p>
        We don&rsquo;t bottle any milk we wouldn&rsquo;t drink ourselves or
        feed to our children. For more, see the safety and collection
        questions below.
      </p>
    ),
  },
  {
    q: "How do you collect the milk?",
    a: (
      <p>
        We machine-milk our herd using a closed, vacuum-operated bucket system
        with in-line filtration. The system is sealed from the elements of the
        barn and provides the cleanest possible product. After harvest, we
        bring the milk into our garage and run it through another filter into
        a 30-gallon tank to remove anything that may have found its way in.
      </p>
    ),
  },
  {
    q: "How do you cool your milk?",
    a: (
      <p>
        We use a 30-gallon bulk tank approved for raw milk. It cools 15 gallons
        of milk to below 40°F in one hour while gently agitating to keep the
        cream incorporated. We pour the milk off every day, clean the tank,
        and have it ready for the next day&rsquo;s harvest.
      </p>
    ),
  },
  {
    q: "How long will fresh milk keep in the fridge?",
    a: (
      <p>
        That depends largely on how you handle it.{" "}
        <a
          href="https://www.kitchenstewardship.com/recipes/safe-handling-of-raw-milk-keep-it-fresh/"
          target="_blank"
          rel="noreferrer"
          className="text-terracotta underline hover:text-terracotta-deep"
        >
          This is an excellent article
        </a>{" "}
        on how to properly handle it once you pick it up from the farm. If
        properly handled, fresh milk can last up to two weeks, sometimes
        longer.
      </p>
    ),
  },
  {
    q: "Can fresh milk be frozen?",
    a: (
      <p>
        Yes, fresh milk can be frozen and thawed with no impact to flavor.
        However once frozen, the cream sometimes doesn&rsquo;t fully
        reconstitute, meaning you may find little pellets of cream. This
        doesn&rsquo;t happen with goat milk, which is naturally more
        homogenized.
      </p>
    ),
  },
  {
    q: "Where and when can I pick up?",
    a: (
      <>
        <p>
          We do on-farm pickup plus drop points across the Triangle: Wake
          Forest, Raleigh (North Hills), Cary, Youngsville, and Fuquay-Varina.
          Saturday pickups happen at the Wake Forest Farmer&rsquo;s Market and
          The Forks Cafeteria in Wake Forest. See the full schedule on the{" "}
          <Link
            href="/products#pickup"
            className="text-terracotta underline hover:text-terracotta-deep"
          >
            Products page
          </Link>{" "}
          or call us to arrange something.
        </p>
      </>
    ),
  },
  {
    q: "Do you have milk available daily?",
    a: (
      <p>
        We do, but it sells out quickly. Call ahead or order online for pickup
        at a Triangle drop point or on the farm.
      </p>
    ),
  },
  {
    q: "How do you store your milk?",
    a: (
      <p>
        Milk for sale is stored in a plastic gallon or half-gallon jug (just
        like you see in the store).
      </p>
    ),
  },
  {
    q: "What do you feed your cows?",
    a: (
      <p>
        Our cows have 24/7 access to high-quality pasture, hay, loose
        minerals, and fresh clean water. We supplement forage with
        high-quality grains that keep their body condition up and help them
        produce great milk. The feed is locally sourced, non-GMO whole grain
        with absolutely no fillers. Most of it grown in Warren County, NC.
      </p>
    ),
  },
];

export default function FAQsPage() {
  return (
    <>
      <section className="bg-cream-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>Questions &amp; answers</Eyebrow>
          <h1 className="mt-5 font-display text-[2.5rem] leading-tight text-forest-deep md:whitespace-nowrap md:text-6xl">
            Your farm-fresh{" "}
            <span className="italic text-terracotta">FAQ guide.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Everything we&rsquo;re asked about our milk, our herd, and how we
            do things. If you don&rsquo;t see your question,{" "}
            <Link
              href="/contact"
              className="text-terracotta underline hover:text-terracotta-deep"
            >
              send us a note
            </Link>
            .
          </p>
        </div>
      </section>

      <Section className="!pt-8 md:!pt-12">
        <div className="mx-auto max-w-3xl">
          <ul className="divide-y divide-forest/10 border-y border-forest/10">
            {FAQS.map((item, idx) => (
              <li key={idx}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3
                      className="font-display text-xl text-forest-deep md:text-2xl"
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                    <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-forest/25 text-forest transition group-open:rotate-45 group-open:border-terracotta group-open:bg-terracotta group-open:text-ivory">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="prose-farm mt-5 max-w-none pr-4 text-ink-soft md:pr-14">
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-cream-soft">
        <Section>
          <PickupLocations />
        </Section>
      </section>
    </>
  );
}
