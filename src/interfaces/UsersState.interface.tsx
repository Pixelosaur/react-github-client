import { UserDetailsInterface } from './UserDetails.interface';

export interface UsersStateInterface {
    users: UserDetailsInterface[];
    page: number;
    pageSize: number;
    isLoaded: boolean;
}
