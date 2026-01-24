import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { materialImages } from "../../assets/images";

const sanityClient = createClient({
  projectId: "2a7y85sr",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const GenericMaterialPage = () => {
  const { slug } = useParams();
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    sanityClient
      .fetch(
        `*[_type == "material" && slug.current == $slug][0]{
          name,
          description,
          category,
          specifications,
          "imageUrl": image.asset->url,
          "imageAlt": image.alt
        }`,
        { slug }
      )
      .then((data) => {
        setMaterial(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError("Failed to load material information");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading material details...</p>
      </div>
    );
  }

  if (error || !material) {
    return (
      <div className="error-state">
        <h2>Material Not Found</h2>
        <p>{error || "We couldn't find the requested material."}</p>
        <Link to="/materials" className="back-link">
          ← Back to All Materials
        </Link>
      </div>
    );
  }

  // Image fallback chain
  const heroImage =
    material.imageUrl ||
    materialImages[slug] ||
    materialImages.rebar ||
    "https://images.unsplash.com/photo-1503387762-592deb58caa5?auto=format&fit=crop&q=80&w=1600";

  const hasDescription = material.description && material.description.trim().length > 40;

  return (
    <>
      <style>{`
        :root {
          --primary: #ff8c00;
          --primary-dark: #e07b00;
          --dark: #003d4a;
          --dark-light: #004e5c;
          --light: #f8fafc;
          --gray: #4b5563;
          --text: #1f2937;
        }

        .material-page {
          background: var(--light);
          min-height: 100vh;
        }

        /* Hero */
        .material-hero {
          position: relative;
          height: 65vh;
          min-height: 480px;
          background-image: 
            linear-gradient(rgba(0, 61, 74, 0.78), rgba(0, 61, 74, 0.88)),
            url(${heroImage});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .material-title {
          font-size: clamp(2.8rem, 6.5vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 0.8rem;
          text-shadow: 0 4px 14px rgba(0,0,0,0.6);
        }

        .material-category {
          font-size: 1.45rem;
          font-weight: 500;
          opacity: 0.92;
          margin-bottom: 1.8rem;
          letter-spacing: 0.8px;
        }

        /* Main Content */
        .material-main {
          padding: 5rem 2rem 7rem;
        }

        .content-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .description,
        .fallback-info {
          font-size: 1.18rem;
          line-height: 1.82;
          color: var(--gray);
          max-width: 820px;
          margin: 0 auto 3.5rem;
        }

        .fallback-info h3 {
          color: var(--dark);
          font-size: 1.6rem;
          margin: 2rem 0 1.2rem;
        }

        .fallback-info ul {
          list-style: none;
          padding-left: 0;
          margin: 1.5rem 0;
        }

        .fallback-info li {
          margin: 0.9rem 0;
          position: relative;
          padding-left: 1.8rem;
        }

        .fallback-info li::before {
          content: "•";
          color: var(--primary);
          position: absolute;
          left: 0;
          font-size: 1.6rem;
          line-height: 1;
        }

        .cta-wrapper {
          text-align: center;
          margin: 4rem 0 3rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--primary);
          color: white;
          padding: 1.25rem 3.2rem;
          font-size: 1.22rem;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(255,140,0,0.35);
          transition: all 0.35s ease;
        }

        .cta-button:hover {
          background: var(--primary-dark);
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(255,140,0,0.45);
        }

        .back-link {
          display: inline-block;
          color: var(--dark);
          font-weight: 600;
          text-decoration: none;
          margin-top: 2rem;
        }

        .back-link:hover {
          color: var(--primary);
          text-decoration: underline;
        }

        /* Loading & Error */
        .loading-state, .error-state {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .spinner {
          width: 64px;
          height: 64px;
          border: 6px solid #e5e7eb;
          border-top: 6px solid var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1.8rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .material-hero { height: 55vh; min-height: 420px; }
          .material-title { font-size: 3.2rem; }
          .material-main { padding: 4rem 1.5rem 6rem; }
        }

        @media (max-width: 576px) {
          .material-title { font-size: 2.6rem; }
          .cta-button { padding: 1rem 2.6rem; font-size: 1.1rem; }
        }
      `}</style>

      <div className="material-page">
        {/* Hero */}
        <header className="material-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="material-title">{material.name}</h1>
            {material.category && (
              <p className="material-category">Category: {material.category}</p>
            )}
          </div>
        </header>

        {/* Content */}
        <section className="material-main">
          <div className="content-container">
            {hasDescription ? (
              <div className="description">{material.description}</div>
            ) : (
              <div className="fallback-info">
                <h3>{material.name} – Reliable Construction Material</h3>

                <p>
                  SAAT Trading supplies <strong>{material.name}</strong> that meets the needs 
                  of modern construction projects throughout Ethiopia.
                </p>

                <p>
                  We maintain consistent stock and offer flexible quantities suitable for:
                </p>

                <ul>
                  <li>Residential and commercial buildings</li>
                  <li>Industrial facilities</li>
                  <li>Infrastructure and road projects</li>
                  <li>Government and institutional developments</li>
                </ul>

                <p>
                  <strong>Main advantages our customers value:</strong>
                </p>

                <ul>
                  <li>Verified quality meeting Ethiopian and international standards</li>
                  <li>Competitive pricing for project volumes</li>
                  <li>Fast & dependable delivery coordination</li>
                  <li>Experienced support for technical questions & order planning</li>
                </ul>

                <p style={{ marginTop: "2.5rem" }}>
                  Detailed technical specifications, available sizes/grades, packaging options 
                  and current pricing information are being prepared and will be added to this page soon.
                </p>

                <p>
                  <strong>Contact us today</strong> for immediate information:
                </p>
              </div>
            )}

            <div className="cta-wrapper">
              <a
                href="tel:+251952277474"
                className="cta-button"
                aria-label="Call for pricing and availability"
              >
                Get Quote & Availability →
              </a>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link to="/materials" className="back-link">
                ← View All Construction Materials
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GenericMaterialPage;