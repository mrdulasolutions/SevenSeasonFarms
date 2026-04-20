"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { href: "/our-story", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/faqs", label: "FAQs" },
  { href: "/consulting", label: "Consulting" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-forest-deep"
          aria-label="Seven Seasons Farm home"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={52}
            height={52}
            priority
            className="h-12 w-12 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-tight text-forest-deep md:text-xl">
              Seven Seasons Farm
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta">
              Oxford, North Carolina
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition hover:bg-terracotta-deep"
          >
            Call the Farm
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 text-forest md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-cream md:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-ivory"
              >
                Call 919-389-2290
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
