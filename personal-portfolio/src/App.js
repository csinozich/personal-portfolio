import React, { Component } from 'react';
import NavigationFunction from './components/navigation/navigation-function'
import Navigation from './components/navigation/navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WithNavigationFunction />
      </div>
    );
  }
}

const WithNavigationFunction = NavigationFunction();

export default App;
