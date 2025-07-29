import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Benimle İletişime Geçin</h3>
            <p>
              Projeleriniz için işbirliği yapmak, sorularınızı sormak veya sadece 
              merhaba demek isterseniz, aşağıdaki iletişim bilgilerinden bana ulaşabilirsiniz.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>E-posta</h4>
                  <a href="mailto:omercangumus3@gmail.com">omercangumus3@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Telefon</h4>
                  <a href="tel:+905550546235">+90 555 054 62 35</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Konum</h4>
                  <span>İnegöl / Bursa, Türkiye</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Sosyal Medya</h4>
              <div className="social-icons">
                <a href="https://linkedin.com/in/ömer-can-gümüş-a76950258" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/omercangumus" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:omercangumus3@gmail.com" className="social-icon">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Mesaj Gönder</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 