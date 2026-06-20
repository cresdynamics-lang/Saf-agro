"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const markets = [
  { code: "ke", name: "Kenya" },
  { code: "tz", name: "Tanzania" },
  { code: "mu", name: "Mauritius" },
  { code: "gb", name: "United Kingdom" },
];

const heroImages = [
  "/hero-image-home.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black pb-12 pt-32">
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Global agro-commodity logistics and supply chain"
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center px-6 lg:px-8">
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="md:pl-8 lg:pl-16">
          <div className="mb-8 flex animate-pulse flex-wrap items-center gap-3 text-sm font-bold lowercase tracking-[0.2em] text-white/80">
            <span className="text-[#37F713] text-lg leading-none">&bull;</span>
            <span>sourcing</span>
            <span className="text-[#37F713] opacity-60">-</span>
            <span>supply</span>
            <span className="text-[#37F713] opacity-60">-</span>
            <span>logistics</span>
            <span className="text-[#37F713] opacity-60">-</span>
            <span>exports</span>
          </div>

          <motion.h1 
            className="mb-8 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-[5rem]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { delay: 0.3, staggerChildren: 0.1 },
              },
            }}
          >
            <span className="inline-block">
              {"Connecting global".split(" ").map((word, idx) => (
                <motion.span key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block mr-3 lg:mr-4">{word}</motion.span>
              ))}
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block">
              {"markets to Africa's finest".split(" ").map((word, idx) => (
                <motion.span key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block mr-3 lg:mr-4">{word}</motion.span>
              ))}
            </span>
            <br className="hidden sm:block" />
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block text-[#326949]">
              grains!
            </motion.span>
          </motion.h1>

          <p className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-white/90">
            <strong className="font-black text-[#37F713] drop-shadow-[0_0_10px_rgba(55,247,19,0.4)]">SAF Agro</strong> <strong className="font-semibold text-white">Products</strong> is an international agro-commodity sourcing and
            supply company — operating across Kenya, Tanzania, Mauritius, and the
            United Kingdom.
            <br />
            <br />
            <strong className="font-bold text-white">
              We source, <span className="text-[#326949]">grade</span>, <span className="text-[#326949]">pack</span>, and <span className="text-[#326949]">deliver</span> at scale.
            </strong>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary group">
              REQUEST A QUOTE 
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link href="/products" className="btn-outline">
              VIEW OUR PRODUCTS
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 mt-16">
        <ScrollReveal animation="fade-up" delay={0.4}>
          <p className="mb-6 text-sm font-bold lowercase tracking-[0.2em] text-white/90 drop-shadow-md md:pl-8 lg:pl-16">
            we are operational in .....
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {markets.map((m, i) => (
            <ScrollReveal key={m.name} animation="fade-up" delay={0.5 + i * 0.1}>
            <div
              className="flex flex-col items-center justify-center gap-3 rounded-xl bg-black/60 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)] backdrop-blur-md border border-white/10 transition-all hover:-translate-y-1 hover:bg-black/80 hover:border-[#37F713]/30 hover:shadow-[0_8px_30px_rgba(55,247,19,0.3)]"
            >
              <span
                className={`fi fi-${m.code} text-2xl sm:text-3xl rounded-sm shadow-sm`}
                aria-hidden
              ></span>
              <span className="text-sm font-black tracking-widest text-white uppercase drop-shadow-md">
                {m.name}
              </span>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[40px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C400,120 800,0 1200,0 L1200,120 L0,120 Z"
            fill="#f5f5f5"
          ></path>
        </svg>
      </div>
    </section>
  );
}
