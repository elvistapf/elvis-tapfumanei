"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { ArticleCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const articles = [
  {
    title: "The Intersection of Operations and Creativity",
    excerpt: "How systems thinking and creative work complement each other in unexpected ways. Exploring the parallels between building processes and crafting narratives.",
    category: "Article",
    readTime: "12 min read",
    date: "January 2026",
    link: "/writing",
  },
  {
    title: "Midnight Reflections",
    excerpt: "A poem exploring the quiet moments between day and night, where thoughts settle and clarity emerges from the darkness.",
    category: "Poetry",
    readTime: "2 min read",
    date: "December 2025",
    link: "/writing",
  },
  {
    title: "Building Scalable Digital Products",
    excerpt: "A comprehensive guide to product development — from ideation to launch. Lessons learned from building Orbitrain and StudyChops.",
    category: "Technical",
    readTime: "8 min read",
    date: "November 2025",
    link: "/writing",
  },
];

export function RecentWritingSection() {
  return (
    <Section background="light" id="writing">
      <SectionHeader
        eyebrow="Recent Writing"
        title="Words & Stories"
        description="Poetry, essays, articles, and technical writing. Exploring ideas through the craft of words."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            readTime={article.readTime}
            date={article.date}
            link={article.link}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/writing" variant="outline">
          View All Writing
        </Button>
      </div>
    </Section>
  );
}
