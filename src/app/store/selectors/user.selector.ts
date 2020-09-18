import { createSelector } from '@ngrx/store';

const getUsers = (store) => store.users;


export const selectUserList = createSelector(
    getUsers,
    (users) => users.users
);

export const selectUser = createSelector(
    getUsers,
    (users, prop) => {
        return users.filter(user => user.id === prop.id);
    }
)

export const GetUserStatus = createSelector(
    getUsers, 
    (users, prop) => {        
        let status;
        users.user.filter(user => {
            if ( user.id === prop.id ) {
                status = user.status;
            }
        });

        return status;
    }
)

export const getSelectedUser = createSelector(
    getUsers, 
    (users) => { 
         return users.setedUser;
    }
)