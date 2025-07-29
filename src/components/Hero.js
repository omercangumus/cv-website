import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>👋 Merhaba, ben</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-name">Adınız Soyadınız</span>
              <span className="hero-role">Front-End Developer</span>
            </h1>
            <p className="hero-description">
              Modern web teknolojileri ile kullanıcı dostu ve etkileyici 
              web uygulamaları geliştiriyorum. React, JavaScript ve 
              modern CSS ile yaratıcı çözümler üretiyorum.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Projelerimi Görüntüle
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                İletişime Geç
              </button>
            </div>
            <div className="hero-social">
              <a href="mailto:email@example.com" className="social-link">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>📸</span>
                <p>Profil Fotoğrafınız</p>
              </div>
            </div>
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 