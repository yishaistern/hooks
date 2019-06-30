import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';

@Component({
  selector: 'app-complex-son',
  templateUrl: './complex-son.component.html',
  styleUrls: ['./complex-son.component.scss']
})
export class ComplexSonComponent implements OnInit, OnChanges {
  @Input() myNum: number;
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleSonComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleSonComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleSonComponent'}));
    setTimeout(() => {
      this.myNum = 15;
    }, 1000);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleSonComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of SimpleSonComponent'}));
  }
}
