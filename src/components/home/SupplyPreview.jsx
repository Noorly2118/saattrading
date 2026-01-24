// src/components/SupplyPreview.jsx
import { Link } from "react-router-dom";
import { Warehouse, TrendingUp, Clock, Truck } from "lucide-react";

const stats = [
  {
    icon: <Warehouse size={36} />,
    title: "Strong Supply Network",
    text: "Reliable sourcing channels to ensure continuous availability.",
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Scalable Capacity",
    text: "Able to support both small orders and large construction projects.",
  },
  {
    icon: <Clock size={36} />,
    title: "Timely Fulfillment",
    text: "Efficient handling and delivery to meet project timelines.",
  },
  {
    icon: <Truck size={36} />,
    title: "Project-Oriented Supply",
    text: "Materials supplied with contractor and project needs in mind.",
  },
];

const SupplyPreview = () => {
  return (
    <>
      {/* Premium Inline Styles */}
      <style jsx>{`
        .supply-preview-section {
          padding: 8rem 0;
          background: linear-gradient(to bottom, #f8fafa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        /* Subtle decorative overlay */
        .supply-preview-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(0, 78, 92, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        /* Left Content */
        .supply-content h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: #2b2b2b;
        }

        .supply-content h2 span {
          color: #004e5c;
          background: linear-gradient(90deg, #004e5c, #006d7a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .supply-description {
          font-size: 1.15rem;
          color: #555d66;
          max-width: 540px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        /* Features List */
        .supply-features {
          margin-bottom: 3rem;
        }

        .supply-feature {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: calc(0.15s * var(--i));
        }

        .supply-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #004e5c, #006d7a);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 78, 92, 0.25);
          transition: all 0.4s ease;
        }

        .supply-feature:hover .supply-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(0, 78, 92, 0.4);
        }

        .supply-feature h6 {
          font-weight: 800;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #2b2b2b;
        }

        .supply-feature p {
          font-size: 0.98rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Button */
        .supply-btn {
          background: linear-gradient(45deg, #ff6b00, #ff9f00);
          color: #ffffff;
          padding: 0.9rem 2.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.05rem;
          box-shadow: 0 8px 25px rgba(255, 107, 0, 0.4);
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }

        .supply-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(255, 107, 0, 0.5);
        }

        /* Right Visual Box */
        .supply-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .supply-box {
          background: linear-gradient(135deg, #004e5c 0%, #002a33 100%);
          color: #ffffff;
          padding: 4rem 3rem;
          border-radius: 28px;
          max-width: 480px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          transform: perspective(1000px) rotateY(-6deg);
          transition: all 0.6s ease;
        }

        .supply-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #ff8c00, #ff6b00);
        }

        .supply-box:hover {
          transform: perspective(1000px) rotateY(0deg) translateY(-10px);
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.35);
        }

        .supply-box h3 {
          font-weight: 900;
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
        }

        .supply-box p {
          color: #e0f7fa;
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.95;
        }

        /* Fade-in Animation */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .supply-preview-section {
            padding: 6rem 0;
          }

          .row {
            flex-direction: column-reverse;
          }

          .supply-visual {
            margin-bottom: 4rem;
          }

          .supply-box {
            transform: none;
            padding: 3rem 2.5rem;
            max-width: 100%;
          }

          .supply-box:hover {
            transform: translateY(-10px);
          }

          .supply-content h2 {
            font-size: 2.6rem;
            text-align: center;
          }

          .supply-description {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .supply-btn {
            display: block;
            text-align: center;
            max-width: 300px;
            margin: 0 auto;
          }
        }

        @media (max-width: 576px) {
          .supply-content h2 {
            font-size: 2.2rem;
          }

          .supply-feature {
            gap: 1.2rem;
          }

          .supply-icon {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>

      {/* Supply Preview Section */}
      <section className="supply-preview-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Content & Features */}
            <div className="col-lg-6 supply-content">
              <h2>
                Supply <span>Capability</span>
              </h2>
              <p className="supply-description">
                SAAT Trading PLC is structured to support construction projects
                through dependable sourcing, efficient handling, and consistent
                material availability.
              </p>

              <div className="supply-features">
                {stats.map((item, index) => (
                  <div
                    className="supply-feature"
                    key={index}
                    style={{ "--i": index } }
                  >
                    <div className="supply-icon">{item.icon}</div>
                    <div>
                      <h6>{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/supply-capability" className="btn supply-btn">
                Learn More
              </Link>
            </div>

            {/* Right: Visual Box */}
            <div className="col-lg-6 supply-visual">
              <div className="supply-box">
                <h3>Built for Construction Demand</h3>
                <p>
                  From rebar and black wire to nails and staffa, our supply
                  operation is designed to keep construction moving without delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplyPreview;