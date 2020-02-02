import { GitHubUserReposLicenseInterface } from './GitHubUserReposLicense.interface';

export interface GitHubUserReposApiResponseInterface {
    id?: number;
    name: string;
    full_name: string;
    html_url?: string;
    description: string;
    url?: string;
    created_at?: Date;
    updated_at?: Date;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    license: GitHubUserReposLicenseInterface;
}
