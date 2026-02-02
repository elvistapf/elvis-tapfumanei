"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  tilt?: boolean;
}

export function Card({ children, className, hover = true, glass = false, tilt = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -6);
    setRotateY(((x - centerX) / centerX) * 6);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt ? { rotateX, rotateY } : undefined}
      whileHover={hover && !tilt ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={tilt ? { transformStyle: "preserve-3d", perspective: 1000 } : undefined}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300 group",
        glass 
          ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-xl shadow-warm-gray-200/30" 
          : "bg-white border border-warm-gray-100 shadow-lg shadow-warm-gray-200/50",
        hover && "hover:shadow-2xl hover:shadow-warm-gray-300/40",
        className
      )}
    >
      {children}
      {/* Glare effect for tilt cards */}
      {tilt && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  accentColor?: "terracotta" | "sage" | "charcoal";
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  link, 
  linkText = "Explore",
  accentColor = "terracotta" 
}: ServiceCardProps) {
  const accentColors = {
    terracotta: "group-hover:text-terracotta group-hover:border-terracotta",
    sage: "group-hover:text-sage group-hover:border-sage",
    charcoal: "group-hover:text-charcoal group-hover:border-charcoal",
  };

  const iconBgColors = {
    terracotta: "bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-white",
    sage: "bg-sage/10 text-sage group-hover:bg-sage group-hover:text-white",
    charcoal: "bg-charcoal/10 text-charcoal group-hover:bg-charcoal group-hover:text-white",
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-warm-gray-200/30 border border-warm-gray-100/50 hover:shadow-2xl hover:shadow-warm-gray-300/40 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300", iconBgColors[accentColor])}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-terracotta transition-colors duration-300">
          {title}
        </h3>
        <p className="text-warm-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        {link && (
          <a 
            href={link}
            className={cn(
              "inline-flex items-center text-sm font-semibold text-warm-gray-500 border-b-2 border-transparent transition-all duration-300",
              accentColors[accentColor]
            )}
          >
            {linkText} 
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  image?: string;
  link?: string;
  metrics?: { label: string; value: string }[];
}

export function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  tags, 
  image,
  link,
  metrics 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-warm-gray-200/50 border border-warm-gray-100 hover:shadow-xl hover:shadow-warm-gray-300/50 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-warm-gray-100 to-warm-gray-200 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-warm-gray-400">
            <span className="text-sm">Project Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        {subtitle && (
          <p className="text-terracotta text-sm font-medium mb-1">{subtitle}</p>
        )}
        <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
          {title}
        </h3>
        <p className="text-warm-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {metrics && metrics.length > 0 && (
          <div className="flex gap-4 mb-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-bold text-terracotta">{metric.value}</p>
                <p className="text-xs text-warm-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-warm-gray-100 text-warm-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface ArticleCardProps {
  title: string;
  excerpt?: string;
  category: string;
  readTime?: string;
  date?: string;
  link?: string;
}

export const ArticleCard = ({ title, excerpt, category, readTime, date, link }: ArticleCardProps) => {
  const Component = link ? motion.a : motion.div;
  const linkProps = link ? {
    href: link,
    target: link?.startsWith('http') ? "_blank" : "_self",
    rel: link?.startsWith('http') ? "noopener noreferrer" : undefined,
  } : {};

  return (
    <Component
      {...linkProps}
      className={`block bg-white rounded-2xl p-6 border border-warm-gray-100 hover:shadow-lg hover:border-terracotta/30 transition-all duration-300 group ${link ? '' : 'cursor-default'}`}
      whileHover={link ? { y: -4 } : {}}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
          {category}
        </span>
        {readTime && (
          <span className="text-warm-gray-400 text-xs">{readTime}</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
        {title}
      </h3>
      {excerpt && (
        <p className="text-warm-gray-600 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        {date && (
          <span className="inline-flex items-center justify-center gap-2 px-8 py-2 bg-terracotta text-white text-sm font-medium rounded-full hover:bg-terracotta-dark transition-colors min-w-[120px]">
            {date}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </span>
        )}
      </div>
    </Component>
  );
}
