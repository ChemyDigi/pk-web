"use client";

import React, { useRef } from "react";
import Image from "next/image";
import "@/css/home/HomeInsights.css";

interface InsightPost {
  id: string;
  author: string;
  followers: string;
  time: string;
  text: string;
  tags: string[];
  image: string;
  alt: string;
}

const posts: InsightPost[] = [
  {
    id: "post-1",
    author: "Pradeep Liyanage",
    followers: "3,556 followers",
    time: "3w •",
    text: "Humbled and honoured to receive Platinum Award, Best Capacity Builder Winner Award and Best Leader Unit 1st Runner-Up Award under Associate Regional Sales Manager Category. It is a great privilege!",
    tags: ["#Leadershipexcellence", "#unionassurance", "#annualawards2025"],
    image: "/images/home/64692ec138a3de0fdcb527f6537d81f81d9f75b1.jpg",
    alt: "Pradeep Liyanage receiving Platinum and Best Leader Awards",
  },
  {
    id: "post-2",
    author: "Pradeep Liyanage",
    followers: "3,556 followers",
    time: "3w •",
    text: "Over time, I have come to value the importance of understanding professional communities more deeply, including affinity groups such as those connected to the Bar Association of Sri Lanka.",
    tags: ["#Affinity", "#Protection"],
    image: "/images/home/04696596ef8494706046a8e4970c20ac42b6cf30.jpg",
    alt: "Protection Solutions Should Reflect Professional Realities",
  },
  {
    id: "post-3",
    author: "Pradeep Liyanage",
    followers: "3,556 followers",
    time: "3w •",
    text: "9 years ago, in 1927, four life insurance consultants came together in the USA to establish an association named the MDRT Association. After a remarkable journey spanning a century, in 2026.",
    tags: ["#MDRTDay2026", "#MDRT", "#SriLanka"],
    image: "/images/home/fa12909e290f548ca45c022107cc7b82f3e8eb49.jpg",
    alt: "Pradeep Liyanage at MDRT Event",
  },
  {
    id: "post-4",
    author: "Pradeep Liyanage",
    followers: "3,556 followers",
    time: "3w •",
    text: "Humbled and honoured to receive Platinum Award, Best Capacity Builder Winner Award and Best Leader Unit 1st Runner-Up Award under Associate Regional Sales Manager Category.",
    tags: ["#Leadershipexcellence", "#unionassurance", "#annualawards2025"],
    image: "/images/home/64692ec138a3de0fdcb527f6537d81f81d9f75b1.jpg",
    alt: "Pradeep Liyanage - Leadership Excellence Recognition",
  },
];

export default function HomeInsights() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollOffset = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="home-insights-section" id="insights">
      <div className="home-insights-container">
        
        {/* Section Header */}
        <div className="home-insights-header">
          {/* Badge */}
          <div className="home-insights-badge">
            <span className="home-insights-badge-line" aria-hidden="true" />
            <span className="home-insights-badge-text">Latest Insights</span>
          </div>

          {/* Heading */}
          <h2 className="home-insights-heading">
            Thoughts, achievements, and <br />
            industry perspectives
          </h2>

          {/* Carousel Arrows */}
          <div className="home-insights-arrows">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="home-insights-arrow-btn home-insights-arrow-left"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="home-insights-arrow-btn home-insights-arrow-right"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div className="home-insights-track" ref={scrollContainerRef}>
          {posts.map((post) => (
            <article key={post.id} className="home-insights-card">
              
              {/* Card Header (LinkedIn Style) */}
              <div className="home-insights-card-header">
                <div className="home-insights-card-avatar">
                  <Image
                    src="/images/home/Pradeep.png"
                    alt={post.author}
                    width={40}
                    height={40}
                    className="home-insights-avatar-img"
                  />
                </div>
                <div className="home-insights-card-meta">
                  <span className="home-insights-author-name">{post.author}</span>
                  <span className="home-insights-followers">{post.followers}</span>
                  <div className="home-insights-time-row">
                    <span>{post.time}</span>
                    {/* Globe Icon */}
                    <svg className="home-insights-globe-icon" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm6.93 7H11.9a11.7 11.7 0 0 0-1.07-4.14A6.98 6.98 0 0 1 14.93 7zm-3.9 2h3.9a6.98 6.98 0 0 1-4.1 4.14c.48-1.28.85-2.67 1.07-4.14zm-4.96 0h3.86a10.5 10.5 0 0 1-.93 4.86c-.5.1-.98.14-1.5.14s-1-.04-1.5-.14A10.5 10.5 0 0 1 6.07 9zm0-2a10.5 10.5 0 0 1 .93-4.86c.5-.1.98-.14 1.5-.14s1 .04 1.5.14A10.5 10.5 0 0 1 9.93 7H6.07zM5.17 2.86A11.7 11.7 0 0 0 4.1 7H1.07a6.98 6.98 0 0 1 4.1-4.14zM1.07 9h3.03c.22 1.47.59 2.86 1.07 4.14A6.98 6.98 0 0 1 1.07 9z" />
                    </svg>
                  </div>
                </div>
                {/* 3 dots menu button */}
                <button type="button" className="home-insights-more-btn" aria-label="More options">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="2.5" cy="8" r="1.5" />
                    <circle cx="8" cy="8" r="1.5" />
                    <circle cx="13.5" cy="8" r="1.5" />
                  </svg>
                </button>
              </div>

              {/* Card Body Text */}
              <div className="home-insights-card-body">
                <p className="home-insights-card-text">{post.text}</p>
                <p className="home-insights-card-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="home-insights-tag">
                      {tag}{" "}
                    </span>
                  ))}
                </p>
              </div>

              {/* Card Image */}
              <div className="home-insights-card-media">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={600}
                  className="home-insights-post-img"
                />
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
