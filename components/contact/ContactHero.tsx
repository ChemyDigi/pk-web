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
  const [firstNameError, setFirstNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateFirstName = (val: string): string => {
    if (!val.trim()) {
      return "Please enter your first name.";
    }
    return "";
  };

  const validateMobile = (mobileStr: string): string => {
    const trimmed = mobileStr.trim();
    if (!trimmed) {
      return "Please enter your mobile number.";
    }
    const validChars = /^[0-9+\s\-()]+$/.test(trimmed);
    const digitsOnly = trimmed.replace(/[\s\-()+.]/g, "");
    if (!validChars || digitsOnly.length < 7 || digitsOnly.length > 16) {
      return "Please enter a valid mobile number.";
    }
    return "";
  };

  const validateEmail = (emailStr: string): string => {
    const trimmed = emailStr.trim();
    if (!trimmed) {
      return "Please enter your email address.";
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email address (e.g. name@example.com).";
    }
    return "";
  };

  const validateMessage = (val: string): string => {
    if (!val.trim()) {
      return "Please enter your message.";
    }
    return "";
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, firstName: val }));
    if (firstNameError) {
      setFirstNameError(validateFirstName(val));
    }
  };

  const handleFirstNameBlur = () => {
    if (formData.firstName.trim()) {
      setFirstNameError(validateFirstName(formData.firstName));
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, mobileNumber: val }));
    if (mobileError) {
      setMobileError(validateMobile(val));
    }
  };

  const handleMobileBlur = () => {
    if (formData.mobileNumber.trim()) {
      setMobileError(validateMobile(formData.mobileNumber));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));
    if (emailError) {
      setEmailError(validateEmail(val));
    }
  };

  const handleEmailBlur = () => {
    if (formData.email.trim()) {
      setEmailError(validateEmail(formData.email));
    }
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, message: val }));
    if (messageError) {
      setMessageError(validateMessage(val));
    }
  };

  const handleMessageBlur = () => {
    if (formData.message.trim()) {
      setMessageError(validateMessage(formData.message));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const nameErr = validateFirstName(formData.firstName);
    const mobileErr = validateMobile(formData.mobileNumber);
    const emailErr = validateEmail(formData.email);
    const messageErr = validateMessage(formData.message);

    setFirstNameError(nameErr);
    setMobileError(mobileErr);
    setEmailError(emailErr);
    setMessageError(messageErr);

    if (nameErr || mobileErr || emailErr || messageErr) {
      return;
    }

    setIsSubmitting(true);

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
    setFirstNameError("");
    setMobileError("");
    setEmailError("");
    setMessageError("");
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
                    onChange={handleFirstNameChange}
                    onBlur={handleFirstNameBlur}
                    placeholder="Enter Your First Name"
                    className={`contact-hero-input ${
                      firstNameError ? "is-invalid" : ""
                    }`}
                    autoComplete="given-name"
                    aria-invalid={!!firstNameError}
                    aria-describedby={
                      firstNameError ? "firstName-error" : undefined
                    }
                  />
                  {firstNameError && (
                    <span
                      id="firstName-error"
                      className="contact-hero-field-error"
                      role="alert"
                    >
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{firstNameError}</span>
                    </span>
                  )}
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
                    onChange={handleMobileChange}
                    onBlur={handleMobileBlur}
                    placeholder="Enter Your Mobile Number"
                    className={`contact-hero-input ${
                      mobileError ? "is-invalid" : ""
                    }`}
                    autoComplete="tel"
                    aria-invalid={!!mobileError}
                    aria-describedby={
                      mobileError ? "mobile-error" : undefined
                    }
                  />
                  {mobileError && (
                    <span
                      id="mobile-error"
                      className="contact-hero-field-error"
                      role="alert"
                    >
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{mobileError}</span>
                    </span>
                  )}
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
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter Your Email"
                  className={`contact-hero-input ${
                    emailError ? "is-invalid" : ""
                  }`}
                  autoComplete="email"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <span
                    id="email-error"
                    className="contact-hero-field-error"
                    role="alert"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{emailError}</span>
                  </span>
                )}
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
                  onChange={handleMessageChange}
                  onBlur={handleMessageBlur}
                  placeholder="Enter Your Message"
                  className={`contact-hero-textarea ${
                    messageError ? "is-invalid" : ""
                  }`}
                  aria-invalid={!!messageError}
                  aria-describedby={
                    messageError ? "message-error" : undefined
                  }
                />
                {messageError && (
                  <span
                    id="message-error"
                    className="contact-hero-field-error"
                    role="alert"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{messageError}</span>
                  </span>
                )}
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
