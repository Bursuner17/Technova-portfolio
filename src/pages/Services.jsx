import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Services.css';

const serviceCategories = [
  {
    id: 'web',
    title: 'Web Solutions',
    image: '/images/web-bg.jpg',
    services: [
      { name: 'Web Design & Maintenance', description: 'Responsive and user-friendly websites.', icon: 'https://api.iconify.design/mdi:web.svg', color: '#FF5733' },
      { name: 'Web Hosting', description: 'Fast and reliable hosting services.', icon: 'https://api.iconify.design/mdi:server.svg', color: '#33FF57' },
      { name: 'Domain Registration', description: 'Get your domain name instantly.', icon: 'https://api.iconify.design/mdi:domain.svg', color: '#3357FF' },
      { name: 'Portfolio Design', description: 'Showcase your skills and work.', icon: 'https://api.iconify.design/mdi:account-box.svg', color: '#FF33A1' },
      { name: 'Website SEO', description: 'Rank better on search engines.', icon: 'https://api.iconify.design/mdi:chart-line.svg', color: '#FFD700' },
    ],
  },
  {
    id: 'design',
    title: 'Graphics Design',
    image: '/images/design-bg.jpg',
    services: [
      { name: 'Posters & Flyers', description: 'Attractive posters for all needs.', icon: 'https://api.iconify.design/mdi:file-image.svg', color: '#8A2BE2' },
      { name: 'Company Profiles', description: 'Professional business branding.', icon: 'https://api.iconify.design/mdi:briefcase-account.svg', color: '#FF1493' },
      { name: 'Logo Design', description: 'Unique logos tailored for you.', icon: 'https://api.iconify.design/mdi:alpha-l-box.svg', color: '#00CED1' },
      { name: 'Cards & Banners', description: 'Design for invitations, business & more.', icon: 'https://api.iconify.design/mdi:credit-card-outline.svg', color: '#8B0000' },
      { name: 'Photo Editing', description: 'Advanced photo retouching services.', icon: 'https://api.iconify.design/mdi:image-edit.svg', color: '#FF4500' },
    ],
  },
  {
    id: 'academic',
    title: 'Academic Services',
    image: '/images/academic-bg.jpg',
    services: [
      { name: 'Academic Writing', description: 'Essays, reports & more.', icon: 'https://api.iconify.design/mdi:book-open-page-variant.svg', color: '#006400' },
      { name: 'Article Writing', description: 'Well-researched articles.', icon: 'https://api.iconify.design/mdi:file-document.svg', color: '#8B4513' },
      { name: 'CV Design', description: 'Modern & clean CV templates.', icon: 'https://api.iconify.design/mdi:file-account.svg', color: '#2E8B57' },
      { name: 'Cover Letter Editing', description: 'Stand out with a great cover letter.', icon: 'https://api.iconify.design/mdi:file-edit-outline.svg', color: '#DAA520' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Websites',
    image: '/images/commercial-bg.jpg',
    services: [
      { name: 'E-Commerce Websites', description: 'Sell your products online.', icon: 'https://api.iconify.design/mdi:cart-outline.svg', color: '#DC143C' },
      { name: 'Blogs', description: 'Start your personal or business blog.', icon: 'https://api.iconify.design/mdi:blogger.svg', color: '#A52A2A' },
    ],
  },
  {
    id: 'others',
    title: 'Other Digital Services',
    image: '/images/others-bg.jpg',
    services: [
      { name: 'KUCCPS Applications', description: 'Student placement support.', icon: 'https://api.iconify.design/mdi:account-school.svg', color: '#C71585' },
      { name: 'HELB/HEF Applications', description: 'Loan application assistance.', icon: 'https://api.iconify.design/mdi:cash-multiple.svg', color: '#FF8C00' },
      { name: 'KRA Services', description: 'PIN, returns, etc.', icon: 'https://api.iconify.design/mdi:file-certificate.svg', color: '#B22222' },
      { name: 'Insurance Cover', description: 'Get insured fast.', icon: 'https://api.iconify.design/mdi:shield-check.svg', color: '#20B2AA' },
      { name: 'Microsoft Office Installation', description: 'Full MS Office setup.', icon: 'https://api.iconify.design/mdi:microsoft-office.svg', color: '#FFD700' },
      { name: 'Smartphone Flashing', description: 'Fix bootloops & install OS.', icon: 'https://api.iconify.design/mdi:cellphone-cog.svg', color: '#D2691E' },
    ],
  },
];

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
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
                  <div
                    className="service-card"
                    key={i}
                    style={{ backgroundColor: service.color }}
                  >
                    <div className="service-icon">
                      <img
                        src={service.icon}
                        alt={`${service.name} icon`}
                        onError={(e) => (e.target.style.display = 'none')}
                      />
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
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
