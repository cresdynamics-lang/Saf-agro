import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckmarkBadge01Icon, Location01Icon, Clock01Icon } from "hugeicons-react";

export default function ServiceGuarantee() {
  return (
    <section className="bg-[#FAF9F6] py-16 border-y border-gray-100">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="grid gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col items-center text-center px-6 py-4 md:py-0">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-[#37F713] shadow-md">
                <CheckmarkBadge01Icon size={28} variant="solid" />
              </div>
              <h3 className="mb-2 text-lg font-black uppercase tracking-widest text-[#111]">
                100% Quality Inspected
              </h3>
              <p className="text-sm font-medium text-gray-500">
                Every batch is strictly graded and tested before it leaves our facility.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-6 py-8 md:py-0">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-[#37F713] shadow-md">
                <Location01Icon size={28} variant="solid" />
              </div>
              <h3 className="mb-2 text-lg font-black uppercase tracking-widest text-[#111]">
                End-to-End Tracking
              </h3>
              <p className="text-sm font-medium text-gray-500">
                Full transparency from the farm gate all the way to your final destination.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-6 py-8 md:py-0">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-[#37F713] shadow-md">
                <Clock01Icon size={28} variant="solid" />
              </div>
              <h3 className="mb-2 text-lg font-black uppercase tracking-widest text-[#111]">
                On-Time Delivery
              </h3>
              <p className="text-sm font-medium text-gray-500">
                Optimized logistics networks to ensure your supply chain never stops.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
