import { Component, OnInit, OnChanges, SimpleChanges, Input, KeyValueDiffers, DoCheck } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-son-check',
  templateUrl: './son-check.component.html',
  styleUrls: ['./son-check.component.scss']
})
export class SonCheckComponent implements OnInit, OnChanges, DoCheck {
  flagger: boolean;
  @Input() myNum: any;
  differ: any = {};
  constructor(private store: Store<LogState>, private differs: KeyValueDiffers) {
    console.log('constructor of SimpleCheckComponent');
    
    this.store.dispatch(actions.createLog({console: 'constructor of SonCheckComponent'}));
  }

  ngOnInit() {
    console.log('init of SonCheckComponent');
    this.store.dispatch(actions.createLog({console: 'init of SonCheckComponent'}));
    this.differ = this.differs.find(this.myNum).create();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('SonCheckComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of SonCheckComponent'}));
  }
  ngDoCheck() {
    console.log('DoCheck of SonCheckComponent');
    const customerChanges = this.differ.diff(this.myNum);
    if (customerChanges) {
      console.log(this.myNum);
      this.store.dispatch(actions.createLog({console: 'DoCheck after change SonCheckComponent'}));
    }
  }
}
