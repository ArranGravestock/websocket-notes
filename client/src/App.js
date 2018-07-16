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
    this.state = {
      notes: []
    }
  }

  componentWillMount() {

    //wss on update
    this.webSocket.onmessage = (event) => {
      var notes = JSON.parse(event.data).map(note => {
        return (
          <Note key={note.id} title={note.title} content={note.content} user={note.metadata.user}/>
        )
      })
      this.setState({notes: notes})
    }
  }


  render() {
    return (
      <div className="App">

        <div className="content-wrapper">
          <header className="App-header">
            <Navigation></Navigation>
          </header>

          <div className="notes-wrapper">
            {this.state.notes}
          </div>
        </div>

        <Toolbar ws={this.webSocket}></Toolbar>
      </div>
    );
  }
}

export default App;
