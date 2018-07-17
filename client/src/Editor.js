import React, { Component } from 'react';
import './Editor.css'

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
        this.toggleEditor = this.props.toggleEditor
        this.ws = this.props.ws;
    }

    sendData(data) {
        this.ws.send(JSON.stringify(data))
    }

    handleChange(prop, event) {
        this.setState({
            [prop]: event.target.value
        })
    }

    onEnter = data => event => {
        this.handleChange(data, event)
    }

    addNote = (title, content) => {
        if(title && content) {
            let d = new Date()
            let msg = {
                type: 'create',
                title: title,
                content: content,
                metadata: {user: this.props.user, time: `${d.getHours()}:${d.getMinutes()}`, date:`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`}
            }
            this.sendData(msg)
            this.setState({title: '', content: ''})
        }  
    }

    render(){
    
        return(
            <div className={`Editor Editor${this.props.shouldRender}`}>
                <nav className="nav">
                    <ul>
                        <li onClick={() => {this.addNote(this.state.title, this.state.content);this.toggleEditor()}}>Add</li>
                        <li onClick={this.toggleEditor}>Return</li>
                    </ul>
                </nav>
                <div className="content">
                    <input className="editor-title" placeholder="Title" onChange={this.onEnter("title")} value={this.state.title}/>
                    <textarea className="editor-textarea" placeholder="Note" onChange={this.onEnter("content")} value={this.state.content}></textarea>
                </div>
            </div>
        )
    }
}

export default Editor;