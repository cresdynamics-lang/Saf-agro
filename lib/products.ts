export type ProductCategory = "cereals" | "legumes" | "meal-processed";

export type ProductGrade = "Grade 1" | "Grade 2";
export type PackSize = "50KG" | "90KG";

export type Product = {
  name: string;
  slug: string;
  scientific: string;
  category: ProductCategory;
  origins: string[];
  packing: PackSize[];
  grades: ProductGrade[];
  supply: string;
  notes: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Maize",
    slug: "maize",
    scientific: "Zea mays L.",
    category: "cereals",
    origins: ["Kenya", "Tanzania"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "Machine cleaned available",
    image:
      "https://images.unsplash.com/photo-1551754650-d80d9d13f0b4?w=800&q=80",
  },
  {
    name: "Soya Beans",
    slug: "soya-beans",
    scientific: "Glycine max",
    category: "legumes",
    origins: ["Kenya", "Tanzania"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "High protein grades",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
  },
  {
    name: "Green Grams",
    slug: "green-grams",
    scientific: "Vigna radiata",
    category: "legumes",
    origins: ["Kenya", "Tanzania"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "Premium export quality",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
  },
  {
    name: "Pigeon Peas",
    slug: "pigeon-peas",
    scientific: "Cajanus cajan",
    category: "legumes",
    origins: ["Kenya", "Tanzania"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "Multiple colour grades",
    image:
      "https://images.unsplash.com/photo-1515547692169-1967b17049b0?w=800&q=80",
  },
  {
    name: "Soya Meal",
    slug: "soya-meal",
    scientific: "Processed soya",
    category: "meal-processed",
    origins: ["Kenya"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "Protein-rich feed grade",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  },
  {
    name: "Cow Peas",
    slug: "cow-peas",
    scientific: "Vigna unguiculata",
    category: "legumes",
    origins: ["Kenya", "Tanzania"],
    packing: ["50KG", "90KG"],
    grades: ["Grade 1", "Grade 2"],
    supply: "Year-round",
    notes: "Human & feed grade",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80",
  },
];

export type CategoryFilter = "all" | ProductCategory;

export const categoryFilters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "cereals", label: "Cereals" },
  { id: "legumes", label: "Legumes" },
  { id: "meal-processed", label: "Meal/Processed" },
];

export function gradeToSlug(grade: ProductGrade): string {
  return grade === "Grade 1" ? "grade-1" : "grade-2";
}

export function formatOrigins(origins: string[]): string {
  return origins.join(" · ");
}

export function formatPacking(packing: PackSize[]): string {
  return packing.join(" · ");
}
