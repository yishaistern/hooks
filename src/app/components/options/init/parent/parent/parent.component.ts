import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../../../store/states';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private store: Store<LogState>) {
    console.log('constructor of ParentComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of ParentComponent'}));
   }

  ngOnInit() {
    console.log('ngOnInit of ParentComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of ParentComponent'}));
  }

  load() {
    console.log('img load in of ParentComponent');
    this.store.dispatch(actions.createLog({console: 'img load in of ParentComponent'}));
  }

}
