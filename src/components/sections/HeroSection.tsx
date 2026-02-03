"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { CharacterReveal } from "@/components/ui/TextReveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32">
      {/* Animated gradient background */}
      <AnimatedGradient />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-warm-gray-500 tracking-widest uppercase"
          >
            Hello, I&apos;m
          </motion.p>
          
          {/* Name with character reveal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-none">
            <CharacterReveal delay={0.4}>
              Elvis Tapfumanei
            </CharacterReveal>
          </h1>

          {/* Tagline with staggered words */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {["Founder.", "Strategist.", "Storyteller."].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.15, duration: 0.5 }}
                className={`text-xl md:text-3xl lg:text-4xl font-semibold ${
                  index === 0 ? "text-terracotta" :
                  index === 1 ? "text-sage" : "text-charcoal"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-warm-gray-600 leading-relaxed"
          >
            I build operational systems, create digital products, and tell stories 
            through words and ideas. Founder of{" "}
            <span className="text-terracotta font-semibold">Orbitrain</span> &{" "}
            <span className="text-sage font-semibold">StudyChops</span>.
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <MagneticButton href="/work" variant="primary" size="lg">
              Explore My Work
            </MagneticButton>
            <MagneticButton href="/cv" variant="outline" size="lg">
              Download CV
            </MagneticButton>
            <MagneticButton href="/writing" variant="outline" size="lg">
              Read My Writing
            </MagneticButton>
          </motion.div>

          {/* Profile image with glow */}
          <motion.div
            id="profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.8, type: "spring" }}
            className="pt-8"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta/30 to-sage/30 blur-xl animate-pulse" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img 
                  src="/elvis-pro-pic.jpeg" 
                  alt="Elvis Tapfumanei"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={(e) => {
              e.preventDefault();
              const whatIDoSection = document.getElementById('what-i-do');
              if (whatIDoSection) {
                // Get the Lenis instance if it exists
                const lenis = (window as any).lenis;
                if (lenis) {
                  lenis.scrollTo(whatIDoSection);
                } else {
                  // Fallback to native scroll
                  whatIDoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="flex flex-col items-center gap-2 text-white/80 cursor-pointer hover:text-white transition-colors bg-transparent border-none"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
