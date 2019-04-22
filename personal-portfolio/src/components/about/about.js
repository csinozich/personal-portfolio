import React from 'react';
import './about.css'

const About = props => {
  return (
    <div className='about'>
      <div>
        <img className='about-image' src='https://live.staticflickr.com/65535/40702294363_d8945f2dec_z.jpg' />
      </div>
      <div className='about-content'>
        <h2>Hi! My name is Claire.</h2>
        <p>I'm something something something something something.</p>
      </div>
    </div>
  )
}

export default About
