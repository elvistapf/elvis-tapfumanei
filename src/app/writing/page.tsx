import { Metadata } from "next";
import { WritingHero } from "@/components/writing/WritingHero";
import { WritingFeatured } from "@/components/writing/WritingFeatured";
import { WritingArticles } from "@/components/writing/WritingArticles";
import { WritingNewsletter } from "@/components/writing/WritingNewsletter";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Writing | Elvis Tapfumanei",
  description: "Poetry, essays, articles, and books. Exploring ideas through the craft of words. Subscribe to the newsletter for new writing.",
};

export default function WritingPage() {
  return (
    <>
      <WritingHero />
      <WritingFeatured />
      <WritingArticles />
      <WritingNewsletter />
      <CTASection />
    </>
  );
}
