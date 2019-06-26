import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';
import { ComponentsState } from '../../../interfaces/interfaces';
import { SimpleComponent } from './simple/simple.component';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  componentsArr: ComponentsState[] = [
    {
      case: 'Simple',
      component: SimpleComponent,
    }
  ];
  constructor(private store: Store<LogState>) { }

  ngOnInit() {
  }

}
