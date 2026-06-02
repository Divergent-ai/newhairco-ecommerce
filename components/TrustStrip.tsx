import { trustItems } from "@/data/products";

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Store benefits">
      <div className="container trust-grid">
        {trustItems.map((item) => (
          <article key={item.title} className="trust-card">
            <strong>{item.title}</strong>
            <span>{item.body}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
