// src/components/FinancialProducts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaHome, 
  FaCar, 
  FaBriefcase, 
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaRupeeSign,
  FaStar
} from 'react-icons/fa';
import './FinancialProducts.css';

const FinancialProducts = ({ loanOffers, onApplyClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getLoanIcon = (loanName) => {
    const iconMap = {
      "Personal Loan": <FaUsers />,
      "Home Loan": <FaHome />,
      "Auto Loan": <FaCar />,
      "Business Loan": <FaBriefcase />,
      "Education Loan": <FaGraduationCap />
    };
    return iconMap[loanName] || <FaBriefcase />;
  };

  const getLoanGradient = (loanName) => {
    const gradientMap = {
      "Personal Loan": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "Home Loan": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "Auto Loan": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "Business Loan": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "Education Loan": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    };
    return gradientMap[loanName] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  };

  return (
    <section className="financial-products-modern">
      <div className="container">
        <div className="section-header-modern">
          <div className="section-badge">Financial Solutions</div>
          <h2>Tailored Financial Products for Your Success</h2>
          <p>Discover the perfect financing option with competitive rates and flexible terms designed for your unique needs</p>
        </div>
        
        <div className="products-grid-modern">
          {loanOffers.map((offer, index) => (
            <div 
              key={offer.id}
              className={`product-card-modern ${hoveredCard === offer.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(offer.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with Gradient */}
              <div 
                className="card-header-modern"
                style={{ background: getLoanGradient(offer.name) }}
              >
                <div className="header-content">
                  <div className="icon-wrapper">
                    {getLoanIcon(offer.name)}
                  </div>
                  <div className="title-section">
                    <h3>{offer.name}</h3>
                    <div className="rating-badge">
                      <FaStar className="star-icon" />
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                <div className="popular-badge">Most Popular</div>
              </div>

              {/* Card Content */}
              <div className="card-content-modern">
                {/* Interest Rate Highlight */}
                <div className="interest-section">
                  <div className="rate-display">
                    <span className="rate-main">{offer.interestRate}%</span>
                    <span className="rate-label">Interest Rate</span>
                  </div>
                  <div className="approval-time">
                    <FaClock className="clock-icon" />
                    <span>24-48h Approval</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaRupeeSign />
                    </div>
                    <div className="feature-text">
                      <span className="feature-value">Up to ₹{offer.maxAmount.toLocaleString()}</span>
                      <span className="feature-label">Loan Amount</span>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <FaClock />
                    </div>
                    <div className="feature-text">
                      <span className="feature-value">{offer.term}</span>
                      <span className="feature-label">Tenure</span>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="benefits-section">
                  <h4>Key Benefits</h4>
                  <ul className="benefits-list">
                    {offer.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Stats */}
                <div className="stats-section">
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Approved</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Satisfaction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24h</span>
                    <span className="stat-label">Processing</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="card-actions-modern">
                <button 
                  className="btn-apply-modern"
                  onClick={() => onApplyClick(offer)}
                >
                  <span>Apply Now</span>
                  <FaArrowRight className="arrow-icon" />
                </button>
                <Link to={`/loans/${offer.id}`} className="btn-learn-more">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="section-cta">
          <p>Not sure which loan is right for you?</p>
          <Link to="/loan-advisor" className="cta-link">
            Get Personalized Recommendation <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;