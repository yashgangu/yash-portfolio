// export default Education;

import "../styles/education.css";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (AI & ML)",
      institute: "Amity University, Noida",
      duration: "2024 – Present",
      description:
        "Currently pursuing MCA with specialization in Artificial Intelligence & Machine Learning. Focusing on AI, Machine Learning, Data Science, Java Full Stack Development, and System Design.",
      icon: <FaGraduationCap />,
      current: true,
    },

    {
      degree: "Bachelor of Science in Computer Science",
      institute:
        "K.K. Wagh Arts, Commerce, Science & Computer Science College, Nashik",
      duration: "2021 – 2024",
      description:
        "Completed B.Sc. Computer Science with subjects including Data Structures, DBMS, Operating Systems, Software Engineering, Java, Python, and Web Development.",
      icon: <FaUniversity />,
    },

    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Maharashtra State Board",
      duration: "2020 – 2021",
      description:
        "Completed Higher Secondary Education with Science stream.",
      icon: <FaSchool />,
    },

    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Blue Bell High School, Nashik",
      duration: "2018 – 2019",
      description:
        "Completed Secondary Education under Maharashtra State Board.",
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="education" className="education">

      {/* Background Glow */}

      <div className="education-glow education-glow-one"></div>
      <div className="education-glow education-glow-two"></div>


      {/* Section Heading */}

      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span>EDUCATION</span>

        <h2>My Academic Journey</h2>

        <p>
          My academic journey has built a strong foundation in computer
          science, software development, artificial intelligence and
          machine learning.
        </p>

      </motion.div>


      {/* Timeline */}

      <div className="education-timeline">

        <div className="timeline-line"></div>

        {education.map((item, index) => (

          <motion.div
            className={`education-item ${
              index % 2 === 0
                ? "timeline-left"
                : "timeline-right"
            }`}
            key={index}

            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* Timeline Node */}

            <div className="timeline-node">

              <div className="timeline-icon">
                {item.icon}
              </div>

            </div>


            {/* Education Card */}

            <motion.div
              className="education-card"

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              transition={{
                duration: 0.3,
              }}
            >

              {/* Current Badge */}

              {item.current && (
                <div className="current-badge">
                  Currently Pursuing
                </div>
              )}


              {/* Duration */}

              <div className="education-duration">

                <FaCalendarAlt />

                <span>{item.duration}</span>

              </div>


              {/* Degree */}

              <h3>
                {item.degree}
              </h3>


              {/* Institute */}

              <h4>
                <FaUniversity />

                {item.institute}
              </h4>


              {/* Description */}

              <p>
                {item.description}
              </p>


              {/* Bottom Line */}

              <div className="education-footer">

                <span>
                  {index === 0
                    ? "Current Education"
                    : "Completed"}
                </span>

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;