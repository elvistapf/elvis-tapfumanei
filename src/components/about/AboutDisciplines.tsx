"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Rocket, PenTool, ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const disciplines = [
  {
    id: "strategy",
    icon: <Briefcase size={24} />,
    title: "Business Strategy & Operations",
    color: "terracotta",
    summary: "I help fintech and digital companies optimise their operations, deliver products faster, and scale sustainably.",
    details: [
      "Business Operations & Process Design",
      "Delivery Management & Agile Execution",
      "Business Analysis & Requirements Engineering",
      "Cross-functional Team Enablement",
    ],
    experience: [
      { company: "Lula", role: "Strategic Delivery Lead", period: "2024 – Present" },
      { company: "Teya", role: "Project Delivery Manager", period: "2023 – 2024" },
      { company: "Yoyo", role: "Delivery Manager", period: "2022 – 2023" },
      { company: "Walmart", role: "Product Delivery Manager", period: "2019 – 2021" },
    ],
  },
  {
    id: "creator",
    icon: <Rocket size={24} />,
    title: "Founder & Creator",
    color: "sage",
    summary: "I build digital products and create websites that solve real problems and deliver value.",
    details: [
      "Product Strategy & Development",
      "Website Design & Development",
      "React, React Native, SwiftUI",
      "WordPress, Webflow",
    ],
    ventures: [
      { name: "Orbitrain", description: "Decision support for customer operations" },
      { name: "StudyChops", description: "Business education operating system" },
    ],
  },
  {
    id: "writing",
    icon: <PenTool size={24} />,
    title: "Creative Writing",
    color: "charcoal",
    summary: "Writing is where I explore ideas, emotions, and the complexity of being human.",
    details: [
      "Poetry: Identity, love, loss, and hope",
      "Books: Currently writing on creativity and systems",
      "Articles: Tech, leadership, creativity, culture",
      "Essays: Personal reflections and observations",
    ],
    platforms: ["Substack", "Medium", "Personal Blog"],
  },
];

export function AboutDisciplines() {
  const [openId, setOpenId] = useState<string | null>("strategy");

  return (
    <Section background="light">
      <SectionHeader
        eyebrow="My Disciplines"
        title="Three Paths, One Journey"
        description="Each discipline informs and enriches the others, creating a unique perspective on problem-solving and creation."
      />

      <div className="space-y-4">
        {disciplines.map((discipline) => (
          <motion.div
            key={discipline.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-warm-gray-100 overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => setOpenId(openId === discipline.id ? null : discipline.id)}
              className="w-full p-6 flex items-center gap-4 text-left hover:bg-warm-gray-50 transition-colors"
            >
              <div className={`p-3 rounded-xl ${
                discipline.color === "terracotta" ? "bg-terracotta/10 text-terracotta" :
                discipline.color === "sage" ? "bg-sage/10 text-sage" :
                "bg-charcoal/10 text-charcoal"
              }`}>
                {discipline.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-charcoal">
                  {discipline.title}
                </h3>
                <p className="text-warm-gray-600 text-sm mt-1">
                  {discipline.summary}
                </p>
              </div>
              <motion.div
                animate={{ rotate: openId === discipline.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-warm-gray-400"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>

            {/* Content */}
            <AnimatePresence>
              {openId === discipline.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-warm-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Focus areas */}
                      <div>
                        <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">
                          Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {discipline.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-warm-gray-700">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                                discipline.color === "terracotta" ? "bg-terracotta" :
                                discipline.color === "sage" ? "bg-sage" : "bg-charcoal"
                              }`} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Experience or ventures */}
                      <div>
                        {discipline.experience && (
                          <>
                            <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">
                              Experience
                            </h4>
                            <ul className="space-y-3">
                              {discipline.experience.map((exp, index) => (
                                <li key={index} className="flex justify-between items-start">
                                  <div>
                                    <p className="font-medium text-charcoal">{exp.company}</p>
                                    <p className="text-sm text-warm-gray-500">{exp.role}</p>
                                  </div>
                                  <span className="text-xs text-warm-gray-400">{exp.period}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {discipline.ventures && (
                          <>
                            <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">
                              Ventures
                            </h4>
                            <ul className="space-y-3">
                              {discipline.ventures.map((venture, index) => (
                                <li key={index}>
                                  <p className="font-medium text-charcoal">{venture.name}</p>
                                  <p className="text-sm text-warm-gray-500">{venture.description}</p>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {discipline.platforms && (
                          <>
                            <h4 className="text-sm font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">
                              Published On
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {discipline.platforms.map((platform, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-warm-gray-100 text-warm-gray-600 text-sm rounded-full"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
