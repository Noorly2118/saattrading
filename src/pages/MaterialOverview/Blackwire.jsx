import { Link } from "react-router-dom";
import blackwire from "../../assets/blackwirehero.jpg";
import Corrosion from "../../assets/Corrosion.jpg"
import binding from "../../assets/binding.jpg"
import coil from "../../assets/coil.jpg"



const BlackWire = () => {
  return (
    <>
      <style>{`
        .wire-page {
          padding: 8rem 0 6rem;
          background: linear-gradient(to bottom, #f8fafa, #ffffff);
          color: #333;
        }
        .wire-container {
          max-width: 1400px;
          margin: auto;
          padding: 0 1.5rem;
        }         

        .wire-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .hero-image {
          width: 100%;
        }

        .hero-image:hover {
          transform: scale(1.03);
        }

        .wire-hero h1 {
          font-size: 3.2rem;
          font-weight: 900;
          color: #003d4a;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .wire-hero p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 2.5rem;
        }

        .cta-btn {
          display: inline-block;
          padding: 1.1rem 3rem;
          border-radius: 50px;
          background: linear-gradient(135deg, #ff7f00, #ff9d00);
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 12px 35px rgba(255,127,0,0.35);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(255,127,0,0.45);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin: 5rem 0;
        }

        .feature-card {
          background: #fff;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          color: #003d4a;
          margin: 1.5rem 0 1rem;
        }

        .feature-card p {
          color: #555;
          line-height: 1.6;
        }

        .section {
          margin-bottom: 5rem;
        }

        .section h2 {
          font-size: 2.4rem;
          font-weight: 800;
          color: #003d4a;
          margin-bottom: 2rem;
          text-align: center;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          align-items: center;
        }

        .grid-2 img {
          width: 100%;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .specs-table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-radius: 16px;
          overflow: hidden;
        }

        .specs-table th, .specs-table td {
          padding: 1.2rem 1.5rem;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .specs-table th {
          background: #003d4a;
          color: #fff;
          font-weight: 700;
        }

        .specs-table tr:last-child td {
          border-bottom: none;
        }

        .applications-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          list-style: none;
          padding: 0;
        }

        .applications-list li {
          background: #fff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
          font-size: 1.1rem;
        }

        .final-cta {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #003d4a, #005c6d);
          border-radius: 24px;
          color: #fff;
          margin: 5rem 0;
        }

        .final-cta h2 {
          color: #fff;
          margin-bottom: 1rem;
        }

        .final-cta p {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.95;
        }

        @media (max-width: 992px) {
          .wire-hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .wire-hero h1 {
            font-size: 2.8rem;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .wire-hero h1 {
            font-size: 2.4rem;
          }

          .section h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="wire-page">
        <div className="wire-container">

          {/* HERO SECTION */}
          <div className="wire-hero">
            <img
              className="hero-image"
              src={blackwire}
              alt="High-quality black annealed binding wire coils ready for construction use"
            />

            <div>
              <h1>Premium Black Annealed Binding Wire</h1>
              <p>
                Engineered for superior flexibility and strength, our black binding wire is the trusted choice for securely tying reinforcement bars in concrete structures. Soft yet incredibly durable, it minimizes breakage and speeds up installation on demanding job sites.
              </p>

              <Link to="/request-quote" className="cta-btn">
                Get Instant Quote
              </Link>
            </div>
          </div>

          {/* KEY FEATURES */}
          <div className="section">
            <h2>Why Choose Our Black Binding Wire?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src={coil} alt="Close-up of black annealed wire coil" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Maximum Flexibility</h3>
                <p>Annealed process makes the wire exceptionally soft and easy to twist without snapping.</p>
              </div>

              <div className="feature-card">
                <img src={binding} alt="Worker tying rebar with black wire" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Unmatched Strength</h3>
                <p>High tensile strength ensures secure holds even under heavy loads and vibration.</p>
              </div>

              <div className="feature-card">
                <img src={Corrosion} alt="Bundles of black binding wire" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Corrosion Resistant</h3>
                <p>Oiled finish provides excellent protection against rust in humid environments.</p>
              </div>
            </div>
          </div>

          {/* SIZES & APPLICATIONS */}
          <div className="section">
            <h2>Available Sizes & Specifications</h2>
            <div className="grid-2">
              <div>
               <table className="specs-table">
  <thead>
    <tr>
      <th>Diameter (mm)</th>
      <th>Tensile Strength</th>
      <th>Coil Weight</th>
      <th>Common Uses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.5 mm</td>
      <td>350–550 MPa</td>
      <td>25 kg</td>
      <td>General tying, light reinforcement</td>
    </tr>
    <tr>
      <td>2.5 mm</td>
      <td>350–550 MPa</td>
      <td>25 kg</td>
      <td>Heavy rebar binding, structural cages</td>
    </tr>
  </tbody>
</table>

              </div>

              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh35MxgVQGVqXutvrhO6cwE6leXfftYtAlRyp63JqsvAbr0TMV5x2GnAGMyT3AjxEt5-txq1W0UZT4_8diwM33EcZbpIVzyQxlERNeavp1DXfbIVvEasFfj8rUD7rotsB88uy9maIK0hwky/w1200-h630-p-k-no-nu/original.jpg"
                alt="Construction worker professionally tying rebar with black binding wire"
              />
            </div>
          </div>

          {/* APPLICATIONS */}
          <div className="section">
            <h2>Typical Applications</h2>
            <ul className="applications-list">
              <li><strong>Reinforcement Bar Tying</strong> – Securely fastens rebar grids in slabs, beams, and columns</li>
              <li><strong>Steel Cage Assembly</strong> – Ideal for prefabricated cages and mesh reinforcement</li>
              <li><strong>Formwork & Temporary Fastening</strong> – Quick and reliable site fixings</li>
              <li><strong>General Construction & Fencing</strong> – Versatile for multiple on-site needs</li>
            </ul>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Ready for Bulk Supply?</h2>
            <p>We deliver high-quality black annealed binding wire in coils or custom bundles, with competitive pricing and fast turnaround for projects of any scale.</p>
            <Link to="/request-quote" className="cta-btn">
              Request Pricing & Availability
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BlackWire;