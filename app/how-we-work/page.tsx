import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ProcessSteps from "@/components/how-we-work/ProcessSteps";
import ProcessDifferent from "@/components/how-we-work/ProcessDifferent";
import HowWeWorkCta from "@/components/how-we-work/HowWeWorkCta";

export const metadata: Metadata = {
  title: "How We Work | SAF Agro Products (K) Ltd",
  description:
    "From enquiry to delivery — SAF Agro's 5-step process built on transparency, quality control, and reliability across Kenya, Tanzania, Mauritius, and the UK.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="How We Work"
          subtitle="From your first enquiry to final delivery — a process built on transparency, quality control, and reliability."
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          imageAlt="Warehouse and loading facility"
        />
        <ProcessSteps />
        <ProcessDifferent />
        <HowWeWorkCta />
      </main>
      <Footer />
    </>
  );
}
