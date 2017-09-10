/**
 * Greeting service
 * contains the array of greetings
 * get the greetings array and push new item to the array
 */

import {Injectable} from '@angular/core';

@Injectable()
export class GreetingService{
  private _greetings : string[] = [];

  public addGreeting(greet : string) : void {
    this._greetings.push(greet);
  }

  public getGreetings() : string[] {
    return this._greetings;
  }
}
