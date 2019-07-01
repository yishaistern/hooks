import { Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-parent-after',
  templateUrl: './parent-after.component.html',
  styleUrls: ['./parent-after.component.scss']
})
export class ParentAfterComponent implements OnInit,  AfterViewChecked, AfterViewInit, DoCheck {
  b = 'a';
  showImg = true;
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of ParentAfterComponent'}));
  }

  ngOnInit() {
    console.log('ngOnInit of ParentAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of ParentAfterComponent'}));
   
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked of ParentAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewChecked of ParentAfterComponent'}));
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit of ParentAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewInit of ParentAfterComponent'}));
  }

  ngDoCheck() {
    console.log('ngDoCheck of ParentAfterComponent');
  }

  load() {
    this.store.dispatch(actions.createLog({console: 'load img of ParentAfterComponent'}));
  }
}
