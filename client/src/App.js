import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './nav'
import Toolbar from './toolbar'
import Note from './Notes'

class App extends Component {

  constructor() {
    super()
    this.webSocket = new WebSocket("ws://209.97.180.214:3001")
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    window.addEventListener('beforeunload', (e) => {
      this.webSocket.close()
    })
  }

  componentWillMount() {
    //wss on update
    this.webSocket.onmessage = (event) => {
      let data = JSON.parse(event.data)

      if(data.type) {
        this.setState({active_users: data.data})
      } else {
        var notes = data.map(note => {
          return (
            <Note key={note.id} id={note.id} title={note.title} content={note.content} user={note.user} metadata={note.metadata} ws={this.webSocket}/>
          )
        })
        this.setState({notes: notes})
      }
    }
  }

  render() {
    return (
      <div className="App">

        <div className="content-wrapper">
          <header className="App-header">
            <Navigation isConnected={this.webSocket.readyState} active_users={this.state.active_users}></Navigation>
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
