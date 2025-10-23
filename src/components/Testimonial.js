import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      location: "Mumbai",
      content:
        "FinTrust helped me expand my business with a timely loan. The process was smooth and the interest rates were very competitive. Highly recommended!",
      rating: 5,
      bgColor: "card-bg-1",
      borderColor: "card-border-1",
    },
    {
      name: "Priya Patel",
      role: "Home Buyer",
      location: "Delhi",
      content:
        "Got my home loan approved in just 3 days! The team was very supportive throughout the process. Made my dream of owning a home come true.",
      rating: 5,
      bgColor: "card-bg-2",
      borderColor: "card-border-2",
    },
    {
      name: "Amit Kumar",
      role: "Startup Founder",
      location: "Bangalore",
      content:
        "As a startup, we needed quick funding. FinTrust understood our needs and provided the perfect business loan with flexible repayment options.",
      rating: 4,
      bgColor: "card-bg-3",
      borderColor: "card-border-3",
    },
    {
      name: "Sneha Reddy",
      role: "Doctor",
      location: "Hyderabad",
      content:
        "Excellent service! The personal loan helped me set up my clinic. Low interest rates and minimal documentation made it stress-free.",
      rating: 5,
      bgColor: "card-bg-4",
      borderColor: "card-border-4",
    },
    {
      name: "Vikram Singh",
      role: "IT Professional",
      location: "Pune",
      content:
        "Quick approval and disbursement. Used the loan for home renovation. The entire process was digital and very convenient.",
      rating: 4,
      bgColor: "card-bg-5",
      borderColor: "card-border-5",
    },
    {
      name: "Anjali Mehta",
      role: "Teacher",
      location: "Chennai",
      content:
        "Great experience with FinTrust. The education loan for my daughter's studies was processed efficiently with good customer support.",
      rating: 5,
      bgColor: "card-bg-6",
      borderColor: "card-border-6",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide configuration
  const slidesToShow = 3;
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (totalSlides - slidesToShow + 1)) %
        (totalSlides - slidesToShow + 1)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <section className="testimonials-appx">
      <div className="container">
        <div className="section-header-appx">
          <div className="section-badge-appx">✨ Customer Stories</div>
          <h2>
            What Our Customers <span>Say</span>
          </h2>
          <p>
            Real stories from real people who achieved their dreams with us 💭
          </p>
        </div>

        {/* Slider Container */}
        <div className="testimonial-slider-container">
          {/* Navigation Buttons */}
          <button
            className="slider-nav-btn slider-prev"
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <FaChevronLeft />
          </button>

          <button
            className="slider-nav-btn slider-next"
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <FaChevronRight />
          </button>

          {/* Slider Track */}
          <div
            className="testimonials-slider-track"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div
                  className={`testimonial-card-appx ${testimonial.bgColor} ${testimonial.borderColor}`}
                >
                  {/* Quote Icon */}
                  <div className="quote-icon-appx">
                    <FaQuoteLeft />
                  </div>

                  {/* Testimonial Content */}
                  <div className="testimonial-content-appx">
                    <div className="rating-appx">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "star-filled"
                              : "star-empty"
                          }
                        />
                      ))}
                    </div>
                    <p>"{testimonial.content}"</p>
                  </div>

                  {/* Client Info */}
                  <div className="client-info-appx">
                    <div className="client-avatar-appx">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="client-details-appx">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                      <div className="client-location-appx">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Background Gradient */}
                  <div className="testimonial-gradient-appx"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {[...Array(totalSlides - slidesToShow + 1)].map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats-appx">
          <div className="stat-item-appx">
            <div>
              <span>⭐</span>
            </div>
            <div>
              <div className="stat-number-appx">Rated</div>
              <div className="stat-label-appx">4.9/5.0</div>
            </div>
          </div>
          <div className="stat-item-appx">
            <div>
              <span>🏆</span>
            </div>
            <div>
              <div className="stat-number-appx">Awards</div>
              <div className="stat-label-appx">Best Lender 2024</div>
            </div>
          </div>
          <div className="stat-item-appx">
            <div>
              <span>✅</span>
            </div>
            <div>
              <div className="stat-number-appx">Verified</div>
              <div className="stat-label-appx">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
