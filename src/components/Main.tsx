import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import dp from "../assets/images/dp.jpg";

// Main Component
function Main() {
  return (
    <div className="container" id="about-section">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={dp} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/ManyaSahai"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/manya-sahai-131bb9247/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Manya Sahai</h1>
          <p>
            Hi, I'm Manya Sahai, a passionate developer specializing in Full
            Stack Development and Data Science. I love building interactive and
            scalable applications.
          </p>
          <p> </p>

          <div className="button-container">
            <a
              href="https://drive.google.com/file/d/1soQ0RKbBmLyD5qawh3o4l_LbYuIezm2B/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="resume-button">View Resume</button>
            </a>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/ManyaSahai"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/manya-sahai-131bb9247/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
