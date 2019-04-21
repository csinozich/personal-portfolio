import React from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css'

const Navigation = props => {
  return (
    <nav>
      <NavLink to='/about' className='nav-link'>About</NavLink>
      <NavLink to='/contact' className='nav-link'>Contact</NavLink>
      <NavLink to='/' className='nav-link nav-home'>Claire Sinozich</NavLink>
      <NavLink to='/writing' className='nav-link'>Writing</NavLink>
      <NavLink to='/coding' className='nav-link'>Coding</NavLink>
    </nav>
  )
}

export default Navigation;
