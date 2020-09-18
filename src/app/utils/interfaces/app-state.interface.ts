import { RouterReducerState } from '@ngrx/router-store';
import { IAppConfig } from './config-state.interafec';
import { IUsersState } from './user-state.interface';

export interface IAppState {
    users: IUsersState,
    config: IAppConfig,
    router?: RouterReducerState
}