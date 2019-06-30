import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LogState, AppState } from '../../store/states';
import { Subscription, Observable } from 'rxjs';
import * as fromRoot from '../../store/logger.reducer';
import * as actions from '../../store/logger.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private subsciption: Subscription;
  private configArr = [
    {title: 'onInit', link: '/onInit'},
    {title: 'b', link: '/b'},
    {title: 'c', link: '/b'},
    {title: 'onChanges', link: '/onChanges'},
    {title: 'e', link: '/b'},
    {title: 'doCheck', link: '/doCheck'},
    {title: 'g', link: '/b'},
    {title: 'h', link: '/b'},
  ];
  constructor( private store: Store<AppState>) { }

  state: Observable<LogState>;
  ngOnInit() {
    this.state = this.store.pipe(select(fromRoot.selectFeatureCount));
  }

  route(link) {
    this.store.dispatch(actions.routePage({tittle: link}));
  }

}
