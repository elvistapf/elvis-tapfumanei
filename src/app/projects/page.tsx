import { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsProducts } from "@/components/projects/ProjectsProducts";
import { ProjectsWebsites } from "@/components/projects/ProjectsWebsites";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects | Elvis Tapfumanei",
  description: "Founder of Orbitrain and StudyChops. Building digital products that solve real problems. Websites and platforms created.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsProducts />
      <ProjectsWebsites />
      <CTASection />
    </>
  );
}
