"use client";

import React, { useState } from "react";
import "@/css/about/AboutTimeline.css";

interface Milestone {
  year: string;
  title: string;
  description: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "2011",
    title: "Entering Financial Services",
    description: (
      <>
        Entered the financial advisory space with a foundational vision to help clients
        navigate risk, prioritize financial security, and plan for lifelong stability through
        dedicated and honest consultation.
      </>
    ),
  },
  {
    year: "2012",
    title: "The Journey Begins",
    description: (
      <>
        Began the professional journey as a <strong>Life Insurance Advisor</strong>, helping
        individuals and families understand the importance of financial protection. This role
        created a strong foundation in client service, needs-based consultation, and building
        relationships based on trust and responsibility.
      </>
    ),
  },
  {
    year: "2015",
    title: "Advisory Excellence & Growth",
    description: (
      <>
        Broadened advisory scope into comprehensive wealth preservation, retirement planning,
        and personalized family coverage, achieving top-tier advisory milestones and industry benchmarks.
      </>
    ),
  },
  {
    year: "2018",
    title: "Leadership & Unit Development",
    description: (
      <>
        Stepped into leadership, establishing and mentoring high-performing sales units with a
        shared vision of ethical advice, continuous learning, and client dedication.
      </>
    ),
  },
  {
    year: "2021",
    title: "Associate Regional Sales Manager",
    description: (
      <>
        Elevated to <strong>Associate Regional Sales Manager</strong>, expanding market reach,
        fostering key affinity group partnerships, and driving regional organizational success.
      </>
    ),
  },
  {
    year: "2025",
    title: "Industry Recognition & MDRT Honors",
    description: (
      <>
        Honored with the <strong>Platinum Award</strong>, <strong>Best Capacity Builder Winner Award</strong>,
        and Best Leader Unit 1st Runner-Up at the Annual Awards 2025, alongside prestigious MDRT global recognition.
      </>
    ),
  },
];

export default function AboutTimeline() {
  // Default to index 1 ("2012") to match reference design
  const [activeIndex, setActiveIndex] = useState(1);

  const prevIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const nextIndex = activeIndex < milestones.length - 1 ? activeIndex + 1 : null;

  const handleNext = () => {
    setActiveIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const currentMilestone = milestones[activeIndex];
  const progressRatio = activeIndex / (milestones.length - 1);

  return (
    <section className="about-timeline-section" id="milestones">
      <div className="about-timeline-container">
        
        {/* Section Header */}
        <div className="about-timeline-header">
          {/* Badge */}
          <div className="about-timeline-badge">
            <span className="about-timeline-badge-line" aria-hidden="true" />
            <span className="about-timeline-badge-text">A Journey Built on Trust</span>
          </div>

          {/* Heading */}
          <h2 className="about-timeline-heading">
            Every milestone reflects a commitment. <br className="about-timeline-br" />
            A career shaped by purpose, service, and <br className="about-timeline-br" />
            lasting relationships
          </h2>
        </div>

        {/* Interactive Milestones Display Grid */}
        <div className="about-timeline-grid">
          
          {/* Left Column: Vertical Year Roller */}
          <div className="about-timeline-years-col">
            <div className="about-timeline-years-wrapper">
              
              {/* Previous Year (Faded / Clickable) */}
              <div
                className={`about-timeline-year-item about-timeline-year-prev ${
                  prevIndex !== null ? "about-timeline-year-interactive" : "about-timeline-year-hidden"
                }`}
                onClick={() => prevIndex !== null && setActiveIndex(prevIndex)}
                role={prevIndex !== null ? "button" : undefined}
                aria-label={prevIndex !== null ? `Go to year ${milestones[prevIndex].year}` : undefined}
              >
                <span>{prevIndex !== null ? milestones[prevIndex].year : ""}</span>
              </div>

              {/* Active Year (Massive Bold Display) */}
              <div className="about-timeline-year-item about-timeline-year-active" key={currentMilestone.year}>
                <span>{currentMilestone.year}</span>
              </div>

              {/* Next Year (Faded / Clickable) */}
              <div
                className={`about-timeline-year-item about-timeline-year-next ${
                  nextIndex !== null ? "about-timeline-year-interactive" : "about-timeline-year-hidden"
                }`}
                onClick={() => nextIndex !== null && setActiveIndex(nextIndex)}
                role={nextIndex !== null ? "button" : undefined}
                aria-label={nextIndex !== null ? `Go to year ${milestones[nextIndex].year}` : undefined}
              >
                <span>{nextIndex !== null ? milestones[nextIndex].year : ""}</span>
              </div>

            </div>
          </div>

          {/* Middle Column: Vertical Progress Indicator Line */}
          <div className="about-timeline-indicator-col">
            <div className="about-timeline-line-track">
              {/* Animated Progress Pill */}
              <div
                className="about-timeline-line-pill"
                style={{
                  top: `calc(${progressRatio * 100}% - ${progressRatio * 56}px)`,
                }}
              />
            </div>
          </div>

          {/* Right Column: Milestone Story & Next Button */}
          <div className="about-timeline-content-col">
            <div className="about-timeline-content-wrapper" key={currentMilestone.year}>
              <h3 className="about-timeline-title">{currentMilestone.title}</h3>
              <p className="about-timeline-desc">{currentMilestone.description}</p>

              {/* Down Arrow Stepper Button */}
              <button
                type="button"
                onClick={handleNext}
                className="about-timeline-next-btn"
                aria-label="Next career milestone"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
