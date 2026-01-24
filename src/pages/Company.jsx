import { Link } from "react-router-dom";

const Company = () => {
  return (
    <>
      <style>{`
        .company-page {
          background: #ffffff;
          color: #2b2b2b;
          padding: 7rem 0 5rem;
        }

        .company-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* HERO */
        .company-hero {
          margin-bottom: 6rem;
          border-left: 6px solid #0F5C5C;
          padding-left: 2rem;
        }

        .company-hero h1 {
          font-size: 3.2rem;
          font-weight: 900;
          color: #0F5C5C;
          margin-bottom: 1.2rem;
        }

        .company-hero p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #444;
          max-width: 850px;
        }

        /* SECTION */
        .company-section {
          margin-bottom: 5rem;
        }

        .company-section h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0F5C5C;
          margin-bottom: 1.5rem;
        }

        .company-section p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #444;
          margin-bottom: 1.5rem;
        }

        /* SPLIT BLOCK */
        .split-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .split-box {
          background: #f5f7f8;
          padding: 2.5rem;
          border-radius: 16px;
        }

        .split-box h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0F5C5C;
          margin-bottom: 1rem;
        }

        .split-box p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #555;
        }

        /* VALUES LIST */
        .values-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .values-list li {
          padding: 1.5rem;
          border-left: 4px solid #F28C28;
          background: #fff;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          font-size: 1.05rem;
        }

        /* CTA */
        .company-cta {
          margin-top: 6rem;
          padding: 4rem 3rem;
          background: linear-gradient(135deg, #0F5C5C, #083f3f);
          border-radius: 24px;
          color: #fff;
          text-align: center;
        }

        .company-cta h2 {
          font-size: 2.4rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .company-cta p {
          font-size: 1.2rem;
          max-width: 750px;
          margin: 0 auto 2.5rem;
          opacity: 0.95;
        }

        .company-cta a {
          display: inline-block;
          padding: 1.1rem 3rem;
          border-radius: 50px;
          background: #F28C28;
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .company-cta a:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(242,140,40,0.45);
        }

        @media (max-width: 900px) {
          .split-block {
            grid-template-columns: 1fr;
          }

          .company-hero h1 {
            font-size: 2.6rem;
          }
        }
      `}</style>

      <section className="company-page">
        <div className="company-container">

          {/* HERO */}
          <div className="company-hero">
            <h1>About SAAT Trading PLC</h1>
            <p>
              SAAT Trading PLC is a professional Ethiopian trading company dedicated to
              supplying construction materials and project-based procurement solutions.
              We support the nation’s growing infrastructure and building sector through
              reliable sourcing, quality-focused supply, and long-term partnerships.
            </p>
          </div>

          {/* WHO WE ARE */}
          <div className="company-section">
            <h2>Who We Are</h2>
            <p>
              SAAT Trading PLC operates at the intersection of construction demand and
              dependable material supply. Our business is built around understanding
              real project requirements — quantities, specifications, timelines, and
              logistics — and delivering materials that meet those demands without
              disruption.
            </p>
            <p>
              We work closely with contractors, developers, and institutions, providing
              materials that form the backbone of structural safety and long-term
              durability.
            </p>
          </div>

          {/* WHAT WE DO */}
          <div className="company-section">
            <h2>What We Do</h2>
            <p>
              Our core activity is the supply of essential construction materials,
              supported by procurement planning and logistics coordination.
              We serve both small-scale projects and large construction works.
            </p>

            <div className="split-block">
              <div className="split-box">
                <h3>Material Supply</h3>
                <p>
                  Reinforcement steel, binding wire, nails, and related construction
                  inputs supplied according to client specifications and project scope.
                </p>
              </div>

              <div className="split-box">
                <h3>Project-Based Procurement</h3>
                <p>
                  Bulk and phased supply for residential, commercial, and infrastructure
                  projects with predictable delivery schedules.
                </p>
              </div>
            </div>
          </div>

          {/* PHILOSOPHY */}
          <div className="company-section">
            <h2>Our Supply Philosophy</h2>
            <p>
              Construction materials are critical to safety, performance, and project
              success. For this reason, our operations prioritize quality assurance,
              supplier reliability, and transparent communication.
            </p>

            <ul className="values-list">
              <li><strong>Quality Control</strong> – Materials sourced from trusted suppliers</li>
              <li><strong>Reliability</strong> – Predictable supply and honest timelines</li>
              <li><strong>Ethical Practice</strong> – Compliance and responsible trading</li>
              <li><strong>Client Partnership</strong> – Long-term, trust-based relationships</li>
            </ul>
          </div>

          {/* VISION & MISSION */}
          <div className="company-section">
            <h2>Vision & Mission</h2>
            <div className="split-block">
              <div className="split-box">
                <h3>Our Vision</h3>
                <p>
                  To become a trusted national supplier of construction materials,
                  recognized for professionalism, reliability, and contribution to
                  Ethiopia’s infrastructure development.
                </p>
              </div>

              <div className="split-box">
                <h3>Our Mission</h3>
                <p>
                  To deliver quality materials at competitive prices, support projects
                  with dependable logistics, and continuously improve our supply
                  capabilities in line with market needs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="company-cta">
            <h2>Build With a Trusted Partner</h2>
            <p>
              Whether you are planning a residential development, commercial project,
              or large-scale infrastructure work, SAAT Trading PLC is ready to support
              your material supply needs.
            </p>
            <Link to="/request-quote">Request a Quote</Link>
          </div>

{/* COMPANY PROFILE DOWNLOAD */}
<div className="company-section">
  <h2>Official Company Profile</h2>
  <p>
    For detailed corporate information, registration details, and supply scope,
    you can download our official company profile document.
    This document is intended for clients, partners, and institutional review.
  </p>

  <div
    style={{
      marginTop: "2.5rem",
      padding: "2.5rem",
      border: "2px dashed #0F5C5C",
      borderRadius: "18px",
      background: "#f8fbfb",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem",
      flexWrap: "wrap",
    }}
  >
    <div>
      <h3 style={{ margin: 0, fontSize: "1.4rem", color: "#0F5C5C" }}>
        SAAT Trading PLC – Company Profile (PDF)
      </h3>
      <p style={{ margin: "0.6rem 0 0", color: "#555" }}>
        Includes company overview, business scope, vision, mission, and supply
        capabilities.
      </p>
    </div>

    <a
      href="/company-profile/SAAT-Trading-Company-Profile.pdf"
      download
      style={{
        padding: "1rem 2.8rem",
        background: "#0F5C5C",
        color: "#fff",
        borderRadius: "50px",
        fontWeight: "800",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      Download PDF
    </a>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Company;
