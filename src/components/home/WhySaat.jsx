// src/components/WhySaat.jsx
import { ShieldCheck, Truck, Package, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality You Can Trust",
    text: "We supply construction materials that meet rigorous industry standards and exceed project expectations.",
  },
  {
    icon: <Truck size={40} />,
    title: "Reliable & Timely Delivery",
    text: "On-time delivery nationwide, ensuring your projects stay on schedule — every time.",
  },
  {
    icon: <Package size={40} />,
    title: "Bulk & Large-Scale Supply",
    text: "Capable of fulfilling high-volume orders for mega projects and long-term developments.",
  },
  {
    icon: <Users size={40} />,
    title: "Contractor-Centered Service",
    text: "We speak your language — dedicated support tailored to contractors, builders, and developers.",
  },
];

const WhySaat = () => {
  return (
    <>
      {/* Premium Inline Styles */}
      <style jsx>{`
        .why-saat-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #004e5c 0%, #002a33 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background pattern overlay */
        .why-saat-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 50%, rgba(255, 140, 40, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(255, 140, 40, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        /* Header */
        .why-saat-header h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.2rem;
          line-height: 1.1;
        }

        .why-saat-header h2 span {
          color: #ff8c00;
          background: linear-gradient(90deg, #ff8c00, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .why-saat-header p {
          max-width: 700px;
          margin: 0 auto 5rem;
          color: #e0f7fa;
          font-size: 1.15rem;
          opacity: 0.95;
        }

        /* Feature Cards */
        .why-card {
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          height: 100%;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .why-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00, #ff6b00);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .why-card:hover::before {
          transform: scaleX(1);
        }

        .why-card:hover {
          transform: translateY(-20px) scale(1.03);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        /* Icon */
        .why-icon {
          width: 90px;
          height: 90px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 10px 30px rgba(255, 140, 40, 0.5);
          transition: all 0.4s ease;
        }

        .why-card:hover .why-icon {
          transform: scale(1.15) rotate(8deg);
          box-shadow: 0 15px 40px rgba(255, 140, 40, 0.7);
        }

        .why-card svg {
          stroke-width: 2.5;
        }

        /* Text */
        .why-card h5 {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .why-card p {
          font-size: 1rem;
          color: #e0f7fa;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .why-saat-header h2 {
            font-size: 2.6rem;
          }
          .why-card {
            padding: 2.5rem 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .why-saat-section {
            padding: 6rem 0;
          }
          .why-saat-header h2 {
            font-size: 2.2rem;
          }
          .why-saat-header p {
            margin-bottom: 3.5rem;
            font-size: 1.05rem;
          }
          .why-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 1.5rem;
          }
          .why-card:hover {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @media (max-width: 576px) {
          .why-card {
            padding: 2.2rem 1.5rem;
          }
        }
      `}</style>

      {/* Why SAAT Section */}
      <section className="why-saat-section">
        <div className="container">
          {/* Header */}
          <div className="why-saat-header text-center">
            <h2>
              Why <span>SAAT Trading</span>
            </h2>
            <p>
              A trusted construction materials supplier committed to reliability,
              quality, and long-term partnerships.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="row g-5 justify-content-center">
            {features.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="why-card">
                  <div className="why-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySaat;