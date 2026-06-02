import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { TrustStrip } from "@/components/TrustStrip";
import { products, baseGuides } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 3);
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Premium men’s hair pieces</span>
          <h1>Buy the hair. Keep control of the fitting.</h1>
          <p>New Hair Co is now a product-first ecommerce store for premium hair pieces only. Choose a base, colour, density, length, and wave, then use your own barber or stylist.</p>
          <div className="hero-actions">
            <Link href="/shop" className="button">Shop hair pieces</Link>
            <Link href="/quiz" className="button button-secondary">Find my match</Link>
          </div>
          <div className="hero-stats" aria-label="Store highlights">
            <div><strong>6</strong><span>launch products</span></div>
            <div><strong>16</strong><span>colour choices</span></div>
            <div><strong>0</strong><span>forced fitting upsells</span></div>
          </div>
        </div>
        <div className="hero-showcase">
          <ProductVisual baseType="Hybrid" name="Hero hair system" />
          <div className="floating-card top">Colour matched. Density controlled. Discreet checkout.</div>
          <div className="floating-card bottom">Thin skin · Lace · Hybrid · Crown patches</div>
        </div>
      </section>

      <TrustStrip />

      <section className="section container split-section">
        <div>
          <span className="eyebrow">Better UX than a catalogue</span>
          <h2>Start by how you live, not by confusing product names.</h2>
          <p>Hair-system websites often push dozens of similar products. This store narrows the decision around the buyer’s real problem: hairline exposure, breathability, durability, crown-only thinning, and first-time confidence.</p>
          <Link href="/quiz" className="text-link">Open the hair piece finder</Link>
        </div>
        <div className="feature-list">
          <div><strong>1. Choose the coverage</strong><span>Full top, exposed front, covered front, or crown only.</span></div>
          <div><strong>2. Choose the base</strong><span>Thin skin for realism, lace for airflow, hybrid for balance.</span></div>
          <div><strong>3. Choose the finish</strong><span>Colour, density, length, wave, front contour, then checkout.</span></div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container section-heading">
          <span className="eyebrow">Featured hair pieces</span>
          <h2>Launch range built around the products men actually need.</h2>
          <p>Simple enough for a first-time buyer, deep enough for someone who already knows their base preference.</p>
        </div>
        <div className="container product-grid">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="centered"><Link href="/shop" className="button button-secondary">View all products</Link></div>
      </section>

      <section className="section container">
        <div className="section-heading left">
          <span className="eyebrow">Base guide</span>
          <h2>The fastest way to choose the correct hair piece.</h2>
        </div>
        <div className="base-grid">
          {baseGuides.map((guide) => (
            <article className="base-card" key={guide.base}>
              <h3>{guide.base}</h3>
              <strong>{guide.best}</strong>
              <p>{guide.chooseWhen}</p>
              <span>{guide.feel}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-section container">
        <div>
          <span className="eyebrow">No unfinished funnel</span>
          <h2>Product cards, filters, quiz, cart, Stripe checkout, and SEO pages are all included.</h2>
          <p>The store is built so new hair pieces can be added from one product data file without rebuilding the UX.</p>
        </div>
        <Link href="/shop" className="button">Start shopping</Link>
      </section>
    </>
  );
}
