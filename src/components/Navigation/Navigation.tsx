import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="nav-link active" href="#">
                    GitHub Users
                </a>
                <a className="nav-link" href="#">
                    Following
                </a>
            </nav>
        );
    }
}
