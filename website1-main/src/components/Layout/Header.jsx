import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import './header.css';

const Header = ({ onLoginClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="NexEther Logo" className="logo-img click" href="#home" />
      </div>

      {/* Hamburger for mobile */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Navigation menu */}
      <nav className={`menu ${isMobile && isMenuOpen ? 'active' : ''}`}>
        {/* Mobile Menu Content (Hidden on larger screens) */}
        {isMobile && (
          <div className="mobile-menu-content">
            <a href="#home" className="click">
              <i className="fas fa-home"></i> Home {/* Home Icon */}
            </a>
            <a href="#about" className="click">About Us</a>
            <a href="#products" className="click">Our Products</a>
            <a href="#contact" className="click">Contact Us</a>
            <a href="#login" className="click" onClick={onLoginClick}>Login</a>
          </div>
        )}

        {/* Desktop Menu Content (Shown on larger screens) */}
        {!isMobile && (
          <>
            <a href="#about" className="click">About Us</a>
            <a href="#products" className="click">Our Products</a>
            <a href="#contact" className="click">Contact Us</a>
            <a href="#login" className="click" onClick={onLoginClick}>Login</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;