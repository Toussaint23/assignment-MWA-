import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public parentArray: String[];
  constructor() {
     this.parentArray = ['Toussaint', 'Jean', 'Joseph', 'Reginald', 'Reggie', 'Xavier'];
  }
}
