/**
 * Greeting service
 * contains the array of greetings
 * get the greetings array and push new item to the array
 */

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class GreetingService{
  public greetingsSubject : Subject<string[]> = new Subject();
  private _greetings : string[] = [];

  public addGreeting(greet : string) : void {
    this._greetings.push(greet);
    this.greetingsSubject.next(this._greetings);
  }

  public getGreetings() : string[] {
    return this._greetings;
  }

  public deleteGreeting(index : number) {
    const newGreetings : string[] = [];
    for(let i=0; i<this._greetings.length; i++) {
      if(i === index)continue;
      newGreetings.push(this._greetings[i]);
    }
    this._greetings = newGreetings;
    this.greetingsSubject.next(this._greetings);
  }
}
