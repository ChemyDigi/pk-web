"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/css/contact/ContactHero.css";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to send message. Please try again."
        );
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      mobileNumber: "",
      email: "",
      message: "",
    });
    setErrorMessage("");
    setIsSubmitted(false);
  };

  return (
    <section className="contact-hero-section" aria-label="Contact Section">
      {/* Background with Pradeep and Chess pieces */}
      <div className="contact-hero-bg-container">
        <Image
          src="/images/contact/pradeep-chess.png"
          alt="Pradeep Liyanage - Strategic Financial Protection & Life Insurance Consultation"
          fill
          priority
          sizes="100vw"
          className="contact-hero-bg-image"
        />
        {/* Horizontal gradient fade into solid black on the right */}
        <div className="contact-hero-overlay-gradient-h" />
        {/* Vertical gradient fade for navbar and section bottom */}
        <div className="contact-hero-overlay-gradient-v" />
      </div>

      {/* Main Grid Container */}
      <div className="contact-hero-content-container">
        {/* Left spacer column allows Pradeep & chessboard to be visible */}
        <div className="contact-hero-visual-col" aria-hidden="true" />

        {/* Right Form Column */}
        <div className="contact-hero-form-col">
          {/* Eyebrow badge with line */}
          <div className="contact-hero-eyebrow">
            <span className="contact-hero-eyebrow-line" aria-hidden="true" />
            <span className="contact-hero-eyebrow-text">Start the Conversation</span>
          </div>

          {/* Section Main Heading */}
          <h1 className="contact-hero-heading">
            The right protection starts with a conversation. Let’s build your future with confidence
          </h1>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="contact-hero-success-box">
              <div className="contact-hero-success-icon" aria-hidden="true">
                ✓
              </div>
              <h2 className="contact-hero-success-title">Message Received</h2>
              <p className="contact-hero-success-desc">
                Thank you for getting in touch, {formData.firstName || "valued client"}. Pradeep will review your details and connect with you shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="contact-hero-reset-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-hero-form" noValidate>
              {errorMessage && (
                <div className="contact-hero-error-box" role="alert">
                  {errorMessage}
                </div>
              )}

              {/* Row 1: First Name & Mobile Number */}
              <div className="contact-hero-form-row-2col">
                <div className="contact-hero-field">
                  <label htmlFor="firstName" className="contact-hero-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="Enter Your First Name"
                    className="contact-hero-input"
                    autoComplete="given-name"
                  />
                </div>

                <div className="contact-hero-field">
                  <label htmlFor="mobileNumber" className="contact-hero-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value })
                    }
                    placeholder="Enter Your Mobile Number"
                    className="contact-hero-input"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="contact-hero-field">
                <label htmlFor="email" className="contact-hero-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter Your Email"
                  className="contact-hero-input"
                  autoComplete="email"
                />
              </div>

              {/* Row 3: Message */}
              <div className="contact-hero-field">
                <label htmlFor="message" className="contact-hero-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Enter Your Message"
                  className="contact-hero-textarea"
                />
              </div>

              {/* Row 4: Submit Button */}
              <div className="contact-hero-submit-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-hero-submit-btn"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
