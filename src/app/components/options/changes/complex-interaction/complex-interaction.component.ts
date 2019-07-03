import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogState } from '../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/logger.actions';

@Component({
  selector: 'app-complex-interaction',
  templateUrl: './complex-interaction.component.html',
  styleUrls: ['./complex-interaction.component.scss']
})
export class ComplexInteractionComponent implements OnInit, OnChanges {
  myNum = 10;
  myFlag = false;
  constructor(private store: Store<LogState>) {
    console.log('constructor of ComplexInteractionComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of ComplexInteractionComponent'}));
  }

  ngOnInit() {
    console.log('init of ComplexInteractionComponent');
    this.store.dispatch(actions.createLog({console: 'init of ComplexInteractionComponent'}));
    setTimeout(() => {
      this.myNum = 25;
    }, 3500);
    setTimeout(() => {
      this.myFlag = true;
    }, 3000);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ComplexInteractionComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on init of ComplexInteractionComponent'}));
  }
}
