import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programlama Dilleri",
      skills: [
        { name: "C#", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Teknolojiler & Platformlar",
      skills: [
        { name: ".NET", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Software Design", level: 75 }
      ]
    },
    {
      title: "Geliştirme Araçları",
      skills: [
        { name: "Gamemaker", level: 70 },
        { name: "Pixelart", level: 65 },
        { name: "Artificial Intelligence", level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    "Windows Forms", "Desktop Applications", "Game Development", 
    "Cloud Computing", "Database Design", "API Development",
    "Version Control", "Problem Solving", "Algorithm Design"
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Becerilerim</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
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
          
          <div className="skills-summary">
            <h3>Ek Beceriler</h3>
            <div className="additional-skills">
              {additionalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 