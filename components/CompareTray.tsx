"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

export function CompareTray({
  products,
  onRemove,
  onClear
}: {
  products: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
}) {
  if (products.length === 0) return null;

  return (
    <aside className="compare-tray" aria-label="Compared products">
      <div>
        <span className="eyebrow">Compare tray</span>
        <h3>{products.length} product{products.length === 1 ? "" : "s"} selected</h3>
      </div>
      <div className="compare-tray-items">
        {products.map((product) => (
          <div key={product.id} className="compare-tray-item">
            <strong>{product.name}</strong>
            <span>{product.baseType}</span>
            <button type="button" onClick={() => onRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="compare-tray-actions">
        <Link href="/compare" className="button button-secondary">
          Compare bases
        </Link>
        <button type="button" className="button" onClick={onClear}>
          Clear tray
        </button>
      </div>
    </aside>
  );
}
