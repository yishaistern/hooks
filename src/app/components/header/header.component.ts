import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
  constructor() { }
  
  ngOnInit() {
  }

}
