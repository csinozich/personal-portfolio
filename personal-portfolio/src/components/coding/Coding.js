import React from 'react';
import './coding.css'

const Coding = props => {
  const routeToProject = (event, project) => {
    event.preventDefault();
    props.history.push(`/coding/${project.id}`)
  }

  return (
    <div className='coding-projects'>
    {props.projects.map(project => (
      <div
        onClick={event => routeToProject(event, project)}
        key={project.id}>
        <img
          src={project.imageUrl}
          alt={project.name}
          className='coding-page-images'
        />
      </div>
    ))}
    </div>
  )
}

export default Coding;
