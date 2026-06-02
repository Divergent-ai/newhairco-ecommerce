import Link from "next/link";
import { ClearCartOnMount } from "@/components/ClearCartOnMount";

export default function CheckoutSuccessPage() {
  return (
    <section className="page-section container narrow-page">
      <ClearCartOnMount />
      <span className="eyebrow">Order received</span>
      <h1>Thank you — your payment has been started successfully.</h1>
      <p>You will receive a Stripe receipt and order confirmation at the email used during checkout. Check your colour and base details carefully when the hair piece arrives.</p>
      <Link href="/shop" className="button">Continue shopping</Link>
    </section>
  );
}
