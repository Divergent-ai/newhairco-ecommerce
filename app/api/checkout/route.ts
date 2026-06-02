import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";
import type { CartLine } from "@/lib/cart";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function POST(request: Request) {
  if (!stripeSecret) {
    return NextResponse.json({ error: "Stripe is not configured. Add STRIPE_SECRET_KEY to your environment variables." }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecret);

  try {
    const body = await request.json() as { items?: CartLine[] };
    const items = body.items || [];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => {
      const product = products.find((entry) => entry.id === item.productId && entry.slug === item.slug);
      if (!product) throw new Error(`Invalid product: ${item.name}`);

      const optionSummary = [
        item.options.colour,
        item.options.size,
        item.options.length,
        item.options.density,
        item.options.wave,
        item.options.front
      ].join(" · ");

      return {
        quantity: Math.max(1, Math.min(10, Number(item.quantity) || 1)),
        price_data: {
          currency: "gbp",
          unit_amount: product.price * 100,
          product_data: {
            name: product.name,
            description: optionSummary,
            metadata: {
              productId: product.id,
              slug: product.slug,
              colour: item.options.colour,
              size: item.options.size,
              length: item.options.length,
              density: item.options.density,
              wave: item.options.wave,
              front: item.options.front
            }
          }
        }
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["GB"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "gbp" },
            display_name: "Free UK tracked shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 5 }
            }
          }
        }
      ],
      metadata: {
        store: "newhairco.com",
        productType: "hair-pieces-only"
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
