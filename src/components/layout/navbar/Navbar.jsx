// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/saatlogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();


  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">

          {/* Logo */}
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt="SAAT Trading PLC" className="logo-img" />
          </Link>

          {/* Custom Hamburger */}
          <button
  className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
  type="button"
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileMenuOpen}
  onClick={toggleMobileMenu}
>
  <span></span>
  <span></span>
  <span></span>
</button>

          {/* Navigation Menu */}
          <div className={`navbar-collapse ${mobileMenuOpen ? "open" : ""}`} id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center menu">

              {/* Materials Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => window.innerWidth >= 992 && setDropdownOpen(true)}
                onMouseLeave={() => window.innerWidth >= 992 && setDropdownOpen(false)}
                onClick={() => window.innerWidth < 992 && setDropdownOpen(!dropdownOpen)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded={dropdownOpen}
                  onClick={(e) => e.preventDefault()}
                >
                  Materials
                </a>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/materials/rebar" onClick={closeMobileMenu}>Rebar</Link></li>
                  <li><Link className="dropdown-item" to="/materials/nails" onClick={closeMobileMenu}>Nails</Link></li>
                  <li><Link className="dropdown-item" to="/materials/black-wire" onClick={closeMobileMenu}>Black Wire</Link></li>
                  <li><Link className="dropdown-item" to="/materials/staffa" onClick={closeMobileMenu}>Staffa</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/supply-capability" onClick={closeMobileMenu}>
                  Supply Capability
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/company" onClick={closeMobileMenu}>
                  Company
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>

              {/* CTA Button */}
              <li className="nav-item ms-lg-4 mt-4 mt-lg-0">
                <Link className="btn quote-btn" to="/request-quote" onClick={closeMobileMenu}>
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay for Mobile */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;