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
        <p className="services-hero-eyebrow">
          Insurance Built Around Real Life.
        </p>

        {/* Heading */}
        <h1 className="services-hero-heading">
          <span className="services-hero-heading-line">
            Life insurance isn&apos;t tested when policies are signed.
          </span>{" "}
          <span className="services-hero-heading-line">
            It&apos;s tested when life becomes uncertain.
          </span>
        </h1>

        {/* Description */}
        <p className="services-hero-desc">
          Helping professionals, families, and member communities build financial protection designed around their needs, priorities, and changing stages of life.
        </p>

        {/* CTAs */}
        <div className="services-hero-ctas">
          <Link href="/contact" className="services-hero-btn-primary">
            Talk About Your Protection
          </Link>
        </div>
      </div>
    </section>
  );
}
