// import "../styles/projects.css";

// function Projects() {
//   const projects = [
//     {
//       title: "CivicEye AI",
//       image: "/images/civiceye.png",
//       featured: true,
//       description:
//         "AI-powered civic issue reporting platform using Gemini Vision, duplicate detection, smart priority engine and community verification.",
//       tech: [
//         "React",
//         "Spring Boot",
//         "JWT",
//         "Firebase",
//         "Gemini AI",
//       ],
//       features: [
//         "AI Powered",
//         "Responsive",
//         "Secure Authentication",
//         "Real-time Database",
//       ],
//       github: "https://github.com/yashgangu/CivicEye-AI/tree/main",
//       live: "#",
//     },

//     {
//       title: "AgroMind AI",
//       image: "/images/Agro.png",
//       featured: false,
//       description:
//         "Deep learning based crop disease detection system with AI chatbot, weather monitoring and multilingual support.",
//       tech: [
//         "Python",
//         "TensorFlow",
//         "Streamlit",
//         "Gemini AI",
//       ],
//       features: [
//         "Deep Learning",
//         "Weather API",
//         "AI Chatbot",
//         "Image Detection",
//       ],
//       github: "#",
//       live: "#",
//     },

//     {
//       title: "Support Desk System",
//       image: "/images/supportdesk.png",
//       featured: false,
//       description:
//         "Role-based ticket management system using Spring Security, JWT Authentication and Railway deployment.",
//       tech: [
//         "Spring Boot",
//         "JWT",
//         "MySQL",
//         "Railway",
//       ],
//       features: [
//         "RBAC",
//         "REST APIs",
//         "Cloud Deployment",
//         "Secure Login",
//       ],
//       github: "#",
//       live: "#",
//     },

//     {
//       title: "Expense Manager",
//       image: "/images/expensemanager.png",
//       featured: false,
//       description:
//         "Expense tracking backend with budget validation, balance insights and transactional data handling.",
//       tech: [
//         "Spring Boot",
//         "Hibernate",
//         "MySQL",
//       ],
//       features: [
//         "REST APIs",
//         "Budget Tracking",
//         "Validation",
//         "JPA",
//       ],
//       github: "#",
//       live: "",
//     },
//   ];

//   return (
//     <section id="projects" className="projects">
//       <h2 className="section-title">Featured Projects</h2>

//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`project-card ${
//               project.featured ? "featured" : ""
//             }`}
//           >
//             {project.featured && (
//               <span className="badge">⭐ Featured</span>
//             )}

//             <img src={project.image} alt={project.title} />

//             <h3>{project.title}</h3>

//             <p>{project.description}</p>

//             <div className="tech-stack">
//               {project.tech.map((tech, i) => (
//                 <span key={i}>{tech}</span>
//               ))}
//             </div>

//             <ul className="feature-list">
//               {project.features.map((feature, i) => (
//                 <li key={i}>✔ {feature}</li>
//               ))}
//             </ul>

//             <div className="project-buttons">
//               <a href={project.github}>GitHub</a>

//               {project.live && (
//                 <a href={project.live}>Live Demo</a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;
import "../styles/projects.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "CivicEye AI",
    image: "/images/civiceye.png",
    featured: true,
    description:
      "AI-powered civic issue reporting platform using Gemini Vision, duplicate detection, smart priority engine and community verification.",
    tech: [
      "React",
      "Spring Boot",
      "JWT",
      "Firebase",
      "Gemini AI",
    ],
    features: [
      "AI Powered",
      "Responsive",
      "Secure Authentication",
      "Real-time Database",
    ],
    github: "https://github.com/yashgangu/CivicEye-AI/tree/main",
    live: "#",
  },

  {
    title: "AgroMind AI",
    image: "/images/Agro.png",
    featured: false,
    description:
      "Deep learning based crop disease detection system with AI chatbot, weather monitoring and multilingual support.",
    tech: [
      "Python",
      "TensorFlow",
      "Streamlit",
      "Gemini AI",
    ],
    features: [
      "Deep Learning",
      "Weather API",
      "AI Chatbot",
      "Image Detection",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Support Desk System",
    image: "/images/supportdesk.png",
    featured: false,
    description:
      "Role-based ticket management system using Spring Security, JWT Authentication and Railway deployment.",
    tech: [
      "Spring Boot",
      "JWT",
      "MySQL",
      "Railway",
    ],
    features: [
      "RBAC",
      "REST APIs",
      "Cloud Deployment",
      "Secure Login",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Expense Manager",
    image: "/images/expensemanager.png",
    featured: false,
    description:
      "Expense tracking backend with budget validation, balance insights and transactional data handling.",
    tech: [
      "Spring Boot",
      "Hibernate",
      "MySQL",
    ],
    features: [
      "REST APIs",
      "Budget Tracking",
      "Validation",
      "JPA",
    ],
    github: "#",
    live: "",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      {/* Background Glow */}
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      {/* Section Heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>MY WORK</span>

        <h2>Featured Projects</h2>

        <p>
          A selection of projects where I combine Java, Spring Boot,
          React, AI and modern technologies to build practical
          real-world applications.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.article
            key={index}
            className={`project-card ${
              project.featured ? "project-featured" : ""
            }`}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            whileHover={{
              y: -10,
            }}
          >

            {/* Featured Badge */}
            {project.featured && (
              <div className="project-featured-badge">
                ⭐ Featured
              </div>
            )}

            {/* Project Image */}
            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-image-overlay">

                <span>View Project</span>

                <FaArrowRight />

              </div>

            </div>

            {/* Project Content */}
            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-tech">

                {project.tech.map((tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
                ))}

              </div>

              {/* Features */}
              <div className="project-features">

                {project.features.map((feature, i) => (
                  <span key={i}>
                    <b>✓</b>
                    {feature}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default Projects;