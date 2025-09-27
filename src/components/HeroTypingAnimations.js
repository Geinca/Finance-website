// src/components/HeroTypingAnimation.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaPlayCircle, 
  FaHome, 
  FaFileInvoiceDollar, 
  FaBriefcase 
} from 'react-icons/fa';
import './HeroTypingAnimation.css';

const HeroTypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const heroTexts = [
    "Smart Financial Solutions for Your Business Growth",
    "Professional Loan Services with Instant Approval",
    "Complete Business Compliance & Registration Services",
    "Your Trusted Partner in Financial Growth"
  ];

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = heroTexts[loopNum % heroTexts.length];
      
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayedText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, heroTexts]);

  return (
    <section className="hero-typing-section">
      <div className="container">
        <div className="hero-typing-content">
          <div className="hero-typing-text">
            <h1>
              {displayedText}
              <span className="typing-cursor">|</span>
            </h1>
            <p>
              Professional financial services including loans, GST registration, 
              ITR filing, and business compliance. Trusted by 5000+ businesses across India.
            </p>
            <div className="hero-stats-typing">
              <div className="stat-typing">
                <span className="stat-number-typing">2,500+</span>
                <span className="stat-label-typing">Loans Disbursed</span>
              </div>
              <div className="stat-typing">
                <span className="stat-number-typing">98%</span>
                <span className="stat-label-typing">Satisfaction Rate</span>
              </div>
              <div className="stat-typing">
                <span className="stat-number-typing">24h</span>
                <span className="stat-label-typing">Quick Approval</span>
              </div>
            </div>
            <div className="hero-buttons-typing">
              <Link to="/apply" className="btn btn-primary-typing">
                Get Started Now
                <FaArrowRight className="btn-icon-typing" />
              </Link>
              <Link to="/services" className="btn btn-secondary-typing">
                <FaPlayCircle className="btn-icon-typing" />
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="hero-visual-typing">
            <div className="hero-card-typing">
              <div className="card-header-typing">
                <h4>Financial Services</h4>
                <span className="card-badge-typing">Popular</span>
              </div>
              <div className="card-content-typing">
                <div className="service-item-typing">
                  <FaHome className="service-icon-typing" />
                  <span>Business Loans</span>
                  <span className="service-amount-typing">Up to ₹50L</span>
                </div>
                <div className="service-item-typing">
                  <FaFileInvoiceDollar className="service-icon-typing" />
                  <span>GST Registration</span>
                  <span className="service-time-typing">3 Days</span>
                </div>
                <div className="service-item-typing">
                  <FaBriefcase className="service-icon-typing" />
                  <span>ITR Filing</span>
                  <span className="service-time-typing">24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTypingAnimation;