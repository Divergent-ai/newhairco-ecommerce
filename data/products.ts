export type BaseType = "Thin Skin" | "Lace" | "Hybrid" | "Crown Patch";
export type Density = "80% Light" | "90% Natural" | "95% Natural" | "100% Medium" | "115% Full";

export type Product = {
  id: string;
  slug: string;
  name: string;
  line: string;
  price: number;
  compareAt?: number;
  baseType: BaseType;
  density: Density;
  lifespan: string;
  dispatch: string;
  badge: string;
  bestFor: string[];
  short: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  colours: string[];
  sizes: string[];
  lengths: string[];
  densities: Density[];
  waves: string[];
  frontOptions: string[];
};

export const colours = [
  "#1 Jet Black",
  "#1B Natural Black",
  "#2 Dark Brown",
  "#3 Medium Brown",
  "#4 Ash Brown",
  "#5 Light Brown",
  "#6 Chestnut Brown",
  "#7 Dark Blonde",
  "#18 Ash Blonde",
  "#20 Medium Blonde",
  "#22 Light Blonde",
  "#60 Platinum Blonde",
  "10% Grey Blend",
  "20% Grey Blend",
  "40% Grey Blend",
  "Custom Colour Match"
];

export const products: Product[] = [
  {
    id: "nhc-skin-001",
    slug: "invisible-thin-skin-hair-piece",
    name: "Invisible Thin Skin Hair Piece",
    line: "Ultra Realism Series",
    price: 249,
    compareAt: 289,
    baseType: "Thin Skin",
    density: "90% Natural",
    lifespan: "8-12 weeks typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Most realistic",
    bestFor: ["exposed hairline", "first-time buyers", "low shine finish"],
    short: "A feather-flat poly base for the cleanest scalp illusion and an undetectable front hairline.",
    description: "Designed for men who want the most natural close-up result. The thin skin base sits flat against the scalp, cleans quickly, and works especially well when the front hairline is visible.",
    features: [
      "Transparent thin-skin base for a scalp-like finish",
      "Pre-shaped front contour to make ordering simple",
      "Natural 90% density to avoid an artificial heavy look",
      "Ideal for swept-back, cropped, and side-parted styles"
    ],
    specs: {
      "Base": "0.04-0.06mm clear poly thin skin",
      "Hair": "Premium Remy human hair",
      "Knotting": "V-loop ventilation at the front",
      "Attachment": "Tape or liquid adhesive",
      "Cut-in": "Can be trimmed by any confident barber or stylist"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["80% Light", "90% Natural", "95% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["CC contour", "A contour", "Receded natural contour"]
  },
  {
    id: "nhc-lace-001",
    slug: "breathable-french-lace-hair-system",
    name: "Breathable French Lace Hair System",
    line: "Active Comfort Series",
    price: 299,
    baseType: "Lace",
    density: "95% Natural",
    lifespan: "3-5 months typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Best for active wear",
    bestFor: ["gym", "hot weather", "breathability"],
    short: "A breathable lace base for men who want comfort, movement, and a natural hairline.",
    description: "Built for daily wear, warmer rooms, and active routines. Lace gives airflow while still allowing a natural-looking front when bonded correctly.",
    features: [
      "Lightweight French lace for airflow and comfort",
      "Soft edge finish for a natural hairline",
      "Stable base for longer wear cycles",
      "Excellent for textured, messy, and forward styles"
    ],
    specs: {
      "Base": "French lace with reinforced perimeter",
      "Hair": "Premium Remy human hair",
      "Density": "Natural 95% finish",
      "Attachment": "Tape perimeter or adhesive bond",
      "Maintenance": "Best cleaned carefully with lace-safe products"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["80% Light", "90% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Natural graduated hairline", "Lightly bleached knots", "Covered fringe front"]
  },
  {
    id: "nhc-hybrid-001",
    slug: "hybrid-daily-wear-hair-piece",
    name: "Hybrid Daily Wear Hair Piece",
    line: "Balanced Life Series",
    price: 319,
    baseType: "Hybrid",
    density: "100% Medium",
    lifespan: "3-4 months typical wear cycle",
    dispatch: "Ships in 2-3 business days",
    badge: "Best all-rounder",
    bestFor: ["daily use", "easy cleaning", "durability"],
    short: "Lace comfort through the centre with a poly perimeter that makes taping and cleanup easier.",
    description: "The safe recommendation for most buyers. Hybrid construction gives comfort in the centre and practicality around the edges, making it easier to maintain at home.",
    features: [
      "Poly perimeter helps with tape placement and cleanup",
      "Lace centre keeps the piece breathable",
      "Medium density suits most UK buyers",
      "Great for men moving from salon-fitted systems to home ordering"
    ],
    specs: {
      "Base": "French lace centre with clear poly perimeter",
      "Hair": "Premium Remy human hair",
      "Density": "100% medium natural coverage",
      "Attachment": "Tape perimeter recommended",
      "Styling": "Works with most modern barbered finishes"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["90% Natural", "100% Medium", "115% Full"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Exposed natural front", "Covered fringe front", "Soft side-part front"]
  },
  {
    id: "nhc-premium-001",
    slug: "remy-reserve-premium-hair-piece",
    name: "Remy Reserve Premium Hair Piece",
    line: "Reserve Series",
    price: 389,
    baseType: "Hybrid",
    density: "100% Medium",
    lifespan: "4-6 months typical wear cycle",
    dispatch: "Made to order in 10-14 business days",
    badge: "Premium hair",
    bestFor: ["premium feel", "soft texture", "colour consistency"],
    short: "Our highest-grade Remy option for buyers who care most about softness, movement, and colour consistency.",
    description: "A premium hair-piece option built around high-quality Remy human hair with a soft, realistic movement. Ideal when the buyer wants the best available finish rather than simply the lowest price.",
    features: [
      "Premium Remy hair with smooth cuticle alignment",
      "Balanced hybrid base for practical daily wear",
      "Soft movement for realistic styling",
      "Best choice for darker shades and natural brown blends"
    ],
    specs: {
      "Base": "Hybrid lace and poly",
      "Hair": "Premium Remy human hair",
      "Density": "100% medium",
      "Attachment": "Tape or adhesive",
      "Finish": "Soft, natural movement with low shine"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches", "8 inches custom"],
    densities: ["90% Natural", "100% Medium", "115% Full"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Exposed natural front", "Covered fringe front", "Soft side-part front"]
  },
  {
    id: "nhc-crown-001",
    slug: "crown-patch-thinning-cover",
    name: "Crown Patch Thinning Cover",
    line: "Targeted Coverage Series",
    price: 129,
    compareAt: 149,
    baseType: "Crown Patch",
    density: "90% Natural",
    lifespan: "8-12 weeks typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Lowest commitment",
    bestFor: ["crown thinning", "small coverage", "lower budget"],
    short: "A smaller hair piece for men who need crown coverage rather than a full top system.",
    description: "For buyers who do not need a full hair system. This is a practical, lower-cost piece designed to cover the crown or a small thinning area while blending with surrounding hair.",
    features: [
      "Compact 4 x 4 and 5 x 5 coverage options",
      "Lower-cost entry point",
      "Natural density for easy blending",
      "Good for crown-only thinning patterns"
    ],
    specs: {
      "Base": "Thin skin or lace patch options",
      "Hair": "Premium human hair",
      "Density": "90% natural",
      "Attachment": "Tape or light adhesive",
      "Best use": "Crown-only thinning"
    },
    colours,
    sizes: ["4 x 4 crown patch", "5 x 5 crown patch", "Custom small patch"],
    lengths: ["3 inches", "4 inches", "5 inches"],
    densities: ["80% Light", "90% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave"],
    frontOptions: ["Not applicable - crown only"]
  },
  {
    id: "nhc-starter-001",
    slug: "starter-ready-to-wear-hair-piece",
    name: "Starter Ready-to-Wear Hair Piece",
    line: "Beginner Series",
    price: 219,
    baseType: "Thin Skin",
    density: "90% Natural",
    lifespan: "8-10 weeks typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Beginner friendly",
    bestFor: ["first order", "simple choice", "value"],
    short: "The simplest route into hair systems: standard size, natural density, common colour choices, and easy maintenance.",
    description: "A clear entry-level product for men who want to test a hair piece without navigating a complicated catalogue. Choose colour, wave, and length, then trim to fit.",
    features: [
      "Simple standard sizing",
      "Natural density that suits most men",
      "Easy-clean thin skin construction",
      "Best value for first-time ordering"
    ],
    specs: {
      "Base": "0.06-0.08mm poly thin skin",
      "Hair": "Human hair",
      "Density": "90% natural",
      "Attachment": "Tape recommended for beginners",
      "Finish": "Low shine, natural coverage"
    },
    colours: ["#1B Natural Black", "#2 Dark Brown", "#3 Medium Brown", "#4 Ash Brown", "#5 Light Brown", "10% Grey Blend", "Custom Colour Match"],
    sizes: ["8 x 10 standard"],
    lengths: ["4 inches", "5 inches"],
    densities: ["90% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave"],
    frontOptions: ["CC contour", "Covered fringe front"]
  }
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const baseGuides = [
  {
    base: "Thin Skin",
    best: "Best realism and easiest cleanup",
    feel: "Flat, smooth, scalp-like",
    chooseWhen: "You want an exposed hairline, simple maintenance, and a close-up natural finish."
  },
  {
    base: "Lace",
    best: "Best airflow and comfort",
    feel: "Light, breathable, flexible",
    chooseWhen: "You train, run warm, or prefer a breathable piece with natural movement."
  },
  {
    base: "Hybrid",
    best: "Best balance for daily wear",
    feel: "Breathable centre with easier tape edges",
    chooseWhen: "You want comfort, durability, and easier home maintenance."
  },
  {
    base: "Crown Patch",
    best: "Best for small thinning areas",
    feel: "Compact, lower commitment",
    chooseWhen: "Your front is strong and you only need crown coverage."
  }
];
