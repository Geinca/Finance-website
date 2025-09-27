// src/components/common/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Loan</Link>
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
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
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
            className={location.pathname === '/apply-loan' ? 'active' : ''}
            onClick={closeMenu}
          >
            Apply Now
          </Link>
          <Link
            to="/loan-status"
            className={location.pathname === '/loan-status' ? 'active' : ''}
            onClick={closeMenu}
          >
            Check Status
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;