import { Link } from "react-router-dom";
import contactImg from "../assets/contact-hero1.jpg";

const Contact = () => {
  return (
    <>
      <style>{`
  .contact-page {
    padding: 4rem 0;
    background: radial-gradient(circle at top, #f5f9fa, #ffffff);
  }

  .contact-container {
    max-width: 1700px;
    margin: auto;
    padding: 0 1rem;
  }

  .contact-hero {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 3rem;
    align-items: center;
  }

  .contact-hero img {
    width: 100%;
    box-shadow: 0 25px 60px rgba(0,0,0,0.12);
  }

  .contact-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #0F5C5C;
    margin-bottom: 1.3rem;
    margin-top: 1.5rem;
  }

  .contact-hero p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 2rem;
  }

  .contact-actions {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .primary-btn {
    padding: 1.1rem 3rem;
    background: linear-gradient(135deg, #F28C28, #ff9f40);
    color: #fff;
    font-weight: 800;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 12px 35px rgba(242,140,40,0.35);
  }

  .secondary-btn {
    padding: 1.1rem 3rem;
    border: 2px solid #0F5C5C;
    color: #0F5C5C;
    font-weight: 800;
    border-radius: 50px;
    text-decoration: none;
  }

  /* ────────────────────────────────────────────────
     New Contact Grid & Cards (improved version)
  ──────────────────────────────────────────────── */
  .contact-section {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.8rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-card {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.6rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(15, 92, 92, 0.08);
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Icon background circles + brand color accents */
.card-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0f5c5c22, #0f5c5c11);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  margin-bottom: 1.4rem;
  color: #0F5C5C;
  border: 2px solid #0f5c5c22;
}

/* Individual card color variations */
.contact-card.location .card-icon {
  background: linear-gradient(135deg, #e6f4f4, #d9f0f0);
  color: #0F5C5C;
}

.contact-card.phone .card-icon {
  background: linear-gradient(135deg, #fff3e6, #ffe8cc);
  color: #F28C28;
}

.contact-card.email .card-icon {
  background: linear-gradient(135deg, #e6f0ff, #d9e6ff);
  color: #0066cc;
}

.contact-card.quote .card-icon {
  background: linear-gradient(135deg, #fff0e6, #ffe0cc);
  color: #F28C28;
}

/* Titles get brand color */
.contact-card h3 {
  margin: 0 0 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #0F5C5C;
}

/* Text */
.contact-card p {
  color: #444;
  line-height: 1.6;
  margin: 0 0 1.5rem;
  font-size: 0.98rem;
}

.highlight-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: #F28C28;
  margin: 0.6rem 0 1.4rem;
}

/* Highlight card (Fast Quotes) */
.highlight-card {
  background: linear-gradient(145deg, #fffaf5, #fff5eb);
  border: 2px solid #F28C28;
  position: relative;
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #F28C28, #ff9f40);
}

/* Buttons / Links */
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background: #f8f9fa;
  color: #0F5C5C;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.98rem;
  border: 1px solid #0f5c5c33;
  transition: all 0.28s ease;
}

.contact-link:hover {
  background: #0F5C5C;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 92, 92, 0.25);
}

.contact-link.primary {
  background: linear-gradient(135deg, #F28C28, #ff9f40);
  color: white;
  border: none;
  font-weight: 700;
}

.contact-link.primary:hover {
  background: linear-gradient(135deg, #e07b20, #ff8c2e);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(242, 140, 40, 0.4);
}

/* Mobile */
@media (max-width: 600px) {
  .contact-section {
    padding: 3rem 1.25rem;
  }
  .contact-grid {
    gap: 1.4rem;
  }
  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
}
  /* ────────────────────────────────────────────────
     Existing Contact Strip & Media Queries
  ──────────────────────────────────────────────── */
  .contact-strip {
    margin-top: 7rem;
    padding: 4rem 2rem;
    border-radius: 28px;
    background: linear-gradient(135deg, #0F5C5C, #064B4B);
    color: #fff;
    text-align: center;
  }

  .contact-strip h2 {
    font-size: 2.4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  .contact-strip p {
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    opacity: 0.95;
  }

  /* Mobile adjustments */
  @media (max-width: 992px) {
    .contact-hero {
      grid-template-columns: 1fr;
      text-align: center;
      margin-top: 2rem;
    }

    .contact-actions {
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    .contact-section {
      padding: 3rem 1.25rem;
    }

    .contact-grid {
      gap: 1.25rem;
    }
  }
`}</style>

      <section className="contact-page">
        <div className="contact-container">

          {/* HERO */}
          <div className="contact-hero">
            <div>
              <h1>Let’s Build Something Strong Together</h1>
              <p>
                Whether you need construction materials, bulk supply,
                or project-based sourcing, our team is ready to assist.
                Reach out and get a response you can rely on.
              </p>

              <div className="contact-actions">
                <Link to="/request-quote" className="primary-btn">
                  Request a Quote
                </Link>
                <a
                  href="https://t.me/saatplctrading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  Chat on Telegram
                </a>
              </div>
            </div>

            <img
              src={contactImg}
              alt="SAAT Trading team discussing construction material supply"
            />
          </div>

          {/* CONTACT OPTIONS */}
         {/* CONTACT OPTIONS */}
<section className="contact-section">
  <div className="contact-grid">
    {/* Card 1 */}
    <div className="contact-card">
      <div className="card-icon">📍</div>
      <h3>Office Location</h3>
      <p className="location-text">
        Addis Ababa, Ethiopia<br />
        <span className="subtext">Nationwide service for contractors & developers</span>
      </p>
      <a
        href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        View on Map →
      </a>
    </div>

    {/* Card 2 */}
    <div className="contact-card">
      <div className="card-icon">📞</div>
      <h3>Phone</h3>
      <p className="highlight-text">+251 952 287 676</p>
      <a href="tel:+251952287676" className="contact-link">
        Call Now →
      </a>
    </div>

    {/* Card 3 */}
    <div className="contact-card">
      <div className="card-icon">✉️</div>
      <h3>Email</h3>
      <p className="highlight-text">info@saattrading.com</p>
      <a href="mailto:info@saattrading.com" className="contact-link">
        Send Message →
      </a>
    </div>

    {/* Card 4 */}
    <div className="contact-card highlight-card">
      <div className="card-icon">⚡</div>
      <h3>Fast Quotes</h3>
      <p>
        Quick answers on pricing, stock availability<br />
        and delivery timelines – usually within hours.
      </p>
      <Link to="/request-quote" className="contact-link primary">
        Get Quote Now →
      </Link>
    </div>
  </div>
</section>
          {/* FINAL STRIP */}
          <div className="contact-strip">
            <h2>Your Reliable Construction Supply Partner</h2>
            <p>
              From single orders to long-term supply contracts,
              SAAT Trading PLC delivers quality, reliability, and trust.
            </p>
            <Link to="/request-quote" className="primary-btn">
              Get Started Today
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
