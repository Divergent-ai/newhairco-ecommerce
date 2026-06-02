"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  allBases,
  allBuyerTypes,
  allColourFamilies,
  allMaintenanceLevels,
  products,
  shopSortOptions,
  type BaseType,
  type BuyerType,
  type Product,
  type ShopSort
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { CompareTray } from "@/components/CompareTray";

type PriceFilter = "All" | "Under 200" | "200 to 300" | "300 to 350" | "350 plus";
type DensityFilter = "All" | "80% Light" | "90% Natural" | "95% Natural" | "100% Medium" | "115% Full";
type BalanceFilter = "All" | "More realistic" | "More durable" | "Balanced";

function matchesPrice(price: number, filter: PriceFilter) {
  if (filter === "All") return true;
  if (filter === "Under 200") return price < 200;
  if (filter === "200 to 300") return price >= 200 && price <= 300;
  if (filter === "300 to 350") return price > 300 && price <= 350;
  return price > 350;
}

function matchesBalance(product: Product, filter: BalanceFilter) {
  if (filter === "All") return true;
  if (filter === "More realistic") return product.realismScore >= product.durabilityScore;
  if (filter === "More durable") return product.durabilityScore > product.realismScore;
  return Math.abs(product.durabilityScore - product.realismScore) <= 1;
}

export function ShopClient() {
  const searchParams = useSearchParams();
  const [base, setBase] = useState<BaseType | "All">((searchParams.get("base") as BaseType | null) ?? "All");
  const [buyerType, setBuyerType] = useState<BuyerType | "All">((searchParams.get("buyerType") as BuyerType | null) ?? "All");
  const [price, setPrice] = useState<PriceFilter>("All");
  const [density, setDensity] = useState<DensityFilter>("All");
  const [colourFamily, setColourFamily] = useState<(typeof allColourFamilies)[number] | "All">("All");
  const [maintenance, setMaintenance] = useState<(typeof allMaintenanceLevels)[number] | "All">("All");
  const [balance, setBalance] = useState<BalanceFilter>("All");
  const [sort, setSort] = useState<ShopSort>("Recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const baseMatch = base === "All" || product.baseType === base;
      const buyerMatch = buyerType === "All" || product.buyerTypes.includes(buyerType);
      const priceMatch = matchesPrice(product.price, price);
      const densityMatch = density === "All" || product.densities.includes(density);
      const colourMatch = colourFamily === "All" || product.colourFamilies.includes(colourFamily);
      const maintenanceMatch = maintenance === "All" || product.maintenanceLevel === maintenance;
      const balanceMatch = matchesBalance(product, balance);
      return baseMatch && buyerMatch && priceMatch && densityMatch && colourMatch && maintenanceMatch && balanceMatch;
    });

    if (sort === "Price low-high") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "Price high-low") return [...result].sort((a, b) => b.price - a.price);
    if (sort === "Beginner-friendly") return [...result].sort((a, b) => b.beginnerScore - a.beginnerScore);
    if (sort === "Most realistic") return [...result].sort((a, b) => b.realismScore - a.realismScore);
    return [...result].sort((a, b) => (b.realismScore + b.beginnerScore) - (a.realismScore + a.beginnerScore));
  }, [balance, base, buyerType, colourFamily, density, maintenance, price, sort]);

  const comparedProducts = useMemo(
    () => products.filter((product) => compareIds.includes(product.id)),
    [compareIds]
  );

  function toggleCompare(productId: string) {
    setCompareIds((current) => {
      if (current.includes(productId)) return current.filter((id) => id !== productId);
      if (current.length >= 3) return [...current.slice(1), productId];
      return [...current, productId];
    });
  }

  return (
    <>
      <div className="catalog-shell">
        <aside className={`filter-panel ${filtersOpen ? "open" : ""}`} aria-label="Shop filters">
          <div className="filter-panel-header">
            <div>
              <span className="eyebrow">Filter</span>
              <h2>Shop hair pieces</h2>
            </div>
            <button type="button" className="button button-secondary mobile-only" onClick={() => setFiltersOpen(false)}>
              Close
            </button>
          </div>

          <label>
            Base type
            <select value={base} onChange={(event) => setBase(event.target.value as BaseType | "All")}>
              <option value="All">All bases</option>
              {allBases.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Buyer type
            <select value={buyerType} onChange={(event) => setBuyerType(event.target.value as BuyerType | "All")}>
              <option value="All">All buyer types</option>
              {allBuyerTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Price
            <select value={price} onChange={(event) => setPrice(event.target.value as PriceFilter)}>
              <option>All</option>
              <option>Under 200</option>
              <option>200 to 300</option>
              <option>300 to 350</option>
              <option>350 plus</option>
            </select>
          </label>

          <label>
            Density
            <select value={density} onChange={(event) => setDensity(event.target.value as DensityFilter)}>
              <option>All</option>
              <option>80% Light</option>
              <option>90% Natural</option>
              <option>95% Natural</option>
              <option>100% Medium</option>
              <option>115% Full</option>
            </select>
          </label>

          <label>
            Colour family
            <select value={colourFamily} onChange={(event) => setColourFamily(event.target.value as (typeof allColourFamilies)[number] | "All")}>
              <option value="All">All colour families</option>
              {allColourFamilies.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Maintenance
            <select value={maintenance} onChange={(event) => setMaintenance(event.target.value as (typeof allMaintenanceLevels)[number] | "All")}>
              <option value="All">Any maintenance level</option>
              {allMaintenanceLevels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Realism vs durability
            <select value={balance} onChange={(event) => setBalance(event.target.value as BalanceFilter)}>
              <option>All</option>
              <option>More realistic</option>
              <option>More durable</option>
              <option>Balanced</option>
            </select>
          </label>
        </aside>

        <div className="catalog-main">
          <div className="catalog-toolbar">
            <button type="button" className="button button-secondary mobile-only" onClick={() => setFiltersOpen(true)}>
              Open filters
            </button>
            <div className="result-count">
              Showing {filtered.length} product{filtered.length === 1 ? "" : "s"}
            </div>
            <label className="sort-control">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value as ShopSort)}>
                {shopSortOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isCompared={compareIds.includes(product.id)}
                onToggleCompare={toggleCompare}
                onQuickView={setQuickView}
              />
            ))}
          </div>
        </div>
      </div>

      <CompareTray
        products={comparedProducts}
        onRemove={(productId) => setCompareIds((current) => current.filter((id) => id !== productId))}
        onClear={() => setCompareIds([])}
      />
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
