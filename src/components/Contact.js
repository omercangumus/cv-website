import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "E-posta",
      value: "email@example.com",
      link: "mailto:email@example.com"
    },
    {
      icon: <FaPhone />,
      title: "Telefon",
      value: "+90 (555) 123 45 67",
      link: "tel:+905551234567"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Konum",
      value: "İstanbul, Türkiye",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "#333"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "#1da1f2"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Benimle İletişime Geçin</h3>
            <p>
              Projeleriniz için benimle iletişime geçebilir, 
              sorularınızı sorabilir veya sadece merhaba diyebilirsiniz. 
              En kısa sürede size dönüş yapacağım.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Sosyal Medya</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mesaj konusu"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 