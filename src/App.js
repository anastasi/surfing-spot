import React, { Component } from 'react';
import './App.css';
import TripForm from './containers/TripForm';
import Trip from './containers/Trip';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={TripForm} />
          <Route path="/trip/:id" component={Trip} />
        </div>
      </Router>
    );
  }
}

export default App;
