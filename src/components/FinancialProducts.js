// src/components/FinancialProducts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaPercent,
  FaMoneyBillWave,
  FaShieldAlt
} from 'react-icons/fa';
import './FinancialProducts.css';

// Import your images - make sure these paths are correct
import personalLoanImage from '../assets/images/personal-loan.png';
import homeLoanImage from '../assets/images/Home-loan.png';
import businessLoanImage from '../assets/images/business-loan.png';
import mortageLoanImage from '../assets/images/mortage-loan.png'; // Fixed typo
import odLoanImage from '../assets/images/od-loan.png';
import ccLoanImage from '../assets/images/cc-loan.png';

// Fallback images in case imports fail
const fallbackImages = {
  "Personal Loan": "https://via.placeholder.com/100/667eea/ffffff?text=PL",
  "Home Loan": "https://via.placeholder.com/100/f093fb/ffffff?text=HL",
  "Business Loan": "https://via.placeholder.com/100/43e97b/ffffff?text=BL",
  "Mortage Loan": "https://via.placeholder.com/100/4facfe/ffffff?text=ML",
  "OD Loan": "https://via.placeholder.com/100/fa709a/ffffff?text=OD",
  "CC Limit Loan": "https://via.placeholder.com/100/667eea/ffffff?text=CC",
};

const FinancialProducts = ({ loanOffers, onApplyClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const getProductImage = (loanName) => {
    const imageMap = {
      "Personal Loan": personalLoanImage,
      "Home Loan": homeLoanImage,
      "Business Loan": businessLoanImage,
      "Mortage Loan": mortageLoanImage,
      "OD Loan": odLoanImage,
      "CC Limit Loan": ccLoanImage,
    };
    
    // Return imported image or fallback if there's an error
    if (imageErrors[loanName]) {
      return fallbackImages[loanName] || fallbackImages["Personal Loan"];
    }
    
    return imageMap[loanName] || fallbackImages[loanName] || fallbackImages["Personal Loan"];
  };

  const handleImageError = (loanName) => {
    setImageErrors(prev => ({ ...prev, [loanName]: true }));
  };

  const getProductDescription = (loanName) => {
    const descMap = {
      "Personal Loan": "Meet your personal needs with flexible repayment options",
      "Home Loan": "Realize your dream of owning a home with competitive rates",
      "Business Loan": "Fuel your business growth with customized financing",
      "Mortage Loan": "Get the best mortgage solutions for your property",
      "OD Loan": "Flexible overdraft facility for your business needs",
      "CC Limit Loan": "Increase your purchasing power with higher credit limits",
    };
    return descMap[loanName] || "Customized financial solution for your needs";
  };

  // Get interest rate based on loan type
  const getInterestRate = (loanName) => {
    const rateMap = {
      "Personal Loan": "10.5% - 15.2%",
      "Home Loan": "8.4% - 11.5%",
      "Business Loan": "12.0% - 18.5%",
      "Mortage Loan": "7.9% - 10.8%",
      "OD Loan": "11.0% - 16.0%",
      "CC Limit Loan": "14.0% - 24.0%",
    };
    return rateMap[loanName] || "Contact for rates";
  };

  // Get loan tenure based on loan type
  const getLoanTenure = (loanName) => {
    const tenureMap = {
      "Personal Loan": "1-5 years",
      "Home Loan": "5-30 years",
      "Business Loan": "1-10 years",
      "Mortage Loan": "10-25 years",
      "OD Loan": "1-3 years",
      "CC Limit Loan": "1-5 years",
    };
    return tenureMap[loanName] || "Flexible tenure";
  };

  // Get processing time
  const getProcessingTime = (loanName) => {
    const timeMap = {
      "Personal Loan": "2-4 days",
      "Home Loan": "7-15 days",
      "Business Loan": "5-10 days",
      "Mortage Loan": "10-20 days",
      "OD Loan": "1-3 days",
      "CC Limit Loan": "1-2 days",
    };
    return timeMap[loanName] || "Quick processing";
  };

  // Get features based on loan type
  const getProductFeatures = (loanName) => {
    const featuresMap = {
      "Personal Loan": [
        "No collateral required",
        "Flexible repayment",
        "Quick disbursal"
      ],
      "Home Loan": [
        "Low interest rates",
        "Long repayment tenure",
        "Top-up facility"
      ],
      "Business Loan": [
        "Collateral free options",
        "Business growth support",
        "Customized solutions"
      ],
      "Mortage Loan": [
        "Property financing",
        "Competitive rates",
        "Easy documentation"
      ],
      "OD Loan": [
        "Flexible withdrawals",
        "Interest on utilized amount",
        "Renewable facility"
      ],
      "CC Limit Loan": [
        "Increase credit limit",
        "Easy eligibility",
        "Quick approval"
      ],
    };
    return featuresMap[loanName] || ["Customized solutions", "Quick processing", "Expert guidance"];
  };

  return (
    <section className="financial-products-modern">
      <div className="container">
        <div className="section-header-modern">
          <div className="section-badge">Our Products ✨</div>
          <h2>Loans for Every&nbsp;<span>Dream</span></h2>
          <p>Choose from our wide range of loan products tailored to your needs</p>
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

              {/* Card Content */}
              <div className="card-content-modern">
                <div className="product-image-container">
                  <div className="image-background">
                    <img 
                      src={getProductImage(offer.name)} 
                      alt={offer.name}
                      className="product-image"
                      onError={() => handleImageError(offer.name)}
                    />
                  </div>
                </div>

                <div className="product-info">
                  <h3>{offer.name}</h3>
                  <p className="product-description">
                    {getProductDescription(offer.name)}
                  </p>
                </div>

                {/* Loan Details Section */}
                <div className="loan-details-modern">
                  <div className="detail-row">
                    <div className="detail-item">
                      <FaPercent className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Interest Rate</span>
                        <span className="detail-value">{getInterestRate(offer.name)}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaClock className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Tenure</span>
                        <span className="detail-value">{getLoanTenure(offer.name)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <FaMoneyBillWave className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Processing Time</span>
                        <span className="detail-value">{getProcessingTime(offer.name)}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FaShieldAlt className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Security</span>
                        <span className="detail-value">
                          {offer.name === "Personal Loan" || offer.name === "CC Limit Loan" ? "Unsecured" : "Secured"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="features-list-modern">
                  {getProductFeatures(offer.name).map((feature, idx) => (
                    <div key={idx} className="feature-item-modern">
                      <FaCheckCircle className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Stats */}
                <div className="pricing-section">
                  <div className="price-tag">
                    <span className="price-amount">Up to ₹50L</span>
                    <span className="price-label">Maximum Amount</span>
                  </div>
                  <div className="product-stats">
                    <div className="stat-item">
                      <FaStar className="stat-icon" />
                      <span>4.8/5 Rating</span>
                    </div>
                    <div className="stat-item">
                      <FaUsers className="stat-icon" />
                      <span>10K+ Customers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="card-actions-modern">
                <button 
                  className="btn-primary-modern"
                  onClick={() => onApplyClick(offer)}
                >
                  <span>Apply Now</span>
                  <FaArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;