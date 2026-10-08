import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/css/services/ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero-section" aria-label="Affinity Hero">
      {/* Background Architectural Image */}
      <div className="services-hero-bg">
        <Image
          src="/images/services/affinity-hero.png"
          alt="Modern architectural glass facade"
          fill
          priority
          sizes="100vw"
          className="services-hero-bg-image"
        />
        <div className="services-hero-overlay-top" />
        <div className="services-hero-overlay-bottom" />
        <div className="services-hero-overlay-left" />
      </div>

      {/* Content */}
      <div className="services-hero-container">
        <div className="services-hero-content">
          {/* Eyebrow */}
          <div className="services-hero-eyebrow-wrap">
            <span className="services-hero-eyebrow">MY AFFINITY</span>
          </div>

          {/* Heading */}
          <h1 className="services-hero-heading">
            Protection for<br />
            Every Stage of Life
          </h1>

          {/* Description */}
          <p className="services-hero-desc">
            Helping individuals, families, and communities build financial protection designed around their needs, priorities and changing stages of life.
          </p>

          {/* CTA */}
          <div className="services-hero-ctas">
            <Link href="/contact" className="services-hero-btn-primary">
              <span>Talk About Your Protection</span>
              <svg
                className="services-hero-btn-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
