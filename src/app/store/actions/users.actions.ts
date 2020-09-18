import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/utils/interfaces/user.intrerface';

export enum UserActions {
    SetUser = '[User] Set User',
    UserSeted = '[User] User Seted',
    GetUser = '[User]: Get User',
    GetUserStatus = '[User] Get User Status',
    fetchUsers = '[Users] Load Users',
    SetUsers = '[Users] Set Users',
}

export const fetchUsers = createAction(UserActions.fetchUsers);

export const SetUsers = createAction(UserActions.SetUsers, props<{users: IUser[]}>());

export const SetUser = createAction(UserActions.SetUser, props<{user: IUser}>());

export const UserSeted = createAction(UserActions.UserSeted, props<{user: IUser}>());

export const GetUser = createAction(UserActions.GetUser, props<{id: number}>());

export const GetUserStatus = createAction(UserActions.GetUserStatus, props<{id: number}>());
