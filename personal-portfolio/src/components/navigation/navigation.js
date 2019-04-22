import React from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css'

const Navigation = props => {
  return (
    <nav>
      <NavLink to='/' className='nav-link nav-home'><img src='https://live.staticflickr.com/65535/47668479731_cea3877f4d_m.jpg' /></NavLink>
      <div className='other-links'>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        <NavLink to='/writing' className='nav-link'>Writing</NavLink>
        <NavLink to='/coding' className='nav-link'>Coding</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;
