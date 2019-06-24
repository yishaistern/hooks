import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LogState, AppState } from '../../store/states';
import { Subscription, Observable } from 'rxjs';
import * as fromRoot from '../../store/logger.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private subsciption: Subscription;
  private configArr = [
    {title: 'onInit', link: '/init'},
    {title: 'b', link: '/b'},
    {title: 'c', link: '/b'},
    {title: 'onChanges', link: '/change'},
    {title: 'e', link: '/b'},
    {title: 'f', link: '/b'},
    {title: 'g', link: '/b'},
    {title: 'h', link: '/b'},
  ];
  constructor( private store: Store<AppState>) { }

  state: Observable<LogState>;
  ngOnInit() {
    this.state = this.store.pipe(select(fromRoot.selectFeatureCount));
  }

}
