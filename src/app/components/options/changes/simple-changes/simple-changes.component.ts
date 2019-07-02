import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';
@Component({
  selector: 'app-simple-changes',
  templateUrl: './simple-changes.component.html',
  styleUrls: ['./simple-changes.component.scss']
})
export class SimpleChangesComponent implements OnInit, OnChanges {

  constructor(private store: Store<LogState>) {
    console.log('constructor of SimpleChangesComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleChangesComponent'}));
  }

  ngOnInit() {
    console.log('constructor of SimpleChangesComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleChangesComponent'}));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('constructor of SimpleChangesComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnChanges of SimpleChangesComponent'}));
  }
}
