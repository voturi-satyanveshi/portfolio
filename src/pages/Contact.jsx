import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact-section">

      {/* SAME NAV AS ABOUT */}
      <div className="about-nav visible">
        <span onClick={() => navigate("/")}>About</span>
        <span onClick={() => navigate("/work")}>Projects</span>
        <span onClick={() => navigate("/contact")}>Contact</span>
        <a
          href="https://drive.google.com/file/d/1h0zziObaRGJUh8KZ8SdQ-CQWnupSG7iJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <div className="contact-content">

        <h1 className="contact-title">Let’s Connect</h1>

        <p className="contact-subtitle">
          Open to collaborations, opportunities, and meaningful discussions.
        </p>

        <div className="contact-grid">

            <a
              href="mailto:satyanveshi.voturi@gmail.com"
              className="contact-card"
            >
              <img src="../images/mail96.png" alt="Email" />
              <h3>Email</h3>
              <p>satyanveshi.voturi@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/satyanveshi-voturi-810a08358/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src="/images/linkedin96.png" alt="LinkedIn" />
              <h3>LinkedIn</h3>
              <p>satyanveshi-voturi-810a08358</p>
            </a>

            <a
              href="https://github.com/voturi-satyanveshi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src="/images/github90.png" alt="GitHub" />
              <h3>GitHub</h3>
              <p>voturi-satyanveshi</p>
            </a>

            <a
              href="https://www.instagram.com/satyanveshi_0530/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src="/images/instagram96.png" alt="Instagram" />
              <h3>Instagram</h3>
              <p>satyanveshi_0530</p>
            </a>

        </div>


      </div>
    </section>
  );
}

export default Contact;
