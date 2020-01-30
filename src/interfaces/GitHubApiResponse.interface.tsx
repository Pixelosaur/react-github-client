import { UserInterface } from './User.interface';

export interface GitHubApiResponseInterface {
    total_count: number;
    items: UserInterface[];
}
