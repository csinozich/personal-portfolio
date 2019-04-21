import React from 'react';
import { Link } from 'react-router-dom';

const Coding = props => {
  const routeToProject = (event, project) => {
    event.preventDefault();
    props.history.push(`/coding/${project.id}`)
  }

  return (
    <div>
    {props.projects.map(project => (
      <div
        onClick={event => routeToProject(event, project)}
        key={project.id}>
        <img
          src={project.imageUrl}
          alt={project.name}
        />
        <p>{project.name}</p>
      </div>
    ))}
    </div>
  )
}

export default Coding;
