import React, { Component } from 'react';
import './App.css';
import TripApp from './containers/TripApp';
import Trip from './containers/Trip';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={TripApp} />
          <Route path="/trip/:id" component={Trip} />
        </div>
      </Router>
    );
  }
}

export default App;
