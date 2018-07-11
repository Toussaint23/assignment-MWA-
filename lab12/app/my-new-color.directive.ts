import { Directive, Input, ElementRef, Renderer2, Host, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyNewColor]'
})
export class MyNewColorDirective {
  @Input() newColor: String;
  @Output() msg = new EventEmitter();
  constructor(private element: ElementRef, private render2: Renderer2) { }

  private changeColor(color: String) {
    this.render2.setStyle(this.element.nativeElement, 'color', color);
  }

  @HostListener('click') onclick() {
    this.changeColor(this.newColor);
    this.msg.emit(`An element changed its color to ${this.newColor}`);
  }
}
