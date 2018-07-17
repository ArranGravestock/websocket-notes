import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

    showUsers(users) {
        alert(users)
    }

    render(){
        return(
            <div className="navigation">
                <ul className="list">
                    <li className="title">Notes</li>
                    <li onClick={() => this.showUsers(this.props.active_users)}>Status: {this.props.isConnected ? "Connected" : "Disconnected"}</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;