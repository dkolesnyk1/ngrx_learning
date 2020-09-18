
import { createReducer, on } from '@ngrx/store';
import { SetConfig } from '../actions/app-config.actions';
import { initialGlobalConfig } from '../state/app-config.state';


export const ConfigReducer = createReducer(initialGlobalConfig, 
    on(SetConfig, (state, {config}) => {
        return {
            config: config
        }
    })
);