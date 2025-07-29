import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              © 2024 Ömer Can Gümüş. Tüm hakları saklıdır.
              <span className="heart"> <FaHeart /> </span>
              ile yapıldı.
            </p>
          </div>
          
          <div className="footer-links">
            <button onClick={() => scrollToSection('home')}>Ana Sayfa</button>
            <button onClick={() => scrollToSection('about')}>Hakkımda</button>
            <button onClick={() => scrollToSection('skills')}>Beceriler</button>
            <button onClick={() => scrollToSection('projects')}>Projeler</button>
            <button onClick={() => scrollToSection('contact')}>İletişim</button>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/omercangumus" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ömer-can-gümüş-a76950258" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:omercangumus3@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer; 