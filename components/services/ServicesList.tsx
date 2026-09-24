"use client";

import React, { useState } from "react";
import "@/css/services/ServicesList.css";

const services = [
  {
    num: "01",
    icon: (
      <svg className="services-list-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    ),
    title: "Life Insurance Planning",
    description:
      "Protect the people you love most with coverage designed around your life stage, income, and long-term goals. From term to whole life, I guide you to the right fit.",
    features: ["Term & permanent life options", "Income replacement planning", "Policy review & optimization"],
  },
  {
    num: "02",
    icon: (
      <svg className="services-list-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Family Financial Protection",
    description:
      "Safeguard your family's future against the unexpected. I help families build financial shields that cover mortgage, education, and daily living needs.",
    features: ["Mortgage & debt protection", "Children's future funding", "Critical illness coverage"],
  },
  {
    num: "03",
    icon: (
      <svg className="services-list-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Professional & Business Coverage",
    description:
      "Dedicated coverage for professionals, business owners, and self-employed individuals — ensuring your livelihood is protected even when life is unpredictable.",
    features: ["Key person insurance", "Disability & income protection", "Group benefits planning"],
  },
  {
    num: "04",
    icon: (
      <svg className="services-list-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Retirement & Savings Planning",
    description:
      "Build a retirement you can actually enjoy. I help you design RRSP, TFSA, and annuity strategies that maximize your wealth over the long term.",
    features: ["RRSP & TFSA strategies", "Annuity & pension planning", "Wealth accumulation solutions"],
  },
];

export default function ServicesList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services-list" className="services-list-section">
      <div className="services-list-container">

        {/* Header */}
        <div className="services-list-header">
          <div className="services-list-badge">
            <span className="services-list-badge-line" aria-hidden="true" />
            <span className="services-list-badge-text">What I Offer</span>
          </div>
          <h2 className="services-list-title">
            Insurance solutions<br />for every stage of life.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="services-list-grid">
          {services.map((service) => (
            <div
              key={service.num}
              className="services-list-card"
              onMouseEnter={() => setHovered(service.num)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="services-list-card-num" aria-hidden="true">
                {service.num}
              </span>
              {service.icon}
              <h3 className="services-list-card-title">{service.title}</h3>
              <p className="services-list-card-desc">{service.description}</p>
              <ul className="services-list-card-features">
                {service.features.map((f) => (
                  <li key={f} className="services-list-card-feature">
                    <span className="services-list-card-feature-dot" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
