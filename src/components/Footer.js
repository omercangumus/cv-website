import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              © 2024 [Adınız Soyadınız]. Tüm hakları saklıdır. 
              <span className="heart">
                <FaHeart />
              </span>
              ile yapıldı.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Ana Sayfa</a>
            <a href="#about">Hakkımda</a>
            <a href="#skills">Beceriler</a>
            <a href="#projects">Projeler</a>
            <a href="#contact">İletişim</a>
          </div>
        </div>
        
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer; 