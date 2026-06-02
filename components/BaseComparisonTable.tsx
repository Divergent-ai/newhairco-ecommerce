"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { baseGuides, comparePriorityCards, type Priority } from "@/data/products";

export function BaseComparisonTable() {
  const [priority, setPriority] = useState<Priority>("Realism");

  const guidance = useMemo(
    () => comparePriorityCards.find((item) => item.priority === priority) ?? comparePriorityCards[0],
    [priority]
  );

  return (
    <div className="comparison-shell">
      <div className="comparison-priority">
        <span className="eyebrow">Choose by priority</span>
        <div className="priority-toggle" role="tablist" aria-label="Comparison priorities">
          {(["Realism", "Comfort", "Easy cleanup", "Durability"] as Priority[]).map((item) => (
            <button
              key={item}
              type="button"
              className={item === priority ? "active" : ""}
              onClick={() => setPriority(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="priority-guidance">
          <strong>{guidance.title}</strong>
          <p>{guidance.body}</p>
        </div>
      </div>

      <div className="comparison-table" role="table" aria-label="Hair piece base comparison">
        <div className="comparison-row header" role="row">
          <strong>Base</strong>
          <strong>Realism</strong>
          <strong>Comfort</strong>
          <strong>Durability</strong>
          <strong>Beginner fit</strong>
          <strong>Typical maintenance</strong>
        </div>
        {baseGuides.map((guide) => (
          <div className="comparison-row six-cols" role="row" key={guide.base}>
            <div>
              <strong>{guide.base}</strong>
              <span>{guide.best}</span>
            </div>
            <span>{guide.realism}</span>
            <span>{guide.breathability}</span>
            <span>{guide.durability}</span>
            <span>{guide.beginner}</span>
            <span>{guide.maintenance}</span>
          </div>
        ))}
      </div>

      <div className="base-choice-grid">
        {baseGuides.map((guide) => (
          <article className="base-card" key={guide.base}>
            <h3>{guide.base}</h3>
            <strong>{guide.best}</strong>
            <p>{guide.chooseWhen}</p>
            <Link href={`/shop?base=${encodeURIComponent(guide.base)}`} className="text-link">
              Shop {guide.base}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
