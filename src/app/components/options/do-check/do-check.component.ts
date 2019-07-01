import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';
import { ComponentsState } from '../../../interfaces/interfaces';
import { CreateComponentsService } from '../../../services/create-components/create-components.service';
import * as actions from '../../../store/logger.actions';
import { SimpleCheckComponent } from '../do-check/simple-check/simple-check.component';
import { ParentCheckComponent } from './parent-check/parent-check.component';
import { ResizeCheckComponent } from './resize-check/resize-check.component';
@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements OnInit {

  componentsArr: ComponentsState[] = [
    {
      case: 'Simple',
      component: SimpleCheckComponent,
    }, {
      case: 'Parent',
      component: ParentCheckComponent
    }, {
      case: 'resize',
      component: ResizeCheckComponent
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
