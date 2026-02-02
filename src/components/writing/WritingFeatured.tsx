"use client";

import { motion } from "framer-motion";
import { Headphones, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const books = [
  {
    title: "The Republic of Wolves",
    subtitle: "A Street Testament on Power, Faith, and Survival",
    description: "In the streets, power has its own scripture — written not in ink, but in hunger, loyalty and loss. This four-book testament blends philosophy, confession, and survival doctrine.",
    themes: "Authority, violence, hierarchy, brotherhood, moral cost",
    formats: "Kindle + Paperback",
    kindleUnlimited: true,
    image: "/rol-image.webp",
    featured: true,
    link: "https://www.amazon.com/Republic-Wolves-Street-Testament-Survival-ebook/dp/B0DG87DPP1/ref=tmm_kin_swatch_0",
  },
  {
    title: "All These Feelings",
    subtitle: "And what to do with them",
    description: "An intimate guide through joy, anger, longing and the fragile emotional infrastructure of being human. The tone is conversational, like sitting with someone who doesn't simplify pain, but translates it.",
    themes: "Emotional literacy, self-reflection, healing",
    formats: "Kindle, Hardcover, Paperback",
    kindleUnlimited: true,
    image: "/atf-image.webp",
    link: "https://www.amazon.com/All-these-feelings-Elvis-Tapfumanei-ebook/dp/B0CQHCWDL3",
  },
  {
    title: "The Art of Self-Discovery",
    subtitle: "Meaning is not found. It is made.",
    description: "This work blends philosophy, personal narrative and reflective tasks that move the reader inward. It proposes that fulfilment stems from exploration rather than answers.",
    themes: "Introspection, purpose, growth, identity formation",
    formats: "Kindle",
    kindleUnlimited: true,
    image: "/taos-image.webp",
    link: "https://www.amazon.com/Art-Self-Discovery-Navigating-Complexities-Modern-ebook/dp/B0BSTN7CK2",
  },
];

const audiobook = {
  title: "Dear Child: Letters from the Heart",
  description: "A soul-stirring collection of heartfelt reflections designed to inspire and uplift. Through letters crafted with wisdom, compassion, and deep emotional resonance, this book offers readers a guide through the challenges, triumphs, and wonders of life.",
  themes: "Resilience, gratitude, patience, humility",
  image: "/dc-image.jpeg",
  link: "https://www.barnesandnoble.com/w/dear-child-elvis-tapfumanei/1146430107",
};

export function WritingFeatured() {
  return (
    <Section background="white" id="books">
      <SectionHeader
        eyebrow="Published Works"
        title="Books & Audiobooks"
        description="Exploring identity, power, emotion, and the human condition through prose and verse."
        className="mb-12"
      />

      {/* Featured Book - The Republic of Wolves */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-charcoal to-charcoal-light rounded-3xl p-8 md:p-10 text-white mb-12"
      >
        <p className="text-terracotta-light text-sm font-medium uppercase tracking-wider mb-6">
          Latest Release
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-48 flex-shrink-0">
            <img 
              src={books[0].image} 
              alt={books[0].title}
              className="w-full max-w-[200px] mx-auto md:mx-0 rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {books[0].title}
            </h3>
            <p className="text-terracotta-light text-lg mb-4">
              {books[0].subtitle}
            </p>
            <p className="text-warm-gray-300 leading-relaxed mb-4">
              {books[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {books[0].themes.split(", ").map((theme) => (
                <span key={theme} className="px-3 py-1 bg-white/10 text-warm-gray-300 text-xs rounded-full">
                  {theme}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-warm-gray-400">{books[0].formats}</span>
              {books[0].kindleUnlimited && (
                <span className="px-3 py-1 bg-terracotta/20 text-terracotta-light rounded-full text-xs">
                  Free on Kindle Unlimited
                </span>
              )}
            </div>
            <a 
              href={books[0].link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors"
            >
              View on Amazon
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Other Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {books.slice(1).map((book, index) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-warm-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
              <img 
                src={book.image} 
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-lg font-bold text-charcoal mb-1 group-hover:text-terracotta transition-colors">
              {book.title}
            </h4>
            <p className="text-terracotta text-sm mb-2">{book.subtitle}</p>
            <p className="text-warm-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
              {book.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
              <span className="text-warm-gray-500">{book.formats}</span>
              {book.kindleUnlimited && (
                <span className="px-2 py-0.5 bg-sage/10 text-sage rounded-full">
                  Kindle Unlimited
                </span>
              )}
            </div>
            <a 
              href={book.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors w-full justify-center"
            >
              View on Amazon
              <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}

        {/* Audiobook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group bg-gradient-to-br from-sage/10 to-sage/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg relative">
            <img 
              src={audiobook.image} 
              alt={audiobook.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-full">
              <Headphones size={16} className="text-sage" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-sage text-white text-xs rounded-full">Audiobook</span>
          </div>
          <h4 className="text-lg font-bold text-charcoal mb-1 group-hover:text-sage transition-colors">
            {audiobook.title}
          </h4>
          <p className="text-warm-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">
            {audiobook.description}
          </p>
            <a 
              href={audiobook.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage hover:bg-sage-dark text-white font-medium rounded-full transition-colors w-full justify-center"
            >
              View on Barnes & Noble
              <ArrowRight size={16} />
            </a>
        </motion.div>
      </div>
    </Section>
  );
}
