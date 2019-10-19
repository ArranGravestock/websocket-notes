import React, { Component } from 'react';

class Navigation extends Component {

    showUsers(users) {
        alert(users)
    }

    render(){
        return(
            <div className="navigation">
                <ul className="list">
                    <li className="title"><img className="title-logo" src="./logo.svg"/>Notes</li>
                    <li onClick={() => this.showUsers(this.props.active_users)}>
                        <span className={this.props.isConnected ? 'status online' : 'status offline'}></span>
                        {this.props.isConnected ? "Online" : "Offline"}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;