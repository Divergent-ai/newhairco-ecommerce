"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

type Answers = {
  hairline: "exposed" | "covered" | "crown";
  lifestyle: "active" | "office" | "premium";
  experience: "new" | "experienced";
};

const defaults: Answers = { hairline: "exposed", lifestyle: "office", experience: "new" };

export function QuizClient() {
  const [answers, setAnswers] = useState<Answers>(defaults);
  const [complete, setComplete] = useState(false);

  const recommended = useMemo(() => {
    if (answers.hairline === "crown") return products.filter((product) => product.baseType === "Crown Patch");
    if (answers.lifestyle === "active") return products.filter((product) => product.baseType === "Lace" || product.bestFor.includes("gym"));
    if (answers.lifestyle === "premium") return products.filter((product) => product.bestFor.includes("premium feel"));
    if (answers.experience === "new") return products.filter((product) => product.bestFor.includes("first-time buyers") || product.bestFor.includes("simple choice"));
    if (answers.hairline === "covered") return products.filter((product) => product.baseType === "Hybrid" || product.baseType === "Lace");
    return products.filter((product) => product.baseType === "Thin Skin" || product.baseType === "Hybrid");
  }, [answers]);

  return (
    <div className="quiz-shell">
      <section className="quiz-card">
        <span className="eyebrow">Hair piece finder</span>
        <h1>Find the right base before you buy.</h1>
        <p>This is designed to reduce choice overload. Answer three questions and the shop narrows itself to the pieces most likely to suit your hairline, lifestyle, and experience level.</p>
        <fieldset>
          <legend>Where do you need coverage?</legend>
          <button className={answers.hairline === "exposed" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, hairline: "exposed" })}>Top/front with exposed hairline</button>
          <button className={answers.hairline === "covered" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, hairline: "covered" })}>Top/front with fringe or covered front</button>
          <button className={answers.hairline === "crown" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, hairline: "crown" })}>Crown only</button>
        </fieldset>
        <fieldset>
          <legend>What matters most day to day?</legend>
          <button className={answers.lifestyle === "active" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, lifestyle: "active" })}>Breathability for gym / warm days</button>
          <button className={answers.lifestyle === "office" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, lifestyle: "office" })}>Balanced realism and easy upkeep</button>
          <button className={answers.lifestyle === "premium" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, lifestyle: "premium" })}>Premium hair softness and movement</button>
        </fieldset>
        <fieldset>
          <legend>Have you ordered hair systems before?</legend>
          <button className={answers.experience === "new" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, experience: "new" })}>No, keep it simple</button>
          <button className={answers.experience === "experienced" ? "choice active" : "choice"} onClick={() => setAnswers({ ...answers, experience: "experienced" })}>Yes, I know my preferences</button>
        </fieldset>
        <button className="button full-width" onClick={() => setComplete(true)}>Show my match</button>
      </section>
      <section className="quiz-results" aria-live="polite">
        {complete ? (
          <>
            <span className="eyebrow">Recommended</span>
            <h2>Your best match{recommended.length > 1 ? "es" : ""}</h2>
            <div className="product-grid compact-grid">
              {recommended.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        ) : (
          <div className="placeholder-result">
            <h2>Your results will appear here.</h2>
            <p>For most first-time buyers, a thin skin or hybrid base is the safest place to start because the maintenance is simpler than full lace.</p>
            <Link href="/compare" className="text-link">Compare base types</Link>
          </div>
        )}
      </section>
    </div>
  );
}
