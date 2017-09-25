/**
 * this contains the components and services to display todo task
 * The routing for the module is located at the TodoRoutesModule
 */

import {NgModule} from "@angular/core";
import {TaskService} from "./services/task.service";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TodoRoutesModule} from "./todo-routes.module";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {TaskSearchComponent} from "./components/task-search/task-search.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  providers: [TaskService],
  declarations: [TaskDetailsComponent, TaskListComponent, TaskSearchComponent],
  imports: [
    TodoRoutesModule,
    CommonModule,
    HttpModule,
    FormsModule
  ]
})
export class TodoModule{

}
