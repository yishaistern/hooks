import { Component, OnInit,  DoCheck, KeyValueDiffers } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-simple-check',
  templateUrl: './simple-check.component.html',
  styleUrls: ['./simple-check.component.scss']
})
export class SimpleCheckComponent implements OnInit, DoCheck {
  differ: any = {};
  myCompany = {
    a: 6
  };
  constructor(private store: Store<LogState>, private differs: KeyValueDiffers) {
    console.log('constructor of SimpleCheckComponent');
    this.differ = this.differs.find(this.myCompany).create();
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleCheckComponent'}));
  }

  ngOnInit() {
    console.log('init of SimpleCheckComponent');
    this.store.dispatch(actions.createLog({console: 'init of SimpleCheckComponent'}));
    setTimeout(() => {
      this.myCompany = {
        a: 5
      };
    }, 3000);
    setTimeout(() => {
      this.myCompany.a = 18;
    }, 5000);
  }

  ngDoCheck() {
    console.log('DoCheck of SimpleCheckComponent');
    const customerChanges = this.differ.diff(this.myCompany);
    if (customerChanges) {
      // console.log(this.myCompany);
      this.store.dispatch(actions.createLog({console: 'DoCheck after change SimpleCheckComponent'}));
    }
  }

}

