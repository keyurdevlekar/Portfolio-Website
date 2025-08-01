// components/Skills.jsx
function Skills() {
  const skills = {
    "Languages & Frameworks": [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "📜" },
      { name: "React", icon: "⚛️" },
      { name: "Spring Boot", icon: "🌱" },
      { name: "HTML/CSS", icon: "🖥️" }
    ],
    "Database": [
      { name: "MySQL", icon: "🗃️" }
    ],
    "Web Development": [
      { name: "REST APIs", icon: "🔗" },
      { name: "Responsive Design", icon: "📱" }
    ],
    "Tools & Platforms": [
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Eclipse", icon: "🪐" }
    ],
    "Soft Skills": [
      { name: "Problem Solving", icon: "🧩" },
      { name: "Team Collaboration", icon: "👥" },
      { name: "Communication", icon: "💬" }
    ]
  };

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skill-items">
              {items.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;