"use client";

import { useEffect, useState } from "react";
import { CART_KEY, type CartLine } from "@/lib/cart";

function getCount() {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(CART_KEY);
    const items = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return items.reduce((sum, item) => sum + item.quantity, 0);
  } catch {
    return 0;
  }
}

export function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCount());
    const update = () => setCount(getCount());
    window.addEventListener("storage", update);
    window.addEventListener("newhairco-cart", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("newhairco-cart", update);
    };
  }, []);

  return <span className="cart-count" aria-label={`${count} items in cart`}>{count}</span>;
}
