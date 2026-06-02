import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqItems } from "@/data/products";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about men's hair pieces, colour choice, density, lifespan, salons, returns, delivery, and discreet packaging."
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="page-section container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-heading left">
        <span className="eyebrow">FAQs</span>
        <h1>Clear answers for first-time buyers and repeat wearers.</h1>
        <p>
          Honest answers build more trust than overpromising. These cover the questions that slow down
          most first orders: lifespan, colour, density, salons, returns, delivery, and maintenance.
        </p>
      </div>

      <div className="split-section">
        <div>
          <div className="info-card sticky-note">
            <h3>Useful before ordering</h3>
            <p>Start with the base, then density, then colour. Most avoidable mistakes happen when buyers try to perfect shade before picking the right construction.</p>
          </div>
          <div className="info-card sticky-note">
            <h3>Useful after ordering</h3>
            <p>Inspect the unit in daylight before any cutting, bonding, or colour changes. That one habit protects both the result and any return discussion.</p>
          </div>
          <div className="hero-actions">
            <Link href="/shop" className="button">
              Shop hair pieces
            </Link>
            <Link href="/care" className="button button-secondary">
              Read the care guide
            </Link>
          </div>
        </div>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
