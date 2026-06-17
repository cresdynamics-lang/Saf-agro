import Image from "next/image";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";

type ProductOverviewProps = {
  product: Product;
  detail: ProductDetail;
};

export default function ProductOverview({
  product,
  detail,
}: ProductOverviewProps) {
  const { overview, originRegions } = detail;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={detail.overviewImage}
              alt={`${product.name} product`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="section-heading mb-8">Product Overview</h2>

            <div className="mb-10">
              <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
                Specifications
              </h3>
              <dl className="space-y-3 border-t border-light-grey pt-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Common Name:
                  </dt>
                  <dd className="text-secondary">{overview.commonName}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Scientific:
                  </dt>
                  <dd className="text-secondary">{product.scientific}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Category:
                  </dt>
                  <dd className="text-secondary">{overview.category}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Primary Use:
                  </dt>
                  <dd className="text-secondary">{overview.primaryUse}</dd>
                </div>
              </dl>
            </div>

            <div className="mb-10">
              <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
                Availability
              </h3>
              <dl className="space-y-3 border-t border-light-grey pt-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Supply Status:
                  </dt>
                  <dd className="text-secondary">
                    <span className="text-accent">✅</span> {overview.supplyStatus}
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Season:
                  </dt>
                  <dd className="text-secondary">{overview.season}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-32 shrink-0 font-semibold text-brand-black">
                    Lead Time:
                  </dt>
                  <dd className="text-secondary">{overview.leadTime}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
                Origins
              </h3>
              <ul className="space-y-4 border-t border-light-grey pt-4">
                {originRegions.map((origin) => (
                  <li key={origin.country} className="text-sm">
                    <span className="mr-2" aria-hidden>
                      {origin.flag}
                    </span>
                    <span className="font-semibold text-brand-black">
                      {origin.country}
                    </span>
                    <span className="text-secondary"> — {origin.regions}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
