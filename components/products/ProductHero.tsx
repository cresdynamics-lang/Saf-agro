import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";
import { contactUrl } from "@/lib/product-details";

type ProductHeroProps = {
  product: Product;
  detail: ProductDetail;
};

export default function ProductHero({ product, detail }: ProductHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <Image
        src={detail.heroImage}
        alt={product.name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:px-8 lg:pb-20">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-white"
        >
          ← Back to Products
        </Link>

        <h1 className="mb-2 text-4xl font-bold tracking-wide text-white uppercase sm:text-5xl lg:text-6xl">
          {product.name}
        </h1>
        <p className="mb-6 text-lg italic text-white/80">{product.scientific}</p>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
          {detail.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={contactUrl(product.name, "Grade 1")}
            className="btn-primary"
          >
            Request Grade 1
          </Link>
          <Link
            href={contactUrl(product.name, "Grade 2")}
            className="btn-outline"
          >
            Request Grade 2
          </Link>
        </div>
      </div>
    </section>
  );
}
