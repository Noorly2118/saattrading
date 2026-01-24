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
          padding-bottom: 5rem;
        }

        .rebar-container {
          max-width: 1270px;
          margin: auto;
          padding: 0 1.5rem;
        }

        /* HERO */
      .rebar-hero {
  width: 100vw;                    /* Full viewport width */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 600px;                   /* Or whatever height you want */
  margin-bottom: 5rem;
  overflow: hidden;
  border-radius: 0;                /* Remove if you want rounded corners on full-bleed */
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.rebar-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;              
  object-position: center;         /* Centers the focal point */
  display: block;
}
        .hero-overlay {
          position: absolute;
          inset: auto 0 0;
          padding: 4rem 3rem;
          background: linear-gradient(transparent, rgba(0,0,0,.85));
          color: white;
        }

        .cta-btn {
          display: inline-block;
          padding: 1.3rem 3.8rem;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--accent), var(--accent-light));
          color: white;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 15px 45px rgba(255,140,0,.5);
        }

        /* SECTION */
        .section {
          margin-bottom: 7rem;
          text-align: center;
        }

        .section h2 {
          font-size: 2.8rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 2.5rem;
        }

        /* TABLE */
        table {
          width: 100%;
          max-width: 1050px;
          margin: auto;
          border-collapse: collapse;
          background: white;
          box-shadow: 0 15px 50px rgba(0,0,0,.12);
        }

        th, td {
          padding: 1.5rem;
          font-size: 1.1rem;
        }

        th {
          background: var(--primary);
          color: white;
        }

        tr:nth-child(even) td {
          background: #f8fafa;
        }

        /* CAROUSEL  */
        .applications-carousel {
          max-width: 900px;
          height: 520px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          background: #fff;
          border-radius: 20px;
        }

        .carousel-track {
          display: flex;
          height: 100%;
          transition: transform .6s cubic-bezier(.45,0,.55,1);
        }

        .carousel-slide {
          flex: 0 0 100%;
          position: relative;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* DESKTOP SAFE */
          background: #fff;
        }

        .slide-overlay {
          position: absolute;
          bottom: 0;
          inset-inline: 0;
          padding: 3rem;
          background: linear-gradient(transparent, rgba(0,0,0,.85));
          color: white;
          text-align: left;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,.6);
          color: white;
          border: none;
          padding: 1rem;
          cursor: pointer;
          z-index: 10;
          font-size: 2rem;
        }

        .prev-btn { left: 15px; }
        .next-btn { right: 15px; }

        .carousel-dots {
          position: absolute;
          bottom: 15px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,.5);
          cursor: pointer;
        }

        .dot.active {
          background: white;
        }

        /* FINAL CTA */
        .final-cta {
          background: linear-gradient(135deg, var(--primary), #002b34);
          border-radius: 32px;
          padding: 5rem 4rem;
          text-align: center;
          color: white;
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          max-width: 1100px;
          margin: 0 auto;
        }

        .final-cta h2 {
          font-size: 3.2rem;
          margin-bottom: 1.8rem;
        }

        .final-cta p {
          font-size: 1.35rem;
          max-width: 900px;
          margin: 0 auto 3rem;
        }

        /* MOBILE: FULL WIDTH & COVER */
        @media (max-width: 768px) {
          .applications-carousel {
            max-width: none;
            width: 100vw;
            height: 420px;
            border-radius: 0;
          }

          .carousel-slide img {
            object-fit: cover;
          }

          .rebar-hero {
            height: 520px;
            border-radius: 0;
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
