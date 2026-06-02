# The New Hair Co. — Ecommerce Hair Pieces Site

A deployment-ready Next.js ecommerce store for **newhairco.com** focused only on hair pieces. It deliberately removes fitting, salon, partnership, and consultation funnels so the buyer journey is product-first.

## What is included

- Next.js App Router + TypeScript
- Premium responsive UI with no template dependency
- Home page built around product confidence and choice reduction
- Shop page with base/lifestyle filters and sorting
- Product detail pages generated from one product catalogue file
- Hair piece finder quiz
- Base comparison page
- Care guide page
- Local cart with variant selections
- Stripe Checkout API route using dynamic price data
- Product structured data for SEO
- `.env.example` for production deployment

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL=https://www.newhairco.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL=info@newhairco.com`
4. Deploy.

## Add more products

Edit `data/products.ts`. Add a new object to the `products` array with:

- `id`
- `slug`
- `name`
- `line`
- `price`
- `baseType`
- `density`
- `features`
- `specs`
- option arrays for `colours`, `sizes`, `lengths`, `densities`, `waves`, and `frontOptions`

The shop page, product page, checkout route, filters, and SEO will pick it up automatically.

## Stripe notes

The checkout route uses dynamic Stripe `price_data`, so you do not need to create Stripe Products or Price IDs in advance. Products are validated server-side against `data/products.ts` so the browser cannot invent prices.

## Brand direction

This site positions New Hair Co as:

- premium but direct
- UK-first
- discreet and confidence-led
- product-only, not salon-only
- simpler to buy from than large catalogues with dozens of confusing product names
