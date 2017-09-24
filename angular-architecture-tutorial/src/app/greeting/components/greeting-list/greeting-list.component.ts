/**
 * display the list of greetings
 */

import {Component} from '@angular/core';
import {GreetingService} from "../../services/greeting.service";

@Component({
  selector: 'mg-greeting-list',
  templateUrl: './greeting-list.component.html',
  styles: [
    `
    li{
      background-color: antiquewhite;
    }
    `
  ]
})
export class GreetingListComponent{
  public greetings : string[] = [];

  constructor(private _greetingService : GreetingService){
    _greetingService.greetingsSubject.subscribe((greetings : string[]) => {
      this.greetings = greetings;
    });

  }

  deleteItem(index : number) {
    this._greetingService.deleteGreeting(index);
  }
}
