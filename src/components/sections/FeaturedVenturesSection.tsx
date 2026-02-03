"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type Venture = {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  icon?: React.ReactNode;
  color: string;
  status: string;
  features: string[];
  url?: string;
};

const ventures: Venture[] = [
  {
    name: "Orbitrain",
    tagline: "Decision Support for Customer Operations",
    description: "A decision support platform that uses AI to automatically score and intelligently route customer interactions (calls, transcripts) to the right people. The smart routing engine determines whether calls need QA review, agent self-review, or can be auto-cleared — saving significant time while maintaining quality.",
    logo: "/orbitrain-full-logo.png",
    color: "terracotta",
    status: "MVP Launched | Beta Testing",
    features: ["Smart Routing Engine", "Call Scoring", "Quality Assurance"],
    url: "https://orbitrain.com/",
  },
  {
    name: "StudyChops",
    tagline: "Business Operating System for Education",
    description: "A next-generation business education platform that goes beyond traditional simulations. An immersive, AI-powered learning environment with a Generative Economic Model, AI mentor, virtual team management, and XR capabilities.",
    logo: "/sc-logo-white.png",
    color: "sage",
    status: "Alpha Development | Target Launch Q3 2025",
    features: ["Generative Economic Model", "AI Mentor", "Virtual Teams", "XR Ready"],
    // url: "https://studychops.com/",
  },
];

type ProfessionalProject = {
  name: string;
  tagline: string;
  description: string;
  icon?: React.ReactNode;
  color: string;
  status: string;
  features: string[];
};

const professionalProjects: ProfessionalProject[] = [
  {
    name: "Merchant Digital Visibility Enhancement",
    tagline: "Digital Presence Management for Merchants",
    description: "As Product Delivery Manager, contributed to enhancing the online presence of merchants across various platforms. Responsibilities included stakeholder management, process improvements, and data analysis to manage and improve reviews while complying with corporate and regulatory guidelines.",
    icon: <Briefcase size={32} />,
    color: "charcoal",
    status: "Completed",
    features: ["Data Analysis", "Process Improvement", "Stakeholder Management"],
  },
  {
    name: "Anchorr",
    tagline: "The First Dating App for Yachties",
    description: "Designed and developed 'The First Dating App for Yachties' — a niche platform connecting maritime professionals worldwide. Built by crew, for crew, understanding the unique challenges of dating at sea with irregular schedules and constant travel. Responsibilities included delivery management across web and mobile platforms, ensuring seamless user experience and successful app store deployments.",
    icon: <Briefcase size={32} />,
    color: "terracotta",
    status: "In Development",
    features: ["Web Platform", "iOS App", "Android App", "Niche Community"],
  },
];

export function FeaturedVenturesSection() {
  return (
    <Section background="white" id="ventures">
      <SectionHeader
        eyebrow="Ventures"
        title="Building the Future"
        description="I don't just work in systems — I build them. These are the products I'm creating to solve real problems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ventures.map((venture, index) => (
          <motion.div
            key={venture.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative group rounded-3xl p-8 md:p-10 overflow-hidden ${
              venture.color === "terracotta" 
                ? "bg-gradient-to-br from-terracotta/5 to-terracotta/10 border border-terracotta/20" 
                : "bg-gradient-to-br from-sage/5 to-sage/10 border border-sage/20"
            }`}
          >
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${
              venture.color === "terracotta" ? "bg-terracotta" : "bg-sage"
            }`} />

            <div className="relative z-10">
              {/* Icon and status */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl flex items-center justify-center w-20 h-20 ${
                  venture.color === "terracotta" 
                    ? "bg-white border border-terracotta/20" 
                    : venture.name === "StudyChops"
                    ? "bg-black"
                    : "bg-sage/10 text-sage"
                }`}>
                  {venture.logo ? (
                    <img 
                      src={venture.logo} 
                      alt={`${venture.name} logo`} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    venture.icon
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  venture.color === "terracotta"
                    ? "bg-terracotta/10 text-terracotta"
                    : "bg-sage/10 text-sage"
                }`}>
                  {venture.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
                {venture.name}
              </h3>
              <p className={`text-sm font-medium mb-4 ${
                venture.color === "terracotta" ? "text-terracotta" : "text-sage"
              }`}>
                {venture.tagline}
              </p>
              <p className="text-warm-gray-600 leading-relaxed mb-6">
                {venture.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {venture.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-white/60 text-warm-gray-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                href={venture.url || "/projects"}
                variant="ghost"
                className={`group/btn ${
                  venture.color === "terracotta" 
                    ? "hover:text-terracotta" 
                    : "hover:text-sage"
                }`}
                external={!!venture.url}
              >
                {venture.url ? "Visit Website" : "Learn More"}
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Projects Section */}
      <div className="mt-16">
        <SectionHeader
          eyebrow="Professional Projects"
          title="Client & Corporate Work"
          description="Selected projects delivered for clients and employers, showcasing expertise in digital transformation and operational excellence."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {professionalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative group rounded-3xl p-8 md:p-10 overflow-hidden ${
                project.color === "charcoal" 
                  ? "bg-gradient-to-br from-charcoal/5 to-charcoal/10 border border-charcoal/20" 
                  : "bg-gradient-to-br from-sage/5 to-sage/10 border border-sage/20"
              }`}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${
                project.color === "charcoal" ? "bg-charcoal" : "bg-sage"
              }`} />

              <div className="relative z-10">
                {/* Icon and status */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${
                    project.color === "charcoal" 
                      ? "bg-charcoal/10 text-charcoal" 
                      : "bg-sage/10 text-sage"
                  }`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.color === "charcoal"
                      ? "bg-charcoal/10 text-charcoal"
                      : "bg-sage/10 text-sage"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">
                  {project.name}
                </h3>
                <p className={`text-sm font-medium mb-4 ${
                  project.color === "charcoal" ? "text-charcoal" : "text-sage"
                }`}>
                  {project.tagline}
                </p>
                <p className="text-warm-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/60 text-warm-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Project details */}
                <div className="flex items-center gap-2 text-sm text-warm-gray-500">
                  <Briefcase size={16} />
                  <span>
                    {project.name === "Anchorr" 
                      ? "Delivery Manager • Web & Mobile Apps • 2024 - ongoing" 
                      : "Associated with Teya • Aug 2023 - Dec 2023"
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
