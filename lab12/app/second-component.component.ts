import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <h1>Array with *ngFor</h1>
    <ul>
      <li *ngFor="let value of myArray;">{{value}}</li>
    </ul>
    <h1>My visibility directive</h1>
    <div appMyVisibility [myVisibility]="false">I am visible...</div>
    <h1>My color directive</h1>
    <div appMyNewColor newColor = 'red' (msg)="showMessage($event)">Click me please </div>
    <p>{{message}}</p>
  `,
  styles: []
})
export class SecondComponentComponent implements OnInit {
  @Input() myArray: String[];
  message: String;
  constructor() {}

  ngOnInit() {
  }

  showMessage(value) {
    this.message = value;
  }

}
