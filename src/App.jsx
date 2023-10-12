import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import PortfolioPage from './components/Project/PortfolioPage';

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;