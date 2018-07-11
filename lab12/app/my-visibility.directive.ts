import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective implements OnInit {
  @Input('myVisibility') myVisibility;
  constructor(private element: ElementRef, private render2: Renderer2) {}

  ngOnInit() {
    this.render2.setStyle(this.element.nativeElement, 'display', this.setVisibility(this.myVisibility));
  }

  private setVisibility(value: boolean) {
    return (value) ? 'block' : 'none';
  }

}
