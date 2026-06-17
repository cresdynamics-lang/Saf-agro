import type { ProductDetail } from "@/lib/product-details";

type PackagingDeliveryProps = {
  detail: ProductDetail;
};

const deliveryIcons = ["✈", "🚛", "🏭"];

export default function PackagingDelivery({
  detail,
}: PackagingDeliveryProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="section-heading mb-8">Packaging Options</h2>
            <div className="grid grid-cols-2 gap-4">
              {detail.packaging.map((pack) => (
                <div
                  key={pack.size}
                  className="border-2 border-primary bg-white p-6 text-center"
                >
                  <p className="text-2xl font-bold tracking-wide text-primary">
                    {pack.size.replace("KG", "")}
                  </p>
                  <p className="text-xs font-bold tracking-widest text-brand-black uppercase">
                    KG PACK
                  </p>
                  <p className="mt-4 text-xs text-secondary">
                    {pack.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-heading mb-8">Delivery Options</h2>
            <ul className="mb-10 space-y-4">
              {detail.deliveryOptions.map((option, i) => (
                <li
                  key={option}
                  className="flex items-start gap-3 text-sm text-secondary"
                >
                  <span className="text-lg" aria-hidden>
                    {deliveryIcons[i] ?? "•"}
                  </span>
                  {option}
                </li>
              ))}
            </ul>

            <div className="border-t border-light-grey pt-6">
              <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
                Minimum Order Quantity
              </h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  Domestic: {detail.moq.domestic}
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  Export: {detail.moq.export}
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">→</span>
                  {detail.moq.container}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
