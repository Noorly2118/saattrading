import { Link } from "react-router-dom";
import staffahero from "../../assets/staffahero.jpg"

import Staffainstalled from "../../assets/Staffa installed in rebar cage.jpg"
import fabricated from "../../assets/fabrication.jpg"
import shapes from "../../assets/different-shapes-of-stirrups.jpg"
import staffa from "../../assets/staffa.jpg"

const Staffa = () => {
  return (
    <>
   <style>{`
:root {
  --primary: #003d4a;
  --accent: #ff7f00;
  --accent-light: #ff9d00;
  --bg-light: #f8fafa;
  --text-dark: #333;
}

/* PAGE BASE */
.staffa-page {
  padding: clamp(3rem, 7vw, 6rem) 0;
  background: linear-gradient(to bottom, var(--bg-light), #fff);
  color: var(--text-dark);
  min-height: 100vh;
}

.staffa-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(1.2rem, 4vw, 2rem);
}

/* HERO */
.staffa-hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: center;
  margin: 2.5rem 0 4.5rem;
  text-align: center;
}

.hero-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3.3;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.11);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.staffa-hero h1 {
  font-size: clamp(2.1rem, 6.5vw, 3.4rem);
  font-weight: 900;
  line-height: 1.12;
  color: var(--primary);
  margin-bottom: 1.1rem;
}

.staffa-hero p {
  font-size: clamp(1.02rem, 2.6vw, 1.15rem);
  line-height: 1.65;
  color: #555;
  max-width: 620px;
  margin: 0 auto 2.2rem;
}

/* CTA */
.cta-btn {
  display: inline-block;
  padding: 1rem 2.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 12px 32px rgba(255,127,0,0.35);
  transition: all 0.32s ease;
}

.cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 44px rgba(255,127,0,0.48);
}

/* FEATURES */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.2rem;
  margin: 4.5rem 0;
}

.feature-card {
  background: white;
  padding: 1.8rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
}

.feature-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 1.2rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 0.6rem;
}

.feature-card p {
  font-size: 0.97rem;
  line-height: 1.6;
  color: #555;
}
/* SPECIFICATIONS GRID – mobile first, no overflow */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.8rem, 5vw, 3rem);
  align-items: center;
  margin: 2rem auto;
  padding: 0 0.5rem;                /* small breathing room on sides */
  box-sizing: border-box;
}

.table-wrapper {
  width: 100%;
  max-width: 100%;                  /* ← critical: never wider than parent */
  overflow-x: auto;                 /* scroll only if really needed */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #aaa transparent;
}

.specs-table {
  width: 100%;
  min-width: 0;                     /* ← important: allow shrinking below content size */
  border-collapse: collapse;
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  font-size: clamp(0.92rem, 3.5vw, 0.96rem);
  table-layout: auto;
}

.specs-table th,
.specs-table td {
  padding: clamp(0.8rem, 2.5vw, 1rem) clamp(0.7rem, 2vw, 1rem);
  border-bottom: 1px solid #eee;
  text-align: left;
  white-space: normal;              /* ← allow wrapping on small screens */
  word-break: break-word;           /* break very long words if any */
}

.specs-table th {
  background: var(--primary);
  color: white;
  font-weight: 700;
}

.specs-table tr:last-child td {
  border-bottom: none;
}

/* Image in the grid */
.grid-2 img {
  width: 100%;
  max-width: 100%;                  /* ← prevent image overflow */
  height: auto;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.09);
  display: block;
  margin: 0 auto;
}

/* Desktop – only apply wider layout + min-width when there's enough space */
@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 2.8rem;
    max-width: 1100px;
    padding: 0;
  }

  .specs-table {
    min-width: 520px;               /* safe min only on desktop */
  }

  .grid-2 img {
    max-width: none;                /* allow natural size on desktop */
  }
}

/* APPLICATIONS */

/* ===============================
   SECTION TITLES
================================ */
.section h2 {
  font-size: clamp(1.7rem, 5vw, 2.3rem);
  font-weight: 800;
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

/* subtle accent underline */
.section h2::after {
  content: "";
  display: block;
  width: 64px;
  height: 4px;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  margin: 0.8rem auto 0;
  border-radius: 4px;
}

.applications-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.6rem;
  list-style: none;
  padding: 0;
  margin: 2.5rem 0;
}

.applications-list li {
  background: white;
  padding: 1.5rem;
  border-radius: 14px;
  box-shadow: 0 6px 22px rgba(0,0,0,0.06);
  font-size: 0.98rem;
  line-height: 1.6;
}

/* FINAL CTA */
.final-cta {
  margin: 5rem auto;
  padding: clamp(3rem, 7vw, 4.2rem) 2rem;
  background: linear-gradient(135deg, var(--primary), #005c6d);
  border-radius: 24px;
  color: white;
  text-align: center;
  max-width: 1100px;
}

.final-cta h2 {
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: 1.3rem;
}

.final-cta p {
  max-width: 700px;
  margin: 0 auto 2.4rem;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.94;
}

/* DESKTOP */
@media (min-width: 768px) {
  .staffa-hero {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    gap: 4.5rem;
  }

  .staffa-hero p {
    margin: 0 0 2.2rem;
  }

  .grid-2 {
    grid-template-columns: 1.15fr 0.85fr;   /* table slightly wider than image */
    gap: 3rem;
    max-width: 1140px;
    align-items: start;
  }

  .table-wrapper {
    order: 1;
  }

  .grid-2 img {
    order: 2;
  }
}
`}</style>
      <section className="staffa-page">
        <div className="staffa-container">

          {/* HERO SECTION */}
        <div className="staffa-hero">
  <div className="hero-image-wrapper">
    <img
      className="hero-image"
      src = {staffahero}
      alt="Precision-fabricated steel staffa (stirrups) for reinforced concrete structures"/>
  </div>
  <div>
    <h1>Premium Steel Staffa (Stirrups)</h1>
    <p>
High-quality fabricated steel stirrups designed to provide shear reinforcement, maintain rebar spacing, and enhance the structural integrity of beams, columns, and slabs. Custom-bent for perfect fit and maximum durability.    </p>
    <Link to="/request-quote" className="cta-btn">
      Get Custom Quote
    </Link>
  </div>
</div>

          {/* KEY FEATURES */}
          <div className="section">
            <h2>Why Choose Our Steel Staffa?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src={fabricated} alt="Close-up of precision-bent steel stirrups" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Precision Fabrication</h3>
                <p>Accurate bending and uniform dimensions ensure perfect alignment with main reinforcement bars.</p>
              </div>

              <div className="feature-card">
                <img src={shapes} alt="Various shapes of steel staffa stirrups" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Multiple Shapes & Sizes</h3>
                <p>Available in rectangular, square, circular, and custom configurations to suit any design.</p>
              </div>

              <div className="feature-card">
                <img src={Staffainstalled} alt="Staffa installed in rebar cage" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Superior Strength</h3>
                <p>Made from high-tensile mild steel for excellent shear resistance and long-term performance.</p>
              </div>
            </div>
          </div>

          {/* SPECIFICATIONS & INSTALLATION */}
          <div className="section">
            <h2>Common Specifications & Types</h2>
            <div className="grid-2">
              <div>
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Type/Shape</th>
                      <th>Bar Diameter</th>
                      <th>Typical Dimensions</th>
                      <th>Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rectangular Stirrups</td>
                      <td>6-12 mm</td>
                      <td>Custom width/height</td>
                      <td>Beams & Columns</td>
                    </tr>
                    <tr>
                      <td>Square Stirrups</td>
                      <td>8-16 mm</td>
                      <td>200x200 to 600x600 mm</td>
                      <td>Square Columns</td>
                    </tr>
                    <tr>
                      <td>Circular/Hoop</td>
                      <td>6-10 mm</td>
                      <td>Diameter 300-1200 mm</td>
                      <td>Round Columns & Piles</td>
                    </tr>
                    <tr>
                      <td>Diamond/U-Shaped</td>
                      <td>8-12 mm</td>
                      <td>Custom as per drawing</td>
                      <td>Special Shear Zones</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <img
                src={staffa}
                alt="Steel staffa stirrups installed in reinforcement cage on construction site"
              />
            </div>
          </div>

          {/* APPLICATIONS */}
          <div className="section">
            <h2>Typical Applications</h2>
            <ul className="applications-list">
              <li><strong>Beam Reinforcement</strong> – Provides essential shear strength and prevents cracking</li>
              <li><strong>Column Confinement</strong> – Enhances ductility and load-bearing capacity</li>
              <li><strong>Slab & Foundation Works</strong> – Maintains spacing in complex rebar layouts</li>
              <li><strong>High-Rise & Infrastructure</strong> – Critical for seismic-resistant designs</li>
            </ul>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Need Custom-Fabricated Staffa?</h2>
            <p>We produce staffa to your exact specifications, with fast fabrication, bundling, and reliable delivery for projects of any size.</p>
            <Link to="/request-quote" className="cta-btn">
              Request Quote & Drawings
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Staffa;
