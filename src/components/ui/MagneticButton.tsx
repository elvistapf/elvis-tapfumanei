"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  href,
  external,
  variant = "primary",
  size = "md",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-terracotta text-white hover:bg-terracotta-dark shadow-lg shadow-terracotta/25",
    secondary:
      "bg-charcoal text-white hover:bg-charcoal-light shadow-lg shadow-charcoal/25",
    outline:
      "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const buttonClasses = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 overflow-hidden group",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className={buttonClasses}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
