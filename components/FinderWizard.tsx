"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FinderAnswers } from "@/lib/recommendations";
import { finderDefaults, getRecommendations } from "@/lib/recommendations";
import { ProductCard } from "@/components/ProductCard";

type FinderWizardProps = {
  mode: "build" | "finder";
};

const steps: {
  key: keyof FinderAnswers;
  title: string;
  description: string;
  options: { value: FinderAnswers[keyof FinderAnswers]; label: string; hint: string }[];
}[] = [
  {
    key: "coverage",
    title: "Coverage needed",
    description: "Start with the area you actually want to improve.",
    options: [
      { value: "front", label: "Front and top with a natural front", hint: "You want help around the front hairline or wider top." },
      { value: "full-top", label: "Full top coverage", hint: "You need a broader top-of-head solution rather than a small patch." },
      { value: "crown", label: "Crown-only coverage", hint: "Your front holds up well and the thinning is mainly at the crown." }
    ]
  },
  {
    key: "basePreference",
    title: "Base preference",
    description: "Choose a base if you already know it, or leave the engine open.",
    options: [
      { value: "Open", label: "Guide me", hint: "Let the finder score the best fit." },
      { value: "Thin Skin", label: "Thin Skin", hint: "Best known for realism and easier cleanup." },
      { value: "Lace", label: "Lace", hint: "Best known for breathability and comfort." },
      { value: "Hybrid", label: "Hybrid", hint: "Best known for balance." },
      { value: "Crown Patch", label: "Crown Patch", hint: "Only if the thinning is small and targeted." }
    ]
  },
  {
    key: "hairlineExposure",
    title: "Hairline exposure",
    description: "How much of the front edge will be seen in real life?",
    options: [
      { value: "exposed", label: "Often exposed", hint: "Think brushed back, side sweep, or visible front." },
      { value: "mostly-covered", label: "Mostly covered", hint: "Fringe, texture, or looser styling hides most of the front." },
      { value: "not-applicable", label: "Not relevant", hint: "Mainly for crown-only or less front-focused wear." }
    ]
  },
  {
    key: "lifestyle",
    title: "Lifestyle",
    description: "Pick the wear pattern that feels most like your week.",
    options: [
      { value: "gym", label: "Gym / training", hint: "Sweat and airflow matter." },
      { value: "warm-climate", label: "Warm or stuffy days", hint: "Comfort and breathability sit high on the list." },
      { value: "daily-office", label: "Daily office routine", hint: "Balanced realism and manageable upkeep." },
      { value: "low-maintenance", label: "Low maintenance", hint: "You want the simplest cleanup possible." }
    ]
  },
  {
    key: "colourFamily",
    title: "Colour family",
    description: "Choose the closest family now. You can refine the exact shade on product pages.",
    options: [
      { value: "Black", label: "Black", hint: "Jet to natural black." },
      { value: "Brown", label: "Brown", hint: "The broadest range in the catalogue." },
      { value: "Blonde", label: "Blonde", hint: "Lighter shades and controlled warmth." },
      { value: "Grey blend", label: "Grey blend", hint: "Safer if you have visible natural grey." },
      { value: "Unsure", label: "Unsure", hint: "Keep the recommendation open and refine later." }
    ]
  },
  {
    key: "density",
    title: "Density",
    description: "Choose how full you want the result to feel.",
    options: [
      { value: "lighter", label: "Lighter", hint: "Softest and often the safest realism route." },
      { value: "natural", label: "Natural", hint: "The most common sweet spot for first orders." },
      { value: "medium", label: "Medium", hint: "A little more coverage without looking obviously heavy." },
      { value: "full", label: "Full", hint: "Only if you know you want stronger density." }
    ]
  },
  {
    key: "lengthWave",
    title: "Length and wave",
    description: "Think about the cut your barber will be blending this into.",
    options: [
      { value: "short-straight", label: "Short and straight", hint: "Clean, neater styling." },
      { value: "short-textured", label: "Short and textured", hint: "Textured crops, soft movement, or matte styling." },
      { value: "medium-soft-wave", label: "Medium with soft wave", hint: "Natural movement without going long." },
      { value: "longer-movement", label: "Longer movement", hint: "More shape, length, or styling flow." }
    ]
  },
  {
    key: "experience",
    title: "Experience level",
    description: "The finder uses this to avoid overcomplicating a first order.",
    options: [
      { value: "first-time", label: "First-time buyer", hint: "Keep it safer and easier to manage." },
      { value: "some-experience", label: "Some experience", hint: "You know a few preferences already." },
      { value: "experienced", label: "Experienced", hint: "You want the best-fit answer, even if upkeep is higher." }
    ]
  }
];

export function FinderWizard({ mode }: FinderWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>(finderDefaults);

  const recommendations = useMemo(() => getRecommendations(answers), [answers]);
  const activeStep = steps[stepIndex];
  const done = stepIndex >= steps.length;

  function select(value: FinderAnswers[keyof FinderAnswers]) {
    setAnswers((current) => ({ ...current, [activeStep.key]: value }));
  }

  return (
    <div className="finder-shell">
      <section className="finder-card">
        <span className="eyebrow">{mode === "build" ? "Build your system" : "Smart Finder"}</span>
        <h1>{mode === "build" ? "Build your hair piece in plain English." : "Hair Match Finder"}</h1>
        <p>
          {mode === "build"
            ? "Work through the key decisions a serious buyer actually needs to make, then jump straight into the strongest product matches."
            : "Answer a few practical questions and get a rule-based recommendation with clear reasoning instead of fake AI theatre."}
        </p>

        <div className="finder-progress">
          <strong>
            Step {Math.min(stepIndex + 1, steps.length)} / {steps.length}
          </strong>
          <span>{done ? "Recommendation summary ready" : activeStep.title}</span>
        </div>

        {!done ? (
          <>
            <div className="finder-step">
              <h2>{activeStep.title}</h2>
              <p>{activeStep.description}</p>
            </div>
            <div className="finder-options">
              {activeStep.options.map((option) => (
                <button
                  key={String(option.value)}
                  type="button"
                  className={answers[activeStep.key] === option.value ? "choice active" : "choice"}
                  onClick={() => select(option.value)}
                >
                  <strong>{option.label}</strong>
                  <span>{option.hint}</span>
                </button>
              ))}
            </div>
            <div className="finder-actions">
              <button type="button" className="button button-secondary" onClick={() => setStepIndex((index) => Math.max(0, index - 1))}>
                Back
              </button>
              <button type="button" className="button" onClick={() => setStepIndex((index) => Math.min(steps.length, index + 1))}>
                Continue
              </button>
            </div>
          </>
        ) : (
          <div className="finder-summary-card">
            <h2>Recommendation summary</h2>
            <ul className="check-list compact-check-list">
              <li>
                <strong>Coverage</strong>
                <span>{answers.coverage.replace(/-/g, " ")}</span>
              </li>
              <li>
                <strong>Lifestyle</strong>
                <span>{answers.lifestyle.replace(/-/g, " ")}</span>
              </li>
              <li>
                <strong>Experience</strong>
                <span>{answers.experience.replace(/-/g, " ")}</span>
              </li>
            </ul>
            <div className="finder-actions">
              <button type="button" className="button button-secondary" onClick={() => setStepIndex(0)}>
                Start again
              </button>
              <Link href="/shop" className="button">
                Browse the full shop
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="finder-results" aria-live="polite">
        <span className="eyebrow">Why we chose these</span>
        <h2>{done ? "Your best matches" : "Likely matches are updating as you go"}</h2>
        <div className="recommendation-grid">
          {recommendations.map(({ product, confidence, reasons }) => (
            <article key={product.id} className="recommendation-card">
              <div className="recommendation-top">
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.baseType}</span>
                </div>
                <div className="confidence-pill">{confidence}% fit</div>
              </div>
              <p>{product.whyThisProduct}</p>
              <ul className="check-list compact-check-list">
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="recommendation-card-actions">
                <Link href={`/products/${product.slug}`} className="button">
                  View product
                </Link>
                <Link href={`/products/${product.slug}`} className="button button-secondary">
                  Add from product page
                </Link>
              </div>
            </article>
          ))}
        </div>

        {done ? (
          <div className="product-grid compact-grid">
            {recommendations.map(({ product }) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
