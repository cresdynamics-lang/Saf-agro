"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle: string;
  tagline?: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  label,
  title,
  subtitle,
  tagline,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden lg:min-h-[60vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/40 to-[#111]/90 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pb-24 w-full">
        <ScrollReveal animation="fade-up" delay={0.2}>
          {label && (
            <p className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-[#37F713]">
              {label}
            </p>
          )}
          
          <motion.h1 
            className="mb-6 max-w-4xl text-5xl leading-[1.1] font-black lowercase tracking-tight text-white sm:text-6xl lg:text-[5rem]"
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
            {title.split(" ").map((word, idx) => (
              <motion.span key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block mr-3 lg:mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
            {subtitle}
          </p>
          
          {tagline && (
            <p className="mt-8 text-sm font-bold tracking-widest text-[#37F713] uppercase drop-shadow-[0_0_10px_rgba(55,247,19,0.3)]">
              {tagline}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
