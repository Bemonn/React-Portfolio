// Importing required dependencies and styles
import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import './Navigation.css';

// Navigation component for the main menu links
function Navigation() {
    const isAboutMatched = useMatch("/about");
  return (
    <nav className="navigation">
      <NavLink 
        to="/About" 
        className={window.location.pathname === "/" || window.location.pathname === "/About" ? "active-link" : ""}
      >
        About Me
      </NavLink>
      <NavLink 
        to="/Portfolio" 
        className={window.location.pathname === "/Portfolio" ? "active-link" : ""}
        exact
      >
        Portfolio
      </NavLink>
      <NavLink 
        to="/Contact" 
        className={window.location.pathname === "/Contact" ? "active-link" : ""}
        exact
      >
        Contact
      </NavLink>
      <NavLink 
        to="/Resume" 
        className={window.location.pathname === "/Resume" ? "active-link" : ""}
        exact
      >
        Resume
      </NavLink>
    </nav>
  );
}

// Export Navigation component
export default Navigation;