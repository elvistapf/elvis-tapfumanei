"use client";

import { motion } from "framer-motion";
import { Award, Wrench } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const certifications = [
  "CMI Level 6 Diploma in Professional Management and Leadership Practice",
  "BCS International Diploma in Business Analysis (in progress)",
  "BCS Practitioner Certificates in Business Analysis Practice",
  "BCS Requirements Engineering Certificate",
  "BCS Business Process Modelling Certificate",
  "Product School Certifications (Strategy, Roadmapping, Product-Led Growth)",
  "Certified ScrumMaster (Scrum Alliance)",
  "Google Cloud – Innovating with Data",
  "Diploma in Communication and Journalism",
];

const tools = {
  "Strategy & Delivery": ["Asana", "Confluence", "HubSpot", "Jira", "Monday.com", "Miro"],
  "Data & Analytics": ["DataHog", "Mixpanel", "PostHog", "Sentry", "Snowflake"],
  "Development & Cloud": ["Cursor", "Figma", "Firebase", "GitHub", "Google Cloud", "Next.js", "React", "Supabase", "Trae", "VS Code", "Windsurf", "Xcode/Swift"],
  "Design & Content": ["Canva", "Medium", "Notion", "WordPress"],
};

export function AboutCredentials() {
  return (
    <Section background="white">
      <SectionHeader
        eyebrow="Credentials & Toolkit"
        title="Skills That Bridge Worlds"
        description="Professional certifications and tools that enable me to work across strategy, technology, and creativity."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-warm-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-terracotta/10 rounded-lg text-terracotta">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-charcoal">
              Certifications
            </h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 text-warm-gray-700"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-warm-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-sage/10 rounded-lg text-sage">
              <Wrench size={24} />
            </div>
            <h3 className="text-xl font-bold text-charcoal">
              Tools I Use
            </h3>
          </div>
          <div className="space-y-6">
            {Object.entries(tools).map(([category, toolList], index) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolList.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-white text-warm-gray-700 text-sm rounded-full border border-warm-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
