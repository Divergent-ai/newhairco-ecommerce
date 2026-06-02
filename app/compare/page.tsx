import type { Metadata } from "next";
import Link from "next/link";
import { baseGuides } from "@/data/products";

export const metadata: Metadata = {
  title: "Compare Hair Piece Bases",
  description: "Compare thin skin, lace, hybrid, and crown patch hair pieces before buying."
};

export default function ComparePage() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">Compare</span>
        <h1>Choose the base before you choose the style.</h1>
        <p>The base controls comfort, realism, cleaning, bond strength, and how easy the piece is to maintain.</p>
      </div>
      <div className="comparison-table" role="table" aria-label="Hair piece base comparison">
        <div className="comparison-row header" role="row">
          <strong>Base</strong><strong>Best for</strong><strong>Feel</strong><strong>Choose when</strong>
        </div>
        {baseGuides.map((guide) => (
          <div className="comparison-row" role="row" key={guide.base}>
            <strong>{guide.base}</strong>
            <span>{guide.best}</span>
            <span>{guide.feel}</span>
            <span>{guide.chooseWhen}</span>
          </div>
        ))}
      </div>
      <div className="cta-section compact containerless">
        <div>
          <h2>Still unsure?</h2>
          <p>The finder narrows the choice based on hairline, lifestyle, and experience.</p>
        </div>
        <Link href="/quiz" className="button">Use the finder</Link>
      </div>
    </section>
  );
}
