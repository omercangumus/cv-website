import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Teknolojileri",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Next.js", level: 70 }
      ]
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Styled Components", level: 80 },
        { name: "Sass/SCSS", level: 75 },
        { name: "Material-UI", level: 70 },
        { name: "Bootstrap", level: 85 },
        { name: "Framer Motion", level: 65 }
      ]
    },
    {
      title: "Araçlar & Platformlar",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Becerilerim</h2>
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <h3>Ek Beceriler</h3>
          <div className="additional-skills">
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">Progressive Web Apps</span>
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">Performance Optimization</span>
            <span className="skill-tag">SEO</span>
            <span className="skill-tag">Accessibility</span>
            <span className="skill-tag">Testing (Jest)</span>
            <span className="skill-tag">Agile/Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 