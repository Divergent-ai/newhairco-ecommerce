"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CART_KEY, cartLineKey, type CartLine } from "@/lib/cart";
import { currency } from "@/lib/format";

type CheckoutState = "idle" | "loading" | "error";

function readCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("newhairco-cart"));
}

export function CartPageClient() {
  const [items, setItems] = useState<CartLine[]>([]);
  const [state, setState] = useState<CheckoutState>("idle");
  const [error, setError] = useState("");

  useEffect(() => setItems(readCart()), []);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  function updateQuantity(line: CartLine, quantity: number) {
    const next = items
      .map((item) => cartLineKey(item) === cartLineKey(line) ? { ...item, quantity } : item)
      .filter((item) => item.quantity > 0);
    setItems(next);
    saveCart(next);
  }

  async function checkout() {
    setState("loading");
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items })
      });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error || "Checkout could not be started.");
      window.location.href = data.url;
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Checkout could not be started.");
    }
  }

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <span className="eyebrow">Cart</span>
        <h1>Your cart is empty.</h1>
        <p>Choose a hair piece and configure colour, base size, density, length, wave, and front hairline before checkout.</p>
        <Link href="/shop" className="button">Shop hair pieces</Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <section className="cart-lines" aria-label="Cart items">
        {items.map((item) => (
          <article className="cart-line" key={cartLineKey(item)}>
            <div>
              <Link href={`/products/${item.slug}`}><h2>{item.name}</h2></Link>
              <p>{item.options.colour} · {item.options.size} · {item.options.length}</p>
              <p>{item.options.density} · {item.options.wave} · {item.options.front}</p>
              <strong>{currency(item.price)}</strong>
            </div>
            <div className="quantity-control">
              <button type="button" onClick={() => updateQuantity(item, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button type="button" onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
            </div>
          </article>
        ))}
      </section>
      <aside className="cart-summary">
        <span className="eyebrow">Secure checkout</span>
        <h2>Order summary</h2>
        <div className="summary-row"><span>Subtotal</span><strong>{currency(subtotal)}</strong></div>
        <div className="summary-row"><span>UK shipping</span><strong>Free</strong></div>
        <div className="summary-row total"><span>Total</span><strong>{currency(subtotal)}</strong></div>
        <button className="button full-width" onClick={checkout} disabled={state === "loading"}>
          {state === "loading" ? "Opening checkout…" : "Checkout with Stripe"}
        </button>
        {state === "error" && <div className="error-box">{error}</div>}
        <p className="small-print">Checkout collects delivery address, phone, billing details, and payment securely through Stripe.</p>
      </aside>
    </div>
  );
}
