"use client";

import { Briefcase, Rocket, PenTool } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Card";

const services = [
  {
    icon: <Briefcase size={28} />,
    title: "Business Strategy",
    description: "Operations, delivery management, and process optimisation in fintech. Currently at Lula, previously Teya, Yoyo, and Walmart.",
    link: "/work",
    linkText: "View Experience",
    accentColor: "terracotta" as const,
  },
  {
    icon: <Rocket size={28} />,
    title: "Founder & Creator",
    description: "Building Orbitrain and StudyChops. Creating websites and digital products that solve real problems and deliver value.",
    link: "/projects",
    linkText: "See Ventures",
    accentColor: "sage" as const,
  },
  {
    icon: <PenTool size={28} />,
    title: "Creative Writing",
    description: "Books, poetry, articles, and storytelling. Exploring ideas, emotions, and the complexity of being human through words.",
    link: "/writing",
    linkText: "Read Writing",
    accentColor: "charcoal" as const,
  },
];

export function WhatIDoSection() {
  return (
    <Section background="light" id="what-i-do">
      <SectionHeader
        eyebrow="What I Do"
        title="Three Disciplines, One Vision"
        description="I exist at the intersection of logic and creativity — building systems, products, and narratives that matter."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            linkText={service.linkText}
            accentColor={service.accentColor}
          />
        ))}
      </div>
    </Section>
  );
}
