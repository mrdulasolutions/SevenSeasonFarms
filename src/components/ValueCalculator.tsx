"use client";

import { useState } from "react";

// Defaults can be edited in one place.
const SSF_PRICE_PER_GAL = 18;
const STORE_MILK_DEFAULT = 4.5;

// Per-gallon equivalent values you can reasonably claim are "bundled in."
const CREAM_PINT_PRICE = 3.5; // organic heavy cream
const CREAM_PINTS_PER_GAL = 0.5; // ~1 cup of cream per gallon of Jersey milk
const PROBIOTIC_MONTHLY_PER_PERSON = 35; // cost of a decent daily probiotic
const BUTTER_PER_LB = 5.5; // organic butter
const BUTTER_LB_PER_GAL = 0.4; // ~6-7 oz butter per gallon if you churn the cream
const YOGURT_QUART_PRICE = 6; // organic whole-milk yogurt
const YOGURT_QUARTS_PER_GAL = 3; // 1 gal → ~3 qt yogurt

const currency = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export function ValueCalculator() {
  const [gallonsPerWeek, setGallonsPerWeek] = useState(1);
  const [storePrice, setStorePrice] = useState(STORE_MILK_DEFAULT);
  const [people, setPeople] = useState(2);
  const [skimCream, setSkimCream] = useState(true);
  const [makeYogurt, setMakeYogurt] = useState(false);
  const [makeButter, setMakeButter] = useState(false);

  const weeks = 52;
  const annualGallons = gallonsPerWeek * weeks;

  const storeAnnual = annualGallons * storePrice;
  const ssfAnnual = annualGallons * SSF_PRICE_PER_GAL;
  const difference = ssfAnnual - storeAnnual;

  const creamValue = skimCream
    ? annualGallons * CREAM_PINTS_PER_GAL * CREAM_PINT_PRICE
    : 0;
  const probioticValue = people * PROBIOTIC_MONTHLY_PER_PERSON * 12;
  const butterValue = makeButter
    ? annualGallons * BUTTER_LB_PER_GAL * BUTTER_PER_LB
    : 0;
  const yogurtValue = makeYogurt
    ? annualGallons * YOGURT_QUARTS_PER_GAL * YOGURT_QUART_PRICE
    : 0;

  const totalUnlocked =
    creamValue + probioticValue + butterValue + yogurtValue;
  const netAnnual = difference - totalUnlocked;

  return (
    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
      {/* INPUTS */}
      <div className="rounded-3xl bg-ivory p-6 ring-1 ring-forest/10 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
          Your family
        </p>
        <h3 className="mt-2 font-display text-2xl text-forest-deep">
          Tell us how you use milk.
        </h3>

        <div className="mt-6 space-y-6">
          {/* Gallons */}
          <label className="block">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-forest-deep">
                Gallons per week
              </span>
              <span className="font-display text-2xl text-terracotta">
                {gallonsPerWeek}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={gallonsPerWeek}
              onChange={(e) => setGallonsPerWeek(Number(e.target.value))}
              className="mt-2 w-full accent-terracotta"
            />
            <div className="mt-1 flex justify-between text-[11px] text-ink-soft">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </label>

          {/* People */}
          <label className="block">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-forest-deep">
                People in household
              </span>
              <span className="font-display text-2xl text-terracotta">
                {people}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={6}
              step={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="mt-2 w-full accent-terracotta"
            />
          </label>

          {/* Store milk price */}
          <label className="block">
            <span className="text-sm font-semibold text-forest-deep">
              What you pay now per gallon
            </span>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-forest/15 bg-cream-soft px-4 py-3">
              <span className="text-ink-soft">$</span>
              <input
                type="number"
                min={1}
                step={0.1}
                value={storePrice}
                onChange={(e) => setStorePrice(Number(e.target.value))}
                className="w-full bg-transparent text-ink outline-none"
              />
              <span className="text-sm text-ink-soft">/ gal</span>
            </div>
          </label>

          {/* Toggles */}
          <div className="space-y-2 pt-2">
            <p className="text-sm font-semibold text-forest-deep">
              What you&rsquo;d make or use at home
            </p>
            <ToggleRow
              label="Skim the cream (stop buying heavy cream)"
              checked={skimCream}
              onChange={setSkimCream}
            />
            <ToggleRow
              label="Churn butter from the cream"
              checked={makeButter}
              onChange={setMakeButter}
            />
            <ToggleRow
              label="Culture yogurt from the milk"
              checked={makeYogurt}
              onChange={setMakeYogurt}
            />
          </div>
        </div>
      </div>

      {/* RESULT */}
      <div className="flex flex-col gap-4">
        {/* Side-by-side headline */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Card
            variant="cream"
            eyebrow="Store-bought"
            value={currency(storeAnnual)}
            hint={`${annualGallons} gal × ${currency(storePrice)}`}
          />
          <Card
            variant="forest"
            eyebrow="Seven Seasons"
            value={currency(ssfAnnual)}
            hint={`${annualGallons} gal × ${currency(SSF_PRICE_PER_GAL)}`}
          />
        </div>

        {/* Value unlocked */}
        <div className="rounded-3xl bg-ivory p-6 ring-1 ring-forest/10 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            What&rsquo;s bundled in
          </p>
          <h3 className="mt-2 font-display text-2xl text-forest-deep">
            Fresh milk isn&rsquo;t just milk.
          </h3>
          <ul className="mt-5 divide-y divide-forest/10">
            <ValueRow
              icon="🦠"
              title="Live probiotics"
              sub={`${people} × ${currency(
                PROBIOTIC_MONTHLY_PER_PERSON,
              )}/mo supplement replaced`}
              value={probioticValue}
              active
            />
            <ValueRow
              icon="🥛"
              title="Heavy cream"
              sub={`~${CREAM_PINTS_PER_GAL} pint per gallon, skimmed off the top`}
              value={creamValue}
              active={skimCream}
            />
            <ValueRow
              icon="🧈"
              title="Homemade butter"
              sub={`From the cream — ~${BUTTER_LB_PER_GAL} lb per gallon`}
              value={butterValue}
              active={makeButter}
            />
            <ValueRow
              icon="🫙"
              title="Homemade yogurt"
              sub={`1 gallon cultures into ~${YOGURT_QUARTS_PER_GAL} quarts`}
              value={yogurtValue}
              active={makeYogurt}
            />
          </ul>
        </div>

        {/* Bottom line */}
        <div className="rounded-3xl bg-forest-deep p-6 text-ivory md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wheat">
                Your bottom line
              </p>
              <p className="mt-2 font-display text-xl text-ivory/80">
                {netAnnual < 0
                  ? "You come out ahead by"
                  : "Your net premium for fresh is"}
              </p>
            </div>
            <p
              className={`font-display text-5xl md:text-6xl ${
                netAnnual < 0 ? "text-wheat" : "text-ivory"
              }`}
            >
              {currency(Math.abs(netAnnual))}
              <span className="ml-1 text-base text-ivory/70">/ yr</span>
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ivory/75">
            That&rsquo;s before you count what you can&rsquo;t put a dollar
            on: A2A2 digestibility, pasture nutrition, your kids asking for
            seconds, and a farmer you can call by name.
          </p>
        </div>

        <p className="text-xs leading-relaxed text-ink-soft">
          Numbers are honest estimates, not a sales pitch. Probiotic and cream
          prices based on typical organic grocery pricing; SSF herd share
          priced at {currency(SSF_PRICE_PER_GAL)}/gal.{" "}
          <a
            href="tel:+19193892290"
            className="font-semibold text-terracotta hover:text-terracotta-deep"
          >
            Call us
          </a>{" "}
          for current pricing.
        </p>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-cream-soft px-3 py-2.5">
      <span
        className={`flex h-5 w-9 flex-none items-center rounded-full p-0.5 transition ${
          checked ? "bg-terracotta" : "bg-forest/20"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-ivory shadow-sm transition ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-sm text-ink">{label}</span>
    </label>
  );
}

function Card({
  eyebrow,
  value,
  hint,
  variant,
}: {
  eyebrow: string;
  value: string;
  hint: string;
  variant: "cream" | "forest";
}) {
  const isForest = variant === "forest";
  return (
    <div
      className={`rounded-3xl p-6 ${
        isForest
          ? "bg-forest text-ivory ring-1 ring-forest"
          : "bg-ivory ring-1 ring-forest/10"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          isForest ? "text-wheat" : "text-terracotta"
        }`}
      >
        {eyebrow}
      </p>
      <p
        className={`mt-2 font-display text-4xl ${
          isForest ? "text-ivory" : "text-forest-deep"
        }`}
      >
        {value}
        <span className={`ml-1 text-sm ${isForest ? "text-ivory/70" : "text-ink-soft"}`}>
          / yr
        </span>
      </p>
      <p
        className={`mt-1 text-xs ${
          isForest ? "text-ivory/70" : "text-ink-soft"
        }`}
      >
        {hint}
      </p>
    </div>
  );
}

function ValueRow({
  icon,
  title,
  sub,
  value,
  active,
}: {
  icon: string;
  title: string;
  sub: string;
  value: number;
  active: boolean;
}) {
  return (
    <li
      className={`flex items-start justify-between gap-4 py-3 transition ${
        active ? "opacity-100" : "opacity-40"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cream-soft text-base"
          aria-hidden
        >
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-forest-deep">{title}</p>
          <p className="text-xs text-ink-soft">{sub}</p>
        </div>
      </div>
      <p
        className={`font-display text-xl ${
          active ? "text-forest-deep" : "text-ink-soft"
        }`}
      >
        {active ? `−${currency(value)}` : "—"}
      </p>
    </li>
  );
}
