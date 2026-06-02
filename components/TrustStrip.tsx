export function TrustStrip() {
  const items = [
    ["Premium Remy options", "Soft, realistic movement with colour-focused ordering."],
    ["UK-first experience", "Clear GBP pricing, UK shipping, and plain-English guidance."],
    ["No fitting required", "Buy the hair piece only and use your own barber or stylist."],
    ["Future-proof catalogue", "Add new products by editing one product file."]
  ];
  return (
    <section className="trust-strip" aria-label="Store benefits">
      <div className="container trust-grid">
        {items.map(([title, body]) => (
          <div key={title} className="trust-card">
            <strong>{title}</strong>
            <span>{body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
