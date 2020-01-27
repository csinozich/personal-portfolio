import React from "react";
import "./coding.css";

const Project = props => {
  const project = props.projects.find(
    thing => `${thing.id}` === props.match.params.id
  );

  return (
    <div className="project">
      <a className="back" href="/coding">
        &#8668; go back
      </a>
      <div className="project">
        <div className="project-image">
          <img src={project.imageUrl} alt={project.name} />
        </div>
        <div className="project-info">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Languages and libraries used: {project.languages}</p>
          {project.github ? (
            <p>
              <a href={project.github} className="project-button">
                Check out the code on GitHub
              </a>
            </p>
          ) : (
            <p>The GitHub repository is not available for this project.</p>
          )}
          {project.design ? (
            <p>
              <a href={project.design} className="project-button">
                Check out the original design
              </a>
            </p>
          ) : (
            <p>The original design is not available for this project</p>
          )}
          <p>
            <a href={project.netlify} className="project-button">
              See it in action on Netlify
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
