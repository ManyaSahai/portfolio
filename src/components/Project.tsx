import React from "react";
import locateme from "../assets/images/locateme.jpg";
import hub from "../assets/images/hub.png";
import nextstep from "../assets/images/nextstep.png";
import bookish from "../assets/images/bookish.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://bookish-react-render.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bookish} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://bookish-react-render.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>bookish</h2>
          </a>
          <p>
            A full-stack book website built with React, Tailwind CSS, Node.js,
            and MongoDB for a dynamic, responsive, and scalable browsing
            experience.
          </p>
        </div>
        <div className="project">
          <a href="about-section" target="_blank" rel="noreferrer">
            <img src={nextstep} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="about-section
          " target="_blank" rel="noreferrer">
            <h2>NextStep</h2>
          </a>
          <p>
            NextStep is a career recommendation system built with Flask and
            scikit-learn, using machine learning to suggest personalized career
            paths. It leverages Streamlit for an interactive frontend and pandas
            for data processing, ensuring an intuitive user experience.
          </p>
        </div>
        <div className="project">
          <a href="about-section" target="_blank" rel="noreferrer">
            <img src={hub} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="about-section" target="_blank" rel="noreferrer">
            <h2>Programming Hub</h2>
          </a>
          <p>
            A streamlit based web application which contains all the resources
            needed to start and excel your programming journey!
          </p>
        </div>
        <div className="project">
          <a href="about-section" target="_blank" rel="noreferrer">
            <img src={locateme} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="about-section" target="_blank" rel="noreferrer">
            <h2>LocateMe</h2>
          </a>
          <p>
            LocateMe is a web app that shows user profiles on an interactive
            map, including name, description, and address. An Admin Panel
            enables easy management of profiles, such as adding and editing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
