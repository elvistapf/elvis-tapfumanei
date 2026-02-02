import { Metadata } from "next";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkExperience } from "@/components/work/WorkExperience";
import { WorkProjects } from "@/components/work/WorkProjects";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work | Elvis Tapfumanei",
  description: "Selected work and projects spanning business strategy, operations, and digital products. Experience at Lula, Teya, Yoyo, and Walmart.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkExperience />
      <WorkProjects />
      <CTASection />
    </>
  );
}
