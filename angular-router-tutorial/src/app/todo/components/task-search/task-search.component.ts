/**
 * this component simply changes the url
 * when the user submits the form
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'task-search',
  template: `
  <form (ngSubmit)="searchSubmitted()">
    <input type="text" placeholder="Search" [(ngModel)]="search" name="search"/>
    <button type="submit">
      Submit
    </button>
  </form>
  `
})
export class TaskSearchComponent{
  public search : string = '';

  constructor(private _router : Router){

  }

  searchSubmitted(){
    this._router.navigateByUrl(`/tasks?search=${this.search}`);
  }
}
