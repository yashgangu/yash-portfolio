import "../styles/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>Yash Gangurde</h2>

          <p>
            Java Full Stack Developer | AI & ML Enthusiast
          </p>

          <p>
            Passionate about building scalable web applications,
            intelligent AI solutions, and solving real-world problems.
          </p>
        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Training & Certifications</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-icons">

            <a
              href="https://github.com/yashgangu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-gangurde2003/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:gangurdeyash122003@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <a
            className="resume-btn"
            href="./Resume/Yash_resume_java_developer_2026.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {currentYear} Yash Gangurde. All Rights Reserved.
        </p>

        <p>
          Designed & Developed with ❤️ using React.js
        </p>

      </div>

      <button
        className="scroll-top"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;