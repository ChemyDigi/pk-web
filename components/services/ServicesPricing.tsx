import React from "react";
import Link from "next/link";
import "@/css/services/ServicesPricing.css";

const tiers = [
  {
    name: "Individual",
    description:
      "Designed for individuals seeking foundational protection — life insurance, critical illness, or disability coverage to secure your financial future.",
    price: "Custom",
    priceNote: "Tailored to your coverage needs",
    features: [
      "Term or whole life insurance",
      "Critical illness coverage",
      "Disability income protection",
      "Personalized needs analysis",
    ],
    featured: false,
  },
  {
    name: "Family",
    description:
      "Comprehensive family protection packages covering income replacement, mortgage, children's needs, and retirement — all under one plan.",
    price: "Custom",
    priceNote: "Built around your family's priorities",
    features: [
      "Multi-life coverage options",
      "Mortgage & debt protection",
      "Children's life & education plans",
      "Retirement savings integration",
      "Annual policy review",
    ],
    featured: true,
  },
  {
    name: "Business",
    description:
      "Purpose-built for business owners and professionals requiring key person coverage, group benefits, and succession planning solutions.",
    price: "Custom",
    priceNote: "Structured for your business scale",
    features: [
      "Key person insurance",
      "Group benefits design",
      "Business succession planning",
      "Corporate-owned life insurance",
    ],
    featured: false,
  },
];

export default function ServicesPricing() {
  return (
    <section className="services-pricing-section">
      <div className="services-pricing-container">

        {/* Header */}
        <div className="services-pricing-header">
          <div className="services-pricing-badge">
            <span className="services-pricing-badge-line" aria-hidden="true" />
            <span className="services-pricing-badge-text">Protection Packages</span>
          </div>
          <h2 className="services-pricing-title">
            Coverage for every<br />chapter of life.
          </h2>
          <p className="services-pricing-subtitle">
            Every plan is personalized — no off-the-shelf policies. Pricing is always based on your
            specific needs, health profile, and coverage goals.
          </p>
        </div>

        {/* Cards */}
        <div className="services-pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`services-pricing-card${tier.featured ? " services-pricing-card--featured" : ""}`}
            >
              {tier.featured && (
                <span className="services-pricing-featured-badge">Most Popular</span>
              )}

              <h3 className="services-pricing-name">{tier.name}</h3>
              <p className="services-pricing-desc">{tier.description}</p>

              <div className="services-pricing-price-block">
                <div className="services-pricing-price">{tier.price}</div>
                <p className="services-pricing-price-note">{tier.priceNote}</p>
              </div>

              <ul className="services-pricing-features">
                {tier.features.map((f) => (
                  <li key={f} className="services-pricing-feature">
                    <svg
                      className="services-pricing-feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`services-pricing-btn${
                  tier.featured
                    ? " services-pricing-btn--featured"
                    : " services-pricing-btn--default"
                }`}
              >
                Get a Free Consultation
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
