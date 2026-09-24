"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { initialLinkedInPosts, LinkedInPost } from "@/data/linkedinPosts";
import "@/css/home/HomeInsights.css";

export default function HomeInsights() {
  const [posts, setPosts] = useState<LinkedInPost[]>(initialLinkedInPosts);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll positions to enable/disable arrow buttons
  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    // Optionally fetch dynamic feed from API route if configured
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch("/api/linkedin-posts");
        if (res.ok) {
          const data = await res.json();
          if (data?.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            setPosts(data.posts);
          }
        }
      } catch (err) {
        // Fallback already preset to initialLinkedInPosts
        console.error("Unable to load live LinkedIn posts:", err);
      }
    };

    fetchLatestPosts();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollState();
      container.addEventListener("scroll", checkScrollState, { passive: true });
      window.addEventListener("resize", checkScrollState);
      return () => {
        container.removeEventListener("scroll", checkScrollState);
        window.removeEventListener("resize", checkScrollState);
      };
    }
  }, [posts]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="home-insights-section" id="insights" aria-label="Latest LinkedIn Insights">
      <div className="home-insights-container">
        
        {/* Section Header */}
        <div className="home-insights-header">
          {/* Eyebrow Badge */}
          <div className="home-insights-badge">
            <span className="home-insights-badge-line" aria-hidden="true" />
            <span className="home-insights-badge-text">Latest Insights</span>
          </div>

          {/* Headline and Arrows Row */}
          <div className="home-insights-title-row">
            <h2 className="home-insights-heading">
              Thoughts, achievements, and <br className="hidden sm:inline" />
              industry perspectives
            </h2>

            {/* Carousel Arrows */}
            <div className="home-insights-arrows">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className={`home-insights-arrow-btn home-insights-arrow-left ${
                  !canScrollLeft ? "home-insights-arrow-disabled" : ""
                }`}
                aria-label="Previous posts"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className={`home-insights-arrow-btn home-insights-arrow-right ${
                  !canScrollRight ? "home-insights-arrow-disabled" : ""
                }`}
                aria-label="Next posts"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Track (8 LinkedIn Cards) */}
        <div className="home-insights-track" ref={scrollContainerRef}>
          {posts.map((post) => (
            <article key={post.id} className="home-insights-card">
              
              {/* Card Header (LinkedIn Style) */}
              <div className="home-insights-card-header">
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-insights-card-avatar"
                  aria-label={`View ${post.author} on LinkedIn`}
                >
                  <Image
                    src={post.authorAvatar || "/images/home/Pradeep.png"}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="home-insights-avatar-img"
                  />
                </a>

                <div className="home-insights-card-meta">
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-insights-author-name"
                  >
                    {post.author}
                  </a>
                  <span className="home-insights-followers">{post.followers}</span>
                  <div className="home-insights-time-row">
                    <span>{post.time}</span>
                    {/* Globe Icon */}
                    <svg className="home-insights-globe-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm6.93 7H11.9a11.7 11.7 0 0 0-1.07-4.14A6.98 6.98 0 0 1 14.93 7zm-3.9 2h3.9a6.98 6.98 0 0 1-4.1 4.14c.48-1.28.85-2.67 1.07-4.14zm-4.96 0h3.86a10.5 10.5 0 0 1-.93 4.86c-.5.1-.98.14-1.5.14s-1-.04-1.5-.14A10.5 10.5 0 0 1 6.07 9zm0-2a10.5 10.5 0 0 1 .93-4.86c.5-.1.98-.14 1.5-.14s1 .04 1.5.14A10.5 10.5 0 0 1 9.93 7H6.07zM5.17 2.86A11.7 11.7 0 0 0 4.1 7H1.07a6.98 6.98 0 0 1 4.1-4.14zM1.07 9h3.03c.22 1.47.59 2.86 1.07 4.14A6.98 6.98 0 0 1 1.07 9z" />
                    </svg>
                  </div>
                </div>

                {/* 3 dots link button to post */}
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-insights-more-btn"
                  title="View original post on LinkedIn"
                  aria-label="View original post on LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="2.5" cy="8" r="1.5" />
                    <circle cx="8" cy="8" r="1.5" />
                    <circle cx="13.5" cy="8" r="1.5" />
                  </svg>
                </a>
              </div>

              {/* Card Body Text */}
              <div className="home-insights-card-body">
                <p className="home-insights-card-text">{post.text}</p>
                <div className="home-insights-card-tags">
                  {post.tags.map((tag) => (
                    <a
                      key={tag}
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-insights-tag"
                    >
                      {tag}{" "}
                    </a>
                  ))}
                </div>
              </div>

              {/* Card Image */}
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home-insights-card-media"
                aria-label={`Open LinkedIn post: ${post.alt}`}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={600}
                  className="home-insights-post-img"
                />
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
