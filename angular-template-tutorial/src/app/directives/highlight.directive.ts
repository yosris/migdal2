/**
 * highlight directive
 */

import {Directive, Input, ElementRef, HostListener} from '@angular/core';
// import * as angularCore from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') color : string = 'blue';


  @HostListener('mouseover')
  onMouseOver(){
    this._element.nativeElement.style.backgroundColor = this.color;
  }

  constructor(private _element : ElementRef){
  }
}
