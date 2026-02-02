"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, BookOpen } from "lucide-react";
import { Section } from "@/components/ui/Section";

const currentActivities = [
  {
    icon: <Building2 size={20} />,
    text: "Building operational systems at",
    highlight: "Lula",
    color: "terracotta",
  },
  {
    icon: <Rocket size={20} />,
    text: "Founding",
    highlight: "Orbitrain & StudyChops",
    color: "sage",
  },
  {
    icon: <BookOpen size={20} />,
    text: "Writing a book on",
    highlight: "creativity and systems",
    color: "charcoal",
  },
];

export function CurrentlySection() {
  return (
    <Section background="white" className="py-12 md:py-16">
      <div className="text-center">
        <p className="text-warm-gray-500 text-sm uppercase tracking-wider mb-8">
          Currently
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {currentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className={`${
                activity.color === "terracotta" ? "text-terracotta" :
                activity.color === "sage" ? "text-sage" : "text-charcoal"
              }`}>
                {activity.icon}
              </span>
              <span className="text-warm-gray-600">
                {activity.text}{" "}
                <span className={`font-medium ${
                  activity.color === "terracotta" ? "text-terracotta" :
                  activity.color === "sage" ? "text-sage" : "text-charcoal"
                }`}>
                  {activity.highlight}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
