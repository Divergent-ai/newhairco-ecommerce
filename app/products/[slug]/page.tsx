import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProductCard } from "@/components/ProductCard";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ProductVisual } from "@/components/ProductVisual";
import { getRelatedProducts, productBySlug, products } from "@/data/products";
import { currency } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.short,
    openGraph: {
      title: `${product.name} | The New Hair Co.`,
      description: product.short,
      type: "website"
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const accordionItems = [
    { question: "Delivery", answer: product.deliveryNote },
    { question: "Returns", answer: product.returnsNote },
    { question: "Payment", answer: product.paymentNote }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    brand: { "@type": "Brand", name: "The New Hair Co." },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.price,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <section className="page-section container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/shop" className="text-link">
        Back to shop
      </Link>

      <div className="product-detail-layout">
        <div className="product-detail-main">
          <div className="gallery-shell">
            <div className="gallery-primary">
              <ProductVisual baseType={product.baseType} name={product.name} />
            </div>
            <div className="gallery-grid">
              {product.gallery.map((frame) => (
                <article key={frame.title} className="gallery-card">
                  <ProductVisual baseType={product.baseType} name={frame.title} compact />
                  <strong>{frame.title}</strong>
                  <span>{frame.caption}</span>
                </article>
              ))}
            </div>
          </div>

          <span className="eyebrow">{product.line}</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>

          <div className="spec-strip">
            <div>
              <strong>{product.baseType}</strong>
              <span>Base type</span>
            </div>
            <div>
              <strong>{product.density}</strong>
              <span>Starting density</span>
            </div>
            <div>
              <strong>{currency(product.price)}</strong>
              <span>From price</span>
            </div>
            <div>
              <strong>{product.dispatch}</strong>
              <span>Dispatch</span>
            </div>
          </div>

          <div className="product-confidence-banner">
            <strong>New product - customer photos coming soon.</strong>
            <span>We do not invent reviews. Use the specs, fit guidance, and support notes to choose confidently.</span>
          </div>

          <section className="detail-section">
            <h2>Best for</h2>
            <div className="best-for-grid">
              {product.bestForCards.map((card) => (
                <article key={card.title} className="info-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>What is included</h2>
            <ul className="check-list">
              {product.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Why this product exists</h2>
            <p>{product.whyThisProduct}</p>
            <ul className="check-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section info-box">
            <h2>Before you alter it</h2>
            <p>
              Inspect colour, density, base size, and front contour in daylight. Once a hair piece is cut,
              altered, bonded, or exposed to adhesive, it may no longer be suitable for return.
            </p>
          </section>

          <section className="detail-section">
            <h2>How to get it fitted</h2>
            <ul className="check-list">
              {product.fitGuidance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Care guidance</h2>
            <ul className="check-list">
              {product.careNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Specifications</h2>
            <div className="spec-table">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Delivery, returns, and payment</h2>
            <FAQAccordion items={accordionItems} />
          </section>
        </div>

        <ProductPurchasePanel product={product} />
      </div>

      <section className="section">
        <div className="section-heading left">
          <span className="eyebrow">Related products</span>
          <h2>Close alternatives and safer second looks.</h2>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
