import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductOverview from "@/components/products/ProductOverview";
import GradeSelection from "@/components/products/GradeSelection";
import PackagingDelivery from "@/components/products/PackagingDelivery";
import ProductCta from "@/components/products/ProductCta";
import {
  getProduct,
  getProductDetail,
  getAllProductSlugs,
} from "@/lib/product-details";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | SAF Agro Products (K) Ltd`,
    description: `Source ${product.name} (${product.scientific}) in Grade 1 and Grade 2 from SAF Agro Products. Sourced from verified farms across East Africa.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  const detail = getProductDetail(slug);

  if (!product || !detail) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProductHero product={product} detail={detail} />
        <ProductOverview product={product} detail={detail} />
        <GradeSelection slug={slug} detail={detail} />
        <PackagingDelivery detail={detail} />
        <ProductCta productName={product.name} />
      </main>
      <Footer />
    </>
  );
}
