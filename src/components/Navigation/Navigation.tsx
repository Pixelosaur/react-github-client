import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavigationStateInterface } from '../../interfaces/NavigationState.interface';

export default class Navigation extends Component<{}, NavigationStateInterface> {
    state: NavigationStateInterface = {
        currentPath: 'github-users',
    };

    updateCurrentPath(): void {
        this.state.currentPath === 'github-users'
            ? this.setState({ currentPath: 'following' })
            : this.setState({ currentPath: 'github-users' });
    }

    render() {
        return (
            <nav className="nav">
                <Link
                    className={`nav-link mr-2 ${
                        this.state.currentPath === 'github-users' ? 'active' : null
                    }`}
                    to="/"
                    onClick={this.updateCurrentPath.bind(this)}
                >
                    GitHub Users
                </Link>
                <Link
                    className={`nav-link mr-2 ${
                        this.state.currentPath === 'following' ? 'active' : null
                    }`}
                    to="/following"
                    onClick={this.updateCurrentPath.bind(this)}
                >
                    Following
                </Link>
            </nav>
        );
    }
}
