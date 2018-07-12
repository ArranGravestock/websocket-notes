import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './nav'
import Toolbar from './toolbar'
import Note from './Notes'

class App extends Component {

  componentWillMount() {
    //wss connect
    let webSocket = new WebSocket("ws://localhost:3001")
  }


  render() {
    return (
      <div className="App">

        <div className="content-wrapper">
          <header className="App-header">
            <Navigation></Navigation>
          </header>

          <div className="notes-wrapper">
            <Note title="test-title" content="test-content" user="last-user"/>
          </div>
        </div>

        <Toolbar></Toolbar>
      </div>
    );
  }
}

export default App;
