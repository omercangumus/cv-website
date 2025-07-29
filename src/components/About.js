import React from 'react';
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Modern Teknolojiler",
      description: "React, JavaScript, TypeScript ve modern web teknolojileri ile çalışıyorum."
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünen responsive web siteleri geliştiriyorum."
    },
    {
      icon: <FaUsers />,
      title: "Kullanıcı Odaklı",
      description: "Kullanıcı deneyimini ön planda tutarak sezgisel arayüzler tasarlıyorum."
    },
    {
      icon: <FaRocket />,
      title: "Performans",
      description: "Hızlı ve optimize edilmiş web uygulamaları geliştiriyorum."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Merhaba! Ben [Adınız Soyadınız]</h3>
            <p>
              3+ yıllık deneyimimle modern web teknolojileri konusunda uzmanlaşmış 
              bir Front-End Developer'ım. Kullanıcı deneyimini ön planda tutarak, 
              performanslı ve sürdürülebilir web uygulamaları geliştiriyorum.
            </p>
            <p>
              React ekosistemi, modern JavaScript (ES6+), CSS3 ve HTML5 konularında 
              güçlü bir temel oluşturdum. Ayrıca TypeScript, Next.js, Tailwind CSS 
              gibi modern teknolojilerle de çalışıyorum.
            </p>
            <p>
              Sürekli öğrenmeye odaklanıyorum ve yeni teknolojileri takip ediyorum. 
              Takım çalışmasına değer veriyor ve projelerde en iyi sonucu almak için 
              çaba gösteriyorum.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Yıl Deneyim</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Tamamlanan Proje</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Mutlu Müşteri</p>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 