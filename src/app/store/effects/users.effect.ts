import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchUsers, GetUser, GetUserStatus, SetUser, SetUsers, UserSeted } from '../actions/users.actions';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../selectors/user.selector';
import { HttpClient } from '@angular/common/http';





@Injectable({
    providedIn: 'root'
}) 
export class UsersEffect {
    constructor(private actions$: Actions, private store: Store, private httpClient: HttpClient ) {}

    public setUser$: Observable<Action> = createEffect(
        () => 
        this.actions$.pipe(
            ofType(SetUser),
            map(( { user } ) => UserSeted( { user }) )                   
        ));

    public fetchUsers$: Observable<Action> = createEffect(
        () => 
            this.actions$.pipe(
                ofType(fetchUsers),
                exhaustMap(() => {
                    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
                        .pipe(
                            map((users: any[]) => {
                                console.log(users);
                                users = users.map((user) => {
                                    user['status'] = 'on';
                                    return user;
                                })
                                return SetUsers( { users });
                            }
                        )
                    )}
                )
            ));

    public getUser$: Observable<Action> = createEffect(
        () => 
        this.actions$.pipe(
            ofType(GetUser),
            switchMap(({id}) => {
                return this.store.pipe(
                    select(selectUser, id)
                );
            })
        ));

    public getUserStatus: Observable<Action> = createEffect(() => 
        this.actions$.pipe(
            ofType(GetUserStatus),
            switchMap(({id}) => {
                return this.store.pipe(
                    select(GetUserStatus, id)
                );
            })
        )
    )
    
}