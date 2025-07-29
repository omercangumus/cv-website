import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Merhaba, ben</div>
            <h1 className="hero-title">
              <span className="hero-name">Ömer Can Gümüş</span>
              <span className="hero-role">Software Engineering Student</span>
            </h1>
            <p className="hero-description">
              Fırat Üniversitesi'nde 3. sınıf Yazılım Mühendisliği öğrencisiyim. 
              Bulut bilişim ve yapay zeka alanlarında tutkulu bir geliştirici olarak 
              AWS platformunda aktif çalışıyorum. C# ve Python konularında uzmanım.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Projelerimi Gör</a>
              <a href="#contact" className="btn btn-secondary">İletişime Geç</a>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com/omercangumus" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ömer-can-gümüş-a76950258" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:omercangumus3@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
                <p>Ömer Can Gümüş</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 