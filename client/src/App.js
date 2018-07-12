import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './nav'
import Toolbar from './toolbar'
import Note from './Notes'

class App extends Component {

  constructor() {
    super()
    this.webSocket = new WebSocket("ws://localhost:3001")
  }

  componentWillMount() {
    //wss connect

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

        <Toolbar ws={this.webSocket}></Toolbar>
      </div>
    );
  }
}

export default App;
