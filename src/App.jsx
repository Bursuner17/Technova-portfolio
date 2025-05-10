import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // ✅ Import PrivacyPolicyPage
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          }
        />
        {/* Separate pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* ✅ Added Privacy Policy route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
