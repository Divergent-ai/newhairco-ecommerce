import Link from "next/link";

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@newhairco.com";
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">N</span>
            <span><strong>The New Hair Co.</strong><small>Premium hair pieces</small></span>
          </Link>
          <p>Hair pieces for men who want a natural, discreet, confidence-restoring result without being forced into fitting or maintenance packages.</p>
        </div>
        <div>
          <h3>Shop</h3>
          <Link href="/shop">All hair pieces</Link>
          <Link href="/quiz">Find your match</Link>
          <Link href="/compare">Base comparison</Link>
        </div>
        <div>
          <h3>Support</h3>
          <Link href="/care">Care guide</Link>
          <a href={`mailto:${email}`}>{email}</a>
          <p className="small-print">Individual results vary. Hair pieces require suitable cutting, bonding, and maintenance.</p>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 The New Hair Co. All rights reserved.</div>
    </footer>
  );
}
