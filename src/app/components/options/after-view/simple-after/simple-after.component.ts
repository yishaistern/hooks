import { Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-simple-after',
  templateUrl: './simple-after.component.html',
  styleUrls: ['./simple-after.component.scss']
})
export class SimpleAfterComponent implements OnInit,  AfterViewChecked, AfterViewInit, DoCheck {
  b = 'a';
  showImg = true;
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of SimpleAfterComponent'}));
  }

  ngOnInit() {
    console.log('ngOnInit of SimpleAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SimpleAfterComponent'}));
    setTimeout(() => {
      this.showImg = false;
    }, 4000);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked of SimpleAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewChecked of SimpleAfterComponent'}));
    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit of SimpleAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewInit of SimpleAfterComponent'}));
  }

  ngDoCheck() {
    console.log('ngDoCheck of SimpleAfterComponent');
  }

  load() {
    this.store.dispatch(actions.createLog({console: 'load img of SimpleAfterComponent'}));
  }
}
