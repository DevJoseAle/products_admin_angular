import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-add-button',
  templateUrl: './list-add-button.component.html',
  styleUrls: ['./list-add-button.component.css']
})
export class ListAddButtonComponent implements OnInit {

  @Input()
  public routerLink: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
