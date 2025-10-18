import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBoxOpen, FaClipboardList, FaCogs, FaTags, FaComments, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left - Logo */}
        

        {/* Hamburger for Mobile */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center - Navbar */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/products" className="nav-item" onClick={closeMenu}>
            <FaBoxOpen className="nav-icon" /> Products <span className="arrow">▼</span>
          </Link>
          <Link to="/services" className="nav-item" onClick={closeMenu}>
            <FaClipboardList className="nav-icon" /> Services <span className="arrow">▼</span>
          </Link>
          <Link to="/features" className="nav-item" onClick={closeMenu}>
            <FaCogs className="nav-icon" /> Features
          </Link>
          <Link to="/pricing" className="nav-item" onClick={closeMenu}>
            <FaTags className="nav-icon" /> Pricing
          </Link>
          <Link to="/support" className="nav-item" onClick={closeMenu}>
            <FaComments className="nav-icon" /> Support <span className="arrow">▼</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
