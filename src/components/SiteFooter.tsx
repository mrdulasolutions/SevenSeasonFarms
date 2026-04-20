import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8 md:py-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-ivory object-contain p-1"
            />
            <span className="font-display text-2xl">Seven Seasons Farm</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/75">
            A small, family-run farm in Oxford, North Carolina. We raise
            A2A2 Jersey cows for fresh milk and share what we&rsquo;ve learned
            with fellow homesteaders.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-wheat">
            RAWMI Listed
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wheat">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>Oxford, NC 27565</li>
            <li>5 minutes from I-85 exit 204</li>
            <li>
              <a
                href="tel:+19193892290"
                className="text-ivory transition hover:text-terracotta"
              >
                919-389-2290
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wheat">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "/our-story", label: "Our Story" },
              { href: "/products", label: "Products" },
              { href: "/faqs", label: "FAQs" },
              { href: "/consulting", label: "Consulting" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ivory/80 transition hover:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-ivory/60 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Seven Seasons Farm. Raised with care
            in Oxford, NC.
          </p>
          <p>
            Prefer cash or Cash App · All major cards accepted
          </p>
        </div>
      </div>
    </footer>
  );
}
