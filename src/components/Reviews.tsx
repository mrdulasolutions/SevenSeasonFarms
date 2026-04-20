import { REVIEWS, REVIEW_STATS, type Review } from "@/lib/reviews";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function Reviews() {
  return (
    <div>
      {/* Header with average */}
      <div className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Customer reviews
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
            Real families.{" "}
            <span className="italic text-terracotta">Real glasses.</span>
          </h2>
        </div>
        <AverageCard />
      </div>

      {/* Review grid */}
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <li key={review.name + review.date}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function AverageCard() {
  return (
    <div className="flex items-center gap-5 rounded-3xl bg-ivory px-6 py-5 ring-1 ring-forest/10">
      <div className="text-center">
        <p className="font-display text-5xl leading-none text-forest-deep">
          {REVIEW_STATS.average.toFixed(1)}
        </p>
        <Stars rating={REVIEW_STATS.average} size="sm" />
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          {REVIEW_STATS.count} reviews
        </p>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-ivory p-6 ring-1 ring-forest/10">
      <header className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest text-sm font-semibold text-ivory"
        >
          {review.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-forest-deep">
            {review.name}
          </p>
          <p className="text-[11px] text-ink-soft">
            {formatDate(review.date)}
            {review.verified && (
              <>
                {" · "}
                <span className="inline-flex items-center gap-1 text-forest">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Verified
                </span>
              </>
            )}
          </p>
        </div>
      </header>

      <div className="mt-3">
        <Stars rating={review.rating} />
      </div>

      <p className="mt-4 flex-1 leading-relaxed text-ink">
        &ldquo;{review.body}&rdquo;
      </p>

      <footer className="mt-5 flex flex-wrap gap-1.5">
        {review.products.map((p) => (
          <span
            key={p}
            className="rounded-full bg-cream-soft px-3 py-1 text-[11px] font-medium text-forest-deep"
          >
            {p}
          </span>
        ))}
      </footer>
    </article>
  );
}

function Stars({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const dim = size === "sm" ? 12 : 16;
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        let fill = "text-wheat/30";
        if (i < full) fill = "text-terracotta";
        else if (i === full && hasHalf) fill = "text-terracotta";
        return (
          <svg
            key={i}
            width={dim}
            height={dim}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={fill}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
          </svg>
        );
      })}
    </div>
  );
}
