// src/components/common/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setFeaturesOpen(false);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  // Features dropdown items
  const featuresItems = [
    { name: "Quick Approval", path: "/features/quick-approval" },
    { name: "Low Interest Rates", path: "/features/low-rates" },
    { name: "Flexible EMI", path: "/features/flexible-emi" },
    { name: "No Collateral", path: "/features/no-collateral" },
    { name: "Digital Process", path: "/features/digital-process" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>LoanHub</Link>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {/* Features Dropdown */}
          <div className={`nav-dropdown ${featuresOpen ? 'open' : ''}`}>
            <button 
              className={`nav-dropdown-toggle ${location.pathname.includes('/features') ? 'active' : ''}`}
              onClick={toggleFeatures}
            >
              Features <span className="dropdown-arrow">▼</span>
            </button>
            <div className="nav-dropdown-menu">
              {featuresItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="nav-dropdown-item"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/success-stories"
            className={location.pathname === '/success-stories' ? 'active' : ''}
            onClick={closeMenu}
          >
            Success Stories
          </Link>
          
          <Link
            to="/faqs"
            className={location.pathname === '/faqs' ? 'active' : ''}
            onClick={closeMenu}
          >
            FAQs
          </Link>

          {/* Schedule a Demo Button */}
          <Link
            to="/schedule-demo"
            className="schedule-demo-btn"
            onClick={closeMenu}
          >
            Schedule a Demo <span className="btn-arrow">→</span>
          </Link>

          {/* Existing navigation items */}
          <Link
            to="/calculator"
            className={location.pathname === '/calculator' ? 'active' : ''}
            onClick={closeMenu}
          >
            Calculator
          </Link>
          <Link
            to="/offers"
            className={location.pathname === '/offers' ? 'active' : ''}
            onClick={closeMenu}
          >
            Loan Offers
          </Link>
          <Link
            to="/apply-loan"
            className={`apply-now-btn ${location.pathname === '/apply-loan' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;