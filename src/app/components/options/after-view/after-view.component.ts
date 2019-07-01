import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentsState } from '../../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';
import { CreateComponentsService } from '../../../services/create-components/create-components.service';
import { SimpleAfterComponent } from './simple-after/simple-after.component';
import { ParentAfterComponent } from './parent-after/parent-after.component';
import { ParentCreateAfterComponent } from './parent-create-after/parent-create-after.component';
import * as actions from '../../../store/logger.actions';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent implements OnInit {

  componentsArr: ComponentsState[] = [
    {
      case: 'simple',
      component: SimpleAfterComponent
    },
    {
      case: 'parent',
      component: ParentAfterComponent
    },
    {
      case: 'dynamic',
      component: ParentCreateAfterComponent
    }
  ];
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private store: Store<LogState>, private componetCreator: CreateComponentsService) { }

  ngOnInit() {
  }
  createComponent(com: ComponentsState) {
    this.store.dispatch(actions.newCase({tittle: com.case}));
    this.componetCreator.newComponent(com.component, this.container);
  }
}
