import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogState } from '../../../store/states';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private store: Store<LogState>) { }

  ngOnInit() {
  }

}
