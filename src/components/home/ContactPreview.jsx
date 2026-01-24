// src/components/ContactPreview.jsx
import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
    <>
      {/* Premium Inline Styles */}
      <style jsx>{`
        .contact-preview {
          padding: 8rem 0;
          background: linear-gradient(to bottom, #f5f7f8 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        /* Subtle accent overlay */
        .contact-preview::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 90% 20%, rgba(0, 78, 92, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* Left: Text & CTA */
        .contact-info h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: #2b2b2b;
        }

        .contact-info p {
          font-size: 1.2rem;
          color: #495057;
          margin-bottom: 2.5rem;
          max-width: 560px;
          line-height: 1.7;
        }

        .contact-points {
          list-style: none;
          padding: 0;
          margin-bottom: 3rem;
        }

        .contact-points li {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #004e5c;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .contact-points li::before {
          content: "✔";
          color: #ff8c00;
          font-weight: bold;
          font-size: 1.3rem;
        }

        /* CTA Button */
        .contact-btn {
          background: linear-gradient(135deg, #ff6b00 0%, #ff9f00 100%);
          color: #ffffff;
          padding: 1.1rem 3rem;
          border-radius: 60px;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.4);
          transition: all 0.5s ease;
          text-decoration: none;
          display: inline-block;
        }

        .contact-btn:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 20px 45px rgba(255, 107, 0, 0.5);
        }

        /* Right: Contact Card */
        .contact-card {
          background: #ffffff;
          border-radius: 28px;
          padding: 3.5rem 3rem;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.15);
          position: relative;
          transition: all 0.6s ease;
          border-left: 6px solid #004e5c;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #ff8c00, #ff6b00);
          border-radius: 28px 28px 0 0;
        }

        .contact-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 45px 90px rgba(0, 0, 0, 0.2);
        }

        .contact-card h4 {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 2rem;
          color: #2b2b2b;
          position: relative;
        }

        .contact-card h4::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: #ff8c00;
          border-radius: 2px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.8rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid #eee;
        }

        .contact-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .contact-item span {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          background: rgba(0, 78, 92, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item p {
          margin: 0;
          font-weight: 700;
          font-size: 1.15rem;
          color: #004e5c;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }

          .contact-info p {
            margin-left: auto;
            margin-right: auto;
          }

          .contact-points {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
          }

          .contact-points li {
            justify-content: center;
          }

          .contact-btn {
            display: block;
            max-width: 320px;
            margin: 0 auto;
          }

          .contact-card {
            margin-top: 3rem;
            padding: 3rem 2.5rem;
          }

          .contact-item {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .contact-preview {
            padding: 6rem 0;
          }

          .contact-info h2 {
            font-size: 2.4rem;
          }

          .contact-card {
            padding: 2.5rem 2rem;
          }

          .contact-item span {
            width: 45px;
            height: 45px;
            font-size: 1.8rem;
          }
        }
      `}</style>

      {/* Contact Preview Section */}
      <section className="contact-preview">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Text & CTA */}
            <div className="contact-info">
              <h2>Talk to Our Supply Team</h2>
              <p>
                Have questions about availability, pricing, or delivery?
                Our team is ready to assist you with fast and reliable responses.
              </p>
              <ul className="contact-points">
                <li>Fast response time</li>
                <li>Professional supply consultation</li>
                <li>Nationwide delivery coordination</li>
              </ul>
              <Link to="/contact" className="btn contact-btn">
                Contact Us
              </Link>
            </div>

            {/* Right: Quick Contact Card */}
            <div className="contact-card">
              <h4>Quick Contact</h4>
              <div className="contact-item">
                <span>📍</span>
                <p>Addis Ababa, Ethiopia</p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <p>+251 952 277 474</p>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <p>info@saattrading.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPreview;