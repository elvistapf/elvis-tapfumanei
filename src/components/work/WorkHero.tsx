"use client";

import { motion } from "framer-motion";

export function WorkHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-50 via-white to-warm-gray-100" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Selected Work & Projects
          </h1>
          <p className="text-xl md:text-2xl text-warm-gray-600 max-w-2xl mx-auto">
            Spanning business strategy, operations, and digital products
          </p>
        </motion.div>
      </div>
    </section>
  );
}
