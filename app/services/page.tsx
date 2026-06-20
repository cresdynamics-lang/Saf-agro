import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ServiceBlocks from "@/components/services/ServiceBlocks";
import ServiceGuarantee from "@/components/services/ServiceGuarantee";
import ServicesCta from "@/components/services/ServicesCta";

export const metadata: Metadata = {
  title: "Services | SAF Agro Products (K) Ltd",
  description:
    "Beyond supply — SAF Agro offers sourcing, logistics, storage, and full export services across Kenya, Tanzania, Mauritius, and the United Kingdom.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="What We Offer"
          subtitle="Beyond supply — a full-chain commodity partner."
          image="https://images.unsplash.com/photo-1601584111127-3725323f76b1?w=1920&q=80"
          imageAlt="Commodity logistics and supply chain"
        />
        <ServiceBlocks />
        <ServiceGuarantee />
        <ServicesCta />
      </main>
      <Footer />
    </>
  );
}
