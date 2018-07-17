import React, { Component } from 'react';
import './Notes.css'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
        }
        this.ws = this.props.ws;
    }


    sendData(data) {
        this.ws.send(JSON.stringify(data))
    }

    deleteNote = (id) => {
        let msg = {
            type: 'delete',
            id: id
        }
        this.sendData(msg)
    }

    render(){

        return(
            <div className={`Note`}>
                <div className="container">
                    <header>
                        <h2>{this.props.title}</h2>
                        <div className="controls">
                            <span>Edit</span>
                            <span onClick={() => this.deleteNote(this.state.id)}>Delete</span>
                        </div>
                        
                    </header>
                    <section>
                        <p>{this.props.content}</p>
                    </section>
                    <footer>
                        <p>Last edited by <b>{this.props.user.replace('::ffff:', '')}</b> at <b>{this.props.metadata.date}</b></p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Note;