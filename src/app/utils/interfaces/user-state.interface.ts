import { IUser } from './user.intrerface';

export interface IUsersState {
    users: IUser[];
    selectedUser: IUser;
}