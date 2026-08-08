// export default About;
import { useEffect, useRef } from "react";
import "../styles/about.css";
import profile from "../assets/profile.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";

import {
  FaJava,
  FaReact,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FaBrain, FaServer } from "react-icons/fa6";

// A small, highly safe internal component using the hook approach
function StatCounter({ end, duration = 2 }) {
  const countRef = useRef(null);
  
  useCountUp({
    ref: countRef,
    end: end,
    duration: duration,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return <span ref={countRef}>0</span>;
}

function About() {
  return (
    <section id="about" className="about">

      <div className="about-blur one"></div>
      <div className="about-blur two"></div>

      <div className="about-container">

        {/* LEFT */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          {/* <div className="about-image-wrapper">
            <img src={profile} alt="Yash Gangurde" />
          </div> */}
          <Tilt

              tiltMaxAngleX={15}
              tiltMaxAngleY={15}

              perspective={1200}

              transitionSpeed={1500}

              scale={1.03}

              glareEnable={true}

              glareMaxOpacity={0.25}

              className="about-tilt"

              >

              <div className="about-image-wrapper">

              <img
              src={profile}
              alt="Yash Gangurde"
              />

              </div>

              </Tilt>
        </motion.div>

        {/* RIGHT */}
               <motion.div

                    className="about-content"

                    variants={{

                    hidden:{opacity:0},

                    show:{

                    opacity:1,

                    transition:{

                    staggerChildren:.18

                    }

                    }

                    }}

                    initial="hidden"

                    whileInView="show"

                    viewport={{once:true}}

                    >
          <span className="section-tag">
            ABOUT ME
          </span>
          <div className="available-badge">

           <span className="status-dot"></span>

                Open to Full Stack & AI Opportunities

         </div>

               <motion.h2

                      variants={{

                      hidden:{opacity:0,y:30},

                      show:{opacity:1,y:0}

                      }}

                      >

                      Who I Am & What I Do

                </motion.h2>

          <p>
            I'm <strong>Yash Gangurde</strong>, an MCA (AI & ML) student and
            passionate <strong>Java Full Stack Developer</strong> who enjoys
            building secure backend systems, modern React applications,
            and AI-powered solutions.
          </p>

          <p>
            My expertise includes Java, Spring Boot, React, SQL,
            REST APIs, Machine Learning, and scalable application
            development with clean architecture.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <FaJava />
              <span>Java & Spring Boot</span>
            </div>

            <div className="highlight-card">
              <FaReact />
              <span>React Development</span>
            </div>

            <div className="highlight-card">
              <FaBrain />
              <span>AI & Machine Learning</span>
            </div>

            <div className="highlight-card">
              <FaServer />
              <span>REST APIs</span>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <h3>
                <StatCounter end={7} duration={2} />+
              </h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>
                <StatCounter end={6} duration={2} />+
              </h3>
              <span>Certificates</span>
            </div>

            <div>
              <h3>
                <StatCounter end={15} duration={2} />+
              </h3>
              <span>Technologies</span>
            </div>
          </div>

          <div className="about-buttons">
            <a
              href="/resume.pdf"
              download
            >
              <FaDownload />
              Resume
            </a>

            <a href="#contact">
              <FaEnvelope />
              Contact
            </a>
          </div>
          <motion.div
  className="current-focus"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h3>🎯 Current Focus</h3>

  <div className="focus-grid">

    <div className="focus-item">
      <span>✓</span>
      <p>Building scalable Java Spring Boot backend applications.</p>
    </div>

    <div className="focus-item">
      <span>✓</span>
      <p>Developing AI-powered solutions using Machine Learning and LLMs.</p>
    </div>

    <div className="focus-item">
      <span>✓</span>
      <p>Strengthening System Design and software architecture concepts.</p>
    </div>

    <div className="focus-item">
      <span>✓</span>
      <p>Practicing Data Structures & Algorithms for coding interviews.</p>
    </div>

    <div className="focus-item">
      <span>✓</span>
      <p>Actively seeking Full Stack Java Developer and AI Engineer opportunities.</p>
    </div>

  </div>
</motion.div>
          
        </motion.div>
        

      </div>
      
    </section>
  );
}

export default About;