"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type Product,
  gradeToSlug,
  formatOrigins,
  formatPacking,
} from "@/lib/products";
import { Award01Icon, Location01Icon, OrganicFoodIcon, DeliveryTruck02Icon, ArrowRight01Icon } from "hugeicons-react";

type ProductCardProps = {
  product: Product;
  activeGrades: Set<string>;
  viewMode?: "list" | "grid";
};

export default function ProductCard({ product, activeGrades, viewMode = "list" }: ProductCardProps) {
  const visibleGrades =
    activeGrades.size > 0
      ? product.grades.filter((g) => activeGrades.has(g))
      : product.grades;

  const isGrid = viewMode === "grid";

  return (
    <article className={`group relative flex overflow-hidden rounded-[24px] border border-gray-100 bg-white transition-all duration-300 hover:border-[#37F713]/50 hover:shadow-2xl ${isGrid ? "flex-col" : "flex-col sm:flex-row"}`}>
      {/* Image Section */}
      <div className={`relative shrink-0 overflow-hidden ${isGrid ? "h-64 w-full" : "h-64 sm:h-auto sm:w-2/5"}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={isGrid ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-[#326949]/10 mix-blend-multiply opacity-0 transition-opacity group-hover:opacity-100"></div>
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#111] backdrop-blur-md shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Content Section */}
      <div className={`flex flex-1 flex-col ${isGrid ? "p-6" : "p-8 sm:p-10"}`}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#111] uppercase">
              {product.name}
            </h3>
            <p className="mt-1 text-sm font-medium italic text-gray-500">{product.scientific}</p>
          </div>
        </div>

        <hr className="my-6 border-gray-100" />

        <div className={`grid gap-5 mb-8 ${isGrid ? "grid-cols-1" : "sm:grid-cols-2"}`}>
          <div className="flex items-start gap-3">
            <Award01Icon className="h-5 w-5 shrink-0 text-[#326949]" variant="solid" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Grades</dt>
              <dd className="text-sm font-bold text-[#111]">{product.grades.join(" | ")}</dd>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Location01Icon className="h-5 w-5 shrink-0 text-[#326949]" variant="solid" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Origins</dt>
              <dd className="text-sm font-bold text-[#111]">{formatOrigins(product.origins)}</dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <OrganicFoodIcon className="h-5 w-5 shrink-0 text-[#326949]" variant="solid" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Packing</dt>
              <dd className="text-sm font-bold text-[#111]">{formatPacking(product.packing)}</dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DeliveryTruck02Icon className="h-5 w-5 shrink-0 text-[#326949]" variant="solid" />
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Supply</dt>
              <dd className="text-sm font-bold text-[#111]">{product.supply}</dd>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {visibleGrades.map((grade) => (
            <Link
              key={grade}
              href={`/products/${product.slug}/${gradeToSlug(grade)}`}
              className={`flex items-center justify-center gap-2 rounded-[12px] border-2 border-[#111] bg-white px-5 py-2.5 text-xs font-black uppercase tracking-widest text-[#111] transition-all duration-300 hover:bg-[#111] hover:text-[#37F713] hover:shadow-[0_4px_15px_rgba(55,247,19,0.3)] ${isGrid ? "w-full" : ""}`}
            >
              View {grade} <ArrowRight01Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
