import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhatWeDo from "@/components/home/WhatWeDo";
import ProductsPreview from "@/components/home/ProductsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Markets from "@/components/home/Markets";
import Partners from "@/components/home/Partners";
import WhySafAgro from "@/components/home/WhySafAgro";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhatWeDo />
        <ProductsPreview />
        <HowItWorks />
        <Markets />
        <Partners />
        <WhySafAgro />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
