import React, { useState } from "react";
import "./LoanForm.css";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    employmentStatus: "",
    monthlyIncome: "",
    loanType: "",
    loanAmount: "",
    loanPurpose: "",
  });

  const [step, setStep] = useState("form"); // form → terms → payment → cibil
  const [agreed, setAgreed] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [cibilScore] = useState(Math.floor(650 + Math.random() * 150));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("terms");
  };

  // Razorpay payment integration
  const handlePayment = async () => {
    const options = {
      key: "rzp_test_lZFlaRxE8skXuU", // 🔑 Replace with your Razorpay Key
      amount: 49900, // ₹499 in paise
      currency: "INR",
      name: "Loan Platform Fee",
      description: "Processing Fee for Loan Application",
      handler: function (response) {
        alert("✅ Payment Successful!");
        setPaymentDone(true);
        setStep("cibil");
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phoneNumber,
      },
      theme: {
        color: "#1E88E5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="loan-form-container">
      <div className="loan-form-wrapper">
        {/* Step 1: Form */}
        {step === "form" && (
          <>
            <div className="loan-form-header">
              <div className="loan-form-badge">
                <img src="/images/loan-icon.png" alt="Loan Icon" />
                <span>Quick & Easy Application</span>
              </div>
              <h1>
                Apply for Your Loan <span>Today</span>
              </h1>
              <p>Fill out the form below and get approved in minutes! ⚡</p>
            </div>

            <form onSubmit={handleSubmit} className="loan-form">
              {/* Personal Information Section */}
              <div className="form-section">
                <h2>Personal Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Employment & Income Section */}
              <div className="form-section">
                <h2>Employment & Income</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="employmentStatus">
                      Employment Status *
                    </label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="student">Student</option>
                      <option value="retired">Retired</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="monthlyIncome">Monthly Income *</label>
                    <input
                      type="text"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      placeholder="₹50,000"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Loan Details Section */}
              <div className="form-section">
                <h2>Loan Details</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="loanType">Loan Type *</label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select loan type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="car">Car Loan</option>
                      <option value="education">Education Loan</option>
                      <option value="business">Business Loan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="loanAmount">Loan Amount *</label>
                    <input
                      type="text"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      placeholder="₹3,00,000"
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="loanPurpose">Loan Purpose</label>
                  <input
                    type="text"
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    placeholder="e.g., Home renovation, Car purchase, etc."
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Submit Application 🚀
              </button>
            </form>
          </>
        )}

        {/* Step 2: Terms and Conditions */}
        {step === "terms" && (
          <div className="modal-overlay">
            <div className="modal-content terms-modal">
              <button
                className="modal-close-btn"
                onClick={() => setStep("form")}
              >
                &times;
              </button>

              <div className="modal-header">
                <h2>Terms & Conditions</h2>
                <div className="modal-gradient-border"></div>
              </div>

              <div className="terms-content">
                <ul className="terms-list">
                  <li className="terms-item">
                    <span className="terms-icon">✓</span>
                    <span>
                      All submitted information must be accurate and verifiable
                    </span>
                  </li>
                  <li className="terms-item">
                    <span className="terms-icon">✓</span>
                    <span>
                      Platform fee of ₹499 is non-refundable once paid
                    </span>
                  </li>
                  <li className="terms-item">
                    <span className="terms-icon">✓</span>
                    <span>
                      Loan approval is subject to verification and CIBIL check
                    </span>
                  </li>
                  <li className="terms-item">
                    <span className="terms-icon">✓</span>
                    <span>
                      Your data will be securely processed and encrypted
                    </span>
                  </li>
                  <li className="terms-item">
                    <span className="terms-icon">✓</span>
                    <span>By proceeding, you agree to our privacy policy</span>
                  </li>
                </ul>

                <div className="terms-agreement">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="terms-checkbox"
                    />
                    <span className="checkmark"></span>
                    <span className="checkbox-text">
                      I have read and agree to all terms & conditions
                    </span>
                  </label>
                </div>

                <button
                  className={`proceed-button ${!agreed ? "disabled" : ""}`}
                  disabled={!agreed}
                  onClick={() => setStep("payment")}
                >
                  <span>Proceed to Payment</span>
                  <span className="button-icon">💳</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment Modal */}
        {step === "payment" && (
          <div className="modal-overlay">
            <div className="modal-content payment-modal">
              <button
                className="modal-close-btn"
                onClick={() => setStep("terms")}
              >
                &times;
              </button>

              <div className="modal-header">
                <h2>Platform Fee Payment</h2>
                <div className="modal-gradient-border"></div>
              </div>

              <div className="payment-content">
                <div className="payment-amount-card">
                  <div className="amount-icon">💰</div>
                  <div className="amount-details">
                    <span className="amount-label">Platform Fee</span>
                    <span className="amount-value">₹499</span>
                  </div>
                </div>

                <div className="payment-features">
                  <div className="feature-item">
                    <span className="feature-icon">⚡</span>
                    <span>Instant loan processing</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🛡️</span>
                    <span>Secure payment gateway</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📊</span>
                    <span>Free CIBIL score check</span>
                  </div>
                </div>

                <button onClick={handlePayment} className="payment-button">
                  <span>Pay ₹499 Now</span>
                  <span className="button-arrow">→</span>
                </button>

                <p className="payment-note">
                  Secure payment powered by Razorpay • 256-bit SSL encrypted
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: CIBIL Score */}
        {step === "cibil" && paymentDone && (
          <div className="modal-overlay">
            <div className="modal-content cibil-modal">
              <button
                className="modal-close-btn"
                onClick={() => setStep("form")}
              >
                &times;
              </button>

              <div className="modal-header">
                <h2>Your CIBIL Score</h2>
                <div className="modal-gradient-border"></div>
              </div>

              <div className="cibil-content">
                <div className="cibil-card">
                  <div className="score-circle">
                    <span className="score-value">{cibilScore}</span>
                    <div className="score-ring"></div>
                  </div>

                  <div className="cibil-result">
                    <h3
                      className={`score-status ${
                        cibilScore >= 750
                          ? "excellent"
                          : cibilScore >= 700
                          ? "good"
                          : "fair"
                      }`}
                    >
                      {cibilScore >= 750
                        ? "Excellent Credit Score 🎉"
                        : cibilScore >= 700
                        ? "Good Credit Score 👍"
                        : "Needs Improvement ⚠️"}
                    </h3>
                    <p className="score-description">
                      Your credit score is based on your financial history.
                      {cibilScore >= 750
                        ? " Excellent! You have high chances of loan approval."
                        : cibilScore >= 700
                        ? " Good! You have decent chances of loan approval."
                        : " Consider improving your score for better loan terms."}
                    </p>
                  </div>
                </div>

                <div className="cibil-tips">
                  <h4>Tips to Improve Your Score:</h4>
                  <ul className="tips-list">
                    <li>Pay your bills on time</li>
                    <li>Keep credit utilization below 30%</li>
                    <li>Maintain a healthy credit mix</li>
                    <li>Avoid too many credit inquiries</li>
                  </ul>
                </div>

                <button
                  className="continue-button"
                  onClick={() => setStep("form")}
                >
                  Continue Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanForm;
