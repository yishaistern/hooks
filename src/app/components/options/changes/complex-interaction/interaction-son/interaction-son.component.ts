import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';
@Component({
  selector: 'app-interaction-son',
  templateUrl: './interaction-son.component.html',
  styleUrls: ['./interaction-son.component.scss']
})
export class InteractionSonComponent implements OnInit, OnChanges {
  flagger: boolean;
  @Input() myNum: number;
  @Input() set myFlag(a: boolean) {
    console.log('on input change myFlag of InteractionSonComponent');
    this.store.dispatch(actions.createLog({console: 'on input change myFlag of InteractionSonComponent'}));
    this.flagger = a;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes of InteractionSonComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of InteractionSonComponent'}));
  }
  constructor(private store: Store<LogState>) {
    console.log('constructor of InteractionSonComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of InteractionSonComponent'}));
  }
  
  ngOnInit() {
    console.log('init of InteractionSonComponent');
    this.store.dispatch(actions.createLog({console: 'init of InteractionSonComponent'}));
  }
  
}
