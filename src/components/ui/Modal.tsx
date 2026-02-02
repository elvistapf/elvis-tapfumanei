"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date?: string;
  readTime?: string;
  from?: string;
  amazonLink?: string;
}

export function Modal({ isOpen, onClose, title, content, date, readTime, from, amazonLink }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-warm-gray-200 px-6 py-4 flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl font-bold text-charcoal mb-2">{title}</h2>
                    <div className="flex flex-col gap-2">
                      {(date || readTime) && (
                        <div className="flex items-center gap-4 text-sm text-warm-gray-500">
                          {date && <span>{date}</span>}
                          {readTime && <span>• {readTime}</span>}
                        </div>
                      )}
                      {from && (
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-warm-gray-600">From {from}</span>
                          {amazonLink && (
                            <a 
                              href={amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-terracotta hover:text-terracotta-dark font-medium flex items-center gap-1"
                            >
                              Buy on Amazon
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-warm-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-warm-gray-600" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 py-6 overflow-y-auto flex-1 min-h-0">
                  <div className="prose prose-lg max-w-none">
                    {content.split('\n').map((paragraph, index) => {
                      if (paragraph.trim() === '') {
                        return <br key={index} />;
                      }
                      return <p key={index} className="mb-4 leading-relaxed text-warm-gray-700">{paragraph}</p>;
                    })}
                  </div>
                </div>
              </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
