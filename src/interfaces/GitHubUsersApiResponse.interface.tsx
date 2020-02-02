import { UserInterface } from './User.interface';

export interface GitHubUsersApiResponseInterface {
    total_count: number;
    items: UserInterface[];
}
