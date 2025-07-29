import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Havayolu Rezervasyon Sistemi",
      description: "C# ile geliştirilmiş masaüstü uygulaması. Koltuk tahsisi ve kullanıcı yönetimi özellikleri ile tam fonksiyonel bir rezervasyon sistemi.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
      technologies: ["C#", ".NET", "Windows Forms", "SQL Server"],
      category: "desktop",
      featured: true,
      github: "https://github.com/omercangumus/airline-reservation",
      demo: "#"
    },
    {
      id: 2,
      title: "Flappy Bird Oyunu",
      description: "C# ve Windows Forms kullanarak geliştirilmiş klasik Flappy Bird oyunu. Engel mantığı ve skor sistemi ile tam oynanabilir.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop",
      technologies: ["C#", "Windows Forms", "Game Development", "OOP"],
      category: "game",
      featured: false,
      github: "https://github.com/omercangumus/flappy-bird",
      demo: "#"
    },
    {
      id: 3,
      title: "AWS Cloud Projeleri",
      description: "AWS platformunda geliştirilmiş çeşitli bulut bilişim projeleri. Serverless mimari ve cloud-native çözümler.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      technologies: ["AWS", "Python", "Cloud Computing", "Serverless"],
      category: "cloud",
      featured: true,
      github: "https://github.com/omercangumus/aws-projects",
      demo: "#"
    },
    {
      id: 4,
      title: "Python Veri Analizi",
      description: "Python kullanarak geliştirilmiş veri analizi ve makine öğrenmesi projeleri. Pandas, NumPy ve Scikit-learn kullanımı.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
      category: "ai",
      featured: false,
      github: "https://github.com/omercangumus/python-data-analysis",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'desktop', label: 'Masaüstü' },
    { id: 'game', label: 'Oyun' },
    { id: 'cloud', label: 'Bulut' },
    { id: 'ai', label: 'Yapay Zeka' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
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
              {project.featured && (
                <div className="featured-badge">Öne Çıkan</div>
              )}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
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
          <a href="https://github.com/omercangumus" className="btn" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            GitHub Profilimi Ziyaret Et
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 