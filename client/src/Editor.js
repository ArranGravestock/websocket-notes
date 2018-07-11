import React, { Component } from 'react';
import './Editor.css'


class Editor extends Component {

    render(){

        return(
            <div className={`Editor Editor${this.props.shouldRender}`}>
                <nav className="nav">
                    <ul>
                        <li onClick={this.props.toggleEditor}>Return</li>
                    </ul>
                </nav>
                <div className="content">
                    <input className="editor-title" placeholder="Title"/>
                    <textarea className="editor-textarea" placeholder="Note"></textarea>
                </div>
            </div>
        )
    }
}

export default Editor;