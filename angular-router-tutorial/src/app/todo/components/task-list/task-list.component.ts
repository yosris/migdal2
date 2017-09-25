/**
 * this component displays the list of tasks from the server
 * it can optionally get a query param of search so we are subscribing
 * to the observable of the query params and we will jump when the query params change
 * and will use the service to search in the list of tasks.
 */

import {Component} from "@angular/core";
import {Task} from "../../models/task";
import {TaskService} from "../../services/task.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  template: `
  <task-search></task-search>
  <ul>
    <li *ngFor="let task of tasks" (click)="gotoTaskDetails(task)">
      {{task.title}}
    </li>
  </ul>
  `
})
export class TaskListComponent{
  public tasks : Task[] = [];

  constructor(private _taskService : TaskService, private _router : Router, private _activatedRoute : ActivatedRoute){
    _activatedRoute.queryParams.subscribe((params) => {
      const search = params['search'];
      _taskService.getAllTasks(search).subscribe((tasks : Task[]) => {
        this.tasks = tasks;
      });
    })
  }

  gotoTaskDetails(task : Task){
    this._router.navigateByUrl(`/tasks/${task.id}`);
  }
}
