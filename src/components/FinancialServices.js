// src/components/LoanServices.js
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaClock,
  FaPercent,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";
import "./FinancialServices.css"; // or rename to LoanServices.css if you wish

// Import images (you can replace these with real service images)
import ITRImage from "../assets/images/ITR.png";
import GSTImage from "../assets/images/GST.png";
import UDAYAMImage from "../assets/images/UDAYAM.png";
import BalanceSheetImage from "../assets/images/Balance-sheet.png";

// Fallback images
const fallbackImages = {
  "ITR Filing": "https://via.placeholder.com/100/667eea/ffffff?text=ITR",
  "GST Registration": "https://via.placeholder.com/100/f093fb/ffffff?text=GST",
  "UDYAM Registration":
    "https://via.placeholder.com/100/43e97b/ffffff?text=UDYAM",
  "Balance Sheet Service":
    "https://via.placeholder.com/100/4facfe/ffffff?text=BS",
};

const LoanServices = ({ loanServices = [], onApplyClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Map each service name to an image
  const getServiceImage = (serviceName) => {
    const imageMap = {
      "ITR Filing": ITRImage,
      "GST Registration": GSTImage,
      "UDYAM Registration": UDAYAMImage,
      "Balance Sheet Service": BalanceSheetImage,
    };

    if (imageErrors[serviceName]) {
      return fallbackImages[serviceName] || fallbackImages["ITR Filing"];
    }

    return (
      imageMap[serviceName] ||
      fallbackImages[serviceName] ||
      fallbackImages["ITR Filing"]
    );
  };

  const handleImageError = (serviceName) => {
    setImageErrors((prev) => ({ ...prev, [serviceName]: true }));
  };

  const getServiceDescription = (serviceName) => {
    const descMap = {
      "ITR Filing": "Easily file your Income Tax Return with expert help.",
      "GST Registration":
        "Register your business under GST in just a few steps.",
      "UDYAM Registration": "Get your MSME Udyam certificate hassle-free.",
      "Balance Sheet Service":
        "Accurate and professional financial balance sheet preparation.",
    };
    return (
      descMap[serviceName] ||
      "Reliable financial service tailored to your needs."
    );
  };

  const bgColorMap = {
    "ITR Filing": "linear-gradient(135deg, #667eea, #764ba2)",
    "GST Registration": "linear-gradient(135deg, #43e97b, #38f9d7)",
    "UDYAM Registration": "linear-gradient(135deg, #f093fb, #f5576c)",
    "Balance Sheet Service": "linear-gradient(135deg, #30cfd0, #330867)",
  };

  return (
    <section className="financial-products-modern">
      <div className="container">
        <div className="section-header-modern">
          <div className="section-badge">Our Services ✨</div>
          <h2>
            Professional&nbsp;<span>Loan Services</span>
          </h2>
          <p>
            Choose from our wide range of financial services tailored to your
            business and personal needs
          </p>
        </div>

        <div className="products-grid-modern">
          {loanServices.map((service, index) => (
            <div
              key={service.id}
              className={`product-card-modern ${
                hoveredCard === service.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Content */}
              <div className="card-content-modern">
                <div className="service-image-container">
                  <div
                    className="image-background"
                    style={{
                      background: bgColorMap[service.name] || "#f3f4f6",
                    }}
                  >
                    <img
                      src={getServiceImage(service.name)}
                      alt={service.name}
                      className="product-image"
                      onError={() => handleImageError(service.name)}
                    />
                  </div>
                </div>

                <div className="product-info">
                  <h3>{service.name}</h3>
                  <p className="product-description">
                    {getServiceDescription(service.name)}
                  </p>
                </div>

                {/* Rating & Customers */}
                <div className="pricing-section">
                  <div className="product-stats">
                    <div className="stat-item">
                      <FaStar className="stat-icon" />
                      <span>4.9/5 Rating</span>
                    </div>
                    <div className="stat-item">
                      <FaUsers className="stat-icon" />
                      <span>20K+ Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="card-actions-modern">
                <button
                  className="btn-primary-modern"
                  onClick={() => onApplyClick(service)}
                >
                  <span>Get Service</span>
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

export default LoanServices;
