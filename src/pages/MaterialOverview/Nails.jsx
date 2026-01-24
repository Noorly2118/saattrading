import { Link } from "react-router-dom";
import nailshero from "../../assets/nailshero.jpg";
import frame from "../../assets/frame.jpg";
import formwork from "../../assets/formwork.jpg";
import Roofing from "../../assets/Roofing.jpg";


const Nails = () => {
  return (
    <>
      <style>{`
        :root {
          --primary: #0F5C5C;
          --accent: #F28C28;
          --accent-light: #f5a95b;
          --text: #2b2b2b;
          --gray: #555;
          --light-bg: #f5f7f8;
        }

        .nails-page {
          padding: 0 0 4rem; /* Reduced bottom padding */
          background: var(--light-bg);
          overflow-x: hidden;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Full-Bleed Hero */
        .nails-hero {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          height: 700px;
          margin-bottom: 4rem; /* Reduced from 6rem */
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,.3);
        }

        .nails-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          animation: heroZoom 5s ease-out forwards;
        }

        @keyframes heroZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .hero-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6rem 4rem 4rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          text-align: center;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          max-width: 900px;
          margin: 0 auto 3rem;
          opacity: 0.95;
          line-height: 1.8;
        }

        .cta-btn {
          padding: 1.5rem 4.5rem;
          font-size: 1.3rem;
          font-weight: 800;
          border-radius: 60px;
          background: linear-gradient(135deg, var(--accent), var(--accent-light));
          color: white;
          text-decoration: none;
          box-shadow: 0 20px 60px rgba(242,140,40,0.45);
          transition: all 0.4s ease;
        }

        .cta-btn:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(242,140,40,0.6);
        }

        /* Sections - Reduced vertical spacing */
        .section {
          padding: 4rem 0; /* Reduced from 8rem */
          text-align: center;
        }

        .section-title {
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 2rem; /* Reduced from 3rem */
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 6px;
          background: linear-gradient(135deg, var(--accent), var(--accent-light));
          border-radius: 4px;
        }

        /* Overview Card */
        .overview-card {
          background: white;
          max-width: 1100px;
          margin: 0 auto; /* Removed extra top/bottom margin */
          padding: 4rem; /* Slightly reduced padding */
          border-radius: 36px;
          box-shadow: 0 30px 100px rgba(0,0,0,0.12);
          position: relative;
        }

        .overview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          background: linear-gradient(135deg, var(--accent), var(--accent-light));
        }

        .overview-desc {
          font-size: 1.35rem;
          line-height: 2;
          color: var(--gray);
          margin-bottom: 2rem; /* Reduced */
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 1.25rem;
          color: var(--text);
        }

        .feature-icon {
          font-size: 2.2rem;
          color: var(--accent);
        }

        /* Applications - Premium Card Grid */
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem; /* Reduced from 3.5rem */
          max-width: 1400px;
          margin: 2rem auto 0; /* Reduced top margin */
          padding: 0 2rem;
        }

        .app-card {
          background: white;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0,0,0,0.15);
          transition: all 0.45s ease;
        }

        .app-card:hover {
          transform: translateY(-18px);
          box-shadow: 0 45px 100px rgba(0,0,0,0.25);
        }

        .app-card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .app-card:hover img {
          transform: scale(1.08);
        }

        .app-card-content {
          padding: 2.8rem;
          text-align: left;
        }

        .app-card-content h3 {
          font-size: 2.1rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .app-card-content p {
          font-size: 1.2rem;
          color: var(--gray);
          line-height: 1.8;
        }

        /* Final CTA - Reduced spacing */
        .final-cta {
          background: linear-gradient(135deg, var(--primary), #0b4646);
          padding: 6rem 4rem; /* Reduced from 8rem */
          text-align: center;
          color: white;
          border-radius: 48px;
          max-width: 1300px;
          margin: 4rem auto 0; /* Removed bottom margin, page bottom padding handles it */
          box-shadow: 0 40px 120px rgba(15,92,92,0.5);
        }

        .final-cta h2 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        .final-cta p {
          font-size: 1.5rem;
          max-width: 900px;
          margin: 0 auto 2.5rem;
          opacity: 0.95;
          line-height: 1.9;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nails-hero { height: 600px; margin-bottom: 3rem; }
          .hero-title { font-size: 3.8rem; }
          .section { padding: 3.5rem 0; }
          .app-card img { height: 280px; }
        }

        @media (max-width: 768px) {
          .nails-hero { height: 500px; margin-bottom: 2.5rem; }
          .hero-title { font-size: 3rem; }
          .hero-overlay { padding: 4rem 2rem; }
          .section { padding: 3rem 0; }
          .section-title { font-size: 2.6rem; }
          .overview-card { padding: 3rem 2rem; }
          .applications-grid { gap: 2.5rem; }
          .app-card-content { padding: 2.2rem; }
          .final-cta { padding: 4.5rem 2rem; margin-top: 3rem; }
          .final-cta h2 { font-size: 2.8rem; }
        }
      `}</style>

      <section className="nails-page">
        <div className="container">

          {/* HERO */}
          <div className="nails-hero">
            <img src={nailshero} alt="Premium Construction Nails in Action" />
            <div className="hero-overlay">
              <h1 className="hero-title">ጥራታቸውን የጠበቁ ሚስማሮች</h1>
              <p className="hero-subtitle">
                Durable, high-grip nails engineered for maximum holding power and reliability 
                in wood framing, concrete formwork, roofing, and general construction projects.
              </p>
              <Link to="/request-quote" className="cta-btn">
                Request Quote Now
              </Link>
            </div>
          </div>

          {/* PRODUCT OVERVIEW */}
          <div className="section">
            <h2 className="section-title">Product Overview</h2>
            <div className="overview-card">
              <p className="overview-desc">
                SAAT Trading PLC supplies premium-grade construction nails designed for superior 
                penetration, exceptional holding power, and outstanding resistance to corrosion and bending. 
                Available in a wide range of sizes and finishes to suit residential, commercial, 
                and heavy-duty infrastructure projects.
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Multiple lengths & diameters for versatile applications</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Galvanized & bright finishes for superior corrosion resistance</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Smooth, ring, or screw shank options for maximum grip</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Bulk packaging with competitive pricing for large projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* COMMON APPLICATIONS */}
          <div className="section">
            <h2 className="section-title">Common Applications</h2>
            <div className="applications-grid">
              <div className="app-card">
                <img src={frame} alt="Wood Framing & Carpentry" />
                <div className="app-card-content">
                  <h3>Wood Framing & Carpentry</h3>
                  <p>Secure and reliable fastening for timber structures, roof trusses, wall frames, and detailed carpentry work.</p>
                </div>
              </div>

              <div className="app-card">
                <img src={formwork} alt="Concrete Formwork" />
                <div className="app-card-content">
                  <h3>Concrete Formwork</h3>
                  <p>Strong temporary fixation during concrete pouring, ensuring precise alignment and structural stability.</p>
                </div>
              </div>

              <div className="app-card">
                <img src={Roofing} alt="Roofing & Exterior Finishing" />
                <div className="app-card-content">
                  <h3>Roofing & Exterior Finishing</h3>
                  <p>Specialized nails for shingles, felt underlayment, siding, and weather-resistant exterior cladding.</p>
                </div>
              </div>

             
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Ready for Your Next Build?</h2>
            <p>
              Get high-quality construction nails delivered fast with competitive bulk pricing 
              and dedicated support from SAAT Trading PLC.
            </p>
            <Link to="/request-quote" className="cta-btn">
              Get Your Custom Quote Today
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Nails;