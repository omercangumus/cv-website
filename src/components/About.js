import React from 'react';
import './About.css';
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Yazılım Mühendisliği Öğrencisi & Geliştirici</h3>
            <p>
              Merhaba! Ben Ömer Can Gümüş. Fırat Üniversitesi'nde 3. sınıf Yazılım Mühendisliği öğrencisiyim. 
              Teknolojiye olan ilgim zamanla bulut bilişim ve yapay zeka alanlarında güçlü bir tutkuya dönüştü.
            </p>
            <p>
              Şu anda AWS platformunda aktif olarak çalışıyor, projeler geliştiriyor ve bu alandaki becerilerimi 
              sürekli geliştiriyorum. C# ve Python konularında uzmanım. Hızlı adapte olur, detaylara dikkat eder 
              ve sürekli öğrenmeye açığım.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3</h4>
                <p>Yıl Deneyim</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Proje Tamamlandı</p>
              </div>
              <div className="stat">
                <h4>2</h4>
                <p>Programlama Dili</p>
              </div>
            </div>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h4>Yazılım Geliştirme</h4>
              <p>C# ve Python ile masaüstü ve web uygulamaları geliştiriyorum.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaLaptopCode />
              </div>
              <h4>Bulut Bilişim</h4>
              <p>AWS platformunda aktif çalışıyor, cloud-native çözümler üretiyorum.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h4>Takım Çalışması</h4>
              <p>Grup projelerinde etkili iletişim ve işbirliği becerilerine sahibim.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h4>Sürekli Öğrenme</h4>
              <p>Yeni teknolojileri öğrenmeye açık, sürekli kendimi geliştiriyorum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 