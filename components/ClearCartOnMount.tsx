"use client";

import { useEffect } from "react";
import { CART_KEY } from "@/lib/cart";

export function ClearCartOnMount() {
  useEffect(() => {
    localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new Event("newhairco-cart"));
  }, []);
  return null;
}
