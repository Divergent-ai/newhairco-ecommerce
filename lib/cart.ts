import type { Product } from "@/data/products";

export type SelectedOptions = {
  colour: string;
  size: string;
  length: string;
  density: string;
  wave: string;
  front: string;
};

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  options: SelectedOptions;
};

export const CART_KEY = "newhairco_cart_v1";

export function buildCartLine(product: Product, options: SelectedOptions, quantity: number): CartLine {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    quantity,
    options
  };
}

export function cartLineKey(line: CartLine) {
  return [
    line.productId,
    line.options.colour,
    line.options.size,
    line.options.length,
    line.options.density,
    line.options.wave,
    line.options.front
  ].join("|");
}
