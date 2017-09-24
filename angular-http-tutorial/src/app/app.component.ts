import { Component } from '@angular/core';
import {TaskService} from "./services/task.service";
import {Task} from "./models/task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // public tasks : Task[] = new Array();
  public tasks : Task[] = [];

  constructor(private _taskService : TaskService){
    _taskService.getAllTasks().subscribe((tasks : Task[]) => {
      this.tasks = tasks;
    })
  }
}
