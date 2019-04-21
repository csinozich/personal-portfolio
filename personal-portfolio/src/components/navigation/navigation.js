import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = props => {
  return (
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/'>Claire Sinozich</Link>
      <Link to='/writing'>Writing</Link>
      <Link to='/coding'>Coding</Link>
    </nav>
  )
}

export default Navigation;
