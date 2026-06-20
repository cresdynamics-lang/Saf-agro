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
import { ListViewIcon, GridViewIcon } from "hugeicons-react";

type GradeFilter = ProductGrade | null;
type PackFilter = PackSize | null;
type ViewMode = "list" | "grid";

export default function ProductsCatalog() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [grade, setGrade] = useState<GradeFilter>(null);
  const [pack, setPack] = useState<PackFilter>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("list");

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

  const toggleGrade = (g: GradeFilter) => {
    setGrade(g);
  };

  const togglePack = (p: PackSize) => {
    setPack((prev) => (prev === p ? null : p));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        {/* Sleek Toggles Header */}
        <div className="mb-14 rounded-[24px] bg-white p-8 shadow-sm border border-gray-100 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-black uppercase tracking-widest text-gray-400">Category</span>
            <div className="flex flex-wrap gap-3">
              {categoryFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setCategory(f.id)}
                  className={`rounded-full px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    category === f.id
                      ? "bg-[#111] text-[#37F713] shadow-[0_4px_15px_rgba(55,247,19,0.3)]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block h-12 w-px bg-gray-200"></div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-black uppercase tracking-widest text-gray-400">Filters & View</span>
            <div className="flex flex-wrap items-center gap-3">
              {/* Grades */}
              <button
                type="button"
                onClick={() => toggleGrade(null)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  grade === null
                    ? "bg-[#326949] text-white shadow-[0_4px_12px_rgba(50,105,73,0.3)]"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                All Grades
              </button>
              {(["Grade 1", "Grade 2"] as ProductGrade[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => toggleGrade(g)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    grade === g
                      ? "bg-[#326949] text-white shadow-[0_4px_12px_rgba(50,105,73,0.3)]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {g}
                </button>
              ))}

              <div className="mx-2 hidden sm:block h-8 w-px bg-gray-200"></div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-white text-[#111] shadow-sm"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                  aria-label="List View"
                >
                  <ListViewIcon size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-white text-[#111] shadow-sm"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                  aria-label="Grid View"
                >
                  <GridViewIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-[24px] bg-white p-16 text-center shadow-sm border border-gray-100">
            <p className="text-lg font-bold text-gray-500">
              No products match your selected filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                activeGrades={activeGrades}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
