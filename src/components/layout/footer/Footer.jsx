import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/saatlogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company */}
          <div className="footer-col">
            <div className="logo-wrapper">
              <img src={logo} alt="SAAT Trading PLC" className="footer-logo" />
            </div>
            <p>
              SAAT Trading PLC is a trusted supplier of construction materials,
              serving projects with reliability, quality, and consistency.
            </p>

            {/* Social Icons - added here in company column (or move to own row if preferred) */}
            <div className="social-icons">
              <a href="https://facebook.com/saatrading" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com/saatrading" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/saat-trading-plc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.youtube.com/@saattrading" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://t.me/saatrading" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12C24 5.372 18.628 0 12 0zm5.894 7.224l-1.965 9.262c-.147.654-.534.815-1.083.508l-3-2.211-1.447 1.394c-.16.16-.294.294-.603.294l.214-3.037 5.531-4.994c.241-.214-.054-.334-.374-.12l-6.838 4.306-2.944-.92c-.64-.2-.654-.64.134-.948l11.512-4.44c.534-.2.999.12.823.906z" />
  </svg>
</a>
<a
  href="https://www.tiktok.com/@saatrading"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok">
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12.004 0C5.375 0 0 5.372 0 12c0 6.627 5.375 12 12.004 12C18.627 24 24 18.627 24 12c0-6.628-5.373-12-11.996-12zm3.708 7.407c.722.516 1.598.824 2.546.86v2.35c-1.05-.035-2.065-.31-2.983-.796v4.864c0 2.468-2.002 4.47-4.47 4.47a4.47 4.47 0 1 1 0-8.94c.23 0 .454.02.674.055v2.47a1.996 1.996 0 1 0 1.822 1.99V6.003h2.41c.068.507.312.98.7 1.404z"/>
  </svg>
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><Link to="/supply-capability">Supply Capability</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div className="footer-col">
            <h5>Materials</h5>
            <ul>
              <li><Link to="/materials/rebar">Rebar</Link></li>
              <li><Link to="/materials/nails">Nails</Link></li>
              <li><Link to="/materials/black-wire">Black Wire</Link></li>
              <li><Link to="/materials/staffa">Staffa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <p>Addis Ababa, Ethiopia</p>
            <p>📞 +251 952 277 474</p>
             <p>📞 +251 952 287 676</p>
            <p>✉️ info@saattrading.com</p>
            <Link to="/request-quote" className="footer-cta">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SAAT Trading PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;