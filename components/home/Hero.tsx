"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
          <span className="text-[#37F713] text-lg leading-none">&bull;</span>
          <span>SOURCING</span>
          <span className="text-[#37F713] opacity-60">-</span>
          <span>SUPPLY</span>
          <span className="text-[#37F713] opacity-60">-</span>
          <span>LOGISTICS</span>
          <span className="text-[#37F713] opacity-60">-</span>
          <span>EXPORTS</span>
        </div>

        <h1 className="mb-8 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-[5rem]">
          Connecting global <br className="hidden sm:block" />
          markets to Africa&apos;s finest <br className="hidden sm:block" />
          grains.
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed font-light text-white/90">
          <strong className="font-semibold text-white">SAF Agro Products</strong> is an international agro-commodity sourcing and
          supply company — operating across Kenya, Tanzania, Mauritius, and the
          United Kingdom.
          <br />
          <br />
          We source, grade, pack, and deliver at scale.
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

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {markets.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-black/20 to-black/80 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-sm border border-white/10 transition-transform hover:-translate-y-1"
            >
              <span
                className={`fi fi-${m.code} text-2xl sm:text-3xl rounded-sm shadow-sm`}
                aria-hidden
              ></span>
              <span className="text-sm font-bold tracking-widest text-white uppercase drop-shadow-md">
                {m.name}
              </span>
            </div>
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
