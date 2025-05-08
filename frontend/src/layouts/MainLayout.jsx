import React from 'react';

function MainLayout({ children }) {
  return (
    <div>
      {/* You can add your footer or header here */}
      {children} {/* This will render any content (like Navbar, Hero, etc.) */}
    </div>
  );
}

export default MainLayout;
