"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "qScore - Quality Assurance Assessment Platform",
    category: "Associated with Lula",
    period: "September 2025 - Ongoing",
    description: "Internal Quality Assurance Assessment Platform that uses AI to evaluate call transcripts. Enables Sales and QA teams to upload transcript text files, receive AI-generated scores via Google Gemini, manually adjust evaluations, and generate performance reports. Features include automated and manual scoring workflows, configurable scorecards per team, performance analytics, and role-based access for Admins, Team Leads, and Agents. Solved transcript processing bottlenecks by implementing batch processing queues, reducing evaluation time from hours to minutes.",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Google Gemini API", "Azure"],
    impact: "Reduced QA evaluation time by 75% and improved scoring consistency by 40%",
    logo: "/lula-logo.png",
  },
  {
    title: "Lily - Business Value Calculator",
    category: "Associated with Lula",
    period: "May 2024 - Nov 2024",
    description: "Developed a chatbot called Lily, a Business Value Calculator, to assist teams in prioritising initiatives according to business impact and urgency. Uses natural language processing to enhance decision-making by scoring and prioritising projects based on company-specific metrics. The tool employs sophisticated scoring algorithms and incorporates feedback from different departments to optimise decision-making processes. Implemented custom prompt engineering to handle complex business scenarios and integrated with existing project management tools to automate data collection.",
    tech: ["AI Prompt Engineering", "React Native", "User Interface Design", "Agile Project Management", "Cross-team Collaboration"],
    impact: "Improved project prioritisation accuracy by 30% and saved 15 hours/week in manual planning",
    logo: "/lula-logo.png",
  },
  {
    title: "Automated Healthcare Professional Registration System",
    category: "Associated with AEMI",
    period: "Feb 2021 - Jul 2023",
    description: "Developed and managed a sophisticated, bilingual online registration form for a healthcare client in Spain. Used Windows 365, Gmail, OneDrive, Jotform, and Microsoft Power Automate. Created diverse user pathways for various health professionals and integrated Robotic Process Automation (RPA) for efficient verification of professional details. Implemented a unique user categorisation system to streamline data analysis. Solved data integration challenges by building custom APIs connecting 5 different systems, reducing manual data entry by 90%.",
    tech: ["Solution Implementation", "Requirements Engineering", "Project Management", "Product Management", "Robotic Process Automation (RPA)"],
    impact: "Processed 10,000+ registrations with 95% automation and reduced approval time from 2 weeks to 48 hours",
    link: {
      url: "https://prospace.aemi.es/mi-cuenta/",
      text: "View Live Site"
    },
    logo: "/aemi-logo.png",
  },
];

export function WorkProjects() {
  return (
    <Section background="light" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Websites & Digital Products"
        description="Selected projects showcasing technical capability and creative problem-solving."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-white rounded-2xl overflow-hidden border border-warm-gray-100 hover:shadow-xl transition-all duration-300"
          >
            {/* Image or Logo */}
            <div className="aspect-video bg-gradient-to-br from-warm-gray-100 to-warm-gray-200 relative overflow-hidden">
              {project.logo ? (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe size={32} className="text-warm-gray-300" />
                </div>
              )}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
            </div>

            <div className="p-6">
              <p className="text-terracotta text-sm font-medium mb-1">{project.category}</p>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                {project.title}
              </h3>
              {project.period && (
                <p className="text-warm-gray-500 text-sm mb-3">{project.period}</p>
              )}
              <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.impact && (
                <p className="text-sage text-sm font-medium mb-4">
                  ↑ {project.impact}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-warm-gray-100 text-warm-gray-600 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-terracotta text-sm font-medium hover:text-terracotta-dark transition-colors"
                >
                  {project.link.text}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/projects" variant="outline">
          View All Ventures
        </Button>
      </div>
    </Section>
  );
}
