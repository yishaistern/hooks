import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';
import { ComponentsState } from '../../../interfaces/interfaces';
import { CreateComponentsService } from '../../../services/create-components/create-components.service';
import * as actions from '../../../store/logger.actions';
import { SimpleChangesComponent } from './simple-changes/simple-changes.component';
import { SimpleParentComponent } from './simple-parent/simple-parent.component';
import { ComplexParentComponent } from './complex-parent/complex-parent.component';
import { ComplexInteractionComponent } from './complex-interaction/complex-interaction.component';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit {
  componentsArr: ComponentsState[] = [
    {
      case: 'Simple',
      component: SimpleChangesComponent,
    }, {
      case: 'parent',
      component: SimpleParentComponent
    }, {
      case: 'complex parent',
      component: ComplexParentComponent
    }, {
      case: 'complex inteaction',
      component: ComplexInteractionComponent
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
