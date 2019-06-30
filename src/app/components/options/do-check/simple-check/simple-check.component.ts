import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-simple-check',
  templateUrl: './simple-check.component.html',
  styleUrls: ['./simple-check.component.scss']
})
export class SimpleCheckComponent implements OnInit, DoCheck {
  cc = 14;
  hero = "qq";
  constructor(private store: Store<LogState>) {
    console.log('constructor of SimpleCheckComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleCheckComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleCheckComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleCheckComponent'}));
    this.cc = 18;
  }

  ngDoCheck() {
    console.log('DoCheck of SimpleCheckComponent');
    this.store.dispatch(actions.createLog({console: 'DoCheck of SimpleCheckComponent'}));
  }

}

