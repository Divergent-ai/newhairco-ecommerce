import type { Metadata } from "next";
import Link from "next/link";
import { BaseComparisonTable } from "@/components/BaseComparisonTable";

export const metadata: Metadata = {
  title: "Compare Hair Piece Bases",
  description: "Compare thin skin, lace, hybrid, and crown patch hair pieces by realism, comfort, durability, beginner fit, and maintenance."
};

export default function ComparePage() {
  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Compare bases</span>
        <h1>Choose the base before you choose the style.</h1>
        <p>
          Thin skin, lace, hybrid, and crown coverage all solve different problems. This page helps you
          choose based on realism, breathability, cleanup, and durability rather than guesswork.
        </p>
      </div>
      <BaseComparisonTable />
      <div className="cta-section compact">
        <div>
          <h2>Still unsure?</h2>
          <p>The builder and Smart Finder narrow the shortlist in plain English, then send you to the right products.</p>
        </div>
        <div className="hero-actions">
          <Link href="/build" className="button">
            Build your system
          </Link>
          <Link href="/quiz" className="button button-secondary">
            Use Smart Finder
          </Link>
        </div>
      </div>
    </section>
  );
}
