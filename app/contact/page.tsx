import type { Metadata } from "next";
import { ContactHero, ContactFaq } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Pradeep Liyanage — Insurance Advisor",
  description: "Connect with Pradeep Liyanage for personalized life insurance, retirement planning, and financial security guidance.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFaq />
    </>
  );
}
