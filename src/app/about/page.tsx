import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutBio } from "@/components/about/AboutBio";
import { AboutDisciplines } from "@/components/about/AboutDisciplines";
import { AboutCredentials } from "@/components/about/AboutCredentials";
import { AboutBeyond } from "@/components/about/AboutBeyond";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About | Elvis Tapfumanei",
  description: "The man behind the work. Operator, Creator, Problem Solver. Learn about Elvis Tapfumanei's journey at the intersection of strategy, creation, and storytelling.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutBio />
      <AboutDisciplines />
      <AboutCredentials />
      <AboutBeyond />
      <CTASection />
    </>
  );
}
