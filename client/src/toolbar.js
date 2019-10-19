import React, { Component } from 'react';
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
                    <p>Create a note</p>
                </div>
                <Editor ws={this.props.ws} toggleEditor={() => {this.toggleEditor()}} shouldRender={`-${this.state.shouldRenderEditor}`}/>
            </div>
        )
    }
}

export default Toolbar;