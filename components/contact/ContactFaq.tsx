"use client";

import React, { useState } from "react";
import "@/css/contact/ContactFaq.css";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What insurance solutions do you provide?",
    answer:
      "Protection solutions are tailored for individuals, families, professionals, and member communities, covering key areas such as health, life stages, retirement.",
  },
  {
    id: "faq-2",
    question: "How do I know which policy is right for me?",
    answer:
      "Through a comprehensive needs discovery conversation, we assess your financial responsibilities, goals, current coverage, and budget to recommend the exact solution tailored to your life stage.",
  },
  {
    id: "faq-3",
    question: "Can you review my existing insurance policies?",
    answer:
      "Yes. I provide objective, complimentary policy audits to identify gaps in coverage, duplicate benefits, or opportunities to optimize your premiums.",
  },
  {
    id: "faq-4",
    question: "Is the initial consultation free?",
    answer:
      "Yes, the initial discovery session is completely confidential and complimentary with no obligation to purchase.",
  },
  {
    id: "faq-5",
    question: "Can insurance be arranged according to my budget?",
    answer:
      "Absolutely. Plans are customizable and designed around what you can comfortably commit to, ensuring essential protection without financial strain.",
  },
  {
    id: "faq-6",
    question: "What support is available after purchasing a policy?",
    answer:
      "I remain your dedicated advisor throughout the lifetime of your policy — handling annual reviews, beneficiary updates, and personally managing claims when you need it most.",
  },
  {
    id: "faq-7",
    question: "Do you provide insurance solutions for professional associations?",
    answer:
      "Yes, through customized corporate and group schemes, I design tailored risk protection packages for executive bodies, corporate entities, and professional associations.",
  },
  {
    id: "faq-8",
    question: "How long does it take to arrange a policy?",
    answer:
      "Depending on the policy type and medical underwriting requirements, most plans can be established within 3 to 7 business days following submission.",
  },
  {
    id: "faq-9",
    question: "Is my personal and financial information kept confidential?",
    answer:
      "Strict confidentiality and professional ethics are paramount. All client information is protected under industry compliance and privacy standards.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="contact-faq-section" aria-label="Frequently Asked Questions">
      <div className="contact-faq-container">
        {/* Eyebrow badge with horizontal line */}
        <div className="contact-faq-eyebrow">
          <span className="contact-faq-eyebrow-line" aria-hidden="true" />
          <span className="contact-faq-eyebrow-text">
            Clear Answers, Confident Decisions
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="contact-faq-heading">
          The right protection starts with the right questions. Here are the answers that matter
        </h2>

        {/* Accordion List */}
        <div className="contact-faq-list" role="region" aria-label="FAQ Accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className="contact-faq-item">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={
                    isOpen ? "contact-faq-btn-active" : "contact-faq-btn-collapsed"
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                >
                  <span
                    className={
                      isOpen
                        ? "contact-faq-question-text-active"
                        : "contact-faq-question-text-collapsed"
                    }
                  >
                    {item.question}
                  </span>

                  {isOpen ? (
                    <span className="contact-faq-icon-active" aria-hidden="true">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </span>
                  ) : (
                    <span className="contact-faq-icon-collapsed" aria-hidden="true">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </span>
                  )}
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="contact-faq-answer"
                  >
                    <p className="contact-faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
