import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LogState } from '../../../../../store/states';
import { Store } from '@ngrx/store';
import * as actions from '../../../../../store/logger.actions';

@Component({
  selector: 'app-complex-son',
  templateUrl: './complex-son.component.html',
  styleUrls: ['./complex-son.component.scss']
})
export class ComplexSonComponent implements OnInit, OnChanges {
  @Input() myNum: number;

  constructor(private store: Store<LogState>) {
    console.log('constructor of ComplexSonComponent');
    this.store.dispatch(actions.createLog({console: 'constructor of ComplexSonComponent'}));
  }

  ngOnInit() {
    console.log( 'init of ComplexSonComponent , myNum is: ' + this.myNum);
    this.store.dispatch(actions.createLog({console: 'init of ComplexSonComponent , myNum is: ' + this.myNum}));
    setTimeout(() => {
      this.myNum = 15;
    }, 5000);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ComplexSonComponent', changes);
    this.store.dispatch(actions.createLog({console: 'on changes of ComplexSonComponent'}));
  }
}
