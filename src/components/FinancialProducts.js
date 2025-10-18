// src/components/FinancialProducts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers
} from 'react-icons/fa';
import './FinancialProducts.css';

// Import your images - make sure these paths are correct
import personalLoanImage from '../assets/images/Home-loan.png';
import homeLoanImage from '../assets/images/Home-loan.png';
import businessLoanImage from '../assets/images/Home-loan.png';
import mortageLoanImage from '../assets/images/Home-loan.png'; // Fixed typo
import odLoanImage from '../assets/images/Home-loan.png';
import ccLoanImage from '../assets/images/Home-loan.png';

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
                  <div 
                    className="image-background"
                    style={{ }}
                  >
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
                {/* <Link to={`/loans/${offer.id}`} className="btn-outline-modern">
                  Learn More
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="section-cta-modern">
          <div className="cta-content">
            <h3>Ready to Find Your Perfect Loan?</h3>
            <p>Join thousands of satisfied customers who've achieved their financial goals with us</p>
            <Link to="/loan-advisor" className="cta-btn-modern">
              Get Personalized Recommendation <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;