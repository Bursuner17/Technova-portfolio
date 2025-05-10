import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Services.css'; // Ensure this file exists

const serviceCategories = [
  {
    id: 'web',
    title: 'Web Solutions',
    image: '/images/web-bg.jpg',
    services: [
      { name: 'Web Design & Maintenance', description: 'Responsive and user-friendly websites.', icon: 'https://api.iconify.design/mdi:web.svg' },
      { name: 'Web Hosting', description: 'Fast and reliable hosting services.', icon: 'https://api.iconify.design/mdi:server.svg' },
      { name: 'Domain Registration', description: 'Get your domain name instantly.', icon: 'https://api.iconify.design/mdi:domain.svg' },
      { name: 'Portfolio Design', description: 'Showcase your skills and work.', icon: 'https://api.iconify.design/mdi:account-box.svg' },
      { name: 'Website SEO', description: 'Rank better on search engines.', icon: 'https://api.iconify.design/mdi:chart-line.svg' },
    ],
  },
  {
    id: 'design',
    title: 'Graphics Design',
    image: '/images/design-bg.jpg',
    services: [
      { name: 'Posters & Flyers', description: 'Attractive posters for all needs.', icon: 'https://api.iconify.design/mdi:file-image.svg' },
      { name: 'Company Profiles', description: 'Professional business branding.', icon: 'https://api.iconify.design/mdi:briefcase-account.svg' },
      { name: 'Logo Design', description: 'Unique logos tailored for you.', icon: 'https://api.iconify.design/mdi:alpha-l-box.svg' },
      { name: 'Cards & Banners', description: 'Design for invitations, business & more.', icon: 'https://api.iconify.design/mdi:credit-card-outline.svg' },
      { name: 'Photo Editing', description: 'Advanced photo retouching services.', icon: 'https://api.iconify.design/mdi:image-edit.svg' },
    ],
  },
  {
    id: 'academic',
    title: 'Academic Services',
    image: '/images/academic-bg.jpg',
    services: [
      { name: 'Academic Writing', description: 'Essays, reports & more.', icon: 'https://api.iconify.design/mdi:book-open-page-variant.svg' },
      { name: 'Article Writing', description: 'Well-researched articles.', icon: 'https://api.iconify.design/mdi:file-document.svg' },
      { name: 'CV Design', description: 'Modern & clean CV templates.', icon: 'https://api.iconify.design/mdi:file-account.svg' },
      { name: 'Cover Letter Editing', description: 'Stand out with a great cover letter.', icon: 'https://api.iconify.design/mdi:file-edit-outline.svg' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Websites',
    image: '/images/commercial-bg.jpg',
    services: [
      { name: 'E-Commerce Websites', description: 'Sell your products online.', icon: 'https://api.iconify.design/mdi:cart-outline.svg' },
      { name: 'Blogs', description: 'Start your personal or business blog.', icon: 'https://api.iconify.design/mdi:blogger.svg' },
    ],
  },
  {
    id: 'others',
    title: 'Other Digital Services',
    image: '/images/others-bg.jpg',
    services: [
      { name: 'KUCCPS Applications', description: 'Student placement support.', icon: 'https://api.iconify.design/mdi:account-school.svg' },
      { name: 'HELB/HEF Applications', description: 'Loan application assistance.', icon: 'https://api.iconify.design/mdi:cash-multiple.svg' },
      { name: 'KRA Services', description: 'PIN, returns, etc.', icon: 'https://api.iconify.design/mdi:file-certificate.svg' },
      { name: 'Insurance Cover', description: 'Get insured fast.', icon: 'https://api.iconify.design/mdi:shield-check.svg' },
      { name: 'Microsoft Office Installation', description: 'Full MS Office setup.', icon: 'https://api.iconify.design/mdi:microsoft-office.svg' },
      { name: 'Smartphone Flashing', description: 'Fix bootloops & install OS.', icon: 'https://api.iconify.design/mdi:cellphone-cog.svg' },
    ],
  },
];

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory(prev => (prev === id ? null : id));
  };

  return (
    <div className="services-page">
      <h1 className="page-title">My Professional Services</h1>
      <p className="services-intro">
        You're welcome to explore all the services I offer below. If you're interested, reach out via the <Link to="/contact">Contact Form</Link>, WhatsApp, or call.
      </p>

      <div className="categories-container">
        {serviceCategories.map((cat) => (
          <div key={cat.id} className="category-section">
            <div
              className={`category-card ${openCategory === cat.id ? 'active' : ''}`}
              onClick={() => toggleCategory(cat.id)}
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-title">{cat.title}</div>
              <FaArrowRight className="card-arrow" />
            </div>

            {openCategory === cat.id && (
              <div className="service-cards">
                {cat.services.map((service, i) => (
                  <div className="service-card" key={i}>
                    <div className="service-icon">
                      <img src={service.icon} alt={`${service.name} icon`} onError={(e) => (e.target.style.display = 'none')} />
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <Link to="/contact" className="cta-button">
                      Contact Us
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
