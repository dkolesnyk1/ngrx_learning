import {createAction, props} from '@ngrx/store';
import { IGlobalConfig } from 'src/app/utils/interfaces/app-config.interface';

export enum AppConfigActions {
    SetConfig = '[Config] Set Config',
    SetConfigSuccess = '[Config] Get Configs'
}

export const SetConfig = createAction(AppConfigActions.SetConfig, props<{config: IGlobalConfig}>());

export const SetConfigSuccess = createAction(AppConfigActions.SetConfigSuccess, props<{config: IGlobalConfig}>());

