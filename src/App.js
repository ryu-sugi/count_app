import React, { Component } from 'react';
import Counrer from './Counter';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
      <h1>Count App</h1>
      <Counrer />
      </div>
    )
  }
}

export default App;
