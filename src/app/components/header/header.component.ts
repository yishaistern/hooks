import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private gonfigArr = [
    {title: 'a'},
    {title: 'b'},
    {title: 'c'},
    {title: 'd'},
    {title: 'e'},
    {title: 'f'},
    {title: 'g'},
    {title: 'h'},
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
