import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import GitHubUserCard from '../../components/GitHubUserCard/GitHubUserCard';
import Pagination from '../../components/Pagination/Pagination';
import { UserInterface } from '../../interfaces/User.interface';
import { GitHubApiResponseInterface } from '../../interfaces/GitHubApiResponse.interface';
import { UsersStateInterface } from '../../interfaces/UsersState.interface';
import { UserDetailsInterface } from '../../interfaces/UserDetails.interface';

export default class GitHubUsers extends Component<{}, UsersStateInterface> {
    /* Initialize the state */
    state: UsersStateInterface = {
        users: [],
        page: 1,
        pageSize: 10,
        isLoaded: false,
    };

    componentDidMount() {
        this.getUsers();
    }

    /* Get the list of Github users based on the given query params
     * update the state and then get the Single User details */
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
            .get<GitHubApiResponseInterface>(url, {
                params,
            })
            .then((response: AxiosResponse<GitHubApiResponseInterface>) => {
                this.setState({ users: response.data.items, isLoaded: true });

                this.state.users.forEach((user: UserInterface) => {
                    this.getSingleUser(user.login);
                });
            })
            .catch((error: any) => console.log(error));
    }

    /* Get single user's details */
    getSingleUser(username: string): Promise<any> {
        const url: string = `https://api.github.com/users/${username}`;
        return axios
            .get<UserDetailsInterface>(url)
            .then((res: AxiosResponse<UserDetailsInterface>) => {
                console.log(res.data);
            })
            .catch((error: any) => console.log(error));
    }

    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="row">
                    {this.state.isLoaded
                        ? this.state.users.map((user: UserInterface, index: number) => (
                              <GitHubUserCard user={user} key={index} />
                          ))
                        : 'Loading...'}
                </div>

                <div className="row mt-4">
                    <div className="col">{this.state.isLoaded ? <Pagination /> : null}</div>
                </div>
            </div>
        );
    }
}
