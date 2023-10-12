import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <h1>Tristan Brennan</h1>
      <Navigation />
    </header>
  );
}

export default Header;