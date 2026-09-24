import React from "react";
import Image from "next/image";
import "@/css/services/ServicesPhilosophy.css";

export default function ServicesPhilosophy() {
  return (
    <section className="services-philosophy-section">
      {/* Background image with overlays */}
      <div className="services-philosophy-bg">
        <Image
          src="/images/services/philosophy.jpg"
          alt="Insurance consultation background"
          fill
          className="services-philosophy-bg-image"
        />
        <div className="services-philosophy-overlay-top" />
        <div className="services-philosophy-overlay-bottom" />
      </div>

      {/* Centered content */}
      <div className="services-philosophy-content">
        {/* Badge */}
        <div className="services-philosophy-badge">
          <span className="services-philosophy-badge-line" aria-hidden="true" />
          <span className="services-philosophy-badge-text">My Philosophy</span>
          <span className="services-philosophy-badge-line" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="services-philosophy-heading">
          Protection Should Work When Life<br />
          Doesn&apos;t Go According to Plan.
        </h2>

        {/* Description */}
        <p className="services-philosophy-desc">
          Every client has different responsibilities, goals, income levels, and risks. The right
          protection is therefore not simply about choosing a policy — it is about choosing a
          solution that is suitable, affordable, transparent, and built around the
          individual&apos;s circumstances.
        </p>
      </div>
    </section>
  );
}
