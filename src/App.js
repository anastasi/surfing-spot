import React, { Component } from 'react';
import './App.css';
import Trips from './containers/Trips';
import Trip from './containers/Trip';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Trips} />
          <Route path="/trip/:id" component={Trip} />
        </div>
      </Router>
    );
  }
}

export default App;
