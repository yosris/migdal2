import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public stamNumber : number = 10;
  public stamStringInP : string = 'hello binding to dom properties';
  public twoWayBinding : string = 'initiating the text input';
  public twoWayBinding2 : string = 'initiating the text input';

  public randomNumber() : number {
    return Math.random();
  }

  public commFromTemplateToClass(){
    alert('hello from template');
  }

  public passingEvent(event) {
    alert(event.currentTarget.innerText);
  }
}
