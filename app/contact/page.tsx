import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The New Hair Co for product guidance, colour questions, and pre-order help on men's hair pieces."
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@newhairco.com";

  return (
    <section className="page-section container">
      <div className="page-heading left">
        <span className="eyebrow">Contact</span>
        <h1>Human support for product questions, not salon upsells.</h1>
        <p>
          Contact us for product guidance, pre-order questions, or help narrowing base type, density,
          and colour family. We stay product-first and keep the answers plain.
        </p>
      </div>

      <div className="contact-grid">
        <article className="info-card">
          <h2>Email support</h2>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>Best for product selection questions, colour guidance, and dispatch queries before you buy.</p>
        </article>
        <article className="info-card">
          <h2>Before you message</h2>
          <p>Tell us whether you need front coverage, full-top coverage, or crown-only help. That usually gets you to the right answer faster.</p>
        </article>
        <article className="info-card">
          <h2>Quick self-serve routes</h2>
          <div className="footer-links-inline">
            <Link href="/build">Build your system</Link>
            <Link href="/quiz">Use Smart Finder</Link>
            <Link href="/compare">Compare bases</Link>
            <Link href="/faq">Read FAQs</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
