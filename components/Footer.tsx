import Link from "next/link";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@newhairco.com";

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <Link href="/" className="brand">
            <span className="brand-mark">N</span>
            <span>
              <strong>The New Hair Co.</strong>
              <small>Premium men's hair pieces</small>
            </span>
          </Link>
          <p>
            Product-first men's hair pieces for buyers who want a natural result, clear GBP pricing,
            discreet packaging, and the freedom to use their own barber or stylist.
          </p>
          <p className="footer-note">
            No fitting packages. No salon upsells. Plain-English buying guidance from first browse to checkout.
          </p>
        </div>

        <div>
          <h3>Shop by base</h3>
          <Link href="/shop?base=Thin%20Skin">Thin Skin</Link>
          <Link href="/shop?base=Lace">Lace</Link>
          <Link href="/shop?base=Hybrid">Hybrid</Link>
          <Link href="/shop?base=Crown%20Patch">Crown Patch</Link>
        </div>

        <div>
          <h3>Shop by need</h3>
          <Link href="/shop?buyerType=First-time%20buyer">First-time buyer</Link>
          <Link href="/shop?buyerType=Exposed%20hairline">Exposed hairline</Link>
          <Link href="/shop?buyerType=Active%20%2F%20gym">Active / gym</Link>
          <Link href="/shop?buyerType=Premium%20feel">Premium feel</Link>
          <Link href="/shop?buyerType=Crown%20thinning">Crown thinning</Link>
        </div>

        <div>
          <h3>Support</h3>
          <Link href="/build">Build Your System</Link>
          <Link href="/quiz">Hair Match Finder</Link>
          <Link href="/compare">Compare Bases</Link>
          <Link href="/care">Care Guide</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/policies">Policies</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${email}`}>{email}</a>
          <span>United Kingdom focused delivery</span>
          <span>Secure Stripe checkout</span>
          <span>Discreet packaging on every order</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 The New Hair Co. All rights reserved.</span>
        <span>Inspect before cutting, colouring, or bonding.</span>
      </div>
    </footer>
  );
}
