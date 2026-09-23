"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeAwards.css";

export default function HomeAwards() {
  return (
    <section className="home-awards-section" id="awards">
      <div className="home-awards-container">
        
        {/* Awards Hero Image Showcase */}
        <div className="home-awards-hero-wrapper">
          <div className="home-awards-image-card">
            <Image
              src="/images/home/awwards-hero.png"
              alt="Awards and Achievements - Pradeep Liyanage"
              width={1536}
              height={1024}
              priority
              quality={95}
              className="home-awards-img"
            />
            {/* Subtle Vignette / Edge Blends for Seamless Deep Black Backdrop */}
            <div className="home-awards-overlay-top" />
            <div className="home-awards-overlay-bottom" />
            <div className="home-awards-overlay-left" />
            <div className="home-awards-overlay-right" />
          </div>
        </div>

        {/* Content Details */}
        <div className="home-awards-content">
          
          {/* Badge with Dash Line */}
          <div className="home-awards-badge">
            <span className="home-awards-badge-line" aria-hidden="true" />
            <span className="home-awards-badge-text">Awards & Achievements</span>
          </div>

          {/* Heading */}
          <h2 className="home-awards-title">
            Celebrating a Journey of{" "}
            <span className="home-awards-title-italic">Excellence</span> and <br className="home-awards-br" />
            <span className="home-awards-title-italic">Professional Achievements</span>
          </h2>

          {/* Description Paragraph */}
          <p className="home-awards-desc">
            A journey defined by dedication, excellence, and professional achievement.
            From industry recognition to leadership milestones, these accomplishments
            reflect my commitment to delivering trusted financial guidance and
            exceptional service.
          </p>

          {/* CTA Button */}
          <div className="home-awards-cta">
            <Link href="/achievements" className="home-awards-btn">
              VIEW ALL AWARDS
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
