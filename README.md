# Seven Seasons Farm

Marketing site for **Seven Seasons Farm** — a small family farm in Oxford, NC.
Built with Next.js 16 + Tailwind v4. Deployed to Cloudflare Workers via
[`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

Cloudflare Workers (production):

```bash
# Build the worker bundle and deploy
npm run cf:deploy
```

Local preview of the production build:

```bash
npm run cf:preview
```

The deploy command needs Cloudflare credentials. Run `npx wrangler login` once,
or set `CLOUDFLARE_API_TOKEN` as an env var.

## Project layout

```
src/
├── app/              # App Router pages (home, our-story, products, faqs, consulting, contact)
├── components/       # Shared UI (header, footer, calculator, reviews, carousel, etc.)
└── lib/              # Static data (reviews)
public/images/        # Brand photos and logo
wrangler.jsonc        # Cloudflare Worker config
open-next.config.ts   # OpenNext adapter config
```

## Configuration

- **Brand tokens** live in [`src/app/globals.css`](src/app/globals.css)
  (`@theme` block) — forest green, cream, terracotta, wheat.
- **Pickup locations** are chosen in the online shop
  ([locallygrown.app/seven-seasons-farm](https://www.locallygrown.app/seven-seasons-farm)).
- **Reviews** live in [`src/lib/reviews.ts`](src/lib/reviews.ts).
- **Calculator price assumptions** are constants at the top of
  [`src/components/ValueCalculator.tsx`](src/components/ValueCalculator.tsx).

## Contact form

Posts to `/api/contact`. To forward submissions, set `CONTACT_WEBHOOK_URL`
as a Worker secret:

```bash
npx wrangler secret put CONTACT_WEBHOOK_URL
```
