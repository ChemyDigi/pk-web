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
    year: "2012",
    title: "Beginning the Journey",
    description: (
      <>
        Began my professional journey at Union Assurance as a Life Insurance Advisor, focusing on helping individuals and families secure their financial futures. This marked the foundation of my career in financial services and customer relationship management.
      </>
    ),
  },
  {
    year: "2014",
    title: "First Annual Awards & Merit Recognition",
    description: (
      <>
        Participated in the Union Assurance Annual Awards for the first time
        and received the Merit Award. This marked my first professional
        recognition and an important milestone in my journey in the
        insurance industry.
      </>
    ),
  },
  {
    year: "2015",
    title: "Advancing as a Personal Financial Advisor",
    description: (
      <>
        Progressed into the role of Personal Financial Advisor, taking on greater responsibilities in financial consultation and client relationship management. This transition marked an important step in my professional development.
      </>
    ),
  },
  {
    year: "2016",
    title: "Establishing a Strategic Insurance Partnership",
    description: (
      <>
        Introduced the Affinity Strategic Life Insurance Partnership
        initiative, which led to the establishment of the strategic
        insurance partnership between the Bar Association of Sri Lanka
        (BASL) and Union Assurance PLC. This marked a significant
        milestone in expanding tailored insurance solutions to
        professional communities.
      </>
    ),
  },
  {
    year: "2017",
    title: "Achieving Platinum Recognition",
    description: (
      <>
        Received the Platinum Award in the Advisor Category at the Union Assurance Annual Awards 2017. This recognition marked an important achievement in my advisory career, reflecting dedication and consistent professional performance.
      </>
    ),
  },
  {
    year: "2018",
    title: "Stepping into Leadership",
    description: (
      <>
        Advanced into the role of Senior Agency Development Manager, marking my transition towards leadership and agency development. This year also included participation in the 9th Marketing & Sales Forum of the Insurance Association of Sri Lanka.
      </>
    ),
  },
  {
    year: "2019",
    title: "Excellence in Business Development",
    description: (
      <>
        Took on the role of Business Development Officer, expanding my responsibilities in business growth and agency performance. Earned the Silver Award and 1st Runner-Up recognition for Best Business Development Officer at the Union Assurance Annual Awards 2019.
      </>
    ),
  },
  {
    year: "2020",
    title: "Diamond Award & Leadership Growth",
    description: (
      <>
        Progressed into the role of Assistant Sales Manager in April 2020, taking on greater leadership responsibilities. Received the prestigious Diamond Award in the Business Development Officer Category at the Annual Awards 2020, marking another significant career achievement.
      </>
    ),
  },
  {
    year: "2022",
    title: "Diamond Award & Leadership Excellence",
    description: (
      <>
        Received the prestigious Diamond Award in the Assistant Sales
        Manager Category at the Union Assurance Annual Awards 2022.
        This recognition marked another significant milestone in my
        leadership journey, reflecting consistent performance,
        dedication, and excellence in sales management.
      </>
    ),
  },
  {
    year: "2023",
    title: "Advancing to Sales Manager",
    description: (
      <>
        Promoted to Sales Manager in January 2023, marking an important advancement in my leadership journey. Received the Silver Award in the Sales Manager Category at the Union Assurance Mid-Year Awards 2023.
      </>
    ),
  },
  {
    year: "2024",
    title: "Regional Leadership & Gold Recognition",
    description: (
      <>
        Advanced to Associate Regional Sales Manager in July 2024, taking on broader leadership responsibilities. Earned the Gold Award at the Annual Awards 2024 and qualified for UA Premier Club membership across three consecutive quarters.
      </>
    ),
  },
  {
    year: "2025",
    title: "MDRT Qualification & Leadership Excellence",
    description: (
      <>
        Achieved my first Million Dollar Round Table (MDRT) qualification, marking a major milestone in my financial services career. Also received the Platinum Award, Best Capacity Builder recognition, and 1st Runner-Up for Best Leader Unit at the Union Assurance Annual Awards 2025.
      </>
    ),
  },
  {
    year: "2026",
    title: "Regional Sales Manager & Continued Excellence",
    description: (
      <>
        Stepped into the role of Regional Sales Manager in January 2026, marking a significant career milestone. Achieved my second consecutive MDRT qualification and received national recognition through the SLIM National Sales Awards Bronze Award, alongside 2nd Runner-Up recognition at the Union Assurance Leader Conference 2026.
      </>
    ),
  },
];

export default function AboutTimeline() {
  // Default to index 0 ("2012") for chronological start
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : prev));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (diff > 35) {
      handleNext();
    } else if (diff < -35) {
      handlePrev();
    }
    setTouchStartY(null);
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
            <div className="about-timeline-years-row">
              <div
                className="about-timeline-roller-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="about-timeline-roller-track"
                  style={{
                    transform: `translate3d(0, calc(-${activeIndex} * var(--timeline-slot-h)), 0)`,
                  }}
                >
                  {/* Ghost Year 2011 (Visual context at top when 2012 is active) */}
                  <div
                    className={`about-timeline-year-item ${activeIndex === 0 ? "about-timeline-year-prev" : "about-timeline-year-past"
                      }`}
                    aria-hidden="true"
                  >
                    <span className="about-timeline-year-text">2011</span>
                  </div>

                  {milestones.map((m, idx) => {
                    const diff = idx - activeIndex;
                    let stateClass = "about-timeline-year-future";
                    if (diff === 0) stateClass = "about-timeline-year-active";
                    else if (diff === -1) stateClass = "about-timeline-year-prev";
                    else if (diff === 1) stateClass = "about-timeline-year-next";
                    else if (diff < -1) stateClass = "about-timeline-year-past";

                    return (
                      <div
                        key={m.year}
                        onClick={() => setActiveIndex(idx)}
                        className={`about-timeline-year-item ${stateClass}`}
                        aria-label={`Milestone year ${m.year}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActiveIndex(idx);
                          }
                        }}
                      >
                        <span className="about-timeline-year-text">{m.year}</span>
                      </div>
                    );
                  })}

                  {/* Ghost Year 2027 (Visual context at bottom when 2026 is active) */}
                  <div
                    className={`about-timeline-year-item ${activeIndex === milestones.length - 1
                      ? "about-timeline-year-next"
                      : "about-timeline-year-future"
                      }`}
                    aria-hidden="true"
                  >
                    <span className="about-timeline-year-text">2027</span>
                  </div>
                </div>
              </div>

              {/* Mobile Stepper Navigation Buttons (Beside the Years) */}
              <div className="about-timeline-nav-mobile" aria-label="Milestone navigation controls">
                <div className="about-timeline-nav-buttons-group">
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

                {/* Progress counter */}
                <span className="about-timeline-counter">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                </span>
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
                    className={`about-timeline-story-card ${isCurrent
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

            {/* Stepper Navigation Buttons (Desktop Only, in Content Column) */}
            <div className="about-timeline-nav-buttons about-timeline-nav-desktop">
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

              {/* Progress counter pill */}
              <span className="about-timeline-counter">
                {String(activeIndex + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
