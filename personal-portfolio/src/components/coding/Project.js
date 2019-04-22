import React from 'react';
import './coding.css'

const Project = props => {
  const project = props.projects.find(
    thing => `${thing.id}` === props.match.params.id
  );

  return(
    <div className='project'>
      <a className='back' href='/coding'>&#8668; go back</a>
      <div className='project'>
        <img src={project.imageUrl} />
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>Languages used: {project.languages}</p>
        <p><a href={project.github} className='project-button'>Check out the code on GitHub</a></p>
        <p><a href={project.netlify} className='project-button'>See it in action on Netlify</a></p>
      </div>
    </div>
  )
}

export default Project;
