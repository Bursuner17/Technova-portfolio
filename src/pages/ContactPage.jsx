import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [faqVisibility, setFaqVisibility] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleFaq = (index) => {
    setFaqVisibility((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_cv6albc',
      'template_vg8yyfy',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'zD7oUs5r9rHg_lZCG'
    ).then(
      () => {
        toast.success(`Thank you ${formData.name}, your message has been sent successfully!`);
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        toast.error('Oops! Something went wrong. Please try again later.');
        console.error('EmailJS Error:', error);
      }
    );
  };

  return (
    <section className="contact-container">
      <h2 className="main-title">Get in Touch</h2>
      <p className="subtitle">I'm here to collaborate, create and connect. Let's talk!</p>

      {/* Cards Row */}
      <div className="cards-grid">
        {/* Contact Info Card */}
        <div className="card">
          <h3>Contact Information</h3>
          <p><FaPhoneAlt className="icon" /> <a href="tel:+254748259452">+254 748 259 452</a></p>
          <p><FaEnvelope className="icon" /> <a href="mailto:technovabursuner@gmail.com">technovabursuner@gmail.com</a></p>
          <div className="social-links">
            <a href="https://wa.me/+254748259452" target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer"><FaFacebook className="icon" /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
          </div>
        </div>

        {/* Office Location Card */}
        <div className="card">
          <h3>Office Location</h3>
          <p><FaMapMarkerAlt className="icon" /> Embu, Kenya</p>
          <p><strong>Availability:</strong> Mon - Fri, 9am - 5pm (EAT)</p>
          <p><strong>Remote Services:</strong> Available globally</p>
        </div>

        {/* Contact Form Card */}
        <div className="card">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        {[
          {
            q: 'What is your response time?',
            a: 'I usually respond within 24 hours during business days.',
          },
          {
            q: 'How can I book a consultation?',
            a: 'Send me a message via WhatsApp or Email, and I’ll reply with available time slots.',
          },
          {
            q: 'Do you offer remote services?',
            a: 'Yes, I work with clients from around the world. Let’s connect virtually!',
          },
        ].map((item, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-question" onClick={() => toggleFaq(i)}>
              <h4>{item.q}</h4>
            </div>
            {faqVisibility[i] && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>

      {/* Privacy Policy */}
      <div className="privacy-note">
        <p>
          By contacting me, you agree to our{' '}
          <Link to="/privacy-policy" className="privacy-link-text">Privacy Policy</Link>.
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop />
    </section>
  );
};

export default ContactPage;
