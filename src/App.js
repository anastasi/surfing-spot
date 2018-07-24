import React, { Component } from 'react';
import './App.css';
import SpotApp from './containers/SpotApp';
import Spot from './containers/Spot';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={SpotApp} />
          <Route path="/spot/:id" component={Spot} />
        </div>
      </Router>
    );
  }
}

export default App;
