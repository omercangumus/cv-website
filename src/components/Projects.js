import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Ticaret Web Sitesi",
      description: "React ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu. Kullanıcı kimlik doğrulama, ürün yönetimi ve ödeme sistemi entegrasyonu.",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=E-Ticaret",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Drag & drop özellikli görev yönetim uygulaması. React DnD ve Firebase kullanılarak geliştirildi.",
      image: "https://via.placeholder.com/400x250/1d4ed8/ffffff?text=Task+App",
      technologies: ["React", "Firebase", "React DnD", "Tailwind CSS"],
      category: "web",
      github: "https://github.com/yourusername/task-app",
      live: "https://task-app-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Gerçek zamanlı hava durumu bilgilerini gösteren responsive dashboard. OpenWeatherMap API entegrasyonu.",
      image: "https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Weather+App",
      technologies: ["JavaScript", "CSS3", "HTML5", "Weather API"],
      category: "web",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-dashboard.com",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern ve responsive portfolio web sitesi. React ve CSS Grid kullanılarak geliştirildi.",
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      category: "web",
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Yemek tarifleri arama ve filtreleme uygulaması. Spoonacular API kullanılarak geliştirildi.",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Recipe+App",
      technologies: ["React", "API Integration", "CSS3", "JavaScript"],
      category: "web",
      github: "https://github.com/yourusername/recipe-app",
      live: "https://recipe-finder.com",
      featured: false
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Gerçek zamanlı mesajlaşma uygulaması. Socket.io ve React kullanılarak geliştirildi.",
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Chat+App",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      category: "web",
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app-demo.com",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web Uygulamaları' },
    { id: 'mobile', label: 'Mobil Uygulamalar' },
    { id: 'featured', label: 'Öne Çıkanlar' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projelerim</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>Öne Çıkan</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Daha fazla proje görmek ister misiniz?</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn">
            <FaGithub /> GitHub Profilim
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 