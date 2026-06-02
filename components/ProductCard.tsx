import Link from "next/link";
import type { Product } from "@/data/products";
import { currency } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-media-link" aria-label={`View ${product.name}`}>
        <ProductVisual baseType={product.baseType} name={product.name} compact />
      </Link>
      <div className="product-card-body">
        <div className="card-meta-row">
          <span className="pill">{product.badge}</span>
          <span className="muted">{product.baseType}</span>
        </div>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.short}</p>
        <div className="price-row">
          <strong>{currency(product.price)}</strong>
          {product.compareAt && <span>{currency(product.compareAt)}</span>}
        </div>
        <Link href={`/products/${product.slug}`} className="button button-secondary full-width">Choose options</Link>
      </div>
    </article>
  );
}
