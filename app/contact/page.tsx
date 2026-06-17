import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | SAF Agro Products (K) Ltd",
  description:
    "Get in touch with SAF Agro Products — place your first order or scale an existing supply relationship. We respond within 24 hours.",
};

type Props = {
  searchParams: Promise<{ product?: string; grade?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { product, grade } = await searchParams;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Get in Touch"
          subtitle="Whether you're placing a first order or scaling an existing supply relationship — we respond within 24 hours."
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          imageAlt="Contact SAF Agro Products"
        />
        <ContactSection defaultProduct={product} defaultGrade={grade} />
      </main>
      <Footer />
    </>
  );
}
