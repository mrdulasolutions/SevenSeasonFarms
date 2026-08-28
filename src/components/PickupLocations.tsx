import { Eyebrow } from "@/components/Section";

export const SHOP_URL = "https://www.locallygrown.app/seven-seasons-farm";

export function PickupLocations() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>Pickup &amp; delivery</Eyebrow>
      <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
        Find us{" "}
        <span className="italic text-terracotta">near you.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-ink-soft">
        Pickup locations and times live in our online shop. Choose a drop
        point that works for you when you order.
      </p>
      <a
        href={SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-1.5 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-ivory shadow-sm transition hover:bg-terracotta-deep"
      >
        Shop Online to Find a Location
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </a>
    </div>
  );
}
