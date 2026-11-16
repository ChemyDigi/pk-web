import type { Metadata } from "next";
import { ContactHero, ContactFaq } from "@/components/contact";
import { ContactPageJsonLd } from "@/components/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Pradeep Liyanage | Financial Protection & Guidance",
  },
  description:
    "Connect with Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, for personalized insurance, retirement planning, and financial security guidance.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Pradeep Liyanage | Financial Protection & Guidance",
    description:
      "Connect with Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, for personalized insurance, retirement planning, and financial security guidance.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 900,
        height: 1349,
        alt: "Contact Pradeep Liyanage - Insurance Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pradeep Liyanage | Financial Protection & Guidance",
    description:
      "Connect with Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, for personalized insurance, retirement planning, and financial security guidance.",
    images: [siteConfig.ogImage],
  },
};

const contactFaqs = [
  {
    question: "What insurance solutions do you provide?",
    answer:
      "Protection solutions are tailored for individuals, families, professionals, and member communities, covering key areas such as health, life stages, retirement.",
  },
  {
    question: "How do I know which policy is right for me?",
    answer:
      "Through a comprehensive needs discovery conversation, we assess your financial responsibilities, goals, current coverage, and budget to recommend the exact solution tailored to your life stage.",
  },
  {
    question: "Can you review my existing insurance policies?",
    answer:
      "Yes. I provide objective, complimentary policy audits to identify gaps in coverage, duplicate benefits, or opportunities to optimize your premiums.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, the initial discovery session is completely confidential and complimentary with no obligation to purchase.",
  },
  {
    question: "Can insurance be arranged according to my budget?",
    answer:
      "Absolutely. Plans are customizable and designed around what you can comfortably commit to, ensuring essential protection without financial strain.",
  },
  {
    question: "What support is available after purchasing a policy?",
    answer:
      "I remain your dedicated advisor throughout the lifetime of your policy — handling annual reviews, beneficiary updates, and personally managing claims when you need it most.",
  },
  {
    question: "Do you provide insurance solutions for professional associations?",
    answer:
      "Yes, through customized corporate and group schemes, I design tailored risk protection packages for executive bodies, corporate entities, and professional associations.",
  },
  {
    question: "How long does it take to arrange a policy?",
    answer:
      "Depending on the policy type and medical underwriting requirements, most plans can be established within 3 to 7 business days following submission.",
  },
  {
    question: "Is my personal and financial information kept confidential?",
    answer:
      "Strict confidentiality and professional ethics are paramount. All client information is protected under industry compliance and privacy standards.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd faqs={contactFaqs} />
      <ContactHero />
      <ContactFaq />
    </>
  );
}
