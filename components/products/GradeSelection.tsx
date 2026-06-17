import Link from "next/link";
import type { ProductDetail } from "@/lib/product-details";

type GradeSelectionProps = {
  slug: string;
  detail: ProductDetail;
};

export default function GradeSelection({ slug, detail }: GradeSelectionProps) {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-heading mb-12">Select Your Grade</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {detail.gradeDetails.map((grade) => (
            <article
              key={grade.slug}
              className="flex flex-col border border-light-grey bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="mb-6 border-b border-light-grey pb-6">
                <h3 className="text-xl font-bold tracking-widest text-brand-black uppercase">
                  {grade.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {grade.subtitle}
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {grade.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-secondary"
                  >
                    <span className="mt-0.5 shrink-0 text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-8 mt-auto">
                <p className="text-xs font-bold tracking-widest text-secondary uppercase">
                  Best for:
                </p>
                <p className="mt-1 text-sm text-brand-black">{grade.bestFor}</p>
              </div>

              <Link
                href={`/products/${slug}/${grade.slug}`}
                className="btn-outline-dark justify-center"
              >
                View {grade.name} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
