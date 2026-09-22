"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/home/HomeHero.css";

const stats = [
  { value: "2", label: "MDRT" },
  { value: "14+", label: "Experience" },
  { value: "1000+", label: "Clients" },
  { value: "500+", label: "Consultations" },
];

export default function HomeHero() {
  const handleScrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image with Cinematic Grading & Enhanced Black Fade */}
      <div className="hero-bg-container">
        <Image
          src="/images/home/hero.jpg"
          alt="Scenic mountain landscape"
          fill
          priority
          quality={95}
          className="hero-bg-image"
        />
        {/* Overall dark tint */}
        <div className="hero-overlay-tint" />
        {/* Deep top dark gradient reaching across the upper hero */}
        <div className="hero-overlay-sky" />
        {/* Horizontal vignette for text & stats readability */}
        <div className="hero-overlay-horizontal" />
        {/* Rich bottom edge gradient fade */}
        <div className="hero-overlay-bottom" />
      </div>

      {/* Main Content Area */}
      <div className="hero-content-wrapper">
        
        {/* Desktop & Mobile Layout Grid */}
        <div className="hero-grid">
          
          {/* Left Column: Headline & CTA */}
          <div className="hero-left">
            {/* Pre-title */}
            <p className="hero-pretitle">
              Confidence for every stage of life.
            </p>

            {/* Main Headline */}
            <h1 className="hero-title">
              The Protection <br />
              <span className="hero-title-nowrap">You Choose Today</span> <br />
              <span className="hero-title-italic">
                Shapes Tomorrow
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Helping individuals, professionals, and families build financial security
              through trusted insurance solutions, personalized guidance, and lifelong support.
            </p>

            {/* CTA Button */}
            <div className="hero-cta-wrapper">
              <Link
                href="/contact"
                className="hero-cta-btn"
              >
                LET&apos;S CONNECT
              </Link>
            </div>
          </div>

          {/* Spacer on Desktop for Centered Image */}
          <div className="hero-spacer" />

          {/* Right Column: Key Stats (Desktop) */}
          <div className="hero-right">
            <div className="hero-stats-stack">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <span className="hero-stat-value">
                    {stat.value}
                  </span>
                  <span className="hero-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Only: Center Portrait & Stats */}
          <div className="hero-mobile-center">
            <div className="hero-mobile-portrait">
              <Image
                src="/images/home/Pradeep.png"
                alt="Pradeep Liyanage"
                width={1086}
                height={1448}
                priority
                className="hero-mobile-img"
              />
            </div>

            {/* Mobile Stats Grid */}
            <div className="hero-mobile-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-mobile-stat-item">
                  <span className="hero-mobile-stat-value">
                    {stat.value}
                  </span>
                  <span className="hero-mobile-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Desktop Centered Portrait: Positioned at Bottom Center */}
      <div className="hero-desktop-portrait">
        <div className="hero-desktop-portrait-inner">
          <Image
            src="/images/home/Pradeep.png"
            alt="Pradeep Liyanage"
            width={1086}
            height={1448}
            priority
            className="hero-desktop-img"
          />
        </div>
      </div>

      {/* Bottom Center: Scroll Down Indicator */}
      <div className="hero-scroll-container">
        <button
          type="button"
          onClick={handleScrollDown}
          className="hero-scroll-btn"
          aria-label="Scroll down to explore"
        >
          {/* Minimalist Mouse SVG */}
          <div className="hero-mouse-icon">
            <div className="hero-mouse-wheel" />
          </div>
          <span className="hero-scroll-text">
            SCROLL DOWN
          </span>
        </button>
      </div>
    </section>
  );
}
