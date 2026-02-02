"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  { id: "operations", label: "Business Operations" },
  { id: "product", label: "Product / Ventures" },
  { id: "website", label: "Website Development" },
  { id: "writing", label: "Writing / Content" },
  { id: "consulting", label: "Consulting" },
  { id: "other", label: "Other" },
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Website Enquiry: ${formData.services.join(", ") || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nInterested in: ${formData.services.join(", ") || "Not specified"}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:elvis@elvistapfumanei.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", services: [], message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-3xl shadow-2xl z-[201] overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-warm-gray-100 text-warm-gray-500 hover:bg-warm-gray-200 hover:text-charcoal transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="p-4 bg-sage/10 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle size={32} className="text-sage" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    Email Client Opened
                  </h3>
                  <p className="text-warm-gray-600 mb-6">
                    Your email client should have opened with the message pre-filled. 
                    If it didn&apos;t, email me directly at{" "}
                    <a href="mailto:elvis@elvistapfumanei.com" className="text-terracotta hover:underline">
                      elvis@elvistapfumanei.com
                    </a>
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 bg-warm-gray-100 text-charcoal rounded-full font-medium hover:bg-warm-gray-200 transition-colors"
                    >
                      Send Another
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta-dark transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-charcoal mb-2">
                    Get In Touch
                  </h2>
                  <p className="text-warm-gray-500 text-sm mb-6">
                    Fill out the form and your email client will open with the message ready to send.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all text-charcoal"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all text-charcoal"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        I&apos;m interested in
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceToggle(service.id)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                              formData.services.includes(service.id)
                                ? "bg-terracotta text-white"
                                : "bg-warm-gray-100 text-warm-gray-600 hover:bg-warm-gray-200"
                            }`}
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="modal-message" className="block text-sm font-medium text-charcoal mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        id="modal-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none text-charcoal"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-terracotta text-white rounded-full font-semibold hover:bg-terracotta-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Opening Email..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
