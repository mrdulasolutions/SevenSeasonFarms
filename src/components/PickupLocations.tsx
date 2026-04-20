import { PICKUPS } from "@/lib/pickups";
import { Eyebrow } from "@/components/Section";

export function PickupLocations({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  return (
    <div className={variant === "full" ? "" : ""}>
      {variant === "full" && (
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Pickup &amp; delivery</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
            Find us{" "}
            <span className="italic text-terracotta">near you.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Pickup is available on the farm or at drop points across the
            Triangle. Pre-order by phone. Milk sells out fast.
          </p>
        </div>
      )}

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {PICKUPS.map((p) => {
          const isFarm = p.name === "Seven Seasons Farm";
          return (
            <li
              key={p.name}
              className={`rounded-3xl p-6 ring-1 transition ${
                isFarm
                  ? "bg-forest text-ivory ring-forest"
                  : "bg-ivory ring-forest/10 hover:ring-forest/25"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full ${
                    isFarm ? "bg-wheat text-forest-deep" : "bg-terracotta text-ivory"
                  }`}
                  aria-hidden
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={`font-display text-xl ${
                      isFarm ? "text-ivory" : "text-forest-deep"
                    }`}
                  >
                    {p.name}
                    {isFarm && (
                      <span className="ml-2 rounded-full bg-wheat px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-deep">
                        On-farm
                      </span>
                    )}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      isFarm ? "text-ivory/80" : "text-ink-soft"
                    }`}
                  >
                    {p.address} · {p.city} {p.zip}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.times.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isFarm
                            ? "bg-ivory/15 text-ivory"
                            : "bg-cream-soft text-forest-deep"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-center text-sm text-ink-soft">
        Need a different spot or time?{" "}
        <a
          href="tel:+19193892290"
          className="font-semibold text-terracotta hover:text-terracotta-deep"
        >
          Call 919-389-2290
        </a>
        . We&rsquo;ll work something out.
      </p>
    </div>
  );
}
