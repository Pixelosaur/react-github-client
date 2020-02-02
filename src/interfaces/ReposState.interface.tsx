import { GitHubUserReposApiResponseInterface } from './GitHubUserReposApiResponse.interface';

export interface ReposStateInterface {
    repos: GitHubUserReposApiResponseInterface[];
    page: number;
    pageSize: number;
    isLoaded: boolean;
}
