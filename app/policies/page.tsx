import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description: "Delivery, return, inspection, and payment policy notes for The New Hair Co men's hair pieces."
};

export default function PoliciesPage() {
  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Policies</span>
        <h1>Plain-English store policies.</h1>
        <p>
          The New Hair Co keeps policy language simple: inspect before altering, understand the dispatch timing,
          and keep expectations honest around returns once a unit has been changed.
        </p>
      </div>

      <div className="confidence-grid">
        <article className="info-card">
          <h3>Inspection first</h3>
          <p>Always check colour, density, base size, and contour in daylight before cutting, bonding, or tinting.</p>
        </article>
        <article className="info-card">
          <h3>Returns</h3>
          <p>Return discussions are much simpler before any alteration. Once a unit is cut or adhesive has been used, options narrow quickly.</p>
        </article>
        <article className="info-card">
          <h3>Delivery</h3>
          <p>Ready-to-ship and made-to-order products have different lead times. The product page timing is the one to trust.</p>
        </article>
        <article className="info-card">
          <h3>Payment</h3>
          <p>Checkout is processed securely in GBP through Stripe with UK-focused delivery flows.</p>
        </article>
      </div>
    </section>
  );
}
