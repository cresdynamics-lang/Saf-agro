import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OurStory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="mb-8 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl lg:text-6xl">
              From East Africa <br className="hidden sm:block" /> to the <span className="text-[#326949]">World.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="space-y-8 text-lg leading-relaxed text-gray-600 lg:text-xl font-medium">
            <p>
              SAF Agro Products (K) Ltd was founded with one clear mission: to
              become the most trusted sourcing and supply partner for
              agricultural commodities across African and international markets.
            </p>
            <p>
              Operating from our Nairobi headquarters, we source directly from
              verified farms, grade our products to strict international
              standards, and deliver — whether to a buyer in Mombasa, a processor
              in Dar es Salaam, or an importer in Mauritius.
            </p>
            <p>
              Today, we operate across four countries and supply some of East
              Africa&apos;s most demanded commodities: maize, soya beans, green
              grams, pigeon peas, soya meal, and cow peas.
            </p>
            <p className="text-2xl md:text-3xl font-black tracking-tight text-[#111] mt-12 p-8 border-y-2 border-[#37F713]/30 bg-[#FAF9F6]">
              We are not a broker.<br className="hidden sm:block"/> We are a <span className="text-[#326949]">supply chain partner.</span>
            </p>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
