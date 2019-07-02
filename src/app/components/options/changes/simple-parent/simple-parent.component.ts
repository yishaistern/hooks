import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';
@Component({
  selector: 'app-simple-parent',
  templateUrl: './simple-parent.component.html',
  styleUrls: ['./simple-parent.component.scss']
})
export class SimpleParentComponent implements OnInit, OnChanges {

  constructor(private store: Store<LogState>) {
    console.log('constructor of SimpleParentComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleParentComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleParentComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleParentComponent'}));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleParentComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on init of SimpleParentComponent'}));
  }
}
