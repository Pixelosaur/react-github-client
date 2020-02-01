import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavigationStateInterface } from '../../interfaces/NavigationState.interface';

export default class Navigation extends Component<{}, NavigationStateInterface> {
    state: NavigationStateInterface = {
        currentPath: 'github-users',
    };

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <Link className="nav-link pl-0 active" to="/">GitHub Users</Link>
                <Link className="nav-link" to="/following">Following</Link>
            </nav>
        );
    }
}
