"use client";

import React from "react";
import Image from "next/image";
import "@/css/achievements/AchievementsHero.css";

export default function AchievementsHero() {
  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      const target = document.getElementById("achievements-content");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="achievements-hero-section">
      {/* Background Image & Vignette Overlays */}
      <div className="achievements-hero-bg-container">
        <Image
          src="/images/achievements/hero.jpg"
          alt="Memorable Captures and Achievements"
          fill
          priority
          quality={95}
          className="achievements-hero-bg-image"
        />
        <div className="achievements-hero-overlay-tint" />
        <div className="achievements-hero-overlay-top" />
        <div className="achievements-hero-overlay-bottom" />
        <div className="achievements-hero-overlay-sides" />
        <div className="achievements-hero-overlay-vignette" />
      </div>

      {/* Hero Content */}
      <div className="achievements-hero-content">
        <div className="achievements-hero-badge">
          <span className="achievements-hero-badge-line" aria-hidden="true" />
          <span className="achievements-hero-badge-text">Memorable Captures</span>
        </div>

        <h1 className="achievements-hero-title">
          A glimpse into meaningful <br className="achievements-hero-br" />
          connections and achievements
        </h1>

        <div className="achievements-hero-cta">
          <button
            type="button"
            onClick={handleScrollDown}
            className="achievements-hero-btn"
            id="explore-achievements-btn"
          >
            EXPLORE ACHIEVEMENTS
          </button>
        </div>
      </div>
    </section>
  );
}
