import "../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaTools,
  
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    ],
  },

  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },

  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Spring MVC", icon: "devicon-spring-original colored" },
      { name: "Spring Data JPA", icon: "devicon-spring-original colored" },
      { name: "Hibernate", icon: "devicon-hibernate-plain colored" },
      { name: "Spring Security", icon: "devicon-spring-original colored" },
      { name: "REST APIs", icon: "devicon-fastapi-plain colored" },
      { name: "JWT", icon: "devicon-json-plain colored" },
      { name: "RBAC", icon: "devicon-linux-plain colored" },
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: <FaBrain />,
    skills: [
      { name: "Machine Learning", icon: "devicon-python-plain colored" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
      { name: "Gemini API", icon: "devicon-google-plain colored" },
      { name: "LLMs", icon: "devicon-python-plain colored" },
    ],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
       {name: "SQL", icon: "devicon-azuresqldatabase-plain colored"},
      { name: "MySQL", icon: "devicon-mysql-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
     
    ],
  },

  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Eclipse", icon: "devicon-eclipse-plain colored" },
      {name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>TECHNICAL SKILLS</span>

        <h2>Technologies I Work With</h2>

        <p>
          Technologies, frameworks and tools that I use to build modern,
          scalable Full Stack and AI-powered applications.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-title">
              {category.icon}
              <h3>{category.title}</h3>
            </div>

            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;