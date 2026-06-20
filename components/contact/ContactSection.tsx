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
    <>
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-12">
              <ScrollReveal animation="fade-right">
                <ContactInfo />
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

      {/* Google Maps Placeholder Section */}
      <section className="w-full h-[50vh] min-h-[450px] relative bg-gray-200">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-6">
          <Location01Icon size={48} className="text-gray-400 mb-4" />
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">
            Google Maps Integration Pending
          </p>
          <p className="mt-2 text-base font-medium text-gray-400">
            Nairobi Trading Floor & Logistics Hub
          </p>
          <p className="mt-1 text-xs text-gray-400 max-w-xs">
            Map API key will be injected here.
          </p>
        </div>
      </section>
    </>
  );
}
