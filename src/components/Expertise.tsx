import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faAws } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Python",
  "SQL",
];

const labelsSecond = [
  "AWS",
  "Git",
  "GitHub Actions",
  "Docker",

  "Azure",
  "Linux",
  "Snowflake",

  "Selenium",
];

const labelsThird = [
  "Python",
  "Pandas",
  "Flask",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>RV Networking</h3>
            <h3>Full Stack Web Development Intern</h3>
            <p>
              I have worked collaboratively with cross-functional teams to
              design, develop, and deploy full-stack web applications for
              diverse clients. Utilizing the MERN stack for development and
              Netlify for deployment, I ensured the delivery of efficient and
              scalable solutions. Additionally, I enhanced client websites by
              improving UI/UX design, optimizing SEO strategies, and increasing
              overall online visibility. I have a strong proficiency in the SDLC
              process and frontend + backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud Computing</h3>
            <p>
              I am skilled in leveraging AWS to build and scale cloud-based
              applications, ensuring high availability and security. With
              expertise in AWS services for computing, storage, and machine
              learning, I optimize cloud infrastructure and streamline
              deployments. I also hold an AWS Academy Cloud Foundations
              certificate
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning</h3>
            <p>
              I am well-versed in building, training, and deploying machine
              learning models to drive actionable insights and optimize business
              solutions. With expertise in end-to-end model development, I
              ensure efficient and scalable implementations that deliver
              impactful results.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
