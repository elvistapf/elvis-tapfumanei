"use client";

import { motion } from "framer-motion";

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-50 via-white to-warm-gray-100" />
      
      {/* Animated blob 1 - Terracotta */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-terracotta/10 blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "20%" }}
      />
      
      {/* Animated blob 2 - Sage */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-sage/10 blur-3xl"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", right: "15%" }}
      />
      
      {/* Animated blob 3 - Warm gray */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-warm-gray-300/20 blur-3xl"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "30%" }}
      />

      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
