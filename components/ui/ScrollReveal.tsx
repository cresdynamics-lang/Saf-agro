"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left";
  delay?: number;
  duration?: number;
  className?: string;
  amount?: "some" | "all" | number;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.2,
}: ScrollRevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "fade-up" ? 40 : 0,
      scale: animation === "scale-up" ? 0.95 : 1,
      x: animation === "slide-right" ? -40 : animation === "slide-left" ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Buttery smooth cubic bezier
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
