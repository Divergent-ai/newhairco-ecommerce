import Link from "next/link";
import { CartBadge } from "@/components/CartBadge";

export function Header() {
  return (
    <header className="site-header">
      <div className="announcement">Hair pieces only. No fitting packages, no salon upsells. Premium systems delivered to your door.</div>
      <nav className="nav container" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="The New Hair Co home">
          <span className="brand-mark">N</span>
          <span><strong>The New Hair Co.</strong><small>Premium hair pieces</small></span>
        </Link>
        <div className="nav-links">
          <Link href="/shop">Shop</Link>
          <Link href="/quiz">Finder</Link>
          <Link href="/compare">Compare bases</Link>
          <Link href="/care">Care guide</Link>
        </div>
        <Link href="/cart" className="cart-link">Cart <CartBadge /></Link>
      </nav>
    </header>
  );
}
