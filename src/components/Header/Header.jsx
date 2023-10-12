import React from 'react';
// Import Navigation component
import Navigation from '../Navigation/Navigation';

// Header component containing site title and navigation links
function Header() {
  return (
    <header className="header">
      <h1>Tristan Brennan</h1>
      <Navigation />
    </header>
  );
}

// Export header component
export default Header;