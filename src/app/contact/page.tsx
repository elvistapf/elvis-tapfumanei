import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | Elvis Tapfumanei",
  description: "Get in touch for business operations consulting, digital products, or creative writing collaborations. Based in Cape Town, available globally.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
