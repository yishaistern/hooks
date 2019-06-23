import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private configArr = [
    {title: 'a', link: '/b'},
    {title: 'b', link: '/b'},
    {title: 'c', link: '/b'},
    {title: 'd', link: '/b'},
    {title: 'e', link: '/b'},
    {title: 'f', link: '/b'},
    {title: 'g', link: '/b'},
    {title: 'h', link: '/b'},
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
