import React from "react";
import "./Features.css";

const Features = () => {
  const processSteps = [
    {
      image: "/images/feature-1.png",
    },
    {
      image: "/images/feature-2.png",
    },
    {
      image: "/images/feature-3.png",
    },
    {
      image: "/images/feature-4.png",
    },
  ];

  return (
    <div className="features-container">
      <section className="process-section-appx">
        <div className="container">
          <div className="section-header-appx">
            <div className="section-badge-appx">Why Choose Us 💎</div>
            <h2>
              Built for&nbsp;<span>Your Success</span>
            </h2>
            <p>We make lending simple, transparent, and tailored to you</p>
          </div>
          <div className="feature-cards">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step-appx">
                <img
                  src={step.image}
                  alt={step.title}
                  className="step-image-appx"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
