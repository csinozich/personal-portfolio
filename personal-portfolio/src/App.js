import React, { Component } from 'react';
import NavigationFunction from './components/navigation/navigation-function'
import About from './components/about/about';
import Contact from './components/contact/contact';
import Homepage from './components/homepage-animation/homepage';
import Portfolio from './components/portfolio/portfolio';
import Writing from './components/writing/writing'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WithNavigationFunction />
      </div>
    );
  }
}

const WithNavigationFunction = NavigationFunction(About)(Portfolio)(Homepage)(Writing)(Contact);

export default App;
