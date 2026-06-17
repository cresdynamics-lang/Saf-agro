import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradeHero from "@/components/products/GradeHero";
import SpecTable from "@/components/products/SpecTable";
import WhyGrade from "@/components/products/WhyGrade";
import DocumentsAvailable from "@/components/products/DocumentsAvailable";
import OrderForm from "@/components/products/OrderForm";
import {
  getProduct,
  getProductDetail,
  getAllProductSlugs,
  type GradeSlug,
} from "@/lib/product-details";
import { getGradeSpec } from "@/lib/grade-specs";

type Props = {
  params: Promise<{ slug: string; grade: string }>;
};

const validGrades: GradeSlug[] = ["grade-1", "grade-2"];

export async function generateStaticParams() {
  return getAllProductSlugs().flatMap((slug) =>
    validGrades.map((grade) => ({ slug, grade })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, grade } = await params;
  const product = getProduct(slug);
  const spec = getGradeSpec(slug, grade as GradeSlug);

  if (!product || !spec) return { title: "Product Not Found" };

  return {
    title: `${product.name} ${spec.identification.gradeLabel} | SAF Agro Products (K) Ltd`,
    description: `${product.name} ${spec.identification.gradeLabel} specification sheet. ${spec.heroTagline}.`,
  };
}

export default async function ProductGradePage({ params }: Props) {
  const { slug, grade } = await params;

  if (!validGrades.includes(grade as GradeSlug)) notFound();

  const product = getProduct(slug);
  const detail = getProductDetail(slug);
  const gradeDetail = detail?.gradeDetails.find((g) => g.slug === grade);
  const spec = getGradeSpec(slug, grade as GradeSlug);

  if (!product || !gradeDetail || !spec) notFound();

  return (
    <>
      <Navbar />
      <main>
        <GradeHero
          productName={product.name}
          gradeName={gradeDetail.name}
          slug={slug}
          spec={spec}
        />
        <SpecTable spec={spec} />
        <WhyGrade spec={spec} />
        <DocumentsAvailable documents={spec.documents} />
        <OrderForm productName={product.name} gradeName={gradeDetail.name} />
      </main>
      <Footer />
    </>
  );
}
