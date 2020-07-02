import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef ) { 
    el.nativeElement.style.color = 'black'
  }

}
