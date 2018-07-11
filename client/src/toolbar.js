import React, { Component } from 'react';
import './Toolbar.css'

import Editor from './Editor'


class Toolbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shouldRenderEditor: false
        }
    }
    

    toggleEditor() {
        this.setState({shouldRenderEditor: !this.state.shouldRenderEditor})
    }

    render() {

        return(
            <div>
                <div className="toolbar" onClick={() => {this.toggleEditor()}}>
                    <p>Take a note...</p>
                </div>
                <Editor toggleEditor={() => {this.toggleEditor()}} shouldRender={`-${this.state.shouldRenderEditor}`}/>
            </div>
        )
    }
}

export default Toolbar;