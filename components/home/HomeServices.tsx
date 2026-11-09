"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeServices.css";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "life-health",
    title: "Life & Health Insurance Planning",
    tagline: "Protecting You and Your Loved Ones",
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
    id: "retirement-income",
    title: "Retirement & Income Protection Planning",
    tagline: "Securing Your Financial Independence",
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
    id: "investment-wealth",
    title: "Investment & Wealth Planning",
    tagline: "Building a Stronger Financial Future",
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
    id: "child-education",
    title: "Child Education Planning",
    tagline: "Investing in Your Child's Dreams",
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
    id: "strategic-partnerships",
    title: "Strategic Insurance Partnerships",
    tagline: "Creating Partnerships That Make a Difference",
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
    id: "team-building-leadership",
    title: "Insurance Team Building & Leadership Development",
    tagline: "Building Teams. Developing Leaders. Creating Success.",
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
    id: "coaching-mentoring",
    title: "Personal Coaching & Mentoring for Advisors",
    tagline: "Empowering Every Advisor to Reach Their Potential",
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
          2. "How We Protect Your Future" Services Section
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

        {/* Content Layout: Left Photo + Right Services List */}
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

          {/* Right Column: 7 Services List + Button to About Page Services */}
          <div className="home-services-list-col">
            <div className="home-services-items-list" role="list">
              {services.map((service) => (
                  <div
                  key={service.id}
                  className="home-services-item-card"
                  role="listitem"
                >
                  <div className="home-services-item-left">
                    {/* Distinct Icon */}
                    <div className="home-services-item-icon-box" aria-hidden="true">
                      {service.icon}
                    </div>

                    {/* Title and Tagline */}
                    <div className="home-services-item-text">
                      <h3 className="home-services-item-title">
                        {service.title}
                      </h3>
                      <p className="home-services-item-tagline">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Prominent CTA Button redirecting to About Services */}
          <div className="home-services-cta-row">
            <Link href="/about#services" className="home-services-explore-btn">
              <span>VIEW ALL SERVICES & DETAILS</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}
