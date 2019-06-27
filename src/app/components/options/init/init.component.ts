import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';
import { ComponentsState } from '../../../interfaces/interfaces';
import { SimpleComponent } from './simple/simple.component';
import { CreateComponentsService } from '../../../services/create-components/create-components.service';
import * as actions from '../../../store/logger.actions';
import { ParentComponent } from './parent/parent/parent.component';
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
    }, {
      case: 'Prent',
      component: ParentComponent,
    }
  ];
  constructor(private store: Store<LogState>, private componetCreator: CreateComponentsService) { }

  ngOnInit() {
  }

  createComponent(com: ComponentsState) {
    this.store.dispatch(actions.newCase({tittle: com.case}));
    this.componetCreator.newComponent(com.component, this.container);
  }

}
