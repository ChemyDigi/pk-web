"use client";

import React from "react";
import "@/css/about/AboutStory.css";

export default function AboutStory() {
  return (
    <section className="about-story-section" id="about-me">
      <div className="about-story-container">
        
        {/* Top Header: Story Narrative */}
        <div className="about-story-top-grid">
          
          {/* Content Column: About Me Details */}
          <div className="about-story-content-col">
            {/* Badge */}
            <div className="about-story-badge">
              <span className="about-story-badge-line" aria-hidden="true" />
              <span className="about-story-badge-text">About Me</span>
            </div>

            {/* Headline */}
            <h2 className="about-story-heading">
              Trusted Guidance, Lasting Protection, <br className="about-story-br" />
              Confident Futures
            </h2>

            {/* Narrative Paragraphs */}
            <div className="about-story-paragraphs">
              <p>
                With over a decade of experience in the insurance industry, I help individuals,
                families, and professionals make confident financial decisions through
                personalised protection solutions built around their real needs and future goals.
              </p>
              <p>
                My approach combines strategic thinking with genuine care, focusing on
                suitability, affordability, transparency, and dependable after-sales service.
                Every recommendation is designed to provide meaningful protection through changing
                life stages, health risks, and retirement needs.
              </p>
              <p>
                Beyond supporting clients, I am passionate about developing people, strengthening
                high-performing teams, and building trusted partnerships within communities. My
                purpose is to ensure that financial uncertainty never becomes a personal crisis.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Three Staggered Image Placeholder Boxes */}
        <div className="about-story-boxes-grid">
          {/* Box 1 (Left) */}
          <div
            className="about-story-box about-story-box-1"
            role="img"
            aria-label="Image placeholder 1"
          />

          {/* Box 2 (Center - Taller) */}
          <div
            className="about-story-box about-story-box-2"
            role="img"
            aria-label="Image placeholder 2"
          />

          {/* Box 3 (Right) */}
          <div
            className="about-story-box about-story-box-3"
            role="img"
            aria-label="Image placeholder 3"
          />
        </div>

      </div>
    </section>
  );
}
