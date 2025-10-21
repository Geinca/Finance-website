import React from 'react';
import './Features.css';
import { 
  FaClipboardList, 
  FaFileSignature, 
  FaCreditCard, 
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaUserCheck,
  FaChartLine
} from 'react-icons/fa';

const Features = () => {
  const processSteps = [
    {
      icon: <FaClipboardList className="step-icon-svg" />,
      title: "Apply Online",
      description: "Fill our simple application form with basic details in just 2 minutes"
    },
    {
      icon: <FaFileSignature className="step-icon-svg" />,
      title: "Submit Documents",
      description: "Upload required documents securely through our encrypted portal"
    },
    {
      icon: <FaUserCheck className="step-icon-svg" />,
      title: "Get Verified",
      description: "Our team verifies your documents and checks eligibility instantly"
    },
    {
      icon: <FaRocket className="step-icon-svg" />,
      title: "Receive Funds",
      description: "Get loan amount disbursed directly to your bank account within hours"
    }
  ];

  const featuresList = [
    {
      icon: <FaShieldAlt className="feature-icon-svg" />,
      title: "100% Secure",
      description: "Bank-level security with 256-bit SSL encryption"
    },
    {
      icon: <FaClock className="feature-icon-svg" />,
      title: "Quick Processing",
      description: "Get approval within 24 hours with minimal documentation"
    },
    {
      icon: <FaCreditCard className="feature-icon-svg" />,
      title: "Lowest Rates",
      description: "Competitive interest rates starting from 8.5% per annum"
    },
    {
      icon: <FaChartLine className="feature-icon-svg" />,
      title: "Flexible Tenure",
      description: "Choose repayment period from 1 to 5 years as per your convenience"
    }
  ];

  return (
    <div className="features-container">
      <section className="process-section-appx">
        <div className="container">
          <div className="section-header-appx">
            <div className="section-badge-appx">Why Choose Us 💎</div>
            <h2>Built for&nbsp;<span>Your Success</span></h2>
            <p>We make lending simple, transparent, and tailored to you</p>
          </div>
          <div className="process-steps-appx">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step-appx">
                <div className="step-icon-appx">
                  {step.icon}
                  <div className="step-connector"></div>
                </div>
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

      {/* Features Section */}
      <section className="features-section-appx">
        <div className="container">
          <div className="section-header-appx">
            <div className="section-badge-appx">Why Choose Us</div>
            <h2>Our Key Features</h2>
            <p>Experience the best in class financial services with these amazing features</p>
          </div>
          <div className="features-grid-appx">
            {featuresList.map((feature, index) => (
              <div key={index} className="feature-card-appx">
                <div className="feature-icon-wrapper-appx">
                  {feature.icon}
                </div>
                <div className="feature-content-appx">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="feature-background-appx"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;