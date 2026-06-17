"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type Product,
  gradeToSlug,
  formatOrigins,
  formatPacking,
} from "@/lib/products";

type ProductCardProps = {
  product: Product;
  activeGrades: Set<string>;
};

export default function ProductCard({ product, activeGrades }: ProductCardProps) {
  const visibleGrades =
    activeGrades.size > 0
      ? product.grades.filter((g) => activeGrades.has(g))
      : product.grades;

  return (
    <article className="group flex flex-col overflow-hidden border border-light-grey bg-white transition-all hover:border-accent hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          <h3 className="text-lg font-bold tracking-widest text-brand-black uppercase">
            {product.name}
          </h3>
        </div>
        <p className="mt-1 text-sm italic text-secondary">{product.scientific}</p>

        <hr className="my-4 border-light-grey" />

        <dl className="space-y-2 text-xs text-secondary">
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 font-semibold text-brand-black">Grades:</dt>
            <dd>{product.grades.join(" | ")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 font-semibold text-brand-black">Origins:</dt>
            <dd>{formatOrigins(product.origins)}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 font-semibold text-brand-black">Packing:</dt>
            <dd>{formatPacking(product.packing)}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 shrink-0 font-semibold text-brand-black">Supply:</dt>
            <dd>{product.supply}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {visibleGrades.map((grade) => (
            <Link
              key={grade}
              href={`/products/${product.slug}/${gradeToSlug(grade)}`}
              className="btn-outline-dark px-4 py-2 text-xs"
            >
              {grade} →
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
