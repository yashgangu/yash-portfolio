// import "../styles/TrainingCertifications.css"

// function TrainingCertifications() {
//   const timeline = [
    
//     {
//       title: "React.js Certificate",
//       organization: "Coding Ninjas",
//       duration: "2025",
//       description:
//         "Completed React.js certification covering components, hooks, routing, state management, API integration, and project development.",
//       certificateLink: "https://drive.google.com/file/d/1eiJOgdEzn5Wr2-bmwb094IsK_U91BKEW/view"
//     },
//     {
//     title: "Introduction to Java – Certificate of Excellence",
//     organization: "Coding Ninjas",
//     duration: "2025",
//     description:
//       "Awarded the Certificate of Excellence for successfully completing Introduction to Java with strong performance in Java programming, object-oriented programming, problem-solving, and core programming concepts.",
//     certificateLink: "https://drive.google.com/file/d/1TliDhQfaxhm85I_gmCM6YafxIBpOZSRZ/view",
//   },
    
//     {
//     title: "Java Web Development (Spring Boot)",
//     organization: "Coding Ninjas",
//     duration: "2025",
//     description:
//       "Completed Java Web Development using Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, Spring Security, JWT Authentication, and MySQL while building real-world backend applications.",
//     certificateLink: "https://drive.google.com/file/d/1znWm0lWT5Vk5QrjWi7opXWxpylC8nxfJ/view",
//   },
//   {
//     title: "Database Management System (DBMS)",
//     organization: "Coding Ninjas",
//     duration: "2026",
//     description:
//       "Completed Database Management System coursework covering SQL, normalization, ER modeling, indexing, transactions, joins, stored procedures, and database design principles.",
//     certificateLink: "https://drive.google.com/file/d/18-IMSIk034hLheU2RADvAuG4Vg8CpR7g/view",
//   },
//     {
//     title: "Certificate Course in Professional & Life Skills",
//     organization: "Amity University",
//     duration: "2024",
//     description:
//       "Completed a professional development program covering communication skills, teamwork, leadership, critical thinking, workplace ethics, and personality development.",
//     certificateLink: "https://drive.google.com/file/d/1s9l-OqtilULzTjz4Au_klv5slDALJKDV/view",
//   },
//   ];

//   return (
//     <section id="experience" className="experience">
//       <h2 className="section-title">Training & Certifications</h2>

//       <div className="timeline">
//         {timeline.map((item, index) => (
//           <div
//             key={index}
//             className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
//           >
//             <div className="timeline-content">
//               <h3>{item.title}</h3>
//               <h4>{item.organization}</h4>
//               <span>{item.duration}</span>
//               <p>{item.description}</p>
//               <a
//                 href={item.certificateLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="certificate-btn"
//                 >
//                 📜 View Certificate
//              </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TrainingCertifications;
import "../styles/TrainingCertifications.css";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import codingNinjasLogo from "../assets/logos/codingninjas.jpg";
import amityLogo from "../assets/logos/Amity.png";
const certificates = [
  {
    title: "React.js Certificate",
    organization: "Coding Ninjas",
    category:"Frontend",
    logo: codingNinjasLogo,
    year: "2025",
    description:
      "Completed React.js certification covering components, hooks, routing, state management, API integration, and project development.",
    link: "YOUR_REACT_CERTIFICATE_LINK",
    featured: true,
  },

  {
    title: "Introduction to Java – Certificate of Excellence",
    organization: "Coding Ninjas",
    category: "Backend",
    logo: codingNinjasLogo,
    year: "2025",
    description:
      "Awarded the Certificate of Excellence for successfully completing Introduction to Java with strong performance in Java programming, object-oriented programming, problem-solving, and core programming concepts.",
    link: "YOUR_JAVA_CERTIFICATE_LINK",
  },

  {
    title: "Java Web Development (Spring Boot)",
    organization: "Coding Ninjas",
    category: "Backend",
    logo: codingNinjasLogo,
    year: "2025",
    description:
      "Completed Java Web Development using Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, Spring Security, JWT Authentication, and MySQL while building real-world backend applications.",
    link: "YOUR_SPRINGBOOT_CERTIFICATE_LINK",
  },

  {
    title: "Database Management System (DBMS)",
    organization: "Coding Ninjas",
    category: "Backend",
    logo: codingNinjasLogo,
    year: "2026",
    description:
      "Completed Database Management System coursework covering SQL, normalization, ER modeling, indexing, transactions, joins, stored procedures, and database design principles.",
    link: "YOUR_DBMS_CERTIFICATE_LINK",
  },

  {
    title: "Certificate Course in Professional & Life Skills",
    organization: "Amity University",
    category: "Professional Development",
    logo: amityLogo,
    year: "2024",
    description:
      "Completed a professional development program covering communication skills, teamwork, leadership, critical thinking, workplace ethics, and personality development.",
    link: "YOUR_AMITY_CERTIFICATE_LINK",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>TRAINING & CERTIFICATIONS</span>

        <h2>Continuous Learning Journey</h2>

        <p>
          Continuous learning has been a key part of my journey. These
          certifications reflect my commitment to improving my skills in
          Full Stack Development, Java Backend, Databases and professional
          growth.
        </p>
      </motion.div>

      <div className="certificate-grid">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            className={`certificate-card ${
              item.featured ? "featured" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            {item.featured && (
              // <div className="featured-badge">⭐ Featured</div>
              <div className="featured-ribbon">

                    Featured

              </div>
            )}

            <FaAward className="certificate-icon" />

            <h3>{item.title}</h3>

            {/* <h4>{item.organization}</h4> */}
            <div className="issuer">
                <img
                    src={item.logo}
                    alt={item.organization}
                />

                <span>{item.organization}</span>
            </div>

            {/* <span className="certificate-year">{item.year}</span> */}
            <div className="certificate-meta">

                <span className="certificate-year">

                    {item.year}

                </span>

                <span className="badge">

                    {item.category}

          </span>

            </div>

            <p>{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;