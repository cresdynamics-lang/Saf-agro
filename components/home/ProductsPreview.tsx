import Image from "next/image";
import Link from "next/link";
import { products, formatOrigins, formatPacking } from "@/lib/products";
import { Medal, Globe, Package, Scale } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductsPreview() {
  // First two are featured
  const featuredMaize = products[0];
  const featuredSoya = products[1];
  // Next three are standard cards
  const restProducts = products.slice(2, 5);

  return (
    <section className="bg-[#ECE9DD] py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-brand-black sm:text-5xl lg:text-6xl lowercase">
            our commodity <span className="text-[#326949]">portfolio</span>
          </h2>
          <p className="max-w-4xl text-base md:text-lg leading-relaxed text-[#1B3B2B] font-medium">
            We source and deliver a premium range of agricultural commodities directly from verified East African farms. Our rigorous grading processes ensure consistent quality and reliable supply volumes for all your international export needs.
          </p>
        </div>
        </ScrollReveal>

        {/* Featured Cards Container */}
        <div className="mb-20 flex flex-col gap-20">
          {/* Featured 1: Maize (Image Left) */}
          <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="group flex flex-col lg:flex-row overflow-hidden rounded-[15px] bg-white shadow-xl transition-all hover:shadow-2xl">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 min-h-[500px] overflow-hidden">
              <Image
                src={featuredMaize.image}
                alt={featuredMaize.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-6 left-6 bg-[#37F713] px-4 py-1.5 text-xs font-black tracking-widest text-black uppercase shadow-[0_0_15px_rgba(55,247,19,0.5)]">
                Featured
              </div>
            </div>
            
            {/* Content Side */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center p-12 lg:p-20">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                {featuredMaize.scientific}
              </p>
              <h3 className="mb-4 text-4xl font-black tracking-tight text-brand-black md:text-6xl">
                {featuredMaize.name}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-brand-black">
                {featuredMaize.notes} from verified East African farms. Available in {featuredMaize.grades.join(" and ")}. Supplied in {featuredMaize.packing.join(" or ")} packs.
              </p>
              
              <div className="mb-10 border-t border-gray-100 pt-8">
                <div className="grid grid-cols-[1fr_2fr] gap-y-5 text-base">
                  <div className="flex items-center gap-2 text-secondary">
                    <Medal size={18} color="#F59E0B" />
                    <span>Grades</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{featuredMaize.grades.join(" · ")}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Globe size={18} color="#3B82F6" />
                    <span>Origins</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{formatOrigins(featuredMaize.origins)}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Package size={18} color="#A855F7" />
                    <span>Packing</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{formatPacking(featuredMaize.packing)}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Scale size={18} color="#EF4444" />
                    <span>MOQ</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">25 MT</div>
                </div>
              </div>
              
              <div>
                <Link
                  href={`/products/${featuredMaize.slug}`}
                  className="group inline-flex items-center gap-3 rounded-[15px] bg-[#1B3B2B] px-12 py-6 text-lg font-bold tracking-widest text-white uppercase transition-all hover:bg-[#37F713] hover:text-black hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] w-max"
                >
                  ENQUIRE <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Featured 2: Soya Beans (Image Right - Alternating) */}
          <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="group flex flex-col lg:flex-row-reverse overflow-hidden rounded-[15px] bg-white shadow-xl transition-all hover:shadow-2xl">
            {/* Image Side */}
            <div className="relative w-full lg:w-1/2 min-h-[500px] overflow-hidden">
              <Image
                src={featuredSoya.image}
                alt={featuredSoya.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-6 left-6 bg-[#37F713] px-4 py-1.5 text-xs font-black tracking-widest text-black uppercase shadow-[0_0_15px_rgba(55,247,19,0.5)]">
                Featured
              </div>
            </div>
            
            {/* Content Side */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center p-12 lg:p-20">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                {featuredSoya.scientific}
              </p>
              <h3 className="mb-4 text-4xl font-black tracking-tight text-brand-black md:text-6xl">
                {featuredSoya.name}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-brand-black">
                {featuredSoya.notes} from verified East African farms. Available in {featuredSoya.grades.join(" and ")}. Supplied in {featuredSoya.packing.join(" or ")} packs.
              </p>
              
              <div className="mb-10 border-t border-gray-100 pt-8">
                <div className="grid grid-cols-[1fr_2fr] gap-y-5 text-base">
                  <div className="flex items-center gap-2 text-secondary">
                    <Medal size={18} color="#F59E0B" />
                    <span>Grades</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{featuredSoya.grades.join(" · ")}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Globe size={18} color="#3B82F6" />
                    <span>Origins</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{formatOrigins(featuredSoya.origins)}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Package size={18} color="#A855F7" />
                    <span>Packing</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">{formatPacking(featuredSoya.packing)}</div>
                  
                  <div className="flex items-center gap-2 text-secondary">
                    <Scale size={18} color="#EF4444" />
                    <span>MOQ</span>
                  </div>
                  <div className="flex items-center font-medium text-brand-black">25 MT</div>
                </div>
              </div>
              
              <div>
                <Link
                  href={`/products/${featuredSoya.slug}`}
                  className="group inline-flex items-center gap-3 rounded-[15px] bg-[#1B3B2B] px-12 py-6 text-lg font-bold tracking-widest text-white uppercase transition-all hover:bg-[#37F713] hover:text-black hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] w-max"
                >
                  ENQUIRE <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Standard Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {restProducts.map((product, index) => (
            <ScrollReveal key={product.slug} animation="fade-up" delay={0.2 + index * 0.15}>
            <div className="group flex flex-col overflow-hidden rounded-[15px] bg-white shadow-lg transition-all hover:shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-1 text-2xl font-black tracking-widest text-brand-black uppercase">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm italic text-secondary/80">
                  {product.scientific}
                </p>
                
                <hr className="mb-4 border-gray-100" />
                
                <p className="mb-6 text-sm font-medium leading-relaxed text-brand-black line-clamp-3">
                  {product.notes} from verified East African farms. Available in {product.grades.join(" and ")}. Supplied in {product.packing.join(" or ")} packs.
                </p>
                
                <div className="mt-auto pt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-primary group/btn flex w-full justify-center items-center gap-2 rounded-[15px] px-6 py-4 text-sm font-bold tracking-widest uppercase"
                  >
                    VIEW PRODUCT 
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <ScrollReveal animation="scale-up" delay={0.2}>
        <div className="mt-20 flex justify-center">
          <Link href="/products" className="group flex items-center gap-4 rounded-[15px] bg-[#1B3B2B] px-16 py-8 text-xl font-black tracking-widest text-white uppercase transition-all hover:scale-105 hover:bg-[#37F713] hover:text-black hover:shadow-[0_0_30px_rgba(55,247,19,0.5)]">
            VIEW ALL PRODUCTS
            <span className="text-3xl leading-none transition-transform group-hover:translate-x-2">&rarr;</span>
          </Link>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
