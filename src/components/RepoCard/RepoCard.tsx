import React, { Component } from 'react';
import { RepoCardPropsInterface } from '../../interfaces/RepoCardProps.interface';

export default class RepoCard extends Component<RepoCardPropsInterface, {}> {
    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.repo.name}</h5>
                        <h6 className="card-subtitle mb-3">
                            {this.props.repo.license !== null
                                ? this.props.repo.license.name
                                : 'N/A'}
                        </h6>

                        <p className="card-text pt-2">{this.props.repo.description}</p>

                        <div className="mb-3 mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span>
                                        <i className="fas fa-star mr-2" />
                                        Stars
                                    </span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.repo.stargazers_count}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span>
                                        <i className="fas fa-code-branch mr-2" />
                                        Forks
                                    </span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.repo.forks_count}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span>
                                        <i className="fas fa-eye mr-2" />
                                        Watchers
                                    </span>
                                    <span className="badge badge-pill badge-primary">
                                        {this.props.repo.watchers_count}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
