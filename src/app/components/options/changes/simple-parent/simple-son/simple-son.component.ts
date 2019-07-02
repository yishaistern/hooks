import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';

@Component({
  selector: 'app-simple-son',
  templateUrl: './simple-son.component.html',
  styleUrls: ['./simple-son.component.scss']
})
export class SimpleSonComponent implements OnInit, OnChanges {
  @Input() myNum: number;
  constructor(private store: Store<LogState>) {
    console.log('constructor of SimpleSonComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleSonComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleSonComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleSonComponent'}));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleSonComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of SimpleSonComponent'}));
  }
}
