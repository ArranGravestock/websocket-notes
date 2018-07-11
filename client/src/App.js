import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './nav'
import Toolbar from './toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="content-wrapper">
          <header className="App-header">
            <Navigation></Navigation>
          </header>

          <div className="notes-wrapper">
            <p>test content</p>
          </div>
        </div>

        <Toolbar></Toolbar>
      </div>
    );
  }
}

export default App;
