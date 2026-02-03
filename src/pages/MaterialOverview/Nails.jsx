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
    padding: 0 0 4rem;
    background: var(--light-bg);
    overflow-x: hidden;
  }

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }
/* ─── HERO ─── Full bleed + mobile safe */
.nails-hero {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;                    /* flexible starting point */
  min-height: 520px;               /* increased minimum height to fit text better */
  max-height: 780px;
  margin-bottom: 3.5rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.nails-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: heroZoom 6s ease-out forwards;
}

/* Overlay - more flexible padding + better mobile handling */
.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem 2rem 4rem;         /* increased bottom padding for safety */
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
  color: white;
  text-align: center;
}

/* Text scaling with clamp for safety */
.hero-title {
  font-size: clamp(2.4rem, 7.5vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.05;
  margin-top:3rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 3.8vw, 1.35rem);
  max-width: 880px;
  margin: 0 auto 2rem;
  opacity: 0.94;
  line-height: 1.55;
}

/* ─── RESPONSIVE FIXES ─── */
@media (max-width: 768px) {
  .nails-hero {
    height: 70vh;
    min-height: 480px;             /* ensure enough space for text */
    margin-bottom: 2.5rem;
  }

  .hero-overlay {
    padding: 4rem 1.5rem 3.5rem;   /* more bottom space on mobile */
  }

  .hero-title {
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    margin-bottom: 1.8rem;
  }

  .cta-btn {
    padding: 0.95rem 2.6rem;
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .nails-hero {
    height: 65vh;
    min-height: 440px;             /* still enough height for Amharic + English text */
  }

  .hero-overlay {
    padding: 3.5rem 1.2rem 3rem;   /* balanced for very small screens */
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 2.6rem);
  }

  .hero-subtitle {
    font-size: clamp(0.95rem, 4vw, 1.1rem);
  }
}

  .cta-btn {
    display: inline-block;
    padding: 1.1rem 3rem;
    font-size: 1.15rem;
    font-weight: 800;
    border-radius: 60px;
    background: linear-gradient(135deg, var(--accent), var(--accent-light));
    color: white;
    text-decoration: none;
    box-shadow: 0 12px 40px rgba(242,140,40,0.4);
    transition: all 0.35s ease;
  }

  .cta-btn:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(242,140,40,0.55);
  }

  /* ─── SECTIONS ─── */
  .section {
    padding: 3.5rem 0;
    text-align: center;
  }

  .section-title {
    font-size: clamp(2.2rem, 6vw, 3rem);
    font-weight: 900;
    color: var(--primary);
    margin-bottom: 1.8rem;
    position: relative;
    display: inline-block;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 5px;
    background: linear-gradient(135deg, var(--accent), var(--accent-light));
    border-radius: 4px;
  }

  /* Overview Card */
  .overview-card {
    background: white;
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem);
    border-radius: 32px;
    box-shadow: 0 25px 80px rgba(0,0,0,0.1);
  }

  .overview-desc {
    font-size: clamp(1.15rem, 3.5vw, 1.3rem);
    line-height: 1.9;
    color: var(--gray);
    margin-bottom: 2rem;
    max-width: 880px;
    margin-left: auto;
    margin-right: auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: clamp(1.05rem, 3vw, 1.2rem);
    color: var(--text);
  }

  .feature-icon {
    font-size: 2rem;
    color: var(--accent);
  }

  /* Applications Grid */
  .applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.2rem;
    margin: 2rem auto 0;
  }

  .app-card {
    background: white;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    transition: all 0.4s ease;
  }

  .app-card:hover {
    transform: translateY(-14px);
    box-shadow: 0 35px 80px rgba(0,0,0,0.2);
  }

  .app-card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.55s ease;
  }

  .app-card:hover img {
    transform: scale(1.06);
  }

  .app-card-content {
    padding: 2.2rem;
    text-align: left;
  }

  .app-card-content h3 {
    font-size: 1.9rem;
    font-weight: 900;
    color: var(--primary);
    margin-bottom: 0.9rem;
  }

  .app-card-content p {
    font-size: 1.1rem;
    color: var(--gray);
    line-height: 1.7;
  }

  /* Final CTA */
  .final-cta {
    background: linear-gradient(135deg, var(--primary), #0b4646);
    padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 3rem);
    margin: 3.5rem 1rem 0;
    text-align: center;
    color: white;
    border-radius: 40px;
    box-shadow: 0 30px 90px rgba(15,92,92,0.4);
  }

  .final-cta h2 {
    font-size: clamp(2.4rem, 7vw, 3.5rem);
    font-weight: 900;
    margin-bottom: 1.3rem;
  }

  .final-cta p {
    font-size: clamp(1.1rem, 3.5vw, 1.4rem);
    max-width: 800px;
    margin: 0 auto 2.2rem;
    opacity: 0.94;
    line-height: 1.7;
  }

  /* ─── RESPONSIVE FIXES ─── */
  @media (max-width: 1024px) {
    .nails-hero { height: 70vh; min-height: 500px; }
    .hero-overlay { padding: 4.5rem 2.5rem 3rem; }
  }

  @media (max-width: 768px) {
    .container { padding: 0 1rem; }

    .nails-hero {
      height: 65vh;
      min-height: 420px;
      margin-bottom: 2.5rem;
    }

    .hero-overlay { padding: 3.5rem 1.5rem 2.5rem; }

    .cta-btn {
      padding: 0.95rem 2.6rem;
      font-size: 1.05rem;
    }

    .overview-desc { font-size: 1.15rem; }

    .applications-grid {
      gap: 2rem;
      margin: 1.5rem auto 0;
    }

    .app-card img { height: 240px; }

    .final-cta {
      margin: 2.5rem 0.8rem 0;
      padding: 3.5rem 1.8rem;
      border-radius: 32px;
    }
  }

  @media (max-width: 480px) {
    .nails-hero { height: 60vh; min-height: 380px; }

    .hero-title { font-size: 2.6rem; }
    .hero-subtitle { font-size: 1.15rem; }

    .cta-btn {
      padding: 0.9rem 2.2rem;
      font-size: 1rem;
    }

    .section { padding: 2.5rem 0; }

    .overview-card { padding: 2.2rem 1.5rem; }

    .app-card-content { padding: 1.8rem; }
    .app-card-content h3 { font-size: 1.7rem; }

    .final-cta { padding: 3rem 1.5rem; }
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
                High-grip nails built for strength, reliability, and everyday construction.
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