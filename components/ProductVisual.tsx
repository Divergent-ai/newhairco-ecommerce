import type { BaseType } from "@/data/products";

export function ProductVisual({ baseType, name, compact = false }: { baseType: BaseType; name: string; compact?: boolean }) {
  return (
    <div className={`product-visual ${compact ? "compact" : ""} ${baseType.toLowerCase().replace(/\s+/g, "-")}`} aria-label={`${name} product illustration`}>
      <div className="hair-arc" />
      <div className="base-sheet" />
      <div className="strand strand-one" />
      <div className="strand strand-two" />
      <div className="strand strand-three" />
      <span>{baseType}</span>
    </div>
  );
}
