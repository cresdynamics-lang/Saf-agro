import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactInfo from "./ContactInfo";
import ContactEnquiryForm from "./ContactEnquiryForm";
import { Location01Icon } from "hugeicons-react";

type ContactSectionProps = {
  defaultProduct?: string;
  defaultGrade?: string;
};

export default function ContactSection({
  defaultProduct,
  defaultGrade,
}: ContactSectionProps) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <ScrollReveal animation="fade-right">
              <ContactInfo />
            </ScrollReveal>
            
            {/* Google Maps Placeholder Section - Now occupies the Quick Quote space */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="rounded-[32px] border border-gray-100 bg-[#FAF9F6] p-8 shadow-sm h-full flex flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713] shadow-md shrink-0">
                    <Location01Icon size={24} variant="solid" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">
                      Our Location
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      Nairobi Trading Floor & Logistics Hub
                    </p>
                  </div>
                </div>

                <div className="relative w-full flex-1 min-h-[300px] overflow-hidden rounded-[24px] bg-gray-200 shadow-inner">
                  {/* API Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-6">
                    <Location01Icon size={48} className="text-gray-400 mb-4" />
                    <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                      Google Maps Integration Pending
                    </p>
                    <p className="mt-2 text-xs text-gray-400 max-w-xs">
                      Map API key will be injected here.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-12">
            <ScrollReveal animation="fade-left" delay={0.2}>
              <ContactEnquiryForm
                defaultProduct={defaultProduct}
                defaultGrade={defaultGrade}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
