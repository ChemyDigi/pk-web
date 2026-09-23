"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/about/AboutServices.css";

interface ServiceTab {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const serviceTabs: ServiceTab[] = [
  {
    id: "financial-planning",
    name: "Financial Planning",
    title: "Financial Planning",
    description:
      "Build a secure financial future with personalised planning tailored to your goals, income, and life stage. From wealth protection to retirement readiness, every strategy is designed to help you grow, manage, and preserve your finances with confidence.",
    image: "/images/about/Financial Planning.jpg",
  },
  {
    id: "life-insurance",
    name: "Life Insurance",
    title: "Life Insurance",
    description:
      "Secure your loved ones' financial wellbeing with tailored life insurance solutions customized to your family's needs, future responsibilities, and lifelong milestones.",
    image: "/images/about/Financial Planning.jpg",
  },
  {
    id: "general-insurance",
    name: "General Insurance",
    title: "General Insurance",
    description:
      "Protect your valuable assets, property, and everyday security against unforeseen risks with dependable, responsive general insurance solutions.",
    image: "/images/about/Financial Planning.jpg",
  },
  {
    id: "homeowners-insurance",
    name: "Homeowners Insurance",
    title: "Homeowners Insurance",
    description:
      "Safeguard your home, structure, and cherished personal possessions with comprehensive homeowners protection designed for total peace of mind.",
    image: "/images/about/Financial Planning.jpg",
  },
];

export default function AboutServices() {
  const [activeTabId, setActiveTabId] = useState<string>("financial-planning");

  const activeService =
    serviceTabs.find((s) => s.id === activeTabId) || serviceTabs[0];

  return (
    <section className="about-services-section" id="services">
      <div className="about-services-container">
        <div className="about-services-grid">
          
          {/* Left Column: Heading, Intro, and Interactive Services Tabs */}
          <div className="about-services-left-col">
            {/* Badge */}
            <div className="about-services-badge">
              <span className="about-services-badge-line" aria-hidden="true" />
              <span className="about-services-badge-text">Services</span>
            </div>

            {/* Headline */}
            <h2 className="about-services-heading">
              Expert Protection for Every <br />
              Stage of Life
            </h2>

            {/* Introduction Paragraph */}
            <p className="about-services-intro">
              Personalised insurance solutions thoughtfully designed around your health, family,
              career, lifestyle, and long-term financial goals. With transparent guidance, trusted
              advice, and dedicated support beyond the initial policy, every plan is carefully
              structured to protect what matters most and provide lasting confidence through every
              stage of life.
            </p>

            {/* Interactive Tabs List */}
            <div className="about-services-tabs-list" role="tablist">
              {serviceTabs.map((service) => {
                const isActive = service.id === activeTabId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTabId(service.id)}
                    className={`about-services-tab-btn ${
                      isActive
                        ? "about-services-tab-active"
                        : "about-services-tab-inactive"
                    }`}
                  >
                    <span className="about-services-tab-name">
                      {service.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Service Showcase Image & Details */}
          <div className="about-services-right-col">
            <div className="about-services-card" key={activeService.id}>
              {/* Image Preview */}
              <div className="about-services-image-wrapper">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={900}
                  height={560}
                  priority
                  className="about-services-img"
                />
              </div>

              {/* Service Details */}
              <div className="about-services-details">
                <h3 className="about-services-title">{activeService.title}</h3>
                <p className="about-services-desc">{activeService.description}</p>

                {/* Make a Reservation CTA Button */}
                <div className="about-services-cta">
                  <Link href="/contact" className="about-services-btn">
                    MAKE A RESERVATION
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
