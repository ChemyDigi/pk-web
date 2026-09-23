import React from "react";
import "@/css/home/HomeFeatures.css";

const features = [
  {
    title: "Modern Web Architecture",
    description: "Built on state-of-the-art web frameworks ensuring lightning fast load times, scalability, and security.",
    icon: "⚡",
  },
  {
    title: "User-Centric Design",
    description: "Intuitive, accessible, and responsive interfaces that deliver delightful user experiences across all devices.",
    icon: "🎨",
  },
  {
    title: "Result-Driven Solutions",
    description: "Tailored strategies and custom software crafted to accelerate your business growth and digital reach.",
    icon: "🚀",
  },
];

export default function HomeFeatures() {
  return (
    <section className="home-features-section">
      <div className="home-features-container">
        <div className="home-features-header">
          <h2 className="home-features-badge">Why Choose Us</h2>
          <p className="home-features-heading">
            Everything you need to scale your digital presence
          </p>
        </div>
        <div className="home-features-grid">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="home-features-card"
            >
              <div className="home-features-icon">{feature.icon}</div>
              <h3 className="home-features-card-title">{feature.title}</h3>
              <p className="home-features-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
