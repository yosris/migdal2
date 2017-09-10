/**
 * contains the form, with input, submit button
 * adds new greeting to the array greetings
 */

import {Component} from '@angular/core';
import {GreetingService} from '../../services/greeting.service';

@Component({
  selector: 'mg-greeting-form',
  templateUrl: './greeting-form.component.html'
})
export class GreetingFormComponent {
  public greetingInput : string = '';

  constructor(private _greetingService : GreetingService){

  }

  public addGreeting(){
    this._greetingService.addGreeting(this.greetingInput);
  }
}
