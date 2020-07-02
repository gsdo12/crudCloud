import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: []

  constructor(
    private container: ViewContainerRef,
     private template:TemplateRef<any>
    ) {}
  ngOnInit(): void {
  for(let number of this.numbers){
    this.container.createEmbeddedView(
      this.template, {$implicit:number});
  }
  }

}
