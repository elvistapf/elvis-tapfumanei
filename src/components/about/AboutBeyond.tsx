"use client";

import { motion } from "framer-motion";
import { Users, Globe, Heart } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const activities = [
  {
    icon: <Users size={24} />,
    title: "Toastmasters International",
    role: "Vice President Public Relations",
    period: "2021 – 2022",
    description: "Led club public relations initiatives, managed digital presence, and supported governance and membership engagement.",
  },
  {
    icon: <Globe size={24} />,
    title: "AfrikaRudi NPC",
    role: "IT & Web Development Manager",
    period: "2019 – 2022",
    description: "Managed organisational IT infrastructure, led website design and delivery, built learning platform capabilities, and mentored development contributors.",
  },
  {
    icon: <Heart size={24} />,
    title: "Mentoring",
    role: "Developer & Writer Mentor",
    period: "Ongoing",
    description: "Guiding aspiring developers and writers on their creative and professional journeys. Sharing knowledge and experience to help others grow.",
  },
];

export function AboutBeyond() {
  return (
    <Section background="light">
      <SectionHeader
        eyebrow="Beyond the Work"
        title="Community & Contribution"
        description="When I'm not building systems or writing stories, I'm giving back to communities that have shaped me."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-warm-gray-100"
          >
            <div className="p-3 bg-terracotta/10 rounded-xl text-terracotta w-fit mb-4">
              {activity.icon}
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-1">
              {activity.title}
            </h3>
            <p className="text-terracotta text-sm font-medium mb-1">
              {activity.role}
            </p>
            <p className="text-warm-gray-400 text-xs mb-3">
              {activity.period}
            </p>
            <p className="text-warm-gray-600 text-sm leading-relaxed">
              {activity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
