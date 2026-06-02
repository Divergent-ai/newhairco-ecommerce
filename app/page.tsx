import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { TrustStrip } from "@/components/TrustStrip";
import { baseGuides, faqItems, homepageSituations, journeySteps, products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero-band">
        <div className="container hero">
          <div className="hero-copy">
            <span className="eyebrow">Premium men's hair pieces</span>
            <h1>Premium men's hair pieces. Bought online. Fitted your way.</h1>
            <p>
              Natural-looking hair systems for UK buyers who want the hair, not a salon contract.
              Choose your base, colour, density, and finish, then take it to your own barber or stylist.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="button">
                Shop hair pieces
              </Link>
              <Link href="/quiz" className="button button-secondary">
                Find my match
              </Link>
            </div>
            <div className="hero-stats" aria-label="Store highlights">
              <div>
                <strong>8</strong>
                <span>catalogue-ready launch products</span>
              </div>
              <div>
                <strong>GBP</strong>
                <span>UK-first pricing and checkout</span>
              </div>
              <div>
                <strong>0</strong>
                <span>forced fitting upsells</span>
              </div>
            </div>
          </div>
          <div className="hero-showcase">
            <ProductVisual baseType="Hybrid" name="Premium men's hair system" />
            <div className="floating-card top">Natural front options, breathable bases, and discreet delivery.</div>
            <div className="floating-card bottom">Choose the hair. Keep control of the cut-in.</div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section container">
        <div className="section-heading left">
          <span className="eyebrow">Start with your situation</span>
          <h2>Browse by the problem you are solving, not by jargon-heavy catalogue names.</h2>
        </div>
        <div className="situation-grid">
          {homepageSituations.map((item) => (
            <article key={item.title} className="situation-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href={item.href} className="text-link">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container section-heading">
          <span className="eyebrow">Your hair system journey</span>
          <h2>Plain-English steps from choosing the base to handing it to your barber.</h2>
        </div>
        <div className="container journey-grid">
          {journeySteps.map((step, index) => (
            <article key={step.title} className="journey-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-heading left">
          <span className="eyebrow">Best sellers</span>
          <h2>Serious product cards for first-time buyers and repeat wearers alike.</h2>
          <p>Each product points clearly to who it is for, what kind of maintenance it brings, and why it exists in the range.</p>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section container split-section">
        <div>
          <span className="eyebrow">Base education</span>
          <h2>Thin Skin, Lace, Hybrid, and Crown Patch each solve a different job.</h2>
          <p>
            The base changes realism, airflow, durability, and how easy the piece is to clean. Starting
            there keeps the rest of the buying decision far clearer.
          </p>
          <Link href="/compare" className="text-link">
            Compare base types
          </Link>
        </div>
        <div className="feature-list">
          {baseGuides.map((guide) => (
            <div key={guide.base}>
              <strong>{guide.base}</strong>
              <span>{guide.chooseWhen}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading left">
            <span className="eyebrow">Product confidence</span>
            <h2>What buyers need to know before cutting, bonding, or booking a barber slot.</h2>
          </div>
          <div className="confidence-grid">
            <article className="info-card">
              <h3>Inspect before altering</h3>
              <p>Check colour, density, base size, and contour in daylight before any cutting, tinting, or adhesive use.</p>
            </article>
            <article className="info-card">
              <h3>Returns stay honest</h3>
              <p>Once a piece is cut, bonded, coloured, or otherwise altered, return options become limited. No soft-selling here.</p>
            </article>
            <article className="info-card">
              <h3>Delivery expectations</h3>
              <p>Ready-to-ship and made-to-order timings are shown clearly so buyers know what is fast and what is more premium.</p>
            </article>
            <article className="info-card">
              <h3>Care support</h3>
              <p>We stay product-first, but the site still gives plain-English care and barber guidance so first-time buyers feel safe.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container split-section">
        <div>
          <span className="eyebrow">FAQ preview</span>
          <h2>Answer the trust questions before they slow down the sale.</h2>
          <p>
            The buying questions are almost always the same: how long it lasts, whether you need a salon,
            how colour works, and what happens if you alter it too early.
          </p>
          <Link href="/faq" className="text-link">
            Open the full FAQs
          </Link>
        </div>
        <FAQAccordion items={faqItems.slice(0, 4)} />
      </section>

      <section className="section container">
        <div className="cta-section">
          <div>
            <span className="eyebrow">Ready to buy smarter</span>
            <h2>Shop by base, by need, or through the guided builder.</h2>
            <p>Everything is set up so the catalogue can grow without breaking the browsing experience.</p>
          </div>
          <div className="hero-actions">
            <Link href="/shop" className="button">
              Shop hair pieces
            </Link>
            <Link href="/build" className="button button-secondary">
              Build your system
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
