"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, type BaseType } from "@/data/products";

const bases: (BaseType | "All")[] = ["All", "Thin Skin", "Lace", "Hybrid", "Crown Patch"];
const uses = ["All", "first-time buyers", "gym", "daily use", "crown thinning", "premium feel"];
const sortOptions = ["Recommended", "Price low-high", "Price high-low"];

export function ShopClient() {
  const [base, setBase] = useState<BaseType | "All">("All");
  const [use, setUse] = useState("All");
  const [sort, setSort] = useState("Recommended");

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const baseMatch = base === "All" || product.baseType === base;
      const useMatch = use === "All" || product.bestFor.includes(use);
      return baseMatch && useMatch;
    });
    if (sort === "Price low-high") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "Price high-low") return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [base, use, sort]);

  return (
    <>
      <div className="filters" aria-label="Shop filters">
        <label>
          Base type
          <select value={base} onChange={(event) => setBase(event.target.value as BaseType | "All")}>
            {bases.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Best for
          <select value={use} onChange={(event) => setUse(event.target.value)}>
            {uses.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            {sortOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="result-count">Showing {filtered.length} hair piece{filtered.length === 1 ? "" : "s"}</div>
      <div className="product-grid">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
