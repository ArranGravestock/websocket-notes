import React, { Component } from 'react';
import './Notes.css'


class Note extends Component {

    render(){

        return(
            <div className={`Note`}>
                <div className="container">
                    <header>
                        <h2>{this.props.title}</h2>
                        <div className="controls">
                            <span>E</span>
                            <span>X</span>
                        </div>
                        
                    </header>
                    <section>
                        <p>{this.props.content}</p>
                    </section>
                    <footer>
                        <p>Last edited by: {this.props.user}</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Note;