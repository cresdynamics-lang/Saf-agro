import Image from "next/image";
import Link from "next/link";
import type { GradeSpec } from "@/lib/grade-specs";

type GradeHeroProps = {
  productName: string;
  gradeName: string;
  slug: string;
  spec: GradeSpec;
};

export default function GradeHero({
  productName,
  gradeName,
  slug,
  spec,
}: GradeHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden lg:min-h-[60vh]">
      <Image
        src={spec.heroImage}
        alt={`${productName} ${gradeName} close-up`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:px-8 lg:pb-20">
        <Link
          href={`/products/${slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-white"
        >
          ← Back to {productName} Overview
        </Link>

        <h1 className="mb-3 text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl lg:text-5xl">
          {productName} — {gradeName}
        </h1>
        <p className="text-sm font-semibold tracking-widest text-white/80 uppercase sm:text-base">
          {spec.heroTagline}
        </p>
      </div>
    </section>
  );
}
