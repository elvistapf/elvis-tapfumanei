"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "gradient";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const backgrounds = {
    white: "bg-white",
    light: "bg-warm-gray-50",
    dark: "bg-charcoal text-white",
    gradient: "bg-gradient-to-br from-warm-gray-50 to-warm-gray-100",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        backgrounds[background],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = "center",
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      className
    )}>
      {eyebrow && (
        <p className="text-terracotta font-medium text-sm uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-warm-gray-600 text-lg leading-relaxed",
          align === "center" && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
