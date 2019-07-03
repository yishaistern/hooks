import { Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck, ViewContainerRef,
  ViewChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';
import { CreateComponentsService } from '../../../../services/create-components/create-components.service';
import { SonAfterComponent } from './son-after/son-after.component';

@Component({
  selector: 'app-parent-after',
  templateUrl: './parent-after.component.html',
  styleUrls: ['./parent-after.component.scss']
})
export class ParentAfterComponent implements OnInit,  AfterViewChecked, AfterViewInit, DoCheck, AfterContentChecked, AfterContentInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private store: Store<LogState>, private componetCreator: CreateComponentsService) {
    // this.store.dispatch(actions.createLog({console: 'constructor of ParentAfterComponent'}));
    console.log('constructor of ParentAfterComponent');
  }

  ngOnInit() {
    // this.componetCreator.newComponent(SonAfterComponent, this.container);
    console.log('ngOnInit of ParentAfterComponent');
    // this.store.dispatch(actions.createLog({console: 'ngOnInit of ParentAfterComponent'}));

  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked of ParentAfterComponent');
    // this.store.dispatch(actions.createLog({console: 'ngAfterViewChecked of ParentAfterComponent'}));
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit of ParentAfterComponent');
    // this.store.dispatch(actions.createLog({console: 'ngAfterViewInit of ParentAfterComponent'}));
  }

  ngDoCheck() {
    console.log('ngDoCheck of ParentAfterComponent');
  }

  load() {
    this.store.dispatch(actions.createLog({console: 'load img of ParentAfterComponent'}));
  }
  ngAfterContentChecked() {
    // this.store.dispatch(actions.createLog({console: 'ngAfterContentChecked of ParentAfterComponent'}));
    console.log('ngAfterContentChecked of ParentAfterComponent');
  }
  ngAfterContentInit() {
    // this.store.dispatch(actions.createLog({console: 'ngAfterContentInit of ParentAfterComponent'}));
    console.log('ngAfterContentInit of ParentAfterComponent');
  }
}
