import React from 'react';
import '../styles/PrivacyPolicyPage.css'; // ✅ Link to the CSS

const PrivacyPolicyPage = () => {
  return (
    <section className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 28, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to my website. I value your privacy and am committed to protecting your personal information. 
          This Privacy Policy explains how I collect, use, and safeguard your data.
        </p>

        <h2>2. Information I Collect</h2>
        <ul>
          <li>Personal Information (Name, Email, Phone) you provide via contact forms.</li>
          <li>Anonymous data such as browser type, pages visited, and time spent on the site.</li>
        </ul>

        <h2>3. How I Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries or service requests.</li>
          <li>To improve website performance and user experience.</li>
          <li>To communicate important updates if necessary.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          I implement standard security measures to protect your information. However, no method of transmission 
          over the internet is 100% secure.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          My site may contain links to external sites. I am not responsible for the content or privacy practices 
          of those sites.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          I may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <h2>7. Contact Me</h2>
        <p>
          If you have any questions about this Privacy Policy, feel free to contact me at: 
          <a href="mailto:technova52@gmail.com"> technova52@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
