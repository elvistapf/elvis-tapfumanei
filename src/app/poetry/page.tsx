import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Poetry | Elvis Tapfumanei",
  description: "Poetry collection from Republic of Wolves - exploring the human experience through verse.",
};

const poems = [
  {
    slug: "the-funeral-for-fairy-tales",
    title: "The Funeral for Fairy Tales",
    excerpt: "Burying the myths that keep us waiting for rescue instead of saving ourselves.",
    image: "/rol-image.webp"
  },
  {
    slug: "my-first-philosopher-was-hunger",
    title: "My First Philosopher Was Hunger",
    excerpt: "How survival teaches philosophy better than books ever could.",
    image: "/rol-image.webp"
  },
  {
    slug: "the-art-of-the-necessary",
    title: "The Art of the Necessary",
    excerpt: "Survival doesn't negotiate with morality—it just demands action.",
    image: "/rol-image.webp"
  }
];

export default function PoetryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <Link 
            href="/writing" 
            className="inline-flex items-center gap-2 text-warm-gray-600 hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Writing
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
            Poetry
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl">
            From the collection <em>Republic of Wolves</em> - exploring the raw truths of survival, 
            identity, and the spaces between who we are and who we must become.
          </p>
        </div>
      </section>

      {/* Poems Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
              <Link
                key={poem.slug}
                href={`/poetry/${poem.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-warm-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden bg-warm-gray-100">
                    <img 
                      src={poem.image}
                      alt={poem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                      {poem.title}
                    </h3>
                    <p className="text-warm-gray-600 text-sm leading-relaxed">
                      {poem.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-terracotta font-medium">
                      Read poem
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="p-8 bg-warm-gray-50 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Republic of Wolves</h3>
              <p className="text-warm-gray-600 mb-6">
                The complete poetry collection is available on Amazon, featuring these poems and more 
                from the journey through necessity, survival, and self-discovery.
              </p>
              <a 
                href="https://www.amazon.com/Republic-Wolves-Elvis-Tapfumanei/dp/B0DFKJY2WJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded-full transition-colors"
              >
                Buy on Amazon
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
