import React from "react";
import Image from "next/image";
import "@/css/services/ServicesUnion.css";

const timelineNodes = [
  {
    year: "2016",
    labelTop: "",
    labelBottom: "Strategic partnership established",
  },
  {
    year: "2019",
    labelTop: "Affinity insurance channel introduced",
    labelBottom: "",
  },
  {
    year: "2019",
    labelTop: "",
    labelBottom: "Co-branded initiative",
  },
  {
    year: "Today",
    labelTop: "Continued focus on protection, service & member value",
    labelBottom: "",
  },
];

export default function ServicesUnion() {
  return (
    <section className="services-union-section" id="union-uththareethara">
      <div className="services-union-container">

        {/* ── Top: Text + Logo ── */}
        <div className="services-union-top">

          {/* Left: text */}
          <div className="services-union-left">
            {/* Badge */}
            <div className="services-union-badge">
              <span className="services-union-badge-line" aria-hidden="true" />
              <span className="services-union-badge-text">Affinity Partnerships</span>
            </div>

            {/* Organisation name */}
            <h2 className="services-union-org-name">Union Uththareethara</h2>

            {/* Sub-headline */}
            <h3 className="services-union-subheading">Protecting the Guardians of Justice</h3>

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
                src="/images/services/union.jpg"
                alt="Union Uththareethara — To Protect the Guardians of Justice"
                width={340}
                height={340}
                className="services-union-logo-img"
              />
            </div>
          </div>

        </div>

        {/* ── Bottom: Role statement + Timeline ── */}
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
          <div className="services-union-timeline">
            <div className="services-union-nodes">
              {timelineNodes.map((node, i) => (
                <div key={i} className="services-union-node">
                  {/* Top label */}
                  <div className="services-union-node-label-top">
                    {node.labelTop}
                  </div>

                  {/* Dot with stems */}
                  <div className="services-union-node-dot-wrap">
                    {node.labelTop && (
                      <div className="services-union-node-stem-top" />
                    )}
                    <div className="services-union-node-dot" />
                    {node.labelBottom && (
                      <div className="services-union-node-stem-bottom" />
                    )}
                  </div>

                  {/* Year */}
                  <div className="services-union-node-year">{node.year}</div>

                  {/* Bottom label */}
                  <div className="services-union-node-label-bottom">
                    {node.labelBottom}
                  </div>
                </div>
              ))}
            </div>

            {/* The connecting line drawn behind the nodes */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "calc(2.5rem + 0.6rem + 5px)",
                left: "12.5%",
                right: "12.5%",
                height: "1px",
                background: "rgba(255,255,255,0.18)",
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
