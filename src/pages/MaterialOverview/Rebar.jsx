import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { materialImages } from "../../assets/images";

import concrete from "../../assets/Rebar in Concrete Footings_ The Ultimate Guide for___ (1).jpg";
import industrialRebar from "../../assets/Rebar in industrial buildings.jpg";
import bridges from "../../assets/Rebar in bridges and highways.jpg";
import slabs from "../../assets/Rebar in columns, beams and slabs.jpg";

const slides = [
  {
    img: concrete,
    title: "Concrete Foundations & Footings",
    desc: "Delivers essential tensile strength to withstand ground movement and heavy structural loads.",
  },
  {
    img: slabs,
    title: "Columns, Beams & Slabs",
    desc: "Ensures maximum structural integrity in high-rise and load-bearing constructions.",
  },
  {
    img: bridges,
    title: "Bridges, Highways & Infrastructure",
    desc: "Built for extreme durability in large-scale public works and heavy-traffic environments.",
  },
  {
    img: industrialRebar,
    title: "Industrial & Commercial Buildings",
    desc: "Supports wide spans, heavy machinery, and long-term performance in demanding facilities.",
  },
];

const Rebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % totalSlides),
      7000
    );
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <>
     <style>{`
  :root {
    --primary: #004e5c;
    --accent: #ff8c00;
    --accent-light: #ffb000;
    --light-bg: #f5f7f8;
  }

  .rebar-page {
    background: var(--light-bg);
    overflow-x: hidden;
    padding-bottom: 4rem;
  }

  .rebar-container {
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 1rem;
  }
.rebar-hero {
  position: relative;
  width: 110vw;                    
  height: 100vh;                    
  min-height: 420px;
  max-height: 720px;
  margin-left: calc(-44vw + 50%); 
  margin-right: calc(-50vw + 50%);
  margin-bottom: 3.5rem;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);    
}

.rebar-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Overlay stays contained within viewport edges */
.hero-overlay {
  position: absolute;
  inset: auto 0 0;
  padding: 3rem 1.5rem 2.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 60%, transparent 100%);
  color: white;
  text-align: center;
}

/* Mobile adjustments – keep full bleed, but adjust height & padding */
@media (max-width: 768px) {
  .rebar-hero {
    height: 65vh;
    min-height: 380px;
    margin-bottom: 3rem;
  }

  .hero-overlay {
    padding: 2.5rem 1.2rem 2rem;
  }

  .cta-btn {
    padding: 0.9rem 2.2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .rebar-hero {
    height: 60vh;
    min-height: 340px;
  }

  .hero-overlay {
    padding: 2rem 1rem 1.8rem;
  }
}
  .cta-btn {
    display: inline-block;
    padding: 1rem 2.4rem;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 50px;
    background: linear-gradient(135deg, var(--accent), var(--accent-light));
    color: white;
    text-decoration: none;
    box-shadow: 0 8px 24px rgba(255,140,0,0.45);
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(255,140,0,0.6);
  }

  /* ─── SECTION TITLES ─── */
  .section {
    margin-bottom: 5rem;
    text-align: center;
    padding: 0 1rem;
  }

  .section h2 {
    font-size: clamp(2rem, 5vw, 2.6rem);
    font-weight: 900;
    color: var(--primary);
    margin-bottom: 1.8rem;
  }

  /* ─── TABLE ─── */
  table {
    width: 100%;
    margin: 2rem auto;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 10px 35px rgba(0,0,0,0.1);
    font-size: 0.98rem;
  }

  th, td {
    padding: 1.1rem 0.9rem;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background: var(--primary);
    color: white;
    font-weight: 700;
  }

  tr:last-child td {
    border-bottom: none;
  }

  /* ─── CAROUSEL ─── */
  .applications-carousel {
    position: relative;
    width: 100%;
    height: 480px;
    margin: 0 auto 2rem;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    background: white;
  }

  .carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.65s cubic-bezier(0.45, 0, 0.55, 1);
  }

  .carousel-slide {
    flex: 0 0 100%;
    position: relative;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2.5rem 2rem 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 50%, transparent 100%);
    color: white;
  }

  .slide-overlay h3 {
    margin: 0 0 0.8rem;
    font-size: 1.65rem;
  }

  .slide-overlay p {
    margin: 0;
    font-size: 1.05rem;
    opacity: 0.95;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.55);
    color: white;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s;
  }

  .carousel-nav:hover {
    background: rgba(0,0,0,0.8);
  }

  .prev-btn { left: 12px; }
  .next-btn { right: 12px; }

  .carousel-dots {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 10;
  }

  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
    cursor: pointer;
    transition: all 0.3s;
  }

  .dot.active {
    background: white;
    transform: scale(1.3);
  }

  /* ─── FINAL CTA ─── */
  .final-cta {
    background: linear-gradient(135deg, var(--primary), #002b34);
    border-radius: 24px;
    padding: 3.5rem 1.8rem;
    margin: 0 1rem 3rem;
    text-align: center;
    color: white;
    box-shadow: 0 18px 50px rgba(0,0,0,0.3);
  }

  .final-cta h2 {
    font-size: clamp(2.2rem, 6vw, 2.8rem);
    margin-bottom: 1.4rem;
  }

  .final-cta p {
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0 auto 2.2rem;
    line-height: 1.5;
  }

  /* ─── MOBILE ADJUSTMENTS ─── */
  @media (max-width: 768px) {
    .rebar-hero {
      height: 65vh;
      min-height: 380px;
    }

    .hero-overlay {
      padding: 2.5rem 1.2rem 2rem;
    }

    .cta-btn {
      padding: 0.9rem 2.2rem;
      font-size: 1rem;
    }

    .applications-carousel {
      height: 400px;
      border-radius: 0;
      margin-left: -1rem;
      margin-right: -1rem;
      width: auto;
    }

    .slide-overlay {
      padding: 2rem 1.5rem 1.8rem;
    }

    .slide-overlay h3 {
      font-size: 1.45rem;
    }

    .carousel-nav {
      width: 42px;
      height: 42px;
      font-size: 1.6rem;
    }

    .prev-btn { left: 8px; }
    .next-btn { right: 8px; }

    table {
      font-size: 0.92rem;
    }

    th, td {
      padding: 0.9rem 0.6rem;
    }

    .final-cta {
      padding: 3rem 1.5rem;
      margin: 0 0.8rem 4rem;
      border-radius: 20px;
    }
  }

  @media (max-width: 480px) {
    .rebar-hero {
      height: 55vh;
      min-height: 340px;
    }

    .hero-overlay {
      padding: 2rem 1rem 1.8rem;
    }

    .cta-btn {
      padding: 0.85rem 2rem;
      font-size: 0.98rem;
    }

    .applications-carousel {
      height: 360px;
    }

    .final-cta {
      padding: 2.8rem 1.2rem;
    }
  }
`}</style>
      <section className="rebar-page">
        <div className="rebar-container">

          {/* HERO */}
          <div className="rebar-hero">
            <img src={materialImages.rebar1} alt="Premium Grade 75 Rebar" />
            <div className="hero-overlay">
              <Link to="/request-quote" className="cta-btn">
                Request Your Rebar Quote
              </Link>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="section">
            <h2>Product Overview</h2>
            <p>
              SAAT Trading PLC supplies <strong>Grade 75 (520 MPa)</strong> high-yield
              deformed reinforcement bars engineered for superior strength and durability.
            </p>
          </div>

          {/* TABLE */}
          <div className="section">
            <h2>Available Diameters & Weights</h2>

<table>
  <thead>
    <tr>
      <th>Diameter (mm)</th>
      <th>Weight (kg)</th>
      <th>Length</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>8</td><td>4.74</td><td>12 m</td></tr>
    <tr><td>10</td><td>7.40</td><td>12 m</td></tr>
    <tr><td>12</td><td>10.65</td><td>12 m</td></tr>
    <tr><td>16</td><td>18.96</td><td>12 m</td></tr>
    <tr><td>20</td><td>29.64</td><td>12 m</td></tr>
    <tr><td>24</td><td>49.64</td><td>12 m</td></tr>
    <tr><td>32</td><td>75.00</td><td>12 m</td></tr>
  </tbody>
</table>

          </div>

          {/* CAROUSEL */}
          <div className="section">
            <h2>Typical Applications</h2>

            <div className="applications-carousel">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((s, i) => (
                  <div className="carousel-slide" key={i}>
                    <img src={s.img} alt={s.title} />
                    <div className="slide-overlay">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-nav prev-btn"
                onClick={() =>
                  setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1)
                }
              >
                ‹
              </button>

              <button
                className="carousel-nav next-btn"
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % totalSlides)
                }
              >
                ›
              </button>

              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="final-cta">
            <h2>Ready to Power Your Next Project?</h2>
            <p>
              Trust SAAT Trading PLC for consistent, high-quality Grade 75 rebar delivered
              on time and at competitive prices.
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

export default Rebar;
