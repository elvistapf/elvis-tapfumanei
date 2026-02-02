"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function AboutBio() {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img 
              src="/elvis-pro-pic.jpeg"
              alt="Elvis Tapfumanei"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Who I Am
          </h2>
          
          <div className="space-y-4 text-warm-gray-600 leading-relaxed text-lg">
            <p>
              <span className="text-charcoal font-medium">I exist at the center of logic and creativity.</span>
            </p>
            <p>
              By day, I create operational systems that help fintech companies scale. 
              By night (and weekends), I build digital products, write poetry, and craft 
              stories that explore the human condition.
            </p>
            <p>
              I believe the same skills that make you a good strategist — pattern recognition, 
              systems thinking, narrative structure — also make you a compelling storyteller 
              and effective creator.
            </p>
            <p>
              Based in <span className="text-terracotta font-medium">Cape Town, South Africa</span>, 
              I work with companies globally and create for audiences everywhere.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-warm-gray-200">
            <div>
              <p className="text-3xl font-bold text-terracotta">7+</p>
              <p className="text-sm text-warm-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sage">2</p>
              <p className="text-sm text-warm-gray-500">Ventures Founded</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-charcoal">50+</p>
              <p className="text-sm text-warm-gray-500">Articles Written</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
