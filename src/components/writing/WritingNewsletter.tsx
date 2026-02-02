"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function WritingNewsletter() {
  return (
    <Section background="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="p-4 bg-terracotta/10 rounded-full w-fit mx-auto mb-6">
          <Mail size={32} className="text-terracotta" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Get New Writing Delivered
        </h2>
        <p className="text-warm-gray-600 text-lg mb-8">
          Subscribe to receive new articles directly to your inbox. 
          No spam. Unsubscribe anytime.
        </p>

        {/* Substack Embed Placeholder */}
        <div className="bg-warm-gray-50 rounded-2xl p-8 border border-warm-gray-200">
          <p className="text-warm-gray-500 text-sm mb-4">
            Subscribe via Substack
          </p>
          
          {/* This would be replaced with actual Substack embed iframe */}
          <div className="bg-white rounded-xl p-6 border border-warm-gray-200">
            <iframe 
              src="https://triestoohard.substack.com/embed" 
              width="100%" 
              height="320" 
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0" 
              scrolling="no"
              title="Subscribe to Try Too Hard Newsletter"
            />
          </div>
          
          <p className="text-warm-gray-400 text-xs mt-4">
            Or visit{" "}
            <a 
              href="https://triestoohard.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              triestoohard.substack.com
            </a>
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
