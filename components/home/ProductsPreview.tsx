import Image from "next/image";
import Link from "next/link";
import { products, formatOrigins, formatPacking } from "@/lib/products";

export default function ProductsPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="section-heading mb-4">Our Commodity Portfolio</h2>
          <p className="text-lg text-secondary">
            Six core products. Multiple grades. Consistent supply.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden border border-light-grey bg-white transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-widest text-brand-black uppercase">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm italic text-secondary">
                  {product.scientific}
                </p>
                <hr className="my-4 border-light-grey" />
                <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                  {product.grades.join(" · ")}
                </p>
                <p className="mt-2 text-xs text-secondary">
                  Origins: {formatOrigins(product.origins)}
                </p>
                <p className="text-xs text-secondary">
                  Packing: {formatPacking(product.packing)}
                </p>
                <span className="link-arrow mt-4 inline-flex">
                  View Product →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
