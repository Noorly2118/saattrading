// src/components/CallToAction.jsx
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/download 3.jpg"; 

const CallToAction = () => {
  return (
    <>
      {/* Premium Inline Styles */}
      <style jsx>{`
        .cta-section {
          padding: 10rem 1rem 2rem;
          background-image: url(${backgroundImage});
          background-size: fixed;        
          background-repeat: no-repeat;
          background-position: center center;
          position: relative;
          overflow: hidden;
          min-height: 80vh;                 /* Ensures full coverage */
          display: flex;
          align-items: center;
        }

        /* Gentle dark overlay to improve text readability without hiding image details */
        .cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      background: linear-gradient(
  to bottom,
  rgba(0, 55, 65, 0.25),
  rgba(0, 55, 65, 0.45),
  rgba(0, 55, 65, 0.6)
);

          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        /* Elegant floating CTA card */
        .cta-box {
          background: transparent;
          -webkit-backdrop-filter: blur(16px);
          border-radius: 36px;
          padding: 5rem 5.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.4);
          max-width: 1200px;
          margin: 0 auto;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cta-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 100%;
          background: linear-gradient(to bottom, #ff8c00, #ff6b00);
          border-radius: 36px 0 0 36px;
        }

        .cta-box:hover {
          transform: translateY(-25px);
          box-shadow: 0 60px 140px rgba(0, 0, 0, 0.55);
        }

        /* Text */
        .cta-content h2 {
          font-size: 3.2rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          color: #1e293b;
          line-height: 1.15;
        }

        .cta-content p {
          font-size: 1.3rem;
          color: #ff6b00;
          max-width: 600px;
          line-height: 1.8;
        }

        /* Button */
        .cta-btn {
          background: linear-gradient(135deg, #ff6b00 0%, #ff9f00 100%);
          color: #ffffff;
          padding: 1.4rem 3.8rem;
          border-radius: 70px;
          font-weight: 800;
          font-size: 1.25rem;
          box-shadow: 0 15px 40px rgba(255, 107, 0, 0.5);
          transition: all 0.5s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.8s ease, height 0.8s ease;
        }

        .cta-btn:hover {
          transform: translateY(-10px) scale(1.08);
          box-shadow: 0 30px 60px rgba(255, 107, 0, 0.6);
        }

        .cta-btn:hover::after {
          width: 450px;
          height: 450px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .cta-box {
            padding: 4rem 4rem;
            gap: 3rem;
          }

          .cta-content h2 {
            font-size: 2.8rem;
          }

          .cta-content p {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 6rem 0 5rem;
            min-height: auto;
            background-size: cover; /* On mobile, cover to avoid empty space */
          }

          .cta-box {
            flex-direction: column;
            text-align: center;
            padding: 4rem 3rem;
            border-radius: 28px;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            margin-bottom: 1.8rem;
          }

          .cta-content p {
            max-width: 100%;
            margin-bottom: 3rem;
          }

          .cta-btn {
            padding: 1.3rem 3.5rem;
            font-size: 1.2rem;
            width: 100%;
            max-width: 380px;
          }
        }

        @media (max-width: 576px) {
          .cta-content h2 {
            font-size: 2.2rem;
          }

          .cta-box {
            padding: 3rem 2rem;
          }
        }
      `}</style>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Need Construction Materials?</h2>
              <p>
                Tell us what you need and we’ll respond quickly with availability
                and supply details.
              </p>
            </div>

            <div className="cta-action">
              <Link to="/request-quote" className="cta-btn">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;