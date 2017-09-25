/**
 * this component will display details about a single task
 * we are getting the id param from the url by injecting the ActivatedRoute
 * and subscribing to the params observable
 * in the params observable we are getting the params including the id and we are using
 * the service to get a single task from the server.
 */

import {Component} from "@angular/core";
import {Task} from "../../models/task";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../services/task.service";
@Component({
  template: `
  <h1>
    {{task?.title}}
  </h1>
  <p>
    {{task?.description}}
  </p>
  <p>
    {{task?.id}}
  </p>
  <p>
    {{task?.user}}
  </p>
  <p>
    {{task?.when.toISOString()}}
  </p>
  `
})
export class TaskDetailsComponent{
  public task : Task = null;

  constructor(private _activatedRoute : ActivatedRoute, private _taskService : TaskService){
    _activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      _taskService.getSingleTask(id).subscribe((task : Task) => {
        this.task = task;
      });
    })
  }
}
