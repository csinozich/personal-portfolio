import React from 'react';


const NavigationFunction = About => Portfolio => Homepage => Writing => Contact => {
  class Pages extends React.Component {
    render() {
      return(
        <div>
          <About />
          <Portfolio />
          <Homepage />
          <Writing />
          <Contact />
        </div>
      )
    }
  }
  return Pages;
}

export default NavigationFunction
