import { Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-son-after',
  templateUrl: './son-after.component.html',
  styleUrls: ['./son-after.component.scss']
})
export class SonAfterComponent implements OnInit, AfterViewChecked, AfterViewInit, DoCheck {
  b = 'a';
  showImg = true;
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of SonAfterComponent'}));
  }

  ngOnInit() {
    console.log('ngOnInit of SonAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngOnInit of SonAfterComponent'}));
    
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked of SonAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewChecked of SonAfterComponent'}));
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit of SimpleAfterComponent');
    this.store.dispatch(actions.createLog({console: 'ngAfterViewInit of SonAfterComponent'}));
  }

  ngDoCheck() {
    console.log('ngDoCheck of SonAfterComponent');
  }

  
}
