import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectConfig } from './store/selectors/config.selector';
import { IGlobalConfig } from './utils/interfaces/app-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-practice';
  constructor(private store: Store) {}

  public config: Observable<IGlobalConfig>;

  ngOnInit() {
     this.store.pipe(select(selectConfig)).subscribe((config) => {
      console.log(config);      
    });
    
  }
}
