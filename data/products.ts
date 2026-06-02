export type BaseType = "Thin Skin" | "Lace" | "Hybrid" | "Crown Patch";
export type Density = "80% Light" | "90% Natural" | "95% Natural" | "100% Medium" | "115% Full";
export type BuyerType =
  | "First-time buyer"
  | "Active / gym"
  | "Exposed hairline"
  | "Crown thinning"
  | "Premium feel"
  | "Low commitment";
export type MaintenanceLevel = "Low" | "Medium" | "High";
export type Priority = "Realism" | "Comfort" | "Easy cleanup" | "Durability";

export type ProductGalleryFrame = {
  title: string;
  caption: string;
};

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
  buyerTypes: BuyerType[];
  colourFamilies: string[];
  maintenanceLevel: MaintenanceLevel;
  realismScore: number;
  durabilityScore: number;
  comfortScore: number;
  cleanupScore: number;
  beginnerScore: number;
  hairlineScore: number;
  commitment: string;
  short: string;
  whyThisProduct: string;
  description: string;
  features: string[];
  included: string[];
  fitGuidance: string[];
  careNotes: string[];
  deliveryNote: string;
  returnsNote: string;
  paymentNote: string;
  bestForCards: { title: string; body: string }[];
  gallery: ProductGalleryFrame[];
  specs: Record<string, string>;
  colours: string[];
  sizes: string[];
  lengths: string[];
  densities: Density[];
  waves: string[];
  frontOptions: string[];
};

export type BaseGuide = {
  base: BaseType;
  best: string;
  feel: string;
  chooseWhen: string;
  realism: string;
  breathability: string;
  durability: string;
  beginner: string;
  maintenance: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  href?: string;
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

const starterColours = [
  "#1B Natural Black",
  "#2 Dark Brown",
  "#3 Medium Brown",
  "#4 Ash Brown",
  "#5 Light Brown",
  "10% Grey Blend",
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
    bestFor: ["Exposed hairline", "Low shine finish", "Simple cleanup"],
    buyerTypes: ["Exposed hairline", "First-time buyer"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Low",
    realismScore: 5,
    durabilityScore: 2,
    comfortScore: 3,
    cleanupScore: 5,
    beginnerScore: 5,
    hairlineScore: 5,
    commitment: "Lower commitment wear cycle with very easy cleanup.",
    short: "A feather-flat poly base for the cleanest scalp illusion and an undetectable front hairline.",
    whyThisProduct: "Best when the buyer wants the most convincing scalp finish without a complicated cleaning routine.",
    description: "Designed for men who want the most natural close-up result. The thin skin base sits flat against the scalp, cleans quickly, and works especially well when the front hairline is visible.",
    features: [
      "Transparent thin-skin base for a scalp-like finish",
      "Pre-shaped front contour to make ordering simple",
      "Natural 90% density to avoid an artificial heavy look",
      "Ideal for swept-back, cropped, and side-parted styles"
    ],
    included: [
      "Configured hair piece in your selected colour and density",
      "Protective storage insert for inspection before bonding",
      "Plain-English inspection and cut-in guidance card"
    ],
    fitGuidance: [
      "Inspect in daylight before trimming the base or cutting the hair.",
      "Tape is the easiest route for first-time buyers wanting neat cleanup.",
      "A confident barber can cut this into modern short-back-and-sides styles."
    ],
    careNotes: [
      "Use low heat when blow-drying to preserve the thin skin base.",
      "Remove adhesive residue patiently rather than over-scrubbing the base.",
      "Condition the mid-lengths and ends lightly to keep movement natural."
    ],
    deliveryNote: "Fast UK dispatch and discreet outer packaging as standard.",
    returnsNote: "Return eligibility depends on the unit staying uncut, uncoloured, and free from adhesive.",
    paymentNote: "Secure GBP checkout with major cards through Stripe.",
    bestForCards: [
      { title: "Visible front hairline", body: "Great for brushed-back or side-parted styling where the front edge needs to disappear." },
      { title: "Easy cleanup", body: "Poly makes adhesive removal more straightforward than full lace for many first-time buyers." },
      { title: "Low shine finish", body: "A controlled natural density helps the result read more like your own hair, not a heavy replacement." }
    ],
    gallery: [
      { title: "Front hairline detail", caption: "Placeholder visual for close-up realism and low-shine finish." },
      { title: "Base underside", caption: "Shows the thin poly construction buyers inspect before fitting." },
      { title: "Barber-ready texture", caption: "Intended for clean British cuts, textured crops, and controlled side parts." }
    ],
    specs: {
      Base: "0.04-0.06mm clear poly thin skin",
      Hair: "Premium Remy human hair",
      Knotting: "V-loop ventilation at the front",
      Attachment: "Tape or liquid adhesive",
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
    id: "nhc-starter-001",
    slug: "starter-ready-to-wear-hair-piece",
    name: "Starter Ready-to-Wear Hair Piece",
    line: "Beginner Series",
    price: 219,
    baseType: "Thin Skin",
    density: "90% Natural",
    lifespan: "8-10 weeks typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Best for beginners",
    bestFor: ["First order", "Simple choice", "Value-conscious start"],
    buyerTypes: ["First-time buyer", "Low commitment"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Low",
    realismScore: 4,
    durabilityScore: 3,
    comfortScore: 3,
    cleanupScore: 5,
    beginnerScore: 5,
    hairlineScore: 4,
    commitment: "The least intimidating route into full-top coverage.",
    short: "The simplest route into hair systems: standard sizing, natural density, and options kept intentionally focused.",
    whyThisProduct: "Built to reduce decision fatigue for first-time buyers who want a safe first order rather than a complex custom brief.",
    description: "A clear entry-level product for men who want to test a hair piece without navigating a complicated catalogue. Choose colour, wave, and length, then trim to fit.",
    features: [
      "Simple standard sizing",
      "Natural density that suits most men",
      "Easy-clean thin skin construction",
      "Best value for first-time ordering"
    ],
    included: [
      "Ready-to-configure unit in the most common UK sizes",
      "Inspection card covering colour, density, and base checks",
      "Support email prompt for pre-cut questions"
    ],
    fitGuidance: [
      "Take the unit to a barber only after checking colour and density in natural light.",
      "Keep the first style conservative so your barber can blend safely.",
      "If you are unsure on front exposure, choose a covered fringe option."
    ],
    careNotes: [
      "Store the piece dry and ventilated between wears.",
      "Use sulphate-light products and avoid over-washing.",
      "Keep heat tools moderate, especially around the front edge."
    ],
    deliveryNote: "Quick dispatch for buyers who want to start without waiting on a made-to-order unit.",
    returnsNote: "Returns are most realistic before any cut-in, tinting, or adhesive use.",
    paymentNote: "Checkout is processed securely in GBP.",
    bestForCards: [
      { title: "First order confidence", body: "A narrowed option set helps you get to a sensible configuration without overthinking every variable." },
      { title: "Value without shortcuts", body: "You still get human hair and a natural density, just with a more focused starting spec." },
      { title: "Easy barber handoff", body: "A standard size and safe density make this straightforward for a cut-in." }
    ],
    gallery: [
      { title: "Beginner-friendly front", caption: "Placeholder view showing a natural entry point for covered or lightly exposed styles." },
      { title: "Standard base size", caption: "Visual reference for the common full-top size many first-time buyers start with." },
      { title: "Low-commitment finish", caption: "Designed to look natural without a heavy, over-dense result." }
    ],
    specs: {
      Base: "0.06-0.08mm poly thin skin",
      Hair: "Human hair",
      Density: "90% natural",
      Attachment: "Tape recommended for beginners",
      Finish: "Low shine, natural coverage"
    },
    colours: starterColours,
    sizes: ["8 x 10 standard"],
    lengths: ["4 inches", "5 inches"],
    densities: ["90% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave"],
    frontOptions: ["CC contour", "Covered fringe front"]
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
    bestFor: ["Gym", "Warm weather", "Breathability"],
    buyerTypes: ["Active / gym", "Exposed hairline"],
    colourFamilies: ["Black", "Brown", "Blonde", "Grey blend"],
    maintenanceLevel: "High",
    realismScore: 4,
    durabilityScore: 4,
    comfortScore: 5,
    cleanupScore: 2,
    beginnerScore: 2,
    hairlineScore: 4,
    commitment: "Higher maintenance, excellent comfort for regular wearers.",
    short: "A breathable lace base for men who want comfort, movement, and a natural hairline.",
    whyThisProduct: "The right choice when airflow and all-day comfort matter more than easy cleanup.",
    description: "Built for daily wear, warmer rooms, and active routines. Lace gives airflow while still allowing a natural-looking front when bonded correctly.",
    features: [
      "Lightweight French lace for airflow and comfort",
      "Soft edge finish for a natural hairline",
      "Stable base for longer wear cycles",
      "Excellent for textured, messy, and forward styles"
    ],
    included: [
      "Configured lace system with reinforced perimeter",
      "Care note covering gentler lace cleanup",
      "Inspection guidance for knot bleaching and edge checks"
    ],
    fitGuidance: [
      "Best handled by buyers or stylists comfortable with lace cleanup.",
      "Use lace-safe solvents and give yourself extra time on maintenance days.",
      "A graduated front works well when you want realistic lift without heavy density."
    ],
    careNotes: [
      "Detangle carefully from the ends upward to protect lace ventilation.",
      "Avoid overloading the base with heavy products that are harder to rinse clean.",
      "Let the unit dry thoroughly before storage."
    ],
    deliveryNote: "Fast dispatch with discreet packaging suitable for home delivery.",
    returnsNote: "Keep the lace untouched and adhesive-free if you may need to request a return.",
    paymentNote: "GBP pricing with secure online payment.",
    bestForCards: [
      { title: "Gym and warm rooms", body: "French lace keeps airflow moving through the base for a lighter daily feel." },
      { title: "Textured styling", body: "Natural movement suits messy, forward, or relaxed finishes." },
      { title: "Regular wearers", body: "A strong option for buyers already comfortable maintaining a system at home." }
    ],
    gallery: [
      { title: "Breathable top view", caption: "Placeholder visual showing a lighter, airier base choice for active wear." },
      { title: "Reinforced perimeter", caption: "Highlights how the lace is supported for daily handling." },
      { title: "Textured cut-in", caption: "Ideal for messy crops, textured tops, and casual movement." }
    ],
    specs: {
      Base: "French lace with reinforced perimeter",
      Hair: "Premium Remy human hair",
      Density: "Natural 95% finish",
      Attachment: "Tape perimeter or adhesive bond",
      Maintenance: "Best cleaned carefully with lace-safe products"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["80% Light", "90% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Natural graduated hairline", "Lightly bleached knots", "Covered fringe front"]
  },
  {
    id: "nhc-lace-002",
    slug: "lace-front-everyday-hair-system",
    name: "Lace Front Everyday Hair System",
    line: "Natural Front Series",
    price: 329,
    baseType: "Lace",
    density: "90% Natural",
    lifespan: "3-4 months typical wear cycle",
    dispatch: "Ships in 2-3 business days",
    badge: "Natural hairline",
    bestFor: ["Exposed front", "Soft movement", "Comfort-first wear"],
    buyerTypes: ["Exposed hairline", "Premium feel"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "High",
    realismScore: 5,
    durabilityScore: 3,
    comfortScore: 5,
    cleanupScore: 2,
    beginnerScore: 2,
    hairlineScore: 5,
    commitment: "A more detail-oriented option for buyers who want softness at the front edge.",
    short: "A softer lace-front configuration for buyers who style away from the face but still want breathable daily wear.",
    whyThisProduct: "Useful when the front edge matters almost as much as realism, but you still prefer the comfort of lace over a full poly feel.",
    description: "This option leans into front-edge softness and natural movement. It works best when styling exposes the front but you still want the comfort and airflow that lace buyers usually prefer.",
    features: [
      "Focused on a softer, more natural front presentation",
      "Balanced density for easy blending in British barbered styles",
      "Comfortable for repeat wearers who run warm",
      "Works well with textured lift and relaxed side sweeps"
    ],
    included: [
      "Configured lace-front system",
      "Plain-English handling notes for the front edge",
      "Storage support insert"
    ],
    fitGuidance: [
      "Best fitted slowly with proper inspection under natural light.",
      "Use a lighter hand with adhesive at the front edge.",
      "Plan your cut-in around the natural graduation rather than over-thinning."
    ],
    careNotes: [
      "Keep brushes soft around the front edge.",
      "Avoid product buildup near the lace line.",
      "Let the unit rest flat after cleaning to help maintain its shape."
    ],
    deliveryNote: "Discreet delivery with clear dispatch timing shown before checkout.",
    returnsNote: "The front edge must stay uncut and unbonded for any return discussion.",
    paymentNote: "GBP checkout, no forced packages added later.",
    bestForCards: [
      { title: "Soft front presentation", body: "Useful when the front hairline is part of the style rather than fully hidden." },
      { title: "All-day comfort", body: "Lace helps the piece feel lighter through long office or commuting days." },
      { title: "Premium movement", body: "A safer recommendation for buyers who care how the hair moves, not just how the base cleans." }
    ],
    gallery: [
      { title: "Soft front edge", caption: "Placeholder close-up for the more natural front presentation." },
      { title: "Everyday movement", caption: "Shows the kind of softer flow buyers usually want from a lace-front build." },
      { title: "Natural light inspection", caption: "Represents the pre-cut checks buyers should make before fitting." }
    ],
    specs: {
      Base: "Lace front with breathable body",
      Hair: "Premium human hair",
      Density: "90% natural for easier realism",
      Attachment: "Adhesive front with tape or bond elsewhere",
      Styling: "Strong with textured lift and soft side movement"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template"],
    lengths: ["5 inches", "6 inches"],
    densities: ["90% Natural", "95% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Light graduated front", "Exposed natural front", "Soft side-part front"]
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
    bestFor: ["Daily use", "Easy cleaning", "Durability"],
    buyerTypes: ["First-time buyer", "Active / gym"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Medium",
    realismScore: 4,
    durabilityScore: 4,
    comfortScore: 4,
    cleanupScore: 4,
    beginnerScore: 4,
    hairlineScore: 4,
    commitment: "A sensible middle ground for most buyers.",
    short: "Lace comfort through the centre with a poly perimeter that makes taping and cleanup easier.",
    whyThisProduct: "The safest broad recommendation when someone wants one product to cover realism, comfort, and practical home maintenance.",
    description: "The safe recommendation for most buyers. Hybrid construction gives comfort in the centre and practicality around the edges, making it easier to maintain at home.",
    features: [
      "Poly perimeter helps with tape placement and cleanup",
      "Lace centre keeps the piece breathable",
      "Medium density suits most UK buyers",
      "Great for men moving from salon-fitted systems to home ordering"
    ],
    included: [
      "Configured hybrid unit",
      "Inspection and maintenance starter card",
      "Support guidance for choosing tape placement"
    ],
    fitGuidance: [
      "A reliable handoff for barbers familiar with modern system cut-ins.",
      "Tape the perimeter for a balanced first fitting routine.",
      "Good option if you are moving away from salon-only buying."
    ],
    careNotes: [
      "Clean the poly edge first, then the lace centre with more care.",
      "Avoid over-saturating the centre during washing.",
      "Use moderate heat and always protect the ends."
    ],
    deliveryNote: "UK-first delivery expectations with clear dispatch timing.",
    returnsNote: "Please inspect the perimeter, density, and front choice before any alteration.",
    paymentNote: "Secure card checkout in GBP.",
    bestForCards: [
      { title: "Balanced everyday wear", body: "Comfortable enough for daily use without turning cleanup into a project." },
      { title: "Home maintenance confidence", body: "The poly perimeter makes tape placement and residue removal easier to manage." },
      { title: "Modern barber styles", body: "A flexible option for textured tops, clean sides, and practical day-to-day styling." }
    ],
    gallery: [
      { title: "Perimeter detail", caption: "Placeholder showing the helpful poly edge buyers use for tape placement." },
      { title: "Centre breathability", caption: "Represents the lighter lace middle that improves day-to-day comfort." },
      { title: "Daily-wear finish", caption: "Useful for versatile office, social, and casual styling." }
    ],
    specs: {
      Base: "French lace centre with clear poly perimeter",
      Hair: "Premium Remy human hair",
      Density: "100% medium natural coverage",
      Attachment: "Tape perimeter recommended",
      Styling: "Works with most modern barbered finishes"
    },
    colours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template", "Custom template supplied by customer"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["90% Natural", "100% Medium", "115% Full"],
    waves: ["Straight", "Slight wave", "Medium wave"],
    frontOptions: ["Exposed natural front", "Covered fringe front", "Soft side-part front"]
  },
  {
    id: "nhc-hybrid-002",
    slug: "remy-reserve-premium-hair-piece",
    name: "Remy Reserve Premium Hair Piece",
    line: "Reserve Series",
    price: 389,
    baseType: "Hybrid",
    density: "100% Medium",
    lifespan: "4-6 months typical wear cycle",
    dispatch: "Made to order in 10-14 business days",
    badge: "Premium feel",
    bestFor: ["Premium feel", "Soft texture", "Colour consistency"],
    buyerTypes: ["Premium feel", "Exposed hairline"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Medium",
    realismScore: 5,
    durabilityScore: 4,
    comfortScore: 4,
    cleanupScore: 4,
    beginnerScore: 3,
    hairlineScore: 4,
    commitment: "A more premium choice for buyers prioritising hair quality and finish.",
    short: "Our highest-grade Remy option for buyers who care most about softness, movement, and colour consistency.",
    whyThisProduct: "Recommended when the buyer wants the best-looking hair quality in the range rather than just the easiest or cheapest unit.",
    description: "A premium hair-piece option built around high-quality Remy human hair with a soft, realistic movement. Ideal when the buyer wants the best available finish rather than simply the lowest price.",
    features: [
      "Premium Remy hair with smooth cuticle alignment",
      "Balanced hybrid base for practical daily wear",
      "Soft movement for realistic styling",
      "Best choice for darker shades and natural brown blends"
    ],
    included: [
      "Premium configured hybrid system",
      "Inspection guidance focused on softness and colour consistency",
      "Pre-cut support email route"
    ],
    fitGuidance: [
      "A good option to take to a barber who values movement and texture.",
      "Works best when density is kept natural rather than over-full.",
      "Give yourself a little more time for daylight colour checks on first delivery."
    ],
    careNotes: [
      "Use a heat protectant whenever styling with direct heat.",
      "Condition gently to preserve softness without causing heavy buildup.",
      "Store away from humidity to keep the hair finish controlled."
    ],
    deliveryNote: "Made-to-order timing is longer, but the trade-off is a more premium finish.",
    returnsNote: "Premium made-to-order pieces should be checked carefully before any cut-in or tinting.",
    paymentNote: "Secure payment in GBP with no salon package attached.",
    bestForCards: [
      { title: "Premium texture", body: "The strongest option when softness and natural movement matter more than just speed to buy." },
      { title: "Colour-sensitive buyers", body: "A better pick when even tone and overall finish are part of the decision." },
      { title: "Everyday confidence", body: "You keep the practical hybrid base while upgrading the overall hair quality." }
    ],
    gallery: [
      { title: "Premium texture placeholder", caption: "Represents smoother movement and a more refined finish." },
      { title: "Controlled shine", caption: "Built to avoid the cheaper, overly glossy look buyers often worry about." },
      { title: "Reserve quality cut-in", caption: "Ideal for higher-end barbering and softer styling movement." }
    ],
    specs: {
      Base: "Hybrid lace and poly",
      Hair: "Premium Remy human hair",
      Density: "100% medium",
      Attachment: "Tape or adhesive",
      Finish: "Soft, natural movement with low shine"
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
    bestFor: ["Crown thinning", "Small coverage", "Lower budget"],
    buyerTypes: ["Crown thinning", "Low commitment"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Low",
    realismScore: 3,
    durabilityScore: 3,
    comfortScore: 4,
    cleanupScore: 4,
    beginnerScore: 5,
    hairlineScore: 1,
    commitment: "A lower-cost, lower-commitment solution for targeted coverage only.",
    short: "A smaller hair piece for men who need crown coverage rather than a full top system.",
    whyThisProduct: "The best entry point when the front still holds up well and only the crown needs support.",
    description: "For buyers who do not need a full hair system. This is a practical, lower-cost piece designed to cover the crown or a small thinning area while blending with surrounding hair.",
    features: [
      "Compact 4 x 4 and 5 x 5 coverage options",
      "Lower-cost entry point",
      "Natural density for easy blending",
      "Good for crown-only thinning patterns"
    ],
    included: [
      "Crown-focused configured unit",
      "Inspection card for blend and density checks",
      "Simple fitting guidance for small-area placement"
    ],
    fitGuidance: [
      "Use this only if the front and mid-scalp do not require full coverage.",
      "Blend length carefully with the surrounding natural hair.",
      "A local barber can trim it in without needing a full-system routine."
    ],
    careNotes: [
      "Keep adhesives light and appropriate to the smaller base area.",
      "Brush the surrounding hair together with the patch for a cleaner blend.",
      "Avoid heavy styling products that can separate the coverage area visually."
    ],
    deliveryNote: "Fast dispatch for buyers who want a targeted fix rather than a full new system.",
    returnsNote: "Check blend, size, and colour before alteration or adhesive use.",
    paymentNote: "Straightforward GBP checkout.",
    bestForCards: [
      { title: "Crown-only thinning", body: "A practical solution when your hairline is still strong and you do not need full-top coverage." },
      { title: "Lower commitment", body: "Less expensive and easier to trial than moving straight into a larger unit." },
      { title: "Simple barber blend", body: "A tidy way to restore density at the crown without changing your whole hairstyle." }
    ],
    gallery: [
      { title: "Crown blend placeholder", caption: "Represents how a smaller coverage area integrates with surrounding natural hair." },
      { title: "Compact base view", caption: "Shows the smaller footprint that makes this less intimidating for new buyers." },
      { title: "Targeted density", caption: "Focused only on the thinning zone rather than full replacement coverage." }
    ],
    specs: {
      Base: "Thin skin or lace patch options",
      Hair: "Premium human hair",
      Density: "90% natural",
      Attachment: "Tape or light adhesive",
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
    id: "nhc-skin-002",
    slug: "durable-daily-thin-skin-system",
    name: "Durable Daily Thin Skin System",
    line: "Clean Routine Series",
    price: 269,
    baseType: "Thin Skin",
    density: "95% Natural",
    lifespan: "10-14 weeks typical wear cycle",
    dispatch: "Ships in 1-2 business days",
    badge: "Easy cleanup",
    bestFor: ["Easy routine", "Daily wear", "Sensible durability"],
    buyerTypes: ["First-time buyer", "Low commitment"],
    colourFamilies: ["Black", "Brown", "Grey blend"],
    maintenanceLevel: "Low",
    realismScore: 4,
    durabilityScore: 3,
    comfortScore: 3,
    cleanupScore: 5,
    beginnerScore: 4,
    hairlineScore: 4,
    commitment: "Practical daily-use choice when easy maintenance is the priority.",
    short: "A slightly sturdier thin skin option for buyers who want realism with an even simpler weekly routine.",
    whyThisProduct: "A good match for buyers who like poly maintenance but want a touch more everyday sturdiness than the ultra-thin option.",
    description: "This piece sits between ultra-thin realism and practical routine. It keeps the easy-clean advantages of thin skin while giving a little more day-to-day resilience.",
    features: [
      "Still low-shine, but a touch sturdier than ultra-thin skin",
      "Simple perimeter taping for easy home maintenance",
      "Natural density for believable office and casual wear",
      "Good bridge product between beginner and regular buyer"
    ],
    included: [
      "Configured thin skin system",
      "Inspection notes for first wear",
      "Care card focused on simple cleanup"
    ],
    fitGuidance: [
      "Useful for buyers who want a forgiving first or second system.",
      "Pairs well with tidy, natural-density British styles.",
      "Check the front contour against your preferred hairline before cutting."
    ],
    careNotes: [
      "Clean little and often rather than waiting for heavy buildup.",
      "Use modest heat and avoid over-drying the hair.",
      "Store flat to help the base keep its shape."
    ],
    deliveryNote: "Fast dispatch and easy to understand configuration options.",
    returnsNote: "Inspect thoroughly before cutting, bonding, or tinting.",
    paymentNote: "Stripe-backed secure checkout in GBP.",
    bestForCards: [
      { title: "Simple weekly routine", body: "A practical choice when you want maintenance to feel manageable." },
      { title: "Natural daily look", body: "Balanced density avoids the obvious heavy look some first orders suffer from." },
      { title: "Lower learning curve", body: "Thin skin helps keep adhesive cleanup less intimidating." }
    ],
    gallery: [
      { title: "Daily routine placeholder", caption: "Represents a slightly sturdier poly build suited to repeat everyday wear." },
      { title: "Natural-density top", caption: "Shows the calmer, more believable density profile." },
      { title: "Easy-clean underside", caption: "Visual reference for the kind of poly surface buyers manage at home." }
    ],
    specs: {
      Base: "0.06mm low-shine thin skin",
      Hair: "Human hair",
      Density: "95% natural",
      Attachment: "Tape or adhesive",
      Wear: "Built for simple daily routines"
    },
    colours: starterColours,
    sizes: ["8 x 10 standard", "7 x 9 smaller template"],
    lengths: ["4 inches", "5 inches", "6 inches"],
    densities: ["90% Natural", "95% Natural", "100% Medium"],
    waves: ["Straight", "Slight wave"],
    frontOptions: ["CC contour", "Natural contour", "Covered fringe front"]
  }
];

export const allBases: BaseType[] = ["Thin Skin", "Lace", "Hybrid", "Crown Patch"];
export const allBuyerTypes: BuyerType[] = [
  "First-time buyer",
  "Active / gym",
  "Exposed hairline",
  "Crown thinning",
  "Premium feel",
  "Low commitment"
];
export const allMaintenanceLevels: MaintenanceLevel[] = ["Low", "Medium", "High"];
export const allColourFamilies = ["Black", "Brown", "Blonde", "Grey blend"] as const;
export const allPriorities: Priority[] = ["Realism", "Comfort", "Easy cleanup", "Durability"];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const productById = (id: string) => products.find((product) => product.id === id);

export function getRelatedProducts(product: Product) {
  return products
    .filter((entry) => entry.id !== product.id)
    .sort((a, b) => {
      const scoreA =
        Number(a.baseType === product.baseType) * 3 +
        a.buyerTypes.filter((tag) => product.buyerTypes.includes(tag)).length +
        a.colourFamilies.filter((family) => product.colourFamilies.includes(family)).length;
      const scoreB =
        Number(b.baseType === product.baseType) * 3 +
        b.buyerTypes.filter((tag) => product.buyerTypes.includes(tag)).length +
        b.colourFamilies.filter((family) => product.colourFamilies.includes(family)).length;
      return scoreB - scoreA;
    })
    .slice(0, 3);
}

export const announcementItems = [
  "Premium hair pieces delivered across the UK",
  "Secure checkout",
  "No fitting package required"
];

export const trustItems = [
  {
    title: "Secure checkout",
    body: "Stripe-powered GBP checkout with clear pricing and no forced service add-ons."
  },
  {
    title: "UK delivery",
    body: "Discreet delivery expectations, tracked shipping, and a UK-first buying flow."
  },
  {
    title: "Discreet packaging",
    body: "Your order arrives plainly packed so the experience stays private."
  },
  {
    title: "Colour guidance",
    body: "Check before cutting, compare in daylight, and use support if you need help narrowing shades."
  },
  {
    title: "Human hair options",
    body: "Thin skin, lace, hybrid, and crown coverage across practical and premium Remy-led options."
  }
];

export const homepageSituations = [
  {
    title: "Receding hairline",
    description: "Best for buyers who need realism at the front edge.",
    href: "/shop?buyerType=Exposed%20hairline",
    cta: "Shop natural front options"
  },
  {
    title: "Thinning crown",
    description: "Targeted coverage without moving into a full-top system too early.",
    href: "/shop?base=Crown%20Patch",
    cta: "See crown patches"
  },
  {
    title: "Full top coverage",
    description: "Everyday systems for men replacing a larger area on top.",
    href: "/shop?base=Hybrid",
    cta: "View balanced full-top systems"
  },
  {
    title: "Active lifestyle",
    description: "Breathable picks for training, commuting, and warmer days.",
    href: "/shop?buyerType=Active%20%2F%20gym",
    cta: "Shop breathable options"
  },
  {
    title: "First-time buyer",
    description: "Safer, simpler choices with less maintenance friction.",
    href: "/shop?buyerType=First-time%20buyer",
    cta: "Start with beginner-friendly units"
  }
];

export const journeySteps = [
  {
    title: "Choose base",
    body: "Thin skin for realism, lace for airflow, hybrid for balance, crown patch for targeted coverage."
  },
  {
    title: "Choose colour",
    body: "Use daylight and stay conservative if you are between shades or grey blends."
  },
  {
    title: "Choose density",
    body: "Natural density usually looks more believable than going too full on a first order."
  },
  {
    title: "Choose length and wave",
    body: "Pick a finish your barber can cut into your existing style without fighting the hair."
  },
  {
    title: "Checkout securely",
    body: "Pay in GBP, choose UK delivery, and get the unit to your door without a salon package."
  },
  {
    title: "Take it to your barber",
    body: "Inspect first, then let your own stylist trim and blend it your way."
  }
];

export const baseGuides: BaseGuide[] = [
  {
    base: "Thin Skin",
    best: "Best realism and easiest cleanup",
    feel: "Flat, smooth, scalp-like",
    chooseWhen: "You want an exposed hairline, simple maintenance, and a close-up natural finish.",
    realism: "Excellent",
    breathability: "Moderate",
    durability: "Lower to medium",
    beginner: "Very good",
    maintenance: "Low"
  },
  {
    base: "Lace",
    best: "Best airflow and comfort",
    feel: "Light, breathable, flexible",
    chooseWhen: "You train, run warm, or prefer a breathable piece with natural movement.",
    realism: "Very good",
    breathability: "Excellent",
    durability: "Good",
    beginner: "Lower",
    maintenance: "High"
  },
  {
    base: "Hybrid",
    best: "Best balance for daily wear",
    feel: "Breathable centre with easier tape edges",
    chooseWhen: "You want comfort, durability, and easier home maintenance.",
    realism: "Very good",
    breathability: "Good",
    durability: "Very good",
    beginner: "Good",
    maintenance: "Medium"
  },
  {
    base: "Crown Patch",
    best: "Best for small thinning areas",
    feel: "Compact, lower commitment",
    chooseWhen: "Your front is strong and you only need crown coverage.",
    realism: "Situation-dependent",
    breathability: "Good",
    durability: "Good",
    beginner: "Very good",
    maintenance: "Low"
  }
];

export const comparePriorityCards = [
  {
    priority: "Realism" as Priority,
    title: "If realism matters most",
    body: "Start with thin skin for scalp illusion, then consider premium hybrid or soft lace-front options if you want more movement."
  },
  {
    priority: "Comfort" as Priority,
    title: "If comfort matters most",
    body: "Lace leads for airflow, with hybrid close behind for a more forgiving maintenance routine."
  },
  {
    priority: "Easy cleanup" as Priority,
    title: "If cleanup matters most",
    body: "Thin skin and hybrid perimeter designs are usually the least frustrating to maintain at home."
  },
  {
    priority: "Durability" as Priority,
    title: "If durability matters most",
    body: "Hybrid and reinforced lace options hold up better to steady daily wear when maintained properly."
  }
];

export const careGuideSections = [
  {
    title: "Inspect before altering",
    body: "Check colour, density, base size, front contour, and overall feel in daylight before any cutting, bonding, or tinting."
  },
  {
    title: "Choose the right attachment",
    body: "Thin skin is usually easier with tape or liquid adhesive. Lace demands more patient cleanup and lace-safe products."
  },
  {
    title: "Wash only as needed",
    body: "Over-washing dries the hair and shortens the usable life of the unit. Gentle routines last longer."
  },
  {
    title: "Protect the hair fibre",
    body: "Use light conditioning, keep heat controlled, and detangle from the ends upward instead of tugging through knots."
  },
  {
    title: "Store it properly",
    body: "Keep spare units dry, ventilated, and away from direct sunlight, damp bathrooms, or overheating."
  },
  {
    title: "Use a capable barber",
    body: "You do not need a salon package, but your cut-in should still be done by someone confident with hair systems."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What is a hair system?",
    answer: "A hair system is a non-surgical hair piece designed to cover thinning or bald areas while blending with your own hair."
  },
  {
    question: "How long does a hair piece last?",
    answer: "That depends on the base, how often you wear it, how it is cleaned, and how much heat or styling stress it sees. Thin skin usually has a shorter wear cycle than sturdier hybrid or lace options."
  },
  {
    question: "How do I choose the right colour?",
    answer: "Compare shades in daylight and stay conservative if you are between two colours. Grey blends are often safer than trying to force a solid block colour."
  },
  {
    question: "How do I choose density?",
    answer: "Most first-time buyers look more natural in 90% to 100% density than they do in very full systems. A too-dense first order is one of the most common mistakes."
  },
  {
    question: "Can I shower or swim in it?",
    answer: "Yes, but frequent water, sweat, chlorine, and heat all increase maintenance demands and shorten lifespan. Lace and hybrid buyers should plan accordingly."
  },
  {
    question: "Do I need a salon package?",
    answer: "No. The New Hair Co is product-first. You buy the hair piece and stay in control of fitting through your own barber or stylist."
  },
  {
    question: "Can I return a hair piece after alteration?",
    answer: "Usually not. Inspect before cutting, bleaching, colouring, bonding, or using adhesive. Once altered, return options become limited."
  },
  {
    question: "How is it delivered?",
    answer: "Orders are sent with discreet packaging and clear UK delivery expectations shown around checkout."
  },
  {
    question: "Is the packaging discreet?",
    answer: "Yes. Orders are packed plainly to keep the delivery private."
  }
];

export const shopSortOptions = [
  "Recommended",
  "Price low-high",
  "Price high-low",
  "Beginner-friendly",
  "Most realistic"
] as const;

export type ShopSort = (typeof shopSortOptions)[number];
