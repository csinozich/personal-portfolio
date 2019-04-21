import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import './app.css'

import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import Coding from './components/coding/Coding';
import Project from './components/coding/Project';
import Contact from './components/contact/Contact';
import Homepage from './components/homepage/Homepage';
import Writing from './components/writing/Writing';

import data from './coding-data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.setState({ projects: data })
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Navigation} />
        <Route path='/' exact component={Homepage} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/writing' exact component={Writing} />
        <Route path='/coding' exact render={props => (
          <Coding
            {...props}
            projects={this.state.projects}/>
        )} />
        <Route path='/coding/:id' render={props => (
          <Project
          {...props}
          projects={this.state.projects} />
        )} />
      </div>
    );
  }
}

export default App;
