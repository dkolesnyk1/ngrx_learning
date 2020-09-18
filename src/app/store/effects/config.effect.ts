import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetConfig, SetConfigSuccess } from '../actions/app-config.actions';


@Injectable({
    providedIn: 'root'
}) 
export class ConfigEffects {
    constructor(private actions$: Actions) {}

    public configSetSuccess$: Observable<Action> = createEffect(() => 
        this.actions$.pipe(
            ofType(SetConfig),
            map(({config}) => SetConfigSuccess({config}))
        )
    ) 
}