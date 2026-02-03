"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type Product = {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  icon?: React.ReactNode;
  color: string;
  status: string;
  features: string[];
  keyInnovation: string;
  url?: string;
};

const products: Product[] = [
  {
    name: "Orbitrain",
    tagline: "Decision Support for Customer Operations",
    description: "A decision support platform that uses AI to automatically score and intelligently route customer interactions (calls, transcripts) to the right people.",
    logo: "/orbitrain-full-logo.png",
    color: "terracotta",
    status: "MVP Launched | Beta Testing",
    features: [
      "Smart routing engine for customer interactions",
      "Automatic call and transcript scoring",
      "Determines QA review, agent self-review, or auto-clear",
      "Significant time savings while maintaining quality",
      "Real-time analytics and insights",
    ],
    keyInnovation: "The smart routing engine that intelligently determines whether calls need QA review, agent self-review, or can be auto-cleared.",
    url: "https://orbitrain.com/",
  },
  {
    name: "StudyChops",
    tagline: "Business Operating System for Education",
    description: "A next-generation business education platform that goes beyond traditional simulations. An immersive, AI-powered learning environment.",
    logo: "/sc-logo-white.png",
    color: "sage",
    status: "Alpha Development | Target Launch Q3 2025",
    features: [
      "Generative Economic Model",
      "AI Mentor for personalised guidance",
      "Virtual team management simulation",
      "XR (Extended Reality) capabilities",
      "Real-world business scenario training",
    ],
    keyInnovation: "Beyond traditional simulations — providing an immersive, AI-powered learning environment that prepares students for real business challenges.",
    url: "https://studychops.com/",
  },
];

export function ProjectsProducts() {
  return (
    <Section background="white" id="products">
      <div className="space-y-16">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative rounded-3xl overflow-hidden ${
              product.color === "terracotta"
                ? "bg-gradient-to-br from-terracotta/5 via-terracotta/10 to-terracotta/5"
                : "bg-gradient-to-br from-sage/5 via-sage/10 to-sage/5"
            }`}
          >
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 ${
              product.color === "terracotta" ? "bg-terracotta" : "bg-sage"
            }`} />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl flex items-center justify-center w-24 h-24 ${
                      product.color === "terracotta"
                        ? "bg-white border border-terracotta/20"
                        : product.name === "StudyChops"
                        ? "bg-black"
                        : "bg-sage/10 text-sage"
                    }`}>
                      {product.logo ? (
                        <img 
                          src={product.logo} 
                          alt={`${product.name} logo`} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        product.icon
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.color === "terracotta"
                        ? "bg-terracotta/10 text-terracotta"
                        : "bg-sage/10 text-sage"
                    }`}>
                      {product.status}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                    {product.name}
                  </h2>
                  <p className={`text-lg font-medium mb-4 ${
                    product.color === "terracotta" ? "text-terracotta" : "text-sage"
                  }`}>
                    {product.tagline}
                  </p>
                  <p className="text-warm-gray-600 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key Innovation */}
                  <div className={`p-4 rounded-xl mb-6 ${
                    product.color === "terracotta"
                      ? "bg-terracotta/10 border border-terracotta/20"
                      : "bg-sage/10 border border-sage/20"
                  }`}>
                    <p className="text-sm font-medium text-charcoal mb-1">Key Innovation</p>
                    <p className="text-warm-gray-600 text-sm">{product.keyInnovation}</p>
                  </div>

                  {product.name === "StudyChops" ? (
                    <Button
                      variant="secondary"
                      className="bg-sage hover:bg-sage-dark cursor-not-allowed opacity-75"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Button
                      href={product.url || "/projects"}
                      variant={product.color === "terracotta" ? "primary" : "secondary"}
                      className={product.color === "sage" ? "bg-sage hover:bg-sage-dark" : ""}
                      external={!!product.url}
                    >
                      {product.url ? "Visit Website" : "Learn More"}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  )}
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-4">Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle size={20} className={`flex-shrink-0 mt-0.5 ${
                          product.color === "terracotta" ? "text-terracotta" : "text-sage"
                        }`} />
                        <span className="text-warm-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Product mockup */}
                  <div className="mt-8 aspect-video bg-white rounded-xl border border-warm-gray-200 overflow-hidden relative p-4">
                    {product.name === "Orbitrain" ? (
                      <img 
                        src="/orbitrain-screenshot.png" 
                        alt="Orbitrain product screenshot" 
                        className="w-full h-full object-contain relative z-10 rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-warm-gray-400 text-sm">Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
