import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import UserCard from '../../components/UserCard/UserCard';
import Pagination from '../../components/Pagination/Pagination';
import { UserInterface } from '../../interfaces/User.interface';
import { GitHubUsersApiResponseInterface } from '../../interfaces/GitHubUsersApiResponse.interface';
import { UsersStateInterface } from '../../interfaces/UsersState.interface';
import { UserDetailsInterface } from '../../interfaces/UserDetails.interface';

export default class GitHubUsers extends Component<{}, UsersStateInterface> {
    /* Initialize the state */
    state: UsersStateInterface = {
        users: [],
        page: 1,
        pageSize: 12,
        isLoaded: false,
    };

    componentDidMount() {
        this.getUsers();
    }

    /* Get the list of Github users based on the given query params
     * returns the single user's details array from getSingleUser call
     * as a Promise and then updates the state
     */
    getUsers(): void {
        const url: string = `https://api.github.com/search/users`;
        const params = {
            q: 'language:javascript',
            type: 'user',
            sort: 'followers',
            order: 'desc',
            page: this.state.page,
            per_page: this.state.pageSize,
        };
        axios
            .get<GitHubUsersApiResponseInterface>(url, {
                params,
            })
            .then((response: AxiosResponse<GitHubUsersApiResponseInterface>) => {
                return Promise.all(
                    response.data.items.map((user: UserInterface) =>
                        this.getSingleUser(user.login),
                    ),
                );
            })
            .then((users: UserDetailsInterface[]) => {
                this.setState({ users, isLoaded: true });
            })
            .catch((error: any) => console.log(error));
    }

    /* Get single user's details and on fulfillment return the data */
    getSingleUser(username: string): Promise<UserDetailsInterface> {
        const url: string = `https://api.github.com/users/${username}`;
        return axios
            .get<UserDetailsInterface>(url)
            .then((response: AxiosResponse<UserDetailsInterface>) => {
                return response.data;
            });
    }

    /* Updates the page state and then calls the getUsers  */
    onPageChange(currentPage: number) {
        this.setState({ page: currentPage }, () => this.getUsers());
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="row">
                    {this.state.isLoaded ? (
                        this.state.users.map((user: UserDetailsInterface, index: number) => (
                            <UserCard user={user} key={index} />
                        ))
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
