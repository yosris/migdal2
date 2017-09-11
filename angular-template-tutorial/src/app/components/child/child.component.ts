
import {Component, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'mg-child',
  template: `
  <h1>
    Hello i'm child component
  </h1>
  <p>
    {{message}}
  </p>
  <button (click)="passToParent();">
    Click me to pass data to parent
  </button>
  `
})
export class ChildComponent {
  @Input('messageFromParent') public message : string = '';
  @Output() childButtonClicked : EventEmitter<string> = new EventEmitter();

  public passToParent(){
    this.childButtonClicked.emit('hello from child');
  }

  public messageToTemplateVariable() : string{
    return 'display text to template refrenace variable';
  }
}
