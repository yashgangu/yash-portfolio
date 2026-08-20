// // export default About;
// import { useEffect, useRef } from "react";
// import "../styles/about.css";
// import profile from "../assets/profile.png";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { useCountUp } from "react-countup";

// import {
//   FaJava,
//   FaReact,
//   FaDownload,
//   FaEnvelope,
// } from "react-icons/fa";
// import { FaBrain, FaServer } from "react-icons/fa6";

// // A small, highly safe internal component using the hook approach
// function StatCounter({ end, duration = 2 }) {
//   const countRef = useRef(null);
  
//   useCountUp({
//     ref: countRef,
//     end: end,
//     duration: duration,
//     enableScrollSpy: true,
//     scrollSpyOnce: true,
//   });

//   return <span ref={countRef}>0</span>;
// }

// function About() {
//   return (
//     <section id="about" className="about">

//       <div className="about-blur one"></div>
//       <div className="about-blur two"></div>

//       <div className="about-container">

//         {/* LEFT */}
//         <motion.div
//           className="about-image"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: .8 }}
//           viewport={{ once: true }}
//         >
//           {/* <div className="about-image-wrapper">
//             <img src={profile} alt="Yash Gangurde" />
//           </div> */}
//           <Tilt

//               tiltMaxAngleX={15}
//               tiltMaxAngleY={15}

//               perspective={1200}

//               transitionSpeed={1500}

//               scale={1.03}

//               glareEnable={true}

//               glareMaxOpacity={0.25}

//               className="about-tilt"

//               >

//               <div className="about-image-wrapper">

//               <img
//               src={profile}
//               alt="Yash Gangurde"
//               />

//               </div>

//               </Tilt>
//         </motion.div>

//         {/* RIGHT */}
//                <motion.div

//                     className="about-content"

//                     variants={{

//                     hidden:{opacity:0},

//                     show:{

//                     opacity:1,

//                     transition:{

//                     staggerChildren:.18

//                     }

//                     }

//                     }}

//                     initial="hidden"

//                     whileInView="show"

//                     viewport={{once:true}}

//                     >
//           <span className="section-tag">
//             ABOUT ME
//           </span>
//           <div className="available-badge">

//            <span className="status-dot"></span>

//                 Open to Full Stack & AI Opportunities

//          </div>

//                <motion.h2

//                       variants={{

//                       hidden:{opacity:0,y:30},

//                       show:{opacity:1,y:0}

//                       }}

//                       >

//                       Who I Am & What I Do

//                 </motion.h2>

//           <p>
//             I'm <strong>Yash Gangurde</strong>, an MCA (AI & ML) student and
//             passionate <strong>Java Full Stack Developer</strong> who enjoys
//             building secure backend systems, modern React applications,
//             and AI-powered solutions.
//           </p>

//           <p>
//             My expertise includes Java, Spring Boot, React, SQL,
//             REST APIs, Machine Learning, and scalable application
//             development with clean architecture.
//           </p>

//           <div className="about-highlights">
//             <div className="highlight-card">
//               <FaJava />
//               <span>Java & Spring Boot</span>
//             </div>

//             <div className="highlight-card">
//               <FaReact />
//               <span>React Development</span>
//             </div>

//             <div className="highlight-card">
//               <FaBrain />
//               <span>AI & Machine Learning</span>
//             </div>

//             <div className="highlight-card">
//               <FaServer />
//               <span>REST APIs</span>
//             </div>
//           </div>

//           <div className="about-stats">
//             <div>
//               <h3>
//                 <StatCounter end={7} duration={2} />+
//               </h3>
//               <span>Projects</span>
//             </div>

//             <div>
//               <h3>
//                 <StatCounter end={6} duration={2} />+
//               </h3>
//               <span>Certificates</span>
//             </div>

//             <div>
//               <h3>
//                 <StatCounter end={15} duration={2} />+
//               </h3>
//               <span>Technologies</span>
//             </div>
//           </div>

//           <div className="about-buttons">
//             <a
//               href="/resume.pdf"
//               download
//             >
//               <FaDownload />
//               Resume
//             </a>

//             <a href="#contact">
//               <FaEnvelope />
//               Contact
//             </a>
//           </div>
//           <motion.div
//   className="current-focus"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
// >
//   <h3>🎯 Current Focus</h3>

//   <div className="focus-grid">

//     <div className="focus-item">
//       <span>✓</span>
//       <p>Building scalable Java Spring Boot backend applications.</p>
//     </div>

//     <div className="focus-item">
//       <span>✓</span>
//       <p>Developing AI-powered solutions using Machine Learning and LLMs.</p>
//     </div>

//     <div className="focus-item">
//       <span>✓</span>
//       <p>Strengthening System Design and software architecture concepts.</p>
//     </div>

//     <div className="focus-item">
//       <span>✓</span>
//       <p>Practicing Data Structures & Algorithms for coding interviews.</p>
//     </div>

//     <div className="focus-item">
//       <span>✓</span>
//       <p>Actively seeking Full Stack Java Developer and AI Engineer opportunities.</p>
//     </div>

//   </div>
// </motion.div>
          
//         </motion.div>
        

//       </div>
      
//     </section>
//   );
// }

// // export default About;
// import { useRef } from "react";
// import "../styles/about.css";
// import { motion } from "framer-motion";
// import { useCountUp } from "react-countup";

// import {
//   FaJava,
//   FaReact,
//   FaDownload,
//   FaEnvelope,
//   FaCheckCircle,
//   FaTerminal,
// } from "react-icons/fa";
// import { FaBrain, FaServer } from "react-icons/fa6";

// function StatCounter({ end, duration = 2 }) {
//   const countRef = useRef(null);

//   useCountUp({
//     ref: countRef,
//     end: end,
//     duration: duration,
//     enableScrollSpy: true,
//     scrollSpyOnce: true,
//   });

//   return <span ref={countRef}>0</span>;
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 25 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// function About() {
//   return (
//     <section id="about" className="about">
//       {/* Background Ambient Glows */}
//       <div className="about-blur one"></div>
//       <div className="about-blur two"></div>

//       <div className="about-container">
//         {/* LEFT COLUMN: Interactive Code/Tech Terminal */}
//         <motion.div
//           className="about-terminal-wrapper"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="terminal-card">
//             <div className="terminal-header">
//               <div className="terminal-dots">
//                 <span className="dot red"></span>
//                 <span className="dot yellow"></span>
//                 <span className="dot green"></span>
//               </div>
//               <div className="terminal-title">
//                 <FaTerminal className="terminal-icon" /> engineer_profile.py
//               </div>
//             </div>

//             <div className="terminal-body">
//               <pre>
//                 <code>
//                   <span className="code-keyword">class</span>{" "}
//                   <span className="code-class">FullStackAIEngineer</span>:
//                   {"\n"}
//                   {"  "}<span className="code-keyword">def</span>{" "}
//                   <span className="code-func">__init__</span>(self):
//                   {"\n"}
//                   {"    "}self.name ={" "}
//                   <span className="code-string">"Yash Gangurde"</span>
//                   {"\n"}
//                   {"    "}self.degree ={" "}
//                   <span className="code-string">"MCA (AI & ML)"</span>
//                   {"\n"}
//                   {"    "}self.core_stack = [
//                   {"\n"}
//                   {"      "}<span className="code-string">"Java"</span>,{" "}
//                   <span className="code-string">"Spring Boot"</span>,
//                   {"\n"}
//                   {"      "}<span className="code-string">"React"</span>,{" "}
//                   <span className="code-string">"Machine Learning"</span>
//                   {"\n"}
//                   {"    "}]{"\n"}
//                   {"    "}self.status ={" "}
//                   <span className="code-string">"Building Scalable Solutions"</span>
//                   {"\n\n"}
//                   {"  "}<span className="code-keyword">def</span>{" "}
//                   <span className="code-func">get_mission</span>(self):
//                   {"\n"}
//                   {"    "}<span className="code-keyword">return</span> (
//                   {"\n"}
//                   {"      "}<span className="code-string">
//                     "Bridging high-performance Java backends "
//                   </span>
//                   {"\n"}
//                   {"      "}<span className="code-string">
//                     "with modern AI/ML intelligence."
//                   </span>
//                   {"\n"}
//                   {"    "})
//                 </code>
//               </pre>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN: Content & Details */}
//         <motion.div
//           className="about-content"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <motion.div variants={itemVariants}>
//             <span className="section-tag">ABOUT ME</span>
//           </motion.div>

//           <motion.div variants={itemVariants} className="available-badge">
//             <span className="status-dot"></span>
//             Open to Full Stack & AI Opportunities
//           </motion.div>

//           <motion.h2 variants={itemVariants}>
//             Who I Am & What I Do
//           </motion.h2>

//           <motion.p variants={itemVariants}>
//             I'm <strong>Yash Gangurde</strong>, an MCA (AI & ML) candidate and
//             passionate <strong>Java Full Stack Developer</strong>. I specialize in
//             architecting secure backend microservices, intuitive React frontends,
//             and integrating data-driven machine learning models.
//           </motion.p>

//           <motion.p variants={itemVariants}>
//             My expertise centers on Java, Spring Boot, React, SQL, REST APIs,
//             and machine learning workflows with an emphasis on clean code and scalable architecture.
//           </motion.p>

//           {/* Highlight Cards */}
//           <motion.div variants={itemVariants} className="about-highlights">
//             <div className="highlight-card">
//               <FaJava />
//               <span>Java & Spring Boot</span>
//             </div>

//             <div className="highlight-card">
//               <FaReact />
//               <span>React Development</span>
//             </div>

//             <div className="highlight-card">
//               <FaBrain />
//               <span>AI & Machine Learning</span>
//             </div>

//             <div className="highlight-card">
//               <FaServer />
//               <span>REST APIs</span>
//             </div>
//           </motion.div>

//           {/* Animated Stats */}
//           <motion.div variants={itemVariants} className="about-stats">
//             <div className="stat-box">
//               <h3>
//                 <StatCounter end={7} duration={2} />+
//               </h3>
//               <span>Projects Completed</span>
//             </div>

//             <div className="stat-box">
//               <h3>
//                 <StatCounter end={6} duration={2} />+
//               </h3>
//               <span>Certifications</span>
//             </div>

//             <div className="stat-box">
//               <h3>
//                 <StatCounter end={15} duration={2} />+
//               </h3>
//               <span>Tech Stack Tools</span>
//             </div>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div variants={itemVariants} className="about-buttons">
//             <a href="/resume.pdf" download className="btn-primary">
//               <FaDownload /> Resume
//             </a>

//             <a href="#contact" className="btn-secondary">
//               <FaEnvelope /> Contact Me
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* FULL WIDTH BOTTOM SECTION: Current Focus */}
//       <motion.div
//         className="current-focus-container"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h3>🎯 Current Focus & Objectives</h3>

//         <div className="focus-grid">
//           <div className="focus-item">
//             <FaCheckCircle className="check-icon" />
//             <p>Building scalable Java Spring Boot backend applications and microservices.</p>
//           </div>

//           <div className="focus-item">
//             <FaCheckCircle className="check-icon" />
//             <p>Developing AI-powered solutions leveraging Machine Learning pipelines and LLMs.</p>
//           </div>

//           <div className="focus-item">
//             <FaCheckCircle className="check-icon" />
//             <p>Strengthening Low-Level & High-Level System Design principles.</p>
//           </div>

//           <div className="focus-item">
//             <FaCheckCircle className="check-icon" />
//             <p>Solving Data Structures & Algorithms challenges for optimal computational efficiency.</p>
//           </div>

//           <div className="focus-item">
//             <FaCheckCircle className="check-icon" />
//             <p>Actively pursuing Full Stack Java Developer and AI/ML Engineering roles.</p>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default About;

import { useRef } from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";

import {
  FaJava,
  FaReact,
  FaDownload,
  FaEnvelope,
  FaCheckCircle,
  FaTerminal,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FaBrain, FaServer, FaLayerGroup } from "react-icons/fa6";

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <section id="about" className="about">
      {/* Background Ambient Glows */}
      <div className="about-blur one"></div>
      <div className="about-blur two"></div>

      <div className="about-container">
        {/* LEFT COLUMN: Interactive Code/Tech Terminal */}
        <motion.div
          className="about-terminal-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <FaTerminal className="terminal-icon" /> engineer_profile.py
              </div>
            </div>

            <div className="terminal-body">
              <pre>
                <code>
                  <span className="code-keyword">class</span>{" "}
                  <span className="code-class">FullStackAIEngineer</span>:
                  {"\n"}
                  {"  "}<span className="code-keyword">def</span>{" "}
                  <span className="code-func">__init__</span>(self):
                  {"\n"}
                  {"    "}self.name ={" "}
                  <span className="code-string">"Yash Gangurde"</span>
                  {"\n"}
                  {"    "}self.degree ={" "}
                  <span className="code-string">"MCA (AI & ML)"</span>
                  {"\n"}
                  {"    "}self.core_stack = [
                  {"\n"}
                  {"      "}<span className="code-string">"Java"</span>,{" "}
                  <span className="code-string">"Spring Boot"</span>,
                  {"\n"}
                  {"      "}<span className="code-string">"React"</span>,{" "}
                  <span className="code-string">"Machine Learning"</span>
                  {"\n"}
                  {"    "}]{"\n"}
                  {"    "}self.status ={" "}
                  <span className="code-string">"Ready to Deploy Solutions"</span>
                  {"\n\n"}
                  {"  "}<span className="code-keyword">def</span>{" "}
                  <span className="code-func">get_mission</span>(self):
                  {"\n"}
                  {"    "}<span className="code-keyword">return</span> (
                  {"\n"}
                  {"      "}<span className="code-string">
                    "Bridging high-performance Java backends "
                  </span>
                  {"\n"}
                  {"      "}<span className="code-string">
                    "with modern AI/ML intelligence."
                  </span>
                  {"\n"}
                  {"    "})
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Content & Rich Feature Modules */}
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-header-meta">
            <span className="section-tag">ABOUT ME</span>
            <div className="available-badge">
              <span className="status-dot"></span>
              Open to Full Stack & AI Opportunities
            </div>
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Who I Am & What I Do
          </motion.h2>

          <motion.p variants={itemVariants} className="about-bio">
            I'm <strong>Yash Gangurde</strong>, an MCA student specializing in 
            <strong> Artificial Intelligence & Machine Learning</strong>. I design 
            high-performance Java Spring Boot backend microservices, modern React interfaces, 
            and data-driven machine learning models.
          </motion.p>

          {/* Key Attributes Bar */}
          <motion.div variants={itemVariants} className="about-meta-pills">
            <div className="meta-pill">
              <FaGraduationCap /> MCA (AI & ML)
            </div>
            <div className="meta-pill">
              <FaCode /> Clean Code Practitioner
            </div>
            <div className="meta-pill">
              <FaLayerGroup /> Modular Microservices
            </div>
          </motion.div>

          {/* Tech Domain Highlights Grid */}
          <motion.div variants={itemVariants} className="about-highlights">
            <div className="highlight-card">
              <FaJava className="icon-java" />
              <div>
                <h4>Java & Spring Boot</h4>
                <p>REST APIs, Security & JPA</p>
              </div>
            </div>

            <div className="highlight-card">
              <FaReact className="icon-react" />
              <div>
                <h4>React Development</h4>
                <p>State Management & UI</p>
              </div>
            </div>

            <div className="highlight-card">
              <FaBrain className="icon-ai" />
              <div>
                <h4>AI & Machine Learning</h4>
                <p>Models, LLMs & Analytics</p>
              </div>
            </div>

            <div className="highlight-card">
              <FaServer className="icon-server" />
              <div>
                <h4>Backend & Databases</h4>
                <p>MySQL, PostgreSQL & Redis</p>
              </div>
            </div>
          </motion.div>

          {/* Skill Proficiency Bars */}
          <motion.div variants={itemVariants} className="skills-overview">
            <div className="skill-item">
              <div className="skill-info">
                <span>Java & Backend Systems</span>
                <span>90%</span>
              </div>
              <div className="skill-bar"><div className="skill-progress java-bar"></div></div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>React & Frontend Engineering</span>
                <span>85%</span>
              </div>
              <div className="skill-bar"><div className="skill-progress react-bar"></div></div>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span>AI & ML Solutions</span>
                <span>80%</span>
              </div>
              <div className="skill-bar"><div className="skill-progress ai-bar"></div></div>
            </div>
          </motion.div>

          {/* Animated Stats Bar */}
          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat-box">
              <h3>
                <StatCounter end={7} duration={2} />+
              </h3>
              <span>Projects Completed</span>
            </div>

            <div className="stat-box">
              <h3>
                <StatCounter end={6} duration={2} />+
              </h3>
              <span>Certifications</span>
            </div>

            <div className="stat-box">
              <h3>
                <StatCounter end={15} duration={2} />+
              </h3>
              <span>Tech Stack Tools</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="about-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              <FaDownload /> Download Resume
            </a>

            <a href="#contact" className="btn-secondary">
              <FaEnvelope /> Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* FULL WIDTH BOTTOM SECTION: Current Focus */}
      <motion.div
        className="current-focus-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>🎯 Current Focus & Objectives</h3>

        <div className="focus-grid">
          <div className="focus-item">
            <FaCheckCircle className="check-icon" />
            <p>Architecting scalable Java Spring Boot backends with clean enterprise code standards.</p>
          </div>

          <div className="focus-item">
            <FaCheckCircle className="check-icon" />
            <p>Integrating AI-powered capabilities into full-stack web applications using Python & LLMs.</p>
          </div>

          <div className="focus-item">
            <FaCheckCircle className="check-icon" />
            <p>Mastering High-Level & Low-Level System Design principles for web-scale systems.</p>
          </div>

          <div className="focus-item">
            <FaCheckCircle className="check-icon" />
            <p>Solving DSA problems daily to continuously optimize algorithmic performance.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;