"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeAbout.css";

export default function HomeAbout() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about-intro" className="home-about-section">
      <div className="home-about-container">
        
        {/* Top Two-Column Grid */}
        <div className="home-about-top-grid">
          
          {/* Left Column: Heading & Image Placeholder */}
          <div className="home-about-left">
            {/* Tag / Pretitle */}
            <div className="home-about-badge">
              <span className="home-about-badge-line" />
              <span>Trusted Excellence</span>
            </div>

            {/* Subheading */}
            <h2 className="home-about-subheading">
              Where Protection <br />
              Meets Peace of Mind
            </h2>

            {/* Brand Logo */}
            <div className="home-about-logo-wrapper">
              <Image
                src="/images/header/Pradeep-Liyanage-Logo-2.png"
                alt="Pradeep Liyanage Logo"
                width={300}
                height={365}
                className="home-about-logo-img"
                priority
              />
            </div>
          </div>

          {/* Right Column: Narrative & CTA */}
          <div className="home-about-right">
            {/* Main Statement */}
            <h3 className="home-about-main-title">
              For years, individuals, families, and professionals have trusted{" "}
              <strong className="home-about-name">Pradeep Liyanage</strong> to help them{" "}
              <span className="home-about-tagline">Protect, Plan, and Prosper</span>
            </h3>

            {/* Accent guidance line */}
            <p className="home-about-accent">
              Because financial security begins with the right guidance
            </p>

            {/* Narrative paragraphs */}
            <div className="home-about-paragraphs">
              <p>
                Life is full of milestones, opportunities, and unexpected challenges.
                Whether you&apos;re protecting your family, planning for retirement,
                or preparing for the future, I provide personalized insurance solutions
                designed to give you confidence and peace of mind.
              </p>
              <p>
                With a strong commitment to transparency, affordability, and long-term support,
                I focus on building lasting relationships not just policies. My goal is to help
                you make informed decisions today while creating financial security for the years ahead.
              </p>
            </div>

            {/* Discover My Story CTA */}
            <div className="home-about-cta-wrapper">
              <Link href="/about" className="home-about-btn">
                DISCOVER MY STORY
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Video Box */}
        <div className="home-about-video-wrapper">
          <div className="home-about-video-card">
            
            {/* Video Placeholder Background */}
            <div className="home-about-video-bg">
              {/* Ready for <video> or <iframe> when user uploads */}
            </div>

            {/* Top-Left Diagonal Corner Badge with PK Monogram */}
            <div className="home-about-corner-badge">
              <Image
                src="/images/header/Pradeep-Liyanage-Logo-2.png"
                alt="PK Monogram"
                width={40}
                height={48}
                className="home-about-corner-logo"
              />
            </div>

            {/* Center Play Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="home-about-play-btn"
              aria-label="Play video"
            >
              <svg
                className="home-about-play-icon"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Bottom Subtitle */}
            <div className="home-about-video-subtitle">
              <p>You should prepare for your future.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
