import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-resize-check',
  templateUrl: './resize-check.component.html',
  styleUrls: ['./resize-check.component.scss']
})
export class ResizeCheckComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    console.log('resize is consoling me');
  }

}
