import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Pradeep Liyanage",
        givenName: "Pradeep",
        familyName: "Liyanage",
        jobTitle: siteConfig.profession,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.organization,
          url: siteConfig.organizationUrl,
          address: {
            "@type": "PostalAddress",
            addressCountry: siteConfig.countryCode,
          },
        },
        url: siteConfig.url,
        image: `${siteConfig.url}/images/home/PradeepLiyanage.jpg`,
        description: siteConfig.description,
        nationality: {
          "@type": "Country",
          name: siteConfig.country,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.countryCode,
        },
        sameAs: [
          siteConfig.social.linkedin,
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.tiktok,
        ],
        knowsAbout: siteConfig.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: "en-LK",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageJsonLd({
  faqs,
}: {
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const schema: { [key: string]: unknown } = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact/#webpage`,
        url: `${siteConfig.url}/contact`,
        name: "Contact Pradeep Liyanage | Insurance & Financial Protection",
        description:
          "Connect with Pradeep Liyanage, Regional Sales Manager at Union Assurance Sri Lanka, for insurance solutions, retirement planning, and financial consultations.",
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      ...(faqs && faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${siteConfig.url}/contact/#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

