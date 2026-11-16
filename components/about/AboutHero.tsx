import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/about/AboutHero.css";

export default function AboutHero() {

  return (
    <section className="about-hero-section">
      {/* Background Hero Image */}
      <div className="about-hero-bg-container">
        <Image
          src="/images/about/pradeep.png"
          alt="Pradeep Liyanage - Life Insurance Advisor and Regional Sales Manager"
          fill
          priority
          quality={95}
          className="about-hero-bg-image"
        />
      </div>

      {/* Hero Content (Positioned on the Left) */}
      <div className="about-hero-container">
        <div className="about-hero-content">
          {/* Badge */}
          <div className="about-hero-badge">
            <span className="about-hero-badge-line" aria-hidden="true" />
            <span className="about-hero-badge-text">About Pradeep</span>
          </div>

          {/* Heading */}
          <h1 className="about-hero-title">
            <span className="about-hero-title-regular">A personal approach.</span>
            <span className="about-hero-title-italic">A lasting commitment.</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="about-hero-desc">
            I’m Pradeep Liyanage. With over a decade of dedicated experience, I help individuals and
            families build lasting financial security, protect what matters, and plan for the future
            with confidence.
          </p>

          {/* CTA Button */}
          <div className="about-hero-cta-wrapper">
            <Link href="/contact" className="about-hero-cta-btn">
              LET&apos;S CONNECT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
