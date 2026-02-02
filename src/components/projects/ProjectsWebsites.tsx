"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const websites = [
  {
    title: "RPM Events & Decor",
    category: "Events & Hospitality",
    description: "Crafted a sophisticated digital presence for a 20-year industry leader specializing in tailor-made events, hospitality, and high-end décor for elite clients. The platform showcases innovative designs and unforgettable experiences driven by a professional team.",
    tech: ["Custom Design", "Responsive Development", "Portfolio Showcase"],
    logo: "/rpm.png",
    link: {
      url: "https://rpmeventsanddecor.com/r/",
      text: "View Website"
    },
  },
  {
    title: "Cassandra Fit",
    category: "Fitness & Wellness",
    description: "Built a dynamic fitness platform dedicated to personalized training, wellness coaching, and transformative health journeys. The site emphasizes motivation, structured programs, and measurable results in a clean, engaging digital environment.",
    tech: ["Dynamic Platform", "Performance Tracking", "User Engagement"],
    logo: "/CassandraFitLogo1x.png",
    link: {
      url: "https://cassandrafit.com/",
      text: "View Website"
    },
  },
  {
    title: "Anchorr",
    category: "Dating & Social",
    description: "Designed and developed 'The First Dating App for Yachties' — a niche platform connecting maritime professionals worldwide. Built by crew, for crew, understanding the unique challenges of dating at sea with irregular schedules and constant travel.",
    tech: ["App Platform", "User Matching", "Mobile Integration"],
    logo: "/achorr-logo.png",
    link: {
      url: "https://anchorr.co/",
      text: "View Website"
    },
  },
  {
    title: "ChatFind",
    category: "Mobile Software",
    description: "Developed a comprehensive platform for mobile software specialists, showcasing expertise in native marketplace development, gamification, and team communication apps for smartphones.",
    tech: ["Software Showcase", "Technical Platform", "Service Presentation"],
    logo: "/chatfind.png",
    link: {
      url: "https://chatfind.com/",
      text: "View Website"
    },
  },
  {
    title: "E-Health Planner",
    category: "Healthcare Tech",
    description: "Crafted a comprehensive health management tool featuring appointment scheduling, personalized wellness tracking, and practical resources for better health outcomes. Simplifies medical management through accessible digital solutions.",
    tech: ["Health Platform", "Scheduling System", "Wellness Tracking"],
    logo: "/EHEALTH.png",
    link: {
      url: "https://www.ehealthplanner.com/",
      text: "View Website"
    },
  },
  {
    title: "Takunda Chitaka",
    category: "Professional Portfolio",
    description: "Created a distinctive professional portfolio platform showcasing expertise and accomplishments. Designed to make a lasting impression with clean aesthetics and strategic content presentation.",
    tech: ["Portfolio Design", "Personal Branding", "Professional Showcase"],
    logo: "/TYC.jpg",
    link: {
      url: "https://takundachitaka.com/",
      text: "View Website"
    },
  },
  {
    title: "Blue Aqua Projects",
    category: "Industrial Solutions",
    description: "Built a robust platform for a leading industrial solutions provider specializing in water treatment, electrical instrumentation, and electro-mechanical systems across South Africa and Sub-Saharan Africa.",
    tech: ["Industrial Platform", "Service Showcase", "Technical Solutions"],
    logo: "/bap.png",
    link: {
      url: "https://www.blueaquaprojects.com/",
      text: "View Website"
    },
  },
  {
    title: "Hosting Heaven",
    category: "Community Platform",
    description: "Designed a Christian community platform led by Melody Rutendo Gambiza, creating an accessible digital space for faith-based connection and engagement with clean, user-friendly design principles.",
    tech: ["Community Platform", "User-Friendly Design", "Accessibility"],
    logo: "/hosting-heaven.jpg",
    link: {
      url: "http://hostingheaven.online/",
      text: "View Website"
    },
  },
];

export function ProjectsWebsites() {
  return (
    <Section background="light" id="websites">
      <SectionHeader
        eyebrow="Websites"
        title="Digital Creations"
        description="Websites and platforms built for clients and personal projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
        {websites.map((site, index) => (
          <motion.div
            key={site.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-white rounded-2xl overflow-hidden border border-warm-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            {/* Logo/Image */}
            <div className="aspect-video bg-gradient-to-br from-warm-gray-100 to-warm-gray-200 relative overflow-hidden">
              {site.logo ? (
                <img 
                  src={site.logo} 
                  alt={`${site.title} logo`} 
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe size={32} className="text-warm-gray-300" />
                </div>
              )}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col h-full">
              <p className="text-terracotta text-sm font-medium mb-1">{site.category}</p>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                {site.title}
              </h3>
              <p className="text-warm-gray-600 text-sm leading-relaxed flex-grow">
                {site.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-terracotta/20 mb-4 mt-auto"></div>

              <div className="flex flex-wrap gap-2 mb-4 w-full">
                {site.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-warm-gray-100 text-warm-gray-600 text-xs rounded-full whitespace-nowrap w-[calc(50%-4px)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {site.link && site.link.url && (
                <a
                  href={site.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-terracotta text-sm font-medium hover:text-terracotta-dark transition-colors"
                >
                  {site.link.text}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
