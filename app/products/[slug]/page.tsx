import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductPurchasePanel } from "@/components/ProductPurchasePanel";
import { ProductVisual } from "@/components/ProductVisual";
import { productBySlug, products } from "@/data/products";
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
      <Link href="/shop" className="text-link">← Back to shop</Link>
      <div className="product-detail-layout">
        <div className="product-detail-main">
          <ProductVisual baseType={product.baseType} name={product.name} />
          <span className="eyebrow">{product.line}</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <div className="spec-strip">
            <div><strong>{product.baseType}</strong><span>Base type</span></div>
            <div><strong>{product.density}</strong><span>Density</span></div>
            <div><strong>{currency(product.price)}</strong><span>From price</span></div>
            <div><strong>{product.dispatch}</strong><span>Dispatch</span></div>
          </div>

          <section className="detail-section">
            <h2>Why this hair piece works</h2>
            <ul className="check-list">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Specifications</h2>
            <div className="spec-table">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}><strong>{key}</strong><span>{value}</span></div>
              ))}
            </div>
          </section>

          <section className="detail-section info-box">
            <h2>Before you cut or bond it</h2>
            <p>Check colour, density, base size, and front contour in daylight. Once a hair piece is cut, altered, bonded, or exposed to adhesive, it may not be suitable for return.</p>
          </section>
        </div>
        <ProductPurchasePanel product={product} />
      </div>
    </section>
  );
}
