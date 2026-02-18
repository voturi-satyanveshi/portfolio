import { useNavigate } from "react-router-dom";
import "./Work.css";

function Work() {
  const navigate = useNavigate();

  const domains = [
    { id: "ai", name: "AI / ML" },
    { id: "web", name: "Web Development" },
    { id: "data", name: "Data Analytics" },
    { id: "cloud", name: "Cloud & DevOps" },
  ];

  return (
    <section className="work-section">

      {/* SAME NAV STYLE AS ABOUT */}
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

      <div className="work-content">
        <h1 className="work-title">Explore My Projects by Domain</h1>

        <div className="profile-grid">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="profile-card"
              onClick={() => navigate(`/domain/${domain.id}`)}
            >
              <div className="profile-avatar">
                {domain.name.charAt(0)}
              </div>
              <p className="profile-name">{domain.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Work;
