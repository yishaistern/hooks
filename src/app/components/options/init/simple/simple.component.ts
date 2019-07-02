import { Component, OnInit } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  dd = false;
  constructor(private store: Store<LogState>) {
    console.log('constructor of SimpleComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleComponent'}));
  }

  ngOnInit() {
    console.log('ngOnInit of SimpleComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SimpleComponent'}));
    const y = document.getElementById('checkOne');
    const x = document.getElementById('checkTwo');
    console.log('checkOne is: ' + y);
    this.store.dispatch(actions.createLog({console: 'checkOne is: ' + y}));
    console.log('checkTwo is: ' + x);
    this.store.dispatch(actions.createLog({console: 'checkTwo is: ' + x}));
  }

}
