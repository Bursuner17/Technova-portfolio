import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for routing
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [faqVisibility, setFaqVisibility] = useState({});

  // Toggle FAQ visibility
  const toggleFaq = (index) => {
    setFaqVisibility((prevVisibility) => ({
      ...prevVisibility,
      [index]: !prevVisibility[index],
    }));
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <p className="contact-instruction">You can reach me directly via WhatsApp, phone, or email below.</p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>
          <FaPhoneAlt className="icon" />
          {/* Ensure you’re testing with a real phone number */}
          <a href="tel:+254748259452" className="info-link">+254 748 259 452</a>
        </p>
        <p>
          <FaEnvelope className="icon" />
          {/* Ensure you’re testing with a real email */}
          <a href="mailto:technova52@gmail.com" className="info-link">technova52@gmail.com</a>
        </p>

        <div className="social-media">
          <a href="https://wa.me/+254748259452" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" /> Facebook
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> Instagram
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(0)}>
            <h4>What is your response time?</h4>
          </div>
          {faqVisibility[0] && (
            <p className="faq-answer">
              I usually respond within 24 hours during business days. Please feel free to reach out anytime!
            </p>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(1)}>
            <h4>How can I book a consultation?</h4>
          </div>
          {faqVisibility[1] && (
            <p className="faq-answer">
              You can simply send a message through WhatsApp or email and I’ll respond with available slots.
            </p>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(2)}>
            <h4>Do you offer remote services?</h4>
          </div>
          {faqVisibility[2] && (
            <p className="faq-answer">
              Yes, I offer remote services globally. Feel free to contact me from any location!
            </p>
          )}
        </div>
      </div>

      {/* Privacy Policy Link */}
      <div className="privacy-link">
        <p>
          By contacting me, you agree to our{' '}
          <Link to="/privacy-policy" className="privacy-link-text">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
