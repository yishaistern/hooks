import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../../../store/states';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-son-lop',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonLopComponent implements OnInit {
  @Input() index: number;
  constructor(private store: Store<LogState>) {
    console.log('constructor of SonComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of SonComponent ' + this.index}));
   }

  ngOnInit() {
    console.log('ngOnInit of SonComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SonComponent ' + this.index}));
  }

}
