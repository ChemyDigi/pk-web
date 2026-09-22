import type { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo, ContactFaq } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | PK Web",
  description: "Get in touch with the PK Web team for project inquiries, partnerships, and technical consultations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactFaq />
    </>
  );
}
