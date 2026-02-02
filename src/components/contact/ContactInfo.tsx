"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, BookOpen, Clock, Briefcase, Rocket, PenTool } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Cape Town, South Africa",
    subtext: "Available for remote work globally",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "elvis@elvistapfumanei.com",
    href: "mailto:elvis@elvistapfumanei.com",
    subtext: "Response within 24 hours",
  },
  {
    icon: <Clock size={20} />,
    label: "Availability",
    value: "Open to opportunities",
    subtext: "Consulting, projects, collaborations",
  },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/elvistapfumanei" },
  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/elvistapf" },
  { icon: <BookOpen size={20} />, label: "Substack", href: "https://elvistapfumanei.substack.com" },
];

const services = [
  { icon: <Briefcase size={20} />, title: "Business Operations", description: "Process design, delivery management, transformation" },
  { icon: <Rocket size={20} />, title: "Product & Ventures", description: "Digital products, websites, consulting" },
  { icon: <PenTool size={20} />, title: "Writing", description: "Content creation, articles, books, copywriting" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-bold text-charcoal mb-6">
          Get In Touch
        </h2>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2 bg-terracotta/10 rounded-lg text-terracotta">
                {detail.icon}
              </div>
              <div>
                <p className="text-sm text-warm-gray-500">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="font-medium text-charcoal hover:text-terracotta transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="font-medium text-charcoal">{detail.value}</p>
                )}
                {detail.subtext && (
                  <p className="text-sm text-warm-gray-400">{detail.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-semibold text-charcoal mb-4">Connect</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-warm-gray-100 rounded-xl text-warm-gray-600 hover:bg-terracotta hover:text-white transition-all"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="font-semibold text-charcoal mb-4">What I Can Help With</h3>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-warm-gray-50 rounded-xl"
            >
              <div className="text-terracotta">{service.icon}</div>
              <div>
                <p className="font-medium text-charcoal text-sm">{service.title}</p>
                <p className="text-warm-gray-500 text-xs">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
