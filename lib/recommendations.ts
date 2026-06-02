import { products, type BaseType, type BuyerType, type Priority, type Product } from "@/data/products";

export type FinderAnswers = {
  coverage: "front" | "full-top" | "crown";
  basePreference: BaseType | "Open";
  hairlineExposure: "exposed" | "mostly-covered" | "not-applicable";
  lifestyle: "gym" | "warm-climate" | "daily-office" | "low-maintenance";
  colourFamily: "Black" | "Brown" | "Blonde" | "Grey blend" | "Unsure";
  density: "lighter" | "natural" | "medium" | "full";
  lengthWave: "short-straight" | "short-textured" | "medium-soft-wave" | "longer-movement";
  experience: "first-time" | "some-experience" | "experienced";
};

export type Recommendation = {
  product: Product;
  score: number;
  confidence: number;
  reasons: string[];
};

export const finderDefaults: FinderAnswers = {
  coverage: "front",
  basePreference: "Open",
  hairlineExposure: "exposed",
  lifestyle: "daily-office",
  colourFamily: "Brown",
  density: "natural",
  lengthWave: "short-textured",
  experience: "first-time"
};

function includesBuyerType(product: Product, buyerType: BuyerType) {
  return product.buyerTypes.includes(buyerType);
}

function pushReason(reasons: string[], ok: boolean, message: string, weight = 0) {
  if (ok) {
    reasons.push(message);
  }
  return ok ? weight : 0;
}

export function getRecommendations(answers: FinderAnswers, list = products): Recommendation[] {
  const scored = list.map((product) => {
    const reasons: string[] = [];
    let score = 0;

    score += pushReason(reasons, answers.basePreference !== "Open" && product.baseType === answers.basePreference, `Matches your ${answers.basePreference} base preference.`, 18);
    score += pushReason(reasons, answers.coverage === "crown" && product.baseType === "Crown Patch", "Built specifically for crown-only coverage.", 28);
    score += pushReason(reasons, answers.coverage === "front" && product.hairlineScore >= 4, "Stronger choice when the front hairline matters.", 16);
    score += pushReason(reasons, answers.coverage === "full-top" && product.baseType !== "Crown Patch", "Suited to broader top coverage rather than a small patch.", 10);

    score += pushReason(reasons, answers.hairlineExposure === "exposed" && product.hairlineScore >= 4, "Better suited to exposed or lightly exposed front styling.", 16);
    score += pushReason(reasons, answers.hairlineExposure === "mostly-covered" && product.baseType !== "Thin Skin", "A practical fit for covered-front or texture-led styling.", 8);

    score += pushReason(reasons, answers.lifestyle === "gym" && includesBuyerType(product, "Active / gym"), "More breathable for training and hotter days.", 18);
    score += pushReason(reasons, answers.lifestyle === "warm-climate" && product.comfortScore >= 4, "Comfort score suits warmer wear conditions.", 14);
    score += pushReason(reasons, answers.lifestyle === "daily-office" && product.maintenanceLevel !== "High", "Balanced enough for steady day-to-day wear.", 10);
    score += pushReason(reasons, answers.lifestyle === "low-maintenance" && product.cleanupScore >= 4, "Keeps the upkeep more manageable at home.", 18);

    score += pushReason(reasons, answers.colourFamily !== "Unsure" && product.colourFamilies.includes(answers.colourFamily), `Offered in the ${answers.colourFamily.toLowerCase()} family you selected.`, 8);

    score += pushReason(reasons, answers.density === "lighter" && product.densities.includes("80% Light"), "Can be configured with a lighter density for a softer result.", 8);
    score += pushReason(reasons, answers.density === "natural" && (product.densities.includes("90% Natural") || product.densities.includes("95% Natural")), "Supports a natural-looking density band.", 10);
    score += pushReason(reasons, answers.density === "medium" && product.densities.includes("100% Medium"), "Supports a medium density without overloading the look.", 8);
    score += pushReason(reasons, answers.density === "full" && product.densities.includes("115% Full"), "Can be configured fuller if you prefer extra density.", 6);

    score += pushReason(reasons, answers.lengthWave === "short-straight" && product.waves.includes("Straight"), "Works well with straighter, tidier cut-ins.", 6);
    score += pushReason(reasons, answers.lengthWave === "short-textured" && product.waves.includes("Slight wave"), "Suited to textured British barber styles.", 6);
    score += pushReason(reasons, answers.lengthWave === "medium-soft-wave" && product.waves.includes("Medium wave"), "Supports a softer wave-led finish.", 6);
    score += pushReason(reasons, answers.lengthWave === "longer-movement" && product.lengths.some((item) => item.includes("6") || item.includes("8")), "Offers enough length for more movement and shape.", 6);

    score += pushReason(reasons, answers.experience === "first-time" && product.beginnerScore >= 4, "Safer for a first order with fewer maintenance surprises.", 16);
    score += pushReason(reasons, answers.experience === "some-experience" && product.beginnerScore >= 3, "A sensible step up once you know your basic preferences.", 8);
    score += pushReason(reasons, answers.experience === "experienced" && product.maintenanceLevel !== "Low", "Leaves room for buyers who already know what they like.", 6);

    if (product.baseType === "Crown Patch" && answers.coverage !== "crown") {
      score -= 25;
    }

    if (answers.lifestyle === "low-maintenance" && product.maintenanceLevel === "High") {
      score -= 16;
    }

    if (answers.experience === "first-time" && product.beginnerScore <= 2) {
      score -= 12;
    }

    if (answers.hairlineExposure === "exposed" && product.hairlineScore <= 2) {
      score -= 18;
    }

    return {
      product,
      score,
      confidence: Math.max(55, Math.min(97, 55 + score)),
      reasons: reasons.slice(0, 4)
    };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}

export function buildWhyWeChoseThis(product: Product, priority: Priority) {
  if (priority === "Realism") return `Realism score ${product.realismScore}/5 with ${product.baseType.toLowerCase()} construction tuned for a believable front and density.`;
  if (priority === "Comfort") return `Comfort score ${product.comfortScore}/5 and a wear profile suited to longer daily use.`;
  if (priority === "Easy cleanup") return `Cleanup score ${product.cleanupScore}/5 makes this one of the easier units to maintain at home.`;
  return `Durability score ${product.durabilityScore}/5 makes this a stronger choice for steady repeat wear.`;
}
