import { routerReducer } from '@ngrx/router-store';
import { ConfigReducer } from './config.reducer';
import { UsersReducers } from './users.reducer';



export const AppReduceMap = {
    config: ConfigReducer,
    users: UsersReducers,
    routerReducer: routerReducer
};