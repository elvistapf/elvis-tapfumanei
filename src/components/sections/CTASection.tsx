"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/ui/ContactModal";

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        
        {/* Subtle decorative gradient - no visible shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/5 via-transparent to-sage/5" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s Create Something Together
            </h2>
            <p className="text-terracotta-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you need business strategy, a digital product, or compelling content — 
              I&apos;d love to hear about your project.
            </p>
            
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-dark transition-colors shadow-lg shadow-terracotta/25"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
