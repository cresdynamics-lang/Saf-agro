import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ProductsCatalog from "@/components/products/ProductsCatalog";

export const metadata: Metadata = {
  title: "Our Commodity Portfolio | SAF Agro Products (K) Ltd",
  description:
    "Six core agro-commodities — maize, soya beans, green grams, pigeon peas, soya meal, and cow peas. Sourced, graded, and supplied in Grade 1 and Grade 2.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Our Commodity Portfolio"
          subtitle="Six core products. Sourced, graded, and supplied to your exact specification. Available in Grade 1 and Grade 2 across all origins."
          image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80"
          imageAlt="Grain and commodity flat lay"
        />
        <ProductsCatalog />
      </main>
      <Footer />
    </>
  );
}
