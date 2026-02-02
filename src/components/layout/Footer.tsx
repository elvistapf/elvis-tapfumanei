"use client";

import Link from "next/link";
import { Linkedin, BookOpen, Github } from "lucide-react";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { href: "https://linkedin.com/in/elvistapfumanei", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/elvistapf", icon: Github, label: "GitHub" },
  { href: "https://triestoohard.substack.com/", icon: BookOpen, label: "Substack" },
  { href: "https://x.com/elvistapfumanei", icon: XIcon, label: "X" },
];

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-gray-400 border-t border-warm-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <Link href="/" className="text-lg font-bold text-white hover:text-terracotta-light transition-colors">
            Elvis Tapfumanei
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-warm-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-terracotta-light transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <span className="text-warm-gray-600 text-xs">
              © {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
