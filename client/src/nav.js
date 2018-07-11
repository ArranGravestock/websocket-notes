import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

    render(){
        return(
            <div className="navigation">
                <ul className="list">
                    <li className="title">Notes</li>
                    <li>Connected</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;