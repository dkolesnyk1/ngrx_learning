import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable, ReplaySubject, Subject } from 'rxjs';
import { multicast } from 'rxjs/internal/operators/multicast';
import { fetchUsers, SetUser } from 'src/app/store/actions/users.actions';
import { getSelectedUser, selectUserList } from 'src/app/store/selectors/user.selector';
import { IUser } from 'src/app/utils/interfaces/user.intrerface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private store: Store) { }
  public users$: Observable<IUser[]>;
  public addedUser$: Observable<IUser>;

  ngOnInit(): void {
    this.users$ = this.store.pipe(
      select(selectUserList)
    );
    this.addedUser$ = this.store.pipe(
      select(getSelectedUser)
    );
    this.store.dispatch(fetchUsers());
  }

  addUser() {
    this.store.dispatch(SetUser( {user: { id: 3000, status: 'lol'}} ));

  }

}
