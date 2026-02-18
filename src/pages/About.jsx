import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function Skill({ logo, name }) {
  return (
    <div className="skill-card">
      <img src={logo} alt={name} />
      <p>{name}</p>
    </div>
  );
}

function About() {
  const sectionRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>

      {/* NAVIGATION BAR */}
      <div className={`about-nav ${showNav ? "visible" : ""}`}>
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

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h1>ABOUT</h1>
          <h1>ME</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* Intro */}
          <div className="intro-block">
            <h2>Hey, I’m Satyanveshi.</h2>

            <p>
              I am an AI & Machine Learning Engineer focused on building
              scalable intelligent systems that solve real-world problems.
            </p>

            <p>
              My expertise includes Deep Learning, NLP, and Generative AI —
              transforming raw data into meaningful insights and impactful
              applications.
            </p>

            <p>
              I enjoy blending engineering precision with creative thinking
              to design systems that are powerful, reliable, and human-centric.
            </p>
          </div>

          {/* SKILLS SECTION */}
          <div className="skills-block">

            <h3>AI & Machine Learning</h3>
            <div className="skills-grid">
              <Skill logo="/images/tensorflow.png" name="TensorFlow" />
              <Skill logo="/images/pytorch.png" name="PyTorch" />
              <Skill logo="/images/scikit.png" name="Scikit-Learn" />
              <Skill logo="/images/natural.png" name="NLP" />
              <Skill logo="/images/generative.png" name="Generative AI" />
            </div>

            <h3>Programming</h3>
            <div className="skills-grid">
              <Skill logo="/images/java.png" name="Java" />
              <Skill logo="/images/javascript.png" name="JavaScript" />
              <Skill logo="/images/python.png" name="Python" />
            </div>

            <h3>Frontend Development</h3>
            <div className="skills-grid">
              <Skill logo="/images/react.png" name="React" />
            </div>

            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              <Skill logo="/images/git.png" name="Git" />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;
