import { Component, OnInit, OnChanges, SimpleChanges, Input, KeyValueDiffers, DoCheck } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-parent-check',
  templateUrl: './parent-check.component.html',
  styleUrls: ['./parent-check.component.scss']
})
export class ParentCheckComponent implements OnInit, DoCheck {
  differ: any = {};
  myCompany = {
    a: 6
  };
  constructor(private store: Store<LogState>, private differs: KeyValueDiffers) {
    console.log('constructor of ParentCheckComponent');
    this.differ = this.differs.find(this.myCompany).create();
    this.store.dispatch(actions.createLog({console: 'constructor of ParentCheckComponent'}));
  }

  ngOnInit() {
    console.log('init of ParentCheckComponent');
    this.store.dispatch(actions.createLog({console: 'init of ParentCheckComponent'}));
    setTimeout(() => {
      this.myCompany = {
        a: 5
      };
    }, 3000);
  }
  ngDoCheck() {
    console.log('DoCheck of SimpleCheckComponent');
    const customerChanges = this.differ.diff(this.myCompany);
    if (customerChanges) {
      console.log(this.myCompany);
      this.store.dispatch(actions.createLog({console: 'DoCheck after change SimpleCheckComponent'}));
    }
  }
}
