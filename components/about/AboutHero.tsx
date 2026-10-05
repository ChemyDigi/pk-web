"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/css/about/AboutHero.css";

const leadingText =
  "I help professionals, families, and communities build lasting financial security";

const extensionWords = [
  "through",
  "trusted",
  "insurance",
  "guidance,",
  "tailored",
  "protection",
  "solutions,",
  "and",
  "dedicated",
  "long",
  "term",
  "service",
  "empowering",
  "them",
  "to",
  "face",
  "every",
  "stage",
  "of",
  "life",
  "with",
  "confidence.",
];

export default function AboutHero() {
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Dynamically scale lighting across the initial scroll range
          const maxDistance = Math.min(window.innerHeight * 0.45, 380);
          const progress = Math.min(1, Math.max(0, scrollY / maxDistance));
          const count = Math.round(progress * extensionWords.length);
          setLitCount(count);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-hero-section">
      {/* Background Hero Image */}
      <div className="about-hero-bg-container">
        <Image
          src="/images/about/hero.png"
          alt="About hero background"
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
            {leadingText}
          </span>{" "}
          <span className="about-hero-extension">
            {extensionWords.map((word, idx) => {
              const isLit = idx < litCount;
              return (
                <span
                  key={idx}
                  className={`about-hero-word ${
                    isLit ? "about-hero-word-lit" : "about-hero-word-muted"
                  }`}
                >
                  {word}{" "}
                </span>
              );
            })}
          </span>
        </h1>
      </div>
    </section>
  );
}
