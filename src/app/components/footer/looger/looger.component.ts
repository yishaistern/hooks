import { Component, OnInit } from '@angular/core';
import { LogState, AppState } from '../../../store/states';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../store/logger.reducer';
import { CreateComponentsService } from '../../../services/create-components/create-components.service';
@Component({
  selector: 'app-looger',
  templateUrl: './looger.component.html',
  styleUrls: ['./looger.component.scss']
})
export class LoogerComponent implements OnInit {
  state: Observable<LogState>;
  constructor(private store: Store<AppState>, private cretae: CreateComponentsService) { }

  ngOnInit() {
    this.state = this.store.pipe(select(fromRoot.selectFeatureCount));
  }

}
