import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Cta.css";

const Cta = () => {
  const stats = [
    {
      value: "$35,000",
      label: "Average Loan",
      bg: "linear-gradient(90deg, #F3E8FF 0%, #FCE7F3 100%)",
      borderColor: "#C084FC", // Purple
      valueColor: "#7E22CE", // Deep purple
    },
    {
      value: "94%",
      label: "Approval Rate",
      bg: "linear-gradient(90deg, #DCFCE7 0%, #CBFBF1 100%)",
      borderColor: "#10B981", // Green
      valueColor: "#047857", // Dark green
    },
    {
      value: "50K+",
      label: "Happy Customers",
      bg: "linear-gradient(90deg, #FFEDD4 0%, #FEF9C2 100%)",
      borderColor: "#F59E0B", // Orange
      valueColor: "#B45309", // Deep orange
    },
  ];

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started? 🚀</h2>

          <p className="cta-description">
            Join thousands of satisfied customers who have achieved their
            financial goals with FinTrust Loans.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{
                  background: stat.bg,
                  border: `2px solid ${stat.borderColor}`,
                }}
              >
                <div className="stat-content">
                  <div className="stat-label">{stat.label}</div>
                  <div
                    className="stat-value"
                    style={{ color: stat.valueColor }}
                  >
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-box">
          <div className="percentage"></div>
          <div className="percentage"></div>
          <div className="percentage"></div>
          <button className="cta-button">
            <span>Get Approved Now! ✨</span>
          </button>
        </div>

        <div className="cta-background">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
