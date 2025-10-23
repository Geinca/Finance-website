// src/pages/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loanOffers } from "../data/MockData";
import { loanServices } from "../data/MockData";
import LoanPopup from "../components/LoanPopup";
import Hero from "../components/Hero";
import FinancialProducts from "../components/FinancialProducts";
import "./Home.css";
import LoanForm from "../components/LoanForm";
import FinancialServices from "../components/FinancialServices";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleApplyClick = (offer) => {
    setSelectedOffer(offer);
    setShowPopup(true);
  };

  

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Loan Customer",
      content:
        "The entire process was seamless. I got my home loan approved in 48 hours with a rate much lower than other banks offered.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Business Loan Customer",
      content:
        "As a small business owner, the flexible repayment options and quick disbursal helped me expand my operations without stress.",
      rating: 5,
    },
    {
      name: "Emily Patterson",
      role: "Personal Loan Customer",
      content:
        "The transparency and customer service were exceptional. No hidden fees, and the team guided me through every step.",
      rating: 5,
    },
  ];

  return (
    <div className="home-appx">
      {/* Hero Section */}
      <Hero />
      <LoanForm />
      <FinancialProducts
        loanOffers={loanOffers}
        onApplyClick={handleApplyClick}
      />
      <FinancialServices
        loanServices={loanServices}
        onApplyClick={handleApplyClick}
      />
      <Features />
      <Cta />
      <Testimonial />

      <LoanPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        offer={selectedOffer}
      />
    </div>
  );
};

export default Home;
