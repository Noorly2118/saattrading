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
          font-size: 3.2rem;
          font-weight: 900;
          color: #0F5C5C;
          margin-bottom: 1.5rem;
        }

        .contact-hero p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 2.5rem;
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

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 6rem;
        }

        .contact-card {
          background: #fff;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px);
        }

        .contact-card h3 {
          font-size: 1.5rem;
          color: #0F5C5C;
          margin-bottom: 1rem;
        }

        .contact-card p {
          color: #555;
          line-height: 1.6;
        }

        .contact-card a {
          display: inline-block;
          margin-top: 1.2rem;
          font-weight: 700;
          color: #F28C28;
          text-decoration: none;
        }

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

        @media (max-width: 992px) {
          .contact-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .contact-actions {
            justify-content: center;
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
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📍 Office Location</h3>
              <p>
                Addis Ababa, Ethiopia<br />
                Serving contractors and developers nationwide.
              </p>
            </div>

            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>
                Speak directly with our sales team for immediate assistance.
              </p>
              <a href="tel:+251952287676">Call Now →</a>
            </div>

            <div className="contact-card">
              <h3>✉️ Email</h3>
              <p>
                Send us your requirements and receive a detailed response.
              </p>
              <a href="mailto:info@saattrading.com">Send Email →</a>
            </div>

            <div className="contact-card">
              <h3>⚡ Fast Quotes</h3>
              <p>
                We respond quickly with pricing, availability, and delivery timelines.
              </p>
              <Link to="/request-quote">Start Request →</Link>
            </div>
          </div>

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
