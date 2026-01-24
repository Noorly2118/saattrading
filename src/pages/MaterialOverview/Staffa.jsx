import { Link } from "react-router-dom";

const Staffa = () => {
  return (
    <>
      <style>{`
        .staffa-page {
          padding: 8rem 0 6rem;
          background: linear-gradient(to bottom, #f8fafa, #ffffff);
          color: #333;
        }

        .staffa-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 1.5rem;
        }

        .staffa-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 6rem;
        }

        .hero-image {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          transition: transform 0.4s ease;
        }

        .hero-image:hover {
          transform: scale(1.03);
        }

        .staffa-hero h1 {
          font-size: 3.2rem;
          font-weight: 900;
          color: #003d4a;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .staffa-hero p {
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
          border-radius: 16px;
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
          border-radius: 20px;
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
          .staffa-hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .staffa-hero h1 {
            font-size: 2.8rem;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .staffa-hero h1 {
            font-size: 2.4rem;
          }

          .section h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="staffa-page">
        <div className="staffa-container">

          {/* HERO SECTION */}
          <div className="staffa-hero">
            <img
              className="hero-image"
              src="https://heatonmanufacturing.co.uk/wp-content/uploads/rebar-stirrups.jpg"
              alt="Precision-fabricated steel staffa (stirrups) for reinforced concrete structures"
            />

            <div>
              <h1>Premium Steel Staffa (Stirrups)</h1>
              <p>
                High-quality fabricated steel stirrups designed to provide shear reinforcement, maintain rebar spacing, and enhance the structural integrity of beams, columns, and slabs. Custom-bent for perfect fit and maximum durability.
              </p>

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
                <img src="https://thumbs.dreamstime.com/b/grey-metal-color-steel-rebar-column-reinforcement-armature-stirrups-closeup-abstract-view-selective-focus-blurred-background-212592415.jpg" alt="Close-up of precision-bent steel stirrups" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Precision Fabrication</h3>
                <p>Accurate bending and uniform dimensions ensure perfect alignment with main reinforcement bars.</p>
              </div>

              <div className="feature-card">
                <img src="https://www.quantity-takeoff.com/img/stirrups-in-construction.jpg" alt="Various shapes of steel staffa stirrups" style={{width: '100%', borderRadius: '12px'}} />
                <h3>Multiple Shapes & Sizes</h3>
                <p>Available in rectangular, square, circular, and custom configurations to suit any design.</p>
              </div>

              <div className="feature-card">
                <img src="https://images.squarespace-cdn.com/content/v1/5de0180ff9af5e608875a2ae/1581417876343-9XFJSCMX7CM1I5S2M8ZG/rebar-cages02.jpg" alt="Staffa installed in rebar cage" style={{width: '100%', borderRadius: '12px'}} />
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
                src="https://vhost-ln-s05-cdn.hcwebsite.com/a238f4def3061ce04f122015790c49bb/data/thumb/res/en/20250423/img_20241214_150552_87425544.jpg_20250423164811_840x630.jpeg?v=2OTgPArI"
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