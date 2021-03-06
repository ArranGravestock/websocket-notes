import React, { Component } from 'react';

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
                        <li onClick={() => {this.addNote(this.state.title, this.state.content);this.toggleEditor()}}><i className="fa-2x fas fa-plus"></i></li>
                        <li onClick={this.toggleEditor}><i className="fa-2x fas fa-times"></i></li>
                    </ul>
                </nav>
                <div className="content">
                    <input className="editor-title" placeholder="Add a title..." onChange={this.onEnter("title")} value={this.state.title}/>
                    <textarea className="editor-textarea" placeholder="Add a description..." onChange={this.onEnter("content")} value={this.state.content}></textarea>
                </div>
            </div>
        )
    }
}

export default Editor;