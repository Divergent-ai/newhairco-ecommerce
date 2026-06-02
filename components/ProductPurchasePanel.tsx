"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { buildCartLine, cartLineKey, CART_KEY, type CartLine, type SelectedOptions } from "@/lib/cart";
import { currency } from "@/lib/format";

function readCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("newhairco-cart"));
}

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [options, setOptions] = useState<SelectedOptions>({
    colour: product.colours[0],
    size: product.sizes[0],
    length: product.lengths[0],
    density: product.densities[0],
    wave: product.waves[0],
    front: product.frontOptions[0]
  });

  const total = useMemo(() => product.price * quantity, [product.price, quantity]);

  function updateOption(key: keyof SelectedOptions, value: string) {
    setOptions((current) => ({ ...current, [key]: value }));
    setAdded(false);
  }

  function addToCart() {
    const cart = readCart();
    const line = buildCartLine(product, options, quantity);
    const key = cartLineKey(line);
    const existing = cart.find((item) => cartLineKey(item) === key);
    const next = existing
      ? cart.map((item) => cartLineKey(item) === key ? { ...item, quantity: item.quantity + quantity } : item)
      : [...cart, line];
    writeCart(next);
    setAdded(true);
  }

  return (
    <aside className="purchase-panel" aria-label="Choose product options">
      <div className="purchase-top">
        <span className="pill">{product.badge}</span>
        <strong>{currency(product.price)}</strong>
        {product.compareAt && <span className="compare-price">{currency(product.compareAt)}</span>}
      </div>
      <Option label="Colour" value={options.colour} values={product.colours} onChange={(value) => updateOption("colour", value)} />
      <Option label="Base size" value={options.size} values={product.sizes} onChange={(value) => updateOption("size", value)} />
      <Option label="Hair length" value={options.length} values={product.lengths} onChange={(value) => updateOption("length", value)} />
      <Option label="Density" value={options.density} values={product.densities} onChange={(value) => updateOption("density", value)} />
      <Option label="Wave" value={options.wave} values={product.waves} onChange={(value) => updateOption("wave", value)} />
      <Option label="Front" value={options.front} values={product.frontOptions} onChange={(value) => updateOption("front", value)} />
      <label className="option-label">
        Quantity
        <div className="quantity-control">
          <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
      </label>
      <div className="panel-total"><span>Total</span><strong>{currency(total)}</strong></div>
      <button className="button full-width" onClick={addToCart}>Add hair piece to cart</button>
      {added && <div className="success-box">Added to cart. <Link href="/cart">Checkout now</Link></div>}
      <div className="mini-notes">
        <span>{product.dispatch}</span>
        <span>Secure checkout by Stripe.</span>
        <span>Order note: colour match is safest when you compare in daylight before cutting or bonding.</span>
      </div>
    </aside>
  );
}

function Option({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="option-label">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {values.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
}
