import React, { Component } from 'react';
import { GitHubUserPropsInterface } from '../../interfaces/GitHubUserProps.interface';
import axios, { AxiosResponse } from 'axios';
import { GitHubUserReposApiResponseInterface } from '../../interfaces/GitHubUserReposApiResponse.interface';
import { ReposStateInterface } from '../../interfaces/ReposState.interface';
import RepoCard from '../../components/RepoCard/RepoCard';
import Pagination from '../../components/Pagination/Pagination';

export default class GitHubUser extends Component<GitHubUserPropsInterface, ReposStateInterface> {
    /* Initialize the state */
    state: ReposStateInterface = {
        repos: [],
        page: 1,
        pageSize: 10,
        isLoaded: false,
    };

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

    /* Updates the page state and then calls the getUsers  */
    // TODO: Duplicate functionality. Maybe move to a helper file.
    onPageChange(currentPage: number) {
        this.setState({ page: currentPage }, () => this.getUserRepos());
    }

    getUserRepos(): void {
        const url: string = `https://api.github.com/users/${this.getUrlParams()}/repos`;
        const params = {
            sort: 'updated',
            type: 'owner',
            direction: 'desc',
            page: this.state.page,
            per_page: this.state.pageSize,
        };

        axios
            .get<GitHubUserReposApiResponseInterface[]>(url, { params })
            .then((response: AxiosResponse<GitHubUserReposApiResponseInterface[]>) => {
                this.setState({ repos: response.data, isLoaded: true });
            })
            .catch((error: any) => console.log(error));
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="row">
                    {this.state.isLoaded ? (
                        this.state.repos.map(
                            (repo: GitHubUserReposApiResponseInterface, index: number) => (
                                <RepoCard repo={repo} key={index} />
                            ),
                        )
                    ) : (
                        <div className="col">Loading...</div>
                    )}
                </div>

                <div className="row mt-4">
                    <div className="col">
                        {this.state.isLoaded ? (
                            <Pagination
                                page={this.state.page}
                                currentPage={this.onPageChange.bind(this)}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
