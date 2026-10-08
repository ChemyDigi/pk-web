import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/services/ServicesList.css";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "family-security",
    title: "Life & Family Security",
    description:
      "Helping individuals and families build a more secure tomorrow with the right protection.",
    image: "/images/services/service-family.jpg",
    href: "/contact?service=family-security",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "health-medical",
    title: "Health & Medical Coverage",
    description:
      "Supporting healthier lives with solutions that ease financial worries during challenging times.",
    image: "/images/services/service-health.jpg",
    href: "/contact?service=health-medical",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: "retirement-planning",
    title: "Retirement & Long-Term Planning",
    description:
      "Guiding clients to achieve financial independence and peace of mind.",
    image: "/images/services/service-retirement-plan.jpg",
    href: "/contact?service=retirement-planning",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "income-protection",
    title: "Income & Financial Protection",
    description:
      "Helping professionals and business owners safeguard their income and maintain stability.",
    image: "/images/services/service-income.png",
    href: "/contact?service=income-protection",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    id: "policy-education",
    title: "Policy Awareness & Education",
    description:
      "Creating awareness about the value of life insurance through simple, transparent and practical guidance.",
    image: "/images/services/service-policy.jpg",
    href: "/contact?service=policy-education",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    id: "after-sales-support",
    title: "After-Sales Support",
    description:
      "Building long-term relationships through continuous support and genuine care.",
    image: "/images/services/service-support.png",
    href: "/contact?service=after-sales-support",
    icon: (
      <svg
        className="services-card-icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ServicesList() {
  return (
    <section id="services-list" className="services-list-section" aria-label="Services Overview">
      <div className="services-list-container">
        {/* Header */}
        <div className="services-list-header">
          <p className="services-list-eyebrow">MY SERVICES</p>
          <h2 className="services-list-title">
            Comprehensive insurance solutions designed to support you{" "}
            <br className="services-title-br" />
            and your loved ones today, tomorrow, and for what&apos;s ahead.
          </h2>
        </div>

        {/* 3 x 2 Cards Grid */}
        <div className="services-cards-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="services-card"
              aria-label={service.title}
            >
              {/* Card Background Media */}
              <div className="services-card-bg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="services-card-image"
                />
                <div className="services-card-gradient-overlay" />
              </div>

              {/* Top Floating Icon */}
              <div className="services-card-icon-wrap" aria-hidden="true">
                {service.icon}
              </div>

              {/* Bottom Content Area */}
              <div className="services-card-content">
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-desc">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
