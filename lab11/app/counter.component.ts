import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <button (click) = "decreaseByOne()">-</button>
    <span>{{counterValue}}</span>
    <button (click) = "increaseByOne()">+</button>
  `,
  styles: [`
      input, button, span{
      margin-right: 5px;
    }
  `]
})
export class CounterComponent implements OnInit {
  @Input() counterValue;
  @Output() counterChange = new EventEmitter();
  // public componentCounterValue;
  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {
  }

  decreaseByOne() {
    // this.counterValue = parseInt(this.counterValue, 10) - 1;
    this.counterChange.emit(--this.counterValue);
  }

  increaseByOne() {
    // this.counterValue = parseInt(this.counterValue, 10) + 1;
    this.counterChange.emit(++this.counterValue);
  }

}
