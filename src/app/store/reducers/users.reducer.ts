
import { createReducer, on } from '@ngrx/store';
import { SetUser, SetUsers, UserSeted } from '../actions/users.actions';
import { initialUsersState } from '../state/user.state'


export const UsersReducers = createReducer(initialUsersState, 
    on(SetUser, (state,  {user}) => {
        return {
            ...state,
            users: [...state.users, user],
        }
    }),
    on(UserSeted, (state, {user}) => {
        return {
            ...state,
            setedUser: user
        }
    }),
    on(SetUsers, (state, {users}) => {              
        return {
            ...state,
            users: users
        }
    })
);