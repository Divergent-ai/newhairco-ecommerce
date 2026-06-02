import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <section className="page-section container narrow-page">
      <span className="eyebrow">Checkout cancelled</span>
      <h1>No payment was taken.</h1>
      <p>Your cart is still saved in this browser. You can return when ready.</p>
      <Link href="/cart" className="button">Return to cart</Link>
    </section>
  );
}
