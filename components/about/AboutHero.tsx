"use client";

import React from "react";
import Image from "next/image";
import "@/css/about/AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      {/* Background Architectural Skyscraper Image */}
      <div className="about-hero-bg-container">
        <Image
          src="/images/about/d783b4f4ce3ce89e9dbbc5dc86d6058bc9b3642f.jpg"
          alt="Architectural skyscraper facade"
          fill
          priority
          quality={95}
          className="about-hero-bg-image"
        />
        {/* Layered Overlays for Depth, Navbar Fade, and High-Contrast Typography */}
        <div className="about-hero-overlay-tint" />
        <div className="about-hero-overlay-left" />
        <div className="about-hero-overlay-top" />
        <div className="about-hero-overlay-bottom" />
      </div>

      {/* Hero Statement */}
      <div className="about-hero-container">
        <h1 className="about-hero-statement">
          <span className="about-hero-highlight">
            I help professionals, families, and communities build lasting financial security
          </span>{" "}
          <span className="about-hero-muted">
            through trusted insurance guidance, tailored protection solutions, and dedicated long term service empowering them to face every stage of life with confidence.
          </span>
        </h1>
      </div>
    </section>
  );
}
