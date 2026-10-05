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
  // Default to index 0 ("2011") for chronological start
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : prev));
  };

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
            <div className="about-timeline-roller-viewport">
              <div
                className="about-timeline-roller-track"
                style={{
                  transform: `translate3d(0, calc(-${activeIndex} * var(--timeline-slot-h)), 0)`,
                }}
              >
                {/* Ghost Year 2010 (Visual context at top when 2011 is active) */}
                <div
                  className={`about-timeline-year-item ${
                    activeIndex === 0 ? "about-timeline-year-prev" : "about-timeline-year-past"
                  }`}
                  aria-hidden="true"
                >
                  <span className="about-timeline-year-text">2010</span>
                </div>

                {milestones.map((m, idx) => {
                  const diff = idx - activeIndex;
                  let stateClass = "about-timeline-year-future";
                  if (diff === 0) stateClass = "about-timeline-year-active";
                  else if (diff === -1) stateClass = "about-timeline-year-prev";
                  else if (diff === 1) stateClass = "about-timeline-year-next";
                  else if (diff < -1) stateClass = "about-timeline-year-past";

                  const isClickable = diff === -1 || diff === 1;

                  return (
                    <div
                      key={m.year}
                      className={`about-timeline-year-item ${stateClass} ${
                        isClickable ? "about-timeline-year-interactive" : ""
                      }`}
                      onClick={() => setActiveIndex(idx)}
                      role={isClickable ? "button" : undefined}
                      tabIndex={isClickable ? 0 : -1}
                      aria-label={`Milestone year ${m.year}`}
                      onKeyDown={(e) => {
                        if (isClickable && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          setActiveIndex(idx);
                        }
                      }}
                    >
                      <span className="about-timeline-year-text">{m.year}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Middle Column: Vertical Progress Indicator Line */}
          <div className="about-timeline-indicator-col">
            <div
              className="about-timeline-line-track"
              style={{ "--progress": progressRatio } as React.CSSProperties}
            >
              {/* Animated Progress Pill */}
              <div className="about-timeline-line-pill" />
            </div>
          </div>

          {/* Right Column: Milestone Story & Next Button */}
          <div className="about-timeline-content-col">
            <div className="about-timeline-stories-stack">
              {milestones.map((m, idx) => {
                const isCurrent = idx === activeIndex;
                const isPast = idx < activeIndex;
                return (
                  <div
                    key={m.year}
                    className={`about-timeline-story-card ${
                      isCurrent
                        ? "is-active"
                        : isPast
                        ? "is-past"
                        : "is-future"
                    }`}
                    aria-hidden={!isCurrent}
                  >
                    <h3 className="about-timeline-title">{m.title}</h3>
                    <p className="about-timeline-desc">{m.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Stepper Navigation Buttons (Up & Down) */}
            <div className="about-timeline-nav-buttons">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="about-timeline-nav-btn about-timeline-prev-btn"
                aria-label="Previous career milestone"
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
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === milestones.length - 1}
                className="about-timeline-nav-btn about-timeline-next-btn"
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
