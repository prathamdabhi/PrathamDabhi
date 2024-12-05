import React from "react";
import projects from "../../assets/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project" id="projects">
      <h1 className="project__title">Projects</h1>

      <div className="project__container">
        {projects.map((item, index) => {
          return (
            <div key={index} className="project__cards">
              <div className="card__image">
                <img
                  style={
                    index === 2 ? { height: "24rem", objectFit: "cover" } : {}
                  }
                  src={item.image}
                  alt=""
                />
              </div>

              <p className="card__description">{item.title}</p>
              <button className="card__btn">
                <a target="_blank" className="card__link" href={item.url}>
                  View
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
