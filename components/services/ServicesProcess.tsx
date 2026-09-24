import React from "react";
import "@/css/services/ServicesProcess.css";

const steps = [
  {
    step: "01",
    name: "Discovery Conversation",
    desc: "We begin with a focused conversation to understand your life situation, financial goals, and what you most need to protect.",
  },
  {
    step: "02",
    name: "Needs Analysis",
    desc: "I conduct a thorough review of your current coverage, gaps, income, liabilities, and future obligations to build a clear picture.",
  },
  {
    step: "03",
    name: "Tailored Recommendation",
    desc: "You receive a personalized proposal with the right products, coverage levels, and providers — explained in plain language, not jargon.",
  },
  {
    step: "04",
    name: "Ongoing Partnership",
    desc: "Life changes, and so should your coverage. I provide regular policy reviews and am always available when you need guidance.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="services-process-section">
      <div className="services-process-container">

        {/* Header */}
        <div className="services-process-header">
          <div className="services-process-badge">
            <span className="services-process-badge-line" aria-hidden="true" />
            <span className="services-process-badge-text">How It Works</span>
          </div>
          <h2 className="services-process-title">
            A simple, transparent<br />process from start to finish.
          </h2>
        </div>

        {/* Steps */}
        <div className="services-process-grid">
          {steps.map((item) => (
            <div key={item.step} className="services-process-step">
              <div className="services-process-step-num" aria-hidden="true">
                {item.step}
              </div>
              <h3 className="services-process-step-name">{item.name}</h3>
              <p className="services-process-step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
