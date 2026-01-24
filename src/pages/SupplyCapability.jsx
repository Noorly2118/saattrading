import { Link } from "react-router-dom";
import warehouse from "../assets/warehouse.jpg";
import trucks from "../assets/logistics.jpg";

const SupplyCapability = () => {
  return (
    <>
      <style>{`
        .supply-page {
          padding: 7rem 0;
          background: #f4f7f8;
          color: #2b2b2b;
        }

        .supply-container {
          max-width: 1300px;
          margin: auto;
          padding: 0 1.5rem;
        }

        /* INTRO */
        .intro {
          max-width: 900px;
          margin-bottom: 5rem;
        }

        .intro h1 {
          font-size: 3.2rem;
          font-weight: 900;
          color: #0f5c5c;
          margin-bottom: 1.5rem;
        }

        .intro p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #444;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 3rem;
          margin: 6rem 0;
        }

        .stat {
          background: #fff;
          padding: 2.5rem;
          border-radius: 18px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .stat h2 {
          font-size: 3rem;
          color: #f28c28;
          margin-bottom: 0.5rem;
        }

        .stat p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        /* PROCESS */
        .process {
          margin: 6rem 0;
        }

        .process h2 {
          text-align: center;
          font-size: 2.6rem;
          color: #0f5c5c;
          margin-bottom: 4rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2.5rem;
        }

        .step {
          background: linear-gradient(135deg, #ffffff, #f9fbfb);
          padding: 2.5rem;
          border-left: 6px solid #0f5c5c;
          border-radius: 16px;
        }

        .step span {
          font-size: 2.4rem;
          font-weight: 900;
          color: #9aa6a6;
        }

        .step h4 {
          font-size: 1.4rem;
          margin: 1rem 0;
          color: #0f5c5c;
        }

        /* MATERIAL SCOPE */
        .scope {
          margin: 6rem 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .scope ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .scope li {
          background: #fff;
          padding: 1.3rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .scope img {
          width: 100%;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        /* RISK */
        .risk {
          margin: 7rem 0;
          background: #ffffff;
          padding: 4rem;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.1);
        }

        .risk h2 {
          font-size: 2.6rem;
          color: #0f5c5c;
          margin-bottom: 2rem;
        }

        .risk p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        /* CTA */
        .final-cta {
          text-align: center;
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f5c5c, #003d4a);
          border-radius: 30px;
          color: #fff;
          margin-top: 7rem;
        }

        .final-cta h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
        }

        .final-cta a {
          display: inline-block;
          padding: 1.2rem 3.5rem;
          border-radius: 60px;
          background: #f28c28;
          color: #fff;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 15px 40px rgba(242,140,40,0.45);
        }

        .final-cta a:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 900px) {
          .scope {
            grid-template-columns: 1fr;
          }

          .intro h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="supply-page">
        <div className="supply-container">

          {/* INTRO */}
          <div className="intro">
            <h1>Our Supply Capability</h1>
            <p>
              SAAT delivers construction materials at scale with consistency,
              reliability, and speed. We don’t just sell materials — we manage
              supply chains for projects that cannot afford delays.
            </p>
          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat">
              <h2>2,000+ tons</h2>
              <p>Monthly steel & wire handling capacity</p>
            </div>
            <div className="stat">
              <h2>Citywide</h2>
              <p>Delivery across Addis & regional projects</p>
            </div>
            <div className="stat">
              <h2>Multiple Mills</h2>
              <p>Risk-free sourcing from approved suppliers</p>
            </div>
            <div className="stat">
              <h2>Project-Based</h2>
              <p>Supply planning for small to mega projects</p>
            </div>
          </div>

          {/* PROCESS */}
          <div className="process">
            <h2>How We Supply</h2>
            <div className="steps">
              <div className="step">
                <span>01</span>
                <h4>Sourcing</h4>
                <p>Materials sourced from vetted mills and manufacturers.</p>
              </div>
              <div className="step">
                <span>02</span>
                <h4>Quality Check</h4>
                <p>Specification, size, and quantity verification.</p>
              </div>
              <div className="step">
                <span>03</span>
                <h4>Warehousing</h4>
                <p>Buffer stock to protect projects from delays.</p>
              </div>
              <div className="step">
                <span>04</span>
                <h4>Delivery</h4>
                <p>Scheduled site delivery with coordination support.</p>
              </div>
            </div>
          </div>

          {/* MATERIAL SCOPE */}
          <div className="scope">
            <ul>
              <li>Reinforcement Steel (Rebar)</li>
              <li>Black Annealed Binding Wire</li>
              <li>Nails </li>
              <li>Staffa </li>
              <li>Custom Sourcing on Request</li>
            </ul>
            <img src={warehouse} alt="Construction material warehouse" />
          </div>

          {/* RISK */}
          <div className="risk">
            <h2>Supply Risk Management</h2>
            <p>We mitigate supply risk through diversified sourcing, stock buffering, and project-based allocation.</p>
            <p>Price volatility, shortages, and logistics delays are handled before they affect your site.</p>
          </div>

          {/* CTA */}
          <div className="final-cta">
            <h2>Planning a Large Project?</h2>
            <Link to="/request-quote">Talk to Our Supply Team</Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default SupplyCapability;
