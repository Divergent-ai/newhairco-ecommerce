"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/products";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <article key={item.question} className={`faq-item ${open ? "open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.question}</span>
              <span>{open ? "-" : "+"}</span>
            </button>
            <div className="faq-panel">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
