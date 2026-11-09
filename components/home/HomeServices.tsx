"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeServices.css";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    number: "1",
    title: "Life & Health Insurance Planning",
    tagline: "Protecting You and Your Loved Ones",
    description:
      "Personalized guidance on life and health insurance solutions to help individuals and families prepare for life's uncertainties, protect their loved ones, and manage unexpected medical expenses.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Retirement & Income Protection Planning",
    tagline: "Securing Your Financial Independence",
    description:
      "Advising on retirement planning and income protection solutions to help individuals prepare for life after retirement, maintain financial stability, and protect their income against unforeseen circumstances.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <path d="M12 2v2" />
        <path d="M12 4a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z" />
        <path d="M12 13v6a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Investment & Wealth Planning",
    tagline: "Building a Stronger Financial Future",
    description:
      "Guidance on insurance-linked investment and savings solutions that can support long-term financial goals, wealth accumulation, and financial security, based on individual needs and risk profiles.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="m3 14 6-6 4 4 8-8" />
        <polyline points="15 4 21 4 21 10" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Child Education Planning",
    tagline: "Investing in Your Child's Dreams",
    description:
      "Helping parents plan ahead for their children's educational expenses through suitable savings and insurance solutions, creating a stronger financial foundation for their future.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Strategic Insurance Partnerships",
    tagline: "Creating Partnerships That Make a Difference",
    description:
      "Developing and managing strategic insurance partnerships with professional associations, organizations, and institutions to make valuable insurance solutions more accessible to their members and communities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    number: "6",
    title: "Insurance Team Building & Leadership Development",
    tagline: "Building Teams. Developing Leaders. Creating Success.",
    description:
      "Recruiting, developing, and leading insurance professionals by creating opportunities for growth, strengthening professional capabilities, and building high-performing teams.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "7",
    title: "Personal Coaching & Mentoring for Advisors",
    tagline: "Empowering Every Advisor to Reach Their Potential",
    description:
      "Providing personalized coaching, practical sales guidance, and continuous mentoring to help insurance advisors improve their performance, build confidence, develop professional skills, and achieve their career ambitions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="home-services-icon-svg"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export default function HomeServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="home-services-section" id="services">
      {/* ====================================================================
          1. Quote & Philosophy Statement Banner
          ==================================================================== */}
      <div className="home-quote-container">
        <div className="home-quote-wrapper">
          {/* Top-Left Opening Quote */}
          <span className="home-quote-mark home-quote-mark-open" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </svg>
          </span>

          {/* Quote Text */}
          <p className="home-quote-text">
            True success is not just about protecting lives or achieving personal milestones. It is about building meaningful partnerships, developing people, nurturing future leaders, and empowering every individual to discover their potential and achieve more than they imagined.
          </p>

          {/* Bottom-Right Closing Quote */}
          <span className="home-quote-mark home-quote-mark-close" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </svg>
          </span>
        </div>

        {/* Author Avatar & Name */}
        <div className="home-quote-author">
          <div className="home-quote-avatar">
            <Image
              src="/images/home/Pradeep.png"
              alt="Pradeep Liyanage"
              width={80}
              height={80}
              className="home-quote-avatar-img"
            />
          </div>
          <span className="home-quote-author-name">Pradeep Liyanage</span>
        </div>
      </div>

      {/* ====================================================================
          2. "How We Protect Your Future" Services Accordion Showcase
          ==================================================================== */}
      <div className="home-services-container">
        {/* Section Header */}
        <div className="home-services-header">
          {/* Badge */}
          <div className="home-services-badge">
            <span className="home-services-badge-line" aria-hidden="true" />
            <span className="home-services-badge-text">How We Protect Your Future</span>
          </div>

          {/* Heading */}
          <h2 className="home-services-heading">
            Helping individuals, families, and organizations make informed decisions about financial protection, long-term security, and future aspirations through personalized insurance advice and strategic partnerships.
          </h2>
        </div>

        {/* Content Layout: Sticky Left Photo + Right Interactive Accordion */}
        <div className="home-services-grid">
          {/* Left Column: Image Card */}
          <div className="home-services-image-col">
            <div className="home-services-image-card">
              <Image
                src="/images/home/PradeepLiyanage.jpg"
                alt="Pradeep Liyanage - Insurance & Financial Advisory"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="home-services-img"
                priority
              />
            </div>
          </div>

          {/* Right Column: 7 Services Interactive Accordion List */}
          <div className="home-services-list-col">
            <div className="home-services-accordion-list" role="tablist" aria-label="Insurance and Advisory Services">
              {services.map((service, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={service.title}
                    className={`home-services-accordion-card ${isOpen ? "active" : ""}`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      className="home-services-accordion-btn"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                      aria-controls={`service-panel-${service.number}`}
                      id={`service-trigger-${service.number}`}
                    >
                      <div className="home-services-accordion-header-left">
                        {/* Distinct Icon */}
                        <div className="home-services-accordion-icon" aria-hidden="true">
                          {service.icon}
                        </div>

                        {/* Title and Tagline */}
                        <div className="home-services-accordion-titles">
                          <h3 className="home-services-accordion-title">
                            {service.title}
                          </h3>
                          <p className="home-services-accordion-tagline">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Expand / Collapse Chevron */}
                      <div className="home-services-accordion-arrow" aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {/* Smooth Collapsible Content Panel */}
                    <div
                      id={`service-panel-${service.number}`}
                      role="region"
                      aria-labelledby={`service-trigger-${service.number}`}
                      className={`home-services-accordion-panel ${isOpen ? "open" : ""}`}
                    >
                      <div className="home-services-accordion-panel-inner">
                        <div className="home-services-accordion-desc-wrap">
                          <p className="home-services-accordion-desc">
                            {service.description}
                          </p>

                          <Link
                            href="/contact"
                            className="home-services-accordion-cta"
                          >
                            <span>Request Consultation</span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
