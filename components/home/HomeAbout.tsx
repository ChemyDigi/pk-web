"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeAbout.css";

export default function HomeAbout() {
  return (
    <section id="about-intro" className="home-about-section">
      <div className="home-about-container">
        
        {/* Top Two-Column Grid */}
        <div className="home-about-top-grid">
          
          {/* Left Column: Heading & Image Placeholder */}
          <div className="home-about-left">
            {/* Tag / Pretitle */}
            <div className="home-about-badge">
              <span className="home-about-badge-line" aria-hidden="true" />
              <span className="home-about-badge-text">Trusted Excellence</span>
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
            <video
              className="home-about-video-player"
              src="https://res.cloudinary.com/dufcussip/video/upload/v1790240767/Pradeep_Liyanage_Anniversary_Video_rvsdx5.mp4"
              poster="https://res.cloudinary.com/dufcussip/video/upload/v1790240767/Pradeep_Liyanage_Anniversary_Video_rvsdx5.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Pradeep Liyanage Showreel Video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}
