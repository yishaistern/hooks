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

    this.store.dispatch(actions.createLog({console: 'on changes myFlag of InteractionSonComponent'}));
    this.flagger = a;
  }
  constructor(private store: Store<LogState>) {
    this.store.dispatch(actions.createLog({console: 'constructor of InteractionSonComponent'}));
  }

  ngOnInit() {
    console.log('init of InteractionSonComponent');
    this.store.dispatch(actions.createLog({console: 'init of InteractionSonComponent'}));
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('InteractionSonComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of InteractionSonComponent'}));
  }
}
