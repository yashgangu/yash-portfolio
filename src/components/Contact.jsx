// import "../styles/contact.css";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedin,
//   FaFileDownload,
// } from "react-icons/fa";

// function Contact() {
//   return (
//     <section id="contact" className="contact">

//       <h2 className="section-title">Let's Connect</h2>

//       <div className="contact-container">

//         {/* Left Side */}

//         <div className="contact-info">

//           <h3>Get in Touch</h3>

//           <p>
//             I am actively looking for Software Engineer, Java Full Stack,
//             AI/ML, and Backend Developer opportunities.
//             Feel free to connect with me.
//           </p>

//           <div className="contact-item">
//             <FaPhoneAlt />
//             <span>+91 9309416830</span>
//           </div>

//           <div className="contact-item">
//             <FaEnvelope />
//             <span>gangurdeyash122003@gmail.com</span>
//           </div>

//           <div className="contact-item">
//             <FaMapMarkerAlt />
//             <span>Nashik, Maharashtra, India</span>
//           </div>

//           <div className="social-links">

//             <a
//               href="YOUR_LINKEDIN_URL"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="YOUR_GITHUB_URL"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FaFileDownload />
//             </a>

//           </div>

//         </div>

//         {/* Right Side */}

//         <form className="contact-form">

//           <input
//             type="text"
//             placeholder="Your Name"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//           />

//           <input
//             type="text"
//             placeholder="Subject"
//           />

//           <textarea
//             rows="6"
//             placeholder="Write your message..."
//           ></textarea>

//           <button type="submit">
//             Send Message
//           </button>

//         </form>

//       </div>

//     </section>
//   );
// }

// export default Contact;
import "../styles/contact.css";

import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Background Glow */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      {/* =========================
          SECTION HEADING
      ========================== */}

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span>GET IN TOUCH</span>

        <h2>Let's Connect</h2>

        <p>
          Have an opportunity, project idea, or just want to connect?
          Feel free to reach out. I'm always open to discussing
          software development, AI, and exciting opportunities.
        </p>

      </motion.div>


      {/* =========================
          CONTACT CONTAINER
      ========================== */}

      <div className="contact-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="contact-info-header">

            <div className="contact-main-icon">
              <FaPaperPlane />
            </div>

            <div>
              <h3>Get in Touch</h3>

              <span>
                I'm currently open to opportunities
              </span>
            </div>

          </div>


          <p className="contact-description">
            I am actively looking for Software Engineer, Java Full Stack,
            Backend Developer, and AI/ML opportunities. If you have an
            opportunity that matches my skills, feel free to contact me.
          </p>


          {/* Phone */}

          <motion.a
            href="tel:+919309416830"
            className="contact-item"
            whileHover={{ x: 6 }}
          >

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span className="contact-label">
                Phone
              </span>

              <strong>
                +91 9309416830
              </strong>
            </div>

          </motion.a>


          {/* Email */}

          <motion.a
            href="mailto:gangurdeyash122003@gmail.com"
            className="contact-item"
            whileHover={{ x: 6 }}
          >

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <span className="contact-label">
                Email
              </span>

              <strong>
                gangurdeyash122003@gmail.com
              </strong>
            </div>

          </motion.a>


          {/* Location */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span className="contact-label">
                Location
              </span>

              <strong>
                Nashik, Maharashtra, India
              </strong>
            </div>

          </div>


          {/* =========================
              SOCIAL LINKS
          ========================== */}

          <div className="social-section">

            <span>
              Connect with me
            </span>

            <div className="social-links">

              <motion.a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>


              <motion.a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>


              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                aria-label="Resume"
              >
                <FaFileDownload />
              </motion.a>

            </div>

          </div>

        </motion.div>


        {/* =========================
            RIGHT SIDE - FORM
        ========================== */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out!");
          }}
        >

          <div className="form-header">

            <h3>Send Me a Message</h3>

            <p>
              Fill out the form and I'll get back to you as soon as possible.
            </p>

          </div>


          {/* Name */}

          <div className="input-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>


          {/* Email */}

          <div className="input-group">

            <label htmlFor="email">
              Your Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>


          {/* Subject */}

          <div className="input-group">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />

          </div>


          {/* Message */}

          <div className="input-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="send-button"
          >

            <span>
              Send Message
            </span>

            <FaPaperPlane />

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;