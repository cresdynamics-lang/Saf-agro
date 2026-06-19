import Image from "next/image";
import Link from "next/link";
import { products, formatOrigins, formatPacking } from "@/lib/products";

export default function ProductsPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/products bg.png.jpg"
          alt="Gradient Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-brand-black sm:text-5xl lg:text-6xl uppercase">
            Our Commodity Portfolio
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-secondary font-medium">
            Six core products. Multiple grades. Consistent supply.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.slug}
              className="group flex flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-md transition-all hover:border-primary hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
              </div>
              <div className="flex flex-1 flex-col p-10 sm:p-12">
                <h3 className="mb-2 text-3xl font-black tracking-widest text-brand-black uppercase">
                  {product.name}
                </h3>
                <p className="mb-6 text-base italic text-secondary/80">
                  {product.scientific}
                </p>
                
                <hr className="mb-6 border-gray-100" />
                
                <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
                  {product.grades.join(" · ")}
                </p>
                <div className="mb-6 flex flex-col gap-2">
                  <p className="text-sm font-medium text-secondary">
                    <strong className="text-brand-black uppercase tracking-wider text-xs">Origins:</strong> {formatOrigins(product.origins)}
                  </p>
                  <p className="text-sm font-medium text-secondary">
                    <strong className="text-brand-black uppercase tracking-wider text-xs">Packing:</strong> {formatPacking(product.packing)}
                  </p>
                </div>

                <p className="mb-10 text-sm font-medium leading-relaxed text-[#37F713]">
                  {product.notes} from verified East African farms. Available in {product.grades.join(" and ")}. Supplied in {product.packing.join(" or ")} packs.
                </p>
                
                <div className="mt-auto pt-4">
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-primary group/btn inline-flex items-center gap-3 px-8 py-4 text-sm w-max"
                  >
                    VIEW PRODUCT 
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/products" className="btn-outline px-10 py-4 text-sm bg-white">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
