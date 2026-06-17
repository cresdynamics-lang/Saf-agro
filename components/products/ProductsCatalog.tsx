"use client";

import { useMemo, useState } from "react";
import {
  products,
  categoryFilters,
  type CategoryFilter,
  type ProductGrade,
  type PackSize,
} from "@/lib/products";
import ProductCard from "./ProductCard";

type GradeFilter = ProductGrade | null;
type PackFilter = PackSize | null;

export default function ProductsCatalog() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [grade, setGrade] = useState<GradeFilter>(null);
  const [pack, setPack] = useState<PackFilter>(null);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (grade && !product.grades.includes(grade)) return false;
      if (pack && !product.packing.includes(pack)) return false;
      return true;
    });
  }, [category, grade, pack]);

  const activeGrades = useMemo(() => {
    const set = new Set<string>();
    if (grade) set.add(grade);
    return set;
  }, [grade]);

  const toggleGrade = (g: ProductGrade) => {
    setGrade((prev) => (prev === g ? null : g));
  };

  const togglePack = (p: PackSize) => {
    setPack((prev) => (prev === p ? null : p));
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCategory(f.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                  category === f.id
                    ? "bg-primary text-white"
                    : "border border-light-grey bg-white text-brand-black hover:border-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {(["Grade 1", "Grade 2"] as ProductGrade[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => toggleGrade(g)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                  grade === g
                    ? "bg-accent text-white"
                    : "border border-light-grey bg-white text-brand-black hover:border-accent"
                }`}
              >
                {g}
              </button>
            ))}
            {(["50KG", "90KG"] as PackSize[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => togglePack(p)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${
                  pack === p
                    ? "bg-accent text-white"
                    : "border border-light-grey bg-white text-brand-black hover:border-accent"
                }`}
              >
                {p} Pack
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-secondary">
            No products match your selected filters. Try adjusting your selection.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                activeGrades={activeGrades}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
