import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn primary">Back to Home</Link>
          <Link to="/contact" className="btn secondary">Contact Us</Link>
        </div>
      </div>

      <style jsx>{`
        .notfound-page {
          min-height: 100vh;
          background: #D0DEE1;           /* simple dark teal */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          text-align: center;
        }

        /* Prevent overlap with fixed navbar on small screens */
        .notfound-container {
          max-width: 600px;
          width: 100%;
          margin-top: 100px;             /* ← space for fixed navbar (~70-90px height) */
        }

        h1 {
          font-size: 7rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          line-height: 0.9;
          color: #ff8c00;
        }

        h2 {
          font-size: 2.2rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #e0f0f5;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .notfound-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          justify-content: center;
        }

        .btn {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn.primary {
          background: #ff8c00;
          color: white;
        }

        .btn.primary:hover,
        .btn.primary:focus {
          background: #ffa733;
          transform: translateY(-2px);
        }

        .btn.secondary {
          border: 2px solid #ff8c00;
          color: #ff8c00;
        }

        .btn.secondary:hover,
        .btn.secondary:focus {
          background: #ff8c00;
          color: white;
          transform: translateY(-2px);
        }

        /* ────────────────────────────────────────────────
           Responsive adjustments
        ──────────────────────────────────────────────── */

        @media (max-width: 768px) {
          .notfound-container {
            margin-top: 120px;           /* more space on smaller screens */
          }

          h1 {
            font-size: 5.5rem;
          }

          h2 {
            font-size: 1.9rem;
          }

          p {
            font-size: 1.1rem;
          }

          .btn {
            padding: 0.85rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 4.5rem;
          }

          h2 {
            font-size: 1.7rem;
          }

          .notfound-container {
            margin-top: 140px;           /* extra safety margin */
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;