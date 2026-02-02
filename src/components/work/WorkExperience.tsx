"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const experiences = [
  {
    company: "Lula",
    logo: "/lula-logo.png",
    role: "Strategic Delivery Lead",
    period: "March 2024 – Present",
    location: "Cape Town (Hybrid)",
    description: "Leading operational improvement initiatives across Sales, Credit & Collections, and Customer Experience teams.",
    achievements: [
      "Improved process efficiency by approximately 20% through workflow optimisation and automation",
      "Maintained 95% on-time delivery rate for process improvement initiatives",
      "Designed and implemented Business Value Calculator platform with React Native and Tableau",
      "Improved project prioritisation accuracy by 30%",
    ],
    metrics: [
      { icon: <TrendingUp size={16} />, value: "20%", label: "Efficiency Gain" },
      { icon: <Clock size={16} />, value: "95%", label: "On-Time Delivery" },
      { icon: <Users size={16} />, value: "30%", label: "Better Prioritisation" },
    ],
  },
  {
    company: "Teya",
    logo: "/teya.jpeg",
    role: "Project Delivery Manager",
    period: "April 2023 – March 2024",
    location: "Remote (UK & EU)",
    description: "Supported delivery management across payment and commerce platforms, coordinating execution across distributed teams.",
    achievements: [
      "Managed cross-functional delivery teams of approximately 10 members",
      "Reduced project lead times by 20% using Agile methodologies",
      "Reduced delivery risk exposure by approximately 30%",
      "Delivered data-driven insights to improve programme outcomes",
    ],
    metrics: [
      { icon: <TrendingUp size={16} />, value: "20%", label: "Faster Delivery" },
      { icon: <Clock size={16} />, value: "95%", label: "On-Time Rate" },
      { icon: <Users size={16} />, value: "10+", label: "Team Members" },
    ],
  },
  {
    company: "Yoyo",
    logo: "/yoyo-logo.jpeg",
    role: "Delivery Manager",
    period: "March 2022 – March 2023",
    location: "Cape Town (Hybrid)",
    description: "Managed delivery of fintech and loyalty platform initiatives across retail and hospitality environments.",
    achievements: [
      "Led loyalty programme enhancements resulting in 15% retention improvement",
      "Achieved 10% growth in transaction values",
      "Reduced delivery risks through proactive stakeholder engagement",
      "Applied data-informed strategies to improve engagement",
    ],
    metrics: [
      { icon: <TrendingUp size={16} />, value: "15%", label: "Retention Up" },
      { icon: <Clock size={16} />, value: "10%", label: "Transaction Growth" },
    ],
  },
  {
    company: "Builders Warehouse",
    logo: "/Builders_Warehouse_logo.png",
    role: "Product Delivery Manager (Contract)",
    period: "March 2019 – July 2021",
    location: "Cape Town (On-site)",
    description: "Contributed to enterprise-scale product delivery initiatives within retail technology environments.",
    achievements: [
      "Supported product lifecycle execution and deployment coordination",
      "Facilitated cross-team collaboration across product and engineering",
      "Supported Agile delivery and product execution governance",
    ],
    metrics: [],
  },
];

export function WorkExperience() {
  return (
    <Section background="white" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Business Strategy & Operations"
        description="Helping fintech and digital companies optimise operations, deliver products faster, and scale sustainably."
        align="left"
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-warm-gray-50 rounded-2xl p-6 md:p-8 border border-warm-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl flex items-center justify-center w-16 h-16 shadow-sm">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal">
                    {exp.company}
                  </h3>
                  <p className="text-terracotta font-medium">{exp.role}</p>
                  <p className="text-warm-gray-500 text-sm">{exp.period} • {exp.location}</p>
                </div>
              </div>
              
              {exp.metrics.length > 0 && (
                <div className="flex gap-6">
                  {exp.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-terracotta mb-1">
                        {metric.icon}
                        <span className="text-xl font-bold">{metric.value}</span>
                      </div>
                      <p className="text-xs text-warm-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="text-warm-gray-600 mb-4">{exp.description}</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-warm-gray-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-warm-gray-600 mb-6">
          Want to discuss how I can help your team?
        </p>
        <a
          href="https://www.linkedin.com/in/elvis-tapfumanei/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-dark transition-colors shadow-lg shadow-terracotta/25"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </Section>
  );
}
