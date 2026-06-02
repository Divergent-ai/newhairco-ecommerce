"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { currency } from "@/lib/format";
import { ProductVisual } from "@/components/ProductVisual";

type QuickViewModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="quick-view-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close quick view">
          Close
        </button>
        <div className="quick-view-grid">
          <ProductVisual baseType={product.baseType} name={product.name} />
          <div className="quick-view-copy">
            <span className="eyebrow">{product.line}</span>
            <h2 id="quick-view-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="spec-strip quick-view-specs">
              <div>
                <strong>{product.baseType}</strong>
                <span>Base type</span>
              </div>
              <div>
                <strong>{product.maintenanceLevel}</strong>
                <span>Maintenance</span>
              </div>
              <div>
                <strong>{currency(product.price)}</strong>
                <span>Price</span>
              </div>
              <div>
                <strong>{product.dispatch}</strong>
                <span>Dispatch</span>
              </div>
            </div>
            <div className="why-product">{product.whyThisProduct}</div>
            <ul className="check-list compact-check-list">
              {product.bestForCards.map((card) => (
                <li key={card.title}>
                  <strong>{card.title}</strong>
                  <span>{card.body}</span>
                </li>
              ))}
            </ul>
            <Link href={`/products/${product.slug}`} className="button" onClick={onClose}>
              View full product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
