/**
 * this contains the routing definition for the todo task
 */

import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'tasks/:id', component: TaskDetailsComponent},
      {path: 'tasks', component: TaskListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutesModule{

}
