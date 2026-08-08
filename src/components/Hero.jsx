// export default Hero;

import "../styles/hero.css";
import profile from "../assets/profile.png";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./ParticleBackground";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <section className="hero" id="home">

    {/* Particle Background */}
      <ParticleBackground />

      {/* Background Blur */}

      <div className="blur one"></div>
      <div className="blur two"></div>

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
          >
            👋 Hello, I'm
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
          >
            Yash Gangurde
          </motion.h1>

          <h2>

            <Typewriter
              words={[
                "Java Full Stack Developer",
                "Spring Boot Developer",
                "AI & ML Enthusiast",
                "Backend Developer",
                "React Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />

          </h2>

          <p>
            Passionate about building scalable web applications,
            intelligent AI systems and solving real-world problems
            using Java, Spring Boot, React and Machine Learning.
          </p>

          <div className="hero-buttons">

            <a href="/resume.pdf" download>

              <FaDownload />

              Download Resume

            </a>

            <a href="#contact">

              Contact Me

            </a>

          </div>

          <div className="hero-social">

            <a
              href="YOUR_GITHUB_LINK"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:gangurdeyash122003@gmail.com">

              <HiOutlineMail />

            </a>

          </div>

          <div className="hero-stats">

            <div>

              <h3>7+</h3>

              <span>Projects</span>

            </div>

            <div>

              <h3>6+</h3>

              <span>Certificates</span>

            </div>

            <div>

              <h3>MCA</h3>

              <span>AI & ML</span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >

        <Tilt
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1200}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.35}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.05}
            className="tilt-card"
        >

            <div className="image-wrapper">

            <img
                src={profile}
                alt="Yash Gangurde"
            />

            </div>

        </Tilt>

        </motion.div>

      </div>

      <a href="#about" className="scroll-down">

        <FaArrowDown />

      </a>

    </section>
  );
}

export default Hero;