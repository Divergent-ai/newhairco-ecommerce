import type { Metadata } from "next";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop Hair Pieces",
  description: "Shop premium men's hair pieces by base type, buyer type, density, colour family, maintenance level, and realism or durability."
};

export default function ShopPage() {
  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Shop</span>
        <h1>Hair pieces only. No fitting package required.</h1>
        <p>
          Filter by base type, buyer type, maintenance level, density, and how much you care about realism
          versus durability. Small launch catalogue, serious catalogue experience.
        </p>
      </div>
      <ShopClient />
    </section>
  );
}
