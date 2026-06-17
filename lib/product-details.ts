import { products, type Product } from "./products";

export type GradeSlug = "grade-1" | "grade-2";

export type GradeDetail = {
  slug: GradeSlug;
  name: "Grade 1" | "Grade 2";
  subtitle: string;
  features: string[];
  bestFor: string;
};

export type OriginRegion = {
  flag: string;
  country: string;
  regions: string;
};

export type ProductDetail = {
  slug: string;
  heroImage: string;
  overviewImage: string;
  description: string;
  overview: {
    commonName: string;
    category: string;
    primaryUse: string;
    supplyStatus: string;
    season: string;
    leadTime: string;
  };
  originRegions: OriginRegion[];
  gradeDetails: GradeDetail[];
  packaging: {
    size: "50KG" | "90KG";
    label: string;
    description: string;
  }[];
  deliveryOptions: string[];
  moq: {
    domestic: string;
    export: string;
    container: string;
  };
};

export const productDetails: Record<string, ProductDetail> = {
  maize: {
    slug: "maize",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1551754650-d80d9d13f0b4?w=1200&q=80",
    description:
      "Sourced from verified farms across Kenya and Tanzania. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Maize / Corn",
      category: "Cereal Grain",
      primaryUse: "Human consumption, animal feed, industrial",
      supplyStatus: "Available",
      season: "Year-round (primary harvest: Apr–Jun, Oct–Dec)",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Rift Valley, Western Kenya, Nyanza" },
      { flag: "🇹🇿", country: "Tanzania", regions: "Iringa, Mbeya, Dodoma regions" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Machine cleaned",
          "Moisture ≤13.5%",
          "Foreign matter max 0.5%",
          "Aflatoxin: <10ppb",
          "Uniform colour",
        ],
        bestFor: "Export, Food Mfg, Premium Retail",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Farm cleaned",
          "Moisture ≤14.5%",
          "Foreign matter max 1.5%",
          "Aflatoxin: <20ppb",
          "Good colour",
        ],
        bestFor: "Local processing, Animal Feed, Flour",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },

  "soya-beans": {
    slug: "soya-beans",
    heroImage:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    description:
      "High-protein soya beans from verified East African farms. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Soya Beans / Soybeans",
      category: "Oilseed Legume",
      primaryUse: "Human consumption, oil crushing, animal feed",
      supplyStatus: "Available",
      season: "Year-round (primary harvest: Mar–May, Sep–Nov)",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Rift Valley, Western Kenya" },
      { flag: "🇹🇿", country: "Tanzania", regions: "Morogoro, Iringa, Mbeya" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Machine cleaned & sorted",
          "Protein content ≥38%",
          "Moisture ≤12%",
          "Foreign matter max 0.5%",
          "Uniform size & colour",
        ],
        bestFor: "Export, Oil Crushing, Premium Feed",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Farm cleaned",
          "Protein content ≥35%",
          "Moisture ≤13%",
          "Foreign matter max 1.5%",
          "Good colour",
        ],
        bestFor: "Local processing, Animal Feed, Industrial",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },

  "green-grams": {
    slug: "green-grams",
    heroImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&q=80",
    description:
      "Premium export-quality green grams from Kenya and Tanzania. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Green Grams / Mung Beans",
      category: "Pulse Legume",
      primaryUse: "Human consumption, dal production, export",
      supplyStatus: "Available",
      season: "Year-round (primary harvest: Feb–Apr, Aug–Oct)",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Eastern, Coast, Rift Valley" },
      { flag: "🇹🇿", country: "Tanzania", regions: "Morogoro, Dodoma, Shinyanga" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Machine cleaned",
          "Moisture ≤12%",
          "Foreign matter max 0.5%",
          "Uniform green colour",
          "Whole, unbroken grains",
        ],
        bestFor: "Export, Premium Retail, Food Manufacturing",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Farm cleaned",
          "Moisture ≤13%",
          "Foreign matter max 1.5%",
          "Good colour",
          "Minor size variation accepted",
        ],
        bestFor: "Local trade, Dal Milling, Domestic Supply",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },

  "pigeon-peas": {
    slug: "pigeon-peas",
    heroImage:
      "https://images.unsplash.com/photo-1515547692169-1967b17049b0?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1515547692169-1967b17049b0?w=1200&q=80",
    description:
      "Pigeon peas in multiple colour grades from verified farms. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Pigeon Peas / Toor Dal",
      category: "Pulse Legume",
      primaryUse: "Human consumption, dal production, animal feed",
      supplyStatus: "Available",
      season: "Year-round (primary harvest: Jan–Mar, Jul–Sep)",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Eastern, Coast, Lower Eastern" },
      { flag: "🇹🇿", country: "Tanzania", regions: "Dodoma, Singida, Tabora" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Machine cleaned",
          "Moisture ≤12%",
          "Foreign matter max 0.5%",
          "Uniform colour grade",
          "Whole, undamaged peas",
        ],
        bestFor: "Export, Dal Milling, Premium Retail",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Farm cleaned",
          "Moisture ≤13%",
          "Foreign matter max 1.5%",
          "Multiple colour grades",
          "Good overall quality",
        ],
        bestFor: "Local processing, Animal Feed, Domestic Trade",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },

  "soya-meal": {
    slug: "soya-meal",
    heroImage:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80",
    description:
      "Protein-rich soya meal processed in Kenya. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Soya Meal",
      category: "Processed Feed Ingredient",
      primaryUse: "Animal feed, poultry, livestock nutrition",
      supplyStatus: "Available",
      season: "Year-round",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Nairobi processing hub, Rift Valley supply" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Protein content ≥44%",
          "Moisture ≤12%",
          "Fine, uniform texture",
          "Low fibre content",
          "Lab-tested batch certificates",
        ],
        bestFor: "Poultry Feed, Aquaculture, Premium Livestock",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Protein content ≥40%",
          "Moisture ≤13%",
          "Good texture",
          "Standard fibre levels",
          "Quality documentation provided",
        ],
        bestFor: "General Livestock Feed, Local Feed Mills",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },

  "cow-peas": {
    slug: "cow-peas",
    heroImage:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&q=80",
    description:
      "Cow peas for human consumption and feed from Kenya and Tanzania. Available in Grade 1 and Grade 2. Supplied in 50KG or 90KG packs.",
    overview: {
      commonName: "Cow Peas / Black-eyed Peas",
      category: "Pulse Legume",
      primaryUse: "Human consumption, animal feed, food processing",
      supplyStatus: "Available",
      season: "Year-round (primary harvest: Mar–May, Sep–Nov)",
      leadTime: "7–14 days from order confirmation",
    },
    originRegions: [
      { flag: "🇰🇪", country: "Kenya", regions: "Eastern, Coast, Western" },
      { flag: "🇹🇿", country: "Tanzania", regions: "Mwanza, Shinyanga, Tabora" },
    ],
    gradeDetails: [
      {
        slug: "grade-1",
        name: "Grade 1",
        subtitle: "Premium Quality",
        features: [
          "Machine cleaned",
          "Moisture ≤12%",
          "Foreign matter max 0.5%",
          "Uniform cream colour with eye",
          "Whole, unbroken peas",
        ],
        bestFor: "Export, Human Consumption, Premium Retail",
      },
      {
        slug: "grade-2",
        name: "Grade 2",
        subtitle: "Standard Quality",
        features: [
          "Farm cleaned",
          "Moisture ≤13%",
          "Foreign matter max 1.5%",
          "Good colour",
          "Suitable for feed & processing",
        ],
        bestFor: "Animal Feed, Local Trade, Food Processing",
      },
    ],
    packaging: [
      { size: "50KG", label: "50 KG PACK", description: "Standard handling" },
      { size: "90KG", label: "90 KG PACK", description: "Bulk buyers" },
    ],
    deliveryOptions: [
      "Export (International freight)",
      "Delivery to your premises",
      "Warehouse pickup — Nairobi",
    ],
    moq: {
      domestic: "1 Metric Tonne",
      export: "20 Metric Tonnes",
      container: "Enquire for full container loads",
    },
  },
};

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function contactUrl(productName: string, grade?: string): string {
  const params = new URLSearchParams({ product: productName });
  if (grade) params.set("grade", grade);
  return `/contact?${params.toString()}`;
}
