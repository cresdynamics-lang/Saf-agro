import Image from "next/image";
import type { Product } from "@/lib/products";
import type { ProductDetail } from "@/lib/product-details";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OrganicFoodIcon, DeliveryTruck02Icon, Location01Icon, Package01Icon } from "hugeicons-react";

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
    <section className="bg-white py-24 lg:py-32 border-b border-gray-100">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border-4 border-gray-100 shadow-2xl">
              <Image
                src={detail.overviewImage}
                alt={`${product.name} product`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={0.2}>
            <div className="flex flex-col">
              <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
                Product <span className="text-[#326949]">Overview</span>
              </h2>
              <div className="h-1 w-20 bg-[#37F713] mb-12 rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)]"></div>

              <div className="grid gap-12 sm:grid-cols-2">
                {/* Specifications */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713] shadow-md">
                      <OrganicFoodIcon size={24} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#111]">
                      Specifications
                    </h3>
                  </div>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Common Name</dt>
                      <dd className="font-bold text-[#111]">{overview.commonName}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Scientific</dt>
                      <dd className="font-bold text-[#111]">{product.scientific}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Category</dt>
                      <dd className="font-bold text-[#111]">{overview.category}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Primary Use</dt>
                      <dd className="font-bold text-[#111]">{overview.primaryUse}</dd>
                    </div>
                  </dl>
                </div>

                {/* Availability */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713] shadow-md">
                      <DeliveryTruck02Icon size={24} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#111]">
                      Availability
                    </h3>
                  </div>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Supply Status</dt>
                      <dd className="font-bold text-[#326949] flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#37F713] shadow-[0_0_8px_rgba(55,247,19,0.8)]"></span>
                        {overview.supplyStatus}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Season</dt>
                      <dd className="font-bold text-[#111]">{overview.season}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-400 uppercase tracking-wider text-xs mb-1">Lead Time</dt>
                      <dd className="font-bold text-[#111]">{overview.leadTime}</dd>
                    </div>
                  </dl>
                </div>

                {/* Origins */}
                <div className="sm:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713] shadow-md">
                      <Location01Icon size={24} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#111]">
                      Origins & Sourcing
                    </h3>
                  </div>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {originRegions.map((origin) => (
                      <li key={origin.country} className="rounded-xl border border-gray-100 bg-[#FAF9F6] p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl" aria-hidden>{origin.flag}</span>
                          <span className="font-black text-[#111] uppercase tracking-wide">{origin.country}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{origin.regions}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
