// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation,NavLink } from "react-router-dom";
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
          <div className="navbar-logo">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 560 110"
  role="img"
  aria-label="Sa'at Trading Logo"
>
  {/* CLOCK ARC */}
  <path
    d="M88 10
       A48 48 0 1 0 88 106"
    fill="none"
    stroke="#003B46"
    stroke-width="7"
    stroke-linecap="round"
  />

  {/* CLOCK MARKERS */}
  <rect x="80" y="18" width="7" height="14" rx="2" fill="#FF7800"/>
  <rect x="48" y="54" width="14" height="7" rx="2" fill="#FF7800"/>
  <rect x="80" y="82" width="7" height="14" rx="2" fill="#FF7800"/>

  {/* CLOCK CENTER */}
  <circle cx="88" cy="56" r="4.5" fill="#003B46"/>

  {/* CLOCK HAND */}
  <path
    d="M88 56 L118 38"
    stroke="#FF7800"
    stroke-width="6"
    stroke-linecap="round"
  />

  {/* SA’AT TEXT */}
  <text
    x="140"
    y="68"
    font-size="56"
    font-family="Times New Roman, Georgia, serif"
    font-weight="600"
    fill="#003B46"
  >
    Sa’at
  </text>

  {/* TRADING TEXT */}
  <text
    x="142"
    y="96"
    font-size="24"
    font-family="Arial, Helvetica, sans-serif"
    font-weight="700"
    letter-spacing="2.3"
    fill="#FF7800"
  >
    TRADING
  </text>
</svg>
</div>

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
    <li className="nav-item">
      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        to="/"
        onClick={closeMobileMenu}
      >
        Home
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        to="/company"
        onClick={closeMobileMenu}
      >
        About us
      </NavLink>
    </li>

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
        Our Materials
      </a>
      <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
        <li>
          <NavLink
            className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
            to="/materials/rebar"
            onClick={closeMobileMenu}
          >
            Rebar
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
            to="/materials/nails"
            onClick={closeMobileMenu}
          >
            Nails
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
            to="/materials/black-wire"
            onClick={closeMobileMenu}
          >
            Black Wire
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")}
            to="/materials/staffa"
            onClick={closeMobileMenu}
          >
            Staffa
          </NavLink>
        </li>
      </ul>
    </li>

    <li className="nav-item">
      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        to="/supply-capability"
        onClick={closeMobileMenu}
      >
        Supply Capability
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        to="/contact"
        onClick={closeMobileMenu}
      >
        Contact
      </NavLink>
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