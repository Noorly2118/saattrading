// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../../assets/heroimage.jpg";

const Hero = () => {
  return (
    <>
      <style>{`
        .hero {
          min-height: 90vh;
          position: relative;
          background: #f5f7f8;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* GRID */
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 600px) 1fr;
          width: 100%;
          align-items: center;
        }

        /* TEXT COLUMN (PADDED) */
        .hero-content {
          padding: 90px 5%;
          max-width: 600px;
        }

        .hero-badge {
          display: inline-block;
          background: #ff8c00;
          color: #fff;
          padding: 0.45rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
        }

        .hero-title {
          font-size: 3.4rem;
          font-weight: 800;
          line-height: 1.1;
          color: #003b46;
          margin-bottom: 1.4rem;
        }

        .hero-title span {
          color: #ff8c00;
        }

        .hero-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #333;
          margin-bottom: 2.4rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #ff8c00;
          color: #fff;
          padding: 1rem 2.6rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 12px 30px rgba(255,140,0,0.4);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background: #e57c00;
        }

        .btn-outline {
          border: 2px solid #003b46;
          color: #003b46;
          padding: 1rem 2.6rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
        }

        .btn-outline:hover {
          background: #003b46;
          color: #fff;
        }

        /* IMAGE COLUMN — FLUSH RIGHT */
        .hero-image-wrapper {
          height: 100%;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-content {
            padding: 110px 6% 60px;
            text-align: center;
            max-width: 100%;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-image-wrapper {
            height: 50vh;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >

            <h1 className="hero-title">
              ጥራታቸውን በጠበቁ ግብዓቶች<br />
              <span>ኢትዮጲያን እንገነባለን</span>
            </h1>
        
            <p className="hero-text">
              Reliable supply of <strong>rebar, black wire, nails, and staffa</strong>,
              delivered on time for projects of any scale.
            </p>

            <div className="hero-actions">
              <Link to="/request-quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Construction materials"
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
