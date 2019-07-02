import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../../store/states';
import * as actions from '../../../../store/logger.actions';
@Component({
  selector: 'app-parent-for',
  templateUrl: './parent-for.component.html',
  styleUrls: ['./parent-for.component.scss']
})
export class ParentForComponent implements OnInit {
  public arr = [ 0, 1 ];
  constructor(private store: Store<LogState>) {
    console.log('constructor of ParentForComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of ParentForComponent'}));
   }

  ngOnInit() {
    console.log('ngOnInit of ParentForComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of ParentForComponent'}));
  }


}
