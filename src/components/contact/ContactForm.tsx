"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  { id: "operations", label: "Business Operations" },
  { id: "product", label: "Product / Ventures" },
  { id: "website", label: "Website Development" },
  { id: "writing", label: "Writing / Content" },
  { id: "consulting", label: "Consulting" },
  { id: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceChange = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const selectedService = serviceOptions.find(s => s.id === formData.service);
    const subject = encodeURIComponent(`Website Enquiry: ${selectedService?.label || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nInterested in: ${selectedService?.label || "Not specified"}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:elvis@elvistapfumanei.com?subject=${subject}&body=${body}`;
    
    // Show success state briefly
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 border border-warm-gray-100 shadow-lg text-center"
      >
        <div className="p-4 bg-sage/10 rounded-full w-fit mx-auto mb-4">
          <CheckCircle size={32} className="text-sage" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-2">
          Email Client Opened
        </h3>
        <p className="text-warm-gray-600 mb-6">
          Your email client should have opened with the message pre-filled. 
          If it didn&apos;t, you can email me directly at{" "}
          <a href="mailto:elvis@elvistapfumanei.com" className="text-terracotta hover:underline">
            elvis@elvistapfumanei.com
          </a>
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", service: "", message: "" });
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 border border-warm-gray-100 shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-charcoal mb-2">
          Send a Message
        </h2>
        <p className="text-warm-gray-500 text-sm mb-6">
          Fill out the form and your email client will open with the message ready to send.
        </p>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Your Email <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            I&apos;m interested in <span className="text-terracotta">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {serviceOptions.map((service) => (
              <label
                key={service.id}
                className="flex items-center p-3 rounded-xl border border-warm-gray-200 bg-white hover:border-warm-gray-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={formData.service === service.id}
                  onChange={() => handleServiceChange(service.id)}
                  className="w-4 h-4 text-terracotta border-warm-gray-300 focus:ring-2 focus:ring-terracotta/20"
                />
                <span className="ml-2 text-sm font-medium text-warm-gray-700">
                  {service.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
            Your Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-warm-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
            placeholder="Tell me about your project or idea..."
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Opening Email..."
          ) : (
            <>
              Send Message
              <Send size={18} className="ml-2" />
            </>
          )}
        </Button>

        <p className="text-warm-gray-400 text-xs text-center">
          Your email client will open with the message pre-filled
        </p>
      </form>
    </motion.div>
  );
}
