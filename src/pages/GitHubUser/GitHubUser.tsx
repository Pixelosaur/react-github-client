import React, { Component } from 'react';
import { GitHubUserPropsInterface } from '../../interfaces/GitHubUserProps.interface';

export default class GitHubUser extends Component<GitHubUserPropsInterface, {}> {
    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="row">
                    <div className="col">User Repos</div>
                </div>
            </div>
        );
    }
}
