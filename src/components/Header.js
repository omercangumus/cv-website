import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Ömer Can Gümüş</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')}>Ana Sayfa</button></li>
              <li><button onClick={() => scrollToSection('about')}>Hakkımda</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Beceriler</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projeler</button></li>
              <li><button onClick={() => scrollToSection('contact')}>İletişim</button></li>
              <li className="social-links">
                <a href="https://github.com/omercangumus" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/ömer-can-gümüş-a76950258" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 