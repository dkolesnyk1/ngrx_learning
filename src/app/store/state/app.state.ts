import { IAppState } from 'src/app/utils/interfaces/app-state.interface';
import { initialGlobalConfig } from './app-config.state';
import { initialUsersState } from './user.state';

export const initialAppState: IAppState = {
    users: initialUsersState,
    config: initialGlobalConfig,
}

export const getInitialState = () :IAppState => initialAppState;

