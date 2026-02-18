import { useParams, useNavigate } from "react-router-dom";
import "./Domain.css";

function ProjectCard({ image, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="image-wrapper">
        <img src={image} alt={title} />

        <div className="hover-overlay">
          <h3>{title}</h3>
          <p>Click to View Project</p>
        </div>
      </div>
    </a>
  );
}

function DomainPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const projects = {
    ai: [
      {
        image: "/images/chestimage.png",
        title: "Resume Analyzer",
        link: "https://your-ai-project-link.com"
      },
      {
        image: "/images/ai2.jpg",
        title: "Skin Disease Detection",
        link: "https://your-ai-project-link.com"
      },
      {
        image: "/images/ai3.jpg",
        title: "Chatbot System",
        link: "https://github.com/yourusername/chatbot"
      }
    ],

    web: [
      {
        image: "/images/web1.jpg",
        title: "E-Commerce Website",
        link: "https://your-web-project-link.com"
      },
      {
        image: "/images/web2.jpg",
        title: "Portfolio Website",
        link: "https://your-portfolio-link.com"
      },
      {
        image: "/images/web3.jpg",
        title: "Admin Dashboard",
        link: "https://github.com/yourusername/dashboard"
      }
    ],

    data: [
      {
        image: "/images/data1.jpg",
        title: "Sales Analytics Dashboard",
        link: "https://github.com/yourusername/sales-dashboard"
      },
      {
        image: "/images/data2.jpg",
        title: "Power BI Visualization",
        link: "https://github.com/yourusername/powerbi"
      },
      {
        image: "/images/data3.jpg",
        title: "Customer Segmentation",
        link: "https://github.com/yourusername/segmentation"
      }
    ],

    cloud: [
      {
        image: "/images/cloud1.jpg",
        title: "Docker Deployment",
        link: "https://github.com/yourusername/docker"
      },
      {
        image: "/images/cloud2.jpg",
        title: "AWS Infrastructure Setup",
        link: "https://github.com/yourusername/aws"
      },
      {
        image: "/images/cloud3.jpg",
        title: "CI/CD Pipeline",
        link: "https://github.com/yourusername/cicd"
      }
    ]
  };

  const domainProjects = projects[type] || [];

  return (
    <section className="domain-section">

      {/* NAV BAR */}
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

      {/* HEADER */}
      <div className="domain-header">
        <button className="back-btn" onClick={() => navigate("/work")}>
          ← Back
        </button>

        <h2 className="domain-title">
          {type?.toUpperCase()} Projects
        </h2>

        <button className="switch-btn" onClick={() => navigate("/work")}>
          Switch Domain
        </button>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {domainProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>

    </section>
  );
}

export default DomainPage;
