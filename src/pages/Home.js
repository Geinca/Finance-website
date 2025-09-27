// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loanOffers } from "../data/MockData";
import LoanPopup from "../components/LoanPopup";
import HeroTypingAnimation from "../components/HeroTypingAnimations";
import FinancialProducts from "../components/FinancialProducts";
import "./Home.css";

// Import professional icons (you can use react-icons or similar)
import { 
  FaShieldAlt, 
  FaStar, 
  FaAward, 
  FaUsers,
  FaHome,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
  FaPlayCircle
} from "react-icons/fa";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleApplyClick = (offer) => {
    setSelectedOffer(offer);
    setShowPopup(true);
  };

  const services = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "ITR Filing",
      description: "Professional Income Tax Return filing with expert guidance and maximum refund assurance",
      features: ["Quick processing", "Expert support", "Maximum refund", "Documentation help"],
    },
    {
      icon: <FaChartLine />,
      title: "GST Registration",
      description: "Complete GST registration and compliance services for businesses of all sizes",
      features: ["Fast registration", "Monthly filing", "Expert consultation", "Compliance tracking"],
    },
    {
      icon: <FaBriefcase />,
      title: "Udyam Registration",
      description: "MSME/Udyam registration to help your business avail government benefits and subsidies",
      features: ["Quick approval", "Document preparation", "Certificate delivery", "Renewal support"],
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Balance Sheet Preparation",
      description: "Professional financial statement preparation and accounting services",
      features: ["CA certified", "Timely delivery", "Accuracy guaranteed", "Compliance ready"],
    },
  ];

  const processSteps = [
    {
      icon: <FaCheckCircle />,
      title: "Apply Online",
      description: "Simple 5-minute application process"
    },
    {
      icon: <FaClock />,
      title: "Get Approval",
      description: "Instant preliminary approval decision"
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Upload Documents",
      description: "Secure document submission"
    },
    {
      icon: <FaChartLine />,
      title: "Receive Funds",
      description: "Quick disbursal to your account"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Loan Customer",
      content: "The entire process was seamless. I got my home loan approved in 48 hours with a rate much lower than other banks offered.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Business Loan Customer",
      content: "As a small business owner, the flexible repayment options and quick disbursal helped me expand my operations without stress.",
      rating: 5
    },
    {
      name: "Emily Patterson",
      role: "Personal Loan Customer",
      content: "The transparency and customer service were exceptional. No hidden fees, and the team guided me through every step.",
      rating: 5
    }
  ];

  return (
    <div className="home-appx">
      {/* Hero Section */}
      <HeroTypingAnimation />

      {/* Trust Bar */}
      <section className="trust-bar-appx">
        <div className="container">
          <div className="trust-items-appx">
            <div className="trust-item-appx">
              <FaShieldAlt className="trust-icon-appx" />
              <span>Bank-Grade Security</span>
            </div>
            <div className="trust-item-appx">
              <FaStar className="trust-icon-appx" />
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="trust-item-appx">
              <FaAward className="trust-icon-appx" />
              <span>Best FinTech 2024</span>
            </div>
            <div className="trust-item-appx">
              <FaUsers className="trust-icon-appx" />
              <span>5000+ Businesses</span>
            </div>
          </div>
        </div>
      </section>

      <FinancialProducts 
        loanOffers={loanOffers} 
        onApplyClick={handleApplyClick} 
      />

      {/* Services Section - AppX Style */}
      <section className="services-section-appx">
        <div className="container">
          <div className="section-header-appx">
            <h2>Our Services</h2>
            <p>Comprehensive financial and compliance services for your business</p>
          </div>
          <div className="services-grid-appx">
            {services.map((service, index) => (
              <div key={index} className="service-card-appx">
                <div className="service-icon-appx">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features-appx">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheckCircle className="feature-check-appx" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-link-appx">
                  Get Started <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - AppX Style */}
      <section className="process-section-appx">
        <div className="container">
          <div className="section-header-appx">
            <h2>How It Works</h2>
            <p>Simple and transparent process for all our services</p>
          </div>
          <div className="process-steps-appx">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step-appx">
                <div className="step-icon-appx">{step.icon}</div>
                <div className="step-content-appx">
                  <div className="step-number-appx">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - AppX Style */}
      <section className="testimonials-appx">
        <div className="container">
          <div className="section-header-appx">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses across India</p>
          </div>
          <div className="testimonials-grid-appx">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-appx">
                <div className="testimonial-content-appx">
                  <div className="rating-appx">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="client-info-appx">
                  <div className="client-avatar-appx">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="client-details-appx">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - AppX Style */}
      <section className="cta-section-appx">
        <div className="container">
          <div className="cta-content-appx">
            <h2>Ready to Grow Your Business?</h2>
            <p>Get started with our professional financial services today</p>
            <div className="cta-buttons-appx">
              <Link to="/apply" className="btn btn-primary-appx btn-large-appx">
                Start Your Application
              </Link>
              <Link to="/contact" className="btn btn-outline-appx btn-large-appx">
                Talk to Expert
              </Link>
            </div>
            <div className="cta-features-appx">
              <span><FaCheckCircle /> No hidden fees</span>
              <span><FaCheckCircle /> Quick processing</span>
              <span><FaCheckCircle /> Expert support</span>
            </div>
          </div>
        </div>
      </section>

      <LoanPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        offer={selectedOffer}
      />
    </div>
  );
};

export default Home;