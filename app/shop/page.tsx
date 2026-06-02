import type { Metadata } from "next";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop Hair Pieces",
  description: "Shop premium men’s hair pieces by base type, lifestyle, colour, density, and budget."
};

export default function ShopPage() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">Shop</span>
        <h1>Hair pieces only. No fitting packages.</h1>
        <p>Choose a premium hair piece, configure it properly, and check out securely. Add more products later by editing the product catalogue file.</p>
      </div>
      <ShopClient />
    </section>
  );
}
