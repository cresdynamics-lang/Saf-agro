import ContactInfo from "./ContactInfo";
import ContactEnquiryForm from "./ContactEnquiryForm";

type ContactSectionProps = {
  defaultProduct?: string;
  defaultGrade?: string;
};

export default function ContactSection({
  defaultProduct,
  defaultGrade,
}: ContactSectionProps) {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />
          <ContactEnquiryForm
            defaultProduct={defaultProduct}
            defaultGrade={defaultGrade}
          />
        </div>
      </div>
    </section>
  );
}
