import React, { Component } from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';
import { UserCardPropsInterface } from '../../interfaces/UserCardProps.interface';

export default class UserCard extends Component<UserCardPropsInterface, {}> {
    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card mb-4">
                    <img
                        src={this.props.user.avatar_url}
                        className="card-img-top"
                        alt="user avatar"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.name}</h5>
                        <h6 className="card-subtitle mb-3">{this.props.user.login}</h6>
                        <div className="location-wrapper pt-2">
                            <i className="fas fa-map-marker-alt mr-2" />
                            <span>
                                {this.props.user.location ? this.props.user.location : 'N/A'}
                            </span>
                        </div>

                        <div className="mb-3 mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span>Public Repos</span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.user.public_repos}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span>Public Gists</span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.user.public_gists}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span>Followers</span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.user.followers}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span>Following</span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.user.following}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <Link className="card-link" to={`/github-users/${this.props.user.login}`}>
                            View Repositories
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
