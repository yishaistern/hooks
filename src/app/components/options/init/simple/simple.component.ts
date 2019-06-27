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

  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleComponent'}));
  }

  ngOnInit() {
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SimpleComponent'}));
  }

}
