import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../../../store/states';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  constructor(private store: Store<LogState>) {
    console.log(3);
    this.store.dispatch(actions.createLog({console: 'constructor of SonComponent'}));
   }

  ngOnInit() {
    console.log(4);
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SonComponent'}));
  }

}
