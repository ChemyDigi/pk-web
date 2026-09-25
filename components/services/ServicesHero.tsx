import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/services/ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero-section">
      {/* Background image with overlays */}
      <div className="services-hero-bg">
        <Image
          src="/images/services/hero.jpg"
          alt="Services background"
          fill
          priority
          className="services-hero-bg-image"
        />
        <div className="services-hero-overlay-top" />
        <div className="services-hero-overlay-bottom" />
        <div className="services-hero-overlay-sides" />
      </div>

      {/* Content */}
      <div className="services-hero-content">
        {/* Eyebrow */}
        <div className="services-hero-badge">
          <span className="services-hero-badge-line" aria-hidden="true" />
          <span className="services-hero-badge-text">Protection Built Around Your Life</span>
        </div>

        {/* Heading */}
        <h1 className="services-hero-heading">
          Insurance isn&apos;t about policies.<br />
          It&apos;s about protecting what matters.
        </h1>

        {/* Description */}
        <p className="services-hero-desc">
          Comprehensive insurance solutions tailored for professionals, families, and communities —
          designed to offer lasting financial security and genuine peace of mind.
        </p>

        {/* CTAs */}
        <div className="services-hero-ctas">
          <Link href="/contact" className="services-hero-btn-primary">
            Talk About Your Protection
          </Link>
          <a href="#services-list" className="services-hero-btn-outline">
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="services-hero-scroll" aria-hidden="true">
        <div className="services-hero-scroll-line" />
        <span className="services-hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
