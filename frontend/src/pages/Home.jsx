import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

function Home() {
  return (
    <div>
      {/* Other sections */}
      <About />
      <Projects /> {/* Add Projects Section */}
      <Footer /> {/* Add Footer Section */}
    </div>
  );
}

export default Home;
