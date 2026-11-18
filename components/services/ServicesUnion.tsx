import React from "react";
import Image from "next/image";
import "@/css/services/ServicesUnion.css";


const timelineNodes = [
  { year: "2016", step: "01", title: "Partnership", text: "Strategic partnership established" },
  { year: "2019", step: "02", title: "Affinity Channel", text: "Affinity insurance channel introduced" },
  { year: "2019", step: "03", title: "Co-brand", text: "Co-branded initiative" },
  { year: "Today", step: "04", title: "Ongoing", text: "Continued focus on protection, service & member value", current: true },
];

export default function ServicesUnion() {
  return (
    <section className="services-union-section" id="union-uththareethara">
      <div className="services-union-container">

        {/* Top: Text + Logo */}
        <div className="services-union-top">

          {/* Left: text */}
          <div className="services-union-left">
            {/* Badge */}
            <div className="services-union-badge">
              <span className="services-union-badge-line" aria-hidden="true" />
              <span className="services-union-badge-text">Affinity Partnerships</span>
            </div>

            {/* Organisation name */}
            <h1 className="services-union-org-name">Union Uththareethara</h1>

            {/* Sub-headline */}
            <h2 className="services-union-subheading">Protecting the Guardians of Justice</h2>

            {/* Body paragraphs */}
            <div className="services-union-body">
              <p className="services-union-para">
                Through my work in <strong>Affinity Partnerships</strong>, I support trusted member
                communities by connecting them with insurance solutions designed around their
                specific needs.
              </p>
              <p className="services-union-para">
                One of my key areas of responsibility is the{" "}
                <strong>Bar Association of Sri Lanka (BASL)</strong> through the strategic insurance
                partnership between BASL and <strong>Union Assurance PLC</strong>.
              </p>
              <p className="services-union-para">
                Established in 2016, the partnership introduced{" "}
                <strong>Union Uththareethara</strong>, an affinity insurance channel created to
                provide tailor-made insurance solutions for members of the Bar Association of Sri
                Lanka.
              </p>
              <p className="services-union-para">
                The partnership goes beyond providing insurance. It is built around a shared
                commitment to{" "}
                <strong>
                  protection, financial security and long-term value for the BASL community
                </strong>
                , under the co-brand promise:
              </p>
            </div>
          </div>

          {/* Right: Logo card */}
          <div className="services-union-right">
            <div className="services-union-logo-card">
              <Image
                src="/images/services/union.png"
                alt="Union Uththareethara — To Protect the Guardians of Justice"
                width={340}
                height={340}
                className="services-union-logo-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom: Role statement + Timeline */}
        <div className="services-union-bottom">

          {/* Role statement */}
          <div className="services-union-role">
            <svg
              className="services-union-role-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className="services-union-role-text">
              <strong>
                My role is to help make that relationship meaningful at an individual level —
              </strong>{" "}
              providing accessible guidance, suitable solutions and ongoing support to members.
            </p>
          </div>

          {/* Timeline */}
          <ol className="services-union-timeline" aria-label="Partnership milestones">
            {timelineNodes.map((node, i) => (
              <li
                key={i}
                className={`services-union-milestone${node.current ? " is-current" : ""}`}
              >
                <span className="services-union-milestone-dot" aria-hidden="true" />
                <div className="services-union-milestone-card">
                  <span className="services-union-milestone-step" aria-hidden="true">{node.step}</span>
                  <span className="services-union-milestone-year">{node.year}</span>
                  <span className="services-union-milestone-title">{node.title}</span>
                  <p className="services-union-milestone-text">{node.text}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  );
}
