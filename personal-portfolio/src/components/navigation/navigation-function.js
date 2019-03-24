import React from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import Homepage from '../homepage-animation/homepage';
import Portfolio from '../portfolio/portfolio';
import Writing from '../writing/writing';

const NavigationFunction = About => Homepage => Portfolio => Writing => Contact => {
  class Pages extends React.Component {
    render() {
      return(
        <div>
          <About />
          <Homepage />
          <Portfolio />
          <Writing />
          <Contact />
        </div>
      )
    }
  }
  return Pages;
}

export default NavigationFunction
