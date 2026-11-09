"use client";

import React from "react";
import Image from "next/image";
import "@/css/home/HomeServices.css";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "1",
    title: "Life & Health Insurance Planning",
    tagline: "Protecting You and Your Loved Ones",
    description:
      "Personalized guidance on life and health insurance solutions to help individuals and families prepare for life's uncertainties, protect their loved ones, and manage unexpected medical expenses.",
  },
  {
    number: "2",
    title: "Retirement & Income Protection Planning",
    tagline: "Securing Your Financial Independence",
    description:
      "Advising on retirement planning and income protection solutions to help individuals prepare for life after retirement, maintain financial stability, and protect their income against unforeseen circumstances.",
  },
  {
    number: "3",
    title: "Investment & Wealth Planning",
    tagline: "Building a Stronger Financial Future",
    description:
      "Guidance on insurance-linked investment and savings solutions that can support long-term financial goals, wealth accumulation, and financial security, based on individual needs and risk profiles.",
  },
  {
    number: "4",
    title: "Child Education Planning",
    tagline: "Investing in Your Child's Dreams",
    description:
      "Helping parents plan ahead for their children's educational expenses through suitable savings and insurance solutions, creating a stronger financial foundation for their future.",
  },
  {
    number: "5",
    title: "Strategic Insurance Partnerships",
    tagline: "Creating Partnerships That Make a Difference",
    description:
      "Developing and managing strategic insurance partnerships with professional associations, organizations, and institutions to make valuable insurance solutions more accessible to their members and communities.",
  },
  {
    number: "6",
    title: "Insurance Team Building & Leadership Development",
    tagline: "Building Teams. Developing Leaders. Creating Success.",
    description:
      "Recruiting, developing, and leading insurance professionals by creating opportunities for growth, strengthening professional capabilities, and building high-performing teams.",
  },
  {
    number: "7",
    title: "Personal Coaching & Mentoring for Advisors",
    tagline: "Empowering Every Advisor to Reach Their Potential",
    description:
      "Providing personalized coaching, practical sales guidance, and continuous mentoring to help insurance advisors improve their performance, build confidence, develop professional skills, and achieve their career ambitions.",
  },
];

export default function HomeServices() {
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
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
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
          2. "How We Protect Your Future" Services Grid
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

        {/* Content Layout: Left Image Box + Right Services List */}
        <div className="home-services-grid">
          {/* Left Column: Image Card */}
          <div className="home-services-image-col">
            <div className="home-services-image-card">
              <Image
                src="/images/home/PradeepLiyanage.jpg"
                alt="Pradeep Liyanage - Insurance & Financial Advisory"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="home-services-img"
              />
            </div>
          </div>

          {/* Right Column: 7 Services with Icons */}
          <div className="home-services-list-col">
            {services.map((service) => (
              <div key={service.title} className="home-services-item">
                {/* Custom Ascending Bar Chart Icon matching reference */}
                <div className="home-services-icon-wrapper" aria-hidden="true">
                  <svg
                    className="home-services-item-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="2" y="13" width="3.5" height="8" rx="0.5" />
                    <rect x="7.5" y="8" width="3.5" height="13" rx="0.5" />
                    <rect x="13" y="3" width="3.5" height="18" rx="0.5" />
                    <rect x="18.5" y="16" width="3" height="5" rx="0.5" />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="home-services-item-content">
                  <h3 className="home-services-item-title">
                    {service.number}. {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="home-services-item-tagline">
                      {service.tagline}
                    </p>
                  )}
                  <p className="home-services-item-desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
