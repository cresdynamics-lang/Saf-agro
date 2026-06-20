import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import WhatSetsUsApart from "@/components/about/WhatSetsUsApart";
import NairobiOperation from "@/components/about/NairobiOperation";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us | SAF Agro Products (K) Ltd",
  description:
    "Learn about SAF Agro Products — an international agro-commodity company built on relationships, reliability, and deep market knowledge across Kenya, Tanzania, Mauritius, and the UK.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About SAF Agro Products"
          subtitle="An international agro-commodity company built on relationships, reliability, and deep market knowledge."
          tagline="Kenya · Tanzania · Mauritius · United Kingdom"
          image="https://images.unsplash.com/photo-1560493676-04071c5f467f?w=1920&q=80"
          imageAlt="Agricultural warehouse and grain facility"
        />
        <OurStory />
        <MissionVisionValues />
        <WhatSetsUsApart />
        <NairobiOperation />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}


 