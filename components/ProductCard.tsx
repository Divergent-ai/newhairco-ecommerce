"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { currency } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";

type ProductCardProps = {
  product: Product;
  isCompared?: boolean;
  onToggleCompare?: (productId: string) => void;
  onQuickView?: (product: Product) => void;
};

export function ProductCard({ product, isCompared = false, onToggleCompare, onQuickView }: ProductCardProps) {
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

        <div className="card-title-row">
          <div>
            <span className="card-line">{product.line}</span>
            <h3>
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>
          <div className="card-price-block">
            <strong>{currency(product.price)}</strong>
            {product.compareAt ? <span className="compare-price">{currency(product.compareAt)}</span> : null}
          </div>
        </div>

        <p className="product-summary">{product.short}</p>

        <div className="card-tag-row">
          {product.buyerTypes.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-review-note">New product. Customer photos coming soon.</div>
        <div className="why-product">{product.whyThisProduct}</div>

        <div className="card-actions">
          <Link href={`/products/${product.slug}`} className="button full-width">
            Choose options
          </Link>
          <div className="secondary-actions">
            <button type="button" className="button button-secondary" onClick={() => onQuickView?.(product)}>
              Quick view
            </button>
            <button
              type="button"
              className={`button button-secondary ${isCompared ? "active-toggle" : ""}`}
              onClick={() => onToggleCompare?.(product.id)}
            >
              {isCompared ? "Compared" : "Compare"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
