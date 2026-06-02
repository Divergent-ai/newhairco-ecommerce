import type { Metadata } from "next";
import { CartPageClient } from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your configured New Hair Co hair pieces and checkout securely."
};

export default function CartPage() {
  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Cart</span>
        <h1>Review your order.</h1>
      </div>
      <CartPageClient />
    </section>
  );
}
