import React, { Component } from 'react';
import { GitHubUserPropsInterface } from '../../interfaces/GitHubUserProps.interface';
import axios, { AxiosResponse } from 'axios';
import { GitHubUserReposApiResponseInterface } from '../../interfaces/GitHubUserReposApiResponse.interface';

export default class GitHubUser extends Component<GitHubUserPropsInterface, {}> {
    componentDidMount(): void {
        this.getUserRepos();
    }

    /* extract username from url params */
    getUrlParams(): string {
        const {
            match: { params },
        } = this.props;

        return params.username;
    }

    getUserRepos(): void {
        const url: string = `https://api.github.com/users/${this.getUrlParams()}/repos`;
        const params = {
            sort: 'updated',
            type: 'owner',
            direction: 'desc',
            page: 1,
            per_page: 10,
        };

        axios
            .get<GitHubUserReposApiResponseInterface>(url, { params })
            .then((response: AxiosResponse<GitHubUserReposApiResponseInterface>) => {
                console.log(response.data);
            })
            .catch((error: any) => console.log(error));
    }

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
