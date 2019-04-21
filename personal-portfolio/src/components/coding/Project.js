import React from 'react';
import { Route } from 'react-router-dom';

const Project = props => {
  const project = props.projects.find(
    thing => `${thing.id}` === props.match.params.id
  );

  return(
    <div>
      <img src={project.imageUrl} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default Project;
