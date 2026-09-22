import React from "react";
import Link from "next/link";
import "@/css/home/HomeCta.css";

export default function HomeCta() {
  return (
    <section className="home-cta-section">
      <div className="home-cta-container">
        <div className="home-cta-card">
          <h2 className="home-cta-title">
            Ready to bring your digital vision to reality?
          </h2>
          <p className="home-cta-desc">
            Let&apos;s build fast, accessible, and high-converting web solutions tailored to your unique requirements.
          </p>
          <div className="home-cta-btn-wrapper">
            <Link
              href="/contact"
              className="home-cta-button"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
