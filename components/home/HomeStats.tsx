import React from "react";
import "@/css/home/HomeStats.css";

const stats = [
  { label: "Successful Projects Delivered", value: "50+" },
  { label: "Client Satisfaction Rate", value: "99%" },
  { label: "Years of Professional Experience", value: "5+" },
  { label: "Active Enterprise Clients", value: "30+" },
];

export default function HomeStats() {
  return (
    <section className="home-stats-section">
      <div className="home-stats-container">
        <dl className="home-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="home-stats-card">
              <dt className="home-stats-text">{stat.label}</dt>
              <dd className="home-stats-number">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
