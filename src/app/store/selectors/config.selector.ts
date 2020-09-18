import { createSelector } from '@ngrx/store';

const getConfig = (state) => state.config;

export const selectConfig = createSelector(
    getConfig,
    (config) => config
);