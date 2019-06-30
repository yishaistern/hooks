import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';
@Component({
  selector: 'app-complex-parent',
  templateUrl: './complex-parent.component.html',
  styleUrls: ['./complex-parent.component.scss']
})
export class ComplexParentComponent implements OnInit, OnChanges {
  myNum = 10;
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleParentComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleParentComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleParentComponent'}));
    setTimeout(() => {
      this.myNum = 25;
    }, 5000);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('SimpleParentComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on init of SimpleParentComponent'}));
  }
}
