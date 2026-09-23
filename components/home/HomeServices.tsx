"use client";

import React from "react";
import Image from "next/image";
import "@/css/home/HomeServices.css";

const services = [
  {
    title: "Financial Planning",
    description:
      "Create a clear path toward your financial goals with personalized strategies for wealth protection and long term security.",
  },
  {
    title: "Life Insurance",
    description:
      "Secure your loved ones' financial future with life insurance solutions tailored to your goals and responsibilities.",
  },
  {
    title: "General Insurance",
    description:
      "Protect your valuable assets and everyday life with reliable insurance solutions designed for peace of mind.",
  },
  {
    title: "Homeowners Insurance",
    description:
      "Safeguard your home and everything you've built against life's unexpected events with comprehensive home protection.",
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
            The true value of insurance is never measured on the day a policy is signed.
            It is measured in the moments life becomes uncertain when preparation,
            trust, and the right guidance protect everything you&apos;ve worked so hard to build.
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
            Financial confidence isn&apos;t <br className="home-services-br" />
            found. It&apos;s carefully built
          </h2>
        </div>

        {/* Content Layout: Left Empty Image Box + Right Services List */}
        <div className="home-services-grid">
          {/* Left Column: Empty Image Placeholder Box */}
          <div className="home-services-image-col">
            <div
              className="home-services-placeholder-box"
              role="img"
              aria-label="Empty image placeholder (image to be added later)"
            />
          </div>

          {/* Right Column: 4 Services with Icons */}
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
                  <h3 className="home-services-item-title">{service.title}</h3>
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
