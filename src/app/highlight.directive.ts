import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  // @HostListener("click") onClicks(){
  //   this.color("green")
  // }

  // @HostListener("dblclick") onDoubleClicks(){
  //   this.color("null")
  // }

  
  // private color(action: 'green){
  //   this.elem.nativeElement.style.color=action;
  // }
}

