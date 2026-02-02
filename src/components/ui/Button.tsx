"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-terracotta text-white hover:bg-terracotta-dark focus:ring-terracotta shadow-lg shadow-terracotta/25 hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5",
      secondary: "bg-charcoal text-white hover:bg-charcoal-light focus:ring-charcoal shadow-lg shadow-charcoal/25 hover:shadow-xl hover:shadow-charcoal/30 hover:-translate-y-0.5",
      ghost: "text-charcoal hover:text-terracotta hover:bg-warm-gray-100 focus:ring-terracotta",
      outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white focus:ring-charcoal",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
