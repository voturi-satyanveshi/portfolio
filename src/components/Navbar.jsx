import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">VS</div>
        <ul className="nav-links">
          <li><a href="#about">About me</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact me</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1h0zziObaRGJUh8KZ8SdQ-CQWnupSG7iJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
