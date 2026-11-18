"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/about/AboutServices.css";

interface ServiceTab {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

const serviceTabs: ServiceTab[] = [
  {
    id: "life-health",
    name: "Life & Health Insurance Planning",
    title: "Life & Health Insurance Planning",
    tagline: "Protecting You and Your Loved Ones",
    description:
    "Personalized guidance on life and health insurance solutions to help individuals and families prepare for life's uncertainties, protect their loved ones, and manage unexpected medical expenses.",
    image: "/images/services/service-family.jpg",
  },
  {
    id: "retirement-income",
    name: "Retirement & Income Protection Planning",
    title: "Retirement & Income Protection Planning",
    tagline: "Securing Your Financial Independence",
    description:
    "Advising on retirement planning and income protection solutions to help individuals prepare for life after retirement, maintain financial stability, and protect their income against unforeseen circumstances.",
    image: "/images/services/service-retirement-plan.jpg",
  },
  {
    id: "investment-wealth",
    name: "Investment & Wealth Planning",
    title: "Investment & Wealth Planning",
    tagline: "Building a Stronger Financial Future",
    description:
    "Guidance on insurance-linked investment and savings solutions that can support long-term financial goals, wealth accumulation, and financial security, based on individual needs and risk profiles.",
    image: "/images/about/Financial Planning.jpg",
  },
  {
    id: "child-education",
    name: "Child Education Planning",
    title: "Child Education Planning",
    tagline: "Investing in Your Child's Dreams",
    description:
    "Helping parents plan ahead for their children's educational expenses through suitable savings and insurance solutions, creating a stronger financial foundation for their future.",
    image: "/images/services/service-policy.jpg",
  },
  {
    id: "strategic-partnerships",
    name: "Strategic Insurance Partnerships",
    title: "Strategic Insurance Partnerships",
    tagline: "Creating Partnerships That Make a Difference",
    description:
      "Developing and managing strategic insurance partnerships with professional associations, organizations, and institutions to make valuable insurance solutions more accessible to their members and communities.",
    image: "/images/services/service-support.png",
  },
  {
    id: "team-building-leadership",
    name: "Insurance Team Building & Leadership Development",
    title: "Insurance Team Building & Leadership Development",
    tagline: "Building Teams. Developing Leaders. Creating Success.",
    description:
      "Recruiting, developing, and leading insurance professionals by creating opportunities for growth, strengthening professional capabilities, and building high-performing teams.",
    image: "/images/services/service-income.png",
  },
  {
    id: "coaching-mentoring",
    name: "Personal Coaching & Mentoring for Advisors",
    title: "Personal Coaching & Mentoring for Advisors",
    tagline: "Empowering Every Advisor to Reach Their Potential",
    description:
      "Providing personalized coaching, practical sales guidance, and continuous mentoring to help insurance advisors improve their performance, build confidence, develop professional skills, and achieve their career ambitions.",
    image: "/images/home/PradeepLiyanage.jpg",
  },
];

export default function AboutServices() {
  const [activeTabId, setActiveTabId] = useState<string>("life-health");
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleSelectService = (serviceId: string) => {
    setActiveTabId(serviceId);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const serviceParam = params.get("service");
        if (serviceParam && serviceTabs.some((s) => s.id === serviceParam)) {
          setActiveTabId(serviceParam);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

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

              {/* Interactive Tabs List (All 7 Services) */}
              <div className="about-services-tabs-list" role="tablist" aria-label="Insurance Services Navigation">
                {serviceTabs.map((service) => {
                  const isActive = service.id === activeTabId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectService(service.id)}
                      className={`about-services-tab-btn ${isActive
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
            <div
              className="about-services-right-col"
              ref={detailsRef}
              id="about-service-details"
            >
              <div className="about-services-card" key={activeService.id}>
                {/* Image Preview */}
                <div className="about-services-image-wrapper">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={900}
                    height={560}
                    className="about-services-img"
                  />
                </div>

                {/* Service Details */}
                <div className="about-services-details">
                  <h3 className="about-services-title">{activeService.title}</h3>
                  {activeService.tagline && (
                    <p className="about-services-tagline">{activeService.tagline}</p>
                  )}
                  <p className="about-services-desc">{activeService.description}</p>

                  {/* Make a Reservation CTA Button */}
                  <div className="about-services-cta">
                      <Link href={`/contact?service=${activeService.id}`} className="about-services-btn">
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
