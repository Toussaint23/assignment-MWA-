import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 60;
  public componentCounterValue = this.counter;
  title = 'app';
  showMessage(value) {
     this.componentCounterValue = value;
  }
}
