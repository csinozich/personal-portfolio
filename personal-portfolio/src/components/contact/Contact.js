import React from 'react';
import './contact.css'

const Contact = props => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <img className='reach' src='https://live.staticflickr.com/65535/46946199734_c0779506e6.jpg' alt='reach out'/>
        <p className='contact-p'>I am currently available for freelance web development projects and freelance writing. Please reach out by phone or email below to chat about your project.</p>
        <p className='contact-p'>email: claire.sinozich@gmail.com</p>
        <p className='contact-p'>phone number: 303-550-9470</p>
      </div>
      <div className='contact-sites'>
        <img className='find' alt='find me' src="https://live.staticflickr.com/65535/33792951298_1d041017dc.jpg"/>
        <p className='find-link'><a href='https://github.com/csinozich'>GitHub</a></p>
        <p className='find-link'><a href='https://www.linkedin.com/in/clairesinozich/'>LinkedIn</a></p>
        <p className='find-link'><a href='https://twitter.com/PleaseClairify'>Twitter</a></p>
        <p className='find-link'><a href='https://www.codewars.com/users/csinozich'>CodeWars</a></p>
        <p className='find-link'><a href='https://medium.com/@claire.sinozich'>Medium</a></p>
      </div>
    </div>
  )
}

export default Contact
