import React, { Component } from 'react';
import './Editor.css'


class Editor extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    sendData(data) {
        let ws = this.props.ws;
        ws.send(data)
    }

    handleChange(prop, event) {
        
        this.setState({
            [prop]: event.target.value
        })
    }

    onEnter = data => event => {
        this.handleChange(data, event)
        this.sendData(event.target.value)
    }

    render(){
        

        return(
            <div className={`Editor Editor${this.props.shouldRender}`}>
                <nav className="nav">
                    <ul>
                        <li onClick={this.props.toggleEditor}>Return</li>
                    </ul>
                </nav>
                <div className="content">
                    <input className="editor-title" placeholder="Title" onChange={this.onEnter("title")}/>
                    <textarea className="editor-textarea" placeholder="Note" onChange={this.onEnter("content")}></textarea>
                </div>
            </div>
        )
    }
}

export default Editor;