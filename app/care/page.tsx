import type { Metadata } from "next";
import Link from "next/link";
import { careGuideSections } from "@/data/products";

export const metadata: Metadata = {
  title: "Hair Piece Care Guide",
  description: "Plain-English care guidance for men's hair pieces, including inspection, washing, bonding, storage, styling, and barber cut-in advice."
};

export default function CarePage() {
  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Care guide</span>
        <h1>Keep the unit looking natural for longer.</h1>
        <p>
          Product-first does not mean leaving buyers in the dark. Use this guide for inspection, washing,
          attachment, storage, styling, and barber handoff.
        </p>
      </div>

      <div className="care-grid expanded-care-grid">
        {careGuideSections.map((item, index) => (
          <article className="care-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="confidence-grid">
        <article className="info-card">
          <h3>Before you alter it</h3>
          <p>Inspect colour, density, base size, and contour in daylight before any cutting or adhesive touches the unit.</p>
        </article>
        <article className="info-card">
          <h3>Heat damage is real</h3>
          <p>Too much heat dries the hair and shortens lifespan quickly, especially on finer or lighter-density pieces.</p>
        </article>
        <article className="info-card">
          <h3>Barber cut-ins matter</h3>
          <p>You do not need a salon package, but you do need someone confident enough to trim and blend the piece properly.</p>
        </article>
        <article className="info-card">
          <h3>Storage changes longevity</h3>
          <p>Keep spare units dry, ventilated, and away from humidity or direct sun if you want them to stay usable.</p>
        </article>
      </div>

      <div className="cta-section compact">
        <div>
          <h2>Need help choosing before you buy?</h2>
          <p>The guide works best when you pair it with the right base and maintenance expectations from the start.</p>
        </div>
        <div className="hero-actions">
          <Link href="/compare" className="button button-secondary">
            Compare bases
          </Link>
          <Link href="/shop" className="button">
            Shop hair pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
