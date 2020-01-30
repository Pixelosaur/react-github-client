import React, { Component } from 'react';
import './GitHubUserCard.scss';
import { UserInterface } from '../../interfaces/User.interface';
import { UserDetailsInterface } from '../../interfaces/UserDetails.interface';

type Props = {
    user: UserInterface;
};

export default class GitHubUserCard extends Component<Props, {}> {
    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card mb-4">
                    <img
                        src={this.props.user.avatar_url}
                        className="card-img-top"
                        alt="user avatar"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.login}</h5>
                        <h6 className="card-subtitle mb-3 text-muted">{this.props.user.login}</h6>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>

                        <div className="meta-wrapper">
                            <ul>
                                <li>location</li>
                            </ul>
                        </div>

                        <a href="#" className="card-link">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
