import React, { Component } from 'react';
import './App.css';
import Trips from './containers/Trips';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Trips />
      </div>
    );
  }
}

export default App;
