import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  public dataPage = [
    {
      routerLink: './dashboard',
      name: 'Dashboard',
      icon: 'bar_chart_4_bars'
    },
    {
      routerLink: './category',
      name: 'Category',
      icon: 'category'
    },
    {
      routerLink: './product',
      name: 'Products',
      icon: 'dataset'
    },
    {
      routerLink: './orders',
      name: 'Orders',
      icon: 'receipt_long'
    },
  ]

  constructor() { }

  public isSideNavOpen: boolean = false;

  public onClick() {
    console.log('onclick')
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  ngOnInit(): void {
  }

}
