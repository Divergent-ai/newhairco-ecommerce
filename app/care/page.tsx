import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair Piece Care Guide",
  description: "Plain-English care guidance for men’s hair pieces, including colour checks, cutting, bonding, washing, and storage."
};

const steps = [
  ["Check before altering", "Inspect colour, density, base size, wave, and front contour in daylight before cutting, trimming, or bonding."],
  ["Use the right attachment", "Thin skin is usually easier with tape or liquid adhesive. Lace needs careful cleanup and lace-safe products."],
  ["Do not over-wash", "Wash when needed with gentle products. Over-washing can shorten the wear cycle and dry the hair."],
  ["Protect the hair", "Use light conditioning, avoid excessive heat, and detangle gently from ends upward."],
  ["Store correctly", "Keep spare pieces dry, ventilated, and away from direct sunlight or damp bathrooms."],
  ["Use a capable barber", "Any cut-in should be performed by someone confident with hair systems. Take your time with the first cut."],
];

export default function CarePage() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">Care guide</span>
        <h1>Make the hair piece last longer and look more natural.</h1>
        <p>This page gives buyers confidence after checkout without turning the store into a fitting service.</p>
      </div>
      <div className="care-grid">
        {steps.map(([title, body], index) => (
          <article className="care-card" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="info-box detail-section">
        <h2>Important return note</h2>
        <p>Hair pieces should be checked before alteration. Once cut, bleached, coloured, bonded, or exposed to adhesive, the product may no longer be returnable.</p>
        <Link href="/shop" className="button button-secondary">Shop hair pieces</Link>
      </div>
    </section>
  );
}
