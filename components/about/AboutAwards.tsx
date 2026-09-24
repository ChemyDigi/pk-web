"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/css/about/AboutAwards.css";

interface AwardItem {
  id: string;
  giantLine1: string;
  giantLine2: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const awards: AwardItem[] = [
  {
    id: "capacity-builder",
    giantLine1: "Best Capacity",
    giantLine2: "Builder Award",
    title: "Winner – ARSM Unit | Union Assurance Annual Awards 2025",
    description:
      "Recognised for outstanding commitment to developing people, strengthening team capabilities, and inspiring consistent professional growth. This award reflects exceptional leadership and dedication to building a high performing, future ready team.",
    image: "/images/about/Awards 1.png",
    alt: "Winner - Best Capacity Builder Award - Pradeep Liyanage",
  },
  {
    id: "platinum-award",
    giantLine1: "Annual Awards 2025",
    giantLine2: "Platinum Award",
    title: "Platinum Winner | Union Assurance Annual Awards 2025",
    description:
      "Honoured with the highest tier Platinum Award in recognition of outstanding business excellence, stellar production benchmarks, and enduring dedication to providing lifelong financial security.",
    image: "/images/about/Awards 2.png",
    alt: "Platinum Award Winner - Annual Awards 2025 - Pradeep Liyanage",
  },
  {
    id: "leader-unit-award",
    giantLine1: "Best Leader Unit",
    giantLine2: "1st Runner-Up",
    title: "1st Runner-Up – Best ARSM Unit | Union Assurance Annual Awards 2025",
    description:
      "Awarded 1st Runner-Up for exemplary unit mentorship and regional sales management, demonstrating strategic leadership, collaborative empowerment, and relentless commitment to professional standards.",
    image: "/images/about/Awards 3.png",
    alt: "1st Runner-Up Best ARSM Unit Award - Pradeep Liyanage",
  },
];

export default function AboutAwards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollToAwards = () => {
        if (window.location.hash === "#awards") {
          const el = document.getElementById("awards");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };

      scrollToAwards();
      const t1 = setTimeout(scrollToAwards, 120);
      const t2 = setTimeout(scrollToAwards, 350);

      window.addEventListener("hashchange", scrollToAwards);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener("hashchange", scrollToAwards);
      };
    }
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < awards.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : awards.length - 1));
  };

  const currentAward = awards[activeIndex];

  return (
    <section className="about-awards-section" id="awards">
      {/* Cinematic Smoke Atmosphere Background */}
      <div className="about-awards-bg-container" aria-hidden="true">
        <Image
          src="/images/about/AboutBackground.jpg"
          alt="Cinematic atmospheric smoke background"
          fill
          priority
          quality={95}
          className="about-awards-bg-img"
        />
        <div className="about-awards-bg-overlay" />
      </div>

      <div className="about-awards-container">
        
        {/* Section Header */}
        <div className="about-awards-header">
          {/* Badge */}
          <div className="about-awards-badge">
            <span className="about-awards-badge-line" aria-hidden="true" />
            <span className="about-awards-badge-text">Awards & Achievements</span>
          </div>

          {/* Heading */}
          <h2 className="about-awards-heading">
            Celebrating Excellence Through Awards
          </h2>

          {/* Subheading */}
          <p className="about-awards-subheading">
            Recognising a journey of dedication, leadership, and award-winning professional achievements.
          </p>
        </div>

        {/* Showcase Stage */}
        <div className="about-awards-stage">
          
          {/* Left: Giant Typography Backdrop + 3D Trophy Showcase Stack */}
          <div className="about-awards-visual-stack">
            {awards.map((award, idx) => {
              const isCurrent = idx === activeIndex;
              const isPrev = idx === (activeIndex === 0 ? awards.length - 1 : activeIndex - 1);
              const stateClass = isCurrent
                ? "is-active"
                : isPrev
                ? "is-prev"
                : "is-next";

              return (
                <div
                  key={award.id}
                  className={`about-awards-visual-slide ${stateClass}`}
                  aria-hidden={!isCurrent}
                >
                  {/* Giant Title Backdrop */}
                  <div className="about-awards-giant-text">
                    <span className="about-awards-giant-line1">{award.giantLine1}</span>
                    <span className="about-awards-giant-line2">{award.giantLine2}</span>
                  </div>

                  {/* Foreground Trophy Image */}
                  <div className="about-awards-trophy-wrapper">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      width={500}
                      height={700}
                      priority
                      quality={95}
                      className="about-awards-trophy-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center-Right: Award Narrative Details Stack */}
          <div className="about-awards-details-stack">
            {awards.map((award, idx) => {
              const isCurrent = idx === activeIndex;
              const isPrev = idx === (activeIndex === 0 ? awards.length - 1 : activeIndex - 1);
              const stateClass = isCurrent
                ? "is-active"
                : isPrev
                ? "is-prev"
                : "is-next";

              return (
                <div
                  key={award.id}
                  className={`about-awards-detail-slide ${stateClass}`}
                  aria-hidden={!isCurrent}
                >
                  <h3 className="about-awards-detail-title">{award.title}</h3>
                  <p className="about-awards-detail-desc">{award.description}</p>
                </div>
              );
            })}
          </div>

          {/* Far Right: Interactive Slider Arrow Button */}
          <div className="about-awards-nav">
            <button
              type="button"
              onClick={handleNext}
              className="about-awards-nav-btn"
              aria-label="Next award showcase"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
