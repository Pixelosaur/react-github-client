import { UserInterface } from './User.interface';

export interface UsersStateInterface {
    users: UserInterface[];
    page: number;
    pageSize: number;
    isLoaded: boolean;
}
