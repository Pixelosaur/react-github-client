import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavigationStateInterface } from '../../interfaces/NavigationState.interface';

export default class Navigation extends Component<{}, NavigationStateInterface> {
    state: NavigationStateInterface = {
        currentPath: 'github-users',
    };

    isGitHubUsersPageActive: boolean = true;
    isFollowingPageActive: boolean = false;

    updateCurrentPath(path: string): void {
        this.isFollowingPageActive = path === 'following';
        this.isGitHubUsersPageActive = path === 'github-users';

        this.setState({ currentPath: path });
    }

    render() {
        return (
            <nav className="nav">
                <Link
                    className={`nav-link mr-2 ${this.isGitHubUsersPageActive ? 'active' : ''}`}
                    to="/"
                    onClick={() => this.updateCurrentPath('github-users')}
                >
                    GitHub Users
                </Link>
                <Link
                    className={`nav-link mr-2 ${this.isFollowingPageActive ? 'active' : ''}`}
                    to="/following"
                    onClick={() => this.updateCurrentPath('following')}
                >
                    Following
                </Link>
            </nav>
        );
    }
}
